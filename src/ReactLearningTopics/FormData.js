import { useState } from "react";
function FormData ()
{
    let [ name, setName ] = useState( "" );
    let [ series, setSeries ] = useState( null );
    let [tnc,setTnc] = useState( false);
    function getData (e)
    {
        console.log(name,series,tnc);
        e.preventDefault();   
    }
    return (
        <div>
            <form onSubmit={getData}>
                <input type="text" className="input" placeholder="Enter Name" onChange={ ( name ) => { setName( name.target.value ); }}/><br/>
                <select className="select" onChange={ ( series ) => { setSeries( series.target.value ); }}>
                    <option >Select Option</option>
                    <option >Marvel</option>
                    <option >T-Series</option>
                    <option >Netflix</option>
                </select><br/><br/>
                <input type="checkbox" onChange={ ( e ) =>
                {
                    setTnc( e.target.value
                    );
                } }></input>
                <span>Terms and Conditions</span><br/><br/>
                <button className="onClickEvent" type="submit">Submit</button>
            </form>
        </div>
    );
}
export default FormData;