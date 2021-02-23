import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Rubel', 'Shah', 'Tiger', 'Rock', 'Shane'];

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$80.50'},
    {name: 'Pdf Reader', price: '$10.00'},
    {name: 'Premier El', price: '$200.50'}
  ];

  const assignments = [
    {number: '01', marks: '60'},
    {number: '02', marks: '50'},
    {number: '03', marks: '60'},
    {number: '04', marks: '56'},
    {number: '05', marks: '68'},
    {number: '06', marks: '56'},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }
        
        {
          assignments.map(assignment => <Assignment assignment= {assignment}></Assignment>)
        }
        
        <Person hero = {heros[0]} heroine="Saba"></Person>
        <Person hero = {heros[1]} heroine="Liana"></Person>
        <Person hero = {heros[2]} heroine="Katrina"></Person>
      </header>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
  </div>
  )
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


function Product(props) {
  const productStyle= {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightsalmon',
    height:'250px',
    width:'300px',
    float:'left',
    margin:'10px'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}


function Assignment(props) {
  const assignmentStyle= {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'grey',
    height:'250px',
    width:'300px',
    float:'left',
    margin:'10px'
  }
  const {number, marks} = props.assignment;
  return (
    <div style= {assignmentStyle}>
      <h2>Assignment : {number}</h2>
      <h3>Marks : {marks}</h3>
    </div>
  )
}



function Person(props) {
  return (
    <div style={{border:'2px solid aqua', margin:'10px', width:'400px'}}>
      <h1>Name: {props.hero}</h1>
      <h3>Hero of {props.heroine}</h3>
    </div>
  )
}

export default App;
