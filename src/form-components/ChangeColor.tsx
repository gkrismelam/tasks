import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("red");

    const colors: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "white",
        "black",
    ];

    return (
        <div>
            {colors.map((color) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    id="colors"
                    label={color}
                    name="colorGroup"
                    value={color}
                    checked={color === selectedColor}
                    onChange={() => {
                        setSelectedColor(color);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "20px",
                    marginTop: "10px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
