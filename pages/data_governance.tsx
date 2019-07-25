import * as React from 'react'
import Page from '../components/page';
import Header, { NavSection, NavSubsection } from '../components/header';
import ResponsiveContainer from '../components/responsive_container';
import ContactButton from '../components/contact_button';
import SearchIcon from '../components/icons/search';
import NotificationIcon from '../components/icons/notification';
import PinIcon from '../components/icons/pin';
import DrawerIcon from '../components/icons/drawer';
import PageHeading from '../components/page_heading';

class DataGovernance extends React.Component {
  render() {
    return (
      <Page
        title="Data governance assurance - Collibra integration"
        description="Rollout new internal workflows by surfacing them in Slack or Microsoft Teams and automate your way to centralized quality data. Better workflows mean easier adoption and happier employees."
        canonicalPath="/data_governance/"
        onRender={(pageProps) => (
          <div>
            <div className="bg-eggplant bg-pattern-dot-cobalt">
              <Header
                isHomeVisible={true}
                onToggleContactForm={pageProps.toggleContactForm}
                activeSection={NavSection.Solutions}
                activeSubsection={NavSubsection.DataGovernance}
                className="pbn"
              />

              <PageHeading heading={"Data governance"} subheading={"We integrate with Collibra."} />

            </div>
            <div className="bg-mist bg-pattern-x-teal border-emphasis-top border-cobalt">
              <div className="container container-c bg-mist pbxxxl">
                <ResponsiveContainer>
                  <h2 className="align-c mtxxxl mbxxl mobile-mvxl">Get 10x adoption of data governance workflows across your company</h2>
                </ResponsiveContainer>

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
            <div className="bg-white bg-pattern-dot-teal">
              <div className="container container-c pbxl">
                <ResponsiveContainer>

                  <div className="flex-columns mobile-flex-no-columns">
                    <div className="flex-column column-one-half mobile-column-full ptxxl narrow-ptxl mobile-ptl phn">
                      <div className="phxxl mhxl narrow-phl mobile-mhn bg-white ptm height height-full">
                        <h4 className="mtn mbxs">Roll out data governance workflows&nbsp;fast</h4>
                        <p>
                          Launch your new data governance workflows in Slack or Microsoft Teams in days, measure adoption, and get user feedback, then rinse and repeat.
                        </p>
                      </div>
                    </div>
                    <div className="flex-column column-one-half mobile-column-full ptxxl narrow-ptxl mobile-ptl phn">
                      <div className="phxxl mhxl narrow-phl mobile-mhn bg-white ptm height height-full">

                        <h4 className="mtn mbxs">Give people the data they need when they need&nbsp;it</h4>
                        <p>
                          Make business terms, data catalogs, and reports accessible directly from Slack or Microsoft Teams. Employees can ask in plain English for the data they need when they need it. No training required.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mtxxl flex-columns mobile-flex-no-columns">
                    <div className="flex-column column-one-half mobile-column-full ptxxl narrow-ptxl mobile-ptl phn">
                      <div className="phxxl mhxl narrow-phl mobile-mhn bg-white ptm height height-full">

                        <h4 className="mtn mbxs">Ensure data quality across business&nbsp;units</h4>
                        <p>
                          Help people report data quality issues and inconsistencies with a simple conversational interface everyone will love.
                        </p>

                      </div>
                    </div>
                    <div className="flex-column column-one-half mobile-column-full ptxxl narrow-ptxl mobile-ptl phn">
                      <div className="phxxl mhxl narrow-phl mobile-mhn bg-white ptm height height-full">

                        <h4 className="mtn mbxs">It’s all about collaboration</h4>
                        <p>
                          Data governance platforms are powerful but your team is already collaborating in Slack and Microsoft Teams. Ellipsis can make it all happen seamlessly while tracking and recording conversations about data for compliance.
                        </p>

                      </div>
                    </div>
                  </div>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="pvxxl narrow-ptl narrow-pbxxl mobile-pvl bg-mist bg-pattern-x-teal">
              <div className="container container-c bg-mist">

                <ResponsiveContainer>
                  <h2 className="align-c">How it works</h2>
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
            </div>

            <div className="bg-cobalt bg-pattern-dot-eggplant type-white ptxxl pbxl">
              <div className="container container-c bg-cobalt">
                <ResponsiveContainer>
                  <h3 className="align-c">Supported data governance software</h3>
                  <p className="align-c type-l pbxl">
                    <a href="https://marketplace.collibra.com/listings/ellipsis-collibra-bot/" target="collibra" className="link-light-blue type-bold">Collibra Data Governance Centre</a><br />
                    Alation Data Catalog <i className="type-gray-light">(coming soon)</i><br />
                    Informatica DG <i className="type-gray-light">(coming soon)</i><br />
                  </p>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-mist ptxxl pbxl bg-pattern-dot-teal">
              <div className="container container-c bg-mist">
                <ResponsiveContainer>

                  <h3 className="align-c">Security and compliance</h3>

                  <div className="columns columns-elastic">
                    <div className="column-group">
                      <div className="column-row">
                        <div className="column column-shrink">
                          <div className="type-xl color-cobalt">✓</div>
                        </div>
                        <div className="column column-expand pts">
                          <p className="type-l">
                            Ellipsis uses industry-standard technologies and services to secure data from unauthorized access, disclosure, inappropriate use, and loss of&nbsp;access.
                          </p>
                        </div>
                      </div>
                      <div className="column-row">
                        <div className="column column-shrink">
                          <div className="type-xl color-cobalt">✓</div>
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

            <div className="bg-teal bg-pattern-dot-mist pvxxl">
              <div className="container container-c bg-teal ptxl pbxl">

                <h3 className="align-c mtn mbn">Used by American Express to unify and speed&nbsp;up&nbsp;teams</h3>

                <h4 className="align-c mtn mbm pvs">Example workflows</h4>

                <ResponsiveContainer>
                  <div className="flex-columns mobile-flex-no-columns">
                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border bg-white">
                        <div className="color-cobalt"><SearchIcon height={24} /></div>
                        Search and update business terms.
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border bg-white">
                        <div className="color-cobalt"><NotificationIcon height={24} /></div>
                        Notify stewards and run approval workflows directly in chat.
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border bg-white">
                        <div className="color-cobalt"><PinIcon height={24} /></div>
                        Link and archive conversations about data quality issues in Collibra.
                      </div>
                    </div>

                    <div className="flex-column column-one-quarter mobile-column-full align-t">
                      <div className="height pal align-l mhs mbl height-full border bg-white">
                        <div className="color-cobalt"><DrawerIcon height={24} /></div>
                        Search report catalogs and return reports.
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

export default DataGovernance
