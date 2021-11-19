import React, { Component } from "react";
import Feed from "../feed/feed";

export default class Renderizacao extends Component{
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, username: 'Samuel', curtidas: 10, comentarios: 2 },
                { id: 2, username: 'Romario', curtidas: 120, comentarios: 12 },
                { id: 3, username: 'Taveira', curtidas: 511, comentarios: 32},
            ]
        }
    }

    render() {
        return (
            <div>
        
                {this.state.feed.map((item) => {
                    return (
                        <Feed key={item.id}
                            username={item.username}
                            curtidas={item.curtidas}
                            comentarios={item.comentarios}/>
                    );
                })}
            </div>
        )
    }
}