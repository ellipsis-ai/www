import * as React from 'react'

interface Props {
  height: number
}

class EmailIcon extends React.PureComponent<Props> {
  render() {
    return (
      <svg height={this.props.height} width={this.props.height * 42/45} viewBox="0 0 42 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>Email</title>
        <g id="email" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M39.4749046,30.5951472 L26.5162272,18.2535497 L39.3961933,6.33038105 C40.3825521,7.24368324 41,8.54973527 41,10 L41,27 C41,28.4112937 40.4152899,29.6860211 39.4749046,30.5951472 Z M38.6295788,31.2534948 C38.1517287,31.5495375 37.6202868,31.7673037 37.0531576,31.8888889 L4.94684238,31.8888889 C4.3797132,31.7673037 3.84827134,31.5495375 3.37042117,31.2534948 L16.2629771,18.9748702 L21,23.36 L25.7370229,18.9748702 L38.6295788,31.2534948 Z M2.52509544,30.5951472 C1.58471012,29.6860211 1,28.4112937 1,27 L1,10 C1,8.54973527 1.61744795,7.24368324 2.60380669,6.33038105 L15.4837728,18.2535497 L2.52509544,30.5951472 Z M6,5 L36,5 C36.9295304,5 37.799818,5.25364891 38.5454231,5.69550718 L21,21.937556 L3.4545769,5.69550718 C4.20018202,5.25364891 5.07046957,5 6,5 Z" id="Combined-Shape" fill="currentColor" fillRule="nonzero"></path>
        </g>
      </svg>
    );
  }
}

export default EmailIcon