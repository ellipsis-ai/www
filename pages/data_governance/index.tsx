import * as React from 'react'
import Page from '../../components/page';
import Header, { PageInfo } from '../../components/header';
import ResponsiveContainer from '../../components/responsive_container';
import ContactButton from '../../components/contact_button';

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
              <div className="container container-c pvxxxxl">
                <ResponsiveContainer>

                  <p className="type-xl">
                    Improve access to data and related discussions.
                    Ensure GDPR compliance.
                    Painlessly roll out workflows that get adopted.
                  </p>

                  <div className="ptxxl pbxxxl">
                    <ContactButton onClick={pageProps.toggleContactForm} />
                  </div>

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
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-fade">
              <div className="container container-c pvxl">
                <div className="columns">
                  <div className="column column-one-quarter narrow-column-one-half mobile-column-full">
                    <div className="phl">
                      <h3 className="mbxs">Rollout new workflows easily</h3>
                      <p>
                        Spur adoption with a native integration that doesn’t require training,
                        new software, or complex interfaces for rapid and happy adoption.
                      </p>
                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half">
                    <div className="phl">

                      <h3 className="mbxs">Trust data quality across business units</h3>
                      <p>
                        Guide employees through a conversational interface that ensures pristine
                        and trustworthy data lineage and quality.
                      </p>
                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half">
                    <div className="phl">

                      <h3 className="mbxs">Foster adoption for a culture of compliance</h3>
                      <p>
                        Promote a culture of compliance with seamless automations that work out
                        loud in group chat to foster social awareness and collective understanding.
                      </p>

                    </div>
                  </div>
                  <div className="column column-one-quarter narrow-column-one-half">
                    <div className="phl">

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
          </div>
        )}
      />
    )
  }
}

export default DataGovernance
