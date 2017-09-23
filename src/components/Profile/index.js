import React, { Component } from "react";
import {Card,CardText} from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';
import db from "../../utils/db";
import Profile from "./data";
const styles = {
  cardStyle: {
    maxWidth: '300px',
    'word-break':'break-all',
    'min-height': '100px',
    margin: '10% auto',
    'padding-top' : '10px',
    
  }
};
export default class ProfileComponent extends Component{
render(){
const data = JSON.stringify(Profile.profileData(),null,2);    
return(
 <Row className="show-grid">
        <Col xs={12} className="header-wrapper">
          <Card style={styles.cardStyle}>
            <CardText>{data}</CardText>
            
          </Card>
        </Col>
      </Row>

);

}

}



