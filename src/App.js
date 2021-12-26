import React, { useEffect, useState } from "react";
import Comments from "./components/Comments";
import './Styles.css'
import { CommentsData } from './Data/data'

function App() {
  const [state, setstate] = useState(CommentsData)
  //  useEffect(() => {
  //    const response = axios.get('./data.json')
  //    console.log(JSON.stringify(response))

  //  }, [])

  return (
    <React.Fragment>
      <div className="container">

        {
          state && state.map((st) => (
            st.comments.map((cms, index) => (
              <Comments 
              id={cms.id} 
              polls={cms.score}
              comment={cms.content}
              avatar={cms.user.image.png}
              />
            ))
          ))
        }

      </div>
    </React.Fragment>
  );
}

export default App;
