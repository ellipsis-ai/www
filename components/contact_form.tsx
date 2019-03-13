import * as React from 'react'
import autobind from '../lib/autobind';
import FormInput from './form_input';
import { timingSafeEqual } from 'crypto';

interface Props {
  onDone: () => void
  isVisible: boolean
}

type FormFieldKeys = "firstName" | "lastName" | "companyName" | "jobTitle" | "email" | "phone" | "contactMethod" | "about"
type FormFieldValues = { [K in FormFieldKeys]: string };
type State = FormFieldValues & {
  error: string
}

const mailChimpActionUrl = "https://ellipsis.us14.list-manage.com/subscribe/post?u=7e90c1fb7ff3d6aab44c1c25e&amp;id=20ddfafccc";
const requiredFields: Array<FormFieldKeys> = ["firstName", "lastName", "companyName", "email", "contactMethod"];
const descriptions: FormFieldValues = {
  firstName: "first name",
  lastName: "last name",
  companyName: "company name",
  jobTitle: "job title",
  email: "email address",
  phone: "phone number",
  contactMethod: "contact method",
  about: "how we can help"
}

class ContactForm extends React.Component<Props, State> {
  focusableField: FormInput | null | undefined;
  container: HTMLDivElement | null | undefined;

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
      about: "",
      error: ""
    };
  }

  componentDidMount() {
    window.addEventListener('keyup', this.keyHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyHandler);
  }

  keyHandler(event: KeyboardEvent) {
    if (event.key === "Escape" && this.props.isVisible) {
      this.cancel();
    }
    if (event.key === "Tab" && this.container) {
      const focused = window.document.querySelector("*:focus");
      const focusableElements = this.container.querySelectorAll<HTMLElement>("input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])");
      if (focused && this.container && !this.container.contains(focused) && this.focusableField) {
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && last) {
          console.log(last);
          last.focus();
        } else if (!event.shiftKey && first) {
          first.focus();
        }
      }
    }
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.isVisible && !this.props.isVisible && this.focusableField) {
      this.focusableField.focus();
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

  validateAndSend(event: React.FormEvent): void {
    const missingFields = requiredFields.filter((ea) => !this.state[ea].trim());
    if (missingFields.length > 0) {
      event.preventDefault();
      this.setState({
        error: `Please provide the following information: ${missingFields.map((ea) => descriptions[ea]).join(", ")}`
      });
    }
  }

  cancel(): void {
    this.setState({
      error: ""
    }, () => {
      this.props.onDone();
    })
  }

  dontCancel(event: React.MouseEvent): void {
    event.stopPropagation();
  }

  render() {
    return (
      <div ref={(el) => this.container = el} className={`fade-in ${this.props.isVisible ? "" : "display-none"}`} aria-modal={true} aria-labelledby="contact-heading" role="dialog">
        <div className="position-fixed-full bg-scrim position-z-scrim fade-in" onClick={this.cancel} />
        <div className="position-fixed-top position-top-full position-z-front" onClick={this.cancel}>
          <form action={mailChimpActionUrl} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
            <div className="columns">
              <div className="column column-one-fifth narrow-display-none"></div>
              <div className="column column-three-fifths narrow-column-full" onClick={this.dontCancel}>
                <div className="mtxxl narrow-mtn pvm bg-white position-relative">
                  <div className="container container-c container-narrow phxxl mobile-phxl">

                    <div className="position-absolute position-top-right">
                      <button type="button" className="button-subtle button-shrink" onClick={this.cancel}><span className="type-xl">×</span></button>
                    </div>
                    <h2 className="mobile-mtm" id="contact-heading">Get more info &amp; a proof-of-concept</h2>

                    <p>Compliance work, daily reporting, service requests, data governance, and more — it doesn’t have to be painful.</p>

                    <p>Send us your contact details and we’ll be in touch shortly.</p>

                    <div className="columns mvxl mobile-mvn">
                      <div className="column column-one-third narrow-column-one-half">
                        <h5><label htmlFor="FNAME">First name </label></h5>
                        <FormInput ref={(el) => this.focusableField = el} onChange={this.setFirstName} autoFocus={true} value={this.state.firstName} name="FNAME" className="form-input form-input-borderless" id="FNAME" />
                      </div>
                      <div className="column column-two-thirds narrow-column-one-half">
                        <h5><label htmlFor="LNAME">Last name </label></h5>
                        <FormInput onChange={this.setLastName} value={this.state.lastName} name="LNAME" className="form-input form-input-borderless" id="LNAME" />
                      </div>
                    </div>

                    <div className="columns mvxl mobile-mvn">
                      <div className="column column-one-half">
                        <h5><label htmlFor="COMPANY">Company name </label></h5>
                        <FormInput onChange={this.setCompanyName} value={this.state.companyName} name="COMPANY" className="form-input form-input-borderless" id="COMPANY" />
                      </div>
                      <div className="column column-one-half">
                        <h5><label htmlFor="TITLE">Job title <span className="type-regular type-disabled">(Optional)</span></label></h5>
                        <FormInput onChange={this.setTitle} value={this.state.jobTitle} name="TITLE" className="form-input form-input-borderless" id="TITLE" />
                      </div>
                    </div>

                    <div className="columns mvxl mobile-mvn">
                      <div className="column column-one-half mobile-column-full narrow-mbl mobile-mbn">
                        <h5><label htmlFor="EMAIL">Email address</label></h5>
                        <FormInput onChange={this.setEmail} type="email" value={this.state.email} name="EMAIL" className="form-input form-input-borderless" id="EMAIL" />
                      </div>
                      <div className="column column-one-half mobile-display-none narrow-mbl mobile-mbn">
                        <h5><label htmlFor="PHONE">Phone number <span className="type-regular type-disabled">(Optional)</span></label></h5>
                        <FormInput onChange={this.setPhone} type="tel" name="PHONE" className="form-input form-input-borderless" value={this.state.phone} id="PHONE" />
                      </div>
                    </div>

                    <div className="mvxl mobile-display-none">
                      <h5 className="mbm">Preferred contact method</h5>
                      <div className="columns">
                        <div className="column column-one-quarter mobile-column-one-half">
                          <input onChange={this.setContactMethodEmail} type="radio" value="Email" name="METHOD" id="METHOD-0" checked={this.state.contactMethod === "Email"} /><label htmlFor="METHOD-0"> Email</label>
                        </div>
                        <div className="column column-one-quarter mobile-column-one-half prn">
                          <input onChange={this.setContactMethodPhone} type="radio" value="Phone" name="METHOD" id="METHOD-1" checked={this.state.contactMethod === "Phone"} /><label htmlFor="METHOD-1"> Phone</label>
                        </div>
                        <div className="column column-one-half narrow-display-none"></div>
                      </div>
                    </div>

                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                      <input type="text" name="b_7e90c1fb7ff3d6aab44c1c25e_20ddfafccc" tabIndex={-1} value="" readOnly={true} />
                    </div>

                    <div id="errorMessages" className="mtm type-pink type-bold">{this.state.error}</div>

                    <div className="mtxl">
                      <button type="submit" name="subscribe" id="mc-embedded-subscribe"
                        className="button button-primary mrm mbm" onClick={this.validateAndSend}>Send contact details</button>
                      <button type="button" className="button mbm" onClick={this.cancel}>Cancel</button>
                    </div>

                  </div>
                </div>
              </div>
              <div className="column column-one-fifth narrow-display-none"></div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm
