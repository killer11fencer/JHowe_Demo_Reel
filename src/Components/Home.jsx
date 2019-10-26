import React, {Component} from 'react'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            demo_reel: '',
            highlights:[],
        }
    }
    componentDidMount () {
        axios.get('api/home').then(result=> {this.setState({highlights: result})})
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return(
        <div className='Home'>
            <header>
                <div>Home</div>
                <div>About</div>
                <div>Portfolio</div>
                <div>Contact Us</div>
                </header>
            <div>{displayReel}</div>
            <div>{displayHighlights}</div>
            <div>description of the company and goal</div>
            <div>
                <h3>Invite to action or contact</h3>
                <button>Tell Us About your project</button>
            </div>
            <footer>Contact Info</footer>
        </div>) 
        
    }
}
export default Home