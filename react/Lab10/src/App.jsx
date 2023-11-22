import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado: false
    };
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/producto')
      .then((response) => {
        return response.json();
      })
      .then((prod) => {
        this.setState({
          productos: prod,
          recuperado: true
        });
      });
  }

  editar_producto(){

  }

  buscar_producto(){

  }

  eliminar_producto(){

  }

  nuevo_formulario(){
    return(
      <div>
        <form>
          <label>Categoria</label>
          <select>
            <option></option>
          </select>
          <label>Nombre</label>
          <input type='text'></input>
          <label>Precio</label>
          <input type='decimal'></input>
          <label>Stock</label>
          <input type='number'></input>
          <button type='submit'>Agregar Producto</button>
        </form>

      </div>
    );
  }

  nuevo_producto(){
    return this.nuevo_formulario();
  }

  mostrarTabla() {
    return (
      <div>
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className='form-inline'>
                  <input className='form-control mr-sm-2' type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </nav>
        </div>
        <div>
          <table className='table table-dark'>
            <thead >
              <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productos.map((prod) => {
                return (
                  <tr key={prod.codigo}>
                    <td>{prod.id}</td>
                    <td>{prod.nombre}</td>
                    <td>{prod.precio}</td>
                    <td>
                      <div className='spa'>
                        <button type='button' className='btn btn-secondary mx-1' onClick={()=>this.editar_producto}>Editar</button>
                        <button className='btn btn-danger mx-1' onClick={()=>this.eliminar_producto}>Eliminar</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <button className='btn btn-primary' onClick={()=>this.nuevo_producto}>Nuevo Producto</button>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.recuperado) {
      return this.mostrarTabla();
    } else {
      return <div>Recuperando datos...</div>;
    }
  }
}

export default App;
