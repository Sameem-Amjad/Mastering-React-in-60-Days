function OnClick ()
{
    function apple ()
    {
        return (
            alert( "Hello World!" )
        );
    }
    return (
        <div >
            <button className='onClickEvent' onClick={ apple }>
                Click me
            </button>
            <button className='onClickEvent' onClick={ () => alert( "hello me!" ) }>
                Click me
            </button>
        </div>
    );
}
export default OnClick;