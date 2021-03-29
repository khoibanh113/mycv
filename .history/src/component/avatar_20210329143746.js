import React from 'react'

class avatar extends React.Component {
    constructor(props){
        super(props);
        this.imgUrl = props.imageURL;
    }

  render(){
    return (
        <div className="ava">
            <img src={this.imgUrl} alt="this is your avatar" />
            <h1>{this.imgUrl}</h1>
        </div>

    );
  }
}

export default avatar;

