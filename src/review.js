import {useState} from 'react'
 import data from './data'

const Review = ()=>{
     const [people,setPeople]= useState(data)
  const [value, setValue]= useState(0)
  
    
    const {id,name,age,image,position,reviews} = people[value];
    const number = (num)=>{
        if(num > people.length-1){
            num = 0
        }
        if(num < 0){
            num = people.length-1
        }
        return num
    }
  const left=()=>{
      setValue((value)=>{
        let newValue = value -1
        return number(newValue)
      })
  }

  const right=()=>{
      setValue((value)=>{
          let newValue = value+1
          
return number(newValue)
        })
  }
  const randome=()=>{
      let surprise = Math.floor(Math.random() * people.length)
      if(surprise===value){
          surprise = value+1
      }
           setValue(number(surprise))
          
      }
      
 
  console.log(value);
    return (
    <div className="content-container">
 
    <article  className="article">
    <div className="image">
    <img src={image} alt="" className="img"/>
    </div>
<h4>{name}</h4>
<h3>{position}</h3>
<p>{age}</p>

<div className="text">
<p>{reviews}</p>
</div>

<div className="buttons">
<button onClick={left}
 className="btn">left</button>
<button onClick={right} className="btn">right</button>
<br/>
<button onClick={randome}className="refresh">surprise me</button>

</div>
    </article>
    
    </div>
    )
}



export default Review