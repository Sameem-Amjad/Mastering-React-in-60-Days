import { useState } from "react";
{/*
    there are only three Life cycle phase in React which are Mounting, Updating and UnMounting phase.
    but there are many life cycle Method can be possible.
    if element is hide by default then after clicking on load it will be loaded that is called Mountiong(Loading of a Component).
    Passing Props to component or change the state of the component is Updating phase.
    Removing the component is called Unmounting phase.
    In real Life scenario there are used i.e just like a way pop-up show because react see that the html is fully loaded then the pop-up shows up after the whole background is loaded. 
    (for Mounting)ComponentDidMount means component is loaded now show the Pop-up
    (for Updating phase) ComponentDidUpdate
    (for Unmounting phase) ComponentWillUnmount
    These all Life Cycle Methods are used inside the Component(Both Functional and CLass Component)
*/}
function LifeCycle ()
{
    const [ data, setData ] = useState( "Product" );
    const [removeData,unRemoveData ] = useState( false);
    return (
        <div>
            { removeData ? null : <h1>{ data }</h1> }
            {/* New life cycle will be created when the product is hide or shown */}
            <button className="onClickEvent" onClick={()=>{unRemoveData(false)}}>Load Product</button>
            <button className="onClickEvent" onClick={()=>{setData("Good Product ")}}>Update Product</button>
            <button className="onClickEvent" onClick={ () => { unRemoveData( true ); }}>Remove Product</button>
        </div>
    )
}
export default LifeCycle;