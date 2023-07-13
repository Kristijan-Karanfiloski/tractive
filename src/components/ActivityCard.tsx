import styles from "./ActivityCard.module.css";

interface Props {
  title: string;
  text: string;
  imgSrc: string;
  icon: string;
}

function ActivityCard({ title, text, imgSrc, icon }: Props) {
  return (
    <div className={`card border-0 ${styles.cardStyle}`}>
      <img src={imgSrc} className="card-img-top" alt="ActivityForm" />
      <div className={`card-body text-center ${styles.cardBodyStyle}`}>
        <h5 className={`card-title ${styles.h5}`}>{title}</h5>
        <p className={`card-text ${styles.p}`}>{text}</p>
      </div>
      <img src={icon} alt="Circle" className={styles.iconStyle} />
    </div>
  );
}

export default ActivityCard;
