import React from 'react'
import HeaderDash from './HeaderDash';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const  MainDash=()=>{
    return (
        <div className="dashboard-div">
            <HeaderDash/>
            <div className="dashboard-welcome-card">
                <Card style={{height:150,width:'100%',padding:'30px'}}>
                        <p><h5><b>Hello Lasang</b></h5></p>
                        <p>Welcome To CodeTutor<br/> Let's Improve Your Code Reading and comprehension Skills.</p>
                </Card>
            </div>
            
            <div className="dashboard-welcome-card" style={{marginTop:'-40px'}}>
                <p><h5><b>My Progress</b></h5></p>
                <Card style={{height:150,width:'auto',padding:'30px'}}>
                        <p><h5><b>Hello Lasang</b></h5></p>
                        <p>Welcome To CodeTutor<br/> Let's Improve Your Code Reading and comprehension Skills.</p>
                </Card>
            </div>
            
            
            <div className="d-flex" style={{marginTop:'-40px'}}>
                <div className="dashboard-welcome-card">
                    <p><h5><b>Avaliable Modes</b></h5></p>
                    <Card style={{height:'auto',width:'auto',paddingTop:'30px',paddingLeft:'30px',paddingRight:'20px'}}>

                            <p><h5><b>Begineer</b></h5></p>
                            <p>Welcome To CodeTutor<br/> Let's Improve Your Code Reading and comprehension Skills.</p>
                            <div className="d-flex">
                                <Button variant="contained" color="primary">
                                    Primary
                                </Button>
                                <Button variant="outlined" className="ml-3" color="secondary">
                                    Secondary
                                </Button>
                            </div>
                            <div style={{width:'100%',textAlign:'end'}}>    
                                <p className="ml-auto">Learn More >></p>
                            </div>
                    </Card>
                </div>
                <div className="dashboard-welcome-card" style={{marginTop:'38px'}}>
                    <Card style={{height:'auto',width:'auto',paddingTop:'30px',paddingLeft:'30px',paddingRight:'20px'}}>
                        <p><h5><b>Advanced</b></h5></p>
                        <p>Welcome To CodeTutor<br/> Let's Improve Your Code Reading and comprehension Skills.</p>
                        <div className="d-flex">
                            <Button variant="contained" color="primary">
                                Primary
                            </Button>
                            <Button variant="outlined" className="ml-3" color="secondary">
                                Secondary
                            </Button>
                        </div>
                        <div style={{width:'100%',textAlign:'end'}}>    
                            <p className="ml-auto">Learn More >></p>
                        </div>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}

export default MainDash
