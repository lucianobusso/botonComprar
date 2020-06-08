import React, { Component } from 'react';

class Menu extends Component{
    constructor (props){
        super (props)
    }
    render() {
        let titulo = this.props.titulo;
        let campos = this.props.campos;
        return(
        <div>
            <div>
                <h3>{titulo}</h3>
            </div>
            <div>
                {campos.map(campos=><div> <label>{campos.etiqueta}{campos.data}</label> </div>)}
            </div>
        </div>
        )
    }
    
}

export default Menu;