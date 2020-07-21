import React, { Component } from 'react';
import "./navbar.css";
import logo from "../../assets/logo2.png";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

class Navbar extends Component{
    render(){
        return (
            <div className="navbar">
                {/* Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola t Hola this is navbar Hola this is navbarhis is navbar Hola this Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola t Hola this is navbar Hola this is navbarhis is navbar Hola this is navbaHola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola t Hola this is navbar Hola this is navbarhis is navbar Hola this is navbaHola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola t Hola this is navbar Hola this is navbarhis is navbar Hola this is navbaHola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola this is navbar Hola t Hola this is navbar Hola this is navbarhis is navbar Hola this is navbais navbar */}
                <div className="icon">
                    <img src={logo} className="logo" alt="Logo"/>
                    <div>|</div>
                    <p className="heading">PRO</p>
                </div>

                <div className="navItems">
                    <div className="navItemsTop">
                        <ul>
                            <li className="exchange">
                                <div className="highlighter"></div>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <AutorenewIcon
                                        fontSize="default"
                                        className="exchangeIcon"
                                    >
                                    </AutorenewIcon>
                                    <p href="" className="exc">Exchange</p>
                                </div>
                            </li>
                            <li>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <AccessTimeIcon
                                        fontSize="default"
                                        className="otherIcons"
                                    >
                                    </AccessTimeIcon>
                                    <p >Orders</p>
                                </div>
                            </li>
                            <li>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <SearchIcon
                                        fontSize="default"
                                        className="otherIcons"
                                    >
                                    </SearchIcon>
                                    <p >Track Order</p>
                                </div>
                            </li>
                            <li>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <ShoppingCartIcon
                                        fontSize="default"
                                        className="otherIcons"
                                    >
                                    </ShoppingCartIcon>
                                    <p >Products</p>
                                </div>
                            </li>
                            <li>
                                <div style={{display: "flex", flexDirection: "row"}}>
                                    <AttachMoneyIcon
                                        fontSize="default"
                                        className="otherIcons"
                                    >
                                    </AttachMoneyIcon>
                                    <p >Refer & Earn $5</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="navItemsBottom">
                        <ul>
                            <li className="loginOld">Login Now</li>
                            <li>Priority Support</li>
                            <li>Go to Old Website</li>
                            <li>Share your feedback</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;