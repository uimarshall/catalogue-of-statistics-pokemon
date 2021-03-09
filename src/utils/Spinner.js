import spinner from '../assets/images/eclipse.gif';

function Spinner() {
  return (
    <div className="spinner container mx-auto">
      <img src={spinner} alt="Loading" className="bg-danger" />
    </div>
  );
}

export default Spinner;
