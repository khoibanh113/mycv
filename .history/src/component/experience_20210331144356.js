import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/experience.css'
class experience extends Component{


    render(){
        return(
            <div className="container-contact">

            <div class="row row-contact">
                    <div className="col-1 icon-contact">
                        <li className="fa fa-map-marker"></li>
                    </div>
                    <div className="col detail-contact">
                        <span>{this.location}</span>
                    </div>
            </div>
            <div class="row row-contact">
                <div className="col-1 icon-contact">
                    <li className="fa fa-mobile" ></li>
                </div>
                <div className="col detail-contact">
                    <span>{this.phone}</span>
                </div>
            </div>
            <div className="row row-contact">
                <div className="col-1 icon-contact">
                    <li className="fa fa-envelope"></li>
                </div>
                <div class="col  detail-contact">
                    <span>{this.email}</span>
                </div>
            </div>
            <div className="row row-contact">
                <div className="col-1 icon-contact">
                    <li className="fa fa-linkedin"></li>
                </div>
                <div className="col  detail-contact">
                    <a href={this.linkedin} >{this.linkedin}</a>
                </div>
            </div>
            
        </div>




            // <div >

                

            //     {/* <div className="row row-experience">
            //         <div className="col-2">Project:</div>
            //         <div className="col">Projectname</div>
            //         <div className="detail-content">
                        
            //         </div>
                    
            //     </div>
            //     <div className='container-experience'>
            //         <div className="row row-experience">
            //             <div className="col-2 col-item"><b>Decription:</b></div>
            //             <div className="col detail-content">
            //                 <span>
            //                 A free mobile app delivering Lancaster University services, resources, and information - at your fingertips - whenever you want them, from wherever you are!
            //                 </span>
            //             </div>
                        
                            
            //         </div>
            //         <div className="row row-experience">
            //             <b className="col-2 col-item">Teamsize:</b>
            //             <span className="col">5</span>
            //         </div>
            //         <div className="row row-experience">
            //             <b className="col-2 col-item">Responsiblities:</b>
            //             <span className="col">Meeting with customers and teammates to get clear requirement. Develop the frameworks and modules of the system.</span>
            //         </div>
            //         <div className="row row-experience">
            //             <b className="col-2 col-item">Accomplishments:</b>
            //             <span className="col">Learned new Microsoft technologies and frameworks. Improved teamwork and communication skills.</span>
            //         </div>
            //         <div className="row row-experience">
            //             <b className="col-2 col-item">Technologies:</b>
            //             <span className="col">Front-end: ReactJS + Redux, Webpack. Back-end ASP.NET MVC5, Entity Framework.</span>
            //         </div>
            //     </div> */}


            //     {/* <li className='row row-experience'>
            //         <b className="col">Project:</b>
            //         <span className="col">Projectname</span>
            //     </li>
            //     <li className='row row-experience'>
            //         <b className="col">Decription:</b>
            //         <span className="col">
            //         A free mobile app delivering Lancaster University services, resources, and information - at your fingertips - whenever you want them, from wherever you are!
            //         </span>
            //     </li>
            //     <li className='row row-experience'>
            //         <b className="col">Teamsize:</b>
            //         <span className="col">5</span>
            //     </li>
            //     <li className='row row-experience'>
            //         <b className="col">Responsiblities:</b>
            //         <span className="col">Meeting with customers and teammates to get clear requirement. Develop the frameworks and modules of the system.</span>
            //     </li>
            //     <li className='row row-experience'>
            //         <b className="col">Accomplishments:</b>
            //         <span className="col">Learned new Microsoft technologies and frameworks. Improved teamwork and communication skills.</span>
            //     </li>
            //     <li className='row row-experience'>
            //         <b className="col">Technologies:</b>
            //         <span className="col">Front-end: ReactJS + Redux, Webpack. Back-end ASP.NET MVC5, Entity Framework.</span>
            //     </li> */}
                
            
            // </div>
        )
    }
}

export default experience;
