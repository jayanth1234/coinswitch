import React, { Component } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Snackbar from '@material-ui/core/Snackbar';
// // import TextField from "@material-ui/core/TextField"
// // import Autocomplete from '@material-ui/core/Menu';
// import qr from "../../assets/scanner.png";

import { connect } from 'react-redux';
import { getCoins, getRate } from '../../actions/index';
import { bindActionCreators } from 'redux';

import RateCard from "../rateCard/rateCard";

import "./exchange.css";

class Exchange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueSend: 1,
            valueReceive: 38.1821,
            coin: null,
            coinImage: [],
            inputValue: '',
            showOff: false,
            dontShow: true,
            showOffReceive: false,
            dontShowReceive: true,
            check: true,
            sendName: "btc",
            receiveName: "eth",
            bitCoin: "https://files.coinswitch.co/public/coins/btc.png",
            ethereum: "https://files.coinswitch.co/public/coins/eth.png",
            search: null,
            nameFirst: "Bitcoin",
            nameSecond: "Ethereum",
            showButton: true,
            loading: false
        }
    }

    componentDidMount() {
        this.props.getCoins()
        this.props.getRate()
    }

    rateCoins = (e) => {
        this.setState({
            valueSend: e.target.value
        })
    }

    handleValChange = (event) => {
        this.setState({
            showOff: !this.state.showOff,
            dontShow: !this.state.dontShow,
            showOffReceive: false,
            dontShowReceive: true,
            search: ""
        })
    }

    handleValChangeReceive = () => {
        this.setState({
            showOffReceive: !this.state.showOffReceive,
            dontShowReceive: !this.state.dontShowReceive,
            showOff: false,
            dontShow: true,
            search: ""
        })
    }

    showList = () => {
        return (
            this.props.coin.coin[0].length > 1 &&
            this.props.coin.coin[0].filter((data) => {
                if (this.state.search == null)
                    return data
                else if (data.symbol.toLowerCase().includes(this.state.search.toLowerCase())
                    || data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return data
                }
            }).map((item, index) => {
                return (
                    <div key={index} className="lisItemWhole" onClick={() => this.getCoin(item)}>
                        <div className="lisItem">
                            <div style={{ marginLeft: "20px" }}>
                                <img alt="n" src={item.logoUrl} className="imgLogoCoin" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-start", width: "100px" }}>
                                <p className="coinName">{item.symbol}</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <p className="coinSymbol">{item.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    showListRecieve = () => {
        return (
            this.props.coin.coin[0].length > 1 &&
            this.props.coin.coin[0].filter((data) => {
                if (this.state.search == null)
                    return data
                else if (data.symbol.toLowerCase().includes(this.state.search.toLowerCase())
                    || data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return data
                }
            }).map((item, index) => {
                return (
                    <div key={index} className="lisItemWhole" onClick={() => this.getCoinReceive(item)}>
                        <div className="lisItem">
                            <div style={{ marginLeft: "20px" }}>
                                <img alt="n" src={item.logoUrl} className="imgLogoCoin" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-start", width: "100px" }}>
                                <p className="coinName">{item.symbol}</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <p className="coinSymbol">{item.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    close = () => {
        this.setState({
            showOff: !this.state.showOff,
            dontShow: !this.state.dontShow
        })
    }

    getCoin = (coinItem) => {
        this.setState({
            sendName: coinItem.symbol,
            bitCoin: coinItem.logoUrl,
            nameFirst: coinItem.name,
            showOff: !this.state.showOff,
            dontShow: !this.state.dontShow
        })
        console.log(coinItem.symbol, this.state.receiveName)
        this.getValueOfCoin(coinItem.symbol, this.state.receiveName)
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    closeReceive = () => {
        this.setState({
            showOffReceive: !this.state.showOffReceive,
            dontShowReceive: !this.state.dontShowReceive
        })
    }

    getValueOfCoin = (send, get) => {
        this.setState({
            loading: true
        })
        let OBJ = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 't41E6v16mG6xqOUK74E2F7Py6UVng4K6n1pO3Jig',
                'x-user-ip': '1.1.1.1'
            },
            body: `{ "depositCoin":"${send}","destinationCoin":"${get}"}`
        }
        fetch('https://api.coinswitch.co/v2/rate', OBJ)
            .then(res => res.json())
            .then((result) => {
                if (result.data !== null) {
                    this.setState({
                        loading: false,
                        valueReceive: result.data.rate
                    })
                } else {
                    this.setState({loading: false})
                    alert("Please select different pair of coins !!")
                }
            })
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    getCoinReceive = (coinItem) => {
        this.setState({
            receiveName: coinItem.symbol,
            ethereum: coinItem.logoUrl,
            nameSecond: coinItem.name,
            showOffReceive: !this.state.showOffReceive,
            dontShowReceive: !this.state.dontShowReceive
        })

        this.getValueOfCoin(this.state.sendName, coinItem.symbol)
    }

    filterContent = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    renderButtonComp = () => {
        return (
            <div className="buttonContainer">
                <div className="conditionRow">
                    <input className="checkBox" onClick={() => this.setState({ check: !this.state.check, showButton: !this.state.showButton })} type="checkbox" id="cond" />
                    <label htmlFor="cond" className="textCond">I agree to the {" "}
                        <span style={{ color: "#fff" }}>terms</span>
                        {"  "} & {"  "}
                        <span style={{ color: "#fff" }}>conditions</span>
                    </label>
                </div>
                <div className="buttonPart">
                    {this.state.showButton ?
                        // <button className="buttonChange">
                        //     EXCHANGE
                        // </button>
                        <button className="buttonUncheck">
                            EXCHANGE
                        </button>
                        :
                        <button className="buttonChange">
                            EXCHANGE
                        </button>
                    }
                </div>
            </div>
        )
    }

    renderAmount = () => {
        return (
            <div className="valueContainer">
                <div className="containerRate">
                    <div className="sendRate">
                        <p className="textSend">You Are Sending</p>
                        <div className="send">
                            <p className="rateDisplay">{this.state.valueSend}</p>
                            <p className="iconLogo">{this.state.sendName}</p>
                        </div>
                    </div>
                    <ArrowRightAltIcon
                        style={{ fontSize: 40 }}
                        className="iconArrow">
                    </ArrowRightAltIcon>
                    <div className="receiveRate">
                        <p className="textReceive">You May Receive</p>
                        <div className="receive">
                            <p className="rateDisplay">
                                {this.state.loading ? 
                                    "..."
                                : (this.state.valueReceive * this.state.valueSend).toFixed("4")}
                            </p>
                            <p className="iconLogo">{this.state.receiveName}</p>
                        </div>
                    </div>
                </div>
                <div className="powered">
                    <p className="powerCond">powered by Calendely</p>
                </div>
            </div>
        )
    }

    render() {

        return (
            <div className="exchangeContainer">
                <RateCard
                    showOff={this.state.showOff}
                    dontShow={this.state.dontShow}
                    showOffReceive={this.state.showOffReceive}
                    dontShowReceive={this.state.dontShowReceive}
                    valueSend={this.state.valueSend}
                    valueReceive={this.state.valueReceive}
                    sendName={this.state.sendName}
                    receiveName={this.state.receiveName}
                    bitCoin={this.state.bitCoin}
                    ethereum={this.state.ethereum}
                    handleValChange={this.handleValChange}
                    handleValChangeReceive={this.handleValChangeReceive}
                    showList={this.showList}
                    showListRecieve={this.showListRecieve}
                    close={this.close}
                    closeReceive={this.closeReceive}
                    searchSpace={this.searchSpace}
                    rateCoins={this.rateCoins}
                    nameFirst={this.state.nameFirst}
                    nameSecond={this.state.nameSecond}
                    loading={this.state.loading}
                />
                {this.renderAmount()}
                {this.renderButtonComp()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        coin: state.coin,
        rate: state.rate
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCoins, getRate }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Exchange)