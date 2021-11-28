import './App.css';
import UserList from './container/userList';
import Header from './component/header';

const App = () => (
  <div className="app">
    <Header />
    <UserList />
  </div>
);

export default App;
