//It just act as a parameter of function u can also saya that they are the parameter of component . Props take the data as object and you can change the data whenever u want dynamically.
function Props ( props )
{
    return (
        <div className='Props'>
            <h1>Name : { props.name}</h1>
            <h1>Address : { props.address}</h1>
            <h1>Mobile : { props.mobile}</h1>
            <h1>Nick Name : { props.others.nickname }</h1>
            <h1>Email : { props.others.email}</h1>
        </div>
    )
}
export default Props;