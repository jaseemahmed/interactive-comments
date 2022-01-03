import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Plus } from '../../assets/icon-plus.svg'
import { ReactComponent as Minus } from '../../assets/icon-minus.svg'
import '../../Styles.css'

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
    @media (max-width: 992px) {
        flex-direction: row-reverse;
        width: 110px;
        height: 50px;
        justify-content: space-between;
        order: 2;
      }
`

const PollBtn = styled.button`
      background: transparent;
      border: none;
      color: #C3C4EF;
      fill: #C3C4EF;
      &:hover{          
      fill: #5461B6;
      cursor: pointer;
      }
`

const Polls = ({ poll }) => {

    return (
        <React.Fragment>
            <CommentPoll>
                <PollBtn>
                    <Plus />
                </PollBtn>
                <p className='poll_numbers'>{poll}</p>
                <PollBtn>
                    <Minus />
                </PollBtn>
            </CommentPoll>
        </React.Fragment>
    )
}

export default Polls
