import PostFront from "./PostFront";
import PostBack from "./PostBack";
import { useCallback, useState } from "react";

function Post({ body }) {
  const [clicked, setClicked] = useState(false);

  const hide = useCallback((clicked) => {
    setClicked(clicked);
  }, []);

  return (
    <div className={body['media_type'] === 'image' ? '' : 'place-self-stretch'}>
      {clicked === false ? <PostFront body={body} hide={hide} /> :
        <PostBack content={body.explanation} hide={hide} />}
    </div>
  )
}

export default Post;