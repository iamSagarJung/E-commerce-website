import ReactDOM from "react-dom";

const OrderModal = ({ setShow }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal modals is-active" >
          <div className="modal-background" onClick={() => setShow(false)}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Order Confirmed</p>
              <button
                className="delete is-danger"
                aria-label="close"
                onClick={() => setShow(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <p>Your order has been confirmed. Thank you for your business!</p>
            </section>
            <footer className="modal-card-foot">
              <button className="button" onClick={() => setShow(false)}>
                OK
              </button>
            </footer>
          </div>
        </div>,
        document.getElementById("confirm-root")
      )}
    </>
  );
};

export default OrderModal;
