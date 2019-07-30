import React, { Component } from 'react';
import './css/Search.css';
import api from 'marvel-api';
import Personagem from './Personagem.js';

var marvel = api.createClient({
    publicKey: '62a644db785ab8cc1023864561f58382'
    , privateKey: '73971844a61fcbb6c4cf7be9b998228496e7d1cf'
});

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            response: [
                {
                    "id": 0,
                    "modified": "",
                    "name": "",
                    "description": "",
                    "thumbnail": {
                        "path": "",
                        "extension": ""
                    }
                }
            ]
        }
    }
    hanble(event) {
        this.setState({
            data: event.target.value
        })
    }

    async componentDidMount() {
        console.log();
        marvel.characters.findByName("spider-man")
            .then(res => this.setState({ response: res.data }))
            .fail(console.error)
            .done();
    }

    render() {
        return (
            <div>
                <div class="bloco">
                    <input type="text" onChange={this.hanble.bind(this)} />
                    <button >pesquisar</button>
                    {/* <h1>{this.state.data}</h1> */}
                </div>
                <Personagem
                    name={this.state.response[0].name}
                    description={this.state.response[0].description}
                    image={this.state.response[0].thumbnail.path + '.' + this.state.response[0].thumbnail.extension}
                />

            </div>
        );
    }
}