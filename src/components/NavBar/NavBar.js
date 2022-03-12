import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <wrapper className={styles.container}>
          <span className={styles.icon + ' fa fa-tasks'}></span>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="/">Home</a>
            </li>
            <li className={styles.link}>
              <a href="/favorite">Favorite</a>
            </li>
            <li className={styles.link}>
              <a href="/about">About</a>
            </li>
          </ul>
        </wrapper>
      </Container>
    </nav>
  );
};

export default NavBar;
