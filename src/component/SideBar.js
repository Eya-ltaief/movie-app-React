import React from "react" ;
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function SideBar(){
const styles = {lineHeight:"2em",fontWeight:"600",backgroundColor:"#1A1B1C",width:"20%",marginTop:"4%",
    height:"100%",
    position: "fixed",fontSize:"28px",letterSpacing:"0.1em"
}
    return(
        <ProSidebar expand="lg"  >
            <Menu iconShape="square" style={styles} >
                <MenuItem >Dashboard</MenuItem>
                <SubMenu title="Movies">
                    <MenuItem >Comedy</MenuItem>
                    <MenuItem>Action</MenuItem>
                    <MenuItem>Drama</MenuItem>
                    <MenuItem>Romantic</MenuItem>
                    <MenuItem>Mystery</MenuItem>
                </SubMenu>
                <SubMenu title="Series" >
                    <MenuItem>Comedy</MenuItem>
                    <MenuItem>Action</MenuItem>
                    <MenuItem>Drama</MenuItem>
                    <MenuItem>Romantic</MenuItem>
                    <MenuItem>Mystery</MenuItem>
                </SubMenu>
                <MenuItem >Animes</MenuItem>
                <MenuItem >TV shows</MenuItem>
                
            </Menu>
        </ProSidebar>
    );
}