(this.webpackJsonpcam_viewer=this.webpackJsonpcam_viewer||[]).push([[0],{237:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(20),r=n.n(c),o=(n(61),n(24)),i=n(25),s=n(27),l=n(26),u=n(53),d=n.n(u),h=n(14),b=n.n(h),j=n(54),f=n(4);function p(){return new Promise((function(e){return setTimeout((function(){return e(42)}),1e3)}))}var m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={result:null},a.toggleButtonState=function(){(a.snap,p()).then((function(e){a.setState({result:e})}))},a.snap=e.snap,a.name=e.name,a.src=e.src,a._id=e._id,a.CId=e._id+"0",a.location=e.location,a}return Object(i.a)(n,[{key:"show",value:function(e,t,n){try{var a=document.getElementById(n);a.parentNode.removeChild(a)}catch(r){console.log(r)}try{var c=document.createElement("IMG");return c.src=t,c.setAttribute("id",n),c.setAttribute("width","400px"),c.setAttribute("height","400px"),document.getElementById(e).appendChild(c),console.log(c),c}catch(r){console.log(r)}}},{key:"hide",value:function(e){try{var t=document.getElementById(e);t.parentNode.removeChild(t)}catch(n){console.log(n)}}},{key:"delete",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mongodb-tutorial-app.herokuapp.com/cameras/cam/"+this._id,console.log(t),e.next=4,p().then(console.log("done"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{id:this.CId,className:"bg-dark-gray dib-ns br3 pa3 ma2  bw2 shadow-5",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:this.name}),Object(f.jsx)("h2",{className:"white",children:this.location}),Object(f.jsx)("a",{href:this.snap,download:!0,target:"_blank",children:"Take a Snap"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){return e.show(e.CId,e.src,e._id)},children:"Show"}),Object(f.jsx)("button",{onClick:function(){return e.hide(e._id)},children:"Hide"}),Object(f.jsx)("button",{onClick:function(){return e.delete(e._id)},children:"delete"})]})]})})}}]),n}(a.Component);var v=function(e){var t=e.robots;return Object(f.jsx)("div",{children:t.map((function(e,n){return Object(f.jsx)(m,{_id:t[n]._id,src:t[n].src,location:t[n].location,name:t[n].name,snap:t[n].snap},n)}))})},O=function(e){return Object(f.jsx)("div",{className:"pa2",children:Object(f.jsx)("input",{className:"pa3  ba ",type:"search",placeholder:"Search ",onChange:e.searchChange})})},g=n(253);function x(){return Object(f.jsx)("div",{children:Object(f.jsx)(g.a,{href:"/new",target:"_blank",variant:"contained",disableElevation:!0,children:"Add New IP Cam"})})}n(237);var C={fpsLimit:50,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:70},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0},y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mongodb-tutorial-app.herokuapp.com/cameras/cam/").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(f.jsx)("h1",{children:"Loading"}):Object(f.jsxs)("div",{className:"tc",children:[Object(f.jsx)(d.a,{className:"particles",options:C}),Object(f.jsx)("h1",{className:"f1",children:"IPCam Viewer"}),Object(f.jsx)(O,{searchChange:this.onSearchChange}),Object(f.jsx)(x,{}),Object(f.jsx)("scroll",{children:Object(f.jsx)(v,{robots:t})})]})}}]),n}(a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};n(238);r.a.render(Object(f.jsx)(y,{}),document.getElementById("root")),w()},61:function(e,t,n){}},[[239,1,2]]]);
//# sourceMappingURL=main.51ea16c1.chunk.js.map