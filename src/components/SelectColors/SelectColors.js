import React from 'react';

import classes from './SelectColors.css';

const selectColors = React.memo(props => {

const selectBlue = [classes.Def];
const selectGreen = [classes.Def];
const selectOrange = [classes.Def];
const selectPink = [classes.Def];
const selectRed = [classes.Def];

if(props.defColor === 'Blue') {
    selectBlue.push(classes[props.defColor])
}
if(props.defColor === 'Green') {
    selectGreen.push(classes[props.defColor])
}
if(props.defColor === 'Orange') {
    selectOrange.push(classes[props.defColor])
}
if(props.defColor === 'Pink') {
    selectPink.push(classes[props.defColor])
}
if(props.defColor === 'Red') {
    selectRed.push(classes[props.defColor])
}

return (
<div className={classes.ColorContainer}>
        
    <div className={classes.SelectCol}>

    <section className={selectBlue.join(' ')}>
        <div  className={classes.blue}
                    onClick={props.changedBlue} > </div>
    </section>

    <section className={selectGreen.join(' ')}>
        <div className={classes.green   }
                    onClick={props.changedGreen}> </div>
    </section>

    <section className={selectOrange.join(' ')}>
        <div  className={classes.orange}
                        onClick={props.changedOrange}> </div>
    </section>

    <section className={selectPink.join(' ')}>
        <div  className={classes.pink}
                        onClick={props.changedPink}>  </div>
    </section>

    <section className={selectRed.join(' ')}>
        <div  className={classes.red}
                        onClick={props.changedRed}> </div>

    </section>
        

   </div>

</div>
)});

export default selectColors;