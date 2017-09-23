import React, { Component } from "react";
import Card from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';
import db from "../../utils/db";


const styles = {
  cardStyle: {
    maxWidth: '300px',
    height: '260px',
    margin: '10% auto',
    padding: '10px'
  }
};
const validate = (values) => {
  const errors = {};
  const requiredFields = ["username", "password"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = `${field} is required`;
    }
  });
  return errors;
};


export default class Login extends Component{
   handleChange = (propertyName, value) => {
    this.setState({ [propertyName]: value }, () => {});
  }
  
  authenticate = (username,password) => {
    //var userexist = db.users.where({'username':username,'password':password}).toArray();
    var userexist = db.users.where('username').equals(this.state.username).first()
    .then((res) => {
      if(res){
        console.log(res.password == this.state.password);
      }
      else{
        console.log("User not registerd")
      }
    })
    .catch((err) => {
      console.log(err);
    });

      



  }
render(){
return(
 <Row className="show-grid">
        <Col xs={12} className="header-wrapper">
          <Card style={styles.cardStyle}>
            <AppBar title="Play" titleStyle={{'textAlign':'center'}} showMenuIconButton={false} />
              <TextField
                 name = "username"
                 hintText="xyz@xyz.com"
                 floatingLabelText="Email"
                 onChange={e => this.handleChange("username", e.target.value)}
              /><br />
              <TextField
                 name = "password"
                 hintText="123456"
                 floatingLabelText="Password"
                 onChange={e => this.handleChange("password", e.target.value)}
              /><br />
            <button className="login-btn" type="button" onClick={this.authenticate}>Login</button>
             

          </Card>
        </Col>
      </Row>

);

}

}