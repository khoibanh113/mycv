import React from 'react'

class avatar extends React.Component {
    constructor(props){
        super(props);
        this.imgUrl = props.imageURL;
    }

  render(){
    return (
        <img src={this.imgUrl} alt="this is your avatar" />
    );
  }
}

export default avatar;

