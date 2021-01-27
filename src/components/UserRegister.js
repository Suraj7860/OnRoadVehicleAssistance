import React, { Component } from 'react'
import "../style/userfile.css";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/useractions'

class UserRegister extends Component {
  constructor(props){
    super(props);
    this.userName=React.createRef();
    this.userPassword=React.createRef();
    this.userPhoneNumber=React.createRef();
    this.userEmailId=React.createRef();
    
  }
  componentDidMount() {
    this.props.clearState()
}

registerUser()
{
  let user={
    userName:this.userName.current.value,
    userPassword:this.userPassword.current.value,
    userEmailId:this.userEmailId.current.value,
    userPhoneNumber:this.userPhoneNumber.current.value,
  }
 alert("on register");
  this.props.onRegister(user); 
}
    render() {
        return (
          <div>
          <h1>REGISTER</h1>
            <div className="col-md-5 col-md-offset-3" id="Body">
                 <form className="form"  /*method='post'*/ > 
                  <div className="mb-3 row">
                    <div className="col-sm-5 ">
                    <input
                        type="text"
                        id="12"
                        className="form-control form-control-sm"
                        ref={this.userName}
                        name="userName"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        ref={this.userPassword}
                        name="userPassword"
                        placeholder=" Password"
                        required/>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.userPhoneNumber}
                        name="userPhoneNumber"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        ref={this.userEmailId}
                        name="userEmailId"
                        placeholder=" Email id"
                        required/>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-sm-5">
                      <button className="btn btn-primary btn-sm" onClick={this.registerUser.bind(this)}> Sign up
                      </button>
                      </div>
                    </div>
                    </form>
            
            <div className={(this.props.returnedMessage === '') ? '' : "alert"} role="alert">
              {this.props.returnedMessage}
            </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
      returnedMessage: state.returnedMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onRegister: (user) => {
          dispatch(actionCreators.register(user))
          //alert("to action");
      },
      clearState: () => {
        dispatch(actionCreators.clearState())

    }

}

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserRegister))
