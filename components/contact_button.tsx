import * as React from 'react'
import autobind from '../lib/autobind';

interface Props {
  onClick: () => void
  label?: React.ReactNode
}

class ContactButton extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    autobind(this);
  }

  render() {
    return (
      <button
        type="button"
        className="button button-l button-primary type-label"
        onClick={this.props.onClick}
      >{this.props.label || "Get a proof of concept"}</button>
    );
  }
}

export default ContactButton
