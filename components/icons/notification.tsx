import * as React from 'react';

interface Props {
  height: number
}

class NotificationIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg width={`${this.props.height}px`} height={`${this.props.height}px`} viewBox="0 0 24 24">
        <title>Notification</title>
        <g id="icon/notification" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.499,17.499 C18.579,15.579 17.5,12.974 17.5,10.258 L17.5,9.5 C17.5,6.876 15.812,4.651 13.466,3.836 C13.484,3.727 13.5,3.615 13.5,3.5 C13.5,2.395 12.604,1.5 11.5,1.5 C10.395,1.5 9.5,2.395 9.5,3.5 C9.5,3.615 9.516,3.727 9.534,3.836 C7.187,4.651 5.5,6.876 5.5,9.5 L5.5,10.258 C5.5,12.974 4.421,15.579 2.501,17.499 L2.5,17.5 L20.5,17.5 L20.499,17.499 Z M9.5,17.5 C9.5,18.6 10.4,19.5 11.5,19.5 C12.6,19.5 13.5,18.6 13.5,17.5" id="lineart" stroke="currentColor" />
        </g>
      </svg>
    );
  }
}

export default NotificationIcon
