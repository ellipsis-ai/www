import * as React from 'react'
import autobind from '../lib/autobind';
import EllipsisHead from '../components/ellipsis_head';
import Header from '../components/header';
import ContactForm from '../components/contact_form';
import Footer from '../components/footer';
import Link from 'next/link';

interface Props { }
interface State {
  contactFormVisible: boolean
}

class Error extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    autobind(this);
    this.state = {
      contactFormVisible: false
    };
  }

  toggleContactForm(): void {
    this.setState({ contactFormVisible: !this.state.contactFormVisible });
  }

  render() {
    return (
      <div>
        <EllipsisHead title="Page not found" description="" />
        <div className="page">
          <div className="bg-blue-fade">
            <Header isHomeVisible={true} onToggleContactForm={this.toggleContactForm} />
          </div>
          <div className="bg-white">
            <div className="container container-c pvxxl narrow-pvl mobile-pvn align-c height-page">

              <h1>Page not found</h1>

              <p className="type-l">An error occurred loading this page. It may not exist or it may have moved.</p>

              <p className="type-l"><Link prefetch href="/"><a>Home</a></Link></p>

            </div>
          </div>

          <ContactForm onDone={this.toggleContactForm} isVisible={this.state.contactFormVisible} />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Error
