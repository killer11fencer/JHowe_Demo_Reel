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