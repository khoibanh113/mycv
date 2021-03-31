import React,{Component} from 'react'
import Avatar from './component/avatar'
import AvaImg from './image/avatar.jpg'
import Contact from './component/contact'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Avatar img={AvaImg} />
        <Contact 
          name='Nguyen Vo Hoang Khoi' 
          location='Ho Chi Minh, Viet Nam'
          phone='0123456789' 
          email='abc@gmail.com'
          linkedin='LinkedIN'
        />
      </div>
    );
  }
}

export default App;
