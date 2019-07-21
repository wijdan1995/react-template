import React, { Component } from 'react';
import { edit, show } from './api'
import { withRouter } from 'react-router-dom'

class MemeEdit extends Component {
    state = {
        dataForm: {
            title: "",
            imageUrl: ''
        }
    }
    componentDidMount() {
        const user = this.props.user
        const memeId = this.props.match.params.id
        show(user, memeId)
            .then(res => {
                const meme = res.data.meme
                this.setState({
                    dataForm: meme
                })
            })
            .catch((error) => console.log(error))
    }
    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataForm: newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.props.user
        const memeId = this.props.match.params.id // using withRouter
        const updateMeme = this.state.dataForm
        edit(user, updateMeme, memeId)
            .then(() => this.props.history.push(`/memes/${memeId}`))
            .catch((error) => console.log(error))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input onChange={this.handleChange} type="text" name="title" value={this.state.dataForm.title} />
                <label>Image</label>
                <input onChange={this.handleChange} type="text" name="imageUrl" value={this.state.dataForm.imageUrl} />
                <button type="submit">Update</button>
            </form>
        );
    }
}

export default withRouter(MemeEdit);
