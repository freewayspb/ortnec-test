import React from 'react'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'
import PropTypes from 'prop-types'
import store from '../store'
import Video from '../components/Video'
import Actor from '../components/Actor'
import SocialNetworks from '../components/SocialNetworks'
import Loader from '../components/Loader'
import { changeVideo } from '../actions'
import data from '../data.json'

class ModelsListPage extends React.Component {
  state = {
    data: null
  }
  componentDidMount () {
    store.dispatch({
      type: 'GET_VIDEO',
      data
    })
    this.setState({data})
  }

  render () {
    if (this.state.data === null) {
      return <Loader />
    } else {
      return (
        <div>
          <Container fluid={true}>
            <Row>
              <Video
                videos={this.props.data.data.videos}
                currentVideo={this.props.data.currentVideo}
                changeVideo={this.props.changeVideo}
              />
              <Actor data={this.props.data.data.modelInfo} />
            </Row>
          </Container>
          <Container fluid={true}>
            <SocialNetworks
              data={this.props.data.data}
              currentVideo={this.props.data.currentVideo}
              changeVideo={this.props.changeVideo}
            />
          </Container>
        </div>
      )
    }
  }
}

ModelsListPage.propTypes = {
  data: PropTypes.object.isRequired,
  currentVideo: PropTypes.object,
  changeVideo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.modelList
})

export default connect(mapStateToProps, { changeVideo })(ModelsListPage)
