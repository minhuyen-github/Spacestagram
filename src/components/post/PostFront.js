import PropTypes from "prop-types";
import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Action from "./Action";
import Header from "./Header";

function PostFront({ body, hide }) {
  const [clicked, setClicked] = useState(false);

  var id = '';
  if (body['thumbnail_url'] !== undefined) {
    const str = body['thumbnail_url'].split('/');
    id = str[4];
  }

  return (
    <div className={`flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md ${body['media_type'] === 'image' ? '' : 'ml-12'}`}>
      <Header
        author={body.copyright === undefined ? 'NASA' : body.copyright}
        date={body.date} />
      <div>
		    {body['media_type'] === 'image' ? <img src={body.url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96" /> 
          : <LiteYouTubeEmbed 
              id={id}
            />}
		    <h2 className="mb-1 text-xl font-semibold">{body.title}</h2>
        <button className="underline text-blue-600" onClick={() => {
          setClicked((clicked) => !clicked);
          hide(!clicked);
        }}>Read More</button>
	    </div>
      
      <Action />
    </div>
  )
}

PostFront.propTypes = {
  body: PropTypes.object.isRequired
}

export default PostFront;