import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        const { author, optionOne, optionTwo } = this.props.question

        return (
            <Fragment>
                <div>{author}</div>
                <div>{ optionOne.text }</div>
                <div>{ optionTwo.text }</div>
            </Fragment>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    const question = questions[id]

    return {
        question,
    }
}

export default connect(mapStateToProps)(Question)