import React, { Component } from 'react';

import ManImg from '../Img/ManImg';
import WomenImg from '../Img/WomenImg';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import SelectColors from '../SelectColors/SelectColors';
import Button from '../UI/Button/Button'

import classes from './Stylehoory.css';


class StyleHoory extends Component {
  
  render() {

 const Colors = (
    <SelectColors changedBlue={this.props.ImgChangedBlue}
                   changedGreen={this.props.ImgChangedGreen}
                    changedOrange={this.props.ImgChangedOrange}
                     changedPink={this.props.ImgChangedPink}
                      changedRed={this.props.ImgChangedRed}
                       defColor={this.props.color}/>
 );

  return (

<div className={classes.Stylehoory}>
   <h4>Select {this.props.name}'s icon</h4>
      
      <section>
        <ManImg  Mancolor={this.props.color}
                      click={this.props.onManGenderClick}
                        gend={this.props.gender}
                         col={this.props.color}/>
      </section>
         
      <section>
        <WomenImg Womencolor={this.props.color}
                      clicked={this.props.onWomenGenderClick}
                       gend={this.props.gender}
                        col={this.props.color}/>
      </section>

 <h4 style={{marginTop:'40px'}}>Select your scheme</h4>
       
       <div className={classes.Select}>

                           {Colors}            
       </div>

      <form onSubmit={this.props.onSubmit}>
       <Button buttonCLick={this.props.onCheckBox}
                type="submit"
                 disabled={!this.props.gender}
                  butnType="Success"
                   name="Next"/>  
   
      </form>
    </div>

 
    )
  }
};
 
const mapToState = state => {
  return {
     color:state.main.picColor,
     gender:state.main.gender,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    ImgChangedBlue:() => dispatch({type:actions._BLUE}),
    ImgChangedGreen:() => dispatch({type:actions._GREEN}),
    ImgChangedOrange:() => dispatch({type:actions._ORANGE}),
    ImgChangedPink:() => dispatch({type:actions._PINK}),
    ImgChangedRed:() => dispatch({type:actions._RED}),
    onManGenderClick:() => dispatch({type:actions.MAN_GENDER}),
    onWomenGenderClick:() => dispatch({type:actions.WOMEN_GENDER}),
  }
}


export default connect(mapToState,mapDispatchToProps)(StyleHoory);