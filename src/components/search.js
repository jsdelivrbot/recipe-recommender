import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeCard from './recipe_card';

class Search extends Component {
    constructor (props) {
        super(props);

        this.renderSearchResults = this.renderSearchResults.bind(this);
    }

    renderSearchResults () {
        return this.props.recipes.map( (recipe) => {
            return (
                <li key={recipe.id}>
                    <RecipeCard {...recipe} />
                </li>
            );
        })
    }

    render () {
        if (this.props.recipes.length < 1) return <div>Loading...</div>
        return (
            <div>
                <h1>Search Results</h1>
                <div className="row">
                    <div className="col-sm-10">
                        <ul>
                            {this.renderSearchResults()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        recipes: state.searchResults
    };
}

export default connect(mapStateToProps)(Search);