(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5362],{41582:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/app-products",function(){return a(7639)}])},7639:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSP:function(){return b},default:function(){return _}});var n=a(85893),i=a(33478),t=a(67294),r=a(52686),l=a(81511),c=a(63750),o=a(79352),d=a(41664),p=a.n(d);a(9008);var m=a(25675),h=a.n(m),j=a(48578),x=a(81037),u=a(11358),g=a.n(u),v=a(70231),N=a(50549),w=a(11163),y=()=>{let e=(0,w.useRouter)(),[s,a]=(0,t.useState)([]),[d,m]=(0,t.useState)(1),[u,y]=(0,t.useState)(!0),[f,b]=(0,t.useState)(""),[_,P]=(0,t.useState)(""),[C,Z]=(0,t.useState)("1"),B=e=>{y(!0),(0,j.gi)({page:e,category_id:10,onSuccess:e=>{a(e.data.data),b(e.data.last_page),y(!1)},onError:e=>{console.log(e)}})};(0,t.useEffect)(()=>{},[_]),(0,t.useEffect)(()=>{B(d)},[d]);let k=e=>{let s=Math.floor(e),a=e%1!=0,i=[];for(let e=0;e<5;e++)e<s?i.push((0,n.jsx)(l.SXJ,{size:20,color:"#FFA800"},e)):a&&e===s?i.push((0,n.jsx)(c.fXH,{size:18,color:"#FFA800"},"half")):i.push((0,n.jsx)(l.SXJ,{size:20,color:"#bfc3c7"},e));return i};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{title:"App",blueText:"Products",contentOne:"Home",contentTwo:"Products",contentThree:"App Products"}),(0,n.jsx)("section",{className:"container webPro appPro",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12",children:(0,n.jsxs)("div",{className:"webProHeadingDiv",children:[u?(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(N.Z,{width:300,height:25})]}):(0,n.jsxs)("span",{className:"commonHeadlines",children:["We found ",(0,n.jsx)("span",{children:null==s?void 0:s.length})," Products"]}),(0,n.jsxs)("div",{className:"sortBy",children:[(0,n.jsx)("span",{children:"Sort By :"}),(0,n.jsxs)("select",{className:"form-select form-select-md","aria-label":".form-select-lg example",onChange:e=>{P(e.target.value),y(!0),(0,j.gi)({category_id:10,product_filter:e.target.value,onSuccess:e=>{a(e.data.data),b(e.data.last_page),y(!1)},onError:e=>{console.log(e)}})},value:_,children:[(0,n.jsx)("option",{value:"",children:"Select"}),(0,n.jsx)("option",{value:1,children:"Price: Low to High"}),(0,n.jsx)("option",{value:2,children:"Price: High to Low"}),(0,n.jsx)("option",{value:3,children:"Most Popular"})]})]})]})}),(0,n.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12",children:(0,n.jsx)("div",{className:"row cardsWrapper",children:u?Array.from({length:8}).map((e,s)=>(0,n.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3 loading_data",children:(0,n.jsx)(x.Z,{})},s)):(0,n.jsx)(n.Fragment,{children:s.map((e,s)=>{var a,i;return(0,n.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3",children:(0,n.jsx)(p(),{href:"/product-details/".concat(e.slug),target:"_blank",children:(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(h(),{height:0,width:0,loading:"lazy",alt:"product_img",className:"webProImg card-img-top",src:e.banner_image}),(0,n.jsxs)(r.Z.Body,{children:[(0,n.jsxs)("div",{className:"ratingDiv",children:[(0,n.jsxs)("span",{className:"sales",children:[e.sales," Sales"]}),"0"==e.rating?"":(0,n.jsxs)("span",{className:"rating",children:[" ",(0,n.jsx)("span",{children:k(e.rating)}),"(",e.rating,")"]})]}),(null===(a=e.name)||void 0===a?void 0:a.length)>60?(0,n.jsxs)(r.Z.Title,{children:[e.name.slice(0,50),"..."]}):(0,n.jsx)(r.Z.Title,{children:e.name}),(0,n.jsx)(r.Z.Text,{children:null===(i=e.subcategory)||void 0===i?void 0:i.name})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"cardFooter",children:[(0,n.jsxs)("div",{className:"priceDiv",children:[(0,n.jsx)("span",{children:"Price"}),(0,n.jsx)("div",{className:"productPriceWrapper",children:""===e.sale_price||null===e.sale_price?(0,n.jsxs)("span",{className:"originalPrice",children:["$",e.price]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{className:"originalPrice",style:{textDecorationLine:"line-through",fontSize:"24px",color:"#22A869"},children:["$",e.price]}),(0,n.jsxs)("span",{className:"salePrice",children:["$",e.sale_price]})]})})]}),(0,n.jsxs)("span",{className:"buyBtn",children:[" ",(0,n.jsx)("span",{children:(0,n.jsx)(o.dEZ,{})}),"Buy"]})]})]})})},e.id)})})})}),f>1&&(0,n.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-12",children:(0,n.jsx)("div",{className:"navigation-buttons",children:(0,n.jsx)(g(),{pageCount:f,pageRangeDisplayed:3,marginPagesDisplayed:1,forcePage:d-1,onPageChange:s=>{let{selected:a}=s,n=a+1;m(n),B(n),e.push("/products/app-products/page/".concat(n)),P(""),Z(n)},containerClassName:"pagination",activeClassName:"active",pageClassName:"page-item",previousLabel:(0,n.jsx)(v._HU,{color:"white",size:22}),nextLabel:(0,n.jsx)(v.H_v,{color:"white",size:22}),previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",pageLinkClassName:"page-link"})})})]})})]})},f=a(34774),b=(a(49824),a(87066),!0),_=e=>{var s,a,i,t;let{seoData:r,currentURL:l}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{title:r&&(null==r?void 0:null===(s=r.data)||void 0===s?void 0:s.title),description:r&&(null==r?void 0:null===(a=r.data)||void 0===a?void 0:a.description),keywords:r&&(null==r?void 0:null===(i=r.data)||void 0===i?void 0:i.keywords),ogImage:r&&(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.image),pathName:l}),(0,n.jsx)(y,{})]})}},33478:function(e,s,a){"use strict";var n=a(85893),i=a(41664),t=a.n(i);a(67294);var r=a(8193);s.Z=e=>{let{title:s,blueText:a,contentOne:i,contentTwo:l,contentThree:c,contentFour:o}=e;return(0,n.jsxs)("div",{className:"breadcrum",children:[(0,n.jsxs)("div",{className:"lines",children:[(0,n.jsx)("span",{className:"line1"}),(0,n.jsx)("span",{className:"line2"}),(0,n.jsx)("span",{className:"line3"}),(0,n.jsx)("span",{className:"line4"}),(0,n.jsx)("span",{className:"line5"})]}),(0,n.jsxs)("div",{className:"container breadcrumContent",children:[(0,n.jsxs)("span",{className:"mainTitle",children:[s," ",(0,n.jsx)("span",{children:a})]}),(0,n.jsxs)("div",{className:"pageName",children:[(0,n.jsx)(t(),{href:"/",children:(0,n.jsxs)("span",{children:[i," "]})}),(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(r.yci,{size:20})," "]}),"Blogs"===l?(0,n.jsx)(t(),{href:"/blogs",children:(0,n.jsxs)("span",{children:[l," "]})}):(0,n.jsx)("span",{children:l}),c&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(r.yci,{size:20})," "]}),(0,n.jsx)("span",{className:"contentUpperCase",children:c})]}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(r.yci,{size:20})," "]}),(0,n.jsx)("span",{className:"contentUpperCase",children:o})]})]})]})]})}},34774:function(e,s,a){"use strict";var n=a(85893),i=a(9008),t=a.n(i);s.Z=e=>{let{title:s,description:a,keywords:i,ogImage:r,pathName:l}=e;return(0,n.jsxs)(t(),{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{name:"name",content:s||"Best Web-APP development & Design Company in Gujrat-India"}),(0,n.jsx)("meta",{name:"description",content:a||"Grow your business with our top web developers, app developers, graphic designers and digital marketing and IT consulting services provider specialists."}),(0,n.jsx)("meta",{name:"keywords",content:i||"AppXnow, Top App Development Company in Bhuj - Kutch, Best IT Company in Bhuj, Best Software Company in Bhuj, website designing company Bhuj - Kutch - Gujarat, Top Web Development Company Bhuj - Kutch - Gujarat, Best, Web Services, Web Development, Ecommerce Website Development, Website Design Company Bhuj, Flutter App Development Company."}),(0,n.jsx)("meta",{name:"image",content:r||null}),(0,n.jsx)("meta",{property:"og:title",content:s||"Best Web-APP development & Design Company in Gujrat-India"}),(0,n.jsx)("meta",{property:"og:description",content:a||"Grow your business with our top web developers, app developers, graphic designers and digital marketing and IT consulting services provider specialists."}),(0,n.jsx)("meta",{property:"og:image",content:r||null}),(0,n.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,n.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,n.jsx)("meta",{property:"og:image:height",content:"608"}),(0,n.jsx)("meta",{property:"og:url",content:l||"AppXnow"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,n.jsx)("meta",{name:"twitter:title",content:s||"Best Web-APP development & Design Company in Gujrat-India"}),(0,n.jsx)("meta",{name:"twitter:description",content:a||"Grow your business with our top web developers, app developers, graphic designers and digital marketing and IT consulting services provider specialists."}),(0,n.jsx)("meta",{name:"twitter:image",content:r||null}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("link",{rel:"canonical",href:"".concat("https://AppXnow.in")}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"})]})}},81037:function(e,s,a){"use strict";var n=a(85893);a(67294);var i=a(52686),t=a(50549);s.Z=()=>(0,n.jsx)("div",{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(t.Z,{height:200}),(0,n.jsxs)(i.Z.Body,{children:[(0,n.jsx)("div",{className:"ratingDiv",children:(0,n.jsx)(t.Z,{width:80})}),(0,n.jsx)(t.Z,{height:20,width:60}),(0,n.jsx)(t.Z,{height:15,width:150})]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"cardFooter",children:[(0,n.jsxs)("span",{className:"priceDiv",children:[(0,n.jsx)(t.Z,{width:80}),(0,n.jsxs)("div",{className:"productPriceWrapper",children:[(0,n.jsx)(t.Z,{width:50}),(0,n.jsx)(t.Z,{width:50})]})]}),(0,n.jsx)("span",{children:(0,n.jsx)(t.Z,{width:60})})]})]})})}},function(e){e.O(0,[4774,921,9774,2888,179],function(){return e(e.s=41582)}),_N_E=e.O()}]);