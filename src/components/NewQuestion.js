import React, { Component, Fragment } from "react"
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import { Link, Navigate } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }

    handleChangeOne = e => {
        const text = e.target.value
        this.setState(() => ({ optionOneText: text }))
    }

    handleChangeTwo = e => {
        const text = e.target.value
        this.setState(() => ({ optionTwoText: text }))
    }

    handleSubmit = e => {
        e.preventDefault()
        const { optionOneText, optionTwoText } = this.state

        this.props.dispatch(handleSaveQuestion({
            optionOneText,
            optionTwoText
        }))

        this.setState(() => ({ toHome: true }))
    }

    render() {
        if (this.state.toHome) {
            return <Navigate to="/home" />
        }

        return (
            <Fragment>
                <h3>Would You Rather?</h3>
                <form 
                    className="new-question-form"
                    onSubmit={this.handleSubmit}>
                    <label>
                        Option 1
                        <input onChange={this.handleChangeOne} />
                    </label>
                    <label>
                        Option 2
                        <input onChange={this.handleChangeTwo} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </Fragment>
        )
    }
}

export default connect()(NewQuestion)