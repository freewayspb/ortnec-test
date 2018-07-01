import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import actorImg from '../../styles/img/layer-1.png'

const Actor = props => (
  <Col md={3} lg={3} xs={12}>
    <div className="actor">
      <img src={actorImg} className="actor-image" />
      <div className="actor-name">{props.data.name}</div>
      <div className="actor-prop">
        <span className="actor-prop--title">Started: </span>
        <Link to="#">{props.data.yearStarted}</Link>
      </div>
      <div className="actor-prop">
        <span className="actor-prop--title">Age: </span>
        <span className="actor-prop--value">{props.data.age} years</span>
      </div>
      <div className="actor-prop">
        <span className="actor-prop--title">Activities: </span>
        <span className="actor-prop--value">
          {props.data.activities.map((activity, index) => (
            <span key={`activity-${index}`}>
              <Link to={activity.url}>{activity.title}</Link>
              {props.data.activities.length - 1 !== index && <span>, </span>}
            </span>
          ))}
        </span>
      </div>
      <hr />
      <div className="actor-description">
        {props.data.description}
      </div>
    </div>
  </Col>
)

Actor.propTypes = {
  data: PropTypes.object.isRequired
}

export default Actor
