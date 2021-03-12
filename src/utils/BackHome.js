import { useHistory } from 'react-router-dom';

function BackHome() {
  const history = useHistory();

  return history.goBack();
}

export default BackHome;
