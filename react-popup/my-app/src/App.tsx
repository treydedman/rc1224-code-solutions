import { useState, useRef } from 'react';
import './App.css';
import './Popup.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <>
      <div className="flex">
        <button ref={btnRef} onClick={handleClick}>
          Pop up!
        </button>
        <p>
          This is a fun little paragraph of text used to illustrate how not to
          implement a popup.
        </p>
        <Popup
          open={isOpen && btnRef.current !== null}
          positionTo={btnRef.current}
          onClose={() => setIsOpen(false)}
          opacity={0.5}>
          <div>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </div>
        </Popup>
        <p>
          Again, this is just another fun little paragraph of text used to
          illustrate how not to implement a popup.
        </p>
      </div>
    </>
  );
}

export default App;
