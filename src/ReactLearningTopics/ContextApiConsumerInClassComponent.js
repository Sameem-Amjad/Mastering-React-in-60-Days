import React from 'react';
import { CommonContext } from './CommonContext';
export default class ContextApiConsumerInClass extends React.Component 
{
    render ()
    {
        return (
            <CommonContext.Consumer>
                {
                    ( ( color ) =>
                    (
                        <h1 style={ { backgroundColor: color } } >This is the use of Context Api in Class Component</h1>

                    ))
                }
            </CommonContext.Consumer>
        )
    }
}