import React from "react";
import ReactDOM from "react-dom";
import { useAuthContext } from "../../store/context/AuthContext";

const ConfirmModal = ({ setShowModal }) => {
  const { setIsSignIn } = useAuthContext();
  console.log(" portal");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="modal modals is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                Are you sure you want to logout?
              </p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => setShowModal(false)}
              ></button>
            </header>
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={() => setIsSignIn(false)}
              >
                Yes
              </button>
              <button
                className="button is-danger"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </footer>
          </div>
        </div>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};



export default ConfirmModal;
