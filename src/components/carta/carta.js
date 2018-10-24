import React, { Component } from 'react';

class Carta extends Component {
    constructor(props){
        super(props);
        this.moverCarta = this.moverCarta.bind(this);
    }
    moverCarta() {
        this.props.moverCarta(this.props.nombre);
    }
    render() {
        return (
            <div onClick={this.moverCarta}>
                {this.props.nombre}
            </div>

        );
    }
}

export default Carta;
