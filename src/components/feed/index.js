import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { startOfMonth, isAfter, isSameDay, addDays, subDays, isBefore } from 'date-fns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from "../post/index";
import LoadingScreen from '../loading/LoadingScreen';

function Feed() {
  const url = 'https://api.nasa.gov/planetary/apod?start_date=2022-01-01&thumbs=True&api_key=Vgjgn0ZGVbKCjyqyb5rTd1DDeTMLssCoWMcuCZVJ';
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((res) => {
      const resData = res.data;
      setData(resData.reverse());
    });
  }, []);

  const [range, setRange] = useState([{
    startDate: startOfMonth(new Date()),
    endDate: new Date(),
    key: 'selection'
  }]);
  
  useEffect(() => {
    const date = range[0];
    if (isAfter(date.endDate, new Date()) || isBefore(date.startDate, startOfMonth(new Date()))) {
      setError(true);
    } else if (isSameDay(date.startDate, date.endDate) && isAfter(date.endDate, new Date()) === false) {
      setFilterData([data.find(item => isSameDay(new Date(item.date), date.startDate))]);
      setIsLoading(false);
    } else {
      setFilterData(data.filter(item => new Date(item.date) >= subDays(date.startDate, 1) && new Date(item.date) <= addDays(date.endDate, 1)));
      setIsLoading(false);
    }
  }, [range, data]);

  return (
    <main className="grid justify-center space-y-10 justify-items-center pb-5 pt-10">
      <div className='flex flex-col justify-center pt-2 text-center'>
        <p className='pl-3'>You can filter the posts by selecting a date or a date range!</p>
        <p className={`pt-2 text-red-600 ${error ? "" : "hidden"}`}>Error! Please select an approriate date within year 2022!</p>
        <div className='flex-none pt-5'>
          <DateRange
            editableDateInputs={true}
            onChange={item => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range} />
          </div>
      </div>
      {isLoading === true ? LoadingScreen : filterData.map(item => <Post key={item.date} body={item} />)}
    </main>
  );
}

export default Feed;