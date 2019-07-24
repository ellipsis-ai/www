import * as React from "react"
import Header, { NavSection } from '../components/header'
import ResponsiveContainer from "../components/responsive_container";
import LogoStrip from "../components/logo_strip";
import Page from "../components/page";

class About extends React.Component {
  render() {
    return (
      <Page
        title="About Ellipsis"
        description="Ellipsis is dedicated to helping companies roll out digital transformations by automating workflows in chat."
        canonicalPath={"/about/"}
        onRender={(pageProps) => (
        <div className="page">
            <div className="bg-eggplant bg-pattern-dot-cobalt">
            <Header isHomeVisible={true} onToggleContactForm={pageProps.toggleContactForm} activeSection={NavSection.About} className="pbn" />
            <div className="container container-c bg-eggplant">
              <h1 className="align-c mvn type-white pts pbm">This is Ellipsis</h1>
            </div>
          </div>
          <div className="bg-mist bg-pattern-x-teal">
            <div className="container container-c bg-mist pvxxl narrow-pvxl mobile-ptm">

              <h3 className="align-c mbxxl color-coral type-label">This is a transformation</h3>

              <ResponsiveContainer>
                <p className="type-xl">
                  A true digital transformation should take you and your team to a happier place.
                </p>

                <p className="type-disabled align-c type-l">· · ·</p>

                <p>
                  Most processes breakdown when they’re cumbersome, time-consuming, and
                  there’s no immediate benefit to your team. While the common adage would
                  have you believe that if a tool isn’t working it’s the user, we secretly
                  suspect this adage was created by enterprise SaaS founders. We know that
                  our clients are working toward smarter, faster, and compliant workplaces.
                  The people on their teams want that, too. That’s why we’re bridging the
                  gap between powerful yet intricate software and the seamless interface
                  your team already enjoys in chat.
                </p>

                <p>
                  We help your teams love your new workflows as much you do by automating
                  as many steps as possible and centralizing these workflows in your existing
                  chat tools. Automation ensures accurate, unified, and efficient reporting
                  that takes a fraction of the time. Adoption is easy because Ellipsis doesn’t
                  require training, new software, or a new UI. Instead, it works out loud in
                  Slack or Microsoft Teams, fostering social proof for new processes.
                </p>

                <p className="type-disabled align-c type-l">· · ·</p>

                <p className="type-l">
                  <span>Happy workflows get done. </span>
                  <button type="button" className="button-raw" onClick={pageProps.toggleContactForm}><span className="link">Reach out now</span></button>
                  <span> for a custom proof-of-concept and enterprise-level automation fit to your custom needs.</span>
                </p>

              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white bg-pattern-dot-cobalt">
            <div className="container container-c pvxl narrow-pvl mobile-pvn align-c bg-white">
              <h3 className="mtn ptxl">Our customers</h3>

              <LogoStrip />
            </div>
          </div>

          <div className="bg-mist bg-pattern-x-coral">
            <div className="container container-c ptxxl pbxl narrow-pvl mobile-pvn align-c bg-mist">
              <h3 className="mtn ptxl">Our investors</h3>

              <div>
                <a href="https://github.com/Bloomberg-Beta/Manual" target="_blank"><img className="mrxl mbxl align-m" src="/static/images/logos/bloomberg_beta400x136.png" width="100" alt="Bloomberg Beta" title="Bloomberg Beta" /></a>
                <a href="http://www.fyrfly.vc/" target="_blank"><img className="mlxl mbxl align-m" src="/static/images/logos/fyrfly912x136.png" width="114" alt="Fyrfly" title="Fyrfly Ventures" /></a>
              </div>
            </div>
          </div>

          <div className="bg-cobalt bg-pattern-dot-teal type-white">
            <div className="container container-c pvxl narrow-pvl mobile-pvn bg-cobalt">
              <h3 className="align-c">Contact</h3>

              <div className="columns">
                <div className="column column-one-quarter" />
                <div className="column column-one-quarter align-c">
                  <h4 className="mbn">Bay Area</h4>
                  <p>
                    101 Jefferson Dr.<br />
                    Menlo Park, California<br />
                    94025<br />
                    USA<br />
                  </p>
                </div>
                <div className="column column-one-quarter align-c">
                  <h4 className="mbn">Toronto</h4>
                  <p>
                    662 King St. West, Suite #1<br />
                    Toronto, Ontario<br />
                    M5V 1M7<br />
                    Canada<br />
                  </p>
                </div>
                <div className="column column-one-quarter" />
              </div>
            </div>
          </div>
        </div>
      )} />
    );
  }
}

export default About
