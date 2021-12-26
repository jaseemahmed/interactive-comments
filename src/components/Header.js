import React from 'react'
import styled from 'styled-components'

const UserHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Avatar = styled.div`
width: 40px;
height: 40px;
border-radius: 25px;
`
const UserName = styled.h4`
font-size: 16px;
font-weight: bold;
margin: 0 1rem;
`

const CommentedOn = styled.p`
font-size: 16px;
font-weight: normal;
color: #67727E;
margin: 0 1rem;
`

const Header = ({ userAvatar, userName, commentedOn }) => {
    return (
        <React.Fragment>
            <UserHeader>
                <Avatar>
                    <img width="100%" src={userAvatar} alt="user avatar" />
                </Avatar>
                <UserName>{userName}</UserName>
                <CommentedOn>{commentedOn}</CommentedOn>
            </UserHeader>
        </React.Fragment>
    )
}

export default Header
