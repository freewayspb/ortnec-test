import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'
import PropTypes from 'prop-types'
import Video from '../components/Video'
import Actor from '../components/Actor'
import SocialNetworks from '../components/SocialNetworks'
import Loader from '../components/Loader'
import { alert, changeVideo, getProfiles } from '../actions'

class ModelsListPage extends React.Component {
  componentDidMount () {
    this.props.actions.getProfiles('123')
    this.props.actions.alert(
      '3 new profiles',
      5000,
      'Check now',
      '#'
    )
  }

  render () {
    const {
      actions,
      videos,
      isLoading,
      hasError,
      currentVideo,
      modelInfo
    } = this.props;

    if (isLoading && !currentVideo) {
      return <Loader/>
    } else if (hasError) {
      return <p>Error loading data </p>
    } else {
      return (
        <React.Fragment>
          <Container fluid={true}>
            <Row>
              { currentVideo ?
                  <Video
                  videos={videos}
                  currentVideo={currentVideo}
                  /> : ''
              }
              { modelInfo ? <Actor data={modelInfo} /> : ''}
            </Row>
          </Container>
          <Container fluid={true}>
            { videos ? <SocialNetworks
              videos={videos}
              name={modelInfo.name}
              currentVideo={currentVideo}
              changeVideo={actions.changeVideo}
            /> : ''}
          </Container>
        </React.Fragment>
      )
    }
  }
}

ModelsListPage.propTypes = {
  videos: PropTypes.array,
  currentVideo: PropTypes.object,
  modelInfo: PropTypes.object,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool
}

const mapStateToProps = state => (
  {
  ...state,
  alerts: state.alertsReducer.alerts,
  videos: state.itemsReducer.items.videos,
  currentVideo: state.itemsReducer.currentVideo,
  modelInfo: state.itemsReducer.items.modelInfo,
  newProfiles: state.itemsReducer.items.newProfiles,
  hasError: state.hasError,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
      alert,
      changeVideo,
      getProfiles
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ModelsListPage)
