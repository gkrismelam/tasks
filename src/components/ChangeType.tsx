import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    function changeType(): void {
        if (questionType === "multiple_choice_question") {
            setQuestion("short_answer_question");
        } else {
            setQuestion("multiple_choice_question");
        }
    }

    return (
        <span>
            <Button onClick={changeType}>Change Type</Button>
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
        </span>
    );
}
