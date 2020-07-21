import * as React from "react"
import { Form } from "../src/Form"
import { render } from "@testing-library/react"

describe("Form", () => {
    test("renders", () => {
        const { container } = render(<Form />);
        let form = container.querySelector('form')
        expect(form).toBeDefined();
    })

    test("submits", () => {
        let onSubmit = jest.fn();
        const { container } = render(<Form onSubmit={onSubmit} />);
        let form = container.querySelector('form')
        form.submit();
        expect(onSubmit).toHaveBeenCalledTimes(1);
    })
})