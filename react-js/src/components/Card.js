import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

import "./Card.css";
import "./TodoButton.css";

const Card = (props) => {
  const [isShowModal, setShowModal] = useState();
  const [isConfirmed, setConfirm] = useState();

  const ShowModal = () => {
      setShowModal(true);
  }

  const CloseModal = () => {
    setShowModal(false);
  }

  const SetConfirmed = () => {
    setConfirm(true);
    setShowModal(false);
    console.log(isConfirmed);
  }
  

  return (
    <div className="todo-card">
      <span className={!isConfirmed ? "todo-text" : "todo-text confirmed"}>{props.contents}</span>
      <div className="todo-button-box">
        <button disabled={isConfirmed} className={!isConfirmed ? "todo-button" : "todo-button confirmed"} onClick={ShowModal}>Confirm</button>
      </div>
      {isShowModal && <Modal contents="할 일을 끝냈습니까?" setConfirm={SetConfirmed} onClose={CloseModal} />}
      {isShowModal && <Backdrop onClick={CloseModal}/>}
    </div>
  );
};

export default Card;
