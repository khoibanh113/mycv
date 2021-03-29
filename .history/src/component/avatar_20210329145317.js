import React from 'react'

class avatar extends React.Component {
    constructor(props){
        super(props);
        this.image = props.img;
    }

  render(){
    return (
        <div className="ava">
            <img src={this.image} alt="this is your avatar" />
        </div>

    );
  }
}

export default avatar;

