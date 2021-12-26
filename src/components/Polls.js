import React from 'react'
import styled from 'styled-components'
import Plus from '../assets/icon-plus.svg'
import Minus from '../assets/icon-minus.svg'

const PollButton = styled.span`
width: 50px;
height: 100px;
background-color: #EAECF1;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
border-radius: 8px;
@media (max-width: 768px) {
    flex-direction: row-reverse;
    width: 100px;
    height: 50px;
  }
`

const CustButton = styled.button`
background: transparent;
border: none;
padding: 0.5rem;
`

const PollsData = styled.p`
font-size: 16px;
font-weight: bold;
margin: 0;
color: #5461B6;
`

const Polls = ({ polls }) => {
    return (
        <React.Fragment>
            <PollButton>
                <CustButton><img src={Plus} /></CustButton>
                <PollsData>{polls}</PollsData>
                <CustButton><img src={Minus} /></CustButton>
            </PollButton>
        </React.Fragment>
    )
}

export default Polls
