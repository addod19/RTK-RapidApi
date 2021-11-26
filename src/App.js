import './App.css';
import UserList from './container/userList';
import Header from './component/header';

function App() {
  return (
    <div className="app">
      <Header />
      <UserList />
    </div>
  );
}

export default App;
