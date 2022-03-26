import React from 'react';

const Ans = () => {
    return (
        <div className='container my-3'>
            <div>
                <div class="border border-primary mb-3 p-3">
                    <h4 >How React Works</h4>
                    <p>
                    React.js is one of the most widely discussed JavaScript web frameworks in recent years. React, like Angular and, more recently, Vue, is a critical tool that has had a significant impact on how we build web applications.
                    </p>
                    <p>
                    
                    One of the most significant benefits of using React is the ability to infuse JavaScript into HTML code.By declaring the Element function in React, users can generate a DOM node representation. The syntax of the HTML code above is similar to that of XML, as you may have noticed. React, on the other hand, employs className instead of the traditional DOM class.Names, children, and attributes are all part of JSX tags. Curly brackets must surround numerical values and expressions. JSX attributes, like JavaScript, use quotation marks to represent strings.To simplify components and keep code clean, most React code is written in JSX rather than standard JavaScript.

                    </p>
                </div>

                <div class="mt-3 border border-primary mb-3 p-3">
                    <h4>Difference between Props Vs States</h4>
                    
                    <div class="row">
                        <div class="col-sm-6">
                            <h5 class="text-center">Propes</h5>

                             <ul>
                                    <li>Props enable components to be reused by allowing them to receive data from their parent component in the form of props. They are equivalent to function parameters.</li>
                                    <li>Props are read-only.</li>
                                    <li>Props are passed outside the components.</li>
                                    <li>Determine the view upon creation, and then they remain static.</li>
                                    <li>Props can not be modified
                                                                    </li>
                                    
                            </ul> 
                        </div>
                        <div class="col-sm-6">
                            <h5 class="text-center">States</h5>

                            <ul>
                                    <li>State is the component's local state that cannot be accessed or modified outside of the component. It's the same as using local variables in a function.</li>
                                    <li>State changes can be asynchronous.</li>
                                    <li>States are passed inside a component.</li>
                                    <li>The is set and updated by the object.</li>
                                    
                                    <li>State can be modified using this.setState.
                                                                                    </li>
                                    
                            </ul>
                            
                        </div>

                    </div>
                </div>

                <div class="border border-primary mb-3 p-3">
                    <h4 >How useStates Works</h4>
                    <p>
                    The useState hook allows you to add state to function components.
                    By calling React.useState within a function component, you create a single piece of state associated with that component.
                    </p>
                    <p>
                    
                    In class components, the state was always an object, and you could store multiple values in that object.However, with hooks, the state can be any type you want. UseState with an array, useState with an object, a number, a boolean, a string, whatever you need. Each useState call generates a single piece of state that holds a single value of any type.The useState hook is ideal for local component state, and only a small amount of it. For a larger app, or one that you intend to scale up, you'll probably want to supplement useState with some other state management solutions.


                    </p>
                </div>

            </div>
           

            
        </div>
    );
};

export default Ans;