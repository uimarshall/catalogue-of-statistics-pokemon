import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Check what you typed and try again. .
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertDismissible;
