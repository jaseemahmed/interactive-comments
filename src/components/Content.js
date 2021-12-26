import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Reply from './Reply'

const CommentContent = styled.div`
display: flex;
flex-direction: column;
padding: 0 2rem;
position: relative
`
const Content = ({ comment, avatar }) => {
    return (
        <CommentContent>
            <Header userAvatar={avatar} userName="amyrobson" commentedOn="1 month ago" />
            <p>{comment}</p>
            <Reply />
        </CommentContent>
    )
}

export default Content
