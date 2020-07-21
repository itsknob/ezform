import * as React from "react"

interface InputProps {
    type: string,
    id?: string,
    name: string,
    label?: string,
}


let inputTypes = ["button",
"checkbox",
"color",
"date",
"datetime-local",
"email",
"file",
"hidden",
"image",
"month",
"number",
"password",
"radio",
"range",
"reset",
"search",
"submit",
"tel",
"text",
"time",
"url",
"week"]


function Input ({type = "text", id, name, label}: InputProps) {

    return (
        <>
            {label && <label htmlFor={id} id={`${label}-label`} > {label} </label>}
            <input type={type} name={name} id={id} />
        </>
    )
}

export { Input };