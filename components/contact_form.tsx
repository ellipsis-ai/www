import * as React from 'react'
import autobind from '../lib/autobind';
import FormInput from './form_input';
import Textarea from './textarea';

interface Props {}

interface State {
  firstName: string
  lastName: string
  companyName: string
  jobTitle: string
  email: string
  phone: string
  contactMethod: "Phone" | "Email"
  about: string
}

const mailChimpActionUrl = "https://ellipsis.us14.list-manage.com/subscribe/post?u=7e90c1fb7ff3d6aab44c1c25e&amp;id=20ddfafccc";

class ContactForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autobind(this);
    this.state = {
      firstName: "",
      lastName: "",
      companyName: "",
      jobTitle: "",
      email: "",
      phone: "",
      contactMethod: "Email",
      about: ""
    }
  }

  setFirstName(newValue: string): void {
    this.setState({ firstName: newValue });
  }

  setLastName(newValue: string): void {
    this.setState({ lastName: newValue });
  }

  setCompanyName(newValue: string): void {
    this.setState({ companyName: newValue });
  }

  setTitle(newValue: string): void {
    this.setState({ jobTitle: newValue });
  }

  setEmail(newValue: string): void {
    this.setState({ email: newValue.replace(/\s/g, "") });
  }

  setPhone(newValue: string): void {
    this.setState({ phone: newValue.replace(/\s/g, "") });
  }

  setContactMethodEmail(): void {
    this.setState({ contactMethod: "Email" });
  }

  setContactMethodPhone(): void {
    this.setState({ contactMethod: "Phone" });
  }

  setAbout(newValue: string): void {
    this.setState({ about: newValue });
  }

  render() {
    return (
      <div>
        <form action={mailChimpActionUrl} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
          <div className="columns">
            <div className="column column-one-fifth narrow-display-none"></div>
            <div className="column column-three-fifths  narrow-column-full">
              <div className="pvxxxl bg-white">
                <div className="container container-c container-narrow phxxl mobile-phxl">
                  <div className="columns mvxl">
                    <div className="column column-one-third narrow-column-one-half mobile-column-full mobile-mbxl">
                      <h5><label htmlFor="FNAME">First name </label></h5>
                      <FormInput onChange={this.setFirstName} autoFocus={true} value={this.state.firstName} name="FNAME" className="form-input form-input-borderless" id="FNAME" />
                    </div>
                    <div className="column column-one-third narrow-column-one-half mobile-column-full mobile-mbxl">
                      <h5><label htmlFor="LNAME">Last name </label></h5>
                      <FormInput onChange={this.setLastName} value={this.state.lastName} name="LNAME" className="form-input form-input-borderless" id="LNAME" />
                    </div>
                    <div className="column column-one-half narrow-column-full"></div>
                  </div>

                  <div className="columns mvxl">
                    <div className="column column-one-half mobile-column-full mobile-mbxl">
                      <h5><label htmlFor="COMPANY">Company name </label></h5>
                      <FormInput onChange={this.setCompanyName} value={this.state.companyName} name="COMPANY" className="form-input form-input-borderless" id="COMPANY" />
                    </div>
                    <div className="column column-one-half mobile-column-full mobile-mbxl">
                      <h5><label htmlFor="TITLE">Job title <span className="type-regular type-disabled">(Optional)</span></label></h5>
                      <FormInput onChange={this.setTitle} value={this.state.jobTitle} name="TITLE" className="form-input form-input-borderless" id="TITLE" />
                    </div>
                    <div className="column column-one-half narrow-column-full"></div>
                  </div>

                  <div className="columns mvxl">
                    <div className="column column-one-half narrow-column-full narrow-mbxl">
                      <h5><label htmlFor="EMAIL">Email address</label></h5>
                      <FormInput onChange={this.setEmail} type="email" value={this.state.email} name="EMAIL" className="form-input form-input-borderless" id="EMAIL" />
                    </div>
                    <div className="column column-one-half narrow-column-full narrow-mbxl">
                      <h5><label htmlFor="PHONE">Phone number <span className="type-regular type-disabled">(Optional)</span></label></h5>
                      <FormInput onChange={this.setPhone} type="tel" name="PHONE" className="form-input form-input-borderless" value={this.state.phone} id="PHONE" />
                    </div>
                    <div className="column column-one-quarter narrow-column-full narrow-mbxl"></div>
                  </div>

                  <div className="mvxl">
                    <h5 className="mbm">Preferred contact method</h5>
                    <div className="columns">
                      <div className="column column-one-quarter mobile-column-one-half">
                        <input onChange={this.setContactMethodEmail} type="radio" value="Email" name="METHOD" id="METHOD-0" checked={this.state.contactMethod === "Email"} /><label htmlFor="METHOD-0"> Email</label>
                      </div>
                      <div className="column column-one-quarter mobile-column-one-half">
                        <input onChange={this.setContactMethodPhone} type="radio" value="Phone" name="METHOD" id="METHOD-1" checked={this.state.contactMethod === "Phone"} /><label htmlFor="METHOD-1"> Phone</label>
                      </div>
                      <div className="column column-one-half narrow-column-full"></div>
                    </div>
                  </div>

                  <div className="mvxl">
                    <h5><label htmlFor="ABOUT">What can we help with? <span className="type-regular type-disabled">(Optional)</span></label></h5>
                    <div>
                      <Textarea onChange={this.setAbout} name="ABOUT" id="ABOUT" rows={4} className="form-input form-input-height-auto" value={this.state.about} />
                    </div>
                  </div>

                  <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                    <input type="text" name="b_7e90c1fb7ff3d6aab44c1c25e_20ddfafccc" tabIndex={-1} value="" />
                  </div>
                  <div>
                    <button type="submit" name="subscribe" id="mc-embedded-subscribe"
                      className="button button-primary">Send contact details</button>
                  </div>

                  <div id="errorMessages" className="mtxl type-pink type-bold"></div>

                </div>
              </div>
            
            </div>
            <div className="column column-one-fifth narrow-display-none"></div>
          </div>

        </form>
      </div>
    );
  }
}

export default ContactForm
