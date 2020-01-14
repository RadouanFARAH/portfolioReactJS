import React, { Component } from 'react'
import './Projects.css'
import image1 from '../assests/img/mystore.png'
import image1h from '../assests/img/mystore-hover.png'
import image2 from '../assests/img/mynote.png'
import image2h from '../assests/img/mynote-hover.png'
import image3 from '../assests/img/myroom.png'
import image3h from '../assests/img/myroom-hover.png'



export class Projects extends Component {
    render() {
        return (
<div class="projects-container">
    <div class="projects-content">
		<div class="container ">
            <div class="row">  
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    <div class="card-cover ">
                        <p style={{fontSize: '17px',fontFamily:'comfortaa'}}>My Store Application</p>
                        <img class="A" src={image1} alt=""/>
                        <img class="B" src={image1h} alt=""/>                   
                    </div>                       
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    <div class="card-cover ">
                        <p style={{fontSize: '17px',fontFamily:'comfortaa'}}>My Hotel Application</p>
                        <img class="A" src={image2} alt=""/>
                        <img class="B" src={image2h} alt=""/>        
                    </div>               
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    <div class="card-cover ">
                        <p style={{fontSize: '17px',fontFamily:'comfortaa'}}> My Notes Application</p>
                        <img class="A" src={image3} alt=""/> 
                        <img class="B" src={image3h} alt=""/>      
                    </div>                       
                </div>
            </div>
		</div>
	</div>
</div>          
        )
    }
}

export default Projects
