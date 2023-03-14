"use strict";(self.webpackChunkphoenix_app=self.webpackChunkphoenix_app||[]).push([[431],{2431:(J,L,u)=>{u.r(L),u.d(L,{RPalettePainter:()=>D,drawBox:()=>K,drawLine:()=>I,drawMarker:()=>S,drawText:()=>Z});var j=u(5368),P=u(1773),f=u(2912),k=u(6528),H=u(2989),B=u(6717),W=u(7428);function Z(){let c=this.getObject(),a=this.getPadPainter(),e=this.v7EvalAttr("onFrame",!1)?a.getFramePainter():null,l=!!e&&this.v7EvalAttr("clipping",!1),t=a.getCoordinate(c.fPos,e),n=this.v7EvalFont("text",{size:12,color:"black",align:22});return this.createG(l?"main_layer":!!e&&"upper_layer"),this.startTextDrawing(n,"font"),this.drawText({x:t.x,y:t.y,text:c.fText,latex:1}),this.finishTextDrawing()}function I(){let c=this.getObject(),a=this.getPadPainter(),e=this.v7EvalAttr("onFrame",!1)?a.getFramePainter():null,l=!!e&&this.v7EvalAttr("clipping",!1),t=a.getCoordinate(c.fP1,e),n=a.getCoordinate(c.fP2,e);this.createG(l?"main_layer":!!e&&"upper_layer"),this.createv7AttLine(),this.draw_g.append("svg:path").attr("d",`M${t.x},${t.y}L${n.x},${n.y}`).call(this.lineatt.func)}function K(){let c=this.getObject(),a=this.getPadPainter(),e=this.v7EvalAttr("onFrame",!1)?a.getFramePainter():null,l=!!e&&this.v7EvalAttr("clipping",!1),t=a.getCoordinate(c.fP1,e),n=a.getCoordinate(c.fP2,e);this.createG(l?"main_layer":!!e&&"upper_layer"),this.createv7AttLine("border_"),this.createv7AttFill(),this.draw_g.append("svg:path").attr("d",`M${t.x},${t.y}H${n.x}V${n.y}H${t.x}Z`).call(this.lineatt.func).call(this.fillatt.func)}function S(){let c=this.getObject(),a=this.getPadPainter(),e=this.v7EvalAttr("onFrame",!1)?a.getFramePainter():null,l=!!e&&this.v7EvalAttr("clipping",!1),t=a.getCoordinate(c.fP,e);this.createG(l?"main_layer":!!e&&"upper_layer"),this.createv7AttMarker();let n=this.markeratt.create(t.x,t.y);n&&this.draw_g.append("svg:path").attr("d",n).call(this.markeratt.func)}class D extends k.p{getHistPalette(){let a=this.getObject(),e=a?a.fPalette:null;return e&&!e.getColor&&(0,P.addMethods)(e,"ROOT::Experimental::RPalette"),e}drawPalette(a){let e=this.getHistPalette(),l=e.getContour(),t=this.getFramePainter();if(!l)return console.log("no contour - no palette");if(!t)return console.log("no frame painter - no palette");let A,C,o,h,n=e.full_min,E=e.full_max,O=l[0],R=l[l.length-1],p=t.getFrameRect(),y=this.getPadPainter().getPadWidth(),$=this.getPadPainter().getPadHeight(),U=this.v7EvalAttr("visible",!0),s=this.v7EvalAttr("vertical",!0);if(a){o=a.width,h=a.height;let i={};s?(this.v7AttrChange(i,"margin",(a.x-p.x-p.width)/y),this.v7AttrChange(i,"width",o/y)):(this.v7AttrChange(i,"margin",(a.y-p.y-p.height)/y),this.v7AttrChange(i,"width",h/$)),this.v7SendAttrChanges(i,!1)}else{if(s){let i=this.v7EvalLength("margin",y,.02);A=Math.round(p.x+p.width+i),o=this.v7EvalLength("width",y,.05),C=p.y,h=p.height}else{let i=this.v7EvalLength("margin",$,.02);A=p.x,o=p.width,C=Math.round(p.y+p.height+i),h=this.v7EvalLength("width",$,.05)}this.draw_g.attr("transform",`translate(${A},${C})`)}let w=this.draw_g.select(".colbtns");if(w.empty()?w=this.draw_g.append("svg:g").attr("class","colbtns"):w.selectAll("*").remove(),!U)return;w.append("svg:path").attr("d",`M0,0H${o}V${h}H0Z`).style("stroke","black").style("fill","none"),(void 0===n||void 0===E)&&(n=O,E=R),s?t.z_handle.configureAxis("zaxis",n,E,O,R,!0,[h,0],-h,{reverse:!1}):t.z_handle.configureAxis("zaxis",n,E,O,R,!1,[0,o],o,{reverse:!1});for(let i=0;i<l.length-1;++i){let _=Math.round(t.z_handle.gr(l[i])),m=Math.round(t.z_handle.gr(l[i+1])),g=e.getContourColor((l[i]+l[i+1])/2),x=w.append("svg:path").attr("d",s?`M0,${m}H${o}V${_}H0Z`:`M${_},0V${h}H${m}V0Z`).style("fill",g).style("stroke",g).property("fill0",g).property("fill1",(0,f.B8)(g).darker(.5).toString());this.isTooltipAllowed()&&x.on("mouseover",function(){(0,f.Ys)(this).transition().duration(100).style("fill",(0,f.Ys)(this).property("fill1"))}).on("mouseout",function(){(0,f.Ys)(this).transition().duration(100).style("fill",(0,f.Ys)(this).property("fill0"))}).append("svg:title").text(l[i].toFixed(2)+" - "+l[i+1].toFixed(2)),P.settings.Zooming&&x.on("dblclick",()=>t.unzoom("z"))}t.z_handle.maxTickSize=Math.round(.3*o);let T=t.z_handle.drawAxis(this.draw_g,s?`translate(${o},${h})`:`translate(0,${h})`,s?-1:1);return(0,P.isBatchMode)()||a?T:T.then(()=>{if(P.settings.ContextMenu&&this.draw_g.on("contextmenu",r=>{r.stopPropagation(),r.preventDefault(),(0,W.Z)(r,this).then(d=>{d.add("header:Palette"),d.addchk(s,"Vertical",z=>{this.v7SetAttr("vertical",z),this.redrawPad()}),t.z_handle.fillAxisContextMenu(d,"z"),d.show()})}),(0,H.uI)(this,{x:A,y:C,width:o,height:h,minwidth:20,minheight:20,no_change_x:!s,no_change_y:s,redraw:r=>this.drawPalette(r)}),!P.settings.Zooming)return;let g,x,b,v,i=!1,_=0,m=0;const G=r=>{if(!i)return;if(r.preventDefault(),v=(0,f.cx)(r,this.draw_g.node()),b)return t.z_handle.processLabelsMove("move",v);m=s?Math.min(Math.max(v[1],0),h):Math.min(Math.max(v[0],0),o);let d=Math.abs(m-_);!x&&d>1&&(g.style("display",null),x=!0),s?g.attr("y",Math.min(_,m)).attr("height",d):g.attr("x",Math.min(_,m)).attr("width",d)},V=r=>{if(i)if(r.preventDefault(),(0,f.Ys)(window).on("mousemove.colzoomRect",null).on("mouseup.colzoomRect",null),g.remove(),g=null,i=!1,b)t.z_handle.processLabelsMove("stop",v);else{let d=t.z_handle.func,z=d.invert(_),M=d.invert(m);this.getFramePainter().zoom("z",Math.min(z,M),Math.max(z,M))}},Y=r=>{i||(i=!0,r.preventDefault(),r.stopPropagation(),v=(0,f.cx)(r,this.draw_g.node()),_=m=v[s?1:0],x=!1,b=!1,g=w.append("svg:rect").attr("class","zoom").attr("id","colzoomRect").style("display","none"),s?g.attr("x",0).attr("width",o).attr("y",_).attr("height",1):g.attr("x",_).attr("width",1).attr("y",0).attr("height",h),(0,f.Ys)(window).on("mousemove.colzoomRect",G).on("mouseup.colzoomRect",V,!0),setTimeout(()=>{!x&&i&&(b=t.z_handle.processLabelsMove("start",v))},500))},F=()=>{this.draw_g.selectAll(".axis_zoom, .axis_labels").on("mousedown",Y).on("dblclick",()=>t.unzoom("z")),P.settings.ZoomWheel&&this.draw_g.on("wheel",r=>{r.stopPropagation(),r.preventDefault();let d=(0,f.cx)(r,this.draw_g.node()),M=t.z_handle.analyzeWheelEvent(r,s?1-d[1]/h:d[0]/o);M.changed&&t.zoom("z",M.min,M.max)})};t.z_handle.setAfterDrawHandler(F),F()})}static draw(a,e,l){return(0,j.Z)(function*(){let t=new D(a,e,l,"palette");return(0,B.ensureRCanvas)(t,!1).then(()=>(t.createG(),t))})()}}}}]);
//# sourceMappingURL=431.d3bb1ba13892743e.js.map