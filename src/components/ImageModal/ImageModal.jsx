import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    className={styles.modal}
    overlayClassName={styles.overlay}
    ariaHideApp={false}
  >
    <img src={image.urls.regular} alt={image.alt_description} />
    <button onClick={onClose} className={styles.closeButton}>
      Close
    </button>
  </ReactModal>
);

export default ImageModal;
