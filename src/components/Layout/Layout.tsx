import styles from './Layout.module.css';

export default function Layout({ onClose }: { onClose: () => void }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={onClose} className={styles.layout} data-testid="layout" />
  );
}
