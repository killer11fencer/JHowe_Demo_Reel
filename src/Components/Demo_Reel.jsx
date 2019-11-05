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
    let display_videos = this.state.videos.map((video,id)=> {
        return <div key={id}>
        <h5>{video.title}</h5>
        <h5>{video.url}</h5>
        <h5>{video.description}</h5>
        </div>
    })
    return(
    <div>
        <h5>{display_videos}</h5>
    </div>)
}

export default Demo_Reel