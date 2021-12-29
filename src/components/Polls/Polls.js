import React from 'react'
import styled from 'styled-components'
import Plus from '../../assets/icon-plus.svg'
import Minus from '../../assets/icon-minus.svg'

const CommentPoll = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 110px;
    align-items: center;
    background: #EAECF1;
    padding: 0.5rem;
    border-radius: 8px;
    justify-content: center;
`

const Polls = ({ poll }) => {

    const Npolls = {

    }

    const pollBtn = {
        background: 'transparent',
        border: 'none',
    }

    return (
        <React.Fragment>
            <CommentPoll>
                <button style={pollBtn}>
                    <img width="100%" src={Plus} alt="poll icons" />
                </button>
                <p style={Npolls}>{poll}</p>
                <button style={pollBtn}>
                    <img width="100%" src={Minus} alt="poll icons" />
                </button>
            </CommentPoll>
        </React.Fragment>
    )
}

export default Polls
