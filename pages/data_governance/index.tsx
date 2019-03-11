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
              <Header isHomeVisible={true} onToggleContactForm={pageProps.toggleContactForm} activePage={PageInfo.Solutions} />

              <div className="align-c type-white pbxl">
                <h3 className="type-label type-pink mtn">Data governance</h3>
                <h3 className="mtn">We integrate with Collibra.</h3>
              </div>
            </div>
            <div className="bg-white">
              <div className="container container-c align-c pvxxxxl">
                <ResponsiveContainer>

                  <p className="type-xl">Improve access to data and related discussions.
                    Ensure GDPR compliance.
                    Painlessly rollout workflows that get adopted.</p>

                  <div className="ptxxl pbxxxl">
                    <ContactButton onClick={pageProps.toggleContactForm} />
                  </div>

                  <p className="type-l">Bring Collibra to Microsoft Teams or Slack for easier access to data solutions and ensure compliance… in 5 clicks. </p>

                  <p>We bring the power of Collibra and other data governance platforms into your chat tool so your team can unify around accurate data that maintains compliance. A better user experience makes it easier to roll out new workflows and trust data quality.</p>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-blue-fade type-white">
              <div className="container container-c align-c pvxl">
                <ResponsiveContainer>
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
