//import avatar from '../../avatar.jpg';
import PropTypes from "prop-types";
import { format, addDays } from 'date-fns';
import Avatar from './Avatar';

function Header({ author, date }) {
  var postedDate = format(addDays(new Date(date), 1), 'MMMM dd, yyyy')

  return (
    <div className="flex space-x-4">
		  <Avatar />
		  <div className="flex flex-col space-y-1">
			  <p className="text-sm font-semibold">{author}</p>
			  <span className="text-xs">{postedDate}</span>
		  </div>
	  </div>
  );
}

Header.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Header;