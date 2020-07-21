import * as React from "react"

interface FormProps {
    onSubmit?: Function,
    children?: any,
};

function Form({onSubmit, children}: FormProps) {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export {Form}