import styles from './Layout.module.css';

export default function Layout({ onClose }: { onClose: () => void }) {
  return <div onClick={onClose} className={styles.layout}></div>;
}
