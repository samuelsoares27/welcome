import React, { Component } from "react";

export default class Renderizacao extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }

    render() {
        return (
            <div>                
                {
                    this.state.status
                    ? <h1>Bem-vindo ao sistema!</h1>
                    : <h1>saiu</h1>
                }
            </div>
        )
    }
}