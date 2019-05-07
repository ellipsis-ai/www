import * as React from 'react'
import Link from 'next/link'
import EllipsisLogo from './ellipsis_logo';
import MenuIcon from './menu_icon';
import autobind from '../lib/autobind';
import debounce from 'debounce'

export enum NavSection {
  Home = "home",
  About = "about",
  Solutions = "solutions"
}

export enum NavSubsection {
  DataGovernance = "data_governance",
  Cmms = "cmms"
}

interface Props {
  isHomeVisible: boolean
  activeSection?: NavSection
  activeSubsection?: NavSubsection
  onToggleContactForm: () => void
  className?: string
}

interface State {
  expandMenu: boolean,
  showSolutions: boolean
}

type Debounce<T extends Function> = T & ReturnType<typeof debounce>

class Header extends React.Component<Props, State> {
  hideSolutions: Debounce<() => void>

  constructor(props: Props) {
    super(props);
    autobind(this);
    this.state = {
      expandMenu: false,
      showSolutions: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideSolutions = debounce(this.hideSolutionsNow, 500);
  }

  toggleMenu() {
    this.setState({
      expandMenu: !this.state.expandMenu
    });
  }

  linkClassFor(page?: NavSection) {
    return `display-block link-light type-bold type-label ${page && this.props.activeSection === page ? "type-white border-emphasis-bottom border-pink" : "mbxs"}`;
  }

  revealSolutions(): void {
    this.hideSolutions.clear();
    this.setState({
      showSolutions: true
    });
  }

  hideSolutionsNow(): void {
    this.setState({
      showSolutions: false
    });
  }

  renderHomeLink() {
    return (
      <Link prefetch href="/"><a className={this.linkClassFor(NavSection.Home)}>Home</a></Link>
    );
  }

  renderAboutLink() {
    return (
      <Link prefetch href="/about/"><a className={this.linkClassFor(NavSection.About)}>About</a></Link>
    );
  }

  renderSolutions() {
    return (
      <div>
        <div><Link prefetch href="/data_governance/"><a className={`display-block link-light ${
          this.props.activeSubsection === NavSubsection.DataGovernance ? "type-bold type-white" : ""
        }`}>Data governance</a></Link></div>
        <div><Link prefetch href="/cmms/"><a className={`display-block link-light ${
          this.props.activeSubsection === NavSubsection.Cmms ? "type-bold type-white" : ""
        }`}>Facility management &amp; CMMS</a></Link></div>
      </div>
    );
  }

  render() {
    return (
      <header className={`nav pbxxl mobile-pbn ${this.props.className || ""}`}>
        <div className="container container-c position-relative">
          <div className="columns">
            <div className="column column-one-half type-white">
              <div className="position-relative position-z-popup-trigger">
                <div className="display-inline-block bg-cobalt ptl pbs phm mobile-display-none">
                  <Link href="/"><a className="link-light"><EllipsisLogo height={64} /></a></Link>
                </div>
                <div className="display-inline-block bg-cobalt ptm pbxs phs mobile-display-only">
                  <Link href="/"><a className="link-light"><EllipsisLogo height={50} /></a></Link>
                </div>
              </div>
            </div>
            <div className="column column-one-half align-r ptxl">
              <div className="narrow-display-none">
                {this.props.isHomeVisible ? (
                  <div className="phl bg-eggplant align-button">{this.renderHomeLink()}</div>
                ) : null}
                <div className="phl bg-eggplant align-button" onMouseOver={this.revealSolutions} onMouseOut={this.hideSolutions}>
                  <div className="position-relative">
                    <a className={this.linkClassFor(NavSection.Solutions)}><span className="type-s">▼</span> Solutions</a>
                    <div className={
                      `position-absolute position-below-right width-15 align-r pvs phs fade-in bg-blue-fade-light ` +
                      `popup-shadow border-emphasis-top border-emphasis-bottom border-pink mtnegxs ${
                        this.state.showSolutions ? "" : "display-none"
                      }`}>
                      {this.renderSolutions()}
                    </div>
                  </div>
                </div>
                <div className="phl bg-eggplant align-button">{this.renderAboutLink()}</div>
              </div>
              <div className="narrow-display-only position-relative position-z-popup-trigger">
                <button type="button" className="button-raw type-white" onClick={this.toggleMenu}><MenuIcon open={this.state.expandMenu} /></button>
              </div>
            </div>
          </div>
          <div>
            <div className="position-absolute position-top-left position-top-right narrow-display-only position-z-popup bg-blue-fade">
              <div className={`align-c type-l ${this.state.expandMenu ? "ptxxxxl pbxxl" : "display-none"}`}>
                {this.props.isHomeVisible ? (
                  <div className="mvxl">{this.renderHomeLink()}</div>
                ) : null}
                <div className="mvxl">
                  <div className="type-label type-white type-gray-light">Solutions</div>
                  {this.renderSolutions()}
                </div>
                <div className="mvxl">{this.renderAboutLink()}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
