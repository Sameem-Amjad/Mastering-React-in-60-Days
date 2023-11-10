import React from "react";
import { CommonContext } from "./CommonContext";
import {updateColor} from "./UpdateColorButtonInContextApi";
import ContextApiConsumerInClass from "./ContextApiConsumerInClassComponent";
class ContextApiProviderInClass extends React.Component
{ 
    constructor ()
    {
        super();
        
        this.updateColor = () =>
        {
            this.setState( {
                color:"red"
            })
        }
        this.state = {
            color: "white",
            updateColor:this.updateColor
        }
    }
    render ()
    {
        return (
            <CommonContext.Provider value = {this.state}>
                <div >
                    <h1>Complete and easy Example of Contect API</h1>
                    <ContextApiConsumerInClass />
                    <updateColor/>
                </div>
            </CommonContext.Provider>
            
        )
    }
}

export default ContextApiProviderInClass;