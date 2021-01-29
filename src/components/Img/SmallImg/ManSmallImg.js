import React from 'react';

import Mblue from '../../assets/SmallImg/Mblue.png';
import Mgreen from '../../assets/SmallImg/Mgreen.png';
import Mred from '../../assets/SmallImg/Mred.png';
import Mpink from '../../assets/SmallImg/Mpink.png';
import Myellow from '../../assets/SmallImg/Myellow.png';
// import Wrapper from '../../../hoc/Wrapper/Wrapper';
import classes from './ManSmallImg.css'

const manSmallImg = React.memo(props=> {
    let Imgs = null;
    switch(props.switchGend) {
        case "Blue" :Imgs = <img src={Mblue} alt="Mblue"/>
        break;
        case "Green" :Imgs = <img src={Mgreen} alt="Mgreen"/>
        break;
        case "Red" :Imgs = <img src={Mred} alt="Mred"/>
        break;
        case "Pink" :Imgs = <img src={Mpink} alt="Mpink"/>
        break;
        case "Orange" :Imgs = <img src={Myellow} alt="Myellow"/>
        break;
        default: return Imgs;
    }
    return (
       <div className={classes.ManAdminImgs}>
             { Imgs }
       </div>
    )
}
);

export default manSmallImg;