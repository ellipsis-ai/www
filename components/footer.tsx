import * as React from 'react'
import Link from 'next/link'
import EllipsisLogo from './ellipsis_logo'
import TwitterLogo from './twitter_logo';

class Footer extends React.Component {
  render() {
    const year = (new Date()).getFullYear();
    return (
      <footer className="nav bg-white bg-pattern-dot-mist pbxxxl border-emphasis-top border-mist">
        <div className="container container-c bg-white ptxxl pbs">
          <div className="columns">
            <div className="column column-one-quarter mobile-column-full mobile-align-c mobile-pbl">
              <Link href="/"><a className="link-subtle"><EllipsisLogo height={56} /></a></Link>
            </div>
            <div className="column align-c column-one-half mobile-column-full phxxl mts">
              <div className="mobile-display-none">
                <span className="align-button align-button-s">
                  <a href="https://bot.ellipsis.ai/legal/privacy_policy" className="link-subtle" target="legal">Privacy policy</a>
                </span>
              </div>
              <div className="mobile-display-only type-l">
                <div className="mbl">
                  <a href="https://bot.ellipsis.ai/legal/privacy_policy" className="link-subtle" target="legal">Privacy policy</a>
                </div>
              </div>
            </div>
            <div className="column column-one-quarter mobile-column-full mobile-mvl align-r mobile-align-c">
              <div className="">
                <a href="https://twitter.com/EllipsisCo" target="twitter" title="@EllipsisCo on Twitter" className="align-button align-button-s">
                  <TwitterLogo height={"36"} />
                </a>
              </div>
            </div>
          </div>
          <div className="align-c">
            <span className="align-button align-button-s">&copy; {year} Ellipsis Co.</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
