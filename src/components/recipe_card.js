import React, { Component } from 'react';

class RecipeCard extends Component {
    render () {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <img src={`https://spoonacular.com/${this.props.image}`} />
            </div>
        );
    }
}

export default RecipeCard;