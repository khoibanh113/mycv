import React,{Component} from 'react'
import Avatar from './component/avatar'
import AvaImg from './image/avatar.jpg'
import Contact from './component/contact'
import Study from './component/study'
import Experience from './component/experience'
class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Avatar img={AvaImg} />
        <Contact 
          name='Nguyen Vo Hoang Khoi' 
          location='Ho Chi Minh, Viet Nam'
          phone='0123456789' 
          email='abc@gmail.com'
          linkedin='LinkedIN'
        /> */}
        <Experience />


      </div>
    );
  }
}

export default App;
