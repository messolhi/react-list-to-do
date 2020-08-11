import React, { Component } from 'react';
import Item from "./TodoItem";


export default class TodoList extends Component {
    render() {
        return (
            
            <section>
                
                <h2>to do list</h2>
                <Item />
            </section>
           
        );
    }
}
