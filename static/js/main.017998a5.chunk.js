(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),i=a.n(s),c=(a(13),a(14),a(7)),o=a(1),l=a(2),u=a(4),h=a(3);function m(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.Component),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={xNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},r}return Object(l.a)(a,[{key:"handleClicked",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();f(a)||a[e]||(a[e]=this.state.xNext?"X":"O",this.setState({history:t.concat({squares:a}),xNext:!this.state.xNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,a=this.state.history[this.state.stepNumber],r=f(a.squares);return r&&(e=" Winner is ".concat(r)),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-title"},n.a.createElement("h1",null,"Tic Tac Game")),n.a.createElement("div",{className:"gameBoard"},n.a.createElement(d,{onClick:function(e){return t.handleClicked(e)},squares:a.squares})),n.a.createElement("div",{className:"won"},n.a.createElement("div",null,e)))}}]),a}(r.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<=7;a++){var r=Object(c.a)(t[a],3),n=r[0],s=r[1],i=r[2];if(e[n]&&e[n]==e[s]&&e[s]==e[i])return e[n]}return null}var p=function(){return n.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.017998a5.chunk.js.map