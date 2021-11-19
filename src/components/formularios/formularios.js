import React, { Component } from "react";

export default class Formularios extends Component{
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: "",
                email: "",
                senha: "", 
            },
            error: ""
        }
        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({ form: form });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.cadastrar}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <h2>Novo usuário</h2>
                    <label>Nome:</label> 
                    <input
                        type="text"
                        name="nome"
                        value={this.state.form.nome}
                        onChange={this.dadosForm}
                    /><br />                    
                    <label>Email:</label> 
                    <input
                        type="email"
                        name="email"
                        value={this.state.form.email}
                        onChange={this.dadosForm}
                    /><br />
                    
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={this.state.form.senha}
                        onChange={this.dadosForm}
                    /><br/> 
                    <button type="submit">Cadastrar</button>
                </form>

                <p>{this.state.form.nome}</p>
                <p>{this.state.form.email}</p>
                <p>{this.state.form.senha}</p>
            </div>
        );
    }
}