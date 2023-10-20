function Functional ()
{
    function functiondiv(){
        return (
            <div>
                <h1>Functional Component</h1>
            </div>
        )
    }
    return (
        <div className= "functionalComponent">
            <h1>Functional Component</h1>
            {functiondiv()}
        </div>
    )
}
export default Functional;