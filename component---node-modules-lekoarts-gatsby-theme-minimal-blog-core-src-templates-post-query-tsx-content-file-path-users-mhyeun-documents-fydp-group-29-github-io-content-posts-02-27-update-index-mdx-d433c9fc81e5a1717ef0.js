"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[548],{4765:function(e,t,n){n.d(t,{F:function(){return d},Z:function(){return u}});var a=n(7294),r=n(8733),o=n(795),i=n(3250),l=n(6799),c=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(o.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(l.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const d=e=>{var t,n,a;let{data:{post:o}}=e;return(0,r.tZ)(c.Z,{title:o.title,description:o.description?o.description:o.excerpt,image:o.banner?null===(t=o.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:o.slug,canonicalUrl:o.canonicalUrl})};function u(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),o=n(1883),i=n(3494),l=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,l.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),o=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:l="",children:c=null,canonicalUrl:m=""}=e;const s=(0,o.Z)(),{siteTitle:p,siteTitleAlt:d,siteUrl:u,siteDescription:g,siteImage:h,author:E}=s,f={title:t?t+" | "+p:d,description:n||g,url:""+u+(i||""),image:""+u+(l||h)};return a.createElement(a.Fragment,null,a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,c)}},2104:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l.F},default:function(){return c}});var a=n(7294),r=n(1151);function o(e){const t=Object.assign({p:"p"},(0,r.ah)(),e.components),{Text:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Text",!0),a.createElement(a.Fragment,null,a.createElement(n,{children:"Technical Updates - Week of Feb 27",sx:{fontSize:5,fontWeight:"bold",color:"heading"}}),"\n",a.createElement(t.p,null,"TL;DR: We had a midterm consultant meeting with Eugene. The team got a close look at the lathe that will be used for the demo."),"\n",a.createElement("br"),"\n",a.createElement(n,{children:"Mechanical Component Updates",sx:{fontSize:3,fontWeight:"bold",color:"heading"}}),"\n",a.createElement(t.p,null,"Danny is printing the 3D models. After seeing the lathe, we have decided to go down to using 2 IMUs, so only two housings will be needed."),"\n",a.createElement("br"),"\n",a.createElement("br"),"\n",a.createElement(n,{children:"Electrical Component Updates",sx:{fontSize:3,fontWeight:"bold",color:"heading"}}),"\n",a.createElement(t.p,null,"Jerry has been reaching out to the Galil support team to figure out how we can stop the lathe via the controller instead of an actuator."),"\n",a.createElement("br"),"\n",a.createElement("br"),"\n",a.createElement(n,{children:"Software Component Updates",sx:{fontSize:3,fontWeight:"bold",color:"heading"}}),"\n",a.createElement(t.p,null,"More testing is being conducted on the software side, which is almost production ready."),"\n",a.createElement(t.p,null,"Jason and Matt have looked into using GCode with the Galil controller to stop the lathe."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};var l=n(4765);function c(e){return a.createElement(l.Z,e,a.createElement(i,e))}l.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-users-mhyeun-documents-fydp-group-29-github-io-content-posts-02-27-update-index-mdx-d433c9fc81e5a1717ef0.js.map