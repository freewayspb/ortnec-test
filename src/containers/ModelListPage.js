import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'
import Video from '../components/Video'
// import Actor from '../components/Actor'
import SocialNetworks from '../components/SocialNetworks'
import { changeVideo } from '../actions'

export class ModelsListPage extends React.Component {
  render () {
    return (
      <div>
        <Container>
          <Row>
            {this.props.data.videos.length > 0 &&
            <Video
              videos={this.props.data.videos}
              currentVideo={this.props.currentVideo}
              changeVideo={this.props.changeVideo}
            />}
            {/*<Actor data={this.props.data.modelInfo} />*/}
          </Row>
        </Container>
        <Container>
          <Row>
            <SocialNetworks
              data={this.props.data}
              currentVideo={this.props.currentVideo}
              changeVideo={this.props.changeVideo}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

ModelsListPage.propTypes = {
  data: PropTypes.object.isRequired,
  getVideo: PropTypes.func,
  currentVideo: PropTypes.object,
  changeVideo: PropTypes.func.isRequired
}

const mapStateToProps = ({ modelListReducer }) => ({
  data: modelListReducer.data || null,
  currentVideo: modelListReducer.currentVideo
})

export default connect(mapStateToProps, { changeVideo })(ModelsListPage)
