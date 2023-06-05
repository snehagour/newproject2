import React, { useState } from 'react'
import style from "./Card.module.css"
import {SlOptions} from "react-icons/sl"
import {RiDeleteBin5Fill} from "react-icons/ri"
import {BiCommentAdd} from "react-icons/bi" 


 function Card() {
  const[wantToSeeList,setWantToSeeList]=useState(false)

    const[workinProgress,setWorkinProgress]=useState("")

    const[lis,setLis]=useState([])
    function handleChange(e){
       let datum= e.target.value
       setWorkinProgress(datum)
       

    }
    function handleToDelete(indexNum){
      const filteredData=lis.filter((ele,index)=>index!==indexNum);
        setLis(filteredData);
        localStorage.setItem("Task_In_Progress",filteredData)
        

    }
    function handleToView(){
      setWantToSeeList(!wantToSeeList)
    }
    function handleAdd(){
      if(lis.includes(workinProgress)){
        alert("Already")
      }
      else{const data=[workinProgress,...lis]
      setLis(data)
      setWorkinProgress("")
      localStorage.setItem("Task_In_Progress",data)
      }
      
      
      

    }
  return (
    <div  className={style.main}>
      
     { !wantToSeeList ?<button className={style.bluffbutton} onClick={handleToView}>Add a List</button>:
     <div className={style.container}>
        <div className={style.container1}>    
      <p className={style.para}>In Progress</p>
      <button className={style.moreoption}><SlOptions/></button>
      </div>

        <div >
                <input className={style.field} type='text' onChange={handleChange} value={workinProgress} placeholder='    + Add Task'></input>
                <button onClick={handleAdd} className={style.addbutton}> <BiCommentAdd/></button>
        </div>
        <span className={style.taskContainer}>
          {
        lis.map((ele,index)=>{
          return(
            <div key={index} className={style.singleTaskContainer}>
              
              <p  className={style.singleTask} >{ele}</p>
              <button onClick={()=>handleToDelete(index)} className={style.delButton}><RiDeleteBin5Fill/></button>
              
              </div>
              
            
          )
        })}</span>
        
        </div>
        
    }
    
    </div>
  )
} 

export default Card;