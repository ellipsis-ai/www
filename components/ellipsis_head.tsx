import * as React from 'react'
import Head from 'next/head'
import '../less/main.less'

interface Props {
  title?: string
  description: string
}

class EllipsisHead extends React.Component<Props> {
  render() {
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content={this.props.description} />
        <title>{this.props.title || ""}{this.props.title ? " · " : ""}Ellipsis.ai</title>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,600i" rel="stylesheet" />

        {/* IE 10+ "Metro" Tiles - 144x144 pixels in size icon should be transparent */}
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/static/images/favicon-144x144.png" />
        {/* Touch Icons - iOS and Android 2.1+ 152x152 pixels in size. */}
        <link rel="apple-touch-icon-precomposed" href="/static/images/favicon-apple-152x152.png" />

        {/* Firefox, Chrome, Safari, IE 11+ and Opera. 96x96 pixels in size. */}
        <link rel="icon" href="/static/images/favicon-256x256.png" sizes="256x256" />
        <link rel="icon" href="/static/images/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" href="/static/images/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/static/images/favicon-16x16.png" sizes="16x16" />

      </Head>
    );
  }
}

export default EllipsisHead
