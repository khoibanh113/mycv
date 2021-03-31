import React from 'react'
import '../css/avatar.css'

class avatar extends React.Component {
    constructor(props){
        super(props);
        this.image = props.img;
    }

  render(){
    return (
        <div className="avaContainer">
          <img src={this.image} alt="this is your avatar" />s
        </div>
    );
  }
}

export default avatar;

