(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{250:function(e,t,n){"use strict";n.r(t);var r=n(31);var o=n(22),l=n(132),c=n(131),f=(n(104),n(18),n(58),n(26),n(59),n(35),n(27),n(33),n(60),n(61),n(36),n(44),n(43),n(75),n(34),n(76),Object(l.a)((function e(t,n){Object(c.a)(this,e),this.position=t,this.player=n})));function y(input,e){return input.reduce((function(t,n,r,o){return r+e>o.length?t:t.concat([o.slice(r,r+e)])}),[])}function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var w=Object(l.a)((function e(t,n){Object(c.a)(this,e),this.color=t,this.tiles=n})),T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;Object(c.a)(this,e),this.groups=t,this.nextPlayer=0,this.result="",this.tokens=[]}return Object(l.a)(e,[{key:"playPosition",value:function(e){var t;this.positionToToken(e)||(this.result||(this.tokens.push(new f(e,this.nextPlayer)),this.nextPlayer=(this.nextPlayer+1)%2,null!=(t=this.hasWinnerByGroups(e))?this.result="Player ".concat(t," is winner by group!"):null!=(t=this.hasWinnerBySquare(e))?this.result="Player ".concat(t," is winner by square!"):null!=(t=this.hasWinnerByLine(e))?this.result="Player ".concat(t," is winner by line of 5!"):this.isDraw()&&(this.result="This is complete draw, no winner.")))}},{key:"hasWinnerByGroups",value:function(e){var t=this,n=this.positionToToken(e);if(n){var r=n.player,g=this.positionToGroup(e);if(g)return console.info("Checking group: ".concat(g.color," for player: ").concat(r,".")),g.tiles.every((function(e){var n=t.positionToToken(e);return n&&n.player==r}))?r:void 0}}},{key:"hasWinnerBySquare",value:function(e){var t=this,n=this.positionToToken(e);if(n)for(var r=Object(o.a)(n.position,2),l=r[0],c=r[1],f=n.player,y=0,h=[[[l,c],[l+1,c],[l,c+1],[l+1,c+1]],[[l,c],[l-1,c],[l,c+1],[l-1,c+1]],[[l,c],[l+1,c],[l,c-1],[l+1,c-1]],[[l,c],[l-1,c],[l,c-1],[l-1,c-1]]];y<h.length;y++){if(h[y].every((function(e){var n=t.positionToToken(e);return n&&n.player==f})))return f}}},{key:"hasWinnerByLine",value:function(e){var t=this,n=this.positionToToken(e);if(n)for(var r=Object(o.a)(n.position,2),l=r[0],c=r[1],f=n.player,h=0,v=[[[l,c-4],[l,c-3],[l,c-2],[l,c-1],[l,c],[l,c+1],[l,c+2],[l,c+3],[l,c+4]],[[l-4,c],[l-3,c],[l-2,c],[l-1,c],[l,c],[l+1,c],[l+2,c],[l+3,c],[l+4,c]],[[l-4,c-4],[l-3,c-3],[l-2,c-2],[l-1,c-1],[l,c],[l+1,c+1],[l+2,c+2],[l+3,c+3],[l+4,c+4]],[[l+4,c-4],[l+3,c-3],[l+2,c-2],[l+1,c-1],[l,c],[l-1,c+1],[l-2,c+2],[l-3,c+3],[l-4,c+4]]];h<v.length;h++){var w,T=d(y(v[h],5));try{for(T.s();!(w=T.n()).done;){if(w.value.every((function(e){var n=t.positionToToken(e);return n&&n.player==f})))return f}}catch(e){T.e(e)}finally{T.f()}}}},{key:"isDraw",value:function(){return 36===this.tokens.length&&!this.result}},{key:"positionToGroup",value:function(e){var t,n=d(this.groups);try{for(n.s();!(t=n.n()).done;){var g=t.value;if(g.tiles.some((function(t){return t[0]==e[0]&&t[1]==e[1]})))return g}}catch(e){n.e(e)}finally{n.f()}}},{key:"positionToToken",value:function(e){var t,n=d(this.tokens);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.position[0]==e[0]&&r.position[1]==e[1])return r}}catch(e){n.e(e)}finally{n.f()}}},{key:"toJSON",value:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this)}}]),e}(),k=[new w("bg-pink-400",[[0,0],[0,1],[1,0]]),new w("bg-pink-400",[[5,5],[4,5],[5,4]]),new w("bg-pink-400",[[0,5],[1,5],[0,4]]),new w("bg-pink-400",[[5,0],[5,1],[4,0]]),new w("bg-yellow-400",[[2,0],[1,1],[0,2]]),new w("bg-yellow-400",[[5,3],[4,4],[3,5]]),new w("bg-red-300",[[0,3],[1,4],[2,5]]),new w("bg-red-300",[[3,0],[4,1],[5,2]]),new w("bg-blue-300",[[2,1],[2,2],[1,2]]),new w("bg-blue-300",[[3,4],[3,3],[4,3]]),new w("bg-green-400",[[1,3],[2,3],[2,4]]),new w("bg-green-400",[[3,1],[3,2],[4,2]])],m={data:function(){return{game:new T}},methods:{indexToPosition:function(e){return[e%6,Math.floor(e/6)]}}},O=n(56),component=Object(O.a)(m,(function(){var e=this,t=e._self._c;return t("div",[e.game.result?e._e():t("div",{staticClass:"flex flex-row justify-center items-center py-4 gap-x-4"},[e._v("\n      player\n      "),t("span",{staticClass:"rounded-full uppercase text-xl border-2 h-12 w-12",class:{"bg-white border-gray-100 text-gray-700":0===e.game.nextPlayer,"bg-gray-800 border-gray-700 text-gray-100":1===e.game.nextPlayer}}),e._v("\n      is playing\n    ")]),e._v(" "),e.game.result?t("div",{staticClass:"text-center rounded bg-green-200 text-green-700 border-2 border-green-300 my-2 py-4 text-xl font-bold"},[e._v("\n      "+e._s(e.game.result)+"\n    ")]):e._e(),e._v(" "),t("div",{staticClass:"grid grid-cols-6 gap-2"},e._l(new Array(36),(function(n,i){var o;return t("div",{staticClass:"h-32 w-32 border-1 border-gray-300 rounded-lg flex items-center justify-center text-2xl shadow-md hover:shadow",class:(o={},Object(r.a)(o,e.game.positionToGroup(e.indexToPosition(i)).color,!0),Object(r.a)(o,"cursor-pointer",!e.game.positionToToken(e.indexToPosition(i))),o),attrs:{title:e.indexToPosition(i)},on:{click:function(t){e.game.playPosition(e.indexToPosition(i))}}},[e.game.positionToToken(e.indexToPosition(i))?t("div",{staticClass:"w-16 h-16 rounded-full shadow-xl border-2",class:{"bg-white border-gray-100":0===e.game.positionToToken(e.indexToPosition(i)).player,"bg-gray-800 border-gray-700":1===e.game.positionToToken(e.indexToPosition(i)).player}}):e._e()])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);