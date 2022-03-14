import React from 'react'

export default function Profile(props) {
    const { user } = props
    return (
        <div className='home-question-author'>
            <h4 className='user-name'>{user.name}</h4>
            <div className='user-avatar'
                style={{backgroundImage: `url(${user.avatarURL})`}}>
            </div>
        </div>
    )
}