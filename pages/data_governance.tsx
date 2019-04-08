import * as React from 'react'
import Page from '../components/page';
import Header, { NavSection, NavSubsection } from '../components/header';
import ResponsiveContainer from '../components/responsive_container';
import ContactButton from '../components/contact_button';
import SearchIcon from '../components/icons/search';
import NotificationIcon from '../components/icons/notification';
import PinIcon from '../components/icons/pin';
import DrawerIcon from '../components/icons/drawer';

class DataGovernance extends React.Component {
  render() {
    return (
      <Page
        title="Data governance assurance - Collibra integration"
        description="Rollout new internal workflows by surfacing them in Slack or Microsoft Teams and automate your way to centralized quality data. Better workflows mean easier adoption and happier employees."
        canonicalPath="/data_governance/"
        onRender={(pageProps) => (
          <div>
            <div className="bg-blue-fade">
              <Header
                isHomeVisible={true}
                onToggleContactForm={pageProps.toggleContactForm}
                activeSection={NavSection.Solutions}
                activeSubsection={NavSubsection.DataGovernance}
                className="pbn"
              />

              <div className="container container-c ptl pbxl">
                <div className="columns">
                  <div className="column column-one-half mobile-column-full mobile-align-c">
                    <h3 className="type-label type-white mtn">Data governance</h3>
                  </div>
                  <div className="column column-one-half mobile-column-full align-r mobile-align-c">
                    <h3 className="type-white mtn">We integrate with Collibra.</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-fade border-emphasis-top border-collibra">
              <div className="container container-c">
                <ResponsiveContainer>
                  <h1 className="align-c mtxxxl mbxxl mobile-mvxl">Get 10x adoption of data governance workflows across your company</h1>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white">
              <div className="container container-c">
                <div className="flex-columns flex-columns-align-c mobile-flex-no-columns">
                  <div className="flex-column flex-column-right mobile-flex-column-left column-five-twelfths mobile-column-full plxl prxxxxl narrow-phxl">
                    <p className="type-l narrow-display-none">
                      We seamlessly integrate your data governance platform with chat apps like Slack and
                      Microsoft Teams so your team members can easily get the data they need when they need
                      it, and your company can ensure necessary compliance.
                    </p>
                    <p className="narrow-display-only mobile-phxl">
                      We seamlessly integrate your data governance platform with chat apps like Slack and
                      Microsoft Teams so your team members can easily get the data they need when they need
                      it, and your company can ensure necessary compliance.
                    </p>
                    <div className="mtxxl mobile-mvl mobile-align-c">
                      <ContactButton onClick={pageProps.toggleContactForm} label="Request a demo" />
                    </div>
                  </div>
                  <div className="flex-column flex-column-left column-seven-twelfths mobile-column-full phxxxxl narrow-phxl">
                    <div className="video-container border border-thick">
                      <video
                        controls={true}
                        preload="metadata"
                        playsInline={true}
                        poster="/static/images/video_posters/2019-01-30-ellipsis-collibra-automation-package-v2.png"
                      >
                        <source
                          src="https://s3.amazonaws.com/ellipsis-ai-video/2019-01-30+ellipsis+collibra+automation+package.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="bg-white">
              <div className="container container-c pvxxxl">
                <ResponsiveContainer>
                  <div className="columns">
                    <div className="column column-one-half mobile-column-full">
                      <div className="prl mobile-phn">
                        <h3 className="mbxs">Roll out data governance workflows&nbsp;fast</h3>
                        <p>
                          Launch your new data governance workflows in Slack or Microsoft Teams in days, measure adoption, and get user feedback, then rinse and repeat.
                        </p>
                      </div>
                    </div>
                    <div className="column column-one-half mobile-column-full">
                      <div className="pll mobile-phn">

                        <h3 className="mbxs">Give people the data they need when they need&nbsp;it</h3>
                        <p>
                          Make business terms, data catalogs, and reports accessible directly from Slack or Microsoft Teams. Employees can ask in plain English for the data they need when they need it. No training required.
                        </p>
                      </div>
                    </div>
                    <div className="column column-one-half mobile-column-full">
                      <div className="prl mobile-phn">

                        <h3 className="mbxs">Ensure data quality across business&nbsp;units</h3>
                        <p>
                          Help people report data quality issues and inconsistencies with a simple conversational interface everyone will love.
                        </p>

                      </div>
                    </div>
                    <div className="column column-one-half mobile-column-full">
                      <div className="pll mobile-phn">

                        <h3 className="mbxs">It’s all about collaboration</h3>
                        <p>
                          Data governance platforms are powerful but your team is already collaborating in Slack and Microsoft Teams. Ellipsis can make it all happen seamlessly while tracking and recording conversations about data for compliance.
                        </p>

                      </div>
                    </div>
                  </div>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-fade">
              <div className="container container-c pbxxxl">

                <ResponsiveContainer>
                  <h1 className="align-c">How it works</h1>
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
              </div>
            </div>

            <div className="bg-blue-fade type-white pvxxxl">
              <div className="container container-c">
                <ResponsiveContainer>
                  <h2 className="align-c">Supported data governance software</h2>
                  <p className="align-c type-l">
                    <a href="https://marketplace.collibra.com/listings/ellipsis-collibra-bot/" target="collibra" className="link-light-blue type-bold">Collibra Data Governance Centre</a><br />
                    Alation Data Catalog <i className="type-gray-light">(coming soon)</i><br />
                    Informatica DG <i className="type-gray-light">(coming soon)</i><br />
                  </p>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-light pvxxxl">
              <div className="container container-c">
                <ResponsiveContainer>

                  <h2 className="align-c">Security and compliance</h2>

                  <div className="columns columns-elastic">
                    <div className="column-group">
                      <div className="column-row">
                        <div className="column column-shrink">
                          <div className="type-xl type-green">✓</div>
                        </div>
                        <div className="column column-expand pts">
                          <p className="type-l">
                            Ellipsis uses industry-standard technologies and services to secure data from unauthorized access, disclosure, inappropriate use, and loss of&nbsp;access.
                          </p>
                        </div>
                      </div>
                      <div className="column-row">
                        <div className="column column-shrink">
                          <div className="type-xl type-green">✓</div>
                        </div>
                        <div className="column column-expand pts">
                          <p className="type-l">
                            We ensure that the security policies of all our subprocessors are documented and up-to-date with industry compliance standards where&nbsp;required.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white pvxxxl">
              <div className="container container-c">

                <h2 className="align-c">Used by American Express to unify and speed&nbsp;up&nbsp;teams</h2>

                <h3 className="align-c mbxl">Example workflows</h3>

                <ResponsiveContainer>
                  <div className="flex-columns mobile-flex-no-columns">
                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border bg-blue-lightest">
                        <div className="color-blue-medium"><SearchIcon height={24} /></div>
                        Search and update business terms.
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border bg-blue-lightest">
                        <div className="color-blue-medium"><NotificationIcon height={24} /></div>
                        Notify stewards and run approval workflows directly in chat.
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border bg-blue-lightest">
                        <div className="color-blue-medium"><PinIcon height={24} /></div>
                        Link and archive conversations about data quality issues in Collibra.
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border bg-blue-lightest">
                        <div className="color-blue-medium"><DrawerIcon height={24} /></div>
                        Search report catalogs and return reports.
                      </div>
                    </div>
                  </div>
                </ResponsiveContainer>

                <div className="ptxxxxl align-c">
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

export default DataGovernance
