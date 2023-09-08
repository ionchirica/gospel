"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[311],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="Your first specification",s={unversionedId:"getting-started/first-spec",id:"getting-started/first-spec",title:"Your first specification",description:"Let us get started with a simple specification example, and specify a generic",source:"@site/docs/getting-started/first-spec.md",sourceDirName:"getting-started",slug:"/getting-started/first-spec",permalink:"/gospel/getting-started/first-spec",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installing Gospel",permalink:"/gospel/getting-started/installation"},next:{title:"Now what?",permalink:"/gospel/getting-started/tools"}},c={},l=[{value:"Models and invariants for <code>&#39;a t</code>",id:"models-and-invariants-for-a-t",level:2},{value:"Your first function contract: <code>create</code>",id:"your-first-function-contract-create",level:2},{value:"Simple accessors: <code>is_empty</code> and <code>mem</code>",id:"simple-accessors-is_empty-and-mem",level:2},{value:"Mutating arguments and raising exceptions",id:"mutating-arguments-and-raising-exceptions",level:2},{value:"Type-checking your specification",id:"type-checking-your-specification",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"your-first-specification"},"Your first specification"),(0,i.kt)("p",null,"Let us get started with a simple specification example, and specify a generic\ninterface for polymorphic, limited capacity containers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type 'a t\n(** The type for containers. *)\n\nexception Full\n\nval create: int -> 'a t\n(** [create capacity] is an empty container whose maximum capacity\n    is [capacity]. *)\n\nval is_empty: 'a t -> bool\n(** [is_empty t] is [true] iff [t] contains no elements. *)\n\nval clear: 'a t -> unit\n(** [clear t] removes all values in [t]. *)\n\nval add: 'a t -> 'a -> unit\n(** [add t x] adds [x] to the container [t], or raises [Full] if\n    [t] has reached its maximum capacity. *)\n\nval mem: 'a t -> 'a -> bool\n(** [mem t x] is [true] iff [t] contains [x]. *)\n")),(0,i.kt)("p",null,"Gospel specifications live in special comments, starting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," character.\nThese comments may be attached to type declarations or value declarations. They\nprovide a specification for the signature item they are attached to."),(0,i.kt)("h2",{id:"models-and-invariants-for-a-t"},"Models and invariants for ",(0,i.kt)("inlineCode",{parentName:"h2"},"'a t")),(0,i.kt)("p",null,"Let's start by specifying the abstract type ",(0,i.kt)("inlineCode",{parentName:"p"},"'a t"),". As a container with fixed\ncapacity, we can model it with two pieces of information: a fixed integer\ncapacity, and a set of ",(0,i.kt)("inlineCode",{parentName:"p"},"'a")," values, representing its contents. Note that the\ncapacity is not mutable, while the contents are. This logical model of\nthe container directly translates into Gospel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type 'a t\n(** The type for containers. *)\n(*@ model capacity: int\n    mutable model contents: 'a set *)\n")),(0,i.kt)("p",null,"Notice that documentation comments and Gospel specifications can coexist and\noften even help understand each other! However, for the sake of brevity, we will\nomit docstrings in the rest of this section."),(0,i.kt)("p",null,"One may also note that the capacity must be positive and that the number of values\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"contents")," set may not exceed ",(0,i.kt)("inlineCode",{parentName:"p"},"capacity"),". Those are type invariants:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type 'a t\n(*@ model capacity: int\n    mutable model contents: 'a set\n    with t\n    invariant t.capacity > 0\n    invariant Set.cardinal t.contents <= t.capacity *)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," module is part of the ",(0,i.kt)("a",{parentName:"p",href:"../stdlib"},"Gospel standard library"),". Although it\ntries to mimic familiar interfaces from the OCaml standard library, those two\nshould not be confused: only logical declarations can appear in specifications!"),(0,i.kt)("p",null,"Now that we annotated our type with its models and invariants, we can attach\nspecifications to the functions to show how they interact with the container."),(0,i.kt)("h2",{id:"your-first-function-contract-create"},"Your first function contract: ",(0,i.kt)("inlineCode",{parentName:"h2"},"create")),(0,i.kt)("p",null,"The function ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," returns a container when provided a capacity. We may want\nto specify three pieces of information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The provided capacity is positive."),(0,i.kt)("li",{parentName:"ul"},"The capacity of the returned container is indeed the one received as an\nargument."),(0,i.kt)("li",{parentName:"ul"},"The container is empty.")),(0,i.kt)("p",null,"Let's write a Gospel formalisation of that contract. The contract starts with a\nheader that lets us name the arguments and return value (we will call the\nargument ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," and the return value ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),") to mention them in the rest of the\nspecification. The first property is a pre-condition of the function (we use the\nkeyword ",(0,i.kt)("inlineCode",{parentName:"p"},"requires"),"), while the second and third ones are post-conditions (the\nkeyword is ",(0,i.kt)("inlineCode",{parentName:"p"},"ensures"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val create: int -> 'a t\n(*@ t = create c\n    requires c > 0\n    ensures t.capacity = c\n    ensures t.contents = Set.empty *)\n")),(0,i.kt)("h2",{id:"simple-accessors-is_empty-and-mem"},"Simple accessors: ",(0,i.kt)("inlineCode",{parentName:"h2"},"is_empty")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"mem")),(0,i.kt)("p",null,"Now on to ",(0,i.kt)("inlineCode",{parentName:"p"},"is_empty")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mem"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"is_empty t")," is true if and only if ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," is empty; this is a post-condition. This\nfunction also (hopefully) has no side-effect: it does not modify ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", does not\ndepend on any internal state, and does not raise exceptions. In Gospel's\nlanguage, this function is ",(0,i.kt)("em",{parentName:"p"},"pure"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val is_empty: 'a t -> bool\n(*@ b = is_empty t\n    pure\n    ensures b <-> t.contents = Set.empty *)\n")),(0,i.kt)("p",null,"The specification for ",(0,i.kt)("inlineCode",{parentName:"p"},"mem")," is similar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val mem: 'a t -> 'a -> bool\n(*@ b = mem t x\n    pure\n    ensures b <-> Set.mem x t.contents *)\n")),(0,i.kt)("h2",{id:"mutating-arguments-and-raising-exceptions"},"Mutating arguments and raising exceptions"),(0,i.kt)("p",null,"Finally, let us specify ",(0,i.kt)("inlineCode",{parentName:"p"},"clear")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", which are functions that mutate the\ncontainer."),(0,i.kt)("p",null,"The function ",(0,i.kt)("inlineCode",{parentName:"p"},"clear")," removes all elements from its argument: it is empty after the\ncall. Obviously, it modifies the ",(0,i.kt)("inlineCode",{parentName:"p"},"contents")," model of its argument. After its\nexecution, the container should be empty. Note that we are only allowed to\nmention ",(0,i.kt)("inlineCode",{parentName:"p"},"is_empty")," in the specification because it is a pure function;\nattempting to use a non-pure OCaml function in a specification will result in a\nGospel error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val clear: 'a t -> unit\n(*@ clear t\n    modifies t.contents\n    ensures is_empty t *)\n")),(0,i.kt)("p",null,"A first attempt at specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," is similar to the previous examples. We use\nGospel's ",(0,i.kt)("inlineCode",{parentName:"p"},"old")," primitive to refer to the state of the container prior to the\nfunction execution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"val add: 'a t -> 'a -> unit\n(*@ add t x\n    modifies t.contents\n    ensures t.contents = Set.add x (old t.contents) *)\n")),(0,i.kt)("p",null,"Notice, however, that this specification is incomplete. Indeed, one specificity\nof this function is that it can raise ",(0,i.kt)("inlineCode",{parentName:"p"},"Full"),". Let us complete that contract with\nthis piece of information. If ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," raises ",(0,i.kt)("inlineCode",{parentName:"p"},"Full"),", we can deduce that ",(0,i.kt)("inlineCode",{parentName:"p"},"t.contents"),"\nalready contains ",(0,i.kt)("inlineCode",{parentName:"p"},"t.capacity")," elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"exception Full\nval add: 'a t -> 'a -> unit\n(*@ add t x\n    modifies t.contents\n    ensures t.contents = Set.add x (old t.contents)\n    raises Full -> Set.cardinal (old t.contents) = t.capacity\n                /\\ t.contents = old t.contents *)\n")),(0,i.kt)("p",null,"Since we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"modifies")," clause, the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," may be mutated even when\n",(0,i.kt)("inlineCode",{parentName:"p"},"Full")," is raised. The last line of specification forbids such a behavior."),(0,i.kt)("p",null,"Notice how we did not need to repeat that ",(0,i.kt)("inlineCode",{parentName:"p"},"S.cardinal t.contents <= t.capacity"),"\nin every contract; as a type invariant, this property implicitly holds in every\nfunction's pre-state and post-state."),(0,i.kt)("h2",{id:"type-checking-your-specification"},"Type-checking your specification"),(0,i.kt)("p",null,"We're done! Our module interface is fully specified, independently of any\nimplementation. The full example is available in\n",(0,i.kt)("a",{target:"_blank",href:n(8870).Z},"container.mli")," in case you want to play with it.\nLet's finish by verifying that these are well-typed, and call Gospel's\ntype-checker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ gospel check ./container.mli\nOK\n")))}d.isMDXComponent=!0},8870:function(e,t,n){t.Z=n.p+"assets/files/container-ed0b215e06012568c6d7892aae309f83.mli"}}]);