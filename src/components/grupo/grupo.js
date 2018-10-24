import React, { Component } from 'react';
import Carta from '../carta/carta';

class Grupo extends Component {
    render() {
        const estilo = {backgroundColor: this.props.color};
        const cartas = this.props.cartas.map((x) => {
            if (this.props.grupo === x.grupo) {
                return <Carta nombre={x.nombre} key={x.nombre} moverCarta={this.props.moverCarta}/>
            }
            return false;
        });
        return (
            <div style={estilo}>
                {cartas}
            </div>
        );
    }
}

export default Grupo;
