import React, {Component} from 'react'
import axios from 'axios'

class Referrals extends Component {
    constuctor(){
        super();
        this.state = {
            referrals: []
        }
    }
    componentDidMount () {
        this.get_referrals()
    }
get_referrals = () => {
    axios.get('api/referrals').then( result => {this.setState({referrals: result})})
}
render() {
    return(<div>
            {display_referrals}
    </div>)
}
}

export default Referrals