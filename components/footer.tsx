import * as React from 'react'
import Link from 'next/link'
import EllipsisLogo from './ellipsis_logo'
import TwitterLogo from './twitter_logo';

class Footer extends React.Component {
  render() {
    const year = (new Date()).getFullYear();
    return (
      <footer className="nav container container-c pvxxxl">
        <div className="columns">
          <div className="column column-one-quarter mobile-column-full mobile-align-c mobile-pbl">
            <Link href="/"><a className="link-subtle"><EllipsisLogo height={36} /></a></Link>
          </div>
          <div className="column align-c column-one-half mobile-column-full phxxl mts">
            <div className="mobile-display-none">
              <span className="align-button align-button-s">
                <Link href="https://bot.ellipsis.ai/legal/privacy_policy"><a className="link-subtle" target="legal">Privacy policy</a></Link>
              </span>
            </div>
            <div className="mobile-display-only type-l">
              <div className="mbl">
                <Link href="https://bot.ellipsis.ai/legal/privacy_policy"><a className="link-subtle" target="legal">Privacy policy</a></Link>
              </div>
            </div>
          </div>
          <div className="column column-one-quarter mobile-column-full mobile-mvl align-r mobile-align-c">
            <div className="">
              <a href="https://twitter.com/EllipsisBot" target="twitter" title="@EllipsisBot on Twitter" className="align-button align-button-s">
                <TwitterLogo height={"36"} />
              </a>
            </div>
          </div>
        </div>
        <div className="align-c">
          <span className="align-button align-button-s">&copy; {year} Ellipsis Co.</span>
        </div>
      </footer>
    )
  }
}

export default Footer
