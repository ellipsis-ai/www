import * as React from 'react'
import EllipsisHead from '../components/ellipsis_head';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '../components/contact_form';
import autobind from '../lib/autobind';
import ResponsiveContainer from '../components/responsive_container';
import LogoStrip from '../components/logo_strip';

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
                    <h1 className="">The happiest way to roll out new internal workflows</h1>

                    <p className="mbxxxxl mobile-mbxxl type-l color-gray-lightest">
                      Transform your enterprise workplace by automating &amp; centralizing pesky
                      workflows in existing chat tools in less than a week.
                    </p>

                    <button
                      type="button"
                      className="button button-l button-primary type-label"
                      onClick={this.toggleContactForm}
                    >Get more info &amp; a proof-of-concept</button>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

          </div>

          <div className="">

            <div id="benefits" className="">
              <div className="flex-columns mobile-flex-no-columns">
                <div className="flex-column column-one-half mobile-column-full">
                  <div className="video-woman-clipboard-container">
                    <video className="video-woman-clipboard" autoPlay={true} loop={true} muted={true} preload="metadata" playsInline={true}>
                      <source src="/static/videos/adobe_stock_190510459_woman_clipboard.mov" type="video/mp4" />
                    </video>
                    <div className="video-woman-clipboard-overlay" />
                  </div>
                </div>
                <div className="flex-column column-one-half mobile-column-full pthuge narrow-ptxxxl">

                  <div className="max-width-30 plhuge prxxxxl narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                    <div className="columns columns-elastic">
                      <div className="column column-shrink mobile-display-only prxl">
                        <img src="/static/images/icons/getting_done@2x.png" width="50" />
                      </div>
                      <div className="column column-expand">
                        <div className="mobile-display-none">
                          <img src="/static/images/icons/getting_done@2x.png" width="101" />
                        </div>

                        <h2 className="mobile-mtn">Rest assured, it’s getting done</h2>
                        <p className="type-l">
                          The difference between a complicated workflow and easy automation is
                          the difference between tasks sitting on a backlog and getting done.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex-columns mobile-flex-no-columns">
                <div className="flex-column flex-column-right mobile-flex-column-left column-one-half mobile-column-full screencast-quick-approval"></div>
                <div className="flex-column column-one-half mobile-column-full mobile-flex-column-right pthuge narrow-ptxxxl prn">

                  <div className="column-right">
                    <div className="max-width-30 plxxxxl prhuge narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                      <div className="columns columns-elastic">
                        <div className="column column-shrink mobile-display-only prxl">
                          <img src="/static/images/icons/save_time@2x.png" width="45" />
                        </div>
                        <div className="column column-expand">
                          <div className="mobile-display-none">
                            <img src="/static/images/icons/save_time@2x.png" width="91" />
                          </div>

                          <h2 className="mobile-mtn">Save time</h2>
                          <p className="type-l">
                            Empower your employees to focus on the things that matter. Close the gaps.
                            Collaborate better. Everyone likes moving faster.
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
                <div className="flex-column column-one-half mobile-column-full pthuge narrow-ptxxxl">

                  <div className="max-width-30 plhuge prxxxxl narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                    <div className="columns columns-elastic">
                      <div className="column column-shrink mobile-display-only prxl">
                        <img src="/static/images/icons/happiness@2x.png" width="49" className="mobile-display-only" />
                      </div>
                      <div className="column column-expand">
                        <div className="mobile-display-none">
                          <img src="/static/images/icons/happiness@2x.png" width="98" />
                        </div>
                        <h2 className="mobile-mtn">Employee happiness</h2>
                        <p className="type-l">
                          The less paperwork and process, the better. Create a beautiful, seamless
                          workplace for healthier, happier, people.
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
                  <h1 className="align-c">Get 10x adoption of your pesky workflows in less than a week</h1>
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
                  >Get a proof of concept</button>
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
