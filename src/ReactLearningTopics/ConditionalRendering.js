import { useState } from "react";
function Profile ()
{
    let [ login, setlogin ] = useState( 2 );
    return (
        <div>
            {/* { login===1?<h1>Welcome Me</h1>:<h1>Welcome Followers</h1>} */}
            {/* for an else if condition we can use tertiary operators like this */}
            {login===1?<h1>Welcome Me</h1>:login===2?<h1>Welcome Followers</h1>:<h1>Welcome u non-follower</h1>}
        </div>
    );
    /*This Way is Not Recommended and it is prohibited.
    if ( login === 1 )
    {
        return (
            <div>
                <h1>Welcome ME</h1>;
            </div>
        )
    }
    else if ( login === 2 )
    {
        return (
            <div>
                <h1>Welcome Dear Followers</h1>;
            </div>
        )
    }
    else
    {
        return (
            <div>
                <h1>Welcome Non-Followers</h1>;
            </div>
        )
    }*/
    
}
export default Profile; 