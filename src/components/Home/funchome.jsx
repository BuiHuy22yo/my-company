import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

FuncComponentsHome.propTypes = {};

function FuncComponentsHome(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>Function Component</p>
            <h4 className="name">Đây là props : {props.name}</h4>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        </div>
    );
}
export default FuncComponentsHome;