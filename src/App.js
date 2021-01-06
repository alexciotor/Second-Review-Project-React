import {useState, useEffect} from 'react'
 import data from './data'
import Review from './review'

function App() {

  const [people,setPeople]= useState(data)
  const [value, setValue]= useState(0)
  return (
    <section>
    <div className="title">
 <h1>our reviews</h1>
 <div className="underline"></div>
    </div>
    <Review people={people} value={value}/>
    </section>
  );
} 

export default App;
