import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import '../../Styles.css'
import { CommentsContext } from '../../context/CommentsContext'

const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    & img{
        width: 100%;
    }
    @media (max-width: 992px) {
        order: 2;
      }
`
const CustomTextArea = styled.textarea`
    width: 80%;
    padding: 1rem;
    border: 1px solid #EAECF1;
    @media (max-width: 992px) {
        width: 100%;
        margin-bottom: 1rem;
      }
`

const CustomSendBtn = styled.button`
    width: 75px;
    padding: .75rem;
    background: #5461B6;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    transition: .2s ease-in;
    &:hover{
        cursor: pointer;
        background: #C3C4EF;
    }
    @media (max-width: 992px) {
        order: 2;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
      }
`

const CommentsInput = () => {
    const usercontext = useContext(CommentsContext)
    const [user, setuser] = useState()

    useEffect(() => {
        usercontext.map((ucx) => (
            setuser(ucx.currentUser.image.png)
        ))

    }, [usercontext])

    return (
        <div className='commentInput'>
            <UserAvatar>
                <img width="100%" src={user} alt="avatar" />
            </UserAvatar>
            <CustomTextArea placeholder="Add a comment" rows="8" />
            <CustomSendBtn>Send</CustomSendBtn>
        </div>
    )
}

export default CommentsInput
