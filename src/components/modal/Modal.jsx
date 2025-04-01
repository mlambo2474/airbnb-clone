import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../actions/modalAction"
import Login from "../login/Login"
import "./Modal.css";

const Modal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    const {openClose, content} = modal;

    const modalContent = ()=>{
        switch(content){
            case "LOGIN_MODAL":
                return <Login />;
           default:
               return null;
        }
    }
    // const closeModalHandler =()=>{
    //   console.log("closed")
    //  dispatch(closeModal())
    // }

  return (
    <div className="site-modal" style={{ display: openClose === "open" ? "block" : "none" }}>
      <div className="modal-content">
        <div className="col-right">
        {/* <span onClick={closeModalHandler} className="close">Close</span>
        &times; */}
        </div>
        <div>{modalContent()}</div>
      </div>
    </div>
  );
};

export default Modal;
