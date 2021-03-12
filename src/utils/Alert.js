function AlertDismissible() {
  return (
    <div className="d-flex flex-column align-items-center align-content-center mt-5">
      <p className="h4 text-white p-2 bg-danger">You selected the wrong category.</p>
      <p className="text-danger">
        Refresh page and select the right category
      </p>
    </div>
  );
}

export default AlertDismissible;
