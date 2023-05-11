import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {

	const [input, setInput] = useState(" ")

	const handleChange = (e) => {
		setInput(e.target.value)
	}
  
	const [modal, setModal] = useState(false)

	const toggle = () => setModal(!modal)

	const handleReset = () => {
		setInput("")
	}
	return (
		<div className="entire-content">
			<h1 className="title">Preparedness Assessment</h1>
			<div className="form">
				<div className="input" input="text">
					<Label for="name" className="input-label">
						Enter your name
					</Label>
					<Input className="input-field" value={input} onChange={handleChange} />
				</div>
				<div className="buttons">
					<Button className="button1" onClick={toggle}>
						Click Me
					</Button>
					<Button className="button2" onClick={handleReset}>
						Reset
					</Button>
					<ModalComponent toggle={toggle} input={input} modal={modal} />
				</div>
			</div>
		</div>
	)
}

export default App
