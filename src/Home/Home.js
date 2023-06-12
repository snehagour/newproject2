import { Fragment, useState } from 'react'
import Styles from './Home.module.css'
import main from '../All Images/Images/back2.jpg'
import { UpperNavBar } from '../Main/UpperNavBar/UpperNavBar'
import {TodoList } from '../Main/MiddleAddSection/MiddleAddSection'
import image7 from '../All Images/Images/backg1.jpg' 
import image2 from '../All Images/Images/backg2.jpg'
import image3 from '../All Images/Images/backg3.jpg'
import image4 from '../All Images/Images/backg4.jpg'
import image5 from '../All Images/Images/backg5.jpg'
import image6 from '../All Images/Images/backg6.jpg'
import image1 from '../All Images/Images/backg7.jpg'
import { colors } from '@mui/material'


export function Home() {
 
    const [changeBackgroundMutipleTimes, setChangeBackgroundMutipleTimes] = useState(0)

    const backgroundImageMulti = [
        main,
        image1,
        image2,
        image3,
        image4,
        image5,
         image6,
        image7,
    ]


    return (
        <Fragment>
            <div className={Styles.main_container_home}
                style={{
                    width: '100%',
                    height: '100vh',
                    backgroundSize: 'cover',
                    objectFit: 'cover',
                    background:"black"
                }}>
                <UpperNavBar name='setting'
                />
                <TodoList/>
                
            </div>
        </Fragment>
    )
}
