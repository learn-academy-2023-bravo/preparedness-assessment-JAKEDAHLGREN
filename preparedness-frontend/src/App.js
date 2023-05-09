import React from "react"
import { Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  return (
    <div className="entire-content">
      <h1 className="title">Preparedness Assessment</h1>
      <div className="form">
        <div className="input" input="text">
          <Label for="name" className="name">Enter your name</Label>
          <div >
          <Input className="input-field" placeholder="type your name"/>
        </div>
        </div>
        <ModalComponent />
      </div>
    </div>
  )
}

export default App
