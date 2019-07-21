import React, { Component } from 'react';
import { show } from './api'

class MemeShow extends Component {
    state = {
        meme: {}
    }
    componentDidMount() {
        const user = this.props.user
        const memeId = this.props.memeId
        show(user, memeId)
            .then(res => {
                const showMeme = res.data.meme
                this.setState({
                    meme: showMeme
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        // console.log(this.props.memeId)
        return (
            <div>
                <h1>{this.state.meme.title}</h1>
                <img src={this.state.meme.imageUrl} alt={this.state.meme.title} />
            </div>
        );
    }
}

export default MemeShow;

//sami's
// import React, {Component} from 'react';
// import {show} from './api'

// class MemeShow extends Component{
//     state = {
//         meme:{}
//     }

//     componentDidMount(){
//         const user = this.props.user;
//         const memeId = this.props.memeId;
//         show(user,memeId)
//         .then((response) => {
//             const showMeme = response.data.meme;
//             this.setState({
//                 meme:showMeme
//             })
//         })
//         .catch((error) => console.log(error))
//     }



//     render(){
//         // console.log(this.props.memeId)
//         return(
//             <div>
//                 <h1>{this.state.meme.title}</h1>
//                 <img src={this.state.meme.imageUrl} alt=""/>
//             </div>
//         )
//     }
// }



// export default MemeShow
