import { Fragment, useState } from 'react';
import Styles from './UpperNavBar.module.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import image from '../../All Images/Images/836-removebg-preview (1).png'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export function UpperNavBar(props) {

    const [starFilled, setStarFilled] = useState(false)

    function handleClickStar() {
        setStarFilled(!starFilled);
    }

    // .....................................................


    const [anchorEl, setAnchorEl] = useState()

    const openMenu = Boolean(anchorEl)

    function handleClickMenuOpen(event) {
        setAnchorEl(event.currentTarget)
    }


    function handleClickMenuClose() {
        setAnchorEl(null)
    }




    return (
        <Fragment>
            <div className={Styles.main_upper_bar_container}>
                <div className={Styles.sub_upper_bar_container}>
                    <input type="text" className={Styles.input_nav} placeholder='ENTER THE NAME' />
                    <p onClick={handleClickStar}>{starFilled ? <StarIcon sx={{ color: 'yellow', cursor: 'pointer' }} /> : <StarBorderIcon sx={{ color: 'white' }} />}</p>
                    <div className={Styles.work_shop_nav}>
                        <p><PeopleAltOutlinedIcon /></p>
                        <span>Workspace visible</span>
                    </div>
                    <div className={Styles.board_nav_part}>
                        <p><ViewStreamOutlinedIcon /></p>
                        <span>Board</span>
                    </div>

                    <Button
                        sx={{ color: 'white' }}
                        onClick={handleClickMenuOpen}
                    >▼</Button>

                    <Menu
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleClickMenuClose}
                    >

                        <MenuItem onClick={handleClickMenuClose}>Board</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Time Table</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Calender</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Timeline</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Dashboard</MenuItem>
                        <MenuItem onClick={handleClickMenuClose} disabled>Map</MenuItem>

                    </Menu>
                    <div className={Styles.second_part_nav_bar}>

                        <div className={Styles.power_ups}>
                            <p><SettingsSuggestOutlinedIcon /></p>
                            <p onClick={props.handleChangeBackgroundProp}>{props.name}</p>
                        </div>
                        <div className={Styles.automation_part}>
                            <p><BoltOutlinedIcon /></p>
                            <p>Automation</p>
                        </div>
                        <div className={Styles.filter_part}>
                            <p><FilterListOutlinedIcon /></p>
                            <p>Filters</p>
                        </div>
                        
                        <div className={Styles.share_options}>
                            <p><PersonAddAltOutlinedIcon /></p>
                            <p>Share</p>
                        </div>
                        <div className={Styles.side_options}>
                            <p>...</p>
                        </div>


                    </div>
                </div>
            </div>
        </Fragment>
    )
}

// import React from 'react'
// import style from "./NavBar.module.css"
// import { BsStar } from 'react-icons/bs';
// import { MdPeopleOutline} from 'react-icons/md';
// import { CiViewBoard} from 'react-icons/ci';
// import { MdOutlineKeyboardArrowDown} from 'react-icons/md';
// import { MdOutlinePower} from 'react-icons/md';
// import {AiFillThunderbolt} from 'react-icons/ai';
// import { BsFilter } from 'react-icons/bs';
// import { RiContactsLine } from 'react-icons/ri';
// import { BsThreeDots } from 'react-icons/bs';

// function NavBar() {
//   return (
//     <div className={style.container}>
//         <div className={style.main}>
//         <h1 className={style.nav}>Home task managment</h1>
//          <BsStar className={style.Icon1}/>
//          <MdPeopleOutline className={style.Icon1} />
//          <p className={style.para}> Workspace visible</p> 
//           <button className={style.butt}><CiViewBoard className={style.buttonicon}/> Board</button>
//            <MdOutlineKeyboardArrowDown className={style.ArrowDown}/>
//            <MdOutlinePower className={style.power}/>
//            <p className={style.para}>Power-ups</p>
//            <AiFillThunderbolt className={style.thunder}/>
//            <p className={style.para}>Automation</p>
//            <BsFilter className={style.filter}/>
//            <p className={style.para}>Filter</p>
//            <button className={style.buttpr}>PR</button>
//            <button className={style.butt}><RiContactsLine className={style.buttonicon}/>Share</button>
//             <BsThreeDots className={style.paradots}/>

          
//         </div>
//     </div>
//   )
// }

// export default NavBar;