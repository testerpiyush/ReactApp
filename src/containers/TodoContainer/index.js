
import React, { Component } from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { Row, Col } from 'react-bootstrap';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import db from "../../utils/db";
import data from "../../utils/data";
import Todo from '../../components/Todo';
import AddTodo from '../../components/AddTodos';
import Completed from '../../components/Completed';

const styles = {
    cardStyle: {
        width: '400px',
        margin: '0px auto',
        textAlign: 'center',
        padding:'10px',
        
    },

    addTaskbtn:{
        bottom: '20px',
        right: '20px'
    },
    cardDiv:{
  maxHeight:'500px',
 //overflowY:'auto',
 //overflowX:'hidden'

},
tabsActive:{
    width:'40%',
    display: 'inline-block',
    padding:'0px 10px',
    textAlign:'center',
    borderRight : '2px solid'
},
tabsCompleted:{
    width:'40%',
    display: 'inline-block',
    padding:'0px 10px',
    textAlign:'center'
}

}

class TodoContainer extends Component {
    constructor(props){
        super(props);
        
        this.state = {
             open: false,
             data: [],
             checked:false,
             cardDivid:[],
             completedTask :false,
             data1:[]
            };
        // this.fetchData = this.fetchData.bind(this);
        this.fetchData();
        this.showCompletedTask = this.showCompletedTask.bind(this);
        this.CompletedTasks = this.CompletedTasks.bind(this);
    }
     
     getInitialstate =() => {
        this.setState({
            open: true
        });
     }


    fetchData = ()=>{
         db.tasks.toArray()
        .then((res = []) => {
            console.log("data33",res)
            this.setState({
                data:res.reverse().filter((d) => !d.Ischecked)
            },()=>console.log('check shit data', this.state.data));
        });
     
    }
    CompletedTasks = () => {
        db.tasks.toArray() 
        .then((resul = []) => {
            console.log("data1",resul)
            this.setState({
                data:resul.reverse().filter((d) => d.Ischecked)
            });
        });
     
    }
    deleteCard = (cardId)=>{
        // this.setState({
        //     carddivId:[this.props.cardId]
        // })
       console.log("cardId is ----",cardId);
       cardId = parseInt(cardId,10);
       // const carddivId = [this.props.cardId];
     const result =    db.tasks.where("id").equals(cardId).modify({
            Ischecked:1
        })
         .then((result) =>{
             this.fetchData();
                    return Promise.resolve("Post success Drop card",result);
                    
        //               console.log('Card deleted')
                    
          }).catch((err) => {
                  console.log(
                    "EditLeadPostCallback createPayloadHandler - Unable to modify postrequest = ",
                    err
                  );
                  return Promise.reject(err);
                });
    }

    showCompletedTask = (event) =>{
      this.setState({
          completedTask:true
      })
      this.CompletedTasks();
    }
    


    getchildstate = () => {
        return{ checked : false };
    };

    onchildcheck = (newstate,cardId) => {
    //   console.log("cardId is ----",this.props.cardId);  
        this.setState({checked:newstate
          
    });
    
        this.deleteCard(cardId);
         
        
        // let checkedCard = document.getElementById(this.id);
         //console.log("targetId is ",checkedCard);

    };
     
     
  

    render() {
        console.log("that --- ", this);
           // var overlay = this.state.completedTask ? <Completed  completedTasks={this.state.completedTask} /> : null;

        return (
            <div >
                <Card className="card-container" style={styles.cardStyle}>
                    <CardTitle title="Task Checklist"/>
                    <button name = 'Active'style = {styles.tabsActive} onClick = {this.fetchData} >Active Tasks</button>
                    <button name = 'Completed'style = {styles.tabsCompleted} 
                     onClick = {this.showCompletedTask}

                    >Completed Tasks
                    
                    </button>
                    {this.state.data.map((details,index) => {
                        return (
                            <Todo
                                    key={index}
                                    title={details.taskname}
                                    description={details.taskdetails}
                                    status={details.Ischecked}
                                    id = {details.id}
                                    time = {details.time}
                                    forDate = {details.forDate}
                                    callbackpar = {(newstate,cardId) => this.onchildcheck(newstate,cardId)}
                                    
                                   
                                />
                        )
                    })
                    }
                    <div style = {styles.cardDiv}>
                        
                    {/*{
                        this.state.data.map((details, index) => {
                            return (
                                <Todo
                                    key={index}
                                    title={details.taskname}
                                    description={details.taskdetails}
                                    id = {details.id}
                                    time = {details.time}
                                    callbackpar = {(newstate,cardId) => this.onchildcheck(newstate,cardId)}
                                    
                                   
                                />
                            )
                        })
                    }*/}
                   
                      </div>
                    
                        <AddTodo callback={this.fetchData}/>
                        
                   
                    
                </Card>
                
            </div>
        );
    }
}


export default TodoContainer;