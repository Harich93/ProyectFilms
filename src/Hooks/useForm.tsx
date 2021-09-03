import { useState } from "react";



export const useForm = (  state:any  ) => {

    const [values, setValues] = useState(state);

    const reset = () =>{
        setValues( state );
    } 

    const handleInputChange = ( { target }:any ) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };

    return [ values, handleInputChange, reset ];
}