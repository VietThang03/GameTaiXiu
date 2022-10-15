import React, { Component } from 'react';
import Dice from './Dice';
import './Game.css';
import InfoGame from '../GameDice/InfoGame';
import {connect} from 'react-redux';



class Game extends Component {
    render() {
        return (
            <div className="game">
                <h1 className="title-game text-center mt-5 display-4">Game Tài Xỉu</h1>
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <button className="btnGame" onClick={() =>{
                            this.props.datCuoc(true)
                        }}>TÀI</button>
                    </div>
                    <div className="col-4">
                        <Dice/>
                    </div>
                    <div className="col-4">
                        <button className="btnGame" onClick={() => {
                            this.props.datCuoc(false)
                        }}>XỈU</button>
                    </div>
                </div>
                <div className="info_game text-center">
                     <InfoGame/>
                     <button className="btn btn-success" style={{padding: 10, marginTop: 20}}
                      onClick={() => {
                        this.props.playGame()
                      }}
                     >PLAY GAME</button>
                </div>
               
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action);
        },
        playGame: () => {
            let action = {
                type: 'PLAY_GAME'
            }
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(Game)