import * as React from 'react'
import Header from '../components/header';
import ResponsiveContainer from '../components/responsive_container';
import LogoStrip from '../components/logo_strip';
import MsTeamsLogo from '../components/logos/ms_teams_logo';
import SlackLogo from '../components/logos/slack_logo';
import SMSChatBubble from '../components/logos/sms_chat_bubble';
import EmailIcon from '../components/logos/email_icon';
import Page from '../components/page';
import ContactButton from '../components/contact_button';

class Home extends React.Component {
  render() {
    return (
      <Page
      description="Transform your enterprise workplace by automating and centralizing workflows in existing chat tools. We make it easy to roll out new processes so you can rest assured key reports get done. Better workflows make teams happier and faster."
      canonicalPath="/"
      onRender={(pageProps) => (
        <div className="page">
          <div className="bg-eggplant bg-pattern-dot-cobalt">
            <Header isHomeVisible={false} onToggleContactForm={pageProps.toggleContactForm} />

            <div id="hero" className="hero align-c pbm mobile-ptn mobile-pbs type-white">
              <div className="container container-c">

                <div className="mbxxl bg-eggplant pvxxl phxxl mobile-pbl">
                  <ResponsiveContainer className="">
                    <h1 className="mtn">The smartest way to roll out new workflows at your company</h1>

                    <p className="mvxl type-xl color-teal">
                      Transform your enterprise workplace by automating and centralizing workflows
                      in existing communication tools, whether it’s at your desk or&nbsp;on&nbsp;the&nbsp;go.
                    </p>

                    <div className="align-c mtxxl mbxl">
                      <div className="display-inline-block align-m mrxl">
                        <SlackLogo height={40} monochrome={true} />
                      </div>
                      <div className="display-inline-block align-m mrs">
                        <MsTeamsLogo height={32} monochrome={true} />
                      </div>
                      <div className="display-inline-block align-m mlxl mrs">
                        <SMSChatBubble height={32} />
                      </div>
                      <div className="display-inline-block align-m mlxl">
                        <EmailIcon height={32} />
                      </div>
                    </div>

                    <ContactButton onClick={pageProps.toggleContactForm} />

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

                        <h3 className="mobile-mtn narrow-mtl">Get easy adoption of tough workflows</h3>
                        <p>
                          Compliance doesn’t have to be painful. Innovation doesn’t have to be painful.
                          The difference between a complicated workflow and easy automation is the
                          difference between tasks sitting on the backlog and the work just getting done.
                          Ellipsis removes roadblocks and puts the workflows where people already are
                          so they can get tasks done quickly and effortlessly.
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

                          <h3 className="mobile-mtn narrow-mtl">Make change happen in record time</h3>
                          <p>
                            With Ellipsis you can roll out a new workflow in days instead of months.
                            And when your needs change, we’re right there with you, whether it’s phase 2,
                            version 3, or step 4. Measure results and monitor compliance, while
                            empowering your employees to focus on the things that matter.
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex-columns mobile-flex-no-columns">
                <div className="flex-column column-one-half mobile-column-full bg-gray-light photo-happy-employees" />
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
                        <h3 className="mobile-mtn narrow-mtl">Your team will thank you</h3>
                        <p>
                          Take the pain away from doing the right thing, and watch the smiles grow. Introduce your colleagues to a seamless workplace where people have the data and the reports they need at hand, and where everyone collaborates to build a culture of efficiency.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <div id="how" className="pvxxl narrow-ptl narrow-pbxxl mobile-pvl bg-mist bg-pattern-x-teal">

              <div className="container container-c bg-mist">

                <ResponsiveContainer>
                  <h2 className="align-c bg-mist">Get 10x adoption of your workflows: how it works</h2>
                </ResponsiveContainer>

                <div className="flex-columns mobile-flex-no-columns">
                  <div className="flex-column column-one-third mobile-column-full ptxxl narrow-ptxl mobile-ptl align-c phn">
                    <div className="phxl mhxl narrow-phl mobile-mhn bg-mist pvxl height height-full">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_1@2x.png" width="93" />
                      </div>
                      <h3>Step 1</h3>
                      <p className="type-l">We get to know your workflow requirements and discuss how Ellipsis can help.</p>
                    </div>
                  </div>

                  <div className="flex-column column-one-third mobile-column-full ptxxl narrow-ptxl mobile-ptl align-c phn">
                      <div className="phxl mhxl narrow-phl mobile-mhn bg-mist pvxl height height-full">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_2@2x.png" width="91" />
                      </div>
                      <h3>Step 2</h3>
                      <p className="type-l">We tailor our existing workflow packages or we build a customized one just for your needs.</p>
                    </div>
                  </div>

                  <div className="flex-column column-one-third mobile-column-full ptxxl narrow-ptxl mobile-ptl align-c phn">
                      <div className="phxl mhxl narrow-phl mobile-mhn bg-mist pvxl height height-full">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_3@2x.png" width="100" />
                      </div>
                      <h3>Step 3</h3>
                      <p className="type-l">We help roll out the new workflows to your organization and measure adoption.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container container-c">

                <div className="align-c mtxxl narrow-mvl pvxxl narrow-pvl">
                  <ContactButton onClick={pageProps.toggleContactForm} />
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

            <div id="customer-stories" className="ptxxxxl narrow-ptl align-c bg-teal bg-pattern-dot-mist">
              <h2 className="bg-teal pvl mvn">Hear our customer stories</h2>

              <ResponsiveContainer>
                <div className="">
                  <div>
                    <img src="/static/images/headshots/perry_skorcz.jpg" width="100" className="phl bg-teal align-b" />
                  </div>

                  <blockquote className="type-l man bg-mist pal">
                    <p><i>“What value does Ellipsis provide? We’ve used it to automate 5–6 end-of-day messages
                      and noticed the time it saves the team. I’d say that [these daily reports] only take
                      five minutes a day now instead of not having them at all.”</i></p>

                    <p>—Perry Skorcz, Head of Farm Operations at Plenty</p>
                  </blockquote>
                </div>
              </ResponsiveContainer>
            </div>

            <div id="last-chance" className="ptxxxl pbl narrow-ptl narrow-phxxl align-c">
              <h3>Ready to learn more? Reach out for your free proof-of-concept.</h3>

              <div className="ptxl">
                <ContactButton onClick={pageProps.toggleContactForm} />
              </div>
            </div>

          </div>

        </div>
      )} />
    );
  }
}

export default Home
