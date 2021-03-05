import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function AlertDismissible() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible className="text-center">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Check what you typed and try again. .
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => handleGoBack()} className="mx-auto mt-4">Go Back</Button>;
}

export default AlertDismissible;
