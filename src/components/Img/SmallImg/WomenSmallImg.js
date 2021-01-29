import React from 'react';

import Wblue from '../../assets/SmallImg/Wblue.png';
import Wred from '../../assets/SmallImg/Wred.png';
import Wpink from '../../assets/SmallImg/Wpink.png';
import Wgreen from '../../assets/SmallImg/Wgreen.png';
import Wyellow from '../../assets/SmallImg/Wyellow.png';
import classes from './WomenSmallImg.css'

const womenSmallImg = React.memo(props => {
    let womenImg = null;
    switch(props.switchImg) {
        case "Blue" :womenImg = <img src={Wblue} alt="Wblue"/>
        break;
        case "Green" :womenImg = <img src={Wgreen} alt="Wgreen"/>
        break;
        case "Red" :womenImg = <img src={Wred} alt="Wred"/>
        break;
        case "Pink" :womenImg = <img src={Wpink} alt="Wpink"/>
        break;
        case "Orange" :womenImg = <img src={Wyellow} alt="Wyellow"/>
        break;
        default: return womenImg;
    };
    return (
        <div className={classes.WomenAdminImgs}>
            { womenImg }
        </div>
    )
});

export default womenSmallImg;