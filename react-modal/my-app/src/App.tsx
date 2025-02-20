import { useState } from 'react';
import { Modal } from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDelete() {
    alert('Item has been deleted!');
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me!</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Are you sure you want to delete?</p>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
