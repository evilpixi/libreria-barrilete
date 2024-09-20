import colors from "./style/colors.js"
import "./style/add-book.css"
import Switch from './Switch.jsx'

function AddBooksView () {

  const handleIsUsedToggle = () => {

  }

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}
      style={{
        color: colors.darkText
      }}
      className="ab-form">
      Ingrese los datos del libro que desea cargar
      <section>
        <label htmlFor="addbook-title">Título</label>
        <input type="text" name="addbook-title" id="addbook-title" />
      </section>
      <section>
        <label htmlFor="addbook-isbn">ISBN</label>
        <input type="text" name="addbook-isbn" id="addbook-isbn" />
      </section>
      <section>
        <label htmlFor="addbook-issn">ISSN</label>
        <input type="text" name="addbook-issn" id="addbook-issn" />
      </section>
      <section>
        <label htmlFor="addbook-location">Ubicación</label>
        <input type="text" name="addbook-location" id="addbook-location" />
      </section>
      <section>
        <label htmlFor="addbook-edition">Edición</label>
        <input type="number" name="addbook-edition" id="addbook-edition" />
      </section>
      <section>
        <label htmlFor="addbook-stock">Stock inicial</label>
        <input type="number" name="addbook-stock" id="addbook-stock" defaultValue={0} />
      </section>
      <section>
        <label htmlFor="addbook-used">¿El libro es usado?</label>
        <Switch
          activeText="Sí, el libro es un ejemplar USADO"
          inactiveText="No, el libro es un ejemplar NUEVO"
          onToggle={handleIsUsedToggle}
        />
      </section>
      <section>
        <label htmlFor="addbook-price">Precio (en pesos argentinos)</label>
        <input type="number" name="addbook-price" id="addbook-price" />
      </section>
      <section>
        <label htmlFor="addbook-price">Autor</label>
        <select />
      </section>


      <section></section>
      <input
        type="submit"
        style={{
          //backgroundColor: colors.text,
          //color: colors.text
        }}
        value="Añadir" />
    </form>
  )

}

export default AddBooksView