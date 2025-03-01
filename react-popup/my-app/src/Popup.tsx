import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import './Popup.css';

type Props = {
  open: boolean;
  positionTo?: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity?: number;
};

export function Popup({
  open,
  positionTo,
  onClose,
  children,
  opacity = 0.3,
}: Props) {
  if (!open) return null;

  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

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
