import React, { Component } from "react";
import { connect } from 'react-redux'

class Test extends Component {
    render() {
        return (
            <div>TEST</div>
        )
    }
}

function mapStateToProps({ questions }, { id }) {
    const question = questions ? questions[id] : null
    
    return {
        questions,
        id
    }
}

export default connect(mapStateToProps)(Test)