import React, { Component } from 'react'
import "../style/file1.css"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/mactions'

class MechanicRegister extends Component {
  constructor(props){
    super(props);
    this.mechanicName=React.createRef();
    this.mechanicPhoneNumber=React.createRef();
    this.mechanicServiceType=React.createRef();
    this.mechanicEmailId=React.createRef();
    this.mechanicPassword=React.createRef();
    this.location=React.createRef();
  }
  componentDidMount() {
    this.props.clearState()
}

registerMechanic()
{
  let mechanic={
    mechanicName:this.mechanicName.current.value,
    mechanicPhoneNumber:this.mechanicPhoneNumber.current.value,
    mechanicServiceType:this.mechanicServiceType.current.value,
    mechanicEmailId:this.mechanicEmailId.current.value,
    mechanicPassword:this.mechanicPassword.current.value,
    location:this.location.current.value
  }
  // alert("on register");
  this.props.onRegister(mechanic);
  //alert(mechanic);

}
    render() {
        return (
          <div>
          <h1>REGISTER</h1>
            <div className="col-md-5 col-md-offset-3" id="Body"  >
                <form className="form" /*method="post"*/ >
                  <div className="mb-3 row">
                    <div className="col-sm-5 ">
                    <input
                        type="text"
                        id="12"
                        className="form-control form-control-sm"
                        ref={this.mechanicName}
                        name="mechanicName"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.mechanicPhoneNumber}
                        name="mechanicPhoneNumber"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.mechanicServiceType}
                        name="mechanicServiceType"
                        placeholder=" Service Type"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        ref={this.mechanicEmailId}
                        name="mechanicEmailId"
                        placeholder=" Email id"
                        required />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        ref={this.mechanicPassword}
                        name="mechanicPassword"
                        placeholder=" Password"
                        required/>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-5">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        ref={this.location}
                        name="location"
                        placeholder=" Location"
                        required/>
                    </div>
                  </div>
    
                  <div className="row mt-3">
                    <div className="col-sm-5">
                      <button className="btn btn-primary btn-sm" onClick={this.registerMechanic.bind(this)}> Sign up
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
      onRegister: (mechanic) => {
          dispatch(actionCreators.register(mechanic))
          //alert("to action");
      },
      clearState: () => {
        dispatch(actionCreators.clearState())

    }

}

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MechanicRegister))
