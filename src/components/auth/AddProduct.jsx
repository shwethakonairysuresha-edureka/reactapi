import React, { Component, useState } from 'react'
import {Redirect} from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {registerUser} from '../../redux/actions/authAction'
 const Register = ({registerUser,isAuthenticated}) => {
  const [formData,setFormData] = useState({productid : '',
  productname:'',
  category:'',
  description:'',
  expirydate:''})
const {productid,productname,category,description,expirydate} = formData;
const onChange=(e) =>{

 setFormData({...formData,[e.target.name]:e.target.value})
  //when state of ur controller is changing then we are holding that changed value in state.
}
const onSubmit =(e)=>{
  e.preventDefault();
  const newUser = {
    productid : productid,
    productname:productname,
    category:category,
    description:description,
    expirydate:expirydate
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
                  <h1 className="display-4 text-center">Create Product</h1>
                  <p className="lead text-center">Add Product</p>
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Product Id" name="productid" required  value={productid} onChange={onChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Product Name" name="productname" value={productname} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Category" name="category"  value={category} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Description" name="description" value={description} onChange={onChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Expiry Date" name="expirydate" value={expirydate} onChange={onChange} />
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
  registerUser:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated : state.auth.isAuthenticated
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, {registerUser})(Register)