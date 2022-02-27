var Y=Object.defineProperty,D=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,v=(e,t)=>{for(var o in t||(t={}))K.call(t,o)&&P(e,o,t[o]);if($)for(var o of $(t))G.call(t,o)&&P(e,o,t[o]);return e},F=(e,t)=>D(e,J(t));import{s as i,m as y,j as r,a as c,r as l,F as U,J as b,N as x,R as Q,b as V}from"./vendor.b2a85f92.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};W();const X=i(y.div)`
  background-color: var(--primary);
  display: grid;
  height: 100vh;
  place-items: center;
  position: relative;
  overflow-x: hidden;

  @media (min-width: 1680px) {
    overflow-y: hidden;
  }

  main {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    z-index: 10;
    backdrop-filter: blur(1rem);
    background: var(--glass-background);
    border: 0.1rem solid var(--white);
    box-shadow: 0 0.4rem 2rem 0 var(--shadow);
    
    @media (min-width: 1480px) {
      border-radius: 1rem;
      height: 80%;
      max-width: 60vw;
    }
  }
`,Z=i(y.div)`
  position: absolute;
  border-radius: 50%;
  background-image: linear-gradient(
    30deg,
    var(--start-gradient),
    var(--end-gradient)
  );
`;function ee(e,t){return Math.random()*(t-e)+e}const C=({initialPosition:e})=>{const o=`${ee(20,80)}rem`,n={drag:!0,style:{width:o,height:o,x:`${e.x}%`,y:`${e.y}%`},whileHover:{scale:1.1,borderRadius:"40%",rotate:"-60deg"},whileTap:{scale:.8,borderRadius:"20%",rotate:"0deg"}};return r(Z,v({},n))},te=e=>c(X,{children:[r("main",{children:e.children}),r(C,{initialPosition:{x:-150,y:-60}}),r(C,{initialPosition:{x:125,y:10}}),r(C,{initialPosition:{x:-55,y:80}})]}),L="for-the-badge",R=l.exports.createContext({});function oe({imageStyle:e,children:t}){const[o,n]=l.exports.useState(e||L);function a(s){n(s)}return r(R.Provider,{value:{imageStyle:o,saveStyle:a},children:t})}function j(){return l.exports.useContext(R)}const E={labelColor:"fff",messageColor:"0b5ef7",logoColor:"000"},B=l.exports.createContext({});function re({children:e,imageColors:t}){const[o,n]=l.exports.useState(t||E);function a(s){n(s)}return r(B.Provider,{value:{imageColors:o,saveColors:a},children:e})}function M(){return l.exports.useContext(B)}const N={label:"TS",message:"REACT",logo:"TYPESCRIPT"},_=l.exports.createContext({});function ae({children:e,imageFields:t}){const[o,n]=l.exports.useState(t||N);function a(s){n(s)}return r(_.Provider,{value:{imageFields:o,saveImageFields:a},children:e})}function w(){return l.exports.useContext(_)}const H=l.exports.createContext({}),O={imageUrl:"https://img.shields.io/static/v1?label=TYPESCRIPT&labelColor=07a0f8&message=TS&color=000000&logo=TYPESCRIPT&logoColor=ffffff&style=flat-square"};function ne({children:e,imageUrl:t}){const[o,n]=l.exports.useState(t||O);function a(s){n(s)}return r(H.Provider,{value:{imageUrl:o,saveImageUrl:a},children:e})}function q(){return l.exports.useContext(H)}const se=i.picture`
  height: 5%;
  width: 25%;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 5rem;
  }

  @media (max-width: 1480px) {
    width: 79%;
    height: 15%;
  }
