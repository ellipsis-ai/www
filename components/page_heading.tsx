import * as React from 'react';

interface Props {
  heading: React.ReactNode
  subheading: React.ReactNode
}

class PageHeading extends React.PureComponent<Props> {
  render() {
    return (

      <div className="container container-c ptl bg-eggplant">
        <div className="columns">
          <div className="column column-one-half mobile-column-full mobile-align-c">
            <h3 className="type-label type-white mtn">{this.props.heading}</h3>
          </div>
          <div className="column column-one-half mobile-column-full align-r mobile-align-c">
            <h3 className="type-white mtn">{this.props.subheading}</h3>
          </div>
        </div>
      </div>

    );
  }
}

export default PageHeading;
