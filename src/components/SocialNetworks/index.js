import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

const SocialNetwork = (props) => {
  return (
    <div className="social">
      <Row>
        <Col xs={12} className="social-header">
          <h3 className="social-header-title">Sandra Star's video</h3>
          <hr/>
        </Col>
      </Row>
      <Row>
        {props.data.videos.map((video, index) => {
          if (video.id !== props.currentVideo.id) {
            return <Col md={3} lg={3} xs={12} key={video.id}>
              <div onClick={() => props.changeVideo(video.id)} className="social-item">
                <div className="social-item-img">
                  <img src={`./img/video-${video.id}.png`} alt={video.title} className="img-fluid"/>
                  <a href={video.socialLink.url}
                     target="blank"
                     className={`social-item-network`}>
                    <i className={`fa fa-${video.socialLink.type}`}/>
                  </a>
                </div>
                <div className="social-item-title">
                  {video.title}
                </div>
              </div>
            </Col>
          }
        })}
      </Row>
    </div>

  );
};

SocialNetwork.propTypes = {
  data: PropTypes.object.isRequired
};

export default SocialNetwork;
