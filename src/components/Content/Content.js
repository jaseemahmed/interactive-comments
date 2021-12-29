import React from 'react'
import Header from './Header/Header'

const Content = ({ avatar, name, date, comment }) => {

    const content = {
        lineHeight: '1.75rem'
    }
    const wrapper = {
        width: '90%',
        margin: 'auto'
    }
    return (
        <React.Fragment>
            <div style={wrapper}>
                <Header userAvatar={avatar} username={name} postedOn={date} />
                <p style={content}>{comment}</p>
            </div>
        </React.Fragment>
    )
}

export default Content
