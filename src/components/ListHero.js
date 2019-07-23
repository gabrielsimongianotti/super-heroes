import React, { Component } from 'react';
import './css/ListHero.css';
import api from 'marvel-api';
import Card from './Card.js';

var marvel = api.createClient({
  publicKey: '62a644db785ab8cc1023864561f58382'
  , privateKey: '73971844a61fcbb6c4cf7be9b998228496e7d1cf'
});

export default class ListHero extends Component {
  state = {
    response: [
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      }, {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      }, {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      }, {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      },
      {
        "id": 0,
        "name": "",
        "description": "",
        "modified": "",
        "thumbnail": {
          "path": "",
          "extension": ""
        }
      }
    ]
  };
  
  async componentDidMount() {

    marvel.characters.findAll()
      .then(res => this.setState({ response: res.data }))
      .fail(err => console.log(err))
      .done();
  }

  render() {
    let heroes = [];
    for (var coluna = 0; coluna < 20; coluna++) {
      heroes.push(
        <Card imagem={this.state.response[coluna].thumbnail.path}
          extension={this.state.response[coluna].thumbnail.extension}
          nome={this.state.response[coluna].name} />
      )
    }

    return (
      <div>
        <div className="hero">{heroes}</div>
      </div>

    );
  }
}
