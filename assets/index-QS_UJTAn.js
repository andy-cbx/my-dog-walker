import{r as n,j as r}from"./index-f-uM6b6S.js";import{a as S,s as H}from"./about-stack-02-B4kHXdw0.js";import{a as B,b as E,s as z}from"./home-ticker (8)-B99oCxRL.js";import{B as D}from"./button-H65wDxNh.js";const F="/assets/stack-01-DDvXTHdY.png",d=n.forwardRef(({name:e,value:s,placeholder:a,onChange:l,className:t},i)=>r.jsxs("div",{className:"flex w-full flex-col",children:[r.jsxs("h3",{className:"pb-1 pl-2 font-secondary text-[34px] leading-[38px]",children:[a,":"]}),r.jsx("input",{ref:i,className:"flex h-[58px] w-full rounded-[75px] border-[3px] border-input bg-input-bg pl-[20px] font-primary text-primary-red placeholder:font-light focus:border-primary-red",name:e})]})),K=n.forwardRef(({name:e,value:s,placeholder:a,onChange:l},t)=>r.jsxs("div",{className:"flex w-full flex-col",children:[r.jsxs("h3",{className:"pb-1 pl-2 font-secondary text-[34px] leading-[38px]",children:[a,":"]}),r.jsx("textarea",{ref:t,className:"flex h-[268px] w-full rounded-[50px] border-[3px] border-input bg-input-bg pl-[20px] pt-[20px] font-primary text-primary-red placeholder:font-light focus:border-primary-red",name:e})]}));class h{constructor(s=0,a="Network Error"){this.status=s,this.text=a}}const V=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,s)=>Promise.resolve(localStorage.setItem(e,s)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},o={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:V()},g=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},q=(e,s="https://api.emailjs.com")=>{if(!e)return;const a=g(e);o.publicKey=a.publicKey,o.blockHeadless=a.blockHeadless,o.storageProvider=a.storageProvider,o.blockList=a.blockList,o.limitRate=a.limitRate,o.origin=a.origin||s},k=async(e,s,a={})=>{const l=await fetch(o.origin+e,{method:"POST",headers:a,body:s}),t=await l.text(),i=new h(l.status,t);if(l.ok)return i;throw i},R=(e,s,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s||typeof s!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},M=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},_=e=>e.webdriver||!e.languages||e.languages.length===0,T=()=>new h(451,"Unavailable For Headless Browser"),O=(e,s)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof s!="string")throw"The BlockList watchVariable has to be a string"},C=e=>{var s;return!((s=e.list)!=null&&s.length)||!e.watchVariable},W=(e,s)=>e instanceof FormData?e.get(s):e[s],P=(e,s)=>{if(C(e))return!1;O(e.list,e.watchVariable);const a=W(s,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},A=()=>new h(403,"Forbidden"),Y=(e,s)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(s&&typeof s!="string")throw"The LimitRate ID has to be a non-empty string"},J=async(e,s,a)=>{const l=Number(await a.get(e)||0);return s-Date.now()+l},I=async(e,s,a)=>{if(!s.throttle||!a)return!1;Y(s.throttle,s.id);const l=s.id||e;return await J(l,s.throttle,a)>0?!0:(await a.set(l,Date.now().toString()),!1)},L=()=>new h(429,"Too Many Requests"),G=async(e,s,a,l)=>{const t=g(l),i=t.publicKey||o.publicKey,c=t.blockHeadless||o.blockHeadless,u=t.storageProvider||o.storageProvider,p={...o.blockList,...t.blockList},f={...o.limitRate,...t.limitRate};return c&&_(navigator)?Promise.reject(T()):(R(i,e,s),M(a),a&&P(p,a)?Promise.reject(A()):await I(location.pathname,f,u)?Promise.reject(L()):k("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:e,template_id:s,template_params:a}),{"Content-type":"application/json"}))},U=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},X=e=>typeof e=="string"?document.querySelector(e):e,Q=async(e,s,a,l)=>{const t=g(l),i=t.publicKey||o.publicKey,c=t.blockHeadless||o.blockHeadless,u=o.storageProvider||t.storageProvider,p={...o.blockList,...t.blockList},f={...o.limitRate,...t.limitRate};if(c&&_(navigator))return Promise.reject(T());const x=X(a);R(i,e,s),U(x);const m=new FormData(x);return P(p,m)?Promise.reject(A()):await I(location.pathname,f,u)?Promise.reject(L()):(m.append("lib_version","4.4.1"),m.append("service_id",e),m.append("template_id",s),m.append("user_id",i),k("/api/v1.0/email/send-form",m))},N={init:q,send:G,sendForm:Q,EmailJSResponseStatus:h};function Z(e){const s="service_of3kkci",a="template_2orgkkq",l="template_wn6v4ia",t="H_812tDGu7Biz_KpB";console.log(s,a,t);const i={...e,to_name:"Mireya"};N.send(s,a,i,t).then(c=>{console.log("mail sent",c)}).catch(c=>{console.log(c)}),N.send(s,l,i,t).then(c=>{console.log("mail sent",c)}).catch(c=>{console.log(c)})}const $=({label:e})=>r.jsxs("h2",{className:"px-2 font-primary text-5xl",children:[e,":"]}),b=({label:e,children:s})=>r.jsxs("div",{className:"flex w-full flex-col gap-6",children:[r.jsx($,{label:e}),s]}),te=()=>{const e={name:n.useRef(null),email:n.useRef(null),mobile:n.useRef(null),location:n.useRef(null),dogName:n.useRef(null),dogBreed:n.useRef(null),dogAge:n.useRef(null),dogIsTrained:n.useRef(null),behaviouralIssues:n.useRef(null),behaviouralExamples:n.useRef(null),interestedIn:n.useRef(null),walksPerWeek:n.useRef(null),additionalInfo:n.useRef(null)},s=()=>{var l,t,i,c,u,p,f,x,m,v,j,w,y;const a={additional_info:((l=e.additionalInfo.current)==null?void 0:l.value)??"N/A",behavioural_examples:((t=e.behaviouralExamples.current)==null?void 0:t.value)??"N/A",behavioural_issues:((i=e.behaviouralIssues.current)==null?void 0:i.value)??"N/A",dog_age:((c=e.dogAge.current)==null?void 0:c.value)??"N/A",dog_breed:((u=e.dogBreed.current)==null?void 0:u.value)??"N/A",dog_name:((p=e.dogName.current)==null?void 0:p.value)??"N/A",dog_trained:((f=e.dogIsTrained.current)==null?void 0:f.value)??"N/A",email:((x=e.email.current)==null?void 0:x.value)??"N/A",from_name:((m=e.name.current)==null?void 0:m.value)??"N/A",interested_in:((v=e.interestedIn.current)==null?void 0:v.value)??"N/A",location:((j=e.location.current)==null?void 0:j.value)??"N/A",mobile:((w=e.mobile.current)==null?void 0:w.value)??"N/A",walks_per_week:((y=e.walksPerWeek.current)==null?void 0:y.value)??"N/A"};Z(a)};return r.jsx("main",{className:"flex w-full justify-center bg-primary-blue md:pt-48",children:r.jsxs("section",{className:"relative z-[2] flex w-[1440px] flex-col gap-12 px-16 py-12 text-primary-red",children:[r.jsxs("div",{className:"flex",children:[r.jsxs("div",{className:"flex w-3/4 flex-col gap-10",children:[r.jsxs("div",{className:"flex flex-col gap-4 px-2",children:[r.jsx("h1",{className:"font-primary text-7xl ",children:"Adventure Time?"}),r.jsx("p",{className:"font-secondary text-[34px] leading-[38px]",children:"Before we set up your free meet-and-greet, we’d love to learn a little more about you and your pup. This helps us get to know your needs and make sure we’re giving you both the best possible experience!"})]}),r.jsxs(b,{label:"Your info",children:[r.jsxs("div",{className:"flex w-full gap-6",children:[r.jsx(d,{ref:e.name,name:"",className:"",placeholder:"Name"}),r.jsx(d,{ref:e.email,name:"",className:"",placeholder:"Email"})]}),r.jsxs("div",{className:"flex w-full gap-6",children:[r.jsx(d,{ref:e.mobile,name:"",className:"",placeholder:"Mobile"}),r.jsx(d,{ref:e.location,name:"",className:"",placeholder:"Location (Suburb)"})]})]}),r.jsxs(b,{label:"Your Dogo's info",children:[r.jsxs("div",{className:"flex w-full gap-6",children:[r.jsx(d,{ref:e.dogName,name:"",className:"",placeholder:"Name"}),r.jsx(d,{ref:e.dogBreed,name:"",className:"",placeholder:"Breed"})]}),r.jsxs("div",{className:"flex w-full gap-6",children:[r.jsx(d,{ref:e.dogAge,name:"",className:"",placeholder:"Age"}),r.jsx(d,{ref:e.dogIsTrained,name:"",className:"",placeholder:"Is he/she trained"})]}),r.jsxs("div",{className:"flex w-full flex-col gap-6",children:[r.jsx("h3",{className:"pb-1 pl-2 font-secondary text-[34px] leading-[38px]",children:"Any behavioural issues?"}),r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("input",{ref:e.behaviouralIssues,className:"flex h-[58px] w-[240px] rounded-[75px] border-[3px] border-input bg-input-bg pl-[20px] font-primary text-primary-red placeholder:font-light focus:border-primary-red",name:"",onChange:()=>{}}),r.jsx("h3",{className:"pb-1 pl-2 font-secondary text-[34px] leading-[38px]",children:"If yes, please give examples:"})]}),r.jsx("textarea",{ref:e.behaviouralExamples,className:"flex h-[152px] w-full rounded-[50px] border-[3px] border-input bg-input-bg pl-[20px] pt-[20px] font-primary text-primary-red placeholder:font-light focus:border-primary-red",name:""})]})]}),r.jsx(b,{label:"Enquiry Details",children:r.jsxs("div",{className:"flex gap-6",children:[r.jsx(d,{ref:e.interestedIn,name:"",className:"",placeholder:"We're interested in"}),r.jsx(d,{ref:e.walksPerWeek,name:"",className:"",placeholder:"Average walks p/w"})]})})]}),r.jsx("div",{className:"relative flex h-full flex-1 flex-col items-center pt-12",children:r.jsxs("div",{className:"absolute h-full ",children:[r.jsx("div",{className:"relative z-[1] aspect-square h-[244px] w-[227px] rotate-[-4deg] overflow-hidden rounded-[40px] border-4 border-primary-red",children:r.jsx("img",{src:S,alt:"",className:"size-full scale-110 object-cover object-[50%_60%]"})}),r.jsx("div",{className:"absolute top-0 z-[2] ml-8 mt-52 h-[248px] w-[218px] rotate-[9.31deg] overflow-hidden rounded-[40px] border-4 border-primary-red",children:r.jsx("img",{src:H,alt:"",className:"size-full scale-[1.01] object-cover"})}),r.jsx("div",{className:"absolute top-0 mt-[26rem] h-[258px] w-[256px] rotate-[-4deg] overflow-hidden rounded-[40px] border-4 border-primary-red",children:r.jsx("img",{src:F,alt:"",className:"size-full scale-[1.01] object-cover"})}),r.jsx("div",{className:"absolute bottom-0 z-[2] mb-[33rem] h-[258px] w-[224px] rotate-[6.71deg] overflow-hidden rounded-[40px] border-4 border-primary-red",children:r.jsx("img",{src:B,alt:"",className:"size-full object-cover"})}),r.jsx("div",{className:"absolute bottom-0 z-[1] mb-[16.5rem] aspect-square h-[272px] w-[248px] rotate-[-10deg] overflow-hidden rounded-[40px] border-4 border-primary-red",children:r.jsx("img",{src:E,alt:"",className:"size-full object-cover object-[50%_60%]"})}),r.jsx("div",{className:"absolute bottom-0 mb-8 h-[306px] w-[258px]  rotate-[4.64deg]  overflow-hidden rounded-[40px] border-4 border-primary-red",children:r.jsx("img",{src:z,alt:"",className:"size-full scale-[1.01] object-cover object-[50%_60%]"})})]})})]}),r.jsx("div",{className:"-mt-6",children:r.jsx(K,{ref:e.additionalInfo,name:"",className:"",placeholder:"Additional info"})}),r.jsx("div",{className:"flex justify-center",children:r.jsx(D,{label:"SEND",className:"w-[500px] rounded-[24px] border-2 border-primary-yellow bg-primary-red pb-0 font-variant font-bold text-primary-yellow shadow-xl",onClick:()=>s()})})]})})};export{te as default};
