import * as React from 'react';

interface Props {
  height: number
}

class SearchIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg width={`${this.props.height}px`} height={`${this.props.height}px`} viewBox="0 0 24 24">
        <title>Search</title>
        <g id="icon/search" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5,20.5 L14.449,14.449 L20.5,20.5 Z M16.5,9.5 C16.5,13.366 13.366,16.5 9.5,16.5 C5.634,16.5 2.5,13.366 2.5,9.5 C2.5,5.634 5.634,2.5 9.5,2.5 C13.366,2.5 16.5,5.634 16.5,9.5 Z" id="lineart" stroke="currentColor" />
        </g>
      </svg>
    );
  }
}

export default SearchIcon
