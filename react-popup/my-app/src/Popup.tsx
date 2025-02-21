import { createPortal } from 'react-dom';
import { ReactNode, useEffect } from 'react';
import './Popup.css';

type Props = {
  open: boolean;
  positionTo?: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity: number;
};

export function Popup({
  open,
  positionTo,
  onClose,
  children,
  opacity = 0.3,
}: Props) {
  if (!open) return null;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : window.innerHeight / 2;
  const left = r ? r.left + r.width / 2 : window.innerWidth / 2;

  return createPortal(
    <>
      <div
        className="backdrop"
        onClick={onClose}
        style={{ background: `rgba(0, 0, 0, ${opacity})` }}></div>
      <div
        className="popup"
        style={{
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`,
          transform: 'translateX(-50%)',
          padding: '8px',
          border: '1px solid black',
          background: 'white',
          zIndex: 1000,
        }}>
        {children}
      </div>
    </>,
    document.body
  );
}
