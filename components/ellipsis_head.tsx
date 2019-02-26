import * as React from 'react'
import Head from 'next/head'
import '../less/main.less'

interface Props {
  title?: string
}

class EllipsisHead extends React.Component<Props> {
  render() {
    return (
      <Head>
        <title>{this.props.title}{this.props.title ? " · " : ""}Ellipsis.ai</title>
        <link href='https://fonts.googleapis.com/css?Source+Sans+Pro:400,300,600,400italic,300italic,600italic' rel='stylesheet' type='text/css'></link>
      </Head>
    );
  }
}

export default EllipsisHead
