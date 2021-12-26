import React from 'react'
import ReplyIcon from '../assets/icon-reply.svg'
import styled from 'styled-components'

const ReplyBtn = styled.button`
    background: transparent;
    border: none;
    color: #5357B6;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 1rem;
    font-weight: 700;

`

const Reply = () => {
    return (
        <ReplyBtn> <img src={ReplyIcon} style={{marginRight: '.875rem'}}/> Reply</ReplyBtn>
    )
}

export default Reply
