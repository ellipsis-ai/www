import * as React from 'react'
import EllipsisHead from '../components/ellipsis_head';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '../components/contact_form';
import autobind from '../lib/autobind';
import ResponsiveContainer from '../components/responsive_container';
import LogoStrip from '../components/logo_strip';
import MsTeamsLogo from '../components/logos/ms_teams_logo';
import SlackLogo from '../components/logos/slack_logo';
import SMSChatBubble from '../components/logos/sms_chat_bubble';
import EmailIcon from '../components/logos/email_icon';

interface Props {

}

interface State {
  contactFormVisible: boolean
}

class Home extends React.Component<Props, State> {
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
        <EllipsisHead description="Ellipsis.ai helps enterprise companies automate their workflows across multiple tools,  integrated into Slack or Microsoft Teams." />

        <div className="page">
          <div className="bg-blue-fade">
            <Header isHomeVisible={false} onToggleContactForm={this.toggleContactForm} />

            <div id="hero" className="hero align-c ptxxxl narrow-ptxl pbhuge narrow-pbxxxl mobile-ptn mobile-pbs type-white">
              <div className="container container-c">

                <div className="mbxxxxl mobile-pbn">
                  <ResponsiveContainer>
                    <h1 className="">Take the pain out of rolling out new internal&nbsp;workflows</h1>

                    <p className="type-l color-blue-light">
                      Transform your enterprise workplace by automating &amp; centralizing workflows
                      in existing communication tools, whether it’s at your desk or&nbsp;on&nbsp;the&nbsp;go.
                    </p>

                    <div className="align-c mtxl mbxxxxl">
                      <div className="display-inline-block align-m mrxl">
                        <SlackLogo height={40} />
                      </div>
                      <div className="display-inline-block align-m mrs">
                        <MsTeamsLogo height={32} />
                      </div>
                      <div className="display-inline-block align-m mlxl mrs">
                        <SMSChatBubble height={32} />
                      </div>
                      <div className="display-inline-block align-m mlxl">
                        <EmailIcon height={32} />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="button button-l button-primary type-label"
                      onClick={this.toggleContactForm}
                    >Get a proof of concept</button>

                  </ResponsiveContainer>
                </div>
              </div>
            </div>

          </div>

          <div className="">

            <div id="benefits" className="">
              <div className="flex-columns mobile-flex-no-columns">
                <div className="flex-column column-one-half mobile-column-full photo-clipboard">
                  {/* <div className="video-woman-clipboard-container">
                    <video className="video-woman-clipboard" autoPlay={true} loop={true} muted={true} preload="metadata" playsInline={true}>
                      <source src="/static/videos/adobe_stock_190510459_woman_clipboard.mov" type="video/mp4" />
                    </video>
                    <div className="video-woman-clipboard-overlay" />
                  </div> */}
                </div>
                <div className="flex-column column-one-half mobile-column-full ptxxxxl narrow-ptxxl">

                  <div className="max-width-30 plhuge prxxxxl narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                    <div className="columns columns-elastic">
                      <div className="column column-shrink mobile-display-only prxl">
                        <img src="/static/images/icons/getting_done@2x.png" width="50" />
                      </div>
                      <div className="column column-expand">
                        <div className="mobile-display-none ptl narrow-ptn">
                          <img src="/static/images/icons/getting_done@2x.png" width="101" className="narrow-display-none" />
                          <img src="/static/images/icons/getting_done@2x.png" width="75" className="narrow-display-only" />
                        </div>

                        <h2 className="mobile-mtn narrow-mtl">Get easy adoption of pesky workflows</h2>
                        <p>
                          Compliance doesn’t have to be painful. The difference between a complicated
                          workflow and easy automation is the difference between tasks sitting on the
                          backlog and the work just getting done. Ellipsis removes roadblocks and puts
                          the workflows where people already are so they can get work done quickly and effortlessly.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex-columns mobile-flex-no-columns">
                <div className="flex-column flex-column-right mobile-flex-column-left column-one-half mobile-column-full screencast-fiix-report"></div>
                <div className="flex-column column-one-half mobile-column-full mobile-flex-column-right ptxxxxl narrow-ptxxl prn">

                  <div className="column-right">
                    <div className="max-width-30 plxxxxl prhuge narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                      <div className="columns columns-elastic">
                        <div className="column column-shrink mobile-display-only prxl">
                          <img src="/static/images/icons/save_time@2x.png" width="45" />
                        </div>
                        <div className="column column-expand">
                          <div className="mobile-display-none">
                            <img src="/static/images/icons/save_time@2x.png" width="91" className="narrow-display-none" />
                            <img src="/static/images/icons/save_time@2x.png" width="68" className="narrow-display-only" />
                          </div>

