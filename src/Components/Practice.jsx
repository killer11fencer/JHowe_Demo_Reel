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
        </div>
    )
}
}

export default Practice