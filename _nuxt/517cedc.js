(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{250:function(e,n,t){var content=t(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(106).default)("d6704c7a",content,!0,{sourceMap:!1})},251:function(e,n,t){"use strict";t(250)},252:function(e,n,t){var r=t(105)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.Token{\n  width:50%;\n  border-radius:9999px;\n  border-width:2px;\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  aspect-ratio:1/1\n}\n.Token--small{\n  height:3rem;\n  width:3rem\n}\n.Token--light{\n  --tw-border-opacity:1;\n  border-color:rgba(243, 244, 246, var(--tw-border-opacity));\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  box-shadow:.1em .1em 0 #d3d3d3\n}\n.Token--dark{\n  --tw-border-opacity:1;\n  border-color:rgba(55, 65, 81, var(--tw-border-opacity));\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n  box-shadow:.1em .1em 0 #444\n}\n.Tile{\n  aspect-ratio:1/1\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},253:function(e,n,t){"use strict";t.r(n);var r=t(31);function o(e){return[e%6,Math.floor(e/6)]}var l=t(22),c=t(132),f=t(131),d=(t(18),t(58),t(26),t(59),t(35),t(27),t(33),t(60),t(61),t(36),t(44),t(43),t(75),t(34),t(76),Object(c.a)((function e(n,t){Object(f.a)(this,e),this.position=n,this.player=t})));t(104);function h(input,e){return input.reduce((function(n,t,r,o){return r+e>o.length?n:n.concat([o.slice(r,r+e)])}),[])}function y(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function v(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw o}}}}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var T=Object(c.a)((function e(n,t){Object(f.a)(this,e),this.color=n,this.tiles=t})),k=function(){function e(n,t){Object(f.a)(this,e),this.winner=n,this.winningTiles=t}return Object(c.a)(e,[{key:"includesTileIndex",value:function(e){var n=o(e);return this.winningTiles.some((function(p){return p[0]==n[0]&&p[1]==n[1]}))}}]),e}(),m=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;Object(f.a)(this,e),this.groups=n,this.nextPlayer=0,this.result=void 0,this.tokens=[]}return Object(c.a)(e,[{key:"playPosition",value:function(e){this.positionToToken(e)||this.result||(this.tokens.push(new d(e,this.nextPlayer)),this.nextPlayer=(this.nextPlayer+1)%2,this.result=this.hasWinnerByGroups(e)||this.hasWinnerBySquare(e)||this.hasWinnerByLine(e)||this.isDraw())}},{key:"hasWinnerByGroups",value:function(e){var n=this,t=this.positionToToken(e);if(t){var r=t.player,g=this.positionToGroup(e);if(g)return g.tiles.every((function(e){var t=n.positionToToken(e);return t&&t.player==r}))?new k(r,g.tiles):void 0}}},{key:"hasWinnerBySquare",value:function(e){var n=this,t=this.positionToToken(e);if(t)for(var r=Object(l.a)(t.position,2),o=r[0],c=r[1],f=t.player,d=0,h=[[[o,c],[o+1,c],[o,c+1],[o+1,c+1]],[[o,c],[o-1,c],[o,c+1],[o-1,c+1]],[[o,c],[o+1,c],[o,c-1],[o+1,c-1]],[[o,c],[o-1,c],[o,c-1],[o-1,c-1]]];d<h.length;d++){var y=h[d];if(y.every((function(e){var t=n.positionToToken(e);return t&&t.player==f})))return new k(f,y)}}},{key:"hasWinnerByLine",value:function(e){var n=this,t=this.positionToToken(e);if(t)for(var r=Object(l.a)(t.position,2),o=r[0],c=r[1],f=t.player,d=0,y=[[[o,c-4],[o,c-3],[o,c-2],[o,c-1],[o,c],[o,c+1],[o,c+2],[o,c+3],[o,c+4]],[[o-4,c],[o-3,c],[o-2,c],[o-1,c],[o,c],[o+1,c],[o+2,c],[o+3,c],[o+4,c]],[[o-4,c-4],[o-3,c-3],[o-2,c-2],[o-1,c-1],[o,c],[o+1,c+1],[o+2,c+2],[o+3,c+3],[o+4,c+4]],[[o+4,c-4],[o+3,c-3],[o+2,c-2],[o+1,c-1],[o,c],[o-1,c+1],[o-2,c+2],[o-3,c+3],[o-4,c+4]]];d<y.length;d++){var w,T=v(h(y[d],5));try{for(T.s();!(w=T.n()).done;){var m=w.value;if(m.every((function(e){var t=n.positionToToken(e);return t&&t.player==f})))return new k(f,m)}}catch(e){T.e(e)}finally{T.f()}}}},{key:"isDraw",value:function(){return 36!==this.tokens.length||this.result?void 0:new k(null,[])}},{key:"positionToGroup",value:function(e){var n,t=v(this.groups);try{for(t.s();!(n=t.n()).done;){var g=n.value;if(g.tiles.some((function(n){return n[0]==e[0]&&n[1]==e[1]})))return g}}catch(e){t.e(e)}finally{t.f()}}},{key:"positionToToken",value:function(e){var n,t=v(this.tokens);try{for(t.s();!(n=t.n()).done;){var r=n.value;if(r.position[0]==e[0]&&r.position[1]==e[1])return r}}catch(e){t.e(e)}finally{t.f()}}},{key:"toJSON",value:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},this)}}]),e}(),x=[new T("bg-pink-400",[[0,0],[0,1],[1,0]]),new T("bg-pink-400",[[5,5],[4,5],[5,4]]),new T("bg-pink-400",[[0,5],[1,5],[0,4]]),new T("bg-pink-400",[[5,0],[5,1],[4,0]]),new T("bg-yellow-300",[[2,0],[1,1],[0,2]]),new T("bg-yellow-300",[[5,3],[4,4],[3,5]]),new T("bg-orange-400",[[0,3],[1,4],[2,5]]),new T("bg-orange-400",[[3,0],[4,1],[5,2]]),new T("bg-blue-300",[[2,1],[2,2],[1,2]]),new T("bg-blue-300",[[3,4],[3,3],[4,3]]),new T("bg-green-400",[[1,3],[2,3],[2,4]]),new T("bg-green-400",[[3,1],[3,2],[4,2]])],O={data:function(){return{game:new m}},methods:{indexToPosition:o}},j=(t(251),t(56)),component=Object(j.a)(O,(function(){var e=this,n=e._self._c;return n("div",[e.game.result?e._e():n("div",{staticClass:"flex flex-row justify-center items-center py-4 gap-x-4"},[e._v("\n      player\n      "),n("span",{staticClass:"Token Token--small",class:{"Token--light":0===e.game.nextPlayer,"Token--dark":1===e.game.nextPlayer}}),e._v("\n      is playing\n    ")]),e._v(" "),e.game.result?n("div",{staticClass:"text-center rounded bg-green-200 text-green-700 border-2 border-green-300 my-2 py-4 text-xl font-bold"},[0===e.game.result.winner?[e._v("Player white is a winner.")]:1===e.game.result.winner?[e._v("Player black is a winner.")]:void 0===e.game.result.winner?[e._v("It's a draw.")]:e._e()],2):e._e(),e._v(" "),n("div",{staticClass:"grid grid-cols-6 gap-2"},e._l(new Array(36),(function(t,i){var o;return n("div",{staticClass:"Tile border-1 border-gray-300 rounded-lg flex items-center justify-center text-2xl shadow-md hover:shadow",class:(o={},Object(r.a)(o,e.game.positionToGroup(e.indexToPosition(i)).color,!0),Object(r.a)(o,"cursor-pointer",!e.game.positionToToken(e.indexToPosition(i))),Object(r.a)(o,"animate-pulse",e.game.result&&e.game.result.includesTileIndex(i)),o),attrs:{title:e.indexToPosition(i)},on:{click:function(n){e.game.playPosition(e.indexToPosition(i))}}},[e.game.positionToToken(e.indexToPosition(i))?n("div",{staticClass:"Token blur",class:{"Token--light":0===e.game.positionToToken(e.indexToPosition(i)).player,"Token--dark":1===e.game.positionToToken(e.indexToPosition(i)).player}}):e._e()])})),0)])}),[],!1,null,null,null);n.default=component.exports}}]);