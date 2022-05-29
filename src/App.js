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
      <CourseSale courses={courses} />
    </div>
  );
}

export default App;
