(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"Bm/P":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var l=n("8o2o"),a=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",null,"Synopsis"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"npm ls [[<@scope>/]<pkg> ...]\n\naliases: list, la, ll\n")),Object(a.b)("h3",null,"Description"),Object(a.b)("p",null,"This command will print to stdout all the versions of packages that are\ninstalled, as well as their dependencies, in a tree-structure."),Object(a.b)("p",null,"Positional arguments are ",Object(a.b)("inlineCode",{parentName:"p"},"name@version-range")," identifiers, which will\nlimit the results to only the paths to the packages named.  Note that\nnested packages will ",Object(a.b)("em",{parentName:"p"},"also")," show the paths to the specified packages.\nFor example, running ",Object(a.b)("inlineCode",{parentName:"p"},"npm ls promzard")," in npm's source tree will show:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"    npm@6.0.0 /path/to/npm\n    └─┬ init-package-json@0.0.4\n      └── promzard@0.1.5\n")),Object(a.b)("p",null,"It will print out extraneous, missing, and invalid packages."),Object(a.b)("p",null,"If a project specifies git urls for dependencies these are shown\nin parentheses after the name@version to make it easier for users to\nrecognize potential forks of a project."),Object(a.b)("p",null,"The tree shown is the logical dependency tree, based on package\ndependencies, not the physical layout of your node_modules folder."),Object(a.b)("p",null,"When run as ",Object(a.b)("inlineCode",{parentName:"p"},"ll")," or ",Object(a.b)("inlineCode",{parentName:"p"},"la"),", it shows extended information by default."),Object(a.b)("h3",null,"Configuration"),Object(a.b)("h4",null,"json"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: false"),Object(a.b)("li",{parentName:"ul"},"Type: Boolean")),Object(a.b)("p",null,"Show information in JSON format."),Object(a.b)("h4",null,"long"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: false"),Object(a.b)("li",{parentName:"ul"},"Type: Boolean")),Object(a.b)("p",null,"Show extended information."),Object(a.b)("h4",null,"parseable"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: false"),Object(a.b)("li",{parentName:"ul"},"Type: Boolean")),Object(a.b)("p",null,"Show parseable output instead of tree view."),Object(a.b)("h4",null,"global"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Default: false"),Object(a.b)("li",{parentName:"ul"},"Type: Boolean")),Object(a.b)("p",null,"List packages in the global install prefix instead of in the current\nproject."),Object(a.b)("h4",null,"depth"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type: Int")),Object(a.b)("p",null,"Max display depth of the dependency tree."),Object(a.b)("h4",null,"prod / production"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type: Boolean"),Object(a.b)("li",{parentName:"ul"},"Default: false")),Object(a.b)("p",null,"Display only the dependency tree for packages in ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(a.b)("h4",null,"dev / development"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type: Boolean"),Object(a.b)("li",{parentName:"ul"},"Default: false")),Object(a.b)("p",null,"Display only the dependency tree for packages in ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(a.b)("h4",null,"only"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type: String")),Object(a.b)("p",null,'When "dev" or "development", is an alias to ',Object(a.b)("inlineCode",{parentName:"p"},"dev"),"."),Object(a.b)("p",null,'When "prod" or "production", is an alias to ',Object(a.b)("inlineCode",{parentName:"p"},"production"),"."),Object(a.b)("h4",null,"link"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type: Boolean"),Object(a.b)("li",{parentName:"ul"},"Default: false")),Object(a.b)("p",null,"Display only dependencies which are linked"),Object(a.b)("h4",null,"unicode"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type: Boolean"),Object(a.b)("li",{parentName:"ul"},"Default: true")),Object(a.b)("p",null,"Whether to represent the tree structure using unicode characters.\nSet it to false in order to use all-ansi output."),Object(a.b)("h3",null,"See Also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-config"},"npm config")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/npmrc"},"npmrc")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/folders"},"npm folders")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-install"},"npm install")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-link"},"npm link")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-prune"},"npm prune")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-outdated"},"npm outdated")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-update"},"npm update"))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var l=n("vOnD"),a=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),p=n("pD55"),b=n("8Aig"),u=n("ReZb"),m=n("GCVy"),s=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(a.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(a.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),j=n("/Rw0"),g=n("dVM4"),y=Object(l.f)(a.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(a.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(a.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var v=N,E=n("MfeC");function k(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var l=E.a.getVariantsForPage(e.root,n.page),o=[],i=l[0];return 0===l.length?null:(l.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(a.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(a.i,{overlay:e.overlay},r.a.createElement(a.i.Button,null,i.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},o)))}k.Menu=Object(l.f)(a.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=k,x=Object(l.f)(a.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(l.f)(a.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),D=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(l.f)(a.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,l=e.location,i=n.frontmatter,y=i.title,N=i.description,k=i.status,T=i.source,B=i.additionalContributors,W=void 0===B?[]:B,z=E.a.getVariantRoot(l.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(a.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(b.b,{location:l}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(a.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{location:l})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(a.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(a.e,null,r.a.createElement(a.e,null,r.a.createElement(a.m,{as:"h1"},y),N))),null!=z?r.a.createElement(D,null,r.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:l})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(a.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(I,null,k||T?r.a.createElement(a.k,{mb:3,alignItems:"center"},k?r.a.createElement(g.a,{status:k}):null,r.a.createElement(a.e,{mx:"auto"}),T?r.a.createElement(j.a,{href:T}):null):null,n.tableOfContents.items?r.a.createElement(a.e,{display:["block",null,"none"],mb:3},r.a.createElement(a.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(a.r,{icon:o.b,mr:2}):r.a.createElement(a.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(a.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(s.a,{editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-ls-md-14a600825ddb9b560d9f.js.map