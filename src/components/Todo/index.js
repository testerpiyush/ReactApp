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


export default class Todo extends Component{
    constructor(props){
        super(props);
    this.state = {
    checked: false,
  }
    }

  updateCheck = () => {
    const newstate = !this.state.checked
    let cardId = this.input.getAttribute('data-id');
    this.setState({
    checked:newstate,
     
     });
  this.props.callbackpar(newstate,cardId);
   alert(this.input.getAttribute('data-id'));
}


Change = (e) => {
    this.setState({text: e.currentTarget});
    console.log("targeted ",text);
  }

  ShowTime = () => {
  
   const days = new Date(this.props.time);
  console.log("days",days);
  return days.toString();
    
  }
      
    render(){
      console.log("this --- ", this)
      const status = this.props.status?"Task Completed":(
        <input type = 'checkbox' data-id = {this.props.id}  onChange = {e => this.updateCheck(e.currentTarget)} checked = {this.state.checked}
                  
                  style={styles.checkbox}
                  ref={(input) => { this.input = input }}
                  
              />
      )
        return(
            
          <div style = {styles.taskdetail}>
              {/*<p>Date = {this.ShowTime()}</p>*/}
              <p>name = {this.props.title}</p>
              <p>description = {this.props.description}</p>
              <p>fordate = {this.props.forDate}</p>
              {status}
           
          </div>
        );
    }
}

