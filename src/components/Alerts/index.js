import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'reactstrap'
import Alert from './Alert';

class Alerts extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="alerts_container">
            {this.props.alerts.map(alert => (
              <Alert
                key={alert.id}
                id={alert.id}
                timeout={alert.timeout}
              >
                <span className="alert-message">{alert.text}</span>
                {alert.buttonText
                  ? <Button
                    className="alert-action-button"
                    to={alert.buttonUrl}>
                      {alert.buttonText}
                    </Button>
                  : ''}
              </Alert>
            ))}
        </Row>
      </Container>

    )
  }
}

const mapStateToProps = state => (
  { alerts: state.alertsReducer.alerts }
)

export default connect(mapStateToProps)(Alerts);
