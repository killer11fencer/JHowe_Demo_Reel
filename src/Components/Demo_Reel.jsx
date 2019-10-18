import React, {Component} from 'react'
import axios from 'axios'

class Demo_Reel extends Component {
    constructor(){
        super();
        this.state = {
            videos: [],
            add_video: '',
            admin: false
        }
    }
    componentDidMount () {

    }
handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}
}