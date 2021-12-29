import React from 'react'
import Content from './Content/Content'
import Polls from './Polls/Polls'

const CommentBox = ({ avatar, name, date, comment, polls }) => {
    return (
        <React.Fragment>
            <Polls poll={polls} />
            <Content avatar={avatar} name={name} date={date} comment={comment} />
        </React.Fragment>
    )
}

export default CommentBox
