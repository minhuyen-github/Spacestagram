import PropTypes from 'prop-types';
import { useState } from 'react';

function PostBack({ content, hide }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
      <h2 className="mb-1 text-xl font-semibold">Description</h2>
      <p className="text-sm">{content}</p>
      <button className='flex text-blue-600' onClick={() => {
          setClicked((clicked) => !clicked);
          hide(!clicked);
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to the post
      </button>
    </div>
  )
}

PostBack.propTypes = {
  content: PropTypes.string.isRequired
}

export default PostBack;