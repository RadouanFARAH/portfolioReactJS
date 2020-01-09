import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
<div class="projects-container">
    <div class="projects-content">
        <div class="header">
            <div class="fadeInDown animated">	
				<button >
				    <i class="fas fa-desktop" style={{fontSize: '23px'}}></i>
                    <p style={{fontSize: '15px', fontFamily:'comfortaa'}}>WEB</p>
				</button>
				<button >
					<i class="fas fa-mobile" style={{fontSize: '23px'}}></i>
                    <p style={{fontSize: '15px',fontFamily:'comfortaa'}}>MOBILE</p>
				</button>
			</div>
		</div>
		<div class="container ">
            <div class="row">  
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    <div class="card-cover ">
                        <p style={{fontSize: '17px',fontFamily:'comfortaa'}}>My Store Application</p>
                        <img class="A" src="../assets/img/mystore.png" alt=""/>
                        <img class="B" src="../assets/img/mystore-hover.png" alt=""/>                   
                    </div>                       
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    <div class="card-cover ">
                        <p style={{fontSize: '17px',fontFamily:'comfortaa'}}>My Hotel Application</p>
                        <img class="A" src="../assets/img/myroom.png" alt=""/>
                        <img class="B" src="../assets/img/myroom-hover.png" alt=""/>        
                    </div>               
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 zoomIn animated">
                    <div class="card-cover ">
                        <p style={{fontSize: '17px',fontFamily:'comfortaa'}}> My Notes Application</p>
                        <img class="A" src="../assets/img/mynote.png" alt=""/> 
                        <img class="B" src="../assets/img/mynote-hover.png" alt=""/>      
                    </div>                       
                </div>
            </div>
		</div>
        <div class="container ">
            <div  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} class="row">
                <div  class=" zoomIn animated">
                    <div class="card-cover ">
                        <p style={{fontSize: '17px', fontFamily:'comfortaa'}}>In The Middle Of Building Mobile Apps</p>
                        <img src="../assets/img/Building.jpg" alt=""/>               
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
