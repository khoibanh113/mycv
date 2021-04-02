import React,{Component} from 'react'
import './App.css'
import Avatar from './component/avatar'
import AvaImg from './image/avatar.jpg'
import Contact from './component/contact'
import Name from './component/name'
import Experience from './component/experience'
class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="avatar">
         <Avatar img={AvaImg} />
        </div>
        
        
        <div className='name'>
          <Name name='NguyenVoHoangKhoi' />
        </div>
        
        <Contact 
          location='Ho Chi Minh, Viet Nam'
          phone='0123456789' 
          email='abc@gmail.com'
          linkedin='LinkedIN'
        />
        <Experience  
          projectname ='Project Course'
          projecttime='March 03 2019 - March 30 2019'
          projectlocation='ABC Company'
          decription ='A free mobile app delivering Lancaster University services, resources, and information - at your fingertips - whenever you want them, from wherever you are!'
          teamsize='5'
          responsiblities='Meeting with customers and teammates to get clear requirement. Develop the frameworks and modules of the system.'
          accomplishments='Learned new Microsoft technologies and frameworks. Improved teamwork and communication skills.'
          technologies='Front-end: ReactJS + Redux, Webpack. Back-end ASP.NET MVC5, Entity Framework.'
        />


      </div>
    );
  }
}

export default App;
