import React, { Component } from 'react'
import {v4 as uuid} from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './components/TodoInput';

import TodoList from './components/TodoList';


// showing vs-code
class App extends Component {

  state = {
    items: [{id:1, title:"wake up"},
            {id:2,title:"takeBreak"}],
    id: uuid(),
    item: '',
    editItem: false

  };
  handelChange =(e)=>{console.log('handle change')}
  handelSubmit =(e)=>{console.log("handle Submit")}
  clearList =()=>{console.log(`clear list`)}
  handleDelete =(id)=>{console.log(`handle delete ${id}`)}
  handleEdit =(id)=>{console.log(`handle edit ${id}`)}

  render() {
    return (
      <div>
   
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">

          <h3 className="text-capitalize text-center"> todo input</h3>

        </div>
       <TodoInput 
       item={this.state.item} 
       handleChange={this.handleChange} 
       handleSubmit={this.handleSubmit} 
       editItem={this.state.editItem}
       
       />
       <TodoList 
       items={this.state.items}
       clearList={this.clearList}
       handleDelete={this.handleDelete}
       handleEdit = {this.handleEdit}
       
       />       

     </div>
   </div>
   </div>
    )
  }
}
export default App;
