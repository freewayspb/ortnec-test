/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Player, BigPlayButton, ControlBar} from 'video-react';
import { Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Slider from 'rc-slider/lib/Slider';

export default class Video extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      player: {},
      volume: {}
    };
  }

  componentDidMount() {
    this.player.subscribeToStateChange(this.handleStateChange);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentVideo.id !== this.props.currentVideo.id) {
      this.load();
    }
  }

  // handleStateChange = state => {
  //   // copy player state to this component's state
  //   this.setState({
  //     player: state
  //   });
  // };

  play = () => {
    this.player.play();
  };

  pause = () => {
    this.player.pause();
  };

  load = () => {
    this.player.load();
  };

  changeCurrentTime = (seconds) => {
    return () => {
      const { player } = this.player.getState();
      const currentTime = player.currentTime;
      this.player.seek(currentTime + seconds);
    };
  };

  seek = (seconds) => {
    return () => {
      this.player.seek(seconds);
    };
  };

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      const playbackRate = player.playbackRate;
      this.player.playbackRate = playbackRate + steps;
    };
  }

  getVolume() {
    return () => {
      this.player.volume*100;
    };
  }

  changeVolume = (steps) => {
    return () => {
      const { player } = this.player.getState();
      const volume = player.volume;
      this.player.volume = volume + steps;
    };
  };

  setMuted = (value) => {
    return () => {
      this.player.muted = value;
    };
  };


  changeSource(id) {
    return () => {
      this.props.changeVideo(id);
    };
  }

  onVolumeChange = (value) => {
    this.player.volume = value/100;
  };

  getTime = (duration) => {
    duration = duration.toFixed(0);
    const h = duration/3600 ^ 0 ;
    const m = (duration-h*3600)/60 ^ 0 ;
    const s = duration-h*3600-m*60 ;
    return ((h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s));
  };

  render() {
    return (
      <Col md={9} lg={9} xs={12}>
        <Player ref={player => this.player = player}>
          <source src={this.props.currentVideo.sources.mp4} />
          <BigPlayButton position="center" />
          <ControlBar autoHide={false} />
        </Player>
        <Row className="video-control">
          <Col md={6} lg={6} xs={12}>
            {this.state.player.paused ?
              <Button onClick={this.play} className="video-control-button">
                <i className="glyphicon glyphicon-play" />
              </Button> :
              <Button onClick={this.pause} className="video-control-button">
                <i className="glyphicon glyphicon-pause" />
              </Button>}
            {this.state.player.muted ?
              <Button onClick={this.setMuted(false)} className="video-control-button">
                <i className="glyphicon glyphicon-volume-off" />
              </Button> :
              <Button onClick={this.setMuted(true)} className="video-control-button">
                <i className="glyphicon glyphicon-volume-up" />
              </Button>
            }
            <Slider className="volume-slider"
                    value={this.state.player.volume*100 || 20}
                    onChange={this.onVolumeChange}
            />
            <span className="video-control-currentTime">
                            {this.state.player.currentTime ? this.getTime(this.state.player.currentTime): '00:00:00'}
                            </span>
            <span className="video-control-duration">
                            {this.state.player.duration ? this.getTime(this.state.player.duration) : '00:00:00'}
                            </span>
          </Col>
          <Col md={6} lg={6} xs={12}>
            <Row>
              <Col md={6} lg={6} xs={6} className="text-center">
                <a href="#" className="video-control-favorites">
                  <i className="glyphicon glyphicon-heart-empty" /> Add to favorites
                </a>
              </Col>
              <Col md={6} lg={6} xs={6} className="text-center">
                <span className="video-control-downloads">
                    <ButtonDropdown
                      componentClass={Button.Dropdown}
                      id={this.props.currentVideo.id}
                      title="Download"
                    >
                        {this.props.currentVideo.download.map((item, index) => (
                          <DropdownItem key={`item-${index}`}
                                    onClick={() => window.location.href=item.url}
                                    className="favorites-item">
                            <span className="favorites-item-title">{item.title}</span> {item.fileSize}</DropdownItem>
                        ))}
                    </ButtonDropdown>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}
Video.PropTypes = {
  videos: PropTypes.array,
  currentVideo: PropTypes.object
};
