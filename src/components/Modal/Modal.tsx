import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Overlay from '../Overlay/Overlay';
import styles from './Modal.module.css';

const modalElement = document.getElementById('modal') as HTMLElement;

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  });
  return createPortal(
    <>
      <div className={styles.modal}>
        <button type="button" className={styles.close} onClick={() => onClose()}>
          ❌
        </button>
        {children}
      </div>
      <Overlay onClose={onClose} />
    </>,
    modalElement
  );
}

export default Modal;
