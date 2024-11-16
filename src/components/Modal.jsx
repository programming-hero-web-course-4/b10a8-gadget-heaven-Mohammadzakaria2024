import PropTypes from "prop-types";

export default function Modal({ open, children }) {
  return (
    <dialog
      className="modal modal-bottom bg-black/70 sm:modal-middle"
      open={open}
    >
      {children}
    </dialog>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};
