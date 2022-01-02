import React, { Component } from "react";
import { connect } from 'react-redux'

class Test extends Component {
    render() {
        // const { question } = this.props.questions[this.props.id]
        console.log('== QUESTIONS ==', this.props.questions)
        // console.log('%cTest:', 'text-decoration:underline', this.props)
        return (
            <div>TEST</div>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    // console.group('%cTEST', 'color:limegreen')
    //     console.log('id:', id)
    //     console.log('questions:', questions)
    // console.groupEnd()
    
    // const { question } = questions[id]
    const question = questions ? questions[id] : null
    console.log('%cquestion:', 'text-decoration:underline', question)
    return {
        questions,
        // question,
        id
    }
}

export default connect(mapStateToProps)(Test)