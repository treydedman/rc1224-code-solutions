import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const label = isOn ? 'ON' : 'OFF';
  const modifierClass = isOn ? 'is-on' : '';

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div className={`toggle-switch ${modifierClass}`}>
      <div className="slider" onClick={handleClick}>
        <div className="switch"></div>
      </div>
      <span className="state-label">{label}</span>
    </div>
  );
}
