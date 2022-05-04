import React, {useEffect, useState, useCallback} from "react"
import {Button} from "reactstrap"


/*export const Dice = ({size}) => {
    <p>{size}</p>
}*/

export const Dice = ({size, rollHandler}) => {
    
    /*const RollAction = useCallback((s) => {
        setValue(Math.floor(Math.random() * s + 1));
    }, [size]);*/
    const RollAction = (s) => {
        setValue(Math.floor(Math.random() * s + 1));
    }

    const [value, setValue] = useState();

    useEffect(() => {
        console.log("Component added")
    }, []);

    useEffect(() => {
        console.log("Size Changed")
        RollAction(size);
    }, [size]);

    useEffect(() => {
        console.log("Value added")
        if (rollHandler !== undefined) rollHandler(value);
    }, [value, rollHandler]);
    
    return (
        <div>
            <span className="m-3">{value}</span>
            <Button onClick={() => {RollAction(size)}}>Roll</Button>
        </div>
    )
}


export default Dice;