import './App.css';
import { Route} from "react-router-dom";
import Login from "./Login";
import FriendList from"./FriendList";
import { Link } from 'react-router-dom';
import AddFriend from "./AddFriend";
import PrivateRoute from "./PrivateRoute";
import Logout from "Logout"

function App() {
  return (
    <div className={ "App font-black text-3xl mx-auto w-1/3 min-w-fit my-4"}>
      <header className='flex border-b-4 border-black'>
        <nav className='flex flex-row mb-4'>
          <span className='p-6'><h2>Friends Database</h2></span>
          <ul className="flex flex-row text-white gap-5">
            <li className=" p-6 bg-black"> <Link to="/login">LOGIN.</Link></li>
            <li className=" p-6 bg-black">  <Link to="/friend">FRIENDLIST.</Link></li>
            <li className=" p-6 bg-black"><Link to="/friend/add">ADDFRIEND.</Link></li>
            <li onClick={() => Logout()} className=" p-6 bg-black">   <Link to="/logout">LOGOUT</Link></li>
          </ul>
      </nav>
      </header>
      <Route exact path={["/", "/login"]} component={Login} />
      <PrivateRoute exact path="/friends" component={FriendList} />
      <PrivateRoute exact path="/friends/add" component={AddFriend} />
    </div>
  );
}

export default App;
