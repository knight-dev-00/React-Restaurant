(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{118:function(e,s,t){},180:function(e,s,t){},183:function(e,s,t){"use strict";t.r(s);var n=t(2),r=t.n(n),a=t(22),c=t.n(a),o=(t(117),t(118),t(23)),i=t(24),l=t(26),d=t(25),j=t(7),u=t(112),h=t(27),m=t(184),b=t(185),O=t(186),f=t(187),p=t(188),g=t(189),x=t(190),v=t(213),N=t(214),y=t(191),M=t(192),w=t(212),E=t(193),k=t(194),S=t(195),L=t(196),F=t(197),C=t(198),T=t(107),A=t(11),D=t(0),R=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).state={isNavOpen:!1,isModalOpen:!1,isMenuOpen:!1},n.toggleNav=n.toggleNav.bind(Object(h.a)(n)),n.toggleModal=n.toggleModal.bind(Object(h.a)(n)),n.toggleMenu=n.toggleMenu.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.onMouseEnter=n.onMouseEnter.bind(Object(h.a)(n)),n.onMouseLeave=n.onMouseLeave.bind(Object(h.a)(n)),n}return Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"toggleMenu",value:function(){this.setState({isMenuOpen:!this.state.isMenuOpen})}},{key:"onMouseEnter",value:function(){this.setState({isMenuOpen:!0})}},{key:"onMouseLeave",value:function(){this.setState({isMenuOpen:!1})}},{key:"handleSubmit",value:function(e){this.props.loginReq({username:this.username.value,password:this.password.value}),this.toggleModal(),e.preventDefault()}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(m.a,{dark:!0,expand:"md",children:Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(b.a,{onClick:this.toggleNav}),Object(D.jsx)(O.a,{className:"mr-auto",href:"/",children:Object(D.jsx)("img",{src:"/images/logo.jpg",height:"30",weight:"41",alt:"La Ratatouille"})}),Object(D.jsxs)(f.a,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(D.jsxs)(p.a,{navbar:!0,children:[Object(D.jsx)(g.a,{children:Object(D.jsxs)(A.c,{className:"nav-link",to:"/home",children:[Object(D.jsx)("span",{className:"fa fa-home fa-lg"}),"Home"]})}),Object(D.jsx)(g.a,{children:Object(D.jsxs)(A.c,{className:"nav-link",to:"/aboutus",children:[Object(D.jsx)("span",{className:"fa fa-info fa-lg"}),"About Us"]})}),Object(D.jsx)(g.a,{children:Object(D.jsxs)(A.c,{className:"nav-link",to:"/menu",children:[Object(D.jsx)("span",{className:"fa fa-list fa-lg"}),"Menu"]})}),Object(D.jsx)(g.a,{children:Object(D.jsxs)(A.c,{className:"nav-link",to:"/contactus",children:[Object(D.jsx)("span",{className:"fa fa-address-card fa-lg"}),"Contact Us"]})})]}),Object(D.jsx)(p.a,{className:"ml-auto",navbar:!0,children:Object(D.jsx)(g.a,{children:sessionStorage.firstname?Object(D.jsxs)(x.a,{onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.isMenuOpen,toggle:this.toggleMenu,children:[Object(D.jsxs)(v.a,{outline:!0,to:"/profile",children:[Object(D.jsx)("span",{className:"fa fa-address-book"})," ",sessionStorage.firstname]}),Object(D.jsxs)(N.a,{children:[Object(D.jsx)(A.c,{to:"/profile/favourites",children:Object(D.jsxs)(y.a,{children:[Object(D.jsx)("span",{className:"fa fa-heart fa-lg"})," Favourites"]})}),Object(D.jsxs)(y.a,{onClick:this.props.logoutReq,children:[Object(D.jsx)("span",{className:"fa fa-sign-out fa-lg"})," Logout"]})]})]}):Object(D.jsxs)(x.a,{onMouseOver:this.onMouseEnter,onMouseLeave:this.onMouseLeave,isOpen:this.state.isMenuOpen,toggle:this.toggleMenu,children:[Object(D.jsxs)(v.a,{outline:!0,onClick:this.toggleModal,children:[Object(D.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login",this.props.user.logging?Object(D.jsx)("span",{className:"fa fa-spinner fa-pulse fa-fw"}):null]}),Object(D.jsx)(N.a,{children:Object(D.jsxs)(y.a,{children:[Object(D.jsx)("span",{className:"fa fa-sign-up fa-lg"})," Signup",this.props.user.signing?Object(D.jsx)("span",{className:"fa fa-spinner fa-pulse fa-fw"}):null]})})]})})})]})]})}),Object(D.jsx)(M.a,{children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row row-header",children:Object(D.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(D.jsx)("h1",{children:"La Ratatouille"}),Object(D.jsx)("p",{children:"Anyone can cook, but only the fearless can be great!"})]})})})}),Object(D.jsxs)(w.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(D.jsx)(E.a,{toggle:this.toggleModal,children:"Login"}),Object(D.jsx)(k.a,{children:Object(D.jsxs)(S.a,{onSubmit:this.handleSubmit,children:[Object(D.jsx)(L.a,{children:Object(D.jsxs)(F.a,{children:["Username",Object(D.jsx)(C.a,{type:"text",name:"username",innerRef:function(s){return e.username=s}})]})}),Object(D.jsx)(L.a,{children:Object(D.jsxs)(F.a,{children:["Password",Object(D.jsx)(C.a,{type:"password",name:"password",innerRef:function(s){return e.password=s}})]})}),Object(D.jsx)(L.a,{children:Object(D.jsx)(T.a,{type:"submit",value:"submit",color:"primary",children:"Login"})})]})})]})]})}}]),t}(n.Component),I=t(199),_=t(200),q=t(201),P=t(202),U=t(203),G=t(204),H=function(){return Object(D.jsx)("div",{className:"col-12",children:Object(D.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x text-primary"})})};function z(e){var s=e.dish;e.onClick;return Object(D.jsx)(I.a,{children:Object(D.jsxs)(A.b,{to:"/menu/".concat(s._id),children:[Object(D.jsx)(_.a,{src:s.image,alt:s.name}),Object(D.jsx)(q.a,{body:!0,className:"ml-5",children:Object(D.jsx)(P.a,{heading:!0,children:s.name})})]})})}var B=function(e){var s=e.dishes.dishes.map((function(e){return Object(D.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(D.jsx)(z,{dish:e})},e._id)}));return e.dishes.isLoading?Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsx)(H,{})})}):e.dishes.errMess?Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsx)("h4",{children:e.dishes.errMess})})}):Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)(U.a,{className:"col-2",children:[Object(D.jsx)(G.a,{children:Object(D.jsx)(A.b,{to:"/home",children:"Home"})}),Object(D.jsx)(G.a,{active:!0,children:"Menu"})]})}),Object(D.jsx)("div",{className:"row",children:s})]})},J=t(205),Y=t(206),Q=t(207),V=t(208),Z=t(14),$=t(19);function K(e){return Object(D.jsxs)("div",{className:"row",children:[Object(D.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(D.jsx)($.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(.5) translateY(-50%)"},children:Object(D.jsxs)(I.a,{children:[Object(D.jsx)(_.a,{top:!0,src:window.location.hostname+"/"+e.dish.image,alt:e.dish.name}),Object(D.jsx)(q.a,{children:Object(D.jsx)(T.a,{outline:!0,color:"primary",onClick:function(){return e.favourite?console.log("Already favourite"):e.postFavourite(e.dish._id)},children:e.favourite?Object(D.jsx)("span",{className:"fa fa-heart"}):Object(D.jsx)("span",{className:"fa fa-heart-o"})})}),Object(D.jsxs)(J.a,{children:[Object(D.jsx)(P.a,{children:e.dish.name}),Object(D.jsx)(Y.a,{children:e.dish.description})]})]})})}),Object(D.jsx)(W,{dish:e.dish,errMess:e.errMess,comments:e.comments,postComment:e.postComment})]})}var W=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=s.call.apply(s,[this].concat(r))).comments=e.props.comments.map((function(e){return console.log(e),Object(D.jsx)($.Fade,{in:!0,children:Object(D.jsxs)("li",{children:[Object(D.jsx)("p",{children:e.comment}),Object(D.jsx)("p",{children:e.author.firstname+" "+e.createdAt})]},e.id)})})),e}return Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),console.log(this.comments),this.props.errMess?Object(D.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(D.jsx)("h4",{children:this.props.errMess})}):Object(D.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(D.jsx)("h3",{children:"Comments"}),Object(D.jsx)("ul",{className:"list-unstyled",children:Object(D.jsx)($.Stagger,{in:!0,children:this.comments})}),Object(D.jsx)(X,{postComment:this.props.postComment,dish:this.props.dish})]})}}]),t}(n.Component),X=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(h.a)(n)),n}return Object(i.a)(t,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){console.log(e),this.props.postComment(this.props.dish._id,Number(e.rating),e.comment),this.toggleModal()}},{key:"render",value:function(){var e=this;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(T.a,{outline:!0,onClick:this.toggleModal,children:"Send Comment"}),Object(D.jsxs)(w.a,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(D.jsx)(E.a,{toggle:this.toggleModal,children:"Send Comment"}),Object(D.jsx)(k.a,{children:Object(D.jsxs)(Z.LocalForm,{onSubmit:function(s){return e.handleSubmit(s)},children:[Object(D.jsxs)(Q.a,{className:"form-group",children:[Object(D.jsx)(F.a,{htmlFor:"rating",md:2,children:"Rating"}),Object(D.jsx)(V.a,{md:10,children:Object(D.jsxs)(Z.Control.select,{model:".rating",name:"rating",id:"rating",className:"form-control",children:[Object(D.jsx)("option",{children:"5"}),Object(D.jsx)("option",{children:"4"}),Object(D.jsx)("option",{children:"3"}),Object(D.jsx)("option",{children:"2"}),Object(D.jsx)("option",{children:"1"})]})})]}),Object(D.jsxs)(Q.a,{className:"form-group",children:[Object(D.jsx)(F.a,{htmlFor:"comment",md:2,children:"Comment"}),Object(D.jsx)(V.a,{md:10,children:Object(D.jsx)(Z.Control.textarea,{model:".comment",name:"comment",rows:"6",id:"comment",className:"form-control"})})]}),Object(D.jsx)(Q.a,{className:"form-group",children:Object(D.jsx)(T.a,{type:"submit",value:"submit",color:"primary",children:"Send"})})]})})]})]})}}]),t}(n.Component);var ee=function(e){return e.isLoading?Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row",children:Object(D.jsx)(H,{})})}):e.errMess?void e.errMess:Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)(U.a,{className:"col-2",children:[Object(D.jsx)(G.a,{children:Object(D.jsx)(A.b,{to:"/menu",children:"Menu"})}),Object(D.jsx)(G.a,{active:!0,children:e.dish.name})]})}),Object(D.jsx)(K,{dish:e.dish,comments:e.comments,errMess:e.commentsErrMess,postComment:e.postComment,favourite:e.favourite,postFavourite:e.postFavourite}),";"]})};var se=function(e){return Object(D.jsx)("div",{className:"footer",children:Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("div",{className:"row justify-content-center",children:[Object(D.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(D.jsx)("h5",{children:"Links"}),Object(D.jsxs)("ul",{className:"list-unstyled",children:[Object(D.jsx)("li",{children:Object(D.jsx)(A.b,{to:"/home",children:"Home"})}),Object(D.jsx)("li",{children:Object(D.jsx)(A.b,{to:"/aboutus",children:"About Us"})}),Object(D.jsx)("li",{children:Object(D.jsx)(A.b,{to:"/menu",children:"Menu"})}),Object(D.jsx)("li",{children:Object(D.jsx)(A.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(D.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(D.jsx)("h5",{children:"Our Address"}),Object(D.jsxs)("address",{children:["Paris, France",Object(D.jsx)("br",{})]})]}),Object(D.jsxs)("div",{className:"col-12 col-sm-4 align-self-center",children:[Object(D.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(D.jsx)("i",{className:"fa fa-google-plus"})}),Object(D.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(D.jsx)("i",{className:"fa fa-facebook"})}),Object(D.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(D.jsx)("i",{className:"fa fa-linkedin"})}),Object(D.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(D.jsx)("i",{className:"fa fa-twitter"})}),Object(D.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(D.jsx)("i",{className:"fa fa-youtube"})}),Object(D.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(D.jsx)("i",{className:"fa fa-envelope-o"})})]})]}),Object(D.jsx)("div",{className:"row justify-content-center",children:Object(D.jsx)("div",{className:"col-auto",children:Object(D.jsx)("p",{children:"\xa9 Copyright 2018 La Ratatouille"})})})]})})},te=t(209);function ne(e){var s=e.item,t=e.isLoading,n=e.errMess;return t?Object(D.jsx)(H,{}):n?Object(D.jsx)("h4",{children:n}):Object(D.jsx)($.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(D.jsx)(I.a,{children:Object(D.jsxs)(J.a,{children:[Object(D.jsx)(_.a,{src:s.image,alt:s.name}),Object(D.jsx)(P.a,{children:s.name}),s.designation?Object(D.jsx)(te.a,{children:s.designation}):null,Object(D.jsx)(Y.a,{children:s.description})]})})})}var re=function(e){return Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"row align-items-start",children:[Object(D.jsx)("div",{className:"col-md m-1",children:Object(D.jsx)(ne,{item:e.dish,isLoading:e.dishLoading,errMess:e.dishesErrMess},e.dish)}),Object(D.jsx)("div",{className:"col-md m-1",children:Object(D.jsx)(ne,{item:e.promotion,isLoading:e.promotionLoading,errMess:e.promotionsErrMess},e.promotion)}),Object(D.jsx)("div",{className:"col-md m-1",children:Object(D.jsx)(ne,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leadersErrMess},e.leader)})]})})},ae=function(e){return e&&e.length},ce=function(e){return function(s){return!s||s.length<=e}},oe=function(e){return function(s){return!s||s.length>=e}},ie=function(e){return!isNaN(Number(e))},le=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},de=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"handleSubmit",value:function(e){console.log(JSON.stringify(e));var s={firstname:e.firstname,lastname:e.lastname,telnum:e.telnum,email:e.email,agree:e.agree,contactType:e.contactType,message:e.message,date:(new Date).toISOString()};this.props.postFeedback(s),console.log(this.props.feedback),""!==this.props.feedback.firstname&&alert(this.props.feedback),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)(U.a,{className:"col-2",children:[Object(D.jsx)(G.a,{children:Object(D.jsx)(A.b,{to:"/home",children:"Home"})}),Object(D.jsx)(G.a,{active:!0,children:"Contact Us"})]})}),Object(D.jsxs)("div",{className:"row row-content",children:[Object(D.jsx)("div",{className:"col-12",children:Object(D.jsx)("h3",{children:"Location Information"})}),Object(D.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(D.jsx)("h5",{children:"Our Address"}),Object(D.jsxs)("address",{children:["Paris, France",Object(D.jsx)("br",{}),Object(D.jsx)("i",{className:"fa fa-phone"}),": +987 6543 2100",Object(D.jsx)("br",{}),Object(D.jsx)("i",{className:"fa fa-fax"}),": +987 6543 2100",Object(D.jsx)("br",{}),Object(D.jsx)("i",{className:"fa fa-envelope"}),": ",Object(D.jsx)("a",{href:"mailto:contact@ratatouille.net",children:"contact@ratatouille.net"})]})]}),Object(D.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(D.jsx)("h5",{children:" Map of our Location"})}),Object(D.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(D.jsxs)("div",{className:"btn-group",role:"group",children:[Object(D.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(D.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(D.jsxs)("a",{role:"button",className:"btn btn-info",href:"#",children:[Object(D.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(D.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:contact@ratatouille.net",children:[Object(D.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(D.jsxs)("div",{className:"row row-content",children:[Object(D.jsx)("div",{className:"col-12",children:Object(D.jsx)("h3",{children:"Send us Your Feedback!"})}),Object(D.jsx)("div",{className:"col-12 col-md-9",children:Object(D.jsxs)(Z.Form,{model:"feedback",onSubmit:function(s){return e.handleSubmit(s)},children:[Object(D.jsxs)(Q.a,{className:"form-group",children:[Object(D.jsx)(F.a,{htmlFor:"firstname",md:2,children:"First Name"}),Object(D.jsxs)(V.a,{md:10,children:[Object(D.jsx)(Z.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ae,minLength:oe(2),maxLength:ce(15)}}),Object(D.jsx)(Z.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",maxLength:"Must be 15 characters or less",minLength:"Must be more than 1 character"}})]})]}),Object(D.jsxs)(Q.a,{className:"form-group",children:[Object(D.jsx)(F.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(D.jsxs)(V.a,{md:10,children:[Object(D.jsx)(Z.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ae,minLength:oe(2),maxLength:ce(15)}}),Object(D.jsx)(Z.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",maxLength:"Must be 15 characters or less",minLength:"Must be more than 1 character"}})]})]}),Object(D.jsxs)(Q.a,{className:"form-group",children:[Object(D.jsx)(F.a,{htmlFor:"email",md:2,children:"E-mail"}),Object(D.jsxs)(V.a,{md:10,children:[Object(D.jsx)(Z.Control.text,{model:".email",id:"email",name:"email",placeholder:"example@---.com",className:"form-control",validators:{required:ae,validEmail:le}}),Object(D.jsx)(Z.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",vaildEmail:"Must be a valid E-mail"}})]})]}),Object(D.jsxs)(Q.a,{className:"form-group",children:[Object(D.jsx)(F.a,{htmlFor:"telnum",md:2,children:"Tel. Number"}),Object(D.jsxs)(V.a,{md:10,children:[Object(D.jsx)(Z.Control.text,{model:".telnum",name:"telnum",placeholder:"123456789",validators:{required:ae,isNumber:ie}}),Object(D.jsx)(Z.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",vaildEmail:"Must be a valid E-mail"}})]})]}),Object(D.jsxs)(Q.a,{className:"form-group",children:[Object(D.jsx)(V.a,{md:{size:6,offset:2},children:Object(D.jsx)("div",{children:Object(D.jsxs)(F.a,{check:!0,children:[Object(D.jsx)("strong",{children:"May we contact you?"}),Object(D.jsx)(Z.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})]})})}),Object(D.jsx)(V.a,{md:{size:3,offset:1},children:Object(D.jsxs)(Z.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(D.jsx)("option",{children:"E-mail"}),Object(D.jsx)("option",{children:"Tel."})]})})]}),Object(D.jsxs)(Q.a,{className:"form-group",children:[Object(D.jsx)(F.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(D.jsx)(V.a,{md:10,children:Object(D.jsx)(Z.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(D.jsx)(Q.a,{className:"form-group",children:Object(D.jsx)(V.a,{md:{size:10,offset:2},children:Object(D.jsx)(T.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),t}(n.Component),je=t(210),ue=t(211),he=function(e){return e.leaders.isLoading?Object(D.jsx)(H,{}):e.leaders.errMess?Object(D.jsx)("h4",{children:e.leaders.errMess}):e.leaders.leaders.map((function(e){return Object(D.jsx)("div",{className:"row",children:Object(D.jsx)($.Fade,{in:!0,children:Object(D.jsxs)(je.a,{tag:"li",children:[Object(D.jsx)(je.a,{left:!0,middle:!0,children:Object(D.jsx)(je.a,{object:!0,src:e.image,alt:e.name})}),Object(D.jsxs)(je.a,{body:!0,className:"ml-1",children:[Object(D.jsx)(je.a,{heading:!0,children:e.name}),Object(D.jsx)("p",{children:e.designation}),Object(D.jsx)("p",{children:e.description})]})]})})},e.id)}))};var me=function(e){return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)(U.a,{className:"col-2",children:[Object(D.jsx)(G.a,{children:Object(D.jsx)(A.b,{to:"/home",children:"Home"})}),Object(D.jsx)(G.a,{active:!0,children:"About Us"})]}),Object(D.jsxs)("div",{className:"col-12",children:[Object(D.jsx)("h3",{children:"About Us"}),Object(D.jsx)("hr",{})]})]}),Object(D.jsxs)("div",{className:"row row-content",children:[Object(D.jsxs)("div",{className:"col-12 col-md-6",children:[Object(D.jsx)("h2",{children:"Our History"}),Object(D.jsx)("p",{children:"Remy, a young rat with an exceptional sense of taste and smell, dreams of becoming a chef like his idol, the late Auguste Gusteau. However, the rest of his colony, including his brother \xc9mile and his father the clan leader Django, are interested in food only for sustenance. One day, while scavenging an elderly woman's house for ingredients, Remy accidentally reveals his clan to the woman. The rats are forced to flee, and Remy is separated from the others. He winds up in the sewers and, encouraged by an imaginary Gusteau, eventually finds himself above the kitchen of Gusteau's Restaurant in Paris."}),Object(D.jsx)("p",{children:"Eventually, Skinner and the health inspector are released, and the restaurant is shut down due to health concerns, which causes Ego to lose his job and his credibility as a critic. However, Remy, Linguini and Colette open a popular new small bistro, La Ratatouille, which Ego invests in and frequently visits. The rat colony settles into the bistro's attic as their new home."})]}),Object(D.jsx)("div",{className:"col-12 col-md-5",children:Object(D.jsxs)(I.a,{children:[Object(D.jsx)(ue.a,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(D.jsx)(J.a,{children:Object(D.jsxs)("dl",{className:"row p-1",children:[Object(D.jsx)("dt",{className:"col-6",children:"Started"}),Object(D.jsx)("dd",{className:"col-6",children:"2007"}),Object(D.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(D.jsx)("dd",{className:"col-6",children:"Disney & Pixar"}),Object(D.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(D.jsx)("dd",{className:"col-6",children:"$000, 000, 000"}),Object(D.jsx)("dt",{className:"col-6",children:"Employees"}),Object(D.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(D.jsx)("div",{className:"col-12",children:Object(D.jsx)(I.a,{children:Object(D.jsx)(J.a,{className:"bg-faded",children:Object(D.jsxs)("blockquote",{className:"blockquote",children:[Object(D.jsx)("p",{className:"mb-3",children:"Anyone can cook but only the fearless will be great."}),Object(D.jsxs)("footer",{className:"blockquote-footer",children:["Auguste Gusteau",Object(D.jsx)("cite",{title:"Source Title"})]})]})})})})]}),Object(D.jsx)("div",{className:"row",children:Object(D.jsx)("div",{className:"col-12",children:Object(D.jsx)("h2",{children:"Corporate Leadership"})})}),Object(D.jsx)("div",{className:"container",children:Object(D.jsx)($.Stagger,{in:!0,children:Object(D.jsx)(je.a,{list:!0,className:"list-unstyled",children:Object(D.jsx)(he,{leaders:e.leaders})})})})]})};var be=function(e){var s;return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("div",{className:"row",children:[Object(D.jsxs)(U.a,{className:"col-2",children:[Object(D.jsx)(G.a,{children:Object(D.jsx)(A.b,{to:"/profile",children:"Profile"})}),Object(D.jsx)(G.a,{active:!0,children:"Favourites"})]}),Object(D.jsxs)("div",{className:"col-12",children:[Object(D.jsx)("h3",{children:"Favourites"}),Object(D.jsx)("hr",{})]})]}),Object(D.jsx)("div",{className:"container",children:Object(D.jsx)($.Stagger,{in:!0,children:Object(D.jsx)(je.a,{list:!0,className:"list-unstyled",children:(s=e.favourites,s.favourites.map((function(s){return Object(D.jsx)("div",{className:"row",children:Object(D.jsx)($.Fade,{in:!0,children:Object(D.jsxs)(je.a,{tag:"li",children:[Object(D.jsx)(je.a,{left:!0,middle:!0,children:Object(D.jsx)(je.a,{object:!0,src:s.image,alt:s.name})}),Object(D.jsxs)(je.a,{body:!0,className:"ml-1",children:[Object(D.jsx)(je.a,{heading:!0,children:s.name}),Object(D.jsx)("p",{children:s.description}),Object(D.jsx)(T.a,{outline:!0,color:"danger",onClick:function(){return e.deleteFavourite(s._id)},children:Object(D.jsx)("span",{className:"fa fa-times"})})]})]})})},s._id)})))})})})]})},Oe=t(13),fe=t(30),pe="ADD_COMMENT",ge="DISHES_LOADING",xe="DISHES_FAILED",ve="ADD_DISHES",Ne="ADD_COMMENTS",ye="COMMENTS_FAILED",Me="ADD_PROMOS",we="PROMOS_FAILED",Ee="PROMOS_LOADING",ke="ADD_LEADERS",Se="LEADERS_FAILED",Le="LEADERS_LOADING",Fe="ADD_FAVOURITES",Ce="FAVOURITES_FAILED",Te="FAVOURITES_LOADING",Ae="LOGIN_REQUEST",De="LOGIN_SUCCESS",Re="LOGIN_FAILED",Ie="SIGNUP_REQUEST",_e="SIGNUP_FAILED",qe="SIGNUP_SUCCESS",Pe=(sessionStorage.token,function(e,s,t){return function(n){var r={dish:e,rating:s,comment:t};return fetch("/comments",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.token},body:JSON.stringify(r)}).then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){n(function(e){return{type:pe,payload:e}}(e)),console.log(e)})).catch((function(e){console.log(e.message),alert("The comment could not get posted!\nError: "+e.message)}))}}),Ue=function(){return{type:ge}},Ge=function(e){return{type:xe,payload:e}},He=function(e){return{type:ve,payload:e}},ze=function(e){return{type:ye,payload:e}},Be=function(e){return{type:Ne,payload:e}},Je=function(){return{type:Ee}},Ye=function(e){return{type:we,payload:e}},Qe=function(e){return{type:Me,payload:e}},Ve=function(){return{type:Le}},Ze=function(e){return{type:Se,payload:e}},$e=function(e){return{type:ke,payload:e}},Ke=function(e){return{type:"ADD_FEEDBACK",payload:e}},We=function(){return{type:Te}},Xe=function(e){return{type:Ce,payload:e}},es=function(e){return{type:Fe,payload:e}},ss=function(){return{type:Ae}},ts=function(e){return{type:Re,payload:e}},ns=function(){return{type:De}},rs=function(){return{type:Ie}},as=function(e){return{type:_e,payload:e}},cs=function(){return{type:qe}},os=function(){return{type:"LOGOUT_REQUEST"}},is=function(){return{type:"LOGOUT_SUCCESS"}};console.log(sessionStorage.token);var ls=t(18),ds=["component"],js=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchPromos(),this.props.fetchComments(),this.props.fetchLeaders(),sessionStorage.token&&this.props.fetchFavourites()}},{key:"render",value:function(){var e=this,s=function(e){var s=e.component,t=Object(u.a)(e,ds);return Object(D.jsx)(Oe.b,Object(j.a)(Object(j.a)({},t),{},{render:function(e){return sessionStorage.token?Object(D.jsx)(s,Object(j.a)({},e)):Object(D.jsx)(Oe.a,{to:{pathname:"/home",state:{from:e.location}}})}}))};return Object(D.jsxs)("div",{children:[Object(D.jsx)(R,{loginReq:this.props.loginReq,signupReq:this.props.signupReq,user:this.props.user,logoutReq:this.props.logoutReq}),Object(D.jsx)(ls.TransitionGroup,{children:Object(D.jsx)(ls.CSSTransition,{classNames:"page",timeout:300,children:Object(D.jsxs)(Oe.d,{children:[Object(D.jsx)(Oe.b,{path:"/home",component:function(){return Object(D.jsx)(re,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promos.promos.filter((function(e){return e.featured}))[0],promotionLoading:e.props.promos.isLoading,promotionsErrMess:e.props.promos.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(D.jsx)(s,{exact:!0,path:"/profile/favourites",component:function(){return Object(D.jsx)(be,{favourites:e.props.favourites,deleteFavourite:e.props.deleteFavourite})}}),Object(D.jsx)(Oe.b,{path:"/contactus",component:function(){return Object(D.jsx)(de,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback,feedback:e.props.feedback})}}),Object(D.jsx)(Oe.b,{path:"/aboutus",component:function(){return Object(D.jsx)(me,{leaders:e.props.leaders})}}),Object(D.jsx)(Oe.b,{exact:!0,path:"/menu",component:function(){return Object(D.jsx)(B,{dishes:e.props.dishes})}}),Object(D.jsx)(Oe.b,{path:"/menu/:dishId",component:function(s){var t=s.match;return e.props.favourites.favourites?Object(D.jsx)(ee,{dish:e.props.dishes.dishes.filter((function(e){return e._id===t.params.dishId}),10)[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dish===t.params.dishId}),10),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment,favourite:e.props.favourites.favourites.some((function(e){return e._id===t.params.dishId})),postFavourite:e.props.postFavourite}):Object(D.jsx)(ee,{dish:e.props.dishes.dishes.filter((function(e){return e._id===t.params.dishId}),10)[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===t.params.dishId}),10),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment,favourite:!1,postFavourite:e.props.postFavourite})}}),Object(D.jsx)(Oe.a,{to:"/home"})]})},this.props.location.key)}),Object(D.jsx)(se,{})]})}}]),t}(n.Component),us=Object(Oe.g)(Object(fe.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promos:e.promotions,leaders:e.leaders,feedback:e.feedback,favourites:e.favourites,user:e.user}}),(function(e){return{postComment:function(s,t,n){return e(Pe(s,t,n))},postFeedback:function(s){return e(function(e){return function(s){return fetch("/feedback",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){s(Ke(e)),console.log(e)})).catch((function(e){console.log(e.message),alert("The feedback could not get posted!\nError: "+e.message)}))}}(s))},loginReq:function(s){return e(function(e){return function(s){return s(ss()),fetch("/users/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(console.log(e),e.ok)return e.json();var s=new Error("Error "+e.statusCode+": "+e.status+"\n"+e.err);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){s(ns()),sessionStorage.token=e.token,sessionStorage.firstname=e.user.firstname,sessionStorage.lastname=e.user.lastname})).catch((function(e){return s(ts(e.message))}))}}(s))},signupReq:function(s){return e(function(e){return function(s){return s(rs()),fetch("/users/signup",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.statusCode+": "+e.status+"\n"+e.err);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){s(cs()),sessionStorage.token=e.token,sessionStorage.user=e.user})).catch((function(e){return s(as(e.message))}))}}(s))},fetchDishes:function(){return e((function(e){return e(Ue(!0)),fetch("/dishes").then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(s){e(He(s))})).catch((function(s){return e(Ge(s.message))}))}))},fetchComments:function(){return e((function(e){return fetch("/comments").then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(s){return e(Be(s))})).catch((function(s){return e(ze(s.message))}))}))},fetchPromos:function(){return e((function(e){return e(Je(!0)),fetch("/promotions").then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(s){return e(Qe(s))})).catch((function(s){return e(Ye(s.message))}))}))},fetchLeaders:function(){return e((function(e){return e(Ve()),fetch("/leaders").then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(s){return e($e(s))})).catch((function(s){return e(Ze(s.message))}))}))},resetFeedbackForm:function(){return e(Z.actions.reset("feedback"))},fetchFavourites:function(){return e((function(e){return e(We(!0)),fetch("/favourites",{method:"GET",credentials:"same-origin",headers:{Authorization:"Bearer "+sessionStorage.token}}).then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(s){return e(es(s))})).catch((function(s){return e(Xe(s.message))}))}))},postFavourite:function(s){return e((t=s,function(e){var s="Bearer "+sessionStorage.token;return fetch("/favourites/"+t,{method:"POST",credentials:"same-origin",headers:{Authorization:s}}).then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(s){console.log(s),e(es(s))})).catch((function(e){console.log(e.message),alert("The dish cannot be added to favourites!\nError: "+e.message)}))}));var t},deleteFavourite:function(s){return e((t=s,function(e){var s="Bearer "+sessionStorage.token;return fetch("/favourites/"+t,{method:"DELETE",credentials:"same-origin",headers:{Authorization:s}}).then((function(e){if(e.ok)return e.json();var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(s){e(es(s))})).catch((function(e){console.log(e.message),alert("The dish cannot be removed!\nError: "+e.message)}))}));var t},logoutReq:function(){return e((function(e){e(os()),sessionStorage.token="",sessionStorage.firstname="",sessionStorage.lastname="",e(is())}))}}}))(js)),hs=(t(180),t(36)),ms=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case ve:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,errMess:null,dishes:s.payload});case ge:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case xe:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,errMess:s.payload,dishes:[]});default:return e}},bs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case Ne:return Object(j.a)(Object(j.a)({},e),{},{errMess:null,comments:s.payload});case ye:return Object(j.a)(Object(j.a)({},e),{},{errMess:s.payload,comments:[]});case pe:var t=s.payload;return Object(j.a)(Object(j.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},Os=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promos:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case Me:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,errMess:null,promos:s.payload});case Ee:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0,errMess:null,promos:[]});case we:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,errMess:s.payload,promos:[]});default:return e}},fs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case ke:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,errMess:null,leaders:s.payload});case Le:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case Se:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,errMess:s.payload,leaders:[]});default:return e}},ps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,favourites:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case Fe:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,errMess:null,favourites:s.payload});case Ce:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,errMess:s.payload,favourites:[]});case Te:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0,errMess:null,favourites:[]});default:return e}},gs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{signing:null,signupFailed:null,logging:null,logged:null,loginFailed:null,firstname:sessionStorage.firstname,lastname:sessionStorage.lastname},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case Ae:return Object(j.a)(Object(j.a)({},e),{},{signing:null,signupFailed:null,logging:!0,logged:null,loginFailed:null});case De:return Object(j.a)(Object(j.a)({},e),{},{signing:null,signupFailed:null,logging:null,logged:!0,loginFailed:null});case Re:return Object(j.a)(Object(j.a)({},e),{},{signing:null,signupFailed:null,logging:null,logged:null,loginFailed:s.payload});case Ie:return Object(j.a)(Object(j.a)({},e),{},{signing:!0,signupFailed:null,logging:null,logged:null,loginFailed:null});case qe:return Object(j.a)(Object(j.a)({},e),{},{signing:null,signupFailed:null,logging:null,logged:!0,loginFailed:null});case _e:return Object(j.a)(Object(j.a)({},e),{},{signing:null,signupFailed:s.payload,logging:null,logged:null,loginFailed:null});default:return e}},xs=t(110),vs=t(111),Ns=t.n(vs),ys={firstname:"",lastname:"",telnum:"",email:"",agree:"",contactType:"",message:""},Ms=Object(hs.createStore)(Object(hs.combineReducers)(Object(j.a)({dishes:ms,comments:bs,promotions:Os,leaders:fs,favourites:ps,user:gs},Object(Z.createForms)({feedback:ys}))),Object(hs.applyMiddleware)(xs.a,Ns.a)),ws=function(e){Object(l.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(D.jsx)(fe.Provider,{store:Ms,children:Object(D.jsx)(A.a,{children:Object(D.jsx)(us,{})})})}}]),t}(n.Component),Es=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,215)).then((function(s){var t=s.getCLS,n=s.getFID,r=s.getFCP,a=s.getLCP,c=s.getTTFB;t(e),n(e),r(e),a(e),c(e)}))};t(181),t(182);c.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(ws,{})}),document.getElementById("root")),Es()}},[[183,1,2]]]);
//# sourceMappingURL=main.ff95898e.chunk.js.map