`,le=()=>{const{imageColors:e}=M(),{imageFields:t}=w(),{imageStyle:o}=j(),{saveImageUrl:n}=q(),a="https://img.shields.io/static/v1?",s=`label=${t.label}`,d=`&labelColor=${e.labelColor}`,m=`&message=${t.message}`,h=`&color=${e.messageColor}`,f=`&logo=${t.logo}`,u=`&logoColor=${e.logoColor}`,A=`&style=${o}`,p=`${a}${s}${d}${m}${h}${f}${u}${A}`;return l.exports.useEffect(()=>{n({imageUrl:p})},[p]),r(se,{children:r("img",{src:p,alt:"badge"})})},ie=i.section`
  --radius: 1.2rem;
  --shadow-prop: 0 0 1.2rem var(--shadow);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1480px) {
    gap: 1rem;
  }

  /* Custom layout */
  .react-colorful {
    padding: 1rem 1.5rem;
    width: 95%;
    border-radius: var(--radius) var(--radius) 0 0;
    box-shadow: var(--shadow-prop);
  }

  .react-colorful-input {
    width: 95%;
    font-family: var(--typo);
    background-color: var(--white-transparent);
    padding: 0.4rem;
    text-align: center;
    border-radius: 0 0 var(--radius) var(--radius);
    border: none;
    box-shadow: var(--shadow-prop);
  }

  .react-colorful-input:focus {
    outline: 0.1rem solid var(--secondary-darker);
  }

  .react-colorful__saturation {
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    border-bottom: none;
  }

  .react-colorful__hue {
    order: -1;
  }

  .react-colorful__hue,
  .react-colorful__alpha {
    height: 1.4rem;
    border-radius: 0.5rem;
  }

  .react-colorful__hue-pointer,
  .react-colorful__alpha-pointer {
    width: 2rem;
    height: 2rem;
  }
`,S=i.label`
  display: block;
  text-align: center;
  font-size: 1.5rem;
  font-family: var(--typo);
  text-transform: uppercase;
  font-weight: 800;
`;function ce(e,t,o){const a=[e,t,o].map(d=>d.replace("#",""));return{labelColor:a[0],messageColor:a[1],logoColor:a[2]}}const de=()=>{const[e,t]=l.exports.useState("#07a0f8"),[o,n]=l.exports.useState("#000000"),[a,s]=l.exports.useState("#ffffff"),{saveColors:d}=M();return l.exports.useEffect(()=>{const m=ce(e,o,a);d(m)},[e,o,a]),r(U,{children:c(ie,{children:[c("div",{className:"center",children:[r(S,{htmlFor:"label-color-select",children:"Label"}),r(b,{color:e,onChange:t}),r(x,{className:"react-colorful-input",id:"label-color-select",color:e,onChange:t})]}),c("div",{className:"center",children:[r(S,{htmlFor:"message-color-select",children:"Message color"}),r(b,{color:o,onChange:n}),r(x,{className:"react-colorful-input",id:"message-color-select",color:o,onChange:n})]}),c("div",{className:"center",children:[r(S,{htmlFor:"techlogo-color-select",children:"Tech logo color"}),r(b,{color:a,onChange:s}),r(x,{className:"react-colorful-input",id:"techlogo-color-select",color:a,onChange:s})]})]})})},ue=i.button`
  min-width: 28rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 2rem;
  font-family: var(--typo);
  font-weight: 800;
  font-size: 1.5rem;
  background: var(--white-transparent);
  color: var(--secondary-darker);
  cursor: pointer;
  transition: all 200ms ease;

  :hover {
    filter: contrast(1.3);
  }

  :active {
    background: var(--secondary);
    color: var(--secondary-darker);
    filter: contrast(1);
  }
`,me=i.img`
  margin-left: 1rem;
  height: 2rem;
