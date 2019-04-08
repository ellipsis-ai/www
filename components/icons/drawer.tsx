import * as React from 'react';

interface Props {
  height: number
}

class DrawerIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg width={`${this.props.height}px`} height={`${this.props.height}px`} viewBox="0 0 24 24">
        <title>Pin</title>
        <g id="icon/drawer" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2.5,18.5 L20.5,18.5 L20.5,8.5 L2.5,8.5 L2.5,18.5 Z M9.5,14.5 L13.5,14.5 M8.5,12.5 L14.5,12.5 L14.5,10.5 L8.5,10.5 L8.5,12.5 Z M4.5,8.5 L4.5,6.5 L18.5,6.5 L18.5,8.5 M16.5,6.5 L16.5,4.5 L6.5,4.5 L6.5,6.5" id="lineart" stroke="currentColor"></path>
        </g>

      </svg>
    );
  }
}

export default DrawerIcon
