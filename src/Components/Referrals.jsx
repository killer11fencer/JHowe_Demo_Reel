import React, {Component} from 'react'
import axios from 'axios'

class Referrals extends Component {
    constuctor(){
        super();
        this.state = {
            referrals: [],
            admin: false
        }
    }
    componentDidMount () {
        this.get_admin()
        this.get_referrals()
    }

get_referrals = () => {
    axios.get('api/referrals').then( result => {this.setState({referrals: result})})
}
get_admin = () => {
    axios.get('api/admin').then(result => {this.setState({admin:result})})
}
render() {
    let display_referrals = this.state.referrals.map((referral,id) => {
        return <div id={id}>
            <h4>Date Submitted</h4>
            <h5>{referral.date_created}</h5>
            <h4>First Name</h4>
            <h5>{referral.first_name}</h5>
            <h4>Last Name</h4>
            <h5>{referral.last_name}</h5>
            <h4>Phone Number</h4>
            <h5>{referral.phone}</h5>
            <h4>Email</h4>
            <h5>{referral.email}</h5>
            <h4>Project Details</h4>
            <h5>{referral.project}</h5>
        </div>
    })
    return( <div>
        
            {display_referrals}
    </div>)
}
}

export default Referrals