import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <div clas="credit">
              <img
                className={styles.tmdb}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              />
              <h3 className={styles.notice}>
                This product uses the TMDB API but is not endorsed or certified by TMDB.
              </h3>
          </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR TEAM</h1>
          <p className={styles.text}>
            <li>Ardhan</li>
            <li>Imam</li>
            <li>Ali</li>
            <li>Aufar</li>
            <li>Bakta</li>
            <li>Debby</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
