import styles from "../styles/Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        MOVIE LIST
      </div>
      <div className={styles.item}>
          <form class="search-form">
            <input type="text" placeholder="search" className={styles.search} onSubmit={props.submit} value={props.value}/>
          </form>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>My List</li>
          <li className={styles.listItem}>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
