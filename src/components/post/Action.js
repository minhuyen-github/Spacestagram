import PropTypes from 'prop-types';
import { useState } from 'react';

function Action() {
  const [toggleKudo, setToggleKudo] = useState(false);
  const [kudos, setKudos] = useState(0);

  return (
    <div className="flex justify-end space-x-2 text-sm">
      <button type="button" className="flex items-center p-1 space-x-1.5" onClick={() => {
        setKudos((kudos) => kudos + 1);
        setToggleKudo(true);
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`w-5 h-5 ${toggleKudo === true ? 'fill-red-600' : 'fillCurrent'}`}>
						<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
				</svg>
        <span>{kudos}</span>
      </button>
    </div>
  );
}

Action.propTypes = {
  postDate: PropTypes.string.isRequired
}

export default Action;