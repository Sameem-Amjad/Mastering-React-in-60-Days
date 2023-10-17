import { useState } from "react";
function InputBox ()
{
    let [ data, setData ] = useState( null );
    let [ print, setPrint ] = useState( false );
    function printData ()
    {
        setPrint( true );
    }
    function getValue (val)
    {
        setData( val.target.value );
        setPrint( false );
    }
    return (
        <div>
            {
                print ? <h1>{ data }</h1>:null
            }
            <input className="input" type="text" onChange={ getValue } /><br/>
            <button className="onClickEvent" onClick={printData}> Update Me</button>
        </div>
    )
}
export default InputBox;