import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function updateSelectedChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="userChoice">
                <Form.Label>How do you feel?</Form.Label>
                <Form.Select
                    value={selectedChoice}
                    onChange={updateSelectedChoice}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div>
                <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
            </div>
        </div>
    );
}

// MultipleChoiceQuestions
// The MultipleChoiceQuestions component allows a user to select an answer from a list in a dropdown, and then displays whether they got it correct or incorrect. The component takes in a parameter representing the expectedAnswer and also a parameter representing the list of options.

// You will need a state to represent the user’s currently selected choice.
// The initial state of the selected choice is the first element of the options list.
// When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
