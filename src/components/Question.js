import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        const { author, optionOne, optionTwo } = this.props.question

        return (
            <div>
                {author}
            </div>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    const question = questions[id]

    return {
        question
    }
}

export default connect(mapStateToProps)(Question)