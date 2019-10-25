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
        axios.get('api/videos').then(result=>{this.setState({videos:result})})
    }
handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}
}
render() {
    return(
    <div>

    </div>)
}

export default Demo_Reel