import { useState } from 'react'
import PropTypes from 'prop-types';
import colors from "./style/colors.js"
import "./style/nav-bar.css"
import FeatherIcon from 'feather-icons-react';

function NavBar ({ onStateChange, viewsData }) {
  const views = viewsData
  const [title, setTitle] = useState(views[0].title)
  const [currentTab, setCurrentTab] = useState(0)


  const handleTabClick = (index) => {
    updateElements(index)
  }

  const updateElements = (index) => {
    setCurrentTab(index)
    setTitle(views[index].title)
    onStateChange(index)
  }

  return (
    <header style={{
      backgroundColor: colors.text,
      color: colors.bg
    }}
      className={"nav-bar"}>

      <h1 className={"nav-bar-title"}>{title}</h1>

      {views.map((v, i) => {
        return (
          <NavElement
            key={i}
            viewName={v.title}
            index={i}
            isActive={currentTab == i}
            icon={v.icon}
            onElementClick={() => {
              handleTabClick(i)
            }} />
        )
      })}

    </header>
  )
}
NavBar.propTypes = {
  viewsData: PropTypes.array,
  onStateChange: PropTypes.func
}

function NavElement (props) {
  let isActive = props.isActive

  return (
    <div className={"nav-bar-button"} style={{
      fontWeight: isActive ? 600 : 200,
      borderBottom: isActive ? "4px solid" + colors.accent : "0px",
      paddingBottom: isActive ? "0px" : "4px",
      color: isActive ? colors.bg : ""
    }}
      onClick={() => {
        props.onElementClick()
      }}>
      <FeatherIcon className={"nav-bar-icon"}
        icon={props.icon} />
      {props.viewName}
    </div>
  )
}
NavElement.propTypes = {
  viewName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onElementClick: PropTypes.func,
  isActive: PropTypes.bool,
  icon: PropTypes.string
}

export default NavBar
