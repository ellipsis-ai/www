import * as React from 'react'

interface Props {
  open: boolean
}

class MenuIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
        <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          {this.props.open ? (
            <g transform="translate(2, 2)" fill="currentColor" fillRule="nonzero">
              <path d="M8,6.58578644 L13.2928932,1.29289322 C13.6834175,0.902368927 14.3165825,0.902368927 14.7071068,1.29289322 C15.0976311,1.68341751 15.0976311,2.31658249 14.7071068,2.70710678 L9.41421356,8 L14.7071068,13.2928932 C15.0976311,13.6834175 15.0976311,14.3165825 14.7071068,14.7071068 C14.3165825,15.0976311 13.6834175,15.0976311 13.2928932,14.7071068 L8,9.41421356 L2.70710678,14.7071068 C2.31658249,15.0976311 1.68341751,15.0976311 1.29289322,14.7071068 C0.902368927,14.3165825 0.902368927,13.6834175 1.29289322,13.2928932 L6.58578644,8 L1.22146465,2.63567821 C0.830940356,2.24515392 0.830940356,1.61198894 1.22146465,1.22146465 C1.61198894,0.830940356 2.24515392,0.830940356 2.63567821,1.22146465 L8,6.58578644 Z" id="Combined-Shape" />
            </g>
          ) : (
            <g transform="translate(0, 5)" fill="currentColor" fillRule="nonzero">
                <path d="M0,0 L20,0 L20,2 L0,2 L0,0 Z M0,7 L20,7 L20,9 L0,9 L0,7 Z" id="Combined-Shape"></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}

export default MenuIcon
