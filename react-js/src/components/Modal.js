import "./Modal.css";


const Modal = (props) => {
    
    return (
        <div className="confirm-modal">
            <p>{props.contents}</p>
            <button className="todo-button alt" onClick={props.onClose}>아니오!</button>
            <button className="todo-button alt" onClick={props.setConfirm}>예!</button>
        </div>
    );
};

export default Modal;