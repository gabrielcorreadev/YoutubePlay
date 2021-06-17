import React, { Component } from "react";
import createInvoke from "react-native-webview-invoke/native";
import { WebView } from "react-native-webview";
import { YTWebViewState, YTWebViewProps, YTWebViewDefaultProps } from "./types/yt.types";

export default class YTWebView extends Component<YTWebViewProps> {
  static defaultProps = { ...YTWebViewDefaultProps };
  webview: any;
  invoke = createInvoke(() => this.webview);
  _createPlayer = this.invoke.bind("createPlayer");
  _playVideo = this.invoke.bind("playVideo");
  _pauseVideo = this.invoke.bind("pauseVideo");
  _seekTo = this.invoke.bind("seekTo");

  invokeFunctions = () => {
    // invoke fuctions
    const { onReady, onError, onPlaying, onDurationReady, onEnd } = this.props;
    this.invoke.define("onReady", onReady);
    this.invoke.define("onError", onError);
    this.invoke.define("onStateChange", this.onStateChange);
    this.invoke.define("onPlaying", onPlaying);
    this.invoke.define("onEnd", onEnd);
    this.invoke.define("onDurationReady", onDurationReady);
  };

  componentDidMount = async () => {
    this.invokeFunctions();
    this.initPlayer();
  };

  initPlayer = async () => {
    // create Player
    const { videoId, autoPlay } = this.props;
    const opts = { videoId, playerVars: { autoPlay } };
    await this._createPlayer(opts);
    if (autoPlay) await this._playVideo();
  };

  onStateChange = (state: YTWebViewState) => {
    if (state === YTWebViewState.ENDED) this.props.onEnd();
    this.props.onStateChange(state);
  };

  render() {
    return (
      <WebView
        ref={(webview: WebView) => (this.webview = webview)}
        onMessage={this.invoke.listener}
        originWhitelist={["*"]}
        allowsInlineMediaPlayback={true}
        // startInLoadingState
        // renderLoading={() => (
        //   <View style={{ backgroundColor: "#000", height: 100, width: 100 }} />
        // )}
        mediaPlaybackRequiresUserAction={false}
        //source={{ uri: "http://localhost:1234/" }}
        source={{ html, baseUrl: "https://youtube.com" }}
      />
    );
  }
}

