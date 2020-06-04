import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import Mensaje from './Mensaje.js';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      titulo : ['Samsung S11'],
      campos : [{etiqueta:'Descripcion: ', data:'Ultimo modelo de Samsung en Argentina'},{etiqueta:'Precio: ', data:'$ 29.999'},{etiqueta:'SKU: ', data:'QUJ56JH'},{etiqueta:'Cantidad Disponible: ', data:'128'}],
      mensaje : ['']
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick = () => {
    this.setState ({
      mensaje : ['Gracias por su compra.']
    })
  }

  
  render () {
    return(
      <div>
        <Menu
        titulo = {this.state.titulo}
        campos = {this.state.campos}/>
        <button onClick={this.handleClick}> Comprar </button>
        <Mensaje
        mensaje = {this.state.mensaje}/>
    </div>    
    )
  }
}

export default App;
