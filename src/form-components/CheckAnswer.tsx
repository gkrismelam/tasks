import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function check(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formAnswers">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={answer} onChange={check} />
            </Form.Group>
            <div>{expectedAnswer === answer ? "✔️" : "❌"}</div>
        </div>
    );
}
