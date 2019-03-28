import * as React from 'react'
import Page from '../components/page';
import Header, { NavSection, NavSubsection } from '../components/header';
import ResponsiveContainer from '../components/responsive_container';
import ContactButton from '../components/contact_button';

class Cmms extends React.Component {
  render() {
    return (
      <Page
        title="Facility management — CMMS - workflow automation — Fiix"
        description="RolRollout and guarantee workflows by automating them through Slack or Microsoft Teams. Increase the likelihood facility reports are completed on time and accurately so you can find lost revenue."
        canonicalPath="/cmms/"
        onRender={(pageProps) => (
          <div>
            <div className="bg-blue-fade">
              <Header
                isHomeVisible={true}
                onToggleContactForm={pageProps.toggleContactForm}
                activeSection={NavSection.Solutions}
                activeSubsection={NavSubsection.Cmms}
                className="pbn"
              />

              <div className="container container-c ptl pbxl">
                <div className="columns">
                  <div className="column column-one-half mobile-column-full mobile-align-c">
                    <h3 className="type-label type-white mtn">Facilities Management &amp; CMMS</h3>
                  </div>
                  <div className="column column-one-half mobile-column-full align-r mobile-align-c">
                    <h3 className="type-white mtn">We integrate with Fiix.</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-emphasis-top border-fiix">
              <div className="container container-c pvxxxl mobile-pvxl">
                <div className="narrow-display-only">
                  <p className="type-xl mbxl mobile-mbn">
                    Make reporting more enjoyable.
                    Get accurate data.
                    Find lost money.
                  </p>
                </div>
                <div className="flex-columns mobile-flex-no-columns">
                  <div className="flex-column flex-column-right mobile-flex-column-left column-two-fifths narrow-column-one-half mobile-column-full align-c ptm mobile-pbl">
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
                  <div className="flex-column mobile-flex-column-right column-three-fifths narrow-column-one-half mobile-column-full prxxxxl mobile-prn">

                    <p className="type-xl narrow-display-none">
                      Make reporting more enjoyable.
                      Get accurate data.
                      Find lost money.
                    </p>

                    <div className="flex-columns narrow-flex-no-columns">
                      <div className="flex-column">
                        <p className="type-l">
                          Bring Fiix to Microsoft Teams or Slack for easy, complete reports… in 5 clicks.
                        </p>

                        <p>
                          We bring the power of your CMMS (like Fiix) into your team’s chat tool so
                          completing issues, tickets, work orders, and more feels painless. Easier
                          reporting gets done, which means accurate data for you and the ability to
                          find and maximize revenue while staying compliant.
                        </p>

                      </div>
                      <div className="flex-column plxxl narrow-pln narrow-ptxl mobile-ptn narrow-align-c">
                        <img src="/static/images/fiix_slack_msteams.png" height="200" alt="Ellipsis connects Fiix to Slack or Microsoft Teams" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="ptxxl mobile-pts align-c">
                  <ContactButton onClick={pageProps.toggleContactForm} />
                </div>
              </div>
            </div>

            <div className="bg-gray-fade">
              <div className="container container-c pvxl">
                <div className="columns">
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="prl">
                      <h3 className="mbxs">Integrate Fiix with your chat tool</h3>
                      <p>
                        Bring Fiix into Slack or Microsoft Teams, so it’s accessible, familiar, and fast
                        for any employee to use. Ellipsis also runs on mobile so reports can be created
                        in real time, anywhere.
                      </p>
                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pls prs narrow-pll narrow-prn mobile-phn">

                      <h3 className="mbxs">Get accurate reports</h3>
                      <p>
                        Guide employees through a conversational interface that creates pristine and complete reports. Set up reminders that detect incomplete documentation.
                      </p>
                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pls prs narrow-pln narrow-prl">

                      <h3 className="mbxs">Find lost data</h3>
                      <p>
                        Surface areas of Fiix that are hard to find and expose lost data and communication
                        breakdowns to find lost revenue. We integrate with more than you chat tool.
                      </p>

                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pll mobile-phn">

                      <h3 className="mbxs">Roll out new workflows</h3>
                      <p>
                        Enjoyable automation means workflows get done. We integrate with your native tools,
                        so you don’t have to train employees on new software, which boosts adoption rates.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className="container container-c pbxxxl">

                <ResponsiveContainer>
                  <h1 className="align-c">Free to test. Easy to implement.</h1>
                </ResponsiveContainer>

                <div className="columns">
                  <div className="column column-one-third mobile-column-full ptxxxxl narrow-ptxxxl mobile-ptxxl align-c">
                    <div className="phxxxl narrow-phl">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_1@2x.png" width="93" />
                      </div>
                      <h2>Step 1</h2>
                      <p className="type-l">Share an idealized workflow, and 7 days later we’ll deliver a
                      custom proof-of-concept. </p>
                    </div>
                  </div>

                  <div className="column column-one-third mobile-column-full ptxxxxl narrow-ptxxxl mobile-ptxxl align-c">
                    <div className="phxxxl narrow-phl">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_2@2x.png" width="91" />
                      </div>
                      <h2>Step 2</h2>
                      <p className="type-l">Set up won’t be a heavy lift for your IT team. All we need
                      is your Fiix subdomain and token from your technical teams.</p>
                    </div>
                  </div>

                  <div className="column column-one-third mobile-column-full ptxxxxl narrow-ptxxxl mobile-ptxxl align-c">
                    <div className="phxxxl narrow-phl">
                      <div className="height-big-icon">
                        <img src="/static/images/icons/step_3@2x.png" width="100" />
                      </div>
                      <h2>Step 3</h2>
                      <p className="type-l">Deployment is as brief as clicking a button within your dashboard.
                      With 1-click deploy, your technical teams won’t have to build any new infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light pvxxxl">
              <div className="container container-c">
                <ResponsiveContainer>

                  <h2 className="align-c">IT teams approve</h2>

                  <p className="type-l">
                    <b>“We didn’t understand everything Ellipsis could do, and when we did, we were blown away.”</b>
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

            <div className="bg-white pvxxxl">
              <div className="container container-c">

                <h2 className="align-c">Used by Plenty to guarantee workflows and save&nbsp;time</h2>

                <h3 className="align-c mbxl">Example workflows</h3>

                <ResponsiveContainer>
                  <div className="flex-columns mobile-flex-no-columns">
                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border">
                        Guide employees through safety reports
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border">
                        Automate work orders
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border">
                        Facilitate a report on safety issues
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border">
                        Save time spent on admin work
                    </div>
                    </div>
                  </div>
                </ResponsiveContainer>

                <div className="ptxxxxl align-c">
                  <ContactButton onClick={pageProps.toggleContactForm} />
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
