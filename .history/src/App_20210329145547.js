import React,{Component} from 'react'
import Avatar from './component/avatar'
import AvaImg from './image/avatar.jpg'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Avatar img='{AvaImg}' />
      </div>
    );
  }
}

export default App;
