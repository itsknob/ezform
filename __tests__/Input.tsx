import * as React from "react"
import { Input } from "../src/Input"
import { render } from "@testing-library/react"


describe("Input", () => {
    describe("renders", () => {
        test("text", async () => {
            const { findByLabelText } = render(<Input type="text" name="renders" id="renders" label="Input" />);
            const input = await findByLabelText(/Input/);
            expect(input).toBeDefined();
        })

    })


})