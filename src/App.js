import React, { useEffect, useState } from "react";
import CommentBox from "./components/CommentBox";
import './Styles.css'
import { CommentsData } from './Data/data'


function App() {
  const [state, setState] = useState(CommentsData)
  const [currentUser, setCurrentUser] = useState()

  const commentBox = {
    background: '#fff',
    borderRadius: "8px",
    boxShadow: "rgb(0 0 0 / 16%) 0px 0px 12px 0px",
    padding: '1rem',
    margin: "1rem 0",
    display: 'flex',
    alignItems: "flex-start"
  }

  useEffect(() => {
    state.map(st => {
      setCurrentUser(st.currentUser)
    })    
  }, [])

  return (
    <React.Fragment>
      <div className="container">
        {state.map((d, i) => (
          d.comments.map((item, index) => (
            <div style={commentBox}>
            <CommentBox key={index} avatar={item.user.image.png} name={item.user.username} date={item.createdAt} comment={item.content} polls={item.score}/>
            </div>
          ))
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
