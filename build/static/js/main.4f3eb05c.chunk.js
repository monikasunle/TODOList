(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(2),r=n.n(l),d=n(5),u=n(3),i=n(4),c=n(7),s=n(6),p=function(e){return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"inp"},"todoList"),a.a.createElement("input",{value:e.value,type:"text",onChange:e.onChange}),a.a.createElement("button",{onClick:e.addTodo},"\u6dfb\u52a0"))},m=function(e){var t=e.todos.filter((function(e){return!e.done})),n=e.todos.filter((function(e){return e.done}));return a.a.createElement("div",null,a.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c   ",t.length),a.a.createElement("ul",null,e.renderTodos(!1)),a.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210   ",n.length),a.a.createElement("ul",null,e.renderTodos(!0)))},f=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({inpValue:t.target.value})},e.addTodo=function(){""!=e.state.inpValue&&(e.setState({todos:[{title:e.state.inpValue,done:!1}].concat(Object(d.a)(e.state.todos))}),e.state.inpValue="")},e.delTodo=function(t){e.setState({todos:e.state.todos.filter((function(e,n){return n!=t}))})},e.toggle=function(t){var n=JSON.parse(JSON.stringify(e.state.todos));n[t].done=!n[t].done,e.setState({todos:n})},e.renderTodos=function(t){return e.state.todos.map((function(n,o){if(t==n.done)return a.a.createElement("li",null,a.a.createElement("input",{type:"checkbox",onClick:function(){return e.toggle(o)},checked:t}),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.title}}),a.a.createElement("button",{onClick:function(){return e.delTodo(o)}},"\u5220\u9664"))}))},e.state={inpValue:"",todos:[{title:"1",done:!1},{title:"2",done:!0},{title:"3",done:!0},{title:"4",done:!1}]},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){return localStorage.setItem("todos",JSON.stringify(this.state.todos)),!0}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos");e&&this.setState({todos:JSON.parse(e)})}},{key:"render",value:function(){var e=this.state,t=e.inpValue,n=e.todos;return a.a.createElement("div",null,a.a.createElement(p,{value:t,type:"text",onChange:this.handleChange,addTodo:this.addTodo}),a.a.createElement(m,{todos:n,renderTodos:this.renderTodos}))}}]),n}(o.Component);r.a.render(a.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.4f3eb05c.chunk.js.map