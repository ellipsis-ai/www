import * as React from 'react'
import Link from 'next/link'
import EllipsisLogo from './ellipsis_logo';
import MenuIcon from './menu_icon';
import autobind from '../lib/autobind';
import debounce from 'debounce'

export enum Page {
  Home = "home",
  About = "about"
}

interface Props {
  isHomeVisible: boolean
  activePage?: Page
  onToggleContactForm: () => void
}

interface State {
  expandMenu: boolean,
  showSolutions: boolean
}

class Header extends React.Component<Props, State> {
  hideSolutions: () => void

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

  linkClassFor(page?: Page) {
    return `link-light type-bold type-label ${page && this.props.activePage === page ? "link-active" : ""}`;
  }

  revealSolutions(): void {
    this.hideSolutions.clear();
    this.setState({
      showSolutions: true
    })
  }

  hideSolutionsNow(): void {
    this.setState({
      showSolutions: false
    });
  }

  renderSolutions() {
    return (
      <div>
        <div><Link href="/static/datasheets/Ellipsis Collibra Data Sheet - 20180723.pdf"><a className="link-light" target="datasheet">Data governance</a></Link></div>
        <div><Link href="/static/datasheets/Ellipsis Fiix Data Sheet - 20181105.pdf"><a className="link-light" target="datasheet">Facility management &amp; CMMS</a></Link></div>
      </div>
    );
  }

  render() {
    return (
      <header className="nav">
        <div className="container container-c pvxxl mobile-pvl position-relative">
          <div className="columns pts">
            <div className="column column-one-half type-white">
              <div className="position-relative position-z-popup-trigger">
                <Link href="/"><a className="link-light"><EllipsisLogo height={36} /></a></Link>
              </div>
            </div>
            <div className="column column-one-half align-r">
              <div className="narrow-display-none">
                {this.props.isHomeVisible ? (
                  <div className="mrxxl align-button "><Link prefetch href="/"><a className={this.linkClassFor(Page.Home)}>Home</a></Link></div>
                ) : null}
                <div className="mrxxl align-button position-relative" onMouseOver={this.revealSolutions} onMouseOut={this.hideSolutions}>
                  <div><a className={this.linkClassFor()}>▼ Solutions</a></div>
                  <div className={`position-absolute position-below-right width-20 align-r pbxl fade-in ${
                    this.state.showSolutions ? "" : "display-none"
                  }`}>
                    {this.renderSolutions()}
                  </div>
                </div>
                {/* <Link prefetch href="/product"><a className={this.linkClassFor(Page.Product)}>Product</a></Link> */}
                <div className="mrxxl align-button "><Link prefetch href="/about/"><a className={this.linkClassFor(Page.About)}>About</a></Link></div>
                {/* <button type="button"
                  className="button-shrink button-inverted type-label type-bold"
                  onClick={this.props.onToggleContactForm}
                >Schedule a demo</button> */}
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
                  <div className="mvxl"><Link prefetch href="/"><a className={this.linkClassFor(Page.Home)}>Home</a></Link></div>
                ) : null}
                <div className="mvxl">
                  <div className="type-label type-white type-gray-light">Solutions</div>
                  {this.renderSolutions()}
                </div>
                <div className="mvxl"><Link prefetch href="/about/"><a className={this.linkClassFor(Page.About)}>About</a></Link></div>
                {/* <div className="bg-pink pvs">
                  <button type="button"
                    className="button-shrink button-l button-primary type-label type-bold"
                    onClick={this.props.onToggleContactForm}
                  >Schedule a demo</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
