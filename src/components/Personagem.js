import React, { Component } from 'react';
import './css/Personagem.css'
// import './css/card.css'
class Personagem extends Component {
    render() {
        return (
            <div>
                <div className="dates">
                    <div className="image">
                        <a>
                            <img src={this.props.image} />
                        </a>
                        <div class="cut"></div>
                    </div>

                    <div className="date">
                        <p>Name: {this.props.name}</p>
                        <p>Description: {this.props.description}</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Personagem;