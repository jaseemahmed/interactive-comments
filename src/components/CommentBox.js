import React, { useState, useEffect } from 'react'
import Content from './Content/Content'
import IconButton from './IconButton/IconButton'
import Polls from './Polls/Polls'
import { ReactComponent as EditIcon } from '../assets/icon-edit.svg'
import { ReactComponent as DeleteIcon } from '../assets/icon-delete.svg'
import { ReactComponent as ReplyIcon } from '../assets/icon-reply.svg'


const CommentBox = ({ avatar, name, date, comment, polls, currentUser, handleClick }) => {

    const [tag, setTag] = useState(false)
    useEffect(() => {
        if (currentUser && currentUser.username === name) {
            setTag(true)
        }
    }, [currentUser, name])

    return (
        <React.Fragment>
            <Polls poll={polls} />
            <Content avatar={avatar} name={name} date={date} comment={comment} tag={tag} />
            <div className="iconBtnContainer">
                {
                    currentUser && currentUser.username === name ? <>
                        <IconButton icon={<EditIcon className="xmargin blue" />} text="Edit" />
                        <IconButton icon={<DeleteIcon className="xmargin red" />} text="Delete" color="#ED6468" hoverColor="#FFB8BB" /></> :
                        <IconButton onClick={handleClick} icon={<ReplyIcon className="xmargin blue" />} text="Reply" />
                }
            </div>
        </React.Fragment>
    )
}

export default CommentBox
