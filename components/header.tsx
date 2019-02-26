import * as React from 'react'
import Link from 'next/link'
import EllipsisLogo from './ellipsis_logo';
import MenuIcon from './menu_icon';

interface Props {
  isHomeVisible: boolean
  activePage?: string
}

interface State {
  expandMenu: boolean
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      expandMenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      expandMenu: !this.state.expandMenu
    });
  }

  render() {
    return (
      <header className="nav">
        <div className="container container-c ptxxl mobile-ptl position-relative">
          <div className="columns pts">
            <div className="column column-one-half type-white">
              <div className="position-relative position-z-popup-trigger">
                <Link href="/"><a className="link-light"><EllipsisLogo height={36} /></a></Link>
              </div>
            </div>
            <div className="column column-one-half align-r type-bold type-label">
              <div className="narrow-display-none">
                {this.props.isHomeVisible ? (
                  <span className="mrxxl align-button "><Link href="/"><a className="link-light">Home</a></Link></span>
                ) : null}
                <span className="mrxxl align-button "><Link prefetch href="/product"><a className="link-light">Product</a></Link></span>
                <span className="mrxxl align-button "><Link prefetch href="/about"><a className="link-light">About</a></Link></span>
                <button type="button" className="button-shrink button-inverted type-label type-bold">Schedule a demo</button>
              </div>
              <div className="narrow-display-only position-relative position-z-popup-trigger">
                <button type="button" className="button-raw type-white" onClick={this.toggleMenu}><MenuIcon open={this.state.expandMenu} /></button>
              </div>
            </div>
          </div>
          <div>
            <div className="position-absolute position-top-left position-top-right narrow-display-only position-z-popup bg-blue-fade">
              <div className={`align-c type-l type-bold type-label ${this.state.expandMenu ? "ptxxxxl pbxxl" : "display-none"}`}>
                {this.props.isHomeVisible ? (
                  <div className="mvxl"><Link href="/"><a className="link-light">Home</a></Link></div>
                ) : null}
                <div className="mvxl"><Link prefetch href="/product"><a className="link-light">Product</a></Link></div>
                <div className="mvxl"><Link prefetch href="/about"><a className="link-light">About</a></Link></div>
                <div className="bg-pink pvs">
                  <button type="button" className="button-shrink button-l button-primary type-label type-bold">Schedule a demo</button>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </header>
    )
  }
}

export default Header
