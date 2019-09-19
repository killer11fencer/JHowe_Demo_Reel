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
            <footer>Contact Info</footer>
        </div>) 
        
    }
}
export default Home