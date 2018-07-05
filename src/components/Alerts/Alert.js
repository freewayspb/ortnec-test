import React from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeAlert } from '../../actions';

class AlertBadge extends React.Component {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.props.actions.closeAlert(this.props.id)
    },
      this.props.timeout)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <Alert
        color={this.props.color}
        className="alert"
      >
        {this.props.children}
        <span
          className="alert-close-button"
          onClick={() => { this.props.actions.closeAlert(this.props.id) }}
        >
          <i className="fa fa-close" />
        </span>
      </Alert>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ closeAlert }, dispatch),
})

export default connect(null, mapDispatchToProps)(AlertBadge)
