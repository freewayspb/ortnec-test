import React from 'react';
import { connect } from 'react-redux';
import Alert from './Alert';
import './style.css';

class Alerts extends React.Component {
  render() {
    return (
      <div className="alerts_container">
        {this.props.alerts.map(alert => (
          <Alert
            key={alert.id}
            id={alert.id}
            color={alert.color}
            timeout={alert.timeout}
          >{alert.text}</Alert>
        ))}
      </div>
    );
  }
}

export default connect(state => ({ alerts: state.state.alerts }))(Alerts);
