import React, { Component } from 'react';
import './styles.css';
import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

class Main extends Component{
    render(){
        return (
            <div className="main">
                <div className="con">
                    <Subcontent/>
                    <Subcontent/>
                    <Subcontent/>
                </div>
                <Advertisement/>
            </div>
        );
    }
}

export default Main;