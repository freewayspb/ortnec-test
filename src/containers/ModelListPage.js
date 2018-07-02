import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'
import PropTypes from 'prop-types'
import store from '../store'
import Video from '../components/Video'
import Actor from '../components/Actor'
import SocialNetworks from '../components/SocialNetworks'
import Loader from '../components/Loader'
import { changeVideo, setVideoList } from '../actions'
import data from '../data.json'

class ModelsListPage extends React.Component {
  componentDidMount () {
    // this.props.dispatch(setVideoList(data));
    console.log(this.props)
    console.log(this.state)
  }

  render () {
    const { videos, currentVideo, actions } = this.props;
    console.log(this.props)
    if (videos) {
      return <Loader />
    } else {
      return (
        <div>
          <Container fluid={true}>
            <Row>
              <Video
                videos={videos}
                currentVideo={currentVideo}
                changeVideo={actions.changeVideo}
              />
              {/*<Actor data={models} />*/}
            </Row>
          </Container>
          <Container fluid={true}>
            {/*<SocialNetworks*/}
              {/*data={models}*/}
              {/*currentVideo={currentVideo}*/}
              {/*changeVideo={this.props.changeVideo}*/}
            {/*/>*/}
          </Container>
        </div>
      )
    }
  }
}

ModelsListPage.propTypes = {
  currentVideo: PropTypes.object
}

const mapStateToProps = state => ({
  ...state,
  videos: state.modelList.models.videos,
  currentVideo: state.modelList.currentVideo
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ changeVideo }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ModelsListPage)