`,k=({children:e,src:t,alt:o,onClick:n})=>c(ue,{onClick:n,children:[e,r(me,{src:t,alt:o})]}),ge=i.section`
  margin-block: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;var he="/glass-badgic/assets/markdown.e23a3b3f.svg",fe="/glass-badgic/assets/html.c1156f27.svg",pe="/glass-badgic/assets/link.a1ddaab8.svg";function ve(e){try{navigator.clipboard.writeText(e);const t=document.createElement("textarea")}catch(t){console.log(t)}}function I(e){const t=e.replaceAll(" ","+");ve(t)}const ye=()=>{const{imageUrl:e}=q(),{imageFields:t}=w(),o=e.imageUrl,n=t.logo,a=`<img src="${o}" alt="${n}"/>`,s=`![${n}](${o})`;return c(ge,{children:[r(k,{src:he,alt:"markdown",onClick:()=>I(s),children:"Copy as Markdown image"}),r(k,{src:fe,alt:"html",onClick:()=>I(a),children:"Copy as HTML image"}),r(k,{src:pe,alt:"url",onClick:()=>I(o),children:"Copy as URL"})]})},be=i.div`
  display: flex;
  align-items: center;

  @media (max-width: 1480px) {
    flex-direction: column;
  }
`,xe=i.div`
  display: block;
`,Ce=i(y.div)`
  width: 80%;
  font-family: var(--typo);

  label {
    display: block;
    color: var(--on-primary);
    font-size: 2.5rem;
    font-weight: 700;
    margin-left: 1rem;
  }

  input {
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    border-bottom: 0.2rem solid var(--secondary) !important;
    width: 100%;
    font-size: 2rem;
    color: var(--on-secondary);
    background: var(--white-transparent);

    &:focus {
      outline: 0.1rem solid var(--secondary);
    }
  }
`,T=({name:e,onChange:t})=>c(Ce,F(v({},{initial:{y:30,opacity:0},animate:{y:0,opacity:1}}),{children:[r("label",{htmlFor:e,children:e}),r("input",{onChange:t,type:"text",id:e,name:e})]})),we=()=>{const[e,t]=l.exports.useState("TYPESCRIPT"),[o,n]=l.exports.useState("TS"),[a,s]=l.exports.useState("TYPESCRIPT"),{saveImageFields:d}=w(),m=u=>{t(u.target.value)},h=u=>{n(u.currentTarget.value)},f=u=>{s(u.currentTarget.value)};return l.exports.useEffect(()=>{d({label:e,message:o,logo:a})},[e,o,a]),c(U,{children:[r(T,{value:e,onChange:m,name:"Label"}),r(T,{value:o,onChange:h,name:"Message"}),r(T,{value:a,onChange:f,name:"Tech"})]})},Se=i.div`
  --radio-radius: 1.2rem;
  position: relative;
  height: 5rem;
  width: 5rem;
  border-radius: var(--radio-radius);
  background: var(--deactivated);
`,z=i.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--typo);
  text-transform: uppercase;
  font-weight: 800;
  color: white;
  text-align: center;
  border-radius: var(--radio-radius);
  width: 100%;
  height: 100%;
`,ke=i.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: pointer;
  :checked ~ ${z} {
    background: var(--secondary-darker);
  }
`,g=({name:e,value:t,checked:o,content:n,onChangeHandler:a})=>{const s=t.toString().trim();return c(Se,{children:[r(ke,{onChange:a,type:"radio",checked:o,id:s,name:e,value:t}),r(z,{htmlFor:s,children:n||t})]})},Ie=i.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-block: 1rem;
`,Te=()=>{const[e,t]=l.exports.useState("flat-square"),{saveStyle:o}=j();l.exports.useEffect(()=>{o(e)},[e]);const n=a=>{t(a.target.value)};return c(Ie,{children:[r(g,{onChangeHandler:n,checked:e=="plastic",name:"style-option",value:"plastic"}),r(g,{onChangeHandler:n,checked:e=="flat",name:"style-option",value:"flat"}),r(g,{onChangeHandler:n,checked:e=="flat-square",name:"style-option",value:"flat-square",content:"flat square"}),r(g,{onChangeHandler:n,checked:e=="square",name:"style-option",value:"square"}),r(g,{onChangeHandler:n,checked:e=="social",name:"style-option",value:"social"})]})};function $e(){return r(re,{imageColors:E,children:r(ae,{imageFields:N,children:r(oe,{imageStyle:L,children:r(ne,{imageUrl:O,children:c(te,{children:[r(we,{}),r(le,{}),c(be,{children:[r(de,{}),c(xe,{children:[r(Te,{}),r(ye,{})]})]})]})})})})})}Q.render(r(V.StrictMode,{children:r($e,{})}),document.getElementById("root"));
