import {Component} from 'react'

class experience extends Component{


    render(){
        return(
            <div className='container-experience'>
                <div className='project-name'>
                    <b>Project:</b>
                    <span>Projectname</span>
                </div>
                <div className='project-decription'>
                    <b>Decription:</b>
                    <span>
                    A free mobile app delivering Lancaster University services, resources, and information - at your fingertips - whenever you want them, from wherever you are!
                    </span>
                </div>
                <div className='project-size'>
                    <b>Teamsize:</b>
                    <span>5</span>
                </div>
                <div className='project-responsiblities'>
                    <b>Responsiblities:</b>
                    <span>Meeting with customers and teammates to get clear requirement. Develop the frameworks and modules of the system.</span>
                </div>
                <div className='project-accomplishments'>
                    <b>Accomplishments:</b>
                    <span>Learned new Microsoft technologies and frameworks. Improved teamwork and communication skills.</span>
                </div>
                <div className='project-technologies'>
                    <b>Technologies:</b>
                    <span>Front-end: ReactJS + Redux, Webpack. Back-end ASP.NET MVC5, Entity Framework.</span>
                </div>
                
            
            </div>
        )
    }
}

export default experience;
