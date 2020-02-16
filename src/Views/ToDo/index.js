import React, { Component } from 'react';
import ToDoComponent from '../../Components/ToDo';
import {FullLoading} from '../../Components/Loading';
import { requestApi } from '../../Commom/api';

export default class ToDo extends Component {
    state = {
        todos: [],
        todosBackUp: [],
        index: 0,
        loading:false
    }
    componentDidMount = async () => {
        this.setState({loading:true},async()=>{
            try {
                const data = await requestApi("/todos")
                this.setState({ todos: data, todosBackUp: data,loading:false })
            } catch (error) {
                this.setState({loading:false})
                console.log(error)
            }
        })
    }

    filterMethod(item, index) {
        if (index === 1) return item.completed
        else return !item.completed
    }

    filterList = () => {
        const { todosBackUp, index } = this.state
        const todos = todosBackUp.filter((item) => this.filterMethod(item, index))
        this.setState({ todos: index === 0 ? todosBackUp : todos })
    }

    render() {
        const { todos, index,loading } = this.state
        return loading ? (<FullLoading/>) : (
            <div className="col-12 pt-1 mt-5">
                <div className="col-md-4 col-12 mt-2 offset-md-4">
                    <div className="col-12 fixed-top">
                        <div className="row col-md-6 col-12 offset-md-3 margin-to-do color-todo">
                            <div onClick={() => { this.setState({ index: 0 }, () => this.filterList()) }} className={`col-4 text-center list-text clickable ${index === 0 && "text-color"}`}>TODOS</div>
                            <div onClick={() => { this.setState({ index: 1 }, () => this.filterList()) }} className={`col-4 text-center list-text clickable ${index === 1 && "text-color"}`}>FEITOS</div>
                            <div onClick={() => { this.setState({ index: 2 }, () => this.filterList()) }} className={`col-4 text-center list-text clickable ${index === 2 && "text-color"}`}>A FAZER</div>
                        </div>
                    </div>
                    <div className="row margin-to-do">
                        {todos.map(todo => {
                            return <ToDoComponent key={todo.id} item={todo} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}