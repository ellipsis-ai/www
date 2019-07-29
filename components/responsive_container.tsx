import * as React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  outerClassName?: string
}

class ResponsiveContainer extends React.PureComponent<Props> {
  render() {
    return (
      <div className={this.props.outerClassName || ""}>
        <div className="columns">
          <div className="column column-one-eighth wide-column-one-fifth narrow-display-none phn" />
          <div className={`column column-three-quarters wide-column-three-fifths narrow-column-full phn ${this.props.className || ""}`}>
            {this.props.children}
          </div>
          <div className="column column-one-eighth wide-column-one-fifth narrow-display-none phn" />
        </div>
      </div>
    );
  }
}

export default ResponsiveContainer
