import * as React from 'react';

interface Props {
  height: number
}

class PinIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg width={`${this.props.height}px`} height={`${this.props.height}px`} viewBox="0 0 24 24">
        <title>Pin</title>
        <g id="icon/pin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3.5,19.5 L9,14 L3.5,19.5 Z M12.5,17.5 L5.5,10.5 L9.5,9.5 L13.5,5.5 L14.5,1.5 L21.5,8.5 L17.5,9.5 L13.5,13.5 L12.5,17.5 Z" id="lineart" stroke="currentColor" />
        </g>
      </svg>
    );
  }
}

export default PinIcon
