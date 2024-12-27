import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <li className={styles.card} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
};

export default ImageCard;
