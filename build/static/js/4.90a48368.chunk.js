(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{50:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__2F37A"}},51:function(e,t,c){e.exports={item:"CommentItem_item__3nke3"}},52:function(e,t,c){e.exports={comments:"CommentsList_comments__23Hv6"}},53:function(e,t,c){e.exports={comments:"Comments_comments__IU6XQ"}},54:function(e,t,c){e.exports={form:"NewCommentForm_form__Fc3Gi",loading:"NewCommentForm_loading__1CvwT",control:"NewCommentForm_control__3ieP1",actions:"NewCommentForm_actions__30zVz"}},56:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(50),a=c.n(o),m=c(1),r=function(e){return Object(m.jsxs)("figure",{className:a.a.quote,children:[Object(m.jsx)("p",{children:e.text}),Object(m.jsx)("figcaption",{children:e.author})]})},j=c(40),i=c(39),d=c(38),u=c(14),l=c(51),b=c.n(l),x=function(e){return Object(m.jsx)("li",{className:b.a.item,children:Object(m.jsx)("p",{children:e.text})})},O=c(52),h=c.n(O),f=function(e){return Object(m.jsx)("ul",{className:h.a.comments,children:e.comments.map((function(e){return Object(m.jsx)(x,{text:e.text},e.id)}))})},p=c(53),_=c.n(p),N=c(54),v=c.n(N),C=function(e){var t=Object(n.useRef)(),c=Object(i.a)(d.a),s=c.sendRequest,o=c.status,a=c.error,r=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||r()}),[o,a,r]);var j=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(m.jsxs)("form",{className:v.a.form,onSubmit:j,children:["pending"===o&&Object(m.jsxs)("div",{className:"centered",children:[" ",Object(m.jsx)(u.a,{})]}),Object(m.jsxs)("div",{className:v.a.control,onSubmit:j,children:[Object(m.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(m.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(m.jsx)("div",{className:v.a.actions,children:Object(m.jsx)("button",{className:"btn",children:"Add Comment"})})]})},g=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],o=t[1],a=Object(s.j)(),r=Object(i.a)(d.c),l=r.sendRequest,b=r.status,x=r.data,O=a.quoteId;Object(n.useEffect)((function(){l(O)}),[O,l]);var h,p=Object(n.useCallback)((function(){l(O)}),[l,O]);return"pending"===b&&(h=Object(m.jsxs)("div",{className:"centered",children:[" ",Object(m.jsx)(u.a,{})]})),"completed"===b&&x&&x.length>0&&(h=Object(m.jsx)(f,{comments:x})),"completed"!==b||x&&0!==x.length||(h=Object(m.jsx)("p",{className:"centered",children:"NO comments added yet"})),Object(m.jsxs)("section",{className:_.a.comments,children:[Object(m.jsx)("h2",{children:"User Comments"}),!c&&Object(m.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(m.jsx)(C,{quoteId:O,onAddedComment:p}),h]})},q=c(8);t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(i.a)(d.e,!0),o=c.sendRequest,a=c.status,j=c.data,l=c.error;return Object(n.useEffect)((function(){o(t)}),[o,t]),"pending"===a?Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(u.a,{})}):l?Object(m.jsx)("p",{className:"centered",children:l}):j.text?Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(r,{text:j.text,author:j.author}),Object(m.jsx)(s.c,{path:e.path,exact:!0,children:Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(q.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load comments"})})}),Object(m.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(m.jsx)(g,{})})]}):Object(m.jsx)("p",{children:"NO quote found"})}}}]);
//# sourceMappingURL=4.90a48368.chunk.js.map