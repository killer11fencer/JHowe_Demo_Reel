import React, {Component} from 'react'
import axios from 'axios'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            business:'',
            project:'',
            email:'',
            phone:''
        }
    }
    componentDidMount() {
        this.get_admin()
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    get_admin = (e) => {
        axios.get('api/admin').then(result=>{this.setState({admin:true})})
    }
    render() {
        return(
            <div>
                <h3>Contact Us</h3>
                <h4>Name</h4>
                <input name='first_name' onChange={this.handleChange}/>
                <input name='last_name' onChange={this.handleChange}/>
                <h4>Business Name</h4>
                <input name='business' onChange={this.handleChange}/>
                <h4>Email</h4>
                <input name='email' onChange={this.handleChange}/>
                <h4>Phone</h4>
                <input name='phone' onChange={this.handleChange}/>
                <h4>Tell us about your project</h4>
                <input name='project' onChange={this.handleChange}/>
            </div>
        )
    }
}
export default Contact