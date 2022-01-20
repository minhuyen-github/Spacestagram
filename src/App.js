import Feed from './components/feed/index';
import Header from './components/header/index';

function App() {
  return (
    <div className="App flex flex-col md:flex-col lg:flex-row justify-around w-screen mx-auto font-mono lg:divide-x-2 lg:divide-solid divide-y-2 divide-solid">
      <Header />
      <Feed />
    </div>
  );
}

export default App;
