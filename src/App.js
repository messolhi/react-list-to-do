import React, { Component } from 'react'
import {v4 as uuid} from 'uuid';

import TodoInput from './components/TodoInput';

import TodoList from './components/TodoList';


// showing vs-code
class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false

  };
 handleChange = e =>{
   this.setState({item: e.target.value});
   };

 handelSubmit = e =>{
    e.preventDefault();
    const newItem ={
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems =[...this.state.items,newItem];
    this.setState({
      items:updatedItems,
      item:"",
      id:uuid(),
      editItem: false
    });
  }; 
  clearList =()=>{
    this.setState({
      items:[]
    })
  };
  handleDelete =(id)=>{
    const filterredItems = this.state.items.filter(item=>item.id !==id);
    this.setState({
      items: filterredItems
    });
  };
  handleEdit =(id)=>{
    const filterredItems =this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  };

  render() {
    return (
      
   
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5">

          <h3 className="text-capitalize text-center"> todo input</h3>

               
       <TodoInput 
       item={this.state.item} 
       handleChange={this.handleChange} 
       handleSubmit={this.handelSubmit} 
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
