import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Gopi Melam</p>
            <p>Hello World</p>
            <div>
                <h1>Header</h1>
                <ul>
                    <li>CISC 275</li>
                    <li>MATH 450</li>
                    <li>STAT 200</li>
                </ul>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <img alt="place hodler text" />
            </div>
            <div style={{ backgroundColor: "red" }} className="App-div">
                <Container>
                    <Row>
                        <Col>Column 2</Col>
                        <Col>Column 1</Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
