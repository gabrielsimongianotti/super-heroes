import React from 'react';
import './css/card.css'

export default class Card extends React.Component {
    render() {
        return (
            <div className="gallery">
                <a>
                    <img src={this.props.imagem + "." + this.props.extension} hfer="/personagem" />
                </a>
                <div class="desc">{this.props.nome}</div>
                <div class="corte"></div>
            </div>
        );
    }
}