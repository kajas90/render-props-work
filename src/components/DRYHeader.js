import { Component } from 'react'



export default class DRYHeader extends Component {

    onClick = e => {
        // ... does some job
        alert('clicked')
    }

    render() {
        return <header onClick={this.onClick} >here comes some text</header>
    }
}