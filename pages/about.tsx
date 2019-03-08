import * as React from "react"
import EllipsisHead from "../components/ellipsis_head"
import Header, { Page } from '../components/header'
import Footer from "../components/footer";
import autobind from "../lib/autobind";
import ResponsiveContainer from "../components/responsive_container";
import LogoStrip from "../components/logo_strip";
import ContactForm from "../components/contact_form";

interface Props { }
interface State {
  contactFormVisible: boolean
}

class About extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autobind(this);
    this.state = {
      contactFormVisible: false
    };
  }

  toggleContactForm(): void {
    this.setState({ contactFormVisible: !this.state.contactFormVisible });
  }

  render() {
    return (
      <div>
        <EllipsisHead
          title="About Ellipsis" description="Ellipsis is dedicated to helping companies roll out digital transformations by automating workflows in chat."
          canonicalPath={"/about/"}
        />
        <div className="page">
          <div className="bg-blue-fade">
            <Header isHomeVisible={true} onToggleContactForm={this.toggleContactForm} activePage={Page.About} />
            <h1 className="align-c mtn type-white mbn pbxl">This is Ellipsis</h1>
          </div>
          <div className="bg-gray-fade">
            <div className="container container-c ptxxl pbxl narrow-pvxl mobile-ptm">

              <h3 className="align-c mbxxl type-pink type-label">This is a transformation</h3>

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
                  <button type="button" className="button-raw" onClick={this.toggleContactForm}><span className="link">Reach out now</span></button>
                  <span> for a custom proof-of-concept and enterprise-level automation fit to your custom needs.</span>
                </p>

              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white">
            <div className="container container-c pvxxl narrow-pvl mobile-pvn align-c">
              <h3 className="mtn ptxl">Our customers</h3>

              <LogoStrip />
            </div>
          </div>

          <div className="bg-light">
            <div className="container container-c pvxxl narrow-pvl mobile-pvn align-c">
              <h3 className="mtn ptxl">Our investors</h3>

              <div>
                <a href="https://github.com/Bloomberg-Beta/Manual" target="_blank"><img className="mrxl mbxl align-m" src="/static/images/logos/bloomberg_beta400x136.png" width="100" alt="Bloomberg Beta" title="Bloomberg Beta" /></a>
                <a href="http://www.fyrfly.vc/" target="_blank"><img className="mlxl mbxl align-m" src="/static/images/logos/fyrfly912x136.png" width="114" alt="Fyrfly" title="Fyrfly Ventures" /></a>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="container container-c pvxxl narrow-pvl mobile-pvn">
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
                    229 Niagara Street<br />
                    Toronto, Ontario<br />
                    M6J 2L5<br />
                    Canada<br />
                  </p>
                </div>
                <div className="column column-one-quarter" />
              </div>
            </div>
          </div>

          <ContactForm onDone={this.toggleContactForm} isVisible={this.state.contactFormVisible} />
          <Footer />

        </div>
      </div>
    );
  }
}

export default About
