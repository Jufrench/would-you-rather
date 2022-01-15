import React, { Component } from "react"
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

        setTimeout(() => {
            console.log('props', this.props);
            this.setState(() => ({ toHome: true }))
        }, 2000)
    }

    render() {
        if (this.state.toHome) {
            return <Navigate to="/home" />
        }

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