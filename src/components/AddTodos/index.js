import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import db from "../../utils/db";


 const styles = {
   popup:{
    minHeight: '500px',
    width:'50%'
   }
  };

  const validate = (values) => {
  const errors = {};
  const requiredFields = ["TaskHeading", "TaskDetails","ForDate"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = `${field} is required`;
    }
  });
  return errors;
};

 class AddTodo extends Component {
     constructor(props){
        super(props);
            this.state = {
             open: false
            };
            this.addTask = this.addTask.bind(this);
     }
     
  handleOpen = () => {
      this.setState({open: true});
  };


  handleClose = () => {
    this.setState({open: false});
  };
  handleChange = (propertyName, value) => {
    this.setState({ [propertyName]: value }, () => {});
    
  }
 
   addTask = (TaskHeading,TaskDetails,ForDate) => {
     console.log('added to db');
     const unix = Math.floor(Date.now() / 1000);
     console.log('time',unix)
   db.tasks.put({
		taskname: this.state.TaskHeading,
		taskdetails: this.state.TaskDetails,
    forDate:this.state.ForDate,
    time: unix,
    Ischecked:0
	}).then(() => {
      this.props.callback();
  });
    this.setState({open: false});
   };

   
 

  render() {
    console.log('whyy',this)
    const actions = [
      
    
    
    <TextField
      name="TaskHeading"
      hintText="Enter Task Heading"
       onChange={e => this.handleChange("TaskHeading", e.target.value)}
      
      />,
      <TextField
      name = "TaskDetails"
      hintText="The hint text."
       onChange={e => this.handleChange("TaskDetails", e.target.value)}
      
      />,
      <input type = 'Date' name = "ForDate" onChange = {e =>this.handleChange("ForDate",e.target.value)} />,
      
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton 
        label="Submit"
        primary={true}
       // disabled={this.state.disabled}
        onClick={(this.addTask)}
        
      />
    ];

    const status = this.props.status?"":
      <RaisedButton label="Add Todo" onClick = {this.handleOpen.bind(this)} />
    return (
      <div > 
           {status}
        <Dialog style = {styles.popup}
          title="Add your tasks"

          actions={actions}
          modal={true}
          open={this.state.open}
        >
        </Dialog>
      </div>
    );
  }
}
export default AddTodo;