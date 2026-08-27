import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone, Menu, X, MoveUpRight } from 'lucide-react';
import './styles.css';

const projects = [
  {id:'01', category:'HELMET · BRAND CAMPAIGN', title:'破风者 / AERO X1', year:'2025', image:'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2400&q=88', tone:'orange'},
  {id:'02', category:'3C · PRODUCT VISUAL', title:'声场之外 / SONIC', year:'2024', image:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=2400&q=88', tone:'blue'},
  {id:'03', category:'OUTDOOR · E-COMMERCE', title:'越界而行 / RIDGE', year:'2024', image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=88', tone:'green'}
];
const skills = [
  ['01','视觉策略','从品牌心智与用户需求出发，建立统一、可延展的电商视觉语言。','VISUAL STRATEGY'],
  ['02','商业摄影','精准把控产品质感、光影与构图，让每一次呈现都更具说服力。','ART DIRECTION'],
  ['03','三维渲染','熟练运用 C4D / Octane 构建高品质产品场景与视觉资产。','3D RENDERING'],
  ['04','电商设计','深耕 3C、健身器材与户外品类，兼顾品牌表达与商业转化。','E-COMMERCE']
];
function App(){
 const [open,setOpen]=useState(false); const [time,setTime]=useState('');
 useEffect(()=>{const tick=()=>setTime(new Date().toLocaleTimeString('zh-CN',{hour12:false,hour:'2-digit',minute:'2-digit'}));tick();const t=setInterval(tick,30000);return()=>clearInterval(t)},[]);
 const go=(id)=>{document.querySelector(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 return <main>
  <section className="hero" id="top">
   <video className="hero-video" autoPlay muted loop playsInline poster={projects[0].image}><source src="https://assets.mixkit.co/videos/preview/mixkit-a-motorcyclist-riding-on-a-road-in-the-mountains-40789-large.mp4" type="video/mp4"/></video><div className="veil"/>
   <nav><button className="brand" onClick={()=>go('#top')}>ZEKAI<span>®</span></button><div className="navlinks"><button onClick={()=>go('#work')}>精选作品</button><button onClick={()=>go('#about')}>关于我</button><button onClick={()=>go('#contact')}>联系合作</button></div><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>
   {open&&<div className="mobile-nav"><button onClick={()=>go('#work')}>WORK</button><button onClick={()=>go('#about')}>ABOUT</button><button onClick={()=>go('#contact')}>CONTACT</button></div>}
   <div className="hero-copy"><p className="eyebrow">E-COMMERCE VISUAL DESIGNER · 2021—2025</p><h1>让产品<br/><i>被看见</i>。</h1><div className="hero-bottom"><p>专注于 3C、健身器材、头盔与户外用品<br/>在理性策略与感性视觉之间，创造有价值的表达。</p><button className="circle" onClick={()=>go('#work')}><ArrowDown/></button></div></div>
  </section>

  <section className="intro" id="about"><div className="section-label"><span>01</span><p>PROFILE / 个人经历</p></div><div className="intro-grid"><div className="portrait"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=88"/><span>BASED IN<br/>SHENZHEN, CN</span></div><div className="bio"><p className="kicker">你好，我是泽恺</p><h2>商业不是艺术的反面，<br/>而是设计的<span>另一种尺度。</span></h2><p className="desc">5 年电商视觉设计经验，持续服务于科技消费与户外生活方式品牌。我擅长从产品核心卖点出发，以清晰的视觉策略、精细的光影质感，打造兼具品牌审美与转化效率的商业内容。</p><div className="stats"><div><strong>05<sup>+</sup></strong><small>年 / 行业经验</small></div><div><strong>86<sup>+</sup></strong><small>个 / 完成项目</small></div><div><strong>12<sup>+</sup></strong><small>个 / 服务品牌</small></div></div><div className="quick"><a href="mailto:hello@zekai.design"><Mail/>hello@zekai.design</a><span><MapPin/>中国 · 深圳</span></div></div></div></section>

  <section className="work" id="work"><div className="section-head"><div className="section-label"><span>02</span><p>SELECTED WORK / 精选项目</p></div><h2>选择少数，<br/>做到<span>极致。</span></h2></div><div className="projects">{projects.map((p,i)=><article className={'project '+p.tone} key={p.id}><img src={p.image}/><div className="project-shade"/><div className="project-top"><span>{p.category}</span><span>{p.year}</span></div><div className="project-copy"><span>{p.id}</span><h3>{p.title}</h3><button aria-label="查看项目"><ArrowUpRight/></button></div></article>)}</div></section>

  <section className="strength"><div className="section-label"><span>03</span><p>CAPABILITIES / 个人优势</p></div><div className="strength-title"><p>设计不止是好看，<br/>更需要解决问题。</p><h2>我能为品牌<br/>提供什么？</h2></div><div className="skill-grid">{skills.map(s=><article key={s[0]}><div><span>{s[0]}</span><MoveUpRight/></div><h3>{s[1]}</h3><p>{s[2]}</p><small>{s[3]}</small></article>)}</div></section>

  <section className="render"><div className="render-bg"/><div className="render-copy"><span>03 / 3D EXPLORATION</span><h2>产品渲染<br/><i>实验室</i></h2><p>光、材质与空间的持续实验。<br/>探索产品视觉表达的更多可能。</p><button>查看渲染作品 <ArrowUpRight/></button></div><div className="render-index"><span>RENDER ARCHIVE</span><strong>24</strong><small>WORKS / 2023—2025</small></div></section>

  <footer id="contact"><div className="footer-top"><span>AVAILABLE FOR PROJECTS · 2026</span><span>LOCAL TIME · {time}</span></div><div className="footer-copy"><p>有一个好产品？</p><h2>让我们一起<br/><i>让它发光。</i></h2></div><div className="footer-bottom"><a href="mailto:hello@zekai.design">hello@zekai.design <ArrowUpRight/></a><div><a href="#">小红书</a><a href="#">站酷</a><a href="#">BEHANCE</a></div><small>© 2026 ZEKAI DESIGN. ALL RIGHTS RESERVED.</small></div></footer>
 </main>
}
createRoot(document.getElementById('root')).render(<App/>);
