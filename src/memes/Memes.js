import React, { Component } from 'react';
import { index } from './api'

class Memes extends Component {
    state = {
        memes: []
    }
    componentDidMount() {
        index(this.props.user)
            .then(response => {
                this.setState({
                    memes: response.data.memes
                })
            })
    }
    render() {
        return (
            <div>
                {this.state.memes.map((meme, index) =>
                    <div key={index} >
                        <h1>{meme.title}</h1>
                        <img src={meme.imageUrl} alt={meme.title} />
                    </div>
                )}
            </div>
        )
    }
}

export default Memes;
