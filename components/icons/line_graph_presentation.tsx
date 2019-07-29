import * as React from 'react';

interface Props {
  height: number
}

class LineGraphPresentationIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg width={`${this.props.height}px`} height={`${this.props.height}px`} viewBox="0 0 24 24">
        <title>Line Graph Presentation</title>
        <g id="icon/line-graph-presentation" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5,15.5 L20.5,15.5 L20.5,3.5 L2.5,3.5 L2.5,15.5 Z M6.5,20.5 L8.5,15.5 M16.5,20.5 L14.5,15.5 M1.5,15.5 L21.5,15.5 M11.5,1.5 L11.5,3.5 M11.5,15.5 L11.5,20.5 M15.5,12.5 L7.5,12.5 L7.5,6.5 M7.5,12.5 L10.5,8.5 L12.5,10.5 L15.5,6.5" id="lineart" stroke="currentColor"></path>
        </g>
      </svg>
    );
  }
}

export default LineGraphPresentationIcon
