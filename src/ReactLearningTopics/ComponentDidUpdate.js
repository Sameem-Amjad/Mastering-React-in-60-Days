import { Component} from 'react';
import Constructor from './ConstructorInLifeCycleMethod';
export default class ComponentDidUpdateMethod extends Component
{ 
    constructor(){
        super();
        console.log( 'componentDidUpdateConstructor' );
        this.state = {
            name: "Sameem",
            count:0,
        }
    }
    componentDidUpdate (prevProps, preState,prevSnapshot) 
    {
        console.log( 'componentDidUpdate', preState );
        //here we can't update any state or prop directly without any condition because every time after a state or prop update tis function will run and the state in it will also update (that is without the condition.)
        //forexample we have number in the state so if the number is changed we can see that this method will called after the render method. that is why we use Api in this method and can change state and prop in this method with condition.
        //so we can see from the browser console that componentDidUpdate method run after every changed in the state.
        //without consition it will go in infinite loop

        //We can also see previous props and previous snapshot and previous state in this method such that
    }
    render ()
    {
        // console.log('render');
        return (
            <div>
                <h1>Welcome { this.state.name }</h1>
                <h1>User { this.state.count}</h1>
                <button className='onClickEvent' onClick={()=>{this.setState({count:(this.state.count+1)})}}>Update me</button>
            </div>
        )
    }
}