const html: string =
  '<html><head><style>body{padding:0;margin:0;background-color:#000;display:flex;justify-content:center;align-items:center;width:100vw;height:100vh}</style></head><body> <div id="player"></div> <script>parcelRequire=function(e,t,n,r){var o,a="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function s(n,r){if(!t[n]){if(!e[n]){var o="function"==typeof parcelRequire&&parcelRequire;if(!r&&o)return o(n,!0);if(a)return a(n,!0);if(i&&"string"==typeof n)return i(n);var u=new Error("Cannot find module \'"+n+"\'");throw u.code="MODULE_NOT_FOUND",u}l.resolve=function(t){return e[n][1][t]||t},l.cache={};var c=t[n]=new s.Module(n);e[n][0].call(c.exports,l,c,c.exports,this)}return t[n].exports;function l(e){return s(l.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=t,s.parent=a,s.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]};for(var u=0;u<n.length;u++)try{s(n[u])}catch(e){o||(o=e)}if(n.length){var c=s(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define(function(){return c})}if(parcelRequire=s,o)throw o;return s}({"/igm":[function(e,t,n){"use strict";var r;r=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},t.exports=r},{}],pKIK:[function(e,t,n){function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}t.exports=function(e,t,n){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof t&&(n=t,t={}),t=t||{},n=n||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async=!("async"in t&&!t.async),a.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(a,t.attrs),t.text&&(a.text=""+t.text),("onload"in a?r:function(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}})(a,n),a.onload||r(a,n),o.appendChild(a)}},{}],B9Fe:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("load-script"));n.default=function(e){return new Promise(function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,r.default)(n+"//www.youtube.com/iframe_api",function(t){t&&e.trigger("error",t)});var o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){o&&o(),t(window.YT)}}})},t.exports=n.default},{"load-script":"pKIK"}],J3Y7:[function(e,t,n){var r=1e3,o=60*r,a=60*o,i=24*a,s=365.25*i;function u(e){if(!((e=String(e)).length>100)){var t=/^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*s;case"days":case"day":case"d":return n*i;case"hours":case"hour":case"hrs":case"hr":case"h":return n*a;case"minutes":case"minute":case"mins":case"min":case"m":return n*o;case"seconds":case"second":case"secs":case"sec":case"s":return n*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function c(e){return e>=i?Math.round(e/i)+"d":e>=a?Math.round(e/a)+"h":e>=o?Math.round(e/o)+"m":e>=r?Math.round(e/r)+"s":e+"ms"}function l(e){return f(e,i,"day")||f(e,a,"hour")||f(e,o,"minute")||f(e,r,"second")||e+" ms"}function f(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}t.exports=function(e,t){t=t||{};var n=typeof e;if("string"===n&&e.length>0)return u(e);if("number"===n&&!1===isNaN(e))return t.long?l(e):c(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],lHCM:[function(e,t,n){var r;function o(e){function t(){if(t.enabled){var e=t,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=n.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t;u++;var o=n.formatters[r];if("function"==typeof o){var a=i[u];t=o.call(e,a),i.splice(u,1),u--}return t}),n.formatArgs.call(e,i),(t.log||n.log||console.log.bind(console)).apply(e,i)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return n.colors[Math.abs(r)%n.colors.length]}(e),"function"==typeof n.init&&n.init(t),t}(n=t.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){n.enable("")},n.enable=function(e){n.save(e),n.names=[],n.skips=[];for(var t=("string"==typeof e?e:"").split(/[\\s,]+/),r=t.length,o=0;o<r;o++)t[o]&&("-"===(e=t[o].replace(/\\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))},n.enabled=function(e){var t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=e("ms"),n.names=[],n.skips=[],n.formatters={}},{ms:"J3Y7"}],rH1J:[function(e,t,n){var r,o,a=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function c(e){if(o===clearTimeout)return clearTimeout(e);if((o===s||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{o="function"==typeof clearTimeout?clearTimeout:s}catch(e){o=s}}();var l,f=[],d=!1,p=-1;function y(){d&&l&&(d=!1,l.length?f=l.concat(f):p=-1,f.length&&m())}function m(){if(!d){var e=u(y);d=!0;for(var t=f.length;t;){for(l=f,f=[];++p<t;)l&&l[p].run();p=-1,t=f.length}l=null,d=!1,c(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new h(e,t)),1!==f.length||d||u(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.env={},a.argv=[],a.version="",a.versions={},a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},{}],BYFN:[function(e,t,n){e("process");var r=e("process");function o(){var e;try{e=n.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=void 0),e}(n=t.exports=e("./debug")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},n.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),t){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))}),e.splice(a,0,r)}},n.save=function(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}},n.load=o,n.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/)},n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},n.enable(o())},{"./debug":"lHCM",process:"rH1J"}],MMHm:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=n.default},{}],sK1G:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=n.default},{}],kT5t:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=n.default},{}],"7UOy":[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(e("./constants/PlayerStates"));n.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=n.default},{"./constants/PlayerStates":"kT5t"}],Qqpv:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=s(e("debug")),o=s(e("./functionNames")),a=s(e("./eventNames")),i=s(e("./FunctionStateMap"));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.default)("youtube-player"),c={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){u(\'event "%s"\',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var s,c=a.default[Symbol.iterator]();!(r=(s=c.next()).done);r=!0)n(s.value)}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then(function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise(function(n){e.addEventListener("onStateChange",function r(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout(function(){e.removeEventListener("onStateChange",r),n()},t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())})}).then(function(){return a}):a})}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then(function(e){return e[r].apply(e,n)})}},a=!0,s=!1,u=void 0;try{for(var c,l=o.default[Symbol.iterator]();!(a=(c=l.next()).done);a=!0)r(c.value)}catch(e){s=!0,u=e}finally{try{!a&&l.return&&l.return()}finally{if(s)throw u}}return n}};n.default=c,t.exports=n.default},{debug:"BYFN","./functionNames":"MMHm","./eventNames":"sK1G","./FunctionStateMap":"7UOy"}],QbF1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(e("sister")),a=s(e("./loadYouTubeIframeApi")),i=s(e("./YouTubePlayer"));function s(e){return e&&e.__esModule?e:{default:e}}var u=void 0;n.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(u||(u=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error(\'Element "\'+e+\'" does not exist.\');t.events=i.default.proxyEvents(s);var c=new Promise(function(n){"object"===(void 0===e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):u.then(function(r){var o=new r.Player(e,t);return s.on("ready",function(){n(o)}),null})}),l=i.default.promisifyPlayer(c,n);return l.on=s.on,l.off=s.off,l},t.exports=n.default},{sister:"/igm","./loadYouTubeIframeApi":"B9Fe","./YouTubePlayer":"Qqpv"}],"4NDh":[function(e,t,n){"use strict";const r="RNWV:sync",o="success",a="fail";let i=0;class s{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const u=e=>e.command+"("+e.id+")",c=(e,t)=>({id:i++,command:e,data:t,reply:!1,status:o});let l=null;const f="undefined"!=typeof window,{bind:d,define:p,listener:y,ready:m,fn:h,addEventListener:v,removeEventListener:g,isConnect:b}=function(e){let t=[];const n=function(){const e={send:[],receive:[],ready:[]};return{addEventListener:function(t,n){if(t in e){const r=e[t];r.indexOf(n)<0&&r.push(n)}},removeEventListener:function(t,n){if(t in e){const r=e[t],o=r.indexOf(n);o>=0&&r.splice(o,1)}},emitEvent:function(t,n){t in e&&e[t].forEach(e=>e(n))}}}(),i={},l={},f={};function d(e){return(...t)=>(function(e,t){const n=c(e,t),r=new s;return i[u(n)]=r,y(n),r.promise})(e,t)}function p(e,n){return l[e]=(e=>n(...e)),!t&&g(),{define:p,bind:d}}function y(o){o.command!==r&&t?t.push(o):e(o),n.emitEvent("send",o)}function m(e,t,n){e.reply=!0,e.data=t,e.status=n,y(e)}const h=d(r);function v(e=[]){return e.filter(e=>!(e in f)).map(e=>{f[e]=d(e)}),function(){if(t){const e=t;t=null,e.forEach(e=>{y(e)}),n.emitEvent("ready")}}(),Object.keys(l)}function g(){h(Object.keys(l)).then(v)}return p(r,v),{bind:d,define:p,listener:function(e){if(e.reply){const t=u(e);i[t]&&(e.status===a?i[t].reject(e.data):i[t].resolve(e.data))}else if(l[e.command]){const t=l[e.command](e.data);t&&t.then?t.then(t=>m(e,t,o)).catch(t=>m(e,t,a)):m(e,t,o)}else m(e,"function data.command is not defined",a);n.emitEvent("receive",e)},ready:g,fn:f,addEventListener:n.addEventListener,removeEventListener:n.removeEventListener,isConnect:function(){return!t}}}(e=>f&&l&&l(JSON.stringify(e)));if(f){let e=window.originalPostMessage;if(e)l=((...e)=>window.postMessage(...e)),m();else{const t={get:function(){return e},set:function(t){(e=t)&&(l=((...e)=>window.postMessage(...e)),setTimeout(m,50))}};Object.defineProperty(window,"originalPostMessage",t)}let t=window.ReactNativeWebView;if(t)l=((...e)=>window.ReactNativeWebView.postMessage(...e)),m();else{const e={get:function(){return t},set:function(e){(t=e)&&(l=((...e)=>window.ReactNativeWebView.postMessage(...e)),setTimeout(m,50))}};Object.defineProperty(window,"ReactNativeWebView",e)}window.document.addEventListener("message",t=>e&&y(JSON.parse(t.data))),window.addEventListener("message",e=>t&&y(JSON.parse(e.data))),document.addEventListener("message",e=>t&&y(JSON.parse(e.data)))}var w={bind:d,define:p,fn:h,addEventListener:v,removeEventListener:g,isConnect:b};t.exports=w},{}],vPwy:[function(e,t,n){var r=e("./dist/browser.common.js");t.exports=r,t.exports.default=r},{"./dist/browser.common.js":"4NDh"}],Focm:[function(e,t,n){"use strict";var r,o=i(e("youtube-player")),a=i(e("react-native-webview-invoke/browser"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=0,l=!1,f=window,d=(f.innerWidth,f.innerHeight,a.default.bind("onReady")),p=a.default.bind("onError"),y=a.default.bind("onStateChange"),m=a.default.bind("onPlaybackRateChange"),h=a.default.bind("onPlaybackQualityChange"),v=a.default.bind("onPlaying"),g=a.default.bind("onDurationReady"),b=function(e){var t=e.data;1===t&&0===c&&(E(),P()),l=1!==t,y(t)},w=function(){r.playVideo().then(function(){})},E=function(){return r.getDuration().then(function(e){c=e,g(e)})},P=function(){setInterval(function(){l||r.getCurrentTime().then(function(e){return v(e)})},500)};a.default.define("createPlayer",function(e){var t=s({width:"100%",height:"100%"},e,{playerVars:s({enablejsapi:1,autoplay:0,rel:0,controls:0,playsinline:1,modestbranding:1,showinfo:0},e.playerVars)});(r=(0,o.default)("player",t)).on("ready",d),r.on("error",p),r.on("stateChange",b),r.on("playbackRateChange",m),r.on("playbackQualityChange",h),e.playerVars&&e.playerVars.autoplay&&w()}),a.default.define("playVideo",w),a.default.define("pauseVideo",function(){r.pauseVideo().then(function(){})}),a.default.define("seekTo",function(e){r.seekTo(e).then(function(){})})},{"youtube-player":"QbF1","react-native-webview-invoke/browser":"vPwy"}]},{},["Focm"]);</script> </body></html>';
