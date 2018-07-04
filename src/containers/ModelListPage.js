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
import { changeVideo, getProfiles } from '../actions'

class ModelsListPage extends React.Component {
  componentDidMount () {
    this.props.actions.getProfiles('123');
    console.log(this.props)
    console.log(this.state)
  }

  render () {
    const { items, actions, videos, isLoading, hasError } = this.props;
    console.log(this.props)
    if (isLoading && !items) {
      return <Loader/>
    } else if (hasError) {
      return <p>error loading data </p>
    } else {
      console.log(this.props)
      let currentVideo = videos && videos.find((item) => { return item.id === 1})
      return (
        <div>
          <Container fluid={true}>
            <Row>
              <Video
                videos={videos}
                currentVideo={currentVideo}
                changeVideo={actions.changeVideo}
              />
              {/*<Actor data={items} />*/}
            </Row>
          </Container>
          <Container fluid={true}>
            {/*<SocialNetworks*/}
              {/*data={items.videos}*/}
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
}

const mapStateToProps = state => (
  {
  ...state,
  items: state.items,
  videos: state.items.videos,
  hasError: state.hasError,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
      changeVideo,
      getProfiles
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ModelsListPage)
