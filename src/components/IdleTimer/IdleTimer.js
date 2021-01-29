import React from 'react';
import IdleTimer from 'react-idle-timer';


const idleTimer = (props) => {
    return (
          <IdleTimer timeout={5 * 60000} onIdle={props.idle}/>
    )
};

export default idleTimer;