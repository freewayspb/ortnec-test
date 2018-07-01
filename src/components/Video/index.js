import React from 'react'
import { findDOMNode } from 'react-dom'
import ReactPlayer from 'react-player'
import { Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import screenfull from 'screenfull'
import Rcslider from 'rc-slider'
import Duration from './Duration'

export default class Video extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.toggle = this.toggle.bind(this);
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  state = {
    url: null,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    dropdownOpen: false
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }
  setVolume = e => {
    // this.setState({ volume: parseFloat(e.target.value) })
    this.setState({ volume: parseFloat(e)/100 })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
      this.setState({played: state.played})
    }
  }
  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }
  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }
  onClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }
  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }
  refPlayer = player => {
    this.player = player
  }
  render () {
    const { dropdownOpen, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state
    return (
      <Col md={9} lg={9} xs={12}>
        <div className="react-video-wrapper">
          <ReactPlayer
            ref={this.refPlayer}
            url={this.props.currentVideo.sources.mp4}
            className='react-player'
            width='100%'
            height='65%'
            playing={playing}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onBuffer={() => console.log('onBuffer')}
            onSeek={e => console.log('onSeek', e)}
            onEnded={this.onEnded}
            onError={e => console.log('onError', e)}
            onProgress={this.onProgress}
            onDuration={this.onDuration} />
          {!playing ?
            <div>
              <div className="react-video-mask">
              </div>
              <Button className='react-video-big-play-button' onClick={this.playPause} />
            </div>
            : ''}
        </div>
        <Row className="video-control">
          <Col md={6} lg={6} xs={12} className="video-control-block--first">
             {!playing
             ? <Button
                 onClick={this.playPause}
                 className="video-control-button video-control-button--play">
             <i className="fa fa-play" />
             </Button>
            : <Button
                 onClick={this.playPause}
                 className="video-control-button video-control-button--play">
             <i className="fa fa-pause" />
             </Button>}
             {muted
             ? <Button
                 onClick={this.toggleMuted}
                 className="video-control-button video-control-button--muted">
             <i className="fa fa-volume-off" />
             </Button>
            : <Button
                 onClick={this.toggleMuted}
                 className="video-control-button video-control-button--muted">
             <i className="fa fa-volume-up" />
             </Button>
             }
             <Rcslider
               className="volume-slider"
               value={volume*100}
               onChange={this.setVolume}
             />
            <span className="video-control-currentTime">
              {/*{played ? played : '00:00:00'}*/}
              <Duration seconds={duration * this.state.played} />
            </span>
            <span className="video-control-duration">
              <Duration seconds={duration} />
            </span>
          </Col>
          <Col md={6} lg={6} xs={12} className="video-control-block--second">
            <Row>
                <a href="#" className="video-control-favorites">
                  <i className="fa fa-heart-o" /> Add to favorites
                </a>
                <span className="video-control-downloads">
                  <ButtonDropdown
                    direction="down"
                    isOpen={dropdownOpen}
                    toggle={this.toggle}
                    id={this.props.currentVideo && this.props.currentVideo.id}
                  >
                    <DropdownToggle caret>
                      <i className="fa fa-download" /> Download
                    </DropdownToggle>
                    <DropdownMenu>
                    {this.props.currentVideo &&
                    this.props.currentVideo.download.map((item, index) => (
                      <DropdownItem
                        key={`item-${index}`}
                        onClick={() => window.location.href = item.url}
                        className="favorites-item"
                      >
                        <span className="favorites-item-title">{item.title}</span> {item.filesize}
                      </DropdownItem>
                    ))}
                    </DropdownMenu>
                  </ButtonDropdown>
                </span>
            </Row>
          </Col>
        </Row>
      </Col>
    )
  }
}
