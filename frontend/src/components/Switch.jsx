import { useState } from 'react';
import PropTypes from 'prop-types';
import "./style/switch.css"

const Switch = ({ activeText = "", inactiveText = "", onToggle }) => {
  const [active, setActive] = useState(false)
  Switch.active = false

  const toggleSwitch = () => {
    const newState = !active
    setActive(newState);
    Switch.active = newState
    onToggle(newState)
    console.log(Switch.active)
  }

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={active}
          onChange={toggleSwitch}
        />
        <span className="switch-slider"></span>
      </label>
      <span className="switch-label">{active ? activeText : inactiveText}</span>
    </div>
  )
}
Switch.propTypes = {
  activeText: PropTypes.string,
  inactiveText: PropTypes.string,
  onToggle: PropTypes.func.isRequired
}

export default Switch;