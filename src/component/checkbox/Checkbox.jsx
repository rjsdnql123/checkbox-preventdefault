import React, {  useEffect, useRef, useState } from "react";

const Checkbox = () => {

    const [checked, setChecked] = useState(false);
    const inputClick = useRef(null);

    useEffect(() => {
    
        const mouseupEvent = (e) => {
          console.log('mouseUp checked-value', e.target.checked)
        }
    
        if (inputClick.current) {
          inputClick.current.addEventListener("mouseup",mouseupEvent, false);
    
          return () => {
            inputClick.current.removeEventListener("mouseup", mouseupEvent, false);
          }
        }
      }, []);

    useEffect(() => {
        const func = (e) => {
            console.log('click checked-value', e.target.checked)
            e.preventDefault();
            e.stopPropagation();
        }
        if(inputClick.current) {
            inputClick.current.addEventListener('click', func)
        }
 
        return () => {
            inputClick.current.removeEventListener('click', func);
        }
    }, [])

    useEffect(() => {
        const func = (e) => {
            console.log('change checked-value', e.target.checked)
        }
        if(inputClick.current) {
            inputClick.current.addEventListener('change', func)
        }
 
        return () => {
            inputClick.current.removeEventListener('change', func);
        }
    }, [])

    console.log(checked, 'checked value')

    return (
        <div>
            <label
            >
                <input type="checkbox" 
                    ref={inputClick}
                    onChange={(e) => {
                    console.log(e.target.checked, 'e.target.checked')
                    setChecked(e.target.checked)
                 }} 
                 checked={checked}
                 />
            </label>
        </div>
    )
}

export default Checkbox;
