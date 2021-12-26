import React from 'react'
import styled from 'styled-components'
import Content from './Content'
import Polls from './Polls'

const CommentBox = styled.div`
background-color: #ffffff;
padding: 1rem;
border-radius: 8px;
box-shadow: 0 0 8px 0 #0000001c;
width: 100%;
margin: 1rem 0;
display: flex;
align-items:flex-start
`

const Comments = ({polls, comment, avatar}) => {
    return (
        <CommentBox>
            <Polls polls={polls} />
            <Content comment={comment} avatar={avatar}/>
        </CommentBox>
    )
}

export default Comments
