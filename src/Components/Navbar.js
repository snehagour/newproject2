import React from 'react'
import style from "./Navbar.module.css"
import { BsStar } from 'react-icons/bs';
import { MdPeopleOutline} from 'react-icons/md';
import { CiViewBoard} from 'react-icons/ci';
import { MdOutlineKeyboardArrowDown} from 'react-icons/md';
import { MdOutlinePower} from 'react-icons/md';
import {AiFillThunderbolt} from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';







function Navbar() {
  return (
    <div className={style.container}>
        <div className={style.main}>
        <h1 className={style.nav}>Home task managment</h1>
         <BsStar className={style.Icon1}/>
         <MdPeopleOutline className={style.Icon1} />
         <p className={style.para}> Workspace visible</p> 
          <button className={style.butt}><CiViewBoard className={style.buttonicon}/> Board</button>
           <MdOutlineKeyboardArrowDown className={style.ArrowDown}/>
           <MdOutlinePower className={style.power}/>
           <p className={style.para}>Power-ups</p>
           <AiFillThunderbolt className={style.thunder}/>
           <p className={style.para}>Automation</p>
           <BsFilter className={style.filter}/>
           <p className={style.para}>Filter</p>
           <button className={style.buttpr}>PR</button>
           <button className={style.butt}><RiContactsLine className={style.buttonicon}/>Share</button>
            <BsThreeDots className={style.paradots}/>

        
        </div>
    </div>
  )
}

export default Navbar
