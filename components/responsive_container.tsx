import * as React from 'react'

interface Props {
  children: React.ReactNode
}

class ResponsiveContainer extends React.PureComponent<Props> {
  render() {
    return (
      <div className="columns">
        <div className="column column-one-fifth narrow-display-none" />
        <div className="column column-three-fifths narrow-column-full phn narrow-phxxl">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ResponsiveContainer
