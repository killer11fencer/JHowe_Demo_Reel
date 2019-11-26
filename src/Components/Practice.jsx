import React, {Component} from 'react'

class Practice extends Component {
    constructor () {
        super();
        this.state = {
            first_name: '',
            last_name:''

        }
handleChange = (e) => {
    if (e.target.name)
    this.setState({[e.target.name]: e.target.value})
}
    }
render () {
    return(
        <div>
            <h1>Hello</h1>
            <button>Approve</button>
            <input name='first_name' onChange={this.handleChange}/>
        </div>
    )
}
}

export default Practice