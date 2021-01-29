import React from 'react';

import Wblue from '../assets/Img/Wblue.png';
import Wgreen from '../assets/Img/Wgreen.png';
import Worange from '../assets/Img/Worange.png';
import Wpink from '../assets/Img/Wpink.png';
import Wred from '../assets/Img/Wred.png';

import classes from './WomenImg.css'

const womenImg = React.memo(props => {

const Women = [];
if(props.gend === 'Women') {
      Women.push(classes[props.col])
}

let imgElem = null;

      switch(props.Womencolor) {
        case('Green') :
          imgElem = <img src={Wgreen} 
                        className={Women.join(' ')} 
                         alt="Women" 
                          onClick={props.clicked}/>;
        break;
         case('Orange') :
           imgElem = <img src={Worange}
                         className={Women.join(' ')} 
                          alt="Women" 
                           onClick={props.clicked}/>;
        break;
         case('Pink') :
           imgElem = <img src={Wpink} 
                      className={Women.join(' ')} 
                         alt="Women" 
                           onClick={props.clicked}/>;
        break;
         case('Red') :
           imgElem = <img src={Wred} 
                        className={Women.join(' ')} 
                          alt="Women" 
                           onClick={props.clicked}/>;
        break;
default:   imgElem = <img src={Wblue}
                          className={Women.join(' ')} 
                           alt="Women"
                            onClick={props.clicked}/>
      };
      return (
            <div className={classes.Women}> 
                  {imgElem}
            </div>
      );
      
});

export default womenImg;