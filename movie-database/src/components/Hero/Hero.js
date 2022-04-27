import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>
            Genre: Thriller, Drama, Romance
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://preview.redd.it/ewomxykwa5b41.jpg?width=640&crop=smart&auto=webp&s=19733bd86fa599555dd557f5a485a59185d199e2"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
