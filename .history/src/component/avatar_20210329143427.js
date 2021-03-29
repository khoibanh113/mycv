import React from 'react'

class avatar extends React.Component {
    constructor(props){
        super(props);
        this.imgUrl = props.imageURL;
    }

  render(){
    return (
        <img src={require("C:\Users\khoi.hoang.nguyen\Desktop\img\avatar.jpg")} alt="this is your avatar" />
    );
  }
}

export default avatar;

