import * as React from 'react'
import Page from '../components/page';
import Header, { PageInfo } from '../components/header';
import ResponsiveContainer from '../components/responsive_container';
import ContactButton from '../components/contact_button';

class DataGovernance extends React.Component {
  render() {
    return (
      <Page
        title="Data governance assurance - Collibra integration"
        description="Rollout new internal workflows by surfacing them in Slack or MSFT and automate your way to centralized quality data. Better workflows mean easier adoption and happier employees."
        canonicalPath="/data_governance/"
        onRender={(pageProps) => (
          <div>
            <div className="bg-blue-fade">
              <Header
                isHomeVisible={true}
                onToggleContactForm={pageProps.toggleContactForm}
                activePage={PageInfo.Solutions}
                className="pbn"
              />

              <div className="container container-c ptl pbxl">
                <div className="columns">
                  <div className="column column-one-half">
                    <h3 className="type-label type-white mtn">Data governance</h3>
                  </div>
                  <div className="column column-one-half align-r">
                    <h3 className="type-white mtn">We integrate with Collibra.</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <div className="container container-c pvxxxxl narrow-pvxxl">
                <div className="narrow-display-only">
                  <p className="type-xl mbxl">
                    Improve access to data and related discussions.
                    Ensure GDPR compliance.
                    Painlessly roll out workflows that get adopted.
                  </p>
                </div>
                <div className="flex-columns mobile-flex-no-columns">
                  <div className="flex-column flex-column-right mobile-flex-column-left column-two-fifths narrow-column-one-half mobile-column-full align-c pts mobile-pbl">
                    <div className="video-container">
                      <video controls={true} preload="metadata" playsInline={true}>
                        <source
                          src="https://s3.amazonaws.com/ellipsis-ai-video/2019-01-30+ellipsis+collibra+automation+package.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="flex-column mobile-flex-column-right column-three-fifths narrow-column-one-half mobile-column-full prxxxxl mobile-prn">

                    <p className="type-xl narrow-display-none">
                      Improve access to data and related discussions.
                      Ensure GDPR compliance.
                      Painlessly roll out workflows that get adopted.
                    </p>

                    <p className="type-l">
                      Bring Collibra to Microsoft Teams or Slack for
                      easier access to data solutions and ensure compliance… in 5 clicks.
                    </p>

                    <p>
                      We bring the power of Collibra and other data governance platforms into
                      your chat tool so your team can unify around accurate data that maintains
                      compliance. A better user experience makes it easier to roll out new workflows
                      and trust data quality.
                    </p>

                    <div className="pvxxl align-c mobile-pbn narrow-display-none">
                      <ContactButton onClick={pageProps.toggleContactForm} />
                    </div>
                  </div>
                </div>
                <div className="pvxxl align-c mobile-pbn narrow-pbn narrow-display-only">
                  <ContactButton onClick={pageProps.toggleContactForm} />
                </div>
              </div>
            </div>

            <div className="bg-gray-fade">
              <div className="container container-c pvxl">
                <div className="columns">
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="prl">
                      <h3 className="mbxs">Rollout new workflows easily</h3>
                      <p>
                        Spur adoption with a native integration that doesn’t require training,
                        new software, or complex interfaces for rapid and happy adoption.
                      </p>
                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pls prs">

                      <h3 className="mbxs">Trust data quality across business units</h3>
                      <p>
                        Guide employees through a conversational interface that ensures pristine
                        and trustworthy data lineage and quality.
                      </p>
                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pls prs">

                      <h3 className="mbxs">Foster adoption for a culture of compliance</h3>
                      <p>
                        Promote a culture of compliance with seamless automations that work out
                        loud in group chat to foster social awareness and collective understanding.
                      </p>

                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="pll">

                      <h3 className="mbxs">Surface &amp; create Collibra data in chat</h3>
                      <p>
                        Integrate Collibra with Slack or Microsoft Teams to quickly bring data
                        to chat or seamlessly save discussions to your database. Everyone
                        enjoys moving faster.
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
                      <p className="type-l">Benefit from white-glove implementation. We’re ready to discuss
                      security questions so you can fast-track the approval process. </p>
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

            <div className="bg-lightest pvxxxl">
              <div className="container container-c">
                <ResponsiveContainer>

                  <h2 className="align-c">Get approved at all levels</h2>

                  <p className="type-l">
                    We understand that you’re working with incredibly sensitive information on a global scale.
                    That’s why we go above and beyond best practices &amp; GDPR compliance.
                  </p>

                  <ul className="type-l">
                    <li>Your security is our top priority. Questions? <button type="button" className="button-raw"><span className="link">Let’s chat.</span></button></li>
                    <li>We offer 99.9% availability and state-of-the-art infrastructure.</li>
                  </ul>

                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white pvxxxl">
              <div className="container container-c">
                <ResponsiveContainer>

                  <h2>Used by American Express to unify &amp; speed up teams</h2>

                  <ul>
                    <li>Look up business terms from chat.</li>
                    <li>Define a new business term and get approval in chat, and save it to Collibra automatically.</li>
                    <li>Look up information in your data catalog in seconds.</li>
                    <li>Link chat conversations to issues in Collibra automatically. </li>
                  </ul>

                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

export default DataGovernance
