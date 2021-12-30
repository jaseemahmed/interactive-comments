import React, { useEffect, useState } from "react";
import CommentBox from "./components/CommentBox";
import './Styles.css'
import { CommentsData } from './Data/data'


function App() {
  const [state, setState] = useState(CommentsData)
  const [currentUser, setCurrentUser] = useState()


  useEffect(() => {
    state.map(st => {
      return setCurrentUser(st.currentUser)
    })
  }, [state])

  return (
    <React.Fragment>
      <div className="container">
        {
          state.map((item) => (
            item.comments.map((item) => (

              <React.Fragment>
                <div className="commentBox" key={item.id}>
                  <CommentBox avatar={item.user.image.png} name={item.user.username} date={item.createdAt} comment={item.content} polls={item.score} currentUser={currentUser} />
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
      </div>
    </React.Fragment>
  );
}

export default App;
