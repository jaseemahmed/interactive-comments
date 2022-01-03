import React from 'react'
import Header from './Header/Header'
import '../../Styles.css'

const Content = ({ avatar, name, date, comment, tag }) => {
    return (
        <React.Fragment>
            <div className='wrapper'>
                <Header userAvatar={avatar} username={name} postedOn={date} tag={tag} />
                <p className='content'>{comment}</p>
            </div>
        </React.Fragment>
    )
}

export default Content
