import React, {useEffect, useState} from 'react';

import '../styles/GraphValue.css';

export default function GraphValue(props) {

    function calcValue() {

        let value = Math.round(props.value * (Math.pow(1.7, 5)));
        return value;

    }

    const [total, setTotal] = useState(calcValue());

    useEffect(() => {
        setTotal(calcValue());
      }, [props.value]); // Only re-run the effect if count changes


    return (

        <div className="GraphValue">
            <div className="GraphValueColor"></div>
            <div className="GraphValueNumbers">
                <p className="GraphValueText">WealthSimple</p>
                <p className="GraphValueText">{total}</p>
            </div>
            
        </div>


    )



}