import React, { Component } from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { Row, Col } from 'react-bootstrap';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import db from "../../utils/db";
import data from "../../utils/data";


const styles = {
  cardStyle: {
    height: '500px',
  width: '30%',
  margin: '0px auto',
  textAlign: 'center',
  padding:'10px',
  float: 'left'
 
  
},

todo:{
  width:'50px',
},
taskdetail:{
  width:'100%',
  minHeight:'20px',
  boxShadow:'inset 0px 0px 0px 1px rgb(221, 221, 221)',
  margin:'10px 0px',
  float: 'left'
},

checkbox: {
    marginBottom: '2px',
    right: '0px !important' ,
    left:'auto !important'
  },
};


export default class Completed extends Component{
    constructor(props){
        super(props);
   
    }

  
      
render(){
      console.log("this --- ", this)
        return(
            
          <div style = {styles.taskdetail}>
              <p>Date = {this.props.time}</p>
              <p>name = {this.props.title}</p>
              <p>description = {this.props.description}</p>
              <p>Task Completed </p>
           
          </div>
        );
    }
}

