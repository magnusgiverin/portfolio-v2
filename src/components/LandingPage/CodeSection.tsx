
// const CodeSection = () => {
//     return (
//         <section className="relative z-10 flex flex-col md:flex-row items-center justify-center px-2 py-32 bg-white gap-12 w-full">
//             <div className="font-mono md:text-sm text-neutral-600 max-w-2xl">
//                 <span>useEffect() =&gt; &#123;</span> <br />
//                 &nbsp;&nbsp;<span>const parallaxFactors = [0.05, 0.08, 0.11, ...];</span><br />
//                 &nbsp;&nbsp;<span>const handleScroll = () =&gt; &#123;</span><br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;const scrolled = window.scrollY;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;parallaxRefs.current.forEach((img, i) =&gt; &#123;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (img) &#123;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const scale = 1 + scrolled * parallaxFactors[i] * 0.001;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const centerX = window.innerWidth / 2;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const centerY = window.innerHeight / 2;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const rect = img.getBoundingClientRect();<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const imgCenterX = rect.left + rect.width / 2;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const imgCenterY = rect.top + rect.height / 2;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const dx = (centerX - imgCenterX) * parallaxFactors[i] * 0.03;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const dy = (centerY - imgCenterY) * parallaxFactors[i] * 0.03;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>img.style.transform = {`scale(\${scale}) translate(\${dx}px, \${dy}px)`};</span><br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&#125;);<br />
//                 &nbsp;&nbsp;&#125;;<br />
//                 &nbsp;&nbsp;<span>window.addEventListener(&quot;scroll&quot;, handleScroll, &#123; passive: true &#125;);</span><br />
//                 &nbsp;&nbsp;<span>return () =&gt; window.removeEventListener(&quot;scroll&quot;, handleScroll);</span><br />
//                 &#125;, []);<br />
//                 <br />
//                 <span>useEffect(() =&gt; &#123;</span><br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i &lt; 5; i++) &#123;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() =&gt; &#123;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const el = document.getElementById('hero-btn-' + i);<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (el) &#123;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el.style.opacity = '1';<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;el.style.transform = 'translateX(0)';<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;, 100 + i * 150);<br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
//                 &#125;, []);
//             </div>
//             <div className="font-mono text-sm text-neutral-600 max-w-2xl">
//                 <div className="font-mono text-sm text-neutral-700 max-w-2xl">
//                     <span>{`<div`}</span><br />
//                     &nbsp;&nbsp;<span>className=&quot;absolute inset-0 w-full h-full pointer-events-none z-0&quot;</span><br />
//                     &nbsp;&nbsp;<span>aria-hidden=&quot;true&quot;</span><br />
//                     <span>{`>`}</span><br />
//                     &nbsp;&nbsp;<span>{`<div style={{ position: "relative", width: "100%", height: "100%" }}>`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;<span>{`{[...Array(9)].map((_, i) => (`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`<Image`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`key={i}`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`ref={el => { parallaxRefs.current[i] = el; }}`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`src={\`/landscape/Layer\${9 - i}.svg\`}`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`alt=""`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`fill`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`className="object-cover"`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`priority`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`style={{`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`willChange: "transform, opacity",`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`zIndex: i + 1,`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`position: "absolute",`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`top: 0,`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`left: 0,`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`opacity: 0,`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`transform: \`translateY(\${10 + i * 10}px) scale(1.05)\`,`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`transition: \`opacity 0.8s \${(9 - i) * 0.08 + 0.2}s, transform 0.9s cubic-bezier(0,.47,.59,1) \${(9 - i) * 0.08 + 0.2}s\`,`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`}}`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`onLoadingComplete={img => {`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`img.style.opacity = "1";`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`img.style.transform = "translateY(0px) scale(1)";`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`}}`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{`/>`}</span><br />
//                     &nbsp;&nbsp;&nbsp;&nbsp;<span>{`))}`}</span><br />
//                     &nbsp;&nbsp;<span>{`</div>`}</span><br />
//                     <span>{`</div>`}</span>
//                 </div>

//             </div>
//         </section>

//     );
// }

// export default CodeSection;