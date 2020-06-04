import React from 'react';

class Mensaje extends React.Component{
    constructor (props){
        super(props)
    }
    render(){
        let mensaje = this.props.mensaje;
        return(
            <div>
                <span>{mensaje}</span>
            </div>
        )
    }
}

export default Mensaje;