import { Component } from "react";
{/*
    All api functions are called in ComponentDidMount method
    any operation that is need to be showed or hidden is called in this method that is related to the Html
    Render first called all the html and dom is mount then this method is called.
    ComponentDidMount method is called after render method
    let take an example of ComponentDidMount.
    when ther is changed in the state or props of the component ComponentDidMount will not called it will only called once lets take example by using state .
*/}

 export default class CDMMethod extends Component
 {
    constructor ()
    {
        super();
        this.state = {
            data: "Sameem"
        }
    }
    componentDidMount ()
    {
        console.warn( 'CDMMethod ComponentDidMount' );
    }
    render ()
    {
        console.warn( 'CDMMethod Render' );
        return (
            <div>
                <h1>Render Method { this.state.data }</h1>
                <button className="onClickEvent" onClick={()=>this.setState({data:"Sameem Amjad"})}>Update Me</button>
            </div>
        )
    }

}