import { useState } from "react";
function Login ()
{
    const [ user, setUser ] = useState("");
    const [ pass, setPass ] = useState( "" );
    const [userErr,setUserErr] = useState(false);
    const [ passErr, setPassErr ] = useState(false );
    function LoginHandle (event)
    {   
        if ( user.length > 8 && pass.length > 8 )
        {
            alert( "All Good):" );
        }
        else
        {
            alert( "Enter Correct Credentials" );
        }
        event.preventDefault();
    }
    function UserHandle (e)
    {
        let item = e.target.value;
        if ( item.length > 8 )
        {
            setUserErr(true);   
        }
        else
        {
            setUserErr(false);
        }
        setUser(item);
    }
    function PassHandle (e)
    {
        let item = e.target.value;
        if ( item.length > 8 )
        {
            setPassErr(true);   
        }
        else
        {
            setPassErr(false);
        }
        setPass(item);
    }
    
    return (
        <div>
            <form onSubmit={LoginHandle}>
                <input type="text" className="input" onChange={UserHandle} />{userErr?<span> User is Valid </span>:<span>User is Invalid</span>}<br></br>
                <input type="password" className="input" onChange={PassHandle} />{passErr?<span>Valid Password</span>:<span>Invalid Password</span>}<br/>
                <button type="submit" className="onClickEvent">Submit</button>
            </form>
            
        </div>
    )
}
export default Login;