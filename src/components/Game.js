import React, { Component } from 'react'
import Board from './Board';

export default class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            xNext : true,
            stepNumber: 0,
            history: [
                {squares:Array(9).fill(null)}
            ]

        }
    }
    handleClicked(i){
        const history =this.state.history.slice(0,this.state.stepNumber+1);
        const current= history[history.length-1];//last item
        const squares= current.squares.slice();
        const win=winner(squares);
        if(win || squares[i]){
            return;
        }
        squares[i]=this.state.xNext?'X':'O';
        this.setState({
            history: history.concat({
                    squares:squares
            }),
            xNext: !this.state.xNext,
            stepNumber: history.length
        })

    }
    render() {
        const history =this.state.history;
        const current= history[this.state.stepNumber];
        const won=winner(current.squares);
        let status;
        if(won){
            status=` Winner is ${won}`;
        }
        return(
            <div className="game">
                <div className="game-title"><h1>Tic Tac Game</h1></div>
                <div className="gameBoard">
                    <Board onClick={(i)=>this.handleClicked(i)}
                    squares={current.squares}
                    />
                </div>
                <div className="won">
                <div>{status}</div>
            </div>

            </div>
        )
    }
}
function winner(squares) {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i <= 7; i++) {
        const[a,b,c]=winningConditions[i];
       if(squares[a] && squares[a]==squares[b] && squares[b]==squares[c]){
           return squares[a];
       }
        
}
    return null;
}