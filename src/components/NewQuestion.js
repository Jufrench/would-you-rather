import React, { Component } from "react"
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChangeOne} />
                <input onChange={this.handleChangeTwo} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

// function mapStateToProps() {

// }

export default connect()(NewQuestion)