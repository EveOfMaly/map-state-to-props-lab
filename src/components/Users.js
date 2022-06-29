import React, { Component } from 'react';
import {connect} from 'react-redux'

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {console.log(this.props)}
          <ul>
            {this.props.users.map(user => <li> {user.username} - {user.hometown} </li>)}
          </ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        <p>Total Users in Store: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  return {
    users: state.users,
    userCount: state.users.length
  }
}


// connect this component to Redux
//gives Users access to dispatch method
export default connect(mapStateToProps)(Users)
