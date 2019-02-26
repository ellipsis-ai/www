import * as React from "react"
import EllipsisHead from "../components/ellipsis_head"
import Header from '../components/header'
import Footer from "../components/footer";

class About extends React.Component {
  render() {
    return (
      <div>
        <EllipsisHead title="About Us" />
        <div className="page">
          <Header isHomeVisible={false} />

          <div className="content">
            <h1>About Ellipsis</h1>
          </div>

          <Footer/>

        </div>
      </div>
    );
  }
}

export default About
