import React, { Component, useState } from 'react'
import {Redirect} from 'react-router-dom'
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {registerUser} from '../../redux/actions/authAction'
 const Register = ({registerUser,isAuthenticated}) => {
  const [formData,setFormData] = useState({productid : ''})
const {productid} = formData;
const onChange=(e) =>{

 setFormData({...formData,[e.target.name]:e.target.value})
  //when state of ur controller is changing then we are holding that changed value in state.
}
const onSubmit =(e)=>{
  e.preventDefault();
  const newUser = {
    productid : productid
};

console.log('hello from submit');
console.log(JSON.stringify(formData));
// if(password!== password2) {
//   console.log('problem')
// }
// else{
//   // action 
//   console.log('hello from register component'+JSON.stringify(formData))
//   registerUser(formData)
// }

};

  return (
    <div className="product">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Update Product</h1>
                  <p className="lead text-center">Update Product</p>
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Product Id" name="productid" required  value={productid} onChange={onChange} />
                    </div>
                    <Link href="updateproduct1.html" class="btn btn-lg btn-info mr-2" to="/updateproduct1">
                  Submit
                </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
  )
}

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  registerUser:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated : state.auth.isAuthenticated
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, {registerUser})(Register)