                          <h2 className="mobile-mtn narrow-mtl">Make change happen in record time</h2>
                          <p>
                            With Ellipsis you can roll out a new workflow in days instead of months.
                            And when your needs change, we’re right there with you, whether it’s phase 2,
                            version 3, or step 45. Measure results and monitor compliance, while
                            empowering your employees to focus on the things that matter.
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex-columns mobile-flex-no-columns">
                <div className="flex-column column-one-half mobile-column-full bg-gray-light photo-happy-employees position-relative">
                  <div className="position-absolute position-bottom-right mobile-position-bottom-left">
                    <div className="mrhuge mlxxxxl narrow-mhxxl max-width-30 mobile-max-width-none type-tight">
                      <span className="bg-white">Employees at Plenty use Ellipsis to deliver mission-critical reports every day to their colleagues.</span>
                    </div>
                  </div>
                </div>
                <div className="flex-column column-one-half mobile-column-full ptxxxxl narrow-ptxxl">

                  <div className="max-width-30 plhuge prxxxxl narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                    <div className="columns columns-elastic">
                      <div className="column column-shrink mobile-display-only prxl">
                        <img src="/static/images/icons/happiness@2x.png" width="49" className="mobile-display-only" />
                      </div>
                      <div className="column column-expand">
                        <div className="mobile-display-none">
                          <img src="/static/images/icons/happiness@2x.png" width="98" className="narrow-display-none" />
                          <img src="/static/images/icons/happiness@2x.png" width="74" className="narrow-display-only" />
                        </div>
                        <h2 className="mobile-mtn narrow-mtl">Be the workplace hero</h2>
                        <p className="type-l">
                          Take away people’s mundane work, and watch the smiles grow. Introduce your colleagues to a seamless workplace where people have the data and the reports they need at hand, and where everyone collaborates to build a culture of efficiency.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div id="how" className="pvxxxxl narrow-ptl narrow-pbxxl mobile-pvl bg-lightest">

              <div className="container container-c">

                <ResponsiveContainer>
                  <h1 className="align-c">Workflow automation with Ellipsis: how it works</h1>
                </ResponsiveContainer>

                <div className="columns">
                  <div className="column column-one-third mobile-column-full ptxxxxl narrow-ptxxxl mobile-ptxxl align-c">
                    <div className="phxxxl narrow-phl">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_1@2x.png" width="93" />
                      </div>
                      <h2>Step 1</h2>
                      <p className="type-l">We get to know your workflow requirements and discuss how Ellipsis can help.</p>
                    </div>
                  </div>

                  <div className="column column-one-third mobile-column-full ptxxxxl narrow-ptxxxl mobile-ptxxl align-c">
                    <div className="phxxxl narrow-phl">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_2@2x.png" width="91" />
                      </div>
                      <h2>Step 2</h2>
                      <p className="type-l">We tailor our existing workflow packages or we build a customized one just for your needs.</p>
                    </div>
                  </div>

                  <div className="column column-one-third mobile-column-full ptxxxxl narrow-ptxxxl mobile-ptxxl align-c">
                    <div className="phxxxl narrow-phl">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_3@2x.png" width="100" />
                      </div>
                      <h2>Step 3</h2>
                      <p className="type-l">We help roll out the new workflows to your organization and measure adoption.</p>
                    </div>
                  </div>
                </div>

                <div className="align-c pvxxxxl narrow-pvxxl">
                  <button type="button"
                    className="button button-primary button-l type-label"
                    onClick={this.toggleContactForm}
                  >Get more info</button>
                </div>
              </div>
            </div>

            <div id="logoStrip" className="bg-white">
              <div className="container container-c">
                <div className="ptxxl pbl align-c">
                  <LogoStrip />
                </div>
              </div>
            </div>

            <div id="customer-stories" className="pvxxxxl narrow-ptl mobile-pbxxl mobile-phxxl align-c bg-lightest">
              <h2 className="">Hear our customer stories</h2>

              <ResponsiveContainer>
                <div className="ptxxxl mobile-ptl">

                  <img src="/static/images/headshots/perry_skorcz.jpg" width="100" className="border-round" />

                  <blockquote className="type-l mtxl mbn mhn">
                    <p><i>“What value does Ellipsis provide? We’ve used it to automate 5–6 end-of-day messages
                      and noticed the time it saves the team. I’d say that [these daily reports] only take
                      five minutes a day now instead of not having them at all.”</i></p>

                    <p>—Perry Skorcz, Head of Farm Operations at Plenty</p>
                  </blockquote>
                </div>
              </ResponsiveContainer>
            </div>

            <div id="last-chance" className="pvxxxxl narrow-pvl narrow-phxxl align-c">
              <h2>Ready to learn more? Reach out for your free proof-of-concept.</h2>

              <div className="ptxl">
                <button type="button"
                  className="button button-l button-primary type-label"
                  onClick={this.toggleContactForm}
                >Get a proof of concept</button>
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

export default Home
