import React from 'react'
import styled from 'styled-components'
import '../../Styles.css'

const IconBtn = styled.button`
width: 85px;
background: transparent;
border: none;
display: flex;
align-items: center;
font-weight: 600;
color: ${props => props.color || "#5461B6"};
transition: .2s ease-in-out;
&:hover svg{
    fill: ${props => props.hoverColor || '#C3C4EF'};
}
&:hover {
    cursor: pointer;
    color: ${props => props.hoverColor || '#C3C4EF'};
}
`

const IconButton = ({ icon, text, color, hoverColor }) => {
    return (
        <React.Fragment>
            <IconBtn color={color} hoverColor={hoverColor}>{icon} <span>{text}</span></IconBtn>
        </React.Fragment>
    )
}

export default IconButton
