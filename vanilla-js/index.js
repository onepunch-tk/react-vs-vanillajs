const button = document.querySelector(".todo-button");
button.addEventListener("click", showModal);

let confirmModal;
let backdrop;

function showModal() {
  if (confirmModal) {
    return;
  }

  confirmModal = document.createElement("div");
  confirmModal.className = "confirm-modal";

  const modalText = document.createElement("p");
  modalText.textContent = "할 일을 끝냈습니까?";

  const cancelButton = document.createElement("button");
  cancelButton.className = "todo-button alt";
  cancelButton.textContent = "아니오!";
  cancelButton.addEventListener("click", CanceledAction);

  const confirmButton = document.createElement("button");
  confirmButton.className = "todo-button alt";
  confirmButton.textContent = "예!";
  confirmButton.addEventListener("click", ConfirmedAction);

  confirmModal.append(modalText);
  confirmModal.append(cancelButton);
  confirmModal.append(confirmButton);

  document.body.append(confirmModal);

  backdrop = document.createElement("div");
  backdrop.className = "backdrop";

  backdrop.addEventListener("click", CanceledAction);

  document.body.append(backdrop);
}

function CanceledAction() {
  RemoveElements();
}

function ConfirmedAction() {
  const todoText = document.querySelector(".todo-text");
  todoText.className = todoText.className + " confirmed";

  const confirm = document.querySelector(".todo-button");
  confirm.className = confirm.className + " confirmed";
  confirm.disabled = "disabled";

  RemoveElements();
}

function RemoveElements() {
  confirmModal.remove();
  confirmModal = null;

  backdrop.remove();
  backdrop = null;
}
