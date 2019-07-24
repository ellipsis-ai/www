import * as React from 'react'
import Page from '../components/page';
import Header, { NavSection, NavSubsection } from '../components/header';
import ResponsiveContainer from '../components/responsive_container';
import ContactButton from '../components/contact_button';
import PageHeading from '../components/page_heading';
import SearchIcon from '../components/icons/search';
import DrawerIcon from '../components/icons/drawer';
import PinIcon from '../components/icons/pin';
import NotificationIcon from '../components/icons/notification';

class Cmms extends React.Component {
  render() {
    return (
      <Page
        title="Facility management — CMMS - workflow automation — Fiix"
        description="Rollout and guarantee workflows by automating them through Slack or Microsoft Teams. Increase the likelihood facility reports are completed on time and accurately so you can find lost revenue."
        canonicalPath="/cmms/"
        onRender={(pageProps) => (
          <div>
            <div className="bg-eggplant bg-pattern-dot-cobalt">
              <Header
                isHomeVisible={true}
                onToggleContactForm={pageProps.toggleContactForm}
                activeSection={NavSection.Solutions}
                activeSubsection={NavSubsection.Cmms}
                className="pbn"
              />

              <PageHeading heading={"Facilities Management & CMMS"} subheading={"We integrate with Fiix."} />

            </div>
            <div className="bg-mist bg-pattern-x-teal border-emphasis-top border-cobalt">
              <div className="container container-c bg-mist pbxxxl">
                <ResponsiveContainer>
                  <h2 className="align-c mtxxxl mbxxl mobile-mvxl">Make your work orders a breeze. Save time and money.</h2>
                </ResponsiveContainer>

                <div className="flex-columns flex-columns-align-c mobile-flex-no-columns">
                  <div className="flex-column flex-column-right mobile-flex-column-left column-five-twelfths mobile-column-full plxl prxxxxl narrow-phxl">

                    <p className="type-l">
                      Bring Fiix to Microsoft Teams or Slack for easy, complete reports… in 5 clicks.
                    </p>

                    <p>
                      We bring the power of your CMMS (like Fiix) into your team’s chat tool so
                      filing and completing work orders feels painless. Easier
                      reporting gets done, which means accurate data for you and the ability to
                      find and maximize revenue while staying compliant.
                    </p>

                    <div className="mvxxl mobile-mvl mobile-align-c">
                      <ContactButton onClick={pageProps.toggleContactForm} label="Request a demo" />
                    </div>

                    <p><a href="https://www.fiixsoftware.com/integrations/" target="fiix">▸ Read about Fiix integrations on fiixsoftware.com</a></p>

                  </div>
                  <div className="flex-column flex-column-left column-seven-twelfths mobile-column-full phxxxxl narrow-phxl">

                    <div className="video-container border border-thick">
                      <video
                        controls={true}
                        preload="metadata"
                        playsInline={true}
                        poster="/static/images/video_posters/2019-03-19-ellipsis-fiix-automation-package.png"
                      >
                        <source
                          src="https://s3.amazonaws.com/ellipsis-ai-video/2019-03-19+ellipsis+fiix+automation+package.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-pattern-dot-teal">
              <div className="container container-c pvxxl bg-white">
                <div className="columns">
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="prl">
                      <h4 className="mbxs">Integrate Fiix with your chat tool</h4>
                      <p>
                        Bring Fiix into Slack or Microsoft Teams, so it’s accessible, familiar, and fast
                        for any employee to use. Ellipsis also runs on mobile so reports can be created
                        in real time, anywhere.
                      </p>
                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pls prs narrow-pll narrow-prn mobile-phn">

                      <h4 className="mbxs">Get accurate reports</h4>
                      <p>
                        Guide employees through a conversational interface that creates pristine and complete reports.
                        Set up reminders that detect incomplete documentation.
                      </p>
                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pls prs narrow-pln narrow-prl">

                      <h4 className="mbxs">Find lost data</h4>
                      <p>
                        Surface areas of Fiix that are hard to find and expose lost data and communication
                        breakdowns to find lost revenue. We integrate with more than you chat tool.
                      </p>

                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pll mobile-phn">

                      <h4 className="mbxs">Roll out new workflows</h4>
                      <p>
                        Enjoyable automation means workflows get done. We integrate with your native tools,
                        so you don’t have to train employees on new software, which boosts adoption rates.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-mist bg-pattern-x-teal">
              <div className="container container-c bg-mist pvxxl">

                <ResponsiveContainer>
                  <h2 className="align-c">Free to test. Easy to implement.</h2>
                </ResponsiveContainer>

                <div className="flex-columns mobile-flex-no-columns">
                  <div className="flex-column column-one-third mobile-column-full ptxxl narrow-ptxl mobile-ptl align-c phn">
                    <div className="phxl mhxl narrow-phl mobile-mhn pvxl height height-full">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_1@2x.png" width="93" />
                      </div>
                      <h3>Step 1</h3>
                      <p className="type-l">Share an idealized workflow, and 7 days later we’ll deliver a
                      custom proof-of-concept. </p>
                    </div>
                  </div>

                  <div className="flex-column column-one-third mobile-column-full ptxxl narrow-ptxl mobile-ptl align-c phn">
                    <div className="phxl mhxl narrow-phl mobile-mhn bg-mist pvxl height height-full">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_2@2x.png" width="91" />
                      </div>
                      <h3>Step 2</h3>
                      <p className="type-l">Set up won’t be a heavy lift for your IT team. All we need
                      is your Fiix subdomain and token from your technical teams.</p>
                    </div>
                  </div>

                  <div className="flex-column column-one-third mobile-column-full ptxxl narrow-ptxl mobile-ptl align-c phn">
                    <div className="phxl mhxl narrow-phl mobile-mhn bg-mist pvxl height height-full">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_3@2x.png" width="100" />
                      </div>
                      <h3>Step 3</h3>
                      <p className="type-l">Deployment is as brief as clicking a button within your dashboard.
                      With 1-click deploy, your technical teams won’t have to build any new infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white bg-pattern-dot-mist">
              <div className="container container-c bg-white pvxxl">
                <ResponsiveContainer>

                  <h2 className="align-c">IT teams approve</h2>

                  <p className="type-l">
                    <b>“We didn’t understand everything Ellipsis could do, and when we did, we were blown away.”</b>
                  </p>

                  <p className="type-l">
                    We strive to make Ellipsis look simple, but our tool is incredibly complex under the hood.
                    Enjoy a seamless interface specific to your workflows, without building multiple endpoints
                    and branching logic.
                  </p>

                  <ul className="type-l list-space-l">
                    <li>Your security is our top priority. Questions? <button type="button" className="button-raw" onClick={pageProps.toggleContactForm}><span className="link">Let’s chat.</span></button></li>
                    <li>We offer 99.9% availability and state-of-the-art infrastructure.</li>
                  </ul>

                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-teal bg-pattern-dot-mist pvxxl">
              <div className="container container-c bg-teal ptxl pbxl">

                <h3 className="align-c mvn">Used by Plenty to guarantee workflows and save&nbsp;time</h3>

                <h4 className="align-c mtn mbm pvs">Example workflows</h4>

                <ResponsiveContainer>
                  <div className="flex-columns mobile-flex-no-columns">
                    <div className="flex-column column-one-quarter mobile-column-full align-t prn">
                      <div className="phxl mhm narrow-phl mobile-mhn bg-white pvxl height height-full">
                        <div className="color-cobalt"><DrawerIcon height={24} /></div>
                        Guide employees through safety reports
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t prn">
                      <div className="phxl mhm narrow-phl mobile-mhn bg-white pvxl height height-full">
                        <div className="color-cobalt"><PinIcon height={24} /></div>
                        Automate and simplify work order completion
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t prn">
                      <div className="phxl mhm narrow-phl mobile-mhn bg-white pvxl height height-full">
                        <div className="color-cobalt"><SearchIcon height={24} /></div>
                        Facilitate a report on safety issues
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t prn">
                      <div className="phxl mhm narrow-phl mobile-mhn bg-white pvxl height height-full">
                        <div className="color-cobalt"><NotificationIcon height={24} /></div>
                        Save time spent on admin work
                      </div>
                    </div>
                  </div>
                </ResponsiveContainer>

              </div>
              <div className="container container-c">

                <div className="ptxl align-c">
                  <ContactButton onClick={pageProps.toggleContactForm} label="Request a demo" />
                </div>

              </div>
            </div>

          </div>
        )}
      />
    )
  }
}

export default Cmms
