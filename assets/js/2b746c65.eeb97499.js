"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[317],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return u}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),N=l(t),u=s,k=N["".concat(p,".").concat(u)]||N[u]||c[u]||i;return t?n.createElement(k,r(r({ref:a},o),{},{components:t})):n.createElement(k,r({ref:a},o))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=N;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,r[1]=m;for(var l=2;l<i;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},27:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return c}});var n=t(7462),s=t(3366),i=(t(7294),t(3905)),r=["components"],m={sidebar_position:2},p="Fibonacci numbers",l={unversionedId:"walkthroughs/fibonacci",id:"walkthroughs/fibonacci",title:"Fibonacci numbers",description:"In this example, we will look into specifying an efficient implementation of a",source:"@site/docs/walkthroughs/fibonacci.md",sourceDirName:"walkthroughs",slug:"/walkthroughs/fibonacci",permalink:"/gospel/walkthroughs/fibonacci",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/gospel/walkthroughs/introduction"},next:{title:"Mutable queues",permalink:"/gospel/walkthroughs/mutable-queue"}},o={},c=[{value:"The problem",id:"the-problem",level:2},{value:"A simple contract",id:"a-simple-contract",level:2},{value:"Simplifying using a ghost argument",id:"simplifying-using-a-ghost-argument",level:2}],N={toc:c};function u(e){var a=e.components,t=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fibonacci-numbers"},"Fibonacci numbers"),(0,i.kt)("p",null,"In this example, we will look into specifying an efficient implementation of a\nfunction computing Fibonacci numbers. This example is adapted from the article\n",(0,i.kt)("em",{parentName:"p"},"The Spirit of Ghost Code"),(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("h2",{id:"the-problem"},"The problem"),(0,i.kt)("p",null,"Recall that ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fibonacci_number"},"Fibonacci numbers"),"\nare defined as follows:"),(0,i.kt)("div",{className:"math math-display"},(0,i.kt)("span",{parentName:"div",className:"katex-display"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msub"},"F"),(0,i.kt)("mn",{parentName:"msub"},"0")),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mn",{parentName:"mrow"},"0"),(0,i.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msub"},"F"),(0,i.kt)("mn",{parentName:"msub"},"1")),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("mspace",{parentName:"mrow",linebreak:"newline"}),(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msub"},"F"),(0,i.kt)("mi",{parentName:"msub"},"i")),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msub"},"F"),(0,i.kt)("mrow",{parentName:"msub"},(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mo",{parentName:"mrow"},"\u2212"),(0,i.kt)("mn",{parentName:"mrow"},"1"))),(0,i.kt)("mo",{parentName:"mrow"},"+"),(0,i.kt)("msub",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msub"},"F"),(0,i.kt)("mrow",{parentName:"msub"},(0,i.kt)("mi",{parentName:"mrow"},"i"),(0,i.kt)("mo",{parentName:"mrow"},"\u2212"),(0,i.kt)("mn",{parentName:"mrow"},"2")))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F_0 = 0\\\\ F_1 = 1\\\\ F_i = F_{i-1} + F_{i-2}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,i.kt)("span",{parentName:"span"})))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"0")),(0,i.kt)("span",{parentName:"span",className:"mspace newline"}),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,i.kt)("span",{parentName:"span"})))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1")),(0,i.kt)("span",{parentName:"span",className:"mspace newline"}),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,i.kt)("span",{parentName:"span"})))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8917em",verticalAlign:"-0.2083em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,i.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"1"))))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2083em"}},(0,i.kt)("span",{parentName:"span"})))))),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8917em",verticalAlign:"-0.2083em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,i.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))),(0,i.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2083em"}},(0,i.kt)("span",{parentName:"span"}))))))))))),(0,i.kt)("p",null,"To begin with, let us introduce this definition into the Gospel world, using an\nuninterpreted logical function along with an axiom defining it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"(*@ function fibonacci (n: integer) : integer *)\n(*@ axiom A: \n         fibonacci 0 = 0\n      /\\ fibonacci 1 = 1\n      /\\ forall n. n >= 2 -> fibonacci n = fibonacci (n-1) + fibonacci (n-2) *) \n")),(0,i.kt)("p",null,"Here is an implementation of such a function. When ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," are two\nconsecutive Fibonacci numbers, the following function computes the ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),"th number\nahead of ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),". Hence, ",(0,i.kt)("inlineCode",{parentName:"p"},"fib n 0 1")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),"th Fibonacci number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'let rec fib n a b =\n  if n < 0 then invalid_arg "n must be non-negative";\n  if n = 0 then a\n  else fib (n-1) b (a+b)\n')),(0,i.kt)("p",null,"Its signature is simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val fib : int -> int -> int -> int\n")),(0,i.kt)("h2",{id:"a-simple-contract"},"A simple contract"),(0,i.kt)("p",null,"Let us write a first contract for this interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val fib : int -> int -> int -> int\n(*@ r = fib n a b\n    checks n >= 0\n    requires exists i.\n               i >= 0 /\\ a = fibonacci i /\\ b = fibonacci (i+1)\n    ensures forall i.\n               i >= 0 /\\ a = fibonacci i /\\ b = fibonacci (i+1)\n               -> r = fibonacci (i+n) *)\n")),(0,i.kt)("p",null,"The contract is pretty straightforward:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first precondition states that ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," must be non-negative. Indeed, if ",(0,i.kt)("inlineCode",{parentName:"li"},"n"),"\nis negative, the function raises an exception, so this is a strong\nrequirement."),(0,i.kt)("li",{parentName:"ul"},"The second precondition states that ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," are consecutive Fibonacci numbers."),(0,i.kt)("li",{parentName:"ul"},"The postcondition specifies that if ",(0,i.kt)("inlineCode",{parentName:"li"},"a")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"i"),"th Fibonacci number, and\n",(0,i.kt)("inlineCode",{parentName:"li"},"b")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"i+1"),"th Fibonacci number, then ",(0,i.kt)("inlineCode",{parentName:"li"},"r")," (the result of the\ncomputation) is the ",(0,i.kt)("inlineCode",{parentName:"li"},"i+n"),"th Fibonacci number.")),(0,i.kt)("p",null,"Although nothing complicated is really involved in this specification, it is\nquite verbose and repetitive. The term ",(0,i.kt)("inlineCode",{parentName:"p"},"i >= 0 /\\ a = fibonacci i /\\ b =\nfibonacci (i+1)")," is repeated, and actually refers to the same value of ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),"\nin both occurrences. We can certainly do better."),(0,i.kt)("h2",{id:"simplifying-using-a-ghost-argument"},"Simplifying using a ghost argument"),(0,i.kt)("p",null,"Let us imagine for a moment that our ",(0,i.kt)("inlineCode",{parentName:"p"},"fib")," function takes an additional\nargument, ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),", representing the index of ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," in the Fibonacci sequence (the same\n",(0,i.kt)("inlineCode",{parentName:"p"},"i")," that we've been using in the specification so far). Its contract could look\nlike:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val fib : i:int -> int -> int -> int -> int\n(*@ r = fib ~i n a b\n    checks n >= 0\n    requires i >= 0 /\\ a = fibonacci i /\\ b = fibonacci (i+1)\n    ensures r = fibonacci (i+n) *)\n")),(0,i.kt)("p",null,"We do not need to quantify over ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," anymore, since it is provided to the\nfunction, but we still need to state the preconditions that apply to it (see the\nsecond clause). We do not need to repeat the previous condition on ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," either:\nif it holds in the prestate, then it also holds in the poststate, since nothing\nhere is mutable."),(0,i.kt)("p",null,"This contract is much easier to write, and more importantly, much easier to read\nand reason about. We cheated a bit though: ",(0,i.kt)("inlineCode",{parentName:"p"},"fib")," does not take this ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),"\nargument, and modifying it for the sole purpose of specification seems quite\nintrusive."),(0,i.kt)("p",null,"To overcome this issue, Gospel provides ",(0,i.kt)("em",{parentName:"p"},"ghost parameters"),". It lets you\nintroduce logical arguments (or return values) that do not exist initially, so\nyou can use them in the specifications and hopefully make them easier to\nunderstand. "),(0,i.kt)("p",null,"Thus, we can rewrite our last attempt by using this feature, and benefit from\n",(0,i.kt)("inlineCode",{parentName:"p"},"i")," being an argument without actually modifying the OCaml interface or\nimplementation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val fib : int -> int -> int -> int\n(*@ r = fib [i: integer] n a b\n    checks n >= 0\n    requires i >= 0 /\\ a = fibonacci i /\\ b = fibonacci (i+1)\n    ensures r = fibonacci (i+n) *)\n")),(0,i.kt)("p",null,"We're done! Using ghost parameters allows you to write elegant and concise\ncontracts in places that would otherwise require complex constructs and\nrepetitions."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Jean-Christophe Filli\xe2tre, L\xe9on Gondelman, Andrei Paskevich. ",(0,i.kt)("em",{parentName:"li"},"The Spirit\nof Ghost Code"),". Formal Methods in System Design, Springer Verlag, 2016, 48\n(3), pp.152-174.\n\u27e8",(0,i.kt)("a",{parentName:"li",href:"https://dx.doi.org/10.1007/s10703-016-0243-x"},"10.1007/s10703-016-0243-x"),"\u27e9.\n\u27e8",(0,i.kt)("a",{parentName:"li",href:"https://hal.archives-ouvertes.fr/hal-01396864v1"},"hal-01396864"),"\u27e9",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);