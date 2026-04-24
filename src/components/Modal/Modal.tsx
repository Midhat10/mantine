import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  const modalElement = document.getElementById('modal')!;

  function keyDownClose(evt: KeyboardEvent) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', keyDownClose);
    return () => document.removeEventListener('keydown', keyDownClose);
  }, []);
  return createPortal(
    <div className={styles.modal} role="dialog">
      <button type="button" onClick={onClose} className={styles.close}>
        x
      </button>
      {children}
    </div>,
    modalElement
  );
}

export default Modal;
