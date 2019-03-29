import * as React from 'react'
import autobind from '../lib/autobind';
import ContactForm from './contact_form';
import Footer from './footer';
import EllipsisHead from './ellipsis_head';

interface Props {
  title?: string
  description: string
  canonicalPath: string | null
  onRender: (pageProps: PageProps) => React.ReactNode
}

export interface PageProps {
  toggleContactForm: () => void
  contactFormVisible: boolean
}

interface State {
  contactFormVisible: boolean
}

class Page extends React.Component<Props, State> {
  pageContainer?: HTMLDivElement | null

  constructor(props: Props) {
    super(props);
    autobind(this);
    this.state = {
      contactFormVisible: false
    };
  }

  toggleContactForm(): void {
    this.setState({ contactFormVisible: !this.state.contactFormVisible }, () => {
      if (this.state.contactFormVisible) {
        window.document.documentElement.className = "height-window display-overflow-hidden"
      } else {
        window.document.documentElement.className = ""
      }
    });
  }

  render() {
    return (
      <div>
        <EllipsisHead
          title={this.props.title}
          description={this.props.description}
          canonicalPath={this.props.canonicalPath}
        />

        <ContactForm
          onDone={this.toggleContactForm}
          isVisible={this.state.contactFormVisible}
        />

        <div aria-hidden={this.state.contactFormVisible}>
          {this.props.onRender({
            toggleContactForm: this.toggleContactForm,
            contactFormVisible: this.state.contactFormVisible
          })}
          <Footer />
        </div>

      </div>
    );
  }
}

export default Page
