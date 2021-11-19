import React, { Component } from "react";

export default class feed extends Component{
    render() {
        return (
            <div>
                <div key={this.props.id}>
                    <h3>{ this.props.username }</h3>
                    <a>Curtidas: { this.props.curtidas }</a> / 
                    <a>Comentários: { this.props.comentarios }</a>
                </div>  

            </div>
        );
    };
}