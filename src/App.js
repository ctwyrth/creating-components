import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';

import avatar from './avatar.png';

function Logo(props) {
   const userPic = <img src={avatar} alt="" />;
   return userPic;
}

function App() {
   return (
      <div>
         <h1>Hello World!</h1>
         <Logo />
      </div>
   )
}

export default App;
