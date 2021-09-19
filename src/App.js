import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers () {
  // const [users, setUsers ] = useState([]);
  // useEffect(() =>{
  //   // console.log('inside use effect ')
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // }, [])
const [users,setUsers] = useState([]);
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => setUsers(data))
}, [])



  return (
    <div>
      <h3>External Users </h3>
      {
        // users.map(user => <li>{user.name}</li> ),
        // users.map(user => <li>{user.username}</li> )
        users.map(user => <User name={user.name} email={user.email}> {user.username}</User> )
      }
    </div>
  )
}


function User (props) {
  return (
    <div className="user-ui">
      <h2>name: {props.name}</h2>
      <p>email: {props.email}</p>
    </div>
  )
}



function Counter() {
  const [count,setCount] = useState(35);
  const handleIncrease = () =>setCount(count + 1) ;
  const handleDecrease = () =>setCount(count - 1) ;
    // const newCount = count +1;
    // setCount(count +1);
    console.log('handle clicked')
  // console.log(count, setCount);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase </button>
      <button onClick={handleDecrease}>Decrease </button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '5px solid salmon',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name:{props.name}</h2>
      <h5>Price: {props.price}</h5>
    </div>
  )
}



/* 
 const products =[
    {name:'mobile', price: 15000},
    {name:'camera', price: 10000},
    {name:'laptop', price: 11000},
    {name:'watch', price: 12000},
    {name:'shoe', price: 13000}
  ]

*/

/* 
 {
        // products.map(product => console.log(product))
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
  
      <Product name="mobile" price ="145000"></Product>
      <Product name="Laptop" price ="105000"></Product>
      <Product name="Camera" price ="1200000"></Product>
      <Product name="mobile" price ="145000"></Product>
      <Product name="mobile" price ="145000"></Product>

*/
export default App;
