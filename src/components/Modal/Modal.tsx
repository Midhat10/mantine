import React, { ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalElement = document.getElementById('modal')!;

function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return createPortal(
    <div className={styles.modal}>
      <button type="button" onClick={onClose} className={styles.close}>
        x
      </button>
      {children}
    </div>,
    modalElement
  );
}

export default Modal;
