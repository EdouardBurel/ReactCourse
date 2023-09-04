import logo from './logo.svg';
import './App.css';
import {ListArticles, TestComponents, FormDelivery} from './Components';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import pizzaImg from './img/pizzaOne.jpg'


let point = 0

const Addpoint = () => {
  point = point + 1
  console.log(point);
} 

const fakeData = [
  {name: 'Peporoni', price : 16, img:pizzaImg},
  {name: 'Funghi', price : 18},
  {name: 'Loo', price : 10},
  {name: 'Spicy', price : 19},
  {name: 'Special Jojo', price : 32},
  {name: 'Joh'},
]

function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
              <Route path='/List' element={<ListArticles articles = {fakeData}/>} />
              <Route path='/Test' element={<TestComponents functionClick={Addpoint} points={point} /> } />
              <Route path='/Pomme' element={<h1>Beurk!</h1>} />
              <Route path='/Delivery' element={<FormDelivery />} />
            </Routes>
      </div>
    </Router>
  );
}

export default App;
