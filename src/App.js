import React, {Component} from 'react';
import Grupo from './components/grupo/grupo';

class App extends Component {
    constructor(props) {
        super(props);
        this.moverCarta = this.moverCarta.bind(this);
        this.state = {
            cartas: [
                { nombre: "A", grupo: 0 },
                { nombre: "B", grupo: 0 },
                { nombre: "C", grupo: 1 },
            ]
        };
    }
    moverCarta(nombre) {
        console.log(nombre);

        this.setState((state) => {
            return {
                cartas: state.cartas.map((carta)=> {
                    if (carta.nombre === nombre) {
                        carta.grupo = 1 - carta.grupo;
                        return carta;
                    }
                    return carta;
                })
            }
        });
    }
    render() {
        return (
            <div className="App">
                <Grupo cartas={this.state.cartas} color="red" grupo={0} moverCarta={this.moverCarta} />
                <Grupo cartas={this.state.cartas} color="blue" grupo={1} moverCarta={this.moverCarta}/>
            </div>
        );
    }
}

export default App;
