import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'

const SocialNetworks = props => (
  <div className="social">
    <Col xs={12} className="social-header">
      <h3 className="social-header-title">Sandra Star's video</h3>
      <hr />
    </Col>
    {props.data.videos.map((video, index) => (
      <Col md={4} lg={3} xs={12} key={`video-${index}`}>
        <div onClick={() => props.changeVideo(video.id)} className="social-item">
          <div className="social-item-img">
            <img src={video.thumb} alt={video.title} responsive />
            <a
              href={video.socialLink.url}
              target="blank"
              className="social-item-network"
            >
              <i className={`fa fa-${video.socialLink.type}`} />
            </a>
          </div>
          <div className="social-item-title">
            {video.title}
          </div>
        </div>
      </Col>
    ))}
  </div>

)

SocialNetworks.propTypes = {
  data: PropTypes.object.isRequired
}

export default SocialNetworks
