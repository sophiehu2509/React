import React, { Component } from 'react'
import './todolist.css'

export default class todolist extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[],
            item:''
        }
        this.nameRef = React.createRef();
        
    }
    componentDidMount() {
        
    }
    
    handleClick = (event) => {
        this.setState({
            list:[...this.state.list, this.state.item]
        })
    }
    handleChange = (event) => {
        this.setState({
            item:event.target.value
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
                                return <li key={item}>{item}</li>
                             })
                        
                  
                    }
                    
                </ul>
            </div>
        )
    }
}

