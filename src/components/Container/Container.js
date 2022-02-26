import styles from './Container.module.scss';

const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
  //   return <button className={styles.button}>{props.children}</button>;
};

export default Container;
