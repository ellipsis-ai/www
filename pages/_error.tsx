import * as React from 'react'
import Header from '../components/header';
import Link from 'next/link';
import Page from '../components/page';

class Error extends React.Component {
  render() {
    return (
      <Page
        title="Page not found"
        description=""
        canonicalPath={null}
        onRender={(pageProps) => (
        <div className="page">
          <div className="bg-blue-fade">
            <Header isHomeVisible={true} onToggleContactForm={pageProps.toggleContactForm} />
          </div>
          <div className="bg-white">
            <div className="container container-c pvxxl narrow-pvl mobile-pvn align-c height-page">

              <h1>Page not found</h1>

              <p className="type-l">An error occurred loading this page. It may not exist or it may have moved.</p>

              <p className="type-l"><Link prefetch href="/"><a>Home</a></Link></p>

            </div>
          </div>
        </div>
      )} />
    );
  }
}

export default Error
