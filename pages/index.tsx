import * as React from 'react'
import EllipsisHead from '../components/ellipsis_head';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '../components/contact_form';

class Home extends React.Component {
  render() {
    return (
      <div>
        <EllipsisHead />

        <div className="page">
          <div className="bg-blue-fade">
            <Header isHomeVisible={false} />

            <div id="hero" className="hero align-c ptxxxxl narrow-ptxxl mobile-ptn pbhuge narrow-pbxxxl type-white">
              <div className="container container-c">
                <div className="columns pbxxxxl mobile-pbn">
                  <div className="column column-one-fifth narrow-display-none"></div>
                  <div className="column column-three-fifths narrow-column-full narrow-phxl">
                    <h1 className="">The happiest way to roll out new internal workflows</h1>

                    <p className="mbxxxxl mobile-mbxxl type-l color-gray-lightest">
                      Transform your enterprise workplace by automating &amp; centralizing pesky
                      workflows in existing chat tools in less than a week.
                    </p>

                    <button type="button" className="button button-l button-primary type-label">Get more info &amp; a proof-of-concept</button>
                  </div>
                  <div className="column column-one-fifth narrow-display-none"></div>
                </div>
              </div>
            </div>

          </div>

          <div className="">

            <div id="benefits" className="">
              <div className="grid columns columns-elastic mobile-columns-float">
                <div className="column-group">
                  <div className="column-row">
                    <div className="column column-one-half mobile-column-full bg-gray-light prn"></div>
                    <div className="column column-one-half mobile-column-full pthuge narrow-ptxxxl">

                      <div className="max-width-30 plhuge narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                        <div className="">
                          <img src="/static/images/icons/getting_done@2x.png" width="101" />
                        </div>

                        <h2 className="">Rest assured, it’s getting done</h2>
                        <p className="type-l">
                          The difference between a complicated workflow and easy automation is
                          the difference between tasks sitting on a backlog and getting done.
                        </p>
                      </div>

                    </div>
                  </div>
                  <div className="column-row">
                    <div className="column column-one-half mobile-column-full pthuge narrow-ptxxxl prn">

                      <div className="column-right">
                        <div className="max-width-30 prhuge narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                          <div className="">
                            <img src="/static/images/icons/save_time@2x.png" width="91" />
                          </div>
                
                          <h2 className="">Save time</h2>
                          <p className="type-l">
                            Empower your employees to focus on the things that matter. Close the gaps.
                            Collaborate better. Everyone likes moving faster.
                          </p>

                        </div>
                      </div>

                    </div>
                    <div className="column column-one-half mobile-column-full bg-gray-light"></div>
                  </div>
                  <div className="column-row">
                    <div className="column column-one-half mobile-column-full bg-gray-light photo-happy-employees position-relative">
                      <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                      <div className="position-absolute position-bottom-right">
                        <div className="mrhuge narrow-mhxxl max-width-30 mobile-max-width-none type-tight">
                          <span className="bg-white">Employees at Plenty use Ellipsis to deliver mission-critical reports every day to their colleagues.</span>
                        </div>
                      </div>
                    </div>
                    <div className="column column-one-half mobile-column-full pthuge narrow-ptxxxl">

                      <div className="max-width-30 plhuge narrow-phxxl pbxxxxl narrow-pbxl mobile-max-width-none">
                        <div className="">
                          <img src="/static/images/icons/happiness@2x.png" width="98" />
                        </div>
                        <h2 className="">Employee happiness</h2>
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

                <div className="columns">
                  <div className="column column-one-fifth narrow-display-none"></div>
                  <div className="column column-three-fifths narrow-column-full narrow-phxxl">
                    <h1 className="align-c">Get 10x adoption of your pesky workflows in less than a week</h1>

                  </div>
                  <div className="column column-one-fifth narrow-display-none"></div>
                </div>

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
                  <button type="button" className="button button-primary button-l type-label">Get a proof of concept</button>
                </div>
              </div>
            </div>

            <div id="logoStrip" className="bg-white">
              <div className="container container-c">
                <div className="ptxxl pbl align-c">
                  <img className="mrxl mbxl align-m" src="/static/images/logos/amex_1600x1600.png" alt="American Express" width="80" />
                  <img className="mhxl mbxl align-m" src="/static/images/logos/collibra_1496x408.png" alt="Collibra" width="130" />
                  <img className="mhxl mbxl align-m" src="/static/images/logos/mighty_networks_1174x300.svg" alt="Mighty Networks" width="130" />
                  <img className="mhxl mbxl align-m" src="/static/images/logos/plenty_color_528x368.png" alt="Plenty" width="80" />                  
                </div>
              </div>
            </div>

            <div id="customer-stories" className="pvxxxxl narrow-ptl mobile-pbxxl mobile-phxxl align-c bg-lightest">
              <h2 className="">Hear our customer stories</h2>

              <div className="columns">
                <div className="column column-one-fifth narrow-display-none" />
                <div className="column column-three-fifths narrow-column-full ptxxxl mobile-ptl narrow-phxxl">

                  <img src="/static/images/headshots/perry_skorcz.jpg" width="100" className="border-round" />

                  <blockquote className="type-l mtxl mbn mhn">
                    <p><i>“What value does Ellipsis provide? We’ve used it to automate 5–6 end-of-day messages 
                      and noticed the time it saves the team. I’d say that [these daily reports] only take 
                      five minutes a day now instead of not having them at all.”</i></p>

                    <p>—Perry Skorcz, Head of Farm Operations at Plenty</p>
                  </blockquote>
                </div>
                <div className="column column-one-fifth narrow-display-none" />
              </div>
            </div>

            <div id="last-chance" className="pvxxxxl narrow-pvl narrow-phxxl align-c">
              <h2>Ready to learn more? Reach out for your free proof-of-concept.</h2>

              <div className="pvxl">
                <button type="button" className="button button-l button-primary type-label">Get a proof of concept</button>
              </div>
            </div>

          </div>

          <div className="position-fixed-full bg-scrim position-z-front">
            <ContactForm />
          </div>
          <Footer />
        </div>

      </div>
    );
  }
}

export default Home
