import React, { useEffect, useState } from "react";
import CommentBox from "./components/CommentBox";
import './Styles.css'
import { CommentsData } from './Data/data'
import CommentsInput from "./components/CommentsInput/CommentsInput";
import { CommentsContext } from "./context/CommentsContext";


function App() {
  const [state, setState] = useState(CommentsData)
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    state.map(st => {
      return setCurrentUser(st.currentUser)
    })
  }, [state])

  const handleClick = (id) => {
    console.log('clicked ' + id)
  }

  return (
    <React.Fragment>
      <div className="container">
        {
          state.map((item) => (
            item.comments.map((item) => (
              <React.Fragment key={item.id}>
                <div className="commentBox">
                  <CommentBox handleClick={handleClick(item.id)} avatar={item.user.image.png} name={item.user.username} date={item.createdAt} comment={item.content} polls={item.score} currentUser={currentUser} />
                </div>
                <div className="replies">
                  {item.replies.map((rp) => (
                    rp &&
                    <div className="replyBox" key={rp.id}>
                      <CommentBox avatar={rp.user.image.png} name={rp.user.username} date={rp.createdAt} comment={rp.content} polls={rp.score} currentUser={currentUser} />
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))
          ))
        }
        <CommentsContext.Provider value={CommentsData}>
          <div className="commentInputContainer">
            <CommentsInput />
          </div>
        </CommentsContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
