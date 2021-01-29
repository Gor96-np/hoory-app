import React,{ Component } from 'react';

import classes from './AdminMiddle.css';
import Delete from '../../assets/Delete.png';
import Edit from '../../assets/Edit.png';
import ManSmallImg from '../../Img/SmallImg/ManSmallImg';
import WomenSmallImg from '../../Img/SmallImg/WomenSmallImg';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import Wrapper from '../../../hoc/Wrapper/Wrapper';


class AdminMiddle extends Component {
      state = {
         dots:false,
         edith:false,
         updName:''
      }

 
      editClickHandler = () => {
        this.setState(prevState => ({
              edith:!prevState.edith
        }))
      }
      deleteClickHandler = () => {
            let hooryId = this.props.userId
            this.props.onDeleteHoory(hooryId)
        }
      dotsClickHandler = () => {
            this.setState(prevState => ({
                dots:!prevState.dots,
            }));
        };
        updatedHooryName = (e) => {
              this.setState({updName:e.target.value})
        }
        cancellUpdate = () => {
            this.setState({edith:false,dots:false,updName:''});
        }
        updateHooryNameHandler = () => {
          let id = this.props.userId;
          let name = this.props.hooryname;
          this.props.onUpdatedName(id,this.state.updName,name);
          this.setState({edith:false,dots:false,updName:''});
                        window.location.reload(true);

        }

      render() { 

 let updButtons = null;
 if(this.state.edith && this.state.dots) {
      updButtons = (
         <div className={classes.UpdButtons}>
            <button type="submit"
                     className={classes.btnCancell}
                      onClick={this.cancellUpdate}>
                  Cancell</button>
            <button type="submit"
                     className={classes.btnUpdate}
                      onClick={() => this.updateHooryNameHandler()}>
                  Update</button>
            
        </div>
       );
 }    
  let editDelete = null;
  if(this.state.dots && !this.state.edith) {
    editDelete = (
    <div className={classes.ImgContainer}>
         <div className={classes.Edit} onClick={this.editClickHandler}>
               <img src={Edit} alt="Edit"/>
         </div>
         <div className={classes.Delete} onClick={this.deleteClickHandler}>
               <img src={Delete} alt="Delete"/>
          </div>
    </div>
    ) ;
  };

let smallSwitchImgs = null;
if(this.props.switchImgGend === 'Man') {
      smallSwitchImgs = <ManSmallImg switchGend={this.props.imgManSwitch}/>
} 
if(this.props.switchImgGend === 'Women') {
      smallSwitchImgs = <WomenSmallImg switchImg={this.props.imgWomenSwitch}/>
}
let adminMiddleInput = <p>{this.props.hooryName}</p>;

if(this.state.edith && this.state.dots) {
  adminMiddleInput = <input type="text" value={this.state.updName} 
                              onChange={this.updatedHooryName}
                               maxLength="10"/>
}
      return (
<Wrapper>
      <div className={classes.AdminMiddle}>      
      <div className={classes.Hoorys}>
  { smallSwitchImgs } { adminMiddleInput } 
     <section className={classes.Dots}
               onClick={this.dotsClickHandler} >
              <div></div>
               <div></div>
                <div></div>
     </section>
     { updButtons }
         <div>
     { editDelete }

</div>
</div>
</div>
</Wrapper>

            )
      }
};

const mapStateToProps = state => {
      return {
        name:state.hoory.hooryName,
        hooryDat:state.hoory.hooryData,
      }
};
const mapDispatchToProps = dispatch => {
      return {
            onDeleteHoory:(id) => dispatch(actions.deleteData(id)),
            onUpdatedName:(id,name,itemName) => dispatch(actions.updateName(id,name,itemName)),
            
      }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(AdminMiddle);