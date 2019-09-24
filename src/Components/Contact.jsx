import React, {Component} from 'react'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            company:'',
            project:'',
            email:'',
            phone:''
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return(
            <div>
                <h3>Contact Us</h3>
                <h4>Name</h4>
                <input name='first_name' onChange={this.handleChange}/>
                <input name='last_name' onChange={this.handleChange}/>
            </div>
        )
    }
}
export default Contact