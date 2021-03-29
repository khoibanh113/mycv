import React,{Component} from 'react'
import Avatar from './component/avatar'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Avatar imageURL='src/image/avatar.jpg'/>
      </div>
    );
  }
}

export default App;
