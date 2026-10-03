const dimensions=[
  {key:'I',name:'亲密需求',low:'独立',high:'黏人'},
  {key:'E',name:'情绪表达',low:'含蓄',high:'直球'},
  {key:'C',name:'冲突处理',low:'回避',high:'正面'},
  {key:'L',name:'生活节奏',low:'规律',high:'随性'},
  {key:'R',name:'现实价值',low:'现实',high:'理想'},
  {key:'H',name:'心动机制',low:'慢热',high:'快速上头'}
];
const questions=[
 {k:'第一问 · 先认识一下你',t:'你是？',o:['帅哥','美女','外星人']},
 {k:'第二问 · 你想遇见谁',t:'你的TA是？',o:['男生','女生','外星人']},
 {k:'一 · 亲密需求',t:'如果你一天都没联系对象，你觉得最合理的解释是：',o:['对方有自己的事情，没联系很正常。','估计忙去了，晚上应该会出现。','忙可以，但总得冒个泡吧。','先别解释了，我已经开始检查手机是不是坏了。']},
 {k:'一 · 亲密需求',t:'如果你路上看到一只很可爱的狗，你更希望对象：',o:['自己看完就走了，没必要什么都分享。','晚点聊天的时候顺便提一句。','第一反应是拍下来发给你：“它好像有点像你。”','当场拍十二张，附带定位，恨不得让你远程参与遛狗。']},
 {k:'一 · 亲密需求',t:'如果你们连续几天各忙各的，对方突然发来一句：',o:['“最近有点忙，过几天见。”','“这几天事情挺多的，周末一起吃饭？”','“你这几天是不是都没怎么出现？”','“你在干嘛？你现在在干嘛？为什么五分钟前还在线？”']},
 {k:'一 · 亲密需求',t:'如果你们都有一天完整的休息时间，你更希望：',o:['各自待着，晚上再碰面。','白天各忙各的，有空再一起。','可以各玩各的，但最好待在同一个空间。','“你玩你的，我看着你玩。”']},
 {k:'二 · 情绪表达',t:'你不开心的时候，更可能：',o:['先自己消化，不太想让别人知道。','“有点烦，过会儿就好了。”','“我现在有点不爽，但不是你的问题。”','“我现在很生气。原因是你刚才那句话让我很不爽。”']},
 {k:'二 · 情绪表达',t:'如果你想对象了，你更可能：',o:['不说，自己缓过去。','找点别的话题跟对方聊。','“突然有点想你。”','“想你了，过来。”——理由都懒得编。']},
 {k:'二 · 情绪表达',t:'你收到对象送的礼物后：',o:['“谢谢。”','“你怎么突然送这个？”','嘴上说“还行”，当天晚上把包装盒都收起来。','当场把感动、开心、为什么喜欢、以后想要什么全部讲给对方听。']},
 {k:'二 · 情绪表达',t:'你状态不太好的时候，对方问：“怎么了？”',o:['“没怎么，没事。”','“就是最近有点累。”','“你要是想听我可以说，但我现在不一定想解决。”','从事情起因讲到人生观，最后问对方：“你觉得我这样是不是有问题？”']},
 {k:'三 · 冲突处理',t:'发生矛盾后，你的第一反应：',o:['先消失一会儿。现在说话容易说出一些以后需要解释的话。','先冷静一下，晚点再聊。','“我们把刚才那件事说清楚吧。”','“现在就聊，不然我今晚睡不着。”']},
 {k:'三 · 冲突处理',t:'你们吵架吵到一半，你突然说：',o:['“算了，不说了。”','“我们明天再谈吧。”','“先吃饭。饿着吵架容易把事情扩大。”','“问题还没解决，今天解决不了也得把下一步定了。”']},
 {k:'三 · 冲突处理',t:'你生气但又不想直接吵的时候，更可能：',o:['回复开始变得像客服：好的、嗯、知道了。','少说一点，等自己缓过来。','直接告诉对方哪里不舒服。','“我现在有点生气，我们把这个问题处理一下。”']},
 {k:'三 · 冲突处理',t:'一件矛盾过去以后，你通常：',o:['过去就过去了，不太想再提。','偶尔想起来，但一般不会翻旧账。','嘴上说过去了，脑子里顺手给这件事建了个文件夹。','会认真复盘：“以后遇到类似情况，我们可以怎么处理？”']},
 {k:'四 · 生活节奏',t:'周末突然多出一天完全没安排的时间，你会：',o:['提前安排好要做什么。','大概想一下，再决定。','先躺着。计划这种东西，等有需要的时候再出现。','起床后根据当天心情决定今天的人生方向。']},
 {k:'四 · 生活节奏',t:'你出门前通常：',o:['提前确认时间、路线、天气。','大概准备一下再出门。','手机、钥匙、充电宝——人齐了就出发。','出门以后才开始想：“我们今天到底去哪？”']},
 {k:'四 · 生活节奏',t:'如果你突然获得一个月假期，你最可能：',o:['做一份详细计划。','先确定几个想去的地方。','先订票，剩下的到时候再说。','“先去一个地方吧，到了以后看它把我带去哪。”']},
 {k:'四 · 生活节奏',t:'关于“早睡早起”，你的态度：',o:['作息稳定很重要。','平时尽量规律。','我有作息，只是它和地球的不太一样。','“今天几点睡”这种问题，应该交给今天的我决定。']},
 {k:'五 · 现实价值',t:'如果你突然得到一笔意外之财，你第一反应：',o:['先算清楚怎么存、怎么投资。','留一部分备用，剩下的再考虑。','先花一点庆祝，毕竟钱已经来了，不欢迎一下不礼貌。','“我要先去实现一个以前觉得很疯狂的愿望。”']},
 {k:'五 · 现实价值',t:'如果一份工作“钱很多，但很无聊”，你会：',o:['钱很多？那我可以先无聊着。','看收入和发展值不值得。','如果真的不喜欢，还是会考虑换。','“人生不能只为了钱活着。”']},
 {k:'五 · 现实价值',t:'你更羡慕哪种人的生活？',o:['张居正。','一个事业稳定、生活规律的人。','徐霞客。','陶渊明。']},
 {k:'五 · 现实价值',t:'如果你和对象为了未来选择产生分歧，你更倾向：',o:['“先算清楚现实条件，再决定。”','“现实很重要，但也得看看自己想不想。”','“如果什么都只看现实，那恋爱和开会有什么区别？”','“先去做想做的事情，后面的路走着再看。”']},
 {k:'六 · 心动机制',t:'第一次见到一个条件不错、性格也合得来的人，你会：',o:['先观察半年。半年以后如果还觉得不错，再考虑是不是喜欢。','觉得对方不错，但会慢慢接触，不急着下结论。','有明显好感，就会主动制造一些接触机会。','回家当天就开始想：孩子以后跟谁姓？']},
 {k:'六 · 心动机制',t:'如果一个人连续几次对你表现得很体贴，你的反应是：',o:['“人挺好的。”——然后继续过自己的生活。','会开始留意对方，但还需要更多时间确认。','会觉得“TA是不是对我有意思”，然后开始主动试探。','“TA是不是喜欢我？”→“我是不是也喜欢TA？”→“我们什么时候在一起？”']},
 {k:'六 · 心动机制',t:'你发现自己最近总想找某个人聊天，你会：',o:['立刻警觉：不对，我最近是不是太闲了？','意识到自己可能有点喜欢，但先继续观察。','基本确认自己有好感，开始主动靠近。','聊天记录已经从“随便聊聊”发展到“分析TA每一个标点符号为什么这么用”。']},
 {k:'六 · 心动机制',t:'如果你终于确认自己喜欢上一个人，你会：',o:['确认这件事本身可能就需要几个月，确认完以后再观察几个月。','会慢慢把对方纳入自己的生活，关系自然发展。','会明显增加主动性，想办法让关系进一步发展。','确认喜欢的同时，脑子已经自动播放到大结局，连婚礼宾客名单都差不多了。']}
];
const results={
 P1:{name:'失控的烟火',verdict:'喜欢一个人这件事，你主打一个：先上头，再了解。',desc:'你对心动没什么耐心，感觉对了就是对了。眼神对上、聊天聊嗨，甚至对方只是长在审美点上——很好，爱情已经开始了。',quote:'恋爱不是你生活的一部分，恋爱是你突然打开的后台程序。',strength:'热烈、主动、有感染力，喜欢就会让对方知道。',risk:'感情加载速度有时远快于理智加载速度。',final:'你不是容易心动，你只是给爱情开了免审通道。'},
 P2:{name:'温水里的月亮',verdict:'别人谈恋爱靠心动，你靠时间发酵。',desc:'你不太相信一见钟情，更相信见多了就顺眼。关系像养植物，不要求一天长三米，但希望别突然死了。',quote:'你不急着点燃烟花，你更想确认灯会不会一直亮。',strength:'稳定、耐心、愿意用时间建立信任。',risk:'喜欢得太慢，可能让对方误以为你只是路过。',final:'你不是没感觉，你只是把心动设置成了延迟到账。'},
 P3:{name:'不系之舟',verdict:'你喜欢恋爱，但不喜欢恋爱把你整个人收编。',desc:'你可以很喜欢一个人，但自己的时间、兴趣、朋友和生活，一个都不能少。',quote:'你需要的是对象，不是管理员。',strength:'独立、松弛、有自己的完整生活。',risk:'过度强调自由时，容易让对方找不到你的入口。',final:'你愿意一起航行，但拒绝被停靠在别人家楼下。'},
 P4:{name:'爱情审计师',verdict:'你不是不相信爱情，只是要求爱情通过可行性评审。',desc:'别人看星星，你偶尔低头看账单。你会考虑收入、距离、习惯和未来规划。',quote:'浪漫可以有，但请先证明这笔感情长期可持续。',strength:'清醒、可靠，擅长把喜欢落到生活里。',risk:'太早打开计算器，会让浪漫还没入场就被请出去。',final:'你的心动也要走流程，至少需要三份证明材料。'},
 P5:{name:'坠入深海的人',verdict:'你不是恋爱脑，你只是恋爱的时候脑子里确实有恋爱。',desc:'对象一旦进来，其他东西的音量会自动调低。开心想告诉TA，难过也想找TA。',quote:'你不是走进一段关系，你是带着潜水证直接下去了。',strength:'认真、专注、重感情，投入程度很高。',risk:'容易把“我的生活”逐渐改名成“我们的生活”。',final:'别人只是谈了个恋爱，你已经完成了情感迁居。'},
 P6:{name:'关系维修工',verdict:'别人吵架冷战，你已经开始找扳手了。',desc:'你很在意对方感受，关系出问题时第一反应不是算了，而是到底哪里出了问题。',quote:'别人谈恋爱是两个人的事，你偶尔会一个人把两个人的活都干了。',strength:'体贴、负责，擅长修补和经营关系。',risk:'对方说“我没事”，你已经在脑子里开了项目组。',final:'这段关系没有坏，只是又到了你的保养周期。'},
 P7:{name:'追逐火焰的人',verdict:'你爱得快，而且消息的优先级会突然变得非常高。',desc:'一句“想你”能让你开心半天；一个“哦”也能让你脑内播放关系危机第一季。',quote:'别人谈恋爱看天气，你谈恋爱看对方最后上线时间。',strength:'热情、敏锐，能给关系很强的情感浓度。',risk:'太需要明确回应，容易被消息气压牵着走。',final:'你不是在等回复，你是在等待宇宙给出感情判词。'},
 P8:{name:'等灯的人',verdict:'你不追求烟花，你比较希望家里的灯一直亮着。',desc:'你不轻易喜欢人，但喜欢之后希望这个人稳定地在。一起吃饭、散步、睡前聊几句，就很好。',quote:'你的爱情不是轰的一声开始，而是每天都有人为你留灯。',strength:'温柔、稳定、重视长期陪伴。',risk:'太习惯默默需要，可能忘了把需求说出来。',final:'你要的不是八点档，是每天晚上都能找到人的那盏灯。'},
 P9:{name:'偷走玫瑰就跑',verdict:'你喜欢心动的感觉，但不一定喜欢心动之后的售后服务。',desc:'暧昧时觉得好有感觉，真正确定关系后又想问是不是靠得太近。',quote:'你喜欢爱情的前半段，尤其喜欢还没开始负责的时候。',strength:'浪漫、灵动，能制造新鲜感和火花。',risk:'关系一进入日常，就容易想从现场撤退。',final:'你不是逃避爱情，你只是对售后服务过敏。'},
 P10:{name:'孤独的剑客',verdict:'你可以爱一个人，但不会把自己交出去。',desc:'你相信两个人可以各自完整，然后一起生活。不会因为恋爱就消失，也不需要时时刻刻证明爱。',quote:'我可以爱你，但我的剑还是得自己拿着。',strength:'独立、稳定，能在亲密关系中保留自我。',risk:'太过安静时，可能让对方误以为你没有那么在乎。',final:'你谈恋爱像合伙经营，而不是合并收购。'},
 P11:{name:'门后的猫',verdict:'你非常想靠近一个人，但真的靠近以后又想往后退两步。',desc:'对方冷一点，你怀疑TA不喜欢你；对方热一点，你又觉得是不是太黏。',quote:'你不来：想你。你来了：你先别过来。',strength:'感受细腻，认真对待亲密关系。',risk:'容易和自己的安全感玩拔河。',final:'你不是在谈恋爱，你在和距离本身谈判。'},
 P12:{name:'爱情海关',verdict:'别人心动的时候，你负责给爱情做背景调查。',desc:'你的心动需要经过几个部门审批：价值观、相处模式和长期发展都得观察。',quote:'你的爱情不是一见钟情，是一套严格的准入制度。',strength:'谨慎、理性，能保护自己也尊重长期关系。',risk:'审核周期太长，可能让心动旅客直接改签。',final:'请出示身份证、价值观和长期规划，缺一不可。'}
};
const rules=[
 ['P11',v=>v.I>2&&v.C<=1&&v.E<=1.5],['P7',v=>v.H>2&&v.I>2&&v.C<=1.5],['P9',v=>v.I<=1&&v.H>1.5&&v.R>1.5],['P12',v=>v.I<=1&&v.H<=1.5&&v.C<1.5&&v.R<=1.5],['P10',v=>v.I<=1&&v.H<=1.5&&v.C>=1.5],['P6',v=>v.I>1.5&&v.E>1.5&&v.C>2&&v.H<=2],['P5',v=>v.H>2&&v.E>2&&v.I>2&&v.C>1],['P1',v=>v.H>2&&v.E>2&&v.I<=2],['P8',v=>v.I>2&&v.H<=1.5&&v.C>=1.5],['P4',v=>v.R<=1&&v.H<=1.5&&v.I<=2],['P2',v=>v.I>1&&v.I<=2&&v.H<=1.5&&v.R>1.5]
];
let answers=[],current=0;
const $=id=>document.getElementById(id);
function show(id){['startScreen','quizScreen','resultScreen'].forEach(x=>$(x).classList.toggle('hidden',x!==id))}
function renderQuestion(){const q=questions[current];$('progressText').textContent=`${current+1} / ${questions.length}`;$('progressBar').style.width=`${((current+1)/questions.length)*100}%`;$('questionKicker').textContent=q.k;$('questionText').textContent=q.t;$('backBtn').disabled=current===0;$('optionList').innerHTML=q.o.map((o,i)=>`<button class="option ${answers[current]===i?'selected':''}" data-i="${i}"><b>${String.fromCharCode(65+i)}</b>${o}</button>`).join('');document.querySelectorAll('.option').forEach(b=>b.onclick=()=>choose(+b.dataset.i))}
 function choose(i){answers[current]=i;document.querySelectorAll('.option').forEach(b=>b.classList.toggle('selected',+b.dataset.i===i));setTimeout(()=>{if(current<questions.length-1){current++;renderQuestion()}else renderResult()},180)}
 function calculate(){const sums={I:0,E:0,C:0,L:0,R:0,H:0};for(let i=1;i<questions.length;i++){const key=dimensions[Math.floor((i-1)/4)].key;sums[key]+=answers[i]??0}const vals=Object.fromEntries(Object.entries(sums).map(([k,v])=>[k,v/4]));let matched=rules.find(([,fn])=>fn(vals))?.[0];if(matched)return {id:matched,v:vals,fallback:false};let best={id:'P3',distance:Infinity};for(const [id,fn] of rules){let d=0;for(const k of Object.keys(vals)){const before=fn(vals);if(!before)d+=0.15;}
   const prototypes={P1:{I:1.5,E:2.5,C:1.5,H:2.5},P2:{I:1.5,H:1,E:2},P3:{I:.5},P4:{I:1,R:.5,H:1},P5:{I:2.5,E:2.5,H:2.5},P6:{I:2,E:2,C:2.5},P7:{I:2.5,H:2.5},P8:{I:2.5,H:1,C:2},P9:{I:.5,H:2,R:2},P10:{I:.5,H:1,C:2},P11:{I:2.5,C:.5,E:1},P12:{I:.5,H:1,C:1,R:1}}[id];d+=Object.entries(prototypes).reduce((n,[k,x])=>n+Math.abs(vals[k]-x),0);if(d<best.distance)best={id,distance:d}}
   return {id:best.id,v:vals,fallback:true}}
 function drawRadar(vals){const svg=$('radar'),cx=160,cy=145,r=94;const pts=(scale)=>dimensions.map((d,i)=>{const a=-Math.PI/2+i*Math.PI*2/6;return `${cx+Math.cos(a)*r*scale},${cy+Math.sin(a)*r*scale}`}).join(' ');let html='';[.33,.66,1].forEach(s=>html+=`<polygon class="radar-grid" points="${pts(s)}"/>`);dimensions.forEach((d,i)=>{const a=-Math.PI/2+i*Math.PI*2/6;html+=`<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${cx+Math.cos(a)*r}" y2="${cy+Math.sin(a)*r}"/><text class="radar-label" x="${cx+Math.cos(a)*(r+22)}" y="${cy+Math.sin(a)*(r+22)+4}" text-anchor="middle">${d.name}</text>`});const points=dimensions.map((d,i)=>{const a=-Math.PI/2+i*Math.PI*2/6;return `${cx+Math.cos(a)*r*(vals[d.key]/3)},${cy+Math.sin(a)*r*(vals[d.key]/3)}`}).join(' ');html+=`<polygon class="radar-shape" points="${points}"/>`;dimensions.forEach((d,i)=>{const a=-Math.PI/2+i*Math.PI*2/6;html+=`<circle class="radar-dot" cx="${cx+Math.cos(a)*r*(vals[d.key]/3)}" cy="${cy+Math.sin(a)*r*(vals[d.key]/3)}" r="4"/>`});svg.innerHTML=html}
 function renderResult(){const res=calculate(),data=results[res.id];$('resultCode').textContent=res.id;$('resultName').textContent=data.name;$('resultVerdict').textContent=data.verdict;$('resultDescription').textContent=data.desc;$('resultQuote').textContent=data.quote;$('resultStrength').textContent=data.strength;$('resultRisk').textContent=data.risk;$('resultFinal').textContent=data.final;drawRadar(res.v);$('dimensionLegend').innerHTML=dimensions.map(d=>`<div class="dim-row"><header><span>${d.name}</span><strong>${res.v[d.key].toFixed(2)}</strong></header><div class="mini-track"><i style="width:${res.v[d.key]/3*100}%"></i></div></div>`).join('');show('resultScreen');window.scrollTo(0,0);if(res.fallback)toast('本次采用了最接近人格兜底判定')}
 function toast(t){const el=$('toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600)}
 $('startBtn').onclick=()=>{answers=[];current=0;show('quizScreen');renderQuestion()};$('backBtn').onclick=()=>{if(current>0){current--;renderQuestion()}};$('quitBtn').onclick=()=>show('startScreen');$('restartBtn').onclick=$('restartTop').onclick=()=>{answers=[];current=0;show('startScreen')};$('shareBtn').onclick=async()=>{const text=`我的恋爱人格是${$('resultName').textContent}\n${$('resultVerdict').textContent}`;try{await navigator.clipboard.writeText(text);toast('结果已复制，去分享给朋友吧')}catch(e){toast(text)}};
 function renderResult(){const res=calculate(),data=results[res.id],totals={I:0,E:0,C:0,L:0,R:0,H:0};for(let i=1;i<questions.length;i++){const key=dimensions[Math.floor((i-1)/4)].key;totals[key]+=answers[i]??0}$('resultCode').textContent=res.id;$('resultName').textContent=data.name;$('resultVerdict').textContent=data.verdict;$('resultDescription').textContent=data.desc;$('resultQuote').textContent=data.quote;$('resultStrength').textContent=data.strength;$('resultRisk').textContent=data.risk;$('resultFinal').textContent=data.final;drawRadar(res.v);$('dimensionLegend').innerHTML=dimensions.map(d=>`<div class="dim-row"><header><span>${d.name}</span><strong>${totals[d.key]} / 12</strong><em>${res.v[d.key].toFixed(2)} / 3</em></header><div class="mini-track"><i style="width:${totals[d.key]/12*100}%"></i></div></div>`).join('');show('resultScreen');window.scrollTo(0,0);if(res.fallback)toast('本次采用了最接近人格兜底判定')}
