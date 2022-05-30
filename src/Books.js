import React, {Component} from "react";
import { Outlet } from "react-router-dom";

class Books extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div>Some Books to help you!!!</div>
                <Outlet/>
            </div>
        );
    }
}

export default Books;