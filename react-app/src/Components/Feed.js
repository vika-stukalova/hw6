import React, { useEffect } from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import Comments from "./Comments";
import axios from 'axios';

const Feed = () => {
  const [data, setData] = useState();

  const getPostsData = () => {
    axios
      .get("http://localhost:3002/posts")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error))
  };
  
  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data.map(d =>
          <Post title={d.title} body={d.body} key={d.id} comments={d.comments} postId={d.id}/>
        )
      }

      <NewPost/>
    </div>
  )

}


export default Feed;
