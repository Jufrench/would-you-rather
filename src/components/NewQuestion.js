import React, { Component } from "react"
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        newOptionOne: '',
        newOptionTwo: '',
    }

    handleChange = e => {
        console.log('changing')
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('new question submitted')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <input onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NewQuestion