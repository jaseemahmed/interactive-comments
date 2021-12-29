import React from 'react'
import styled from 'styled-components'

const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    & img{
        width: 100%;
    }
`

const UserName = styled.p`
    font-weight: 600;
    color: #000000;
    margin: 0 1rem;
`

const PostDate = styled.p`
    font-weight: 500;
    color: #67727E;
`

const Header = ({ userAvatar, username, postedOn }) => {

    const headerContainer = {
        display: 'flex',
        alignItems: "center"
    }

    return (
        <React.Fragment>
            <div style={headerContainer}>
                <UserAvatar>
                    <img width="100%" src={userAvatar} alt="avatar" />
                </UserAvatar>
                <UserName>{username}</UserName>
                <PostDate>{postedOn}</PostDate>
            </div>
        </React.Fragment>
    )
}

export default Header
