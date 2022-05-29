import { Outlet, Link } from 'react-router-dom';
import './App.css';
import CourseSale from './CourseSale';

function App() {
  var courses =[
    {
      name:'HTML, CSS, JS',
      price: 199
    },
    {
      name:'Python',
      price: 199
    },
    {
      name:'Full Stack',
      price: 399
    },
    {
      name:'Java',
      price: 99
    },
  ]
  return (
    <div className="App">
      <h2>Welcome to your Courses</h2>
      <ul>
        <li>
          <Link to='/guides'>Guides</Link>
          <Link to='/laptops'>Laptops</Link>
          <Link to='/books'>Books</Link>
        </li>
      </ul>
      <CourseSale courses={courses} />
      <Outlet/>
    </div>
  );
}

export default App;
