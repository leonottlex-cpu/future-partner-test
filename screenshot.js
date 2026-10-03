shareBtn.onclick=async()=>{
  if(typeof html2canvas==='undefined'){toast('截图组件尚未加载，请联网后再试一次');return}
  const button=shareBtn;button.disabled=true;button.innerHTML='正在生成截图 <span>…</span>';
  try{
    if(document.fonts?.ready) await document.fonts.ready;
    const canvas=await html2canvas(document.getElementById('resultScreen'),{backgroundColor:'#f7f3ee',scale:2,useCORS:true,logging:false,windowWidth:document.documentElement.scrollWidth});
    const link=document.createElement('a');link.download=`恋爱人格结果-${document.getElementById('resultName').textContent}.png`;link.href=canvas.toDataURL('image/png');link.click();toast('结果截图已保存');
  }catch(e){toast('截图失败，请稍后再试')}
  button.disabled=false;button.innerHTML='保存结果截图 <span>↗</span>';
};
