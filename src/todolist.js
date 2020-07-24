import React, { Component } from 'react'
import './todolist.css'

export default class todolist extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
        this.nameRef = React.createRef();
        
    }
    componentDidMount() {
        
    }
    
    handleClick = (event) => {
       console.log(this.state.list)
    }
    handleChange = (event) => {
        this.setState({
            list:[...this.state.list, event.target.value]
        })
    }
    render() {
        return (
            <div className="wrapper">
                <input className="input_content" type="text" ref={this.nameRef} autoFocus={true} onChange={this.handleChange}/>
                <button className ="btn" onClick={this.handleClick}>Add</button>
                <ul>
                    {
                    this.state.list.map((item) => {
                        <li>{item}</li>
                    })
                    }
                    
                </ul>
            </div>
        )
    }
}

