import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {registerUser} from '../../redux/actions/authAction'
import { Redirect } from 'react-router-dom'

const Register = ({registerUser, isAuthenticated}) => {

  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:'',
    password2:''
  })

  const {username, email, password, password2} = formData;

  const handleChange = (event) => {
    // When state of ur controller is changing then we are holding that changed value in state.
    setFormData({...formData, [event.target.name]:event.target.value})
  };

  const onSubmit = (e) => {
    const newUser = {
      username : username,
      email : email,
      password : password,
      role : ['user']
    };
    e.preventDefault();
    console.log('Hello from Submit');
    console.log(JSON.stringify(formData));

    if(password!== password2) {
      console.log('problem')
    }
    else{
      // action 
      registerUser(formData)
    }
  }

  if(isAuthenticated) {
    return <Redirect to ='/login'></Redirect>
  }

  return (
    <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="username"
                    required value = {username} onChange = {handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email" value = {email} onChange = {handleChange}
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password" value = {password} onChange = {handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2" value = {password2} onChange = {handleChange}
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  registerUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated : state.auth.isAuthenticated
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, {registerUser})(Register)
