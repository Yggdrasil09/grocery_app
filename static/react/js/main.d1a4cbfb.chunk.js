(this["webpackJsonpgrocery-app"]=this["webpackJsonpgrocery-app"]||[]).push([[0],{175:function(e,t,a){e.exports=a(360)},181:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(4),r=a.n(o),c=(a(180),a(148)),s=a(149),i=a(170),m=a(173),u=a(366),d=a(70),h=a(369),p=a(362),f=a(363),y=a(365),b=a(370),g=a(22),E=a(367),C=a(368),v=a(364),k=(a(181),u.a.TabPane),_=d.a.Option,q={labelCol:{span:4},wrapperCol:{span:12}},I={wrapperCol:{offset:4,span:12}},S=[{title:"Item",dataIndex:"item",key:"item",render:function(e){return l.a.createElement("b",null,e)}},{title:"Quantity",dataIndex:"quantity",key:"quantity"},{title:"Price",dataIndex:"price",key:"price"},{title:"Total Price",dataIndex:"totalprice",key:"totalprice"}],O=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).formRef=l.a.createRef(),e.showModal=function(){0===e.state.table.length?h.a.error("Please enter items into the cart!",3):e.setState({visible:!0})},e.handleOk=function(t){if(""===e.state.selected_canteen||0===e.state.selected_name.length||0===e.state.selected_number.length)h.a.error("Please enter all the details!",3);else if(10!==e.state.selected_number.length)h.a.error("Please enter a 10-digit phone number!");else{var a={Name:e.state.selected_name,Zone:e.state.selected_canteen,Mobile:e.state.selected_number,Order:e.state.jsonlist};console.log(a),e.setState({visible:!1},(function(){fetch("http://localhost:5000/submit-order",{method:"POST",body:JSON.stringify(a),headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}))}))}},e.handleCancel=function(t){e.setState({visible:!1})},e.onItemChange=function(t){e.setState({item:t},(function(){for(var t in console.log(e.state.item),e.state.data)for(var a in e.state.data[t])e.state.data[t][a]["Item Name"]===e.state.item&&e.setState({price:e.state.data[t][a].Price,quantity:e.state.data[t][a].Tab,itemId:e.state.data[t][a]["Item Code"]})}))},e.onAmountChange=function(t){e.setState({selected_quantity:t})},e.onFinish=function(t){e.setState({kart:e.state.kart.concat([t])},(function(){console.log(e.state.kart),e.setState({table:e.state.table.concat([{key:e.state.table.length+1,item:e.state.item,quantity:e.state.selected_quantity,price:e.state.price,totalprice:e.state.price*e.state.selected_quantity}]),jsonlist:e.state.jsonlist.concat([{item:e.state.item,quantity:e.state.quantity,price:e.state.price,code:e.state.itemId}])})}))},e.onCanteenChange=function(t){console.log(t),e.setState({selected_canteen:t})},e.onNameChange=function(t){e.setState({selected_name:t.target.value})},e.onNumberChange=function(t){e.setState({selected_number:t.target.value})},e.state={mode:"top",data:[],kart:[],item:"",price:0,quantity:0,selected_quantity:0,table:[],jsonlist:[],visible:!1,canteen_data:[],selected_canteen:"",selected_name:"",selected_number:"",itemId:""},e}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:5000/test",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t})})).catch((function(e){console.log(e)})),fetch("http://localhost:5000/trial",{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({canteen_data:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.mode.mode;return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(f.a,{xs:2,sm:2,md:2,lg:2,xl:1}),l.a.createElement(f.a,{xs:20,sm:20,md:20,lg:20,xl:22},l.a.createElement(u.a,{defaultActiveKey:"1",tabPosition:t,style:{height:"70vh"},size:"large"},Object.keys(this.state.data).map((function(t){return l.a.createElement(k,{tab:"".concat(t),key:t},l.a.createElement(y.a,Object.assign({},q,{ref:e.formRef,name:"control-ref",onFinish:e.onFinish}),l.a.createElement(y.a.Item,{name:"Item",label:"Select from list and enter the quantity",rules:[{required:!0}]},l.a.createElement(d.a,{placeholder:"Select a item",onChange:e.onItemChange,allowClear:!0},e.state.data[t].map((function(e){return l.a.createElement(_,{value:e["Item Name"],key:e["Item Name"]},e["Item Name"])})))),l.a.createElement(b.a,{className:"alert-mesg",message:"Price per unit : "+e.state.price+"/-",type:"info"}),l.a.createElement(y.a.Item,{name:"Quantity",label:"Select the quantity",rules:[{required:!0}]},l.a.createElement(d.a,{placeholder:"Select the quantity of item",onChange:e.onAmountChange,allowClear:!0},Object.keys(e.state.quantity).map((function(t){return l.a.createElement(_,{value:e.state.quantity[t],key:e.state.quantity[t]},e.state.quantity[t])})))),l.a.createElement(y.a.Item,I,l.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit"),l.a.createElement(g.a,{className:"checkout_but",htmlType:"button",onClick:e.showModal},"Check Out"),l.a.createElement(E.a,{title:"Confirm your Details to place Order",visible:e.state.visible,onOk:e.handleOk,onCancel:e.handleCancel},l.a.createElement(y.a,{ref:e.formRef,name:"control-ref"},l.a.createElement(y.a.Item,{name:"Canteen",label:"Please select your desired drop point and time",rules:[{required:!0}]},l.a.createElement(d.a,{placeholder:"Select a time",onChange:e.onCanteenChange,allowClear:!0},Object.keys(e.state.canteen_data).map((function(t){return Object.keys(e.state.canteen_data[t]).map((function(a){return l.a.createElement(_,{value:t+"!"+e.state.canteen_data[t][a],key:t+e.state.canteen_data[t][a]},t+" : "+e.state.canteen_data[t][a])}))})))),l.a.createElement(y.a.Item,{name:"name",label:"Please enter your name",rules:[{required:!0}]},l.a.createElement(C.a,{onChange:e.onNameChange,placeholder:"Enter your name"})),l.a.createElement(y.a.Item,{name:"number",label:"Please enter your mobile number",rules:[{required:!0}]},l.a.createElement(C.a,{onChange:e.onNumberChange,placeholder:"Enter your mobile number"})))))))})))),l.a.createElement(f.a,{xs:2,sm:2,md:2,lg:2,xl:1})),l.a.createElement(p.a,null,l.a.createElement(f.a,{xs:2,sm:2,md:4,lg:4,xl:4}),l.a.createElement(f.a,{xs:20,sm:20,md:16,lg:16,xl:16},l.a.createElement(v.a,{columns:S,dataSource:this.state.table})),l.a.createElement(f.a,{xs:2,sm:2,md:4,lg:4,xl:4})))}}]),a}(n.Component);var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.d1a4cbfb.chunk.js.map