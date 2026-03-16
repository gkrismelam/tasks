import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [attemptsRequested, setRequests] = useState<number>(0);

    function useAttempts() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gainAttempts() {
        if (!isNaN(attemptsRequested)) {
            setAttempts(attempts + attemptsRequested);
        }
    }

    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Requested attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequests(
                            event.target.value === "" ?
                                0
                            :   parseInt(event.target.value),
                        );
                    }}
                />
            </Form.Group>

            <Button onClick={useAttempts} disabled={attempts === 0}>
                use
            </Button>

            <Button onClick={gainAttempts}>gain</Button>

            <div>Attempts left: {attempts}.</div>
        </div>
    );
}
