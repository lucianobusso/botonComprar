import React from 'react';

function Menu (props){
    return (
        <div>
            <div>
                <h3>{props.titulo}</h3>
            </div>
            <div>
                {props.campos.map(campos=><div> <label>{campos.etiqueta}{campos.data}</label> </div>)}
            </div>
        </div>
    )
}

export default Menu;