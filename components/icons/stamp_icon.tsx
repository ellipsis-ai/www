import * as React from 'react';

interface Props {
  height: number
}

class StampIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg width={`${this.props.height}px`} height={`${this.props.height}px`} viewBox="0 0 24 24">
        <title>Line Graph Presentation</title>
        <g id="icon/stamp-tool" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5,18.5 L2.5,18.5 L2.5,15.5 C2.5,14.396 3.396,13.5 4.5,13.5 L18.5,13.5 C19.604,13.5 20.5,14.396 20.5,15.5 L20.5,18.5 Z M15.5,6.5 C15.5,4.291 13.709,2.5 11.5,2.5 C9.291,2.5 7.5,4.291 7.5,6.5 C7.5,7.977 8.31,9.252 9.5,9.945 L9.5,13.5 L13.5,13.5 L13.5,9.945 C14.69,9.252 15.5,7.977 15.5,6.5 Z M3.5,20.5 L19.5,20.5 L19.5,18.5 L3.5,18.5 L3.5,20.5 Z" id="lineart" stroke="currentColor"></path>
        </g>
      </svg>
    );
  }
}

export default StampIcon
