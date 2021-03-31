import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class experience extends Component{


    render(){
        return(
            <div className='container-experience'>


                <div className='row'>
                    <b className="col-1">Project:</b>
                    <span className="col-1">Projectname</span>
                </div>
                <div className='row'>
                    <b className="col-1">Decription:</b>
                    <span className="col-1">
                    A free mobile app delivering Lancaster University services, resources, and information - at your fingertips - whenever you want them, from wherever you are!
                    </span>
                </div>
                <div className='row'>
                    <b className="col-1">Teamsize:</b>
                    <span className="col-1">5</span>
                </div>
                <div className='row'>
                    <b className="col-1">Responsiblities:</b>
                    <span className="col-1">Meeting with customers and teammates to get clear requirement. Develop the frameworks and modules of the system.</span>
                </div>
                <div className='row'>
                    <b className="col-1">Accomplishments:</b>
                    <span className="col-1">Learned new Microsoft technologies and frameworks. Improved teamwork and communication skills.</span>
                </div>
                <div className='row'>
                    <b className="col-1">Technologies:</b>
                    <span className="col-1">Front-end: ReactJS + Redux, Webpack. Back-end ASP.NET MVC5, Entity Framework.</span>
                </div>
                
            
            </div>
        )
    }
}

export default experience;
