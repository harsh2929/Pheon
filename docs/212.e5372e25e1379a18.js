"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[212],{1212:(B,d,S)=>{S.r(d),S.d(d,{drawTF2:()=>L});var x=S(1773),O=S(5759),C=S(1827),T=S(2454),y=S(5611);function P(e,a){let f=e.fSave.length,t=!0;f>6&&f!==(e.fSave[f-2]+1)*(e.fSave[f-1]+1)+6&&(f=0),f>6&&e.fXmin<e.fXmax&&e.fSave[f-6]<e.fSave[f-5]&&(e.fSave[f-5]-e.fSave[f-6])/(e.fXmax-e.fXmin)>.99999&&(t=!1);let i=Math.max(e.fNpx,2),r=Math.max(e.fNpy,2),m=!1,s=!1,_=(e.fXmax-e.fXmin)/(t?i:i-1),v=(e.fYmax-e.fYmin)/(t?r:r-1),X=t?.5:0,n=f>6&&x.settings.PreferSavedPoints;if(!n){e.evalPar||(0,C.proivdeEvalPar)(e);for(let M=0;M<r;++M)for(let l=0;l<i&&!m;++l){let o=e.fXmin+(l+X)*_,F=e.fYmin+(M+X)*v,E=0;try{E=e.evalPar(o,F)}catch{m=!0}!m&&Number.isFinite(E)&&(a||(a=(0,x.createHistogram)("TH2F",i,r)),s=!0,a.setBinContent(a.getBin(l+1,M+1),E))}(m||!s)&&f>6&&(n=!0)}if(!n&&!a&&(a=(0,x.createHistogram)("TH2F",i,r)),!m&&s&&(a.fXaxis.fXmin=e.fXmin-(t?0:_/2),a.fXaxis.fXmax=e.fXmax+(t?0:_/2),a.fYaxis.fXmin=e.fYmin-(t?0:v/2),a.fYaxis.fXmax=e.fYmax+(t?0:v/2)),n){i=Math.round(e.fSave[f-2]),r=Math.round(e.fSave[f-1]),_=(e.fSave[f-5]-e.fSave[f-6])/i,v=(e.fSave[f-3]-e.fSave[f-4])/r,a||(a=(0,x.createHistogram)("TH2F",i+1,r+1)),a.fXaxis.fXmin=e.fSave[f-6]-_/2,a.fXaxis.fXmax=e.fSave[f-5]+_/2,a.fYaxis.fXmin=e.fSave[f-4]-v/2,a.fYaxis.fXmax=e.fSave[f-3]+v/2;for(let M=0,l=0;l<=r;++l)for(let o=0;o<=i;++o)a.setBinContent(a.getBin(o+1,l+1),e.fSave[M++])}a.fName="Func",a.fTitle=e.fTitle,a.fMinimum=e.fMinimum,a.fMaximum=e.fMaximum,a.fLineColor=e.fLineColor,a.fLineStyle=e.fLineStyle,a.fLineWidth=e.fLineWidth,a.fFillColor=e.fFillColor,a.fFillStyle=e.fFillStyle,a.fMarkerColor=e.fMarkerColor,a.fMarkerStyle=e.fMarkerStyle,a.fMarkerSize=e.fMarkerSize;const A=(0,x.BIT)(9);return a.fBits|=A,a}function L(e,a,f){let t=P(a);if(!t)return;let i=new y.pc(f);return("SAMECOLORZ"==(f=i.empty()?"cont3":"SAME"===i.opt?"cont2 same":i.opt)||"SAMECOLOR"==f||"SAMECOLZ"==f)&&(f="SAMECOL"),0==f.indexOf("SAME")&&((0,T.SO)(e)||(f="A_ADJUST_FRAME_"+f.slice(4))),O.TH2Painter.draw(e,t,f).then(r=>(r.tf2_typename=a._typename,r.updateObject=function(m){return!(!m||this.tf2_typename!=m._typename||(delete m.evalPar,P(m,this.getHisto()),0))},r))}}}]);
//# sourceMappingURL=212.e5372e25e1379a18.js.map