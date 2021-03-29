import React from 'react'

class avatar extends React.Component {
    constructor(prop){
        super(prop);
        this.imageUrl = prop;
    }

  render(){
    return (
        <img src={this.imageUrl} alt="this is your avatar">
    );
  }
}

export default avatar;

