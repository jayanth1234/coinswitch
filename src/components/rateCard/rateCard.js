import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

import "../Exchange/exchange.css";

export default class RenderCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            bitCoin: "https://files.coinswitch.co/public/coins/btc.png",
            ethereum: "https://files.coinswitch.co/public/coins/eth.png",
        }
    }

    render() {
        return (
            <div className="card">
                <div className="inputRows">
                    <div className="firstInput">
                        <p className="textBit">Send {" "} {this.props.nameFirst}</p>
                        <div >
                            {this.props.dontShow ?
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <input
                                        className="inputField"
                                        type="number"
                                        value={this.props.valueSend}
                                        onChange={(e) => this.props.rateCoins(e)}
                                    />
                                    <span className="divider"></span>
                                    <button
                                        className="btnClass"
                                        onClick={() => this.props.handleValChange()
                                        }>
                                        <img alt="n" src={this.props.bitCoin} className="imgLogo" />
                                        <span className="spanText">
                                            {this.props.sendName}
                                        </span>
                                        <ExpandMoreIcon
                                            style={{ fontSize: "28px" }}
                                            className="iconExpand"
                                        >
                                        </ExpandMoreIcon>
                                    </button>
                                </div>
                                : null}
                            {this.props.showOff ?
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div className="input-search-container">
                                        <SearchIcon size={{ fontSize: "12" }}></SearchIcon>
                                        <input type="dropdown" onChange={(e) => this.props.searchSpace(e)} className="classInpu" placeholder="Search from 356 Coins" />
                                        <span className="closeButton" onClick={() => this.props.close()}>
                                            <ClearIcon fontSize="small"></ClearIcon>
                                        </span>
                                    </div>
                                    <div className="custom-options">
                                        {this.props.showList()}
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div>

                    <AutorenewIcon
                        fontSize="large"
                        className="iconRenew">
                    </AutorenewIcon>

                    <div className="firstInput2">
                        <p className="textBit">Get {" "} {this.props.nameSecond}</p>
                        {this.props.dontShowReceive ?
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <input
                                    className="inputField2"
                                    disabled
                                    value={this.props.loading ? "..."
                                        : (this.props.valueReceive * this.props.valueSend).toFixed("4")
                                    }
                                />
                                <span className="divider"></span>
                                <button className="btnClass" onClick={() => this.props.handleValChangeReceive()}>
                                    <img alt="n" src={this.props.ethereum} className="imgLogo" />
                                    <span className="spanText">{this.props.receiveName}</span>
                                    <ExpandMoreIcon style={{ fontSize: "28px" }} className="iconExpand"></ExpandMoreIcon>
                                </button>
                            </div>
                            : null}
                        {this.props.showOffReceive ?
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className="input-search-container">
                                    <SearchIcon size={{ fontSize: "12" }}></SearchIcon>
                                    <input type="dropdown" onChange={(e) => this.props.searchSpace(e)} className="classInpu" placeholder="Search from 356 Coins" />
                                    <span className="closeButton" onClick={() => this.props.closeReceive()}>
                                        <ClearIcon fontSize="small"></ClearIcon>
                                    </span>
                                </div>
                                <div className="custom-options">
                                    {this.props.showListRecieve()}
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        )
    }
}