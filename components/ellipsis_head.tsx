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
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>{this.props.title}{this.props.title ? " · " : ""}Ellipsis.ai</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i" rel="stylesheet" />
      </Head>
    );
  }
}

export default EllipsisHead
