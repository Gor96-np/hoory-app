import React from 'react';

import Mblue from '../assets/Img/Mblue.png';
import Mgreen from '../assets/Img/Mgreen.png';
import Morange from '../assets/Img/Morange.png';
import Mpink from '../assets/Img/Mpink.png';
import Mred from '../assets/Img/Mred.png';

import classes from './ManImg.css'

const manImg = (props) => {

const Man = [];
if(props.gend === 'Man') {
      Man.push(classes[props.col])
}

let imgElem = null;

      switch(props.Mancolor) {
        case'Green' :
         imgElem =  <img src={Mgreen} 
                          className={Man.join(' ')}
                           alt="Man" 
                            onClick={props.click}/>
        break;
         case('Orange') :
         imgElem = <img src={Morange} 
                         className={Man.join(' ')}
                          alt="Man" 
                           onClick={props.click}/>;
        break;
         case('Pink') :
          imgElem = <img src={Mpink} 
                          className={Man.join(' ')}
                           alt="Man" 
                            onClick={props.click}/>;
        break;
         case('Red') :
          imgElem =  <img src={Mred}
                           className={Man.join(' ')}
                            alt="Man" 
                             onClick={props.click}/>;
        break; 
 default:  imgElem = <img src={Mblue}
                           className={Man.join(' ')}
                            alt="Man"
                             onClick={props.click}/>
      };

      return (
            <div className={classes.Man}>
                  {imgElem}
            </div>
      );
};
      
export default manImg;