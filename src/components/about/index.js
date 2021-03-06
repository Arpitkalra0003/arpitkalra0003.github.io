import React from "react"
import Particles from "react-particles-js"
import { Row, Col } from "react-bootstrap"
import ThemeContext from "../../context"
import "./styles.scss"
import Text from "./text.yml"

class Hero extends React.Component {
  static contextType = ThemeContext

  render() {
    return (
      <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
        {this.particles()}
        <Row>
          <Col md={6} className="content remote">
            <div className="content-text">
              {this.title()}
              {this.renderHtml(Text.remote)}
            </div>
          </Col>
          <Col md={6} className="content profile">
            {this.renderHtml(Text.profile)}
          </Col>
        </Row>
      </section>
    )
  }

  particles() {
    return (
      <Particles
        className="particles"
        params={{
          "particles": {
            "number": {
              "value": 65,
              "density": {
                "enable": false,
                "value_area": 9000
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": .5
            },
            "size": {
              "value": 1
            },
          },
          "retina_detect": true
          }
        }
      />
    )
  }

  title() {
    return (
      <div class="title">
        <div className="line-text">
          <h4>{Text.title}</h4>
        </div>
        <h3>{Text.subtitle}</h3>
        <div className="separator" />
      </div>
    )
  }

  renderHtml(html) {
    const content = ({ __html: html });

    return (
      <React.Fragment>
        <div dangerouslySetInnerHTML={content} />
      </React.Fragment>
    )
  }
}

export default Hero
