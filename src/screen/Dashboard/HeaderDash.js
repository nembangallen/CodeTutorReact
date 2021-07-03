import React from 'react'
import logo from '../../assets/images/loginimg.PNG';
import {DownOutlined} from '@ant-design/icons'
import Card from '@material-ui/core/Card';

const  HeaderDash=()=>{
    return (
        <div>
            <div className="site-card-border-less-wrapper">
                <Card>
                    <div className="container-fluid">
                         <div className="header-item p-2">
                             <div style={{fontSize:18,fontWeight:700,marginTop:5}}>Dashboard</div>
                             <div className="right-dashboard-header">
                                 <img src={logo} style={{height:40,width:40,borderRadius:'50%'}}/>
                                 <p className="header-name" style={{marginTop:10}}>Lashang Tamang <DownOutlined /></p>
                             </div>
                         </div>   
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default HeaderDash
