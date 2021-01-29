import React from 'react';

import classes from './Button.css';

const button = React.memo(props => (
         <button onClick={props.buttonCLick}
                  className={[classes.Style,classes[props.butnType]].join(' ')}
                   disabled={props.disabled}
                    type={props.type}>
                   <p className={classes.P}>{props.name}</p>
                   { props.children }
         </button>
    )
);

export default button;