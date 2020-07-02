import React, { Component } from 'react';

class MakeButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            clickAge: props.age
        }
    }
    clickHandler = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
        })
    }
    render(){
        const {firstName, lastName, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.clickAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.clickHandler}>Birthday button for {firstName} {lastName}</button>
            </div>
        );
    }
}
export default MakeButton;
