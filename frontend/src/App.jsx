import { useState, useEffect } from 'react'
import colors from "./components/style/colors.js"
import NavBar from "./components/NavBar.jsx"

import AddBooksView from "./components/AddBooks.jsx"

function App () {
  const [currentTab, setCurrentTab] = useState(0)

  // init
  useEffect(() => {
    setCurrentTab(0)
  }, [])

  const views = [
    {
      title: "Añadir libros",
      icon: "book-open",
      component: () => { return (<AddBooksView />) }
    },
    {
      title: "Ver libros",
      icon: "book",
      component: () => <div>paxi lista los libros</div>
    },
    {
      title: "Proveedores",
      icon: "truck",
      component: () => <div>provs</div>
    },
    {
      title: "Datos",
      icon: "file-text",
      component: () => <div>cruds</div>
    },
    {
      title: "Vender",
      icon: "shopping-cart",
      component: () => <div>sell</div>
    }
  ]

  const handleTabChangeFromNavbar = (newTab) => {
    setCurrentTab(newTab)
  }

  return (
    <div className={"main-body-container"}
      style={{
        backgroundColor: colors.bg,
        color: colors.accent
      }}>
      <NavBar
        onStateChange={handleTabChangeFromNavbar}
        viewsData={views.map((v) => new Object({ title: v.title, icon: v.icon }))}
      />
      <div className={"main-content"}>
        {views[currentTab].component()}
      </div>
    </div>
  )
}

export default App
