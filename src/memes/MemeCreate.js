// import React, { Component } from 'react';
// import { create } from './api'


// class MemeCreate extends Component {
//     state = {
//         dataForm: {
//             title: '',
//             imageUrl: ''
//         }
//     }
//     handleChange = (event) => {
//         //get name of input
//         const name = event.target.name
//         //get value of input
//         const value = event.target.value

//         const newForm = Object.assign(this.state.dataForm)
//         newForm[name] = value;
//         this.setState({
//             dataForm: newForm
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const newMeme = this.state.dataForm
//         const user = this.props.user
//         create(user, newMeme)
//             .then(() => alert('Created'))
//             .then(() => this.props.history.push('/memes'))
//             .catch(error => console.log(error))
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>Title</label>
//                 <input onChange={this.handleChange} type='text' name='title' value={this.state.dataForm.title} />
//                 <label>Image</label>
//                 <input onChange={this.handleChange} type='text' name='imageUrl' value={this.state.dataForm.imageUrl} />
//                 <button type='submit'>Create</button>
//             </form>
//         );
//     }
// }

// export default MemeCreate;


import React, { Component } from 'react'
import { create } from './api'
import { withRouter } from 'react-router-dom'

class MemeCreate extends Component {
    state = {
        dataForm: {
            title: "",
            imageUrl: ''
        }
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
        const newMeme = this.state.dataForm
        const user = this.props.user
        create(user, newMeme)
            .then(() => alert('created'))
            .then(() => this.props.history.push('/memes'))
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input onChange={this.handleChange} type="text" name="title" value={this.state.dataForm.title} />
                <label>Image</label>
                <input onChange={this.handleChange} type="text" name="imageUrl" value={this.state.dataForm.imageUrl} />
                <button type="submit">Create</button>
            </form>
        )
    }
}



export default withRouter(MemeCreate)
