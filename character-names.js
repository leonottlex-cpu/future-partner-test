const characterNames={
 P1:{name:'冲锋者',english:'CHARGER',image:'assets/P1.png',art:'🔥',artClass:'art-fire'},
 P2:{name:'陪伴者',english:'COMPANION',image:'assets/P2.png',art:'🦥',artClass:'art-moon'},
 P3:{name:'浪人',english:'RONIN',image:'assets/P3.png',art:'🐈',artClass:'art-boat'},
 P4:{name:'审判者',english:'JUDGE',image:'assets/P4.png',art:'🦉',artClass:'art-audit'},
 P5:{name:'溺水者',english:'DROWNER',image:'assets/P5.png',art:'🐋',artClass:'art-deep'},
 P6:{name:'修理者',english:'FIXER',image:'assets/P6.png',art:'🐕',artClass:'art-fix'},
 P7:{name:'追踪者',english:'TRACKER',image:'assets/P7.png',art:'🐶',artClass:'art-hunter'},
 P8:{name:'守灯人',english:'LAMPLIGHTER',image:'assets/P8.png',art:'🧸',artClass:'art-lamp'},
 P9:{name:'逃亡者',english:'RUNAWAY',image:'assets/P9.png',art:'🐇',artClass:'art-rose'},
 P10:{name:'独行者',english:'LONE WOLF',image:'assets/P10.png',art:'⚔️',artClass:'art-sword'},
 P11:{name:'拉扯者',english:'TUG-OF-WAR',image:'assets/P11.png',art:'🍄',artClass:'art-cat'},
 P12:{name:'守门人',english:'GATEKEEPER',image:'assets/P12.png',art:'🦉',artClass:'art-customs'}
};
Object.keys(characterNames).forEach(id=>Object.assign(results[id],characterNames[id]));
