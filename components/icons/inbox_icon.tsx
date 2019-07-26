import * as React from 'react';

interface Props {
  height: number
}

class InboxIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg width={`${this.props.height}px`} height={`${this.props.height}px`} viewBox="0 0 24 24">
        <title>Inbox</title>
        <g id="icon/inbox-receive" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13.5,5.5 L16.5,5.5 L20.5,12.5 M2.5,12.5 L6.5,5.5 L9.5,5.5 M20.5,18.5 L2.5,18.5 L2.5,12.5 L8.5,12.5 L9.5,14.5 L13.5,14.5 L14.5,12.5 L20.5,12.5 L20.5,18.5 Z M11.5,1.5 L11.5,11.5 M14.5,8.5 L11.5,11.5 L8.5,8.5" id="lineart" stroke="currentColor"></path>
        </g>

      </svg>
    );
  }
}

export default InboxIcon
