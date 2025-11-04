"use strict";(self.webpackChunkvisme_web=self.webpackChunkvisme_web||[]).push([[4909],{86622:(cs,ar,Qt)=>{Qt.r(ar),Qt.d(ar,{BatchedText:()=>ma,GlyphsGeometry:()=>ca,Text:()=>Ki,configureTextBuilder:()=>So,createTextDerivedMaterial:()=>ur,dumpSDFTextures:()=>xo,fontResolverWorkerModule:()=>Zr,getCaretAtPoint:()=>es,getSelectionRects:()=>ns,getTextRenderInfo:()=>fr,preloadFont:()=>To,typesetterWorkerModule:()=>oa});var n=Qt(979248);function Br(){var C=Object.create(null);function a(i,t){var l=i.id,c=i.name,s=i.dependencies;s===void 0&&(s=[]);var f=i.init;f===void 0&&(f=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!C[l])try{s=s.map(function(x){return x&&x.isWorkerModule&&(a(x,function(S){if(S instanceof Error)throw S}),x=C[x.id].value),x}),f=g("<"+c+">.init",f),u&&(u=g("<"+c+">.getTransferables",u));var T=null;typeof f=="function"?T=f.apply(void 0,s):console.error("worker module init function failed to rehydrate"),C[l]={id:l,value:T,getTransferables:u},t(T)}catch(x){x&&x.noLog||console.error(x),t(x)}}function R(i,t){var l,c=i.id,s=i.args;(!C[c]||typeof C[c].value!="function")&&t(new Error("Worker module "+c+": not found or its 'init' did not return a function"));try{var f=(l=C[c]).value.apply(l,s);f&&typeof f.then=="function"?f.then(u,function(T){return t(T instanceof Error?T:new Error(""+T))}):u(f)}catch(T){t(T)}function u(T){try{var x=C[c].getTransferables&&C[c].getTransferables(T);(!x||!Array.isArray(x)||!x.length)&&(x=void 0),t(T,x)}catch(S){console.error(S),t(S)}}}function g(i,t){var l=void 0;self.troikaDefine=function(s){return l=s};var c=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+t+`
)`],{type:"application/javascript"}));try{importScripts(c)}catch(s){console.error(s)}return URL.revokeObjectURL(c),delete self.troikaDefine,l}self.addEventListener("message",function(i){var t=i.data,l=t.messageId,c=t.action,s=t.data;try{c==="registerModule"&&a(s,function(f){f instanceof Error?postMessage({messageId:l,success:!1,error:f.message}):postMessage({messageId:l,success:!0,result:{isCallable:typeof f=="function"}})}),c==="callModule"&&R(s,function(f,u){f instanceof Error?postMessage({messageId:l,success:!1,error:f.message}):postMessage({messageId:l,success:!0,result:f},u||void 0)})}catch(f){postMessage({messageId:l,success:!1,error:f.stack})}})}function Na(C){var a=function(){for(var R=[],g=arguments.length;g--;)R[g]=arguments[g];return a._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,R);throw new Error("Worker module function was called but `init` did not return a callable function")})};return a._getInitResult=function(){var R=C.dependencies,g=C.init;R=Array.isArray(R)?R.map(function(t){return t&&(t=t.onMainThread||t,t._getInitResult&&(t=t._getInitResult())),t}):[];var i=Promise.all(R).then(function(t){return g.apply(null,t)});return a._getInitResult=function(){return i},i},a}var Gr=function(){var C=!1;if(typeof window<"u"&&typeof window.document<"u")try{var a=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));a.terminate(),C=!0}catch(R){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+R.message+"]")}return Gr=function(){return C},C},Fa=0,Oa=0,or=!1,xi=Object.create(null),Ai=Object.create(null),sr=Object.create(null);function di(C){if((!C||typeof C.init!="function")&&!or)throw new Error("requires `options.init` function");var a=C.dependencies,R=C.init,g=C.getTransferables,i=C.workerId,t=Na(C);i==null&&(i="#default");var l="workerModule"+ ++Fa,c=C.name||l,s=null;a=a&&a.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(or=!0,u=di({workerId:i,name:"<"+c+"> function dependency: "+u.name,init:`function(){return (
`+ki(u)+`
)}`}),or=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function f(){for(var u=[],T=arguments.length;T--;)u[T]=arguments[T];if(!Gr())return t.apply(void 0,u);if(!s){s=kr(i,"registerModule",f.workerModuleData);var x=function(){s=null,Ai[i].delete(x)};(Ai[i]||(Ai[i]=new Set)).add(x)}return s.then(function(S){var U=S.isCallable;if(U)return kr(i,"callModule",{id:l,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return f.workerModuleData={isWorkerModule:!0,id:l,name:c,dependencies:a,init:ki(R),getTransferables:g&&ki(g)},f.onMainThread=t,f}function Ba(C){Ai[C]&&Ai[C].forEach(function(a){a()}),xi[C]&&(xi[C].terminate(),delete xi[C])}function ki(C){var a=C.toString();return!/^function/.test(a)&&/^\w+\s*\(/.test(a)&&(a="function "+a),a}function Ga(C){var a=xi[C];if(!a){var R=ki(Br);a=xi[C]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+C.replace(/\*/g,"")+` **/

;(`+R+")()"],{type:"application/javascript"}))),a.onmessage=function(g){var i=g.data,t=i.messageId,l=sr[t];if(!l)throw new Error("WorkerModule response with empty or unknown messageId");delete sr[t],l(i)}}return a}function kr(C,a,R){return new Promise(function(g,i){var t=++Oa;sr[t]=function(l){l.success?g(l.result):i(new Error("Error in worker "+a+" call: "+l.error))},Ga(C).postMessage({messageId:t,action:a,data:R})})}function Hr(){var C=function(a){function R(Ce,Me,I,Q,oe,he,ne,Ie){var ge=1-ne;Ie.x=ge*ge*Ce+2*ge*ne*I+ne*ne*oe,Ie.y=ge*ge*Me+2*ge*ne*Q+ne*ne*he}function g(Ce,Me,I,Q,oe,he,ne,Ie,ge,Pe){var en=1-ge;Pe.x=en*en*en*Ce+3*en*en*ge*I+3*en*ge*ge*oe+ge*ge*ge*ne,Pe.y=en*en*en*Me+3*en*en*ge*Q+3*en*ge*ge*he+ge*ge*ge*Ie}function i(Ce,Me){for(var I=/([MLQCZ])([^MLQCZ]*)/g,Q,oe,he,ne,Ie;Q=I.exec(Ce);){var ge=Q[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(Pe){return parseFloat(Pe)});switch(Q[1]){case"M":ne=oe=ge[0],Ie=he=ge[1];break;case"L":(ge[0]!==ne||ge[1]!==Ie)&&Me("L",ne,Ie,ne=ge[0],Ie=ge[1]);break;case"Q":{Me("Q",ne,Ie,ne=ge[2],Ie=ge[3],ge[0],ge[1]);break}case"C":{Me("C",ne,Ie,ne=ge[4],Ie=ge[5],ge[0],ge[1],ge[2],ge[3]);break}case"Z":(ne!==oe||Ie!==he)&&Me("L",ne,Ie,oe,he);break}}}function t(Ce,Me,I){I===void 0&&(I=16);var Q={x:0,y:0};i(Ce,function(oe,he,ne,Ie,ge,Pe,en,vn,Xe){switch(oe){case"L":Me(he,ne,Ie,ge);break;case"Q":{for(var Fe=he,Yn=ne,Dn=1;Dn<I;Dn++)R(he,ne,Pe,en,Ie,ge,Dn/(I-1),Q),Me(Fe,Yn,Q.x,Q.y),Fe=Q.x,Yn=Q.y;break}case"C":{for(var ln=he,Sn=ne,bn=1;bn<I;bn++)g(he,ne,Pe,en,vn,Xe,Ie,ge,bn/(I-1),Q),Me(ln,Sn,Q.x,Q.y),ln=Q.x,Sn=Q.y;break}}})}var l="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",c="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",s=new WeakMap,f={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Ce,Me){var I=Ce.getContext?Ce.getContext("webgl",f):Ce,Q=s.get(I);if(!Q){let en=function(ln){var Sn=he[ln];if(!Sn&&(Sn=he[ln]=I.getExtension(ln),!Sn))throw new Error(ln+" not supported");return Sn},vn=function(ln,Sn){var bn=I.createShader(Sn);return I.shaderSource(bn,ln),I.compileShader(bn),bn},Xe=function(ln,Sn,bn,We){if(!ne[ln]){var _n={},pn={},ye=I.createProgram();I.attachShader(ye,vn(Sn,I.VERTEX_SHADER)),I.attachShader(ye,vn(bn,I.FRAGMENT_SHADER)),I.linkProgram(ye),ne[ln]={program:ye,transaction:function(on){I.useProgram(ye),on({setUniform:function(tn,et){for(var fn=[],Ze=arguments.length-2;Ze-- >0;)fn[Ze]=arguments[Ze+2];var an=pn[et]||(pn[et]=I.getUniformLocation(ye,et));I["uniform"+tn].apply(I,[an].concat(fn))},setAttribute:function(tn,et,fn,Ze,an){var Hn=_n[tn];Hn||(Hn=_n[tn]={buf:I.createBuffer(),loc:I.getAttribLocation(ye,tn),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Hn.buf),I.vertexAttribPointer(Hn.loc,et,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Hn.loc),oe?I.vertexAttribDivisor(Hn.loc,Ze):en("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Hn.loc,Ze),an!==Hn.data&&(I.bufferData(I.ARRAY_BUFFER,an,fn),Hn.data=an)}})}}}ne[ln].transaction(We)},Fe=function(ln,Sn){ge++;try{I.activeTexture(I.TEXTURE0+ge);var bn=Ie[ln];bn||(bn=Ie[ln]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,bn),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,bn),Sn(bn,ge)}finally{ge--}},Yn=function(ln,Sn,bn){var We=I.createFramebuffer();Pe.push(We),I.bindFramebuffer(I.FRAMEBUFFER,We),I.activeTexture(I.TEXTURE0+Sn),I.bindTexture(I.TEXTURE_2D,ln),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln,0);try{bn(We)}finally{I.deleteFramebuffer(We),I.bindFramebuffer(I.FRAMEBUFFER,Pe[--Pe.length-1]||null)}},Dn=function(){he={},ne={},Ie={},ge=-1,Pe.length=0};var oe=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,he={},ne={},Ie={},ge=-1,Pe=[];I.canvas.addEventListener("webglcontextlost",function(ln){Dn(),ln.preventDefault()},!1),s.set(I,Q={gl:I,isWebGL2:oe,getExtension:en,withProgram:Xe,withTexture:Fe,withTextureFramebuffer:Yn,handleContextLoss:Dn})}Me(Q)}function T(Ce,Me,I,Q,oe,he,ne,Ie){ne===void 0&&(ne=15),Ie===void 0&&(Ie=null),u(Ce,function(ge){var Pe=ge.gl,en=ge.withProgram,vn=ge.withTexture;vn("copy",function(Xe,Fe){Pe.texImage2D(Pe.TEXTURE_2D,0,Pe.RGBA,oe,he,0,Pe.RGBA,Pe.UNSIGNED_BYTE,Me),en("copy",l,c,function(Yn){var Dn=Yn.setUniform,ln=Yn.setAttribute;ln("aUV",2,Pe.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Dn("1i","image",Fe),Pe.bindFramebuffer(Pe.FRAMEBUFFER,Ie||null),Pe.disable(Pe.BLEND),Pe.colorMask(ne&8,ne&4,ne&2,ne&1),Pe.viewport(I,Q,oe,he),Pe.scissor(I,Q,oe,he),Pe.drawArrays(Pe.TRIANGLES,0,3)})})})}function x(Ce,Me,I){var Q=Ce.width,oe=Ce.height;u(Ce,function(he){var ne=he.gl,Ie=new Uint8Array(Q*oe*4);ne.readPixels(0,0,Q,oe,ne.RGBA,ne.UNSIGNED_BYTE,Ie),Ce.width=Me,Ce.height=I,T(ne,Ie,0,0,Q,oe)})}var S=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:T,resizeWebGLCanvasWithoutClearing:x});function U(Ce,Me,I,Q,oe,he){he===void 0&&(he=1);var ne=new Uint8Array(Ce*Me),Ie=Q[2]-Q[0],ge=Q[3]-Q[1],Pe=[];t(I,function(ln,Sn,bn,We){Pe.push({x1:ln,y1:Sn,x2:bn,y2:We,minX:Math.min(ln,bn),minY:Math.min(Sn,We),maxX:Math.max(ln,bn),maxY:Math.max(Sn,We)})}),Pe.sort(function(ln,Sn){return ln.maxX-Sn.maxX});for(var en=0;en<Ce;en++)for(var vn=0;vn<Me;vn++){var Xe=Yn(Q[0]+Ie*(en+.5)/Ce,Q[1]+ge*(vn+.5)/Me),Fe=Math.pow(1-Math.abs(Xe)/oe,he)/2;Xe<0&&(Fe=1-Fe),Fe=Math.max(0,Math.min(255,Math.round(Fe*255))),ne[vn*Ce+en]=Fe}return ne;function Yn(ln,Sn){for(var bn=1/0,We=1/0,_n=Pe.length;_n--;){var pn=Pe[_n];if(pn.maxX+We<=ln)break;if(ln+We>pn.minX&&Sn-We<pn.maxY&&Sn+We>pn.minY){var ye=Te(ln,Sn,pn.x1,pn.y1,pn.x2,pn.y2);ye<bn&&(bn=ye,We=Math.sqrt(bn))}}return Dn(ln,Sn)&&(We=-We),We}function Dn(ln,Sn){for(var bn=0,We=Pe.length;We--;){var _n=Pe[We];if(_n.maxX<=ln)break;var pn=_n.y1>Sn!=_n.y2>Sn&&ln<(_n.x2-_n.x1)*(Sn-_n.y1)/(_n.y2-_n.y1)+_n.x1;pn&&(bn+=_n.y1<_n.y2?1:-1)}return bn!==0}}function F(Ce,Me,I,Q,oe,he,ne,Ie,ge,Pe){he===void 0&&(he=1),Ie===void 0&&(Ie=0),ge===void 0&&(ge=0),Pe===void 0&&(Pe=0),X(Ce,Me,I,Q,oe,he,ne,null,Ie,ge,Pe)}function X(Ce,Me,I,Q,oe,he,ne,Ie,ge,Pe,en){he===void 0&&(he=1),ge===void 0&&(ge=0),Pe===void 0&&(Pe=0),en===void 0&&(en=0);for(var vn=U(Ce,Me,I,Q,oe,he),Xe=new Uint8Array(vn.length*4),Fe=0;Fe<vn.length;Fe++)Xe[Fe*4+en]=vn[Fe];T(ne,Xe,ge,Pe,Ce,Me,1<<3-en,Ie)}function Te(Ce,Me,I,Q,oe,he){var ne=oe-I,Ie=he-Q,ge=ne*ne+Ie*Ie,Pe=ge?Math.max(0,Math.min(1,((Ce-I)*ne+(Me-Q)*Ie)/ge)):0,en=Ce-(I+Pe*ne),vn=Me-(Q+Pe*Ie);return en*en+vn*vn}var ce=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:F,generateIntoFramebuffer:X}),se="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",ee="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",le="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",_e=new Float32Array([0,0,2,0,0,2]),q=null,ue=!1,we={},xe=new WeakMap;function je(Ce){if(!ue&&!Ge(Ce))throw new Error("WebGL generation not supported")}function z(Ce,Me,I,Q,oe,he,ne){if(he===void 0&&(he=1),ne===void 0&&(ne=null),!ne&&(ne=q,!ne)){var Ie=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!Ie)throw new Error("OffscreenCanvas or DOM canvas not supported");ne=q=Ie.getContext("webgl",{depth:!1})}je(ne);var ge=new Uint8Array(Ce*Me*4);u(ne,function(Xe){var Fe=Xe.gl,Yn=Xe.withTexture,Dn=Xe.withTextureFramebuffer;Yn("readable",function(ln,Sn){Fe.texImage2D(Fe.TEXTURE_2D,0,Fe.RGBA,Ce,Me,0,Fe.RGBA,Fe.UNSIGNED_BYTE,null),Dn(ln,Sn,function(bn){ae(Ce,Me,I,Q,oe,he,Fe,bn,0,0,0),Fe.readPixels(0,0,Ce,Me,Fe.RGBA,Fe.UNSIGNED_BYTE,ge)})})});for(var Pe=new Uint8Array(Ce*Me),en=0,vn=0;en<ge.length;en+=4)Pe[vn++]=ge[en];return Pe}function Ae(Ce,Me,I,Q,oe,he,ne,Ie,ge,Pe){he===void 0&&(he=1),Ie===void 0&&(Ie=0),ge===void 0&&(ge=0),Pe===void 0&&(Pe=0),ae(Ce,Me,I,Q,oe,he,ne,null,Ie,ge,Pe)}function ae(Ce,Me,I,Q,oe,he,ne,Ie,ge,Pe,en){he===void 0&&(he=1),ge===void 0&&(ge=0),Pe===void 0&&(Pe=0),en===void 0&&(en=0),je(ne);var vn=[];t(I,function(Xe,Fe,Yn,Dn){vn.push(Xe,Fe,Yn,Dn)}),vn=new Float32Array(vn),u(ne,function(Xe){var Fe=Xe.gl,Yn=Xe.isWebGL2,Dn=Xe.getExtension,ln=Xe.withProgram,Sn=Xe.withTexture,bn=Xe.withTextureFramebuffer,We=Xe.handleContextLoss;if(Sn("rawDistances",function(_n,pn){(Ce!==_n._lastWidth||Me!==_n._lastHeight)&&Fe.texImage2D(Fe.TEXTURE_2D,0,Fe.RGBA,_n._lastWidth=Ce,_n._lastHeight=Me,0,Fe.RGBA,Fe.UNSIGNED_BYTE,null),ln("main",se,ee,function(ye){var Vn=ye.setAttribute,on=ye.setUniform,En=!Yn&&Dn("ANGLE_instanced_arrays"),tn=!Yn&&Dn("EXT_blend_minmax");Vn("aUV",2,Fe.STATIC_DRAW,0,_e),Vn("aLineSegment",4,Fe.DYNAMIC_DRAW,1,vn),on.apply(void 0,["4f","uGlyphBounds"].concat(Q)),on("1f","uMaxDistance",oe),on("1f","uExponent",he),bn(_n,pn,function(et){Fe.enable(Fe.BLEND),Fe.colorMask(!0,!0,!0,!0),Fe.viewport(0,0,Ce,Me),Fe.scissor(0,0,Ce,Me),Fe.blendFunc(Fe.ONE,Fe.ONE),Fe.blendEquationSeparate(Fe.FUNC_ADD,Yn?Fe.MAX:tn.MAX_EXT),Fe.clear(Fe.COLOR_BUFFER_BIT),Yn?Fe.drawArraysInstanced(Fe.TRIANGLES,0,3,vn.length/4):En.drawArraysInstancedANGLE(Fe.TRIANGLES,0,3,vn.length/4)})}),ln("post",l,le,function(ye){ye.setAttribute("aUV",2,Fe.STATIC_DRAW,0,_e),ye.setUniform("1i","tex",pn),Fe.bindFramebuffer(Fe.FRAMEBUFFER,Ie),Fe.disable(Fe.BLEND),Fe.colorMask(en===0,en===1,en===2,en===3),Fe.viewport(ge,Pe,Ce,Me),Fe.scissor(ge,Pe,Ce,Me),Fe.drawArrays(Fe.TRIANGLES,0,3)})}),Fe.isContextLost())throw We(),new Error("webgl context lost")})}function Ge(Ce){var Me=!Ce||Ce===q?we:Ce.canvas||Ce,I=xe.get(Me);if(I===void 0){ue=!0;var Q=null;try{var oe=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],he=z(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Ce);I=he&&oe.length===he.length&&he.every(function(ne,Ie){return ne===oe[Ie]}),I||(Q="bad trial run results",console.info(oe,he))}catch(ne){I=!1,Q=ne.message}Q&&console.warn("WebGL SDF generation not supported:",Q),ue=!1,xe.set(Me,I)}return I}var Le=Object.freeze({__proto__:null,generate:z,generateIntoCanvas:Ae,generateIntoFramebuffer:ae,isSupported:Ge});function sn(Ce,Me,I,Q,oe,he){oe===void 0&&(oe=Math.max(Q[2]-Q[0],Q[3]-Q[1])/2),he===void 0&&(he=1);try{return z.apply(Le,arguments)}catch(ne){return console.info("WebGL SDF generation failed, falling back to JS",ne),U.apply(ce,arguments)}}function dn(Ce,Me,I,Q,oe,he,ne,Ie,ge,Pe){oe===void 0&&(oe=Math.max(Q[2]-Q[0],Q[3]-Q[1])/2),he===void 0&&(he=1),Ie===void 0&&(Ie=0),ge===void 0&&(ge=0),Pe===void 0&&(Pe=0);try{return Ae.apply(Le,arguments)}catch(en){return console.info("WebGL SDF generation failed, falling back to JS",en),F.apply(ce,arguments)}}return a.forEachPathCommand=i,a.generate=sn,a.generateIntoCanvas=dn,a.javascript=ce,a.pathToLineSegments=t,a.webgl=Le,a.webglUtils=S,Object.defineProperty(a,"__esModule",{value:!0}),a}({});return C}function ka(){var C=function(a){var R={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},g={},i={};g.L=1,i[1]="L",Object.keys(R).forEach(function(We,_n){g[We]=1<<_n+1,i[g[We]]=We}),Object.freeze(g);var t=g.LRI|g.RLI|g.FSI,l=g.L|g.R|g.AL,c=g.B|g.S|g.WS|g.ON|g.FSI|g.LRI|g.RLI|g.PDI,s=g.BN|g.RLE|g.LRE|g.RLO|g.LRO|g.PDF,f=g.S|g.WS|g.B|t|g.PDI|s,u=null;function T(){if(!u){u=new Map;var We=function(pn){if(R.hasOwnProperty(pn)){var ye=0;R[pn].split(",").forEach(function(Vn){var on=Vn.split("+"),En=on[0],tn=on[1];En=parseInt(En,36),tn=tn?parseInt(tn,36):0,u.set(ye+=En,g[pn]);for(var et=0;et<tn;et++)u.set(++ye,g[pn])})}};for(var _n in R)We(_n)}}function x(We){return T(),u.get(We.codePointAt(0))||g.L}function S(We){return i[x(We)]}var U={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function F(We,_n){var pn=36,ye=0,Vn=new Map,on=_n&&new Map,En;return We.split(",").forEach(function tn(et){if(et.indexOf("+")!==-1)for(var fn=+et;fn--;)tn(En);else{En=et;var Ze=et.split(">"),an=Ze[0],Hn=Ze[1];an=String.fromCodePoint(ye+=parseInt(an,pn)),Hn=String.fromCodePoint(ye+=parseInt(Hn,pn)),Vn.set(an,Hn),_n&&on.set(Hn,an)}}),{map:Vn,reverseMap:on}}var X,Te,ce;function se(){if(!X){var We=F(U.pairs,!0),_n=We.map,pn=We.reverseMap;X=_n,Te=pn,ce=F(U.canonical,!1).map}}function ee(We){return se(),X.get(We)||null}function le(We){return se(),Te.get(We)||null}function _e(We){return se(),ce.get(We)||null}var q=g.L,ue=g.R,we=g.EN,xe=g.ES,je=g.ET,z=g.AN,Ae=g.CS,ae=g.B,Ge=g.S,Le=g.ON,sn=g.BN,dn=g.NSM,Ce=g.AL,Me=g.LRO,I=g.RLO,Q=g.LRE,oe=g.RLE,he=g.PDF,ne=g.LRI,Ie=g.RLI,ge=g.FSI,Pe=g.PDI;function en(We,_n){for(var pn=125,ye=new Uint32Array(We.length),Vn=0;Vn<We.length;Vn++)ye[Vn]=x(We[Vn]);var on=new Map;function En(Ft,Wt){var Ot=ye[Ft];ye[Ft]=Wt,on.set(Ot,on.get(Ot)-1),Ot&c&&on.set(c,on.get(c)-1),on.set(Wt,(on.get(Wt)||0)+1),Wt&c&&on.set(c,(on.get(c)||0)+1)}for(var tn=new Uint8Array(We.length),et=new Map,fn=[],Ze=null,an=0;an<We.length;an++)Ze||fn.push(Ze={start:an,end:We.length-1,level:_n==="rtl"?1:_n==="ltr"?0:ai(an,!1)}),ye[an]&ae&&(Ze.end=an,Ze=null);for(var Hn=oe|Q|I|Me|t|Pe|he|ae,lt=function(Ft){return Ft+(Ft&1?1:2)},gt=function(Ft){return Ft+(Ft&1?2:1)},qn=0;qn<fn.length;qn++){Ze=fn[qn];var Qn=[{_level:Ze.level,_override:0,_isolate:0}],Un=void 0,ut=0,pt=0,Nt=0;on.clear();for(var ct=Ze.start;ct<=Ze.end;ct++){var Bn=ye[ct];if(Un=Qn[Qn.length-1],on.set(Bn,(on.get(Bn)||0)+1),Bn&c&&on.set(c,(on.get(c)||0)+1),Bn&Hn)if(Bn&(oe|Q)){tn[ct]=Un._level;var rt=(Bn===oe?gt:lt)(Un._level);rt<=pn&&!ut&&!pt?Qn.push({_level:rt,_override:0,_isolate:0}):ut||pt++}else if(Bn&(I|Me)){tn[ct]=Un._level;var ei=(Bn===I?gt:lt)(Un._level);ei<=pn&&!ut&&!pt?Qn.push({_level:ei,_override:Bn&I?ue:q,_isolate:0}):ut||pt++}else if(Bn&t){Bn&ge&&(Bn=ai(ct+1,!0)===1?Ie:ne),tn[ct]=Un._level,Un._override&&En(ct,Un._override);var ot=(Bn===Ie?gt:lt)(Un._level);ot<=pn&&ut===0&&pt===0?(Nt++,Qn.push({_level:ot,_override:0,_isolate:1,_isolInitIndex:ct})):ut++}else if(Bn&Pe){if(ut>0)ut--;else if(Nt>0){for(pt=0;!Qn[Qn.length-1]._isolate;)Qn.pop();var Jn=Qn[Qn.length-1]._isolInitIndex;Jn!=null&&(et.set(Jn,ct),et.set(ct,Jn)),Qn.pop(),Nt--}Un=Qn[Qn.length-1],tn[ct]=Un._level,Un._override&&En(ct,Un._override)}else Bn&he?(ut===0&&(pt>0?pt--:!Un._isolate&&Qn.length>1&&(Qn.pop(),Un=Qn[Qn.length-1])),tn[ct]=Un._level):Bn&ae&&(tn[ct]=Ze.level);else tn[ct]=Un._level,Un._override&&Bn!==sn&&En(ct,Un._override)}for(var At=[],ht=null,Wn=Ze.start;Wn<=Ze.end;Wn++){var mt=ye[Wn];if(!(mt&s)){var Dt=tn[Wn],Pt=mt&t,bt=mt===Pe;ht&&Dt===ht._level?(ht._end=Wn,ht._endsWithIsolInit=Pt):At.push(ht={_start:Wn,_end:Wn,_level:Dt,_startsWithPDI:bt,_endsWithIsolInit:Pt})}}for(var Vt=[],ni=0;ni<At.length;ni++){var Zt=At[ni];if(!Zt._startsWithPDI||Zt._startsWithPDI&&!et.has(Zt._start)){for(var ti=[ht=Zt],ci=void 0;ht&&ht._endsWithIsolInit&&(ci=et.get(ht._end))!=null;)for(var jt=ni+1;jt<At.length;jt++)if(At[jt]._start===ci){ti.push(ht=At[jt]);break}for(var It=[],fi=0;fi<ti.length;fi++)for(var _a=ti[fi],mr=_a._start;mr<=_a._end;mr++)It.push(mr);for(var Oo=tn[It[0]],ga=Ze.level,qi=It[0]-1;qi>=0;qi--)if(!(ye[qi]&s)){ga=tn[qi];break}var vr=It[It.length-1],Bo=tn[vr],Sa=Ze.level;if(!(ye[vr]&t)){for(var Qi=vr+1;Qi<=Ze.end;Qi++)if(!(ye[Qi]&s)){Sa=tn[Qi];break}}Vt.push({_seqIndices:It,_sosType:Math.max(ga,Oo)%2?ue:q,_eosType:Math.max(Sa,Bo)%2?ue:q})}}for(var _r=0;_r<Vt.length;_r++){var gr=Vt[_r],Mn=gr._seqIndices,Ui=gr._sosType,Go=gr._eosType,ii=tn[Mn[0]]&1?ue:q;if(on.get(dn))for(var yi=0;yi<Mn.length;yi++){var Ea=Mn[yi];if(ye[Ea]&dn){for(var mi=Ui,wi=yi-1;wi>=0;wi--)if(!(ye[Mn[wi]]&s)){mi=ye[Mn[wi]];break}En(Ea,mi&(t|Pe)?Le:mi)}}if(on.get(we))for(var Zi=0;Zi<Mn.length;Zi++){var Ta=Mn[Zi];if(ye[Ta]&we)for(var ji=Zi-1;ji>=-1;ji--){var Sr=ji===-1?Ui:ye[Mn[ji]];if(Sr&l){Sr===Ce&&En(Ta,z);break}}}if(on.get(Ce))for(var Er=0;Er<Mn.length;Er++){var Tr=Mn[Er];ye[Tr]&Ce&&En(Tr,ue)}if(on.get(xe)||on.get(Ae))for(var Pi=1;Pi<Mn.length-1;Pi++){var Mr=Mn[Pi];if(ye[Mr]&(xe|Ae)){for(var Jt=0,xr=0,Ar=Pi-1;Ar>=0&&(Jt=ye[Mn[Ar]],!!(Jt&s));Ar--);for(var Rr=Pi+1;Rr<Mn.length&&(xr=ye[Mn[Rr]],!!(xr&s));Rr++);Jt===xr&&(ye[Mr]===xe?Jt===we:Jt&(we|z))&&En(Mr,Jt)}}if(on.get(we))for(var Yt=0;Yt<Mn.length;Yt++){var Li=Mn[Yt];if(ye[Li]&we){for(var Di=Yt-1;Di>=0&&ye[Mn[Di]]&(je|s);Di--)En(Mn[Di],we);for(Yt++;Yt<Mn.length&&ye[Mn[Yt]]&(je|s|we);Yt++)ye[Mn[Yt]]!==we&&En(Mn[Yt],we)}}if(on.get(je)||on.get(xe)||on.get(Ae))for(var vi=0;vi<Mn.length;vi++){var Ma=Mn[vi];if(ye[Ma]&(je|xe|Ae)){En(Ma,Le);for(var _i=vi-1;_i>=0&&ye[Mn[_i]]&s;_i--)En(Mn[_i],Le);for(var Ji=vi+1;Ji<Mn.length&&ye[Mn[Ji]]&s;Ji++)En(Mn[Ji],Le)}}if(on.get(we))for(var br=0,xa=Ui;br<Mn.length;br++){var Cr=Mn[br],Ur=ye[Cr];Ur&we?xa===q&&En(Cr,q):Ur&l&&(xa=Ur)}if(on.get(c)){var gi=ue|we|z,Aa=gi|q,$i=[];{for(var Si=[],Ei=0;Ei<Mn.length;Ei++)if(ye[Mn[Ei]]&c){var Ii=We[Mn[Ei]],Ra=void 0;if(ee(Ii)!==null)if(Si.length<63)Si.push({char:Ii,seqIndex:Ei});else break;else if((Ra=le(Ii))!==null)for(var Ni=Si.length-1;Ni>=0;Ni--){var yr=Si[Ni].char;if(yr===Ra||yr===le(_e(Ii))||ee(_e(yr))===Ii){$i.push([Si[Ni].seqIndex,Ei]),Si.length=Ni;break}}}$i.sort(function(Ft,Wt){return Ft[0]-Wt[0]})}for(var wr=0;wr<$i.length;wr++){for(var ba=$i[wr],er=ba[0],Pr=ba[1],Lr=!1,kt=0,Dr=er+1;Dr<Pr;Dr++){var Ca=Mn[Dr];if(ye[Ca]&Aa){Lr=!0;var Ua=ye[Ca]&gi?ue:q;if(Ua===ii){kt=Ua;break}}}if(Lr&&!kt){kt=Ui;for(var Ir=er-1;Ir>=0;Ir--){var ya=Mn[Ir];if(ye[ya]&Aa){var wa=ye[ya]&gi?ue:q;wa!==ii?kt=wa:kt=ii;break}}}if(kt){if(ye[Mn[er]]=ye[Mn[Pr]]=kt,kt!==ii){for(var Ti=er+1;Ti<Mn.length;Ti++)if(!(ye[Mn[Ti]]&s)){x(We[Mn[Ti]])&dn&&(ye[Mn[Ti]]=kt);break}}if(kt!==ii){for(var Fi=Pr+1;Fi<Mn.length;Fi++)if(!(ye[Mn[Fi]]&s)){x(We[Mn[Fi]])&dn&&(ye[Mn[Fi]]=kt);break}}}}for(var ri=0;ri<Mn.length;ri++)if(ye[Mn[ri]]&c){for(var Pa=ri,Nr=ri,Fr=Ui,Oi=ri-1;Oi>=0;Oi--)if(ye[Mn[Oi]]&s)Pa=Oi;else{Fr=ye[Mn[Oi]]&gi?ue:q;break}for(var La=Go,Mi=ri+1;Mi<Mn.length;Mi++)if(ye[Mn[Mi]]&(c|s))Nr=Mi;else{La=ye[Mn[Mi]]&gi?ue:q;break}for(var nr=Pa;nr<=Nr;nr++)ye[Mn[nr]]=Fr===La?Fr:ii;ri=Nr}}}for(var Bt=Ze.start;Bt<=Ze.end;Bt++){var ko=tn[Bt],tr=ye[Bt];if(ko&1?tr&(q|we|z)&&tn[Bt]++:tr&ue?tn[Bt]++:tr&(z|we)&&(tn[Bt]+=2),tr&s&&(tn[Bt]=Bt===0?Ze.level:tn[Bt-1]),Bt===Ze.end||x(We[Bt])&(Ge|ae))for(var ir=Bt;ir>=0&&x(We[ir])&f;ir--)tn[ir]=Ze.level}}return{levels:tn,paragraphs:fn};function ai(Ft,Wt){for(var Ot=Ft;Ot<We.length;Ot++){var e=ye[Ot];if(e&(ue|Ce))return 1;if(e&(ae|q)||Wt&&e===Pe)return 0;if(e&t){var o=Ho(Ot);Ot=o===-1?We.length:o}}return 0}function Ho(Ft){for(var Wt=1,Ot=Ft+1;Ot<We.length;Ot++){var e=ye[Ot];if(e&ae)break;if(e&Pe){if(--Wt===0)return Ot}else e&t&&Wt++}return-1}}var vn="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",Xe;function Fe(){if(!Xe){var We=F(vn,!0),_n=We.map,pn=We.reverseMap;pn.forEach(function(ye,Vn){_n.set(Vn,ye)}),Xe=_n}}function Yn(We){return Fe(),Xe.get(We)||null}function Dn(We,_n,pn,ye){var Vn=We.length;pn=Math.max(0,pn==null?0:+pn),ye=Math.min(Vn-1,ye==null?Vn-1:+ye);for(var on=new Map,En=pn;En<=ye;En++)if(_n[En]&1){var tn=Yn(We[En]);tn!==null&&on.set(En,tn)}return on}function ln(We,_n,pn,ye){var Vn=We.length;pn=Math.max(0,pn==null?0:+pn),ye=Math.min(Vn-1,ye==null?Vn-1:+ye);var on=[];return _n.paragraphs.forEach(function(En){var tn=Math.max(pn,En.start),et=Math.min(ye,En.end);if(tn<et){for(var fn=_n.levels.slice(tn,et+1),Ze=et;Ze>=tn&&x(We[Ze])&f;Ze--)fn[Ze]=En.level;for(var an=En.level,Hn=1/0,lt=0;lt<fn.length;lt++){var gt=fn[lt];gt>an&&(an=gt),gt<Hn&&(Hn=gt|1)}for(var qn=an;qn>=Hn;qn--)for(var Qn=0;Qn<fn.length;Qn++)if(fn[Qn]>=qn){for(var Un=Qn;Qn+1<fn.length&&fn[Qn+1]>=qn;)Qn++;Qn>Un&&on.push([Un+tn,Qn+tn])}}}),on}function Sn(We,_n,pn,ye){var Vn=bn(We,_n,pn,ye),on=[].concat(We);return Vn.forEach(function(En,tn){on[tn]=(_n.levels[En]&1?Yn(We[En]):null)||We[En]}),on.join("")}function bn(We,_n,pn,ye){for(var Vn=ln(We,_n,pn,ye),on=[],En=0;En<We.length;En++)on[En]=En;return Vn.forEach(function(tn){for(var et=tn[0],fn=tn[1],Ze=on.slice(et,fn+1),an=Ze.length;an--;)on[fn-an]=Ze[an]}),on}return a.closingToOpeningBracket=le,a.getBidiCharType=x,a.getBidiCharTypeName=S,a.getCanonicalBracket=_e,a.getEmbeddingLevels=en,a.getMirroredCharacter=Yn,a.getMirroredCharactersMap=Dn,a.getReorderSegments=ln,a.getReorderedIndices=bn,a.getReorderedString=Sn,a.openingToClosingBracket=ee,Object.defineProperty(a,"__esModule",{value:!0}),a}({});return C}const Ha=ka;var Va=Qt(720699);const Vr=/\bvoid\s+main\s*\(\s*\)\s*{/g;function lr(C){const a=/^[ \t]*#include +<([\w\d./]+)>/gm;function R(g,i){let t=Va.ShaderChunk[i];return t?lr(t):g}return C.replace(a,R)}const yt=[];for(let C=0;C<256;C++)yt[C]=(C<16?"0":"")+C.toString(16);function Wa(){const C=Math.random()*4294967295|0,a=Math.random()*4294967295|0,R=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(yt[C&255]+yt[C>>8&255]+yt[C>>16&255]+yt[C>>24&255]+"-"+yt[a&255]+yt[a>>8&255]+"-"+yt[a>>16&15|64]+yt[a>>24&255]+"-"+yt[R&63|128]+yt[R>>8&255]+"-"+yt[R>>16&255]+yt[R>>24&255]+yt[g&255]+yt[g>>8&255]+yt[g>>16&255]+yt[g>>24&255]).toUpperCase()}const si=Object.assign||function(){let C=arguments[0];for(let a=1,R=arguments.length;a<R;a++){let g=arguments[a];if(g)for(let i in g)Object.prototype.hasOwnProperty.call(g,i)&&(C[i]=g[i])}return C},za=Date.now(),Wr=new WeakMap,zr=new Map;let Xa=1e10;function pi(C,a){const R=Qa(a);let g=Wr.get(C);if(g||Wr.set(C,g=Object.create(null)),g[R])return new g[R];const i=`_onBeforeCompile${R}`,t=function(f,u){C.onBeforeCompile.call(this,f,u);const T=this.customProgramCacheKey()+"|"+f.vertexShader+"|"+f.fragmentShader;let x=zr[T];if(!x){const S=Ya(this,f,a,R);x=zr[T]=S}f.vertexShader=x.vertexShader,f.fragmentShader=x.fragmentShader,si(f.uniforms,this.uniforms),a.timeUniform&&(f.uniforms[a.timeUniform]={get value(){return Date.now()-za}}),this[i]&&this[i](f)},l=function(){return c(a.chained?C:C.clone())},c=function(f){const u=Object.create(f,s);return Object.defineProperty(u,"baseMaterial",{value:C}),Object.defineProperty(u,"id",{value:Xa++}),u.uuid=Wa(),u.uniforms=si({},f.uniforms,a.uniforms),u.defines=si({},f.defines,a.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${R}`]="",u.extensions=si({},f.extensions,a.extensions),u._listeners=void 0,u},s={constructor:{value:l},isDerivedMaterial:{value:!0},type:{get:()=>C.type,set:f=>{C.type=f}},isDerivedFrom:{writable:!0,configurable:!0,value:function(f){const u=this.baseMaterial;return f===u||u.isDerivedMaterial&&u.isDerivedFrom(f)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return C.customProgramCacheKey()+"|"+R}},onBeforeCompile:{get(){return t},set(f){this[i]=f}},copy:{writable:!0,configurable:!0,value:function(f){return C.copy.call(this,f),!C.isShaderMaterial&&!C.isDerivedMaterial&&(si(this.extensions,f.extensions),si(this.defines,f.defines),si(this.uniforms,n.LlO.clone(f.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const f=new C.constructor;return c(f).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let f=this._depthMaterial;return f||(f=this._depthMaterial=pi(C.isDerivedMaterial?C.getDepthMaterial():new n.CSG({depthPacking:n.N5j}),a),f.defines.IS_DEPTH_MATERIAL="",f.uniforms=this.uniforms),f}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let f=this._distanceMaterial;return f||(f=this._distanceMaterial=pi(C.isDerivedMaterial?C.getDistanceMaterial():new n.aVO,a),f.defines.IS_DISTANCE_MATERIAL="",f.uniforms=this.uniforms),f}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:f,_distanceMaterial:u}=this;f&&f.dispose(),u&&u.dispose(),C.dispose.call(this)}}};return g[R]=l,new l}function Ya(C,{vertexShader:a,fragmentShader:R},g,i){let{vertexDefs:t,vertexMainIntro:l,vertexMainOutro:c,vertexTransform:s,fragmentDefs:f,fragmentMainIntro:u,fragmentMainOutro:T,fragmentColorTransform:x,customRewriter:S,timeUniform:U}=g;if(t=t||"",l=l||"",c=c||"",f=f||"",u=u||"",T=T||"",(s||S)&&(a=lr(a)),(x||S)&&(R=R.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),R=lr(R)),S){let F=S({vertexShader:a,fragmentShader:R});a=F.vertexShader,R=F.fragmentShader}if(x){let F=[];R=R.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,X=>(F.push(X),"")),T=`${x}
${F.join(`
`)}
${T}`}if(U){const F=`
uniform float ${U};
`;t=F+t,f=F+f}return s&&(a=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${a}
`,t=`${t}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${s}
}
`,l=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${l}
`,a=a.replace(/\b(position|normal|uv)\b/g,(F,X,Te,ce)=>/\battribute\s+vec[23]\s+$/.test(ce.substr(0,Te))?X:`troika_${X}_${i}`),C.map&&C.map.channel>0||(a=a.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),a=Xr(a,i,t,l,c),R=Xr(R,i,f,u,T),{vertexShader:a,fragmentShader:R}}function Xr(C,a,R,g,i){return(g||i||R)&&(C=C.replace(Vr,`
${R}
void troikaOrigMain${a}() {`),C+=`
void main() {
  ${g}
  troikaOrigMain${a}();
  ${i}
}`),C}function Ka(C,a){return C==="uniforms"?void 0:typeof a=="function"?a.toString():a}let qa=0;const Yr=new Map;function Qa(C){const a=JSON.stringify(C,Ka);let R=Yr.get(a);return R==null&&Yr.set(a,R=++qa),R}const Za={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function zo(C){let a=Za[C.type];return a?ShaderLib[a]:C}function Xo(C){let a=/\buniform\s+(int|float|vec[234]|mat[34])\s+([A-Za-z_][\w]*)/g,R=Object.create(null),g;for(;(g=a.exec(C))!==null;)R[g[2]]=g[1];return R}function Yo(C,a=new Matrix4){return typeof a.invert=="function"?a.copy(C).invert():a.getInverse(C),a}const ja=`
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`,Ja=`
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`,$a=`
uniform vec3 dashing;
varying float bezierT;
`,eo=`
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`;function no(C){return pi(C,{chained:!0,uniforms:{pointA:{value:new n.Pq0},controlA:{value:new n.Pq0},controlB:{value:new n.Pq0},pointB:{value:new n.Pq0},radius:{value:.01},dashing:{value:new n.Pq0}},vertexDefs:ja,vertexTransform:Ja,fragmentDefs:$a,fragmentMainIntro:eo})}let Kr=null;const qr=new n._4j({color:16777215,side:n.$EB});class Qr extends n.eaF{static getGeometry(){return Kr||(Kr=new n.Ho_(1,1,1,6,64).translate(0,.5,0))}constructor(){super(Qr.getGeometry(),qr),this.pointA=new n.Pq0,this.controlA=new n.Pq0,this.controlB=new n.Pq0,this.pointB=new n.Pq0,this.radius=.01,this.dashArray=new n.I9Y,this.dashOffset=0,this.frustumCulled=!1}get material(){let a=this._derivedMaterial;const R=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=qr.clone());return(!a||a.baseMaterial!==R)&&(a=this._derivedMaterial=no(R),R.addEventListener("dispose",function g(){R.removeEventListener("dispose",g),a.dispose()})),a}set material(a){this._baseMaterial=a}get customDepthMaterial(){return this.material.getDepthMaterial()}set customDepthMaterial(a){}get customDistanceMaterial(){return this.material.getDistanceMaterial()}set customDistanceMaterial(a){}onBeforeRender(){const{uniforms:a}=this.material,{pointA:R,controlA:g,controlB:i,pointB:t,radius:l,dashArray:c,dashOffset:s}=this;a.pointA.value.copy(R),a.controlA.value.copy(g),a.controlB.value.copy(i),a.pointB.value.copy(t),a.radius.value=l,a.dashing.value.set(c.x,c.y,s||0)}raycast(){}}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function to(){return typeof window>"u"&&(self.window=self),function(C){var a={parse:function(i){var t=a._bin,l=new Uint8Array(i);if(t.readASCII(l,0,4)=="ttcf"){var c=4;t.readUshort(l,c),c+=2,t.readUshort(l,c),c+=2;var s=t.readUint(l,c);c+=4;for(var f=[],u=0;u<s;u++){var T=t.readUint(l,c);c+=4,f.push(a._readFont(l,T))}return f}return[a._readFont(l,0)]},_readFont:function(i,t){var l=a._bin,c=t;l.readFixed(i,t),t+=4;var s=l.readUshort(i,t);t+=2,l.readUshort(i,t),t+=2,l.readUshort(i,t),t+=2,l.readUshort(i,t),t+=2;for(var f=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:c},T={},x=0;x<s;x++){var S=l.readASCII(i,t,4);t+=4,l.readUint(i,t),t+=4;var U=l.readUint(i,t);t+=4;var F=l.readUint(i,t);t+=4,T[S]={offset:U,length:F}}for(x=0;x<f.length;x++){var X=f[x];T[X]&&(u[X.trim()]=a[X.trim()].parse(i,T[X].offset,T[X].length,u))}return u},_tabOffset:function(i,t,l){for(var c=a._bin,s=c.readUshort(i,l+4),f=l+12,u=0;u<s;u++){var T=c.readASCII(i,f,4);f+=4,c.readUint(i,f),f+=4;var x=c.readUint(i,f);if(f+=4,c.readUint(i,f),f+=4,T==t)return x}return 0}};a._bin={readFixed:function(i,t){return(i[t]<<8|i[t+1])+(i[t+2]<<8|i[t+3])/65540},readF2dot14:function(i,t){return a._bin.readShort(i,t)/16384},readInt:function(i,t){return a._bin._view(i).getInt32(t)},readInt8:function(i,t){return a._bin._view(i).getInt8(t)},readShort:function(i,t){return a._bin._view(i).getInt16(t)},readUshort:function(i,t){return a._bin._view(i).getUint16(t)},readUshorts:function(i,t,l){for(var c=[],s=0;s<l;s++)c.push(a._bin.readUshort(i,t+2*s));return c},readUint:function(i,t){return a._bin._view(i).getUint32(t)},readUint64:function(i,t){return 4294967296*a._bin.readUint(i,t)+a._bin.readUint(i,t+4)},readASCII:function(i,t,l){for(var c="",s=0;s<l;s++)c+=String.fromCharCode(i[t+s]);return c},readUnicode:function(i,t,l){for(var c="",s=0;s<l;s++){var f=i[t++]<<8|i[t++];c+=String.fromCharCode(f)}return c},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,t,l){var c=a._bin._tdec;return c&&t==0&&l==i.length?c.decode(i):a._bin.readASCII(i,t,l)},readBytes:function(i,t,l){for(var c=[],s=0;s<l;s++)c.push(i[t+s]);return c},readASCIIArray:function(i,t,l){for(var c=[],s=0;s<l;s++)c.push(String.fromCharCode(i[t+s]));return c},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},a._lctf={},a._lctf.parse=function(i,t,l,c,s){var f=a._bin,u={},T=t;f.readFixed(i,t),t+=4;var x=f.readUshort(i,t);t+=2;var S=f.readUshort(i,t);t+=2;var U=f.readUshort(i,t);return t+=2,u.scriptList=a._lctf.readScriptList(i,T+x),u.featureList=a._lctf.readFeatureList(i,T+S),u.lookupList=a._lctf.readLookupList(i,T+U,s),u},a._lctf.readLookupList=function(i,t,l){var c=a._bin,s=t,f=[],u=c.readUshort(i,t);t+=2;for(var T=0;T<u;T++){var x=c.readUshort(i,t);t+=2;var S=a._lctf.readLookupTable(i,s+x,l);f.push(S)}return f},a._lctf.readLookupTable=function(i,t,l){var c=a._bin,s=t,f={tabs:[]};f.ltype=c.readUshort(i,t),t+=2,f.flag=c.readUshort(i,t),t+=2;var u=c.readUshort(i,t);t+=2;for(var T=f.ltype,x=0;x<u;x++){var S=c.readUshort(i,t);t+=2;var U=l(i,T,s+S,f);f.tabs.push(U)}return f},a._lctf.numOfOnes=function(i){for(var t=0,l=0;l<32;l++)i>>>l&1&&t++;return t},a._lctf.readClassDef=function(i,t){var l=a._bin,c=[],s=l.readUshort(i,t);if(t+=2,s==1){var f=l.readUshort(i,t);t+=2;var u=l.readUshort(i,t);t+=2;for(var T=0;T<u;T++)c.push(f+T),c.push(f+T),c.push(l.readUshort(i,t)),t+=2}if(s==2){var x=l.readUshort(i,t);for(t+=2,T=0;T<x;T++)c.push(l.readUshort(i,t)),t+=2,c.push(l.readUshort(i,t)),t+=2,c.push(l.readUshort(i,t)),t+=2}return c},a._lctf.getInterval=function(i,t){for(var l=0;l<i.length;l+=3){var c=i[l],s=i[l+1];if(i[l+2],c<=t&&t<=s)return l}return-1},a._lctf.readCoverage=function(i,t){var l=a._bin,c={};c.fmt=l.readUshort(i,t),t+=2;var s=l.readUshort(i,t);return t+=2,c.fmt==1&&(c.tab=l.readUshorts(i,t,s)),c.fmt==2&&(c.tab=l.readUshorts(i,t,3*s)),c},a._lctf.coverageIndex=function(i,t){var l=i.tab;if(i.fmt==1)return l.indexOf(t);if(i.fmt==2){var c=a._lctf.getInterval(l,t);if(c!=-1)return l[c+2]+(t-l[c])}return-1},a._lctf.readFeatureList=function(i,t){var l=a._bin,c=t,s=[],f=l.readUshort(i,t);t+=2;for(var u=0;u<f;u++){var T=l.readASCII(i,t,4);t+=4;var x=l.readUshort(i,t);t+=2;var S=a._lctf.readFeatureTable(i,c+x);S.tag=T.trim(),s.push(S)}return s},a._lctf.readFeatureTable=function(i,t){var l=a._bin,c=t,s={},f=l.readUshort(i,t);t+=2,f>0&&(s.featureParams=c+f);var u=l.readUshort(i,t);t+=2,s.tab=[];for(var T=0;T<u;T++)s.tab.push(l.readUshort(i,t+2*T));return s},a._lctf.readScriptList=function(i,t){var l=a._bin,c=t,s={},f=l.readUshort(i,t);t+=2;for(var u=0;u<f;u++){var T=l.readASCII(i,t,4);t+=4;var x=l.readUshort(i,t);t+=2,s[T.trim()]=a._lctf.readScriptTable(i,c+x)}return s},a._lctf.readScriptTable=function(i,t){var l=a._bin,c=t,s={},f=l.readUshort(i,t);t+=2,f>0&&(s.default=a._lctf.readLangSysTable(i,c+f));var u=l.readUshort(i,t);t+=2;for(var T=0;T<u;T++){var x=l.readASCII(i,t,4);t+=4;var S=l.readUshort(i,t);t+=2,s[x.trim()]=a._lctf.readLangSysTable(i,c+S)}return s},a._lctf.readLangSysTable=function(i,t){var l=a._bin,c={};l.readUshort(i,t),t+=2,c.reqFeature=l.readUshort(i,t),t+=2;var s=l.readUshort(i,t);return t+=2,c.features=l.readUshorts(i,t,s),c},a.CFF={},a.CFF.parse=function(i,t,l){var c=a._bin;(i=new Uint8Array(i.buffer,t,l))[t=0],i[++t],i[++t],i[++t],t++;var s=[];t=a.CFF.readIndex(i,t,s);for(var f=[],u=0;u<s.length-1;u++)f.push(c.readASCII(i,t+s[u],s[u+1]-s[u]));t+=s[s.length-1];var T=[];t=a.CFF.readIndex(i,t,T);var x=[];for(u=0;u<T.length-1;u++)x.push(a.CFF.readDict(i,t+T[u],t+T[u+1]));t+=T[T.length-1];var S=x[0],U=[];t=a.CFF.readIndex(i,t,U);var F=[];for(u=0;u<U.length-1;u++)F.push(c.readASCII(i,t+U[u],U[u+1]-U[u]));if(t+=U[U.length-1],a.CFF.readSubrs(i,t,S),S.CharStrings){t=S.CharStrings,U=[],t=a.CFF.readIndex(i,t,U);var X=[];for(u=0;u<U.length-1;u++)X.push(c.readBytes(i,t+U[u],U[u+1]-U[u]));S.CharStrings=X}if(S.ROS){t=S.FDArray;var Te=[];for(t=a.CFF.readIndex(i,t,Te),S.FDArray=[],u=0;u<Te.length-1;u++){var ce=a.CFF.readDict(i,t+Te[u],t+Te[u+1]);a.CFF._readFDict(i,ce,F),S.FDArray.push(ce)}t+=Te[Te.length-1],t=S.FDSelect,S.FDSelect=[];var se=i[t];if(t++,se!=3)throw se;var ee=c.readUshort(i,t);for(t+=2,u=0;u<ee+1;u++)S.FDSelect.push(c.readUshort(i,t),i[t+2]),t+=3}return S.Encoding&&(S.Encoding=a.CFF.readEncoding(i,S.Encoding,S.CharStrings.length)),S.charset&&(S.charset=a.CFF.readCharset(i,S.charset,S.CharStrings.length)),a.CFF._readFDict(i,S,F),S},a.CFF._readFDict=function(i,t,l){var c;for(var s in t.Private&&(c=t.Private[1],t.Private=a.CFF.readDict(i,c,c+t.Private[0]),t.Private.Subrs&&a.CFF.readSubrs(i,c+t.Private.Subrs,t.Private)),t)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(s)!=-1&&(t[s]=l[t[s]-426+35])},a.CFF.readSubrs=function(i,t,l){var c=a._bin,s=[];t=a.CFF.readIndex(i,t,s);var f,u=s.length;f=u<1240?107:u<33900?1131:32768,l.Bias=f,l.Subrs=[];for(var T=0;T<s.length-1;T++)l.Subrs.push(c.readBytes(i,t+s[T],s[T+1]-s[T]))},a.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],a.CFF.glyphByUnicode=function(i,t){for(var l=0;l<i.charset.length;l++)if(i.charset[l]==t)return l;return-1},a.CFF.glyphBySE=function(i,t){return t<0||t>255?-1:a.CFF.glyphByUnicode(i,a.CFF.tableSE[t])},a.CFF.readEncoding=function(i,t,l){a._bin;var c=[".notdef"],s=i[t];if(t++,s!=0)throw"error: unknown encoding format: "+s;var f=i[t];t++;for(var u=0;u<f;u++)c.push(i[t+u]);return c},a.CFF.readCharset=function(i,t,l){var c=a._bin,s=[".notdef"],f=i[t];if(t++,f==0)for(var u=0;u<l;u++){var T=c.readUshort(i,t);t+=2,s.push(T)}else{if(f!=1&&f!=2)throw"error: format: "+f;for(;s.length<l;){T=c.readUshort(i,t),t+=2;var x=0;for(f==1?(x=i[t],t++):(x=c.readUshort(i,t),t+=2),u=0;u<=x;u++)s.push(T),T++}}return s},a.CFF.readIndex=function(i,t,l){var c=a._bin,s=c.readUshort(i,t)+1,f=i[t+=2];if(t++,f==1)for(var u=0;u<s;u++)l.push(i[t+u]);else if(f==2)for(u=0;u<s;u++)l.push(c.readUshort(i,t+2*u));else if(f==3)for(u=0;u<s;u++)l.push(16777215&c.readUint(i,t+3*u-1));else if(s!=1)throw"unsupported offset size: "+f+", count: "+s;return(t+=s*f)-1},a.CFF.getCharString=function(i,t,l){var c=a._bin,s=i[t],f=i[t+1];i[t+2],i[t+3],i[t+4];var u=1,T=null,x=null;s<=20&&(T=s,u=1),s==12&&(T=100*s+f,u=2),21<=s&&s<=27&&(T=s,u=1),s==28&&(x=c.readShort(i,t+1),u=3),29<=s&&s<=31&&(T=s,u=1),32<=s&&s<=246&&(x=s-139,u=1),247<=s&&s<=250&&(x=256*(s-247)+f+108,u=2),251<=s&&s<=254&&(x=256*-(s-251)-f-108,u=2),s==255&&(x=c.readInt(i,t+1)/65535,u=5),l.val=x??"o"+T,l.size=u},a.CFF.readCharString=function(i,t,l){for(var c=t+l,s=a._bin,f=[];t<c;){var u=i[t],T=i[t+1];i[t+2],i[t+3],i[t+4];var x=1,S=null,U=null;u<=20&&(S=u,x=1),u==12&&(S=100*u+T,x=2),u!=19&&u!=20||(S=u,x=2),21<=u&&u<=27&&(S=u,x=1),u==28&&(U=s.readShort(i,t+1),x=3),29<=u&&u<=31&&(S=u,x=1),32<=u&&u<=246&&(U=u-139,x=1),247<=u&&u<=250&&(U=256*(u-247)+T+108,x=2),251<=u&&u<=254&&(U=256*-(u-251)-T-108,x=2),u==255&&(U=s.readInt(i,t+1)/65535,x=5),f.push(U??"o"+S),t+=x}return f},a.CFF.readDict=function(i,t,l){for(var c=a._bin,s={},f=[];t<l;){var u=i[t],T=i[t+1];i[t+2],i[t+3],i[t+4];var x=1,S=null,U=null;if(u==28&&(U=c.readShort(i,t+1),x=3),u==29&&(U=c.readInt(i,t+1),x=5),32<=u&&u<=246&&(U=u-139,x=1),247<=u&&u<=250&&(U=256*(u-247)+T+108,x=2),251<=u&&u<=254&&(U=256*-(u-251)-T-108,x=2),u==255)throw U=c.readInt(i,t+1)/65535,x=5,"unknown number";if(u==30){var F=[];for(x=1;;){var X=i[t+x];x++;var Te=X>>4,ce=15&X;if(Te!=15&&F.push(Te),ce!=15&&F.push(ce),ce==15)break}for(var se="",ee=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],le=0;le<F.length;le++)se+=ee[F[le]];U=parseFloat(se)}u<=21&&(S=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],x=1,u==12&&(S=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][T],x=2)),S!=null?(s[S]=f.length==1?f[0]:f,f=[]):f.push(U),t+=x}return s},a.cmap={},a.cmap.parse=function(i,t,l){i=new Uint8Array(i.buffer,t,l),t=0;var c=a._bin,s={};c.readUshort(i,t),t+=2;var f=c.readUshort(i,t);t+=2;var u=[];s.tables=[];for(var T=0;T<f;T++){var x=c.readUshort(i,t);t+=2;var S=c.readUshort(i,t);t+=2;var U=c.readUint(i,t);t+=4;var F="p"+x+"e"+S,X=u.indexOf(U);if(X==-1){var Te;X=s.tables.length,u.push(U);var ce=c.readUshort(i,U);ce==0?Te=a.cmap.parse0(i,U):ce==4?Te=a.cmap.parse4(i,U):ce==6?Te=a.cmap.parse6(i,U):ce==12?Te=a.cmap.parse12(i,U):console.debug("unknown format: "+ce,x,S,U),s.tables.push(Te)}if(s[F]!=null)throw"multiple tables for one platform+encoding";s[F]=X}return s},a.cmap.parse0=function(i,t){var l=a._bin,c={};c.format=l.readUshort(i,t),t+=2;var s=l.readUshort(i,t);t+=2,l.readUshort(i,t),t+=2,c.map=[];for(var f=0;f<s-6;f++)c.map.push(i[t+f]);return c},a.cmap.parse4=function(i,t){var l=a._bin,c=t,s={};s.format=l.readUshort(i,t),t+=2;var f=l.readUshort(i,t);t+=2,l.readUshort(i,t),t+=2;var u=l.readUshort(i,t);t+=2;var T=u/2;s.searchRange=l.readUshort(i,t),t+=2,s.entrySelector=l.readUshort(i,t),t+=2,s.rangeShift=l.readUshort(i,t),t+=2,s.endCount=l.readUshorts(i,t,T),t+=2*T,t+=2,s.startCount=l.readUshorts(i,t,T),t+=2*T,s.idDelta=[];for(var x=0;x<T;x++)s.idDelta.push(l.readShort(i,t)),t+=2;for(s.idRangeOffset=l.readUshorts(i,t,T),t+=2*T,s.glyphIdArray=[];t<c+f;)s.glyphIdArray.push(l.readUshort(i,t)),t+=2;return s},a.cmap.parse6=function(i,t){var l=a._bin,c={};c.format=l.readUshort(i,t),t+=2,l.readUshort(i,t),t+=2,l.readUshort(i,t),t+=2,c.firstCode=l.readUshort(i,t),t+=2;var s=l.readUshort(i,t);t+=2,c.glyphIdArray=[];for(var f=0;f<s;f++)c.glyphIdArray.push(l.readUshort(i,t)),t+=2;return c},a.cmap.parse12=function(i,t){var l=a._bin,c={};c.format=l.readUshort(i,t),t+=2,t+=2,l.readUint(i,t),t+=4,l.readUint(i,t),t+=4;var s=l.readUint(i,t);t+=4,c.groups=[];for(var f=0;f<s;f++){var u=t+12*f,T=l.readUint(i,u+0),x=l.readUint(i,u+4),S=l.readUint(i,u+8);c.groups.push([T,x,S])}return c},a.glyf={},a.glyf.parse=function(i,t,l,c){for(var s=[],f=0;f<c.maxp.numGlyphs;f++)s.push(null);return s},a.glyf._parseGlyf=function(i,t){var l=a._bin,c=i._data,s=a._tabOffset(c,"glyf",i._offset)+i.loca[t];if(i.loca[t]==i.loca[t+1])return null;var f={};if(f.noc=l.readShort(c,s),s+=2,f.xMin=l.readShort(c,s),s+=2,f.yMin=l.readShort(c,s),s+=2,f.xMax=l.readShort(c,s),s+=2,f.yMax=l.readShort(c,s),s+=2,f.xMin>=f.xMax||f.yMin>=f.yMax)return null;if(f.noc>0){f.endPts=[];for(var u=0;u<f.noc;u++)f.endPts.push(l.readUshort(c,s)),s+=2;var T=l.readUshort(c,s);if(s+=2,c.length-s<T)return null;f.instructions=l.readBytes(c,s,T),s+=T;var x=f.endPts[f.noc-1]+1;for(f.flags=[],u=0;u<x;u++){var S=c[s];if(s++,f.flags.push(S),(8&S)!=0){var U=c[s];s++;for(var F=0;F<U;F++)f.flags.push(S),u++}}for(f.xs=[],u=0;u<x;u++){var X=(2&f.flags[u])!=0,Te=(16&f.flags[u])!=0;X?(f.xs.push(Te?c[s]:-c[s]),s++):Te?f.xs.push(0):(f.xs.push(l.readShort(c,s)),s+=2)}for(f.ys=[],u=0;u<x;u++)X=(4&f.flags[u])!=0,Te=(32&f.flags[u])!=0,X?(f.ys.push(Te?c[s]:-c[s]),s++):Te?f.ys.push(0):(f.ys.push(l.readShort(c,s)),s+=2);var ce=0,se=0;for(u=0;u<x;u++)ce+=f.xs[u],se+=f.ys[u],f.xs[u]=ce,f.ys[u]=se}else{var ee;f.parts=[];do{ee=l.readUshort(c,s),s+=2;var le={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(f.parts.push(le),le.glyphIndex=l.readUshort(c,s),s+=2,1&ee){var _e=l.readShort(c,s);s+=2;var q=l.readShort(c,s);s+=2}else _e=l.readInt8(c,s),s++,q=l.readInt8(c,s),s++;2&ee?(le.m.tx=_e,le.m.ty=q):(le.p1=_e,le.p2=q),8&ee?(le.m.a=le.m.d=l.readF2dot14(c,s),s+=2):64&ee?(le.m.a=l.readF2dot14(c,s),s+=2,le.m.d=l.readF2dot14(c,s),s+=2):128&ee&&(le.m.a=l.readF2dot14(c,s),s+=2,le.m.b=l.readF2dot14(c,s),s+=2,le.m.c=l.readF2dot14(c,s),s+=2,le.m.d=l.readF2dot14(c,s),s+=2)}while(32&ee);if(256&ee){var ue=l.readUshort(c,s);for(s+=2,f.instr=[],u=0;u<ue;u++)f.instr.push(c[s]),s++}}return f},a.GDEF={},a.GDEF.parse=function(i,t,l,c){var s=t;t+=4;var f=a._bin.readUshort(i,t);return{glyphClassDef:f===0?null:a._lctf.readClassDef(i,s+f)}},a.GPOS={},a.GPOS.parse=function(i,t,l,c){return a._lctf.parse(i,t,l,c,a.GPOS.subt)},a.GPOS.subt=function(i,t,l,c){var s=a._bin,f=l,u={};if(u.fmt=s.readUshort(i,l),l+=2,t==1||t==2||t==3||t==7||t==8&&u.fmt<=2){var T=s.readUshort(i,l);l+=2,u.coverage=a._lctf.readCoverage(i,T+f)}if(t==1&&u.fmt==1){var x=s.readUshort(i,l);l+=2,x!=0&&(u.pos=a.GPOS.readValueRecord(i,l,x))}else if(t==2&&u.fmt>=1&&u.fmt<=2){x=s.readUshort(i,l),l+=2;var S=s.readUshort(i,l);l+=2;var U=a._lctf.numOfOnes(x),F=a._lctf.numOfOnes(S);if(u.fmt==1){u.pairsets=[];var X=s.readUshort(i,l);l+=2;for(var Te=0;Te<X;Te++){var ce=f+s.readUshort(i,l);l+=2;var se=s.readUshort(i,ce);ce+=2;for(var ee=[],le=0;le<se;le++){var _e=s.readUshort(i,ce);ce+=2,x!=0&&(z=a.GPOS.readValueRecord(i,ce,x),ce+=2*U),S!=0&&(Ae=a.GPOS.readValueRecord(i,ce,S),ce+=2*F),ee.push({gid2:_e,val1:z,val2:Ae})}u.pairsets.push(ee)}}if(u.fmt==2){var q=s.readUshort(i,l);l+=2;var ue=s.readUshort(i,l);l+=2;var we=s.readUshort(i,l);l+=2;var xe=s.readUshort(i,l);for(l+=2,u.classDef1=a._lctf.readClassDef(i,f+q),u.classDef2=a._lctf.readClassDef(i,f+ue),u.matrix=[],Te=0;Te<we;Te++){var je=[];for(le=0;le<xe;le++){var z=null,Ae=null;x!=0&&(z=a.GPOS.readValueRecord(i,l,x),l+=2*U),S!=0&&(Ae=a.GPOS.readValueRecord(i,l,S),l+=2*F),je.push({val1:z,val2:Ae})}u.matrix.push(je)}}}else if(t==4&&u.fmt==1)u.markCoverage=a._lctf.readCoverage(i,s.readUshort(i,l)+f),u.baseCoverage=a._lctf.readCoverage(i,s.readUshort(i,l+2)+f),u.markClassCount=s.readUshort(i,l+4),u.markArray=a.GPOS.readMarkArray(i,s.readUshort(i,l+6)+f),u.baseArray=a.GPOS.readBaseArray(i,s.readUshort(i,l+8)+f,u.markClassCount);else if(t==6&&u.fmt==1)u.mark1Coverage=a._lctf.readCoverage(i,s.readUshort(i,l)+f),u.mark2Coverage=a._lctf.readCoverage(i,s.readUshort(i,l+2)+f),u.markClassCount=s.readUshort(i,l+4),u.mark1Array=a.GPOS.readMarkArray(i,s.readUshort(i,l+6)+f),u.mark2Array=a.GPOS.readBaseArray(i,s.readUshort(i,l+8)+f,u.markClassCount);else{if(t==9&&u.fmt==1){var ae=s.readUshort(i,l);l+=2;var Ge=s.readUint(i,l);if(l+=4,c.ltype==9)c.ltype=ae;else if(c.ltype!=ae)throw"invalid extension substitution";return a.GPOS.subt(i,c.ltype,f+Ge)}console.debug("unsupported GPOS table LookupType",t,"format",u.fmt)}return u},a.GPOS.readValueRecord=function(i,t,l){var c=a._bin,s=[];return s.push(1&l?c.readShort(i,t):0),t+=1&l?2:0,s.push(2&l?c.readShort(i,t):0),t+=2&l?2:0,s.push(4&l?c.readShort(i,t):0),t+=4&l?2:0,s.push(8&l?c.readShort(i,t):0),t+=8&l?2:0,s},a.GPOS.readBaseArray=function(i,t,l){var c=a._bin,s=[],f=t,u=c.readUshort(i,t);t+=2;for(var T=0;T<u;T++){for(var x=[],S=0;S<l;S++)x.push(a.GPOS.readAnchorRecord(i,f+c.readUshort(i,t))),t+=2;s.push(x)}return s},a.GPOS.readMarkArray=function(i,t){var l=a._bin,c=[],s=t,f=l.readUshort(i,t);t+=2;for(var u=0;u<f;u++){var T=a.GPOS.readAnchorRecord(i,l.readUshort(i,t+2)+s);T.markClass=l.readUshort(i,t),c.push(T),t+=4}return c},a.GPOS.readAnchorRecord=function(i,t){var l=a._bin,c={};return c.fmt=l.readUshort(i,t),c.x=l.readShort(i,t+2),c.y=l.readShort(i,t+4),c},a.GSUB={},a.GSUB.parse=function(i,t,l,c){return a._lctf.parse(i,t,l,c,a.GSUB.subt)},a.GSUB.subt=function(i,t,l,c){var s=a._bin,f=l,u={};if(u.fmt=s.readUshort(i,l),l+=2,t!=1&&t!=2&&t!=4&&t!=5&&t!=6)return null;if(t==1||t==2||t==4||t==5&&u.fmt<=2||t==6&&u.fmt<=2){var T=s.readUshort(i,l);l+=2,u.coverage=a._lctf.readCoverage(i,f+T)}if(t==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=s.readShort(i,l),l+=2;else if(u.fmt==2){var x=s.readUshort(i,l);l+=2,u.newg=s.readUshorts(i,l,x),l+=2*u.newg.length}}else if(t==2&&u.fmt==1){x=s.readUshort(i,l),l+=2,u.seqs=[];for(var S=0;S<x;S++){var U=s.readUshort(i,l)+f;l+=2;var F=s.readUshort(i,U);u.seqs.push(s.readUshorts(i,U+2,F))}}else if(t==4)for(u.vals=[],x=s.readUshort(i,l),l+=2,S=0;S<x;S++){var X=s.readUshort(i,l);l+=2,u.vals.push(a.GSUB.readLigatureSet(i,f+X))}else if(t==5&&u.fmt==2){if(u.fmt==2){var Te=s.readUshort(i,l);l+=2,u.cDef=a._lctf.readClassDef(i,f+Te),u.scset=[];var ce=s.readUshort(i,l);for(l+=2,S=0;S<ce;S++){var se=s.readUshort(i,l);l+=2,u.scset.push(se==0?null:a.GSUB.readSubClassSet(i,f+se))}}}else if(t==6&&u.fmt==3){if(u.fmt==3){for(S=0;S<3;S++){x=s.readUshort(i,l),l+=2;for(var ee=[],le=0;le<x;le++)ee.push(a._lctf.readCoverage(i,f+s.readUshort(i,l+2*le)));l+=2*x,S==0&&(u.backCvg=ee),S==1&&(u.inptCvg=ee),S==2&&(u.ahedCvg=ee)}x=s.readUshort(i,l),l+=2,u.lookupRec=a.GSUB.readSubstLookupRecords(i,l,x)}}else{if(t==7&&u.fmt==1){var _e=s.readUshort(i,l);l+=2;var q=s.readUint(i,l);if(l+=4,c.ltype==9)c.ltype=_e;else if(c.ltype!=_e)throw"invalid extension substitution";return a.GSUB.subt(i,c.ltype,f+q)}console.debug("unsupported GSUB table LookupType",t,"format",u.fmt)}return u},a.GSUB.readSubClassSet=function(i,t){var l=a._bin.readUshort,c=t,s=[],f=l(i,t);t+=2;for(var u=0;u<f;u++){var T=l(i,t);t+=2,s.push(a.GSUB.readSubClassRule(i,c+T))}return s},a.GSUB.readSubClassRule=function(i,t){var l=a._bin.readUshort,c={},s=l(i,t),f=l(i,t+=2);t+=2,c.input=[];for(var u=0;u<s-1;u++)c.input.push(l(i,t)),t+=2;return c.substLookupRecords=a.GSUB.readSubstLookupRecords(i,t,f),c},a.GSUB.readSubstLookupRecords=function(i,t,l){for(var c=a._bin.readUshort,s=[],f=0;f<l;f++)s.push(c(i,t),c(i,t+2)),t+=4;return s},a.GSUB.readChainSubClassSet=function(i,t){var l=a._bin,c=t,s=[],f=l.readUshort(i,t);t+=2;for(var u=0;u<f;u++){var T=l.readUshort(i,t);t+=2,s.push(a.GSUB.readChainSubClassRule(i,c+T))}return s},a.GSUB.readChainSubClassRule=function(i,t){for(var l=a._bin,c={},s=["backtrack","input","lookahead"],f=0;f<s.length;f++){var u=l.readUshort(i,t);t+=2,f==1&&u--,c[s[f]]=l.readUshorts(i,t,u),t+=2*c[s[f]].length}return u=l.readUshort(i,t),t+=2,c.subst=l.readUshorts(i,t,2*u),t+=2*c.subst.length,c},a.GSUB.readLigatureSet=function(i,t){var l=a._bin,c=t,s=[],f=l.readUshort(i,t);t+=2;for(var u=0;u<f;u++){var T=l.readUshort(i,t);t+=2,s.push(a.GSUB.readLigature(i,c+T))}return s},a.GSUB.readLigature=function(i,t){var l=a._bin,c={chain:[]};c.nglyph=l.readUshort(i,t),t+=2;var s=l.readUshort(i,t);t+=2;for(var f=0;f<s-1;f++)c.chain.push(l.readUshort(i,t)),t+=2;return c},a.head={},a.head.parse=function(i,t,l){var c=a._bin,s={};return c.readFixed(i,t),t+=4,s.fontRevision=c.readFixed(i,t),t+=4,c.readUint(i,t),t+=4,c.readUint(i,t),t+=4,s.flags=c.readUshort(i,t),t+=2,s.unitsPerEm=c.readUshort(i,t),t+=2,s.created=c.readUint64(i,t),t+=8,s.modified=c.readUint64(i,t),t+=8,s.xMin=c.readShort(i,t),t+=2,s.yMin=c.readShort(i,t),t+=2,s.xMax=c.readShort(i,t),t+=2,s.yMax=c.readShort(i,t),t+=2,s.macStyle=c.readUshort(i,t),t+=2,s.lowestRecPPEM=c.readUshort(i,t),t+=2,s.fontDirectionHint=c.readShort(i,t),t+=2,s.indexToLocFormat=c.readShort(i,t),t+=2,s.glyphDataFormat=c.readShort(i,t),t+=2,s},a.hhea={},a.hhea.parse=function(i,t,l){var c=a._bin,s={};return c.readFixed(i,t),t+=4,s.ascender=c.readShort(i,t),t+=2,s.descender=c.readShort(i,t),t+=2,s.lineGap=c.readShort(i,t),t+=2,s.advanceWidthMax=c.readUshort(i,t),t+=2,s.minLeftSideBearing=c.readShort(i,t),t+=2,s.minRightSideBearing=c.readShort(i,t),t+=2,s.xMaxExtent=c.readShort(i,t),t+=2,s.caretSlopeRise=c.readShort(i,t),t+=2,s.caretSlopeRun=c.readShort(i,t),t+=2,s.caretOffset=c.readShort(i,t),t+=2,t+=8,s.metricDataFormat=c.readShort(i,t),t+=2,s.numberOfHMetrics=c.readUshort(i,t),t+=2,s},a.hmtx={},a.hmtx.parse=function(i,t,l,c){for(var s=a._bin,f={aWidth:[],lsBearing:[]},u=0,T=0,x=0;x<c.maxp.numGlyphs;x++)x<c.hhea.numberOfHMetrics&&(u=s.readUshort(i,t),t+=2,T=s.readShort(i,t),t+=2),f.aWidth.push(u),f.lsBearing.push(T);return f},a.kern={},a.kern.parse=function(i,t,l,c){var s=a._bin,f=s.readUshort(i,t);if(t+=2,f==1)return a.kern.parseV1(i,t-2,l,c);var u=s.readUshort(i,t);t+=2;for(var T={glyph1:[],rval:[]},x=0;x<u;x++){t+=2,l=s.readUshort(i,t),t+=2;var S=s.readUshort(i,t);t+=2;var U=S>>>8;if((U&=15)!=0)throw"unknown kern table format: "+U;t=a.kern.readFormat0(i,t,T)}return T},a.kern.parseV1=function(i,t,l,c){var s=a._bin;s.readFixed(i,t),t+=4;var f=s.readUint(i,t);t+=4;for(var u={glyph1:[],rval:[]},T=0;T<f;T++){s.readUint(i,t),t+=4;var x=s.readUshort(i,t);t+=2,s.readUshort(i,t),t+=2;var S=x>>>8;if((S&=15)!=0)throw"unknown kern table format: "+S;t=a.kern.readFormat0(i,t,u)}return u},a.kern.readFormat0=function(i,t,l){var c=a._bin,s=-1,f=c.readUshort(i,t);t+=2,c.readUshort(i,t),t+=2,c.readUshort(i,t),t+=2,c.readUshort(i,t),t+=2;for(var u=0;u<f;u++){var T=c.readUshort(i,t);t+=2;var x=c.readUshort(i,t);t+=2;var S=c.readShort(i,t);t+=2,T!=s&&(l.glyph1.push(T),l.rval.push({glyph2:[],vals:[]}));var U=l.rval[l.rval.length-1];U.glyph2.push(x),U.vals.push(S),s=T}return t},a.loca={},a.loca.parse=function(i,t,l,c){var s=a._bin,f=[],u=c.head.indexToLocFormat,T=c.maxp.numGlyphs+1;if(u==0)for(var x=0;x<T;x++)f.push(s.readUshort(i,t+(x<<1))<<1);if(u==1)for(x=0;x<T;x++)f.push(s.readUint(i,t+(x<<2)));return f},a.maxp={},a.maxp.parse=function(i,t,l){var c=a._bin,s={},f=c.readUint(i,t);return t+=4,s.numGlyphs=c.readUshort(i,t),t+=2,f==65536&&(s.maxPoints=c.readUshort(i,t),t+=2,s.maxContours=c.readUshort(i,t),t+=2,s.maxCompositePoints=c.readUshort(i,t),t+=2,s.maxCompositeContours=c.readUshort(i,t),t+=2,s.maxZones=c.readUshort(i,t),t+=2,s.maxTwilightPoints=c.readUshort(i,t),t+=2,s.maxStorage=c.readUshort(i,t),t+=2,s.maxFunctionDefs=c.readUshort(i,t),t+=2,s.maxInstructionDefs=c.readUshort(i,t),t+=2,s.maxStackElements=c.readUshort(i,t),t+=2,s.maxSizeOfInstructions=c.readUshort(i,t),t+=2,s.maxComponentElements=c.readUshort(i,t),t+=2,s.maxComponentDepth=c.readUshort(i,t),t+=2),s},a.name={},a.name.parse=function(i,t,l){var c=a._bin,s={};c.readUshort(i,t),t+=2;var f=c.readUshort(i,t);t+=2,c.readUshort(i,t);for(var u,T=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],x=t+=2,S=0;S<f;S++){var U=c.readUshort(i,t);t+=2;var F=c.readUshort(i,t);t+=2;var X=c.readUshort(i,t);t+=2;var Te=c.readUshort(i,t);t+=2;var ce=c.readUshort(i,t);t+=2;var se=c.readUshort(i,t);t+=2;var ee,le=T[Te],_e=x+12*f+se;if(U==0)ee=c.readUnicode(i,_e,ce/2);else if(U==3&&F==0)ee=c.readUnicode(i,_e,ce/2);else if(F==0)ee=c.readASCII(i,_e,ce);else if(F==1)ee=c.readUnicode(i,_e,ce/2);else if(F==3)ee=c.readUnicode(i,_e,ce/2);else{if(U!=1)throw"unknown encoding "+F+", platformID: "+U;ee=c.readASCII(i,_e,ce),console.debug("reading unknown MAC encoding "+F+" as ASCII")}var q="p"+U+","+X.toString(16);s[q]==null&&(s[q]={}),s[q][le!==void 0?le:Te]=ee,s[q]._lang=X}for(var ue in s)if(s[ue].postScriptName!=null&&s[ue]._lang==1033)return s[ue];for(var ue in s)if(s[ue].postScriptName!=null&&s[ue]._lang==0)return s[ue];for(var ue in s)if(s[ue].postScriptName!=null&&s[ue]._lang==3084)return s[ue];for(var ue in s)if(s[ue].postScriptName!=null)return s[ue];for(var ue in s){u=ue;break}return console.debug("returning name table with languageID "+s[u]._lang),s[u]},a["OS/2"]={},a["OS/2"].parse=function(i,t,l){var c=a._bin.readUshort(i,t);t+=2;var s={};if(c==0)a["OS/2"].version0(i,t,s);else if(c==1)a["OS/2"].version1(i,t,s);else if(c==2||c==3||c==4)a["OS/2"].version2(i,t,s);else{if(c!=5)throw"unknown OS/2 table version: "+c;a["OS/2"].version5(i,t,s)}return s},a["OS/2"].version0=function(i,t,l){var c=a._bin;return l.xAvgCharWidth=c.readShort(i,t),t+=2,l.usWeightClass=c.readUshort(i,t),t+=2,l.usWidthClass=c.readUshort(i,t),t+=2,l.fsType=c.readUshort(i,t),t+=2,l.ySubscriptXSize=c.readShort(i,t),t+=2,l.ySubscriptYSize=c.readShort(i,t),t+=2,l.ySubscriptXOffset=c.readShort(i,t),t+=2,l.ySubscriptYOffset=c.readShort(i,t),t+=2,l.ySuperscriptXSize=c.readShort(i,t),t+=2,l.ySuperscriptYSize=c.readShort(i,t),t+=2,l.ySuperscriptXOffset=c.readShort(i,t),t+=2,l.ySuperscriptYOffset=c.readShort(i,t),t+=2,l.yStrikeoutSize=c.readShort(i,t),t+=2,l.yStrikeoutPosition=c.readShort(i,t),t+=2,l.sFamilyClass=c.readShort(i,t),t+=2,l.panose=c.readBytes(i,t,10),t+=10,l.ulUnicodeRange1=c.readUint(i,t),t+=4,l.ulUnicodeRange2=c.readUint(i,t),t+=4,l.ulUnicodeRange3=c.readUint(i,t),t+=4,l.ulUnicodeRange4=c.readUint(i,t),t+=4,l.achVendID=[c.readInt8(i,t),c.readInt8(i,t+1),c.readInt8(i,t+2),c.readInt8(i,t+3)],t+=4,l.fsSelection=c.readUshort(i,t),t+=2,l.usFirstCharIndex=c.readUshort(i,t),t+=2,l.usLastCharIndex=c.readUshort(i,t),t+=2,l.sTypoAscender=c.readShort(i,t),t+=2,l.sTypoDescender=c.readShort(i,t),t+=2,l.sTypoLineGap=c.readShort(i,t),t+=2,l.usWinAscent=c.readUshort(i,t),t+=2,l.usWinDescent=c.readUshort(i,t),t+=2},a["OS/2"].version1=function(i,t,l){var c=a._bin;return t=a["OS/2"].version0(i,t,l),l.ulCodePageRange1=c.readUint(i,t),t+=4,l.ulCodePageRange2=c.readUint(i,t),t+=4},a["OS/2"].version2=function(i,t,l){var c=a._bin;return t=a["OS/2"].version1(i,t,l),l.sxHeight=c.readShort(i,t),t+=2,l.sCapHeight=c.readShort(i,t),t+=2,l.usDefault=c.readUshort(i,t),t+=2,l.usBreak=c.readUshort(i,t),t+=2,l.usMaxContext=c.readUshort(i,t),t+=2},a["OS/2"].version5=function(i,t,l){var c=a._bin;return t=a["OS/2"].version2(i,t,l),l.usLowerOpticalPointSize=c.readUshort(i,t),t+=2,l.usUpperOpticalPointSize=c.readUshort(i,t),t+=2},a.post={},a.post.parse=function(i,t,l){var c=a._bin,s={};return s.version=c.readFixed(i,t),t+=4,s.italicAngle=c.readFixed(i,t),t+=4,s.underlinePosition=c.readShort(i,t),t+=2,s.underlineThickness=c.readShort(i,t),t+=2,s},a==null&&(a={}),a.U==null&&(a.U={}),a.U.codeToGlyph=function(i,t){var l=i.cmap,c=-1;if(l.p0e4!=null?c=l.p0e4:l.p3e1!=null?c=l.p3e1:l.p1e0!=null?c=l.p1e0:l.p0e3!=null&&(c=l.p0e3),c==-1)throw"no familiar platform and encoding!";var s=l.tables[c];if(s.format==0)return t>=s.map.length?0:s.map[t];if(s.format==4){for(var f=-1,u=0;u<s.endCount.length;u++)if(t<=s.endCount[u]){f=u;break}return f==-1||s.startCount[f]>t?0:65535&(s.idRangeOffset[f]!=0?s.glyphIdArray[t-s.startCount[f]+(s.idRangeOffset[f]>>1)-(s.idRangeOffset.length-f)]:t+s.idDelta[f])}if(s.format==12){if(t>s.groups[s.groups.length-1][1])return 0;for(u=0;u<s.groups.length;u++){var T=s.groups[u];if(T[0]<=t&&t<=T[1])return T[2]+(t-T[0])}return 0}throw"unknown cmap table format "+s.format},a.U.glyphToPath=function(i,t){var l={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[t]){var c=i.SVG.entries[t];return c==null?l:(typeof c=="string"&&(c=a.SVG.toPath(c),i.SVG.entries[t]=c),c)}if(i.CFF){var s={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},f=i.CFF,u=i.CFF.Private;if(f.ROS){for(var T=0;f.FDSelect[T+2]<=t;)T+=2;u=f.FDArray[f.FDSelect[T+1]].Private}a.U._drawCFF(i.CFF.CharStrings[t],s,f,u,l)}else i.glyf&&a.U._drawGlyf(t,i,l);return l},a.U._drawGlyf=function(i,t,l){var c=t.glyf[i];c==null&&(c=t.glyf[i]=a.glyf._parseGlyf(t,i)),c!=null&&(c.noc>-1?a.U._simpleGlyph(c,l):a.U._compoGlyph(c,t,l))},a.U._simpleGlyph=function(i,t){for(var l=0;l<i.noc;l++){for(var c=l==0?0:i.endPts[l-1]+1,s=i.endPts[l],f=c;f<=s;f++){var u=f==c?s:f-1,T=f==s?c:f+1,x=1&i.flags[f],S=1&i.flags[u],U=1&i.flags[T],F=i.xs[f],X=i.ys[f];if(f==c)if(x){if(!S){a.U.P.moveTo(t,F,X);continue}a.U.P.moveTo(t,i.xs[u],i.ys[u])}else S?a.U.P.moveTo(t,i.xs[u],i.ys[u]):a.U.P.moveTo(t,(i.xs[u]+F)/2,(i.ys[u]+X)/2);x?S&&a.U.P.lineTo(t,F,X):U?a.U.P.qcurveTo(t,F,X,i.xs[T],i.ys[T]):a.U.P.qcurveTo(t,F,X,(F+i.xs[T])/2,(X+i.ys[T])/2)}a.U.P.closePath(t)}},a.U._compoGlyph=function(i,t,l){for(var c=0;c<i.parts.length;c++){var s={cmds:[],crds:[]},f=i.parts[c];a.U._drawGlyf(f.glyphIndex,t,s);for(var u=f.m,T=0;T<s.crds.length;T+=2){var x=s.crds[T],S=s.crds[T+1];l.crds.push(x*u.a+S*u.b+u.tx),l.crds.push(x*u.c+S*u.d+u.ty)}for(T=0;T<s.cmds.length;T++)l.cmds.push(s.cmds[T])}},a.U._getGlyphClass=function(i,t){var l=a._lctf.getInterval(t,i);return l==-1?0:t[l+2]},a.U._applySubs=function(i,t,l,c){for(var s=i.length-t-1,f=0;f<l.tabs.length;f++)if(l.tabs[f]!=null){var u,T=l.tabs[f];if(!T.coverage||(u=a._lctf.coverageIndex(T.coverage,i[t]))!=-1){if(l.ltype==1)i[t],T.fmt==1?i[t]=i[t]+T.delta:i[t]=T.newg[u];else if(l.ltype==4)for(var x=T.vals[u],S=0;S<x.length;S++){var U=x[S],F=U.chain.length;if(!(F>s)){for(var X=!0,Te=0,ce=0;ce<F;ce++){for(;i[t+Te+(1+ce)]==-1;)Te++;U.chain[ce]!=i[t+Te+(1+ce)]&&(X=!1)}if(X){for(i[t]=U.nglyph,ce=0;ce<F+Te;ce++)i[t+ce+1]=-1;break}}}else if(l.ltype==5&&T.fmt==2)for(var se=a._lctf.getInterval(T.cDef,i[t]),ee=T.cDef[se+2],le=T.scset[ee],_e=0;_e<le.length;_e++){var q=le[_e],ue=q.input;if(!(ue.length>s)){for(X=!0,ce=0;ce<ue.length;ce++){var we=a._lctf.getInterval(T.cDef,i[t+1+ce]);if(se==-1&&T.cDef[we+2]!=ue[ce]){X=!1;break}}if(X){var xe=q.substLookupRecords;for(S=0;S<xe.length;S+=2)xe[S],xe[S+1]}}}else if(l.ltype==6&&T.fmt==3){if(!a.U._glsCovered(i,T.backCvg,t-T.backCvg.length)||!a.U._glsCovered(i,T.inptCvg,t)||!a.U._glsCovered(i,T.ahedCvg,t+T.inptCvg.length))continue;var je=T.lookupRec;for(_e=0;_e<je.length;_e+=2){se=je[_e];var z=c[je[_e+1]];a.U._applySubs(i,t+se,z,c)}}}}},a.U._glsCovered=function(i,t,l){for(var c=0;c<t.length;c++)if(a._lctf.coverageIndex(t[c],i[l+c])==-1)return!1;return!0},a.U.glyphsToPath=function(i,t,l){for(var c={cmds:[],crds:[]},s=0,f=0;f<t.length;f++){var u=t[f];if(u!=-1){for(var T=f<t.length-1&&t[f+1]!=-1?t[f+1]:0,x=a.U.glyphToPath(i,u),S=0;S<x.crds.length;S+=2)c.crds.push(x.crds[S]+s),c.crds.push(x.crds[S+1]);for(l&&c.cmds.push(l),S=0;S<x.cmds.length;S++)c.cmds.push(x.cmds[S]);l&&c.cmds.push("X"),s+=i.hmtx.aWidth[u],f<t.length-1&&(s+=a.U.getPairAdjustment(i,u,T))}}return c},a.U.P={},a.U.P.moveTo=function(i,t,l){i.cmds.push("M"),i.crds.push(t,l)},a.U.P.lineTo=function(i,t,l){i.cmds.push("L"),i.crds.push(t,l)},a.U.P.curveTo=function(i,t,l,c,s,f,u){i.cmds.push("C"),i.crds.push(t,l,c,s,f,u)},a.U.P.qcurveTo=function(i,t,l,c,s){i.cmds.push("Q"),i.crds.push(t,l,c,s)},a.U.P.closePath=function(i){i.cmds.push("Z")},a.U._drawCFF=function(i,t,l,c,s){for(var f=t.stack,u=t.nStems,T=t.haveWidth,x=t.width,S=t.open,U=0,F=t.x,X=t.y,Te=0,ce=0,se=0,ee=0,le=0,_e=0,q=0,ue=0,we=0,xe=0,je={val:0,size:0};U<i.length;){a.CFF.getCharString(i,U,je);var z=je.val;if(U+=je.size,z=="o1"||z=="o18")f.length%2!=0&&!T&&(x=f.shift()+c.nominalWidthX),u+=f.length>>1,f.length=0,T=!0;else if(z=="o3"||z=="o23")f.length%2!=0&&!T&&(x=f.shift()+c.nominalWidthX),u+=f.length>>1,f.length=0,T=!0;else if(z=="o4")f.length>1&&!T&&(x=f.shift()+c.nominalWidthX,T=!0),S&&a.U.P.closePath(s),X+=f.pop(),a.U.P.moveTo(s,F,X),S=!0;else if(z=="o5")for(;f.length>0;)F+=f.shift(),X+=f.shift(),a.U.P.lineTo(s,F,X);else if(z=="o6"||z=="o7")for(var Ae=f.length,ae=z=="o6",Ge=0;Ge<Ae;Ge++){var Le=f.shift();ae?F+=Le:X+=Le,ae=!ae,a.U.P.lineTo(s,F,X)}else if(z=="o8"||z=="o24"){Ae=f.length;for(var sn=0;sn+6<=Ae;)Te=F+f.shift(),ce=X+f.shift(),se=Te+f.shift(),ee=ce+f.shift(),F=se+f.shift(),X=ee+f.shift(),a.U.P.curveTo(s,Te,ce,se,ee,F,X),sn+=6;z=="o24"&&(F+=f.shift(),X+=f.shift(),a.U.P.lineTo(s,F,X))}else{if(z=="o11")break;if(z=="o1234"||z=="o1235"||z=="o1236"||z=="o1237")z=="o1234"&&(ce=X,se=(Te=F+f.shift())+f.shift(),xe=ee=ce+f.shift(),_e=ee,ue=X,F=(q=(le=(we=se+f.shift())+f.shift())+f.shift())+f.shift(),a.U.P.curveTo(s,Te,ce,se,ee,we,xe),a.U.P.curveTo(s,le,_e,q,ue,F,X)),z=="o1235"&&(Te=F+f.shift(),ce=X+f.shift(),se=Te+f.shift(),ee=ce+f.shift(),we=se+f.shift(),xe=ee+f.shift(),le=we+f.shift(),_e=xe+f.shift(),q=le+f.shift(),ue=_e+f.shift(),F=q+f.shift(),X=ue+f.shift(),f.shift(),a.U.P.curveTo(s,Te,ce,se,ee,we,xe),a.U.P.curveTo(s,le,_e,q,ue,F,X)),z=="o1236"&&(Te=F+f.shift(),ce=X+f.shift(),se=Te+f.shift(),xe=ee=ce+f.shift(),_e=ee,q=(le=(we=se+f.shift())+f.shift())+f.shift(),ue=_e+f.shift(),F=q+f.shift(),a.U.P.curveTo(s,Te,ce,se,ee,we,xe),a.U.P.curveTo(s,le,_e,q,ue,F,X)),z=="o1237"&&(Te=F+f.shift(),ce=X+f.shift(),se=Te+f.shift(),ee=ce+f.shift(),we=se+f.shift(),xe=ee+f.shift(),le=we+f.shift(),_e=xe+f.shift(),q=le+f.shift(),ue=_e+f.shift(),Math.abs(q-F)>Math.abs(ue-X)?F=q+f.shift():X=ue+f.shift(),a.U.P.curveTo(s,Te,ce,se,ee,we,xe),a.U.P.curveTo(s,le,_e,q,ue,F,X));else if(z=="o14"){if(f.length>0&&!T&&(x=f.shift()+l.nominalWidthX,T=!0),f.length==4){var dn=f.shift(),Ce=f.shift(),Me=f.shift(),I=f.shift(),Q=a.CFF.glyphBySE(l,Me),oe=a.CFF.glyphBySE(l,I);a.U._drawCFF(l.CharStrings[Q],t,l,c,s),t.x=dn,t.y=Ce,a.U._drawCFF(l.CharStrings[oe],t,l,c,s)}S&&(a.U.P.closePath(s),S=!1)}else if(z=="o19"||z=="o20")f.length%2!=0&&!T&&(x=f.shift()+c.nominalWidthX),u+=f.length>>1,f.length=0,T=!0,U+=u+7>>3;else if(z=="o21")f.length>2&&!T&&(x=f.shift()+c.nominalWidthX,T=!0),X+=f.pop(),F+=f.pop(),S&&a.U.P.closePath(s),a.U.P.moveTo(s,F,X),S=!0;else if(z=="o22")f.length>1&&!T&&(x=f.shift()+c.nominalWidthX,T=!0),F+=f.pop(),S&&a.U.P.closePath(s),a.U.P.moveTo(s,F,X),S=!0;else if(z=="o25"){for(;f.length>6;)F+=f.shift(),X+=f.shift(),a.U.P.lineTo(s,F,X);Te=F+f.shift(),ce=X+f.shift(),se=Te+f.shift(),ee=ce+f.shift(),F=se+f.shift(),X=ee+f.shift(),a.U.P.curveTo(s,Te,ce,se,ee,F,X)}else if(z=="o26")for(f.length%2&&(F+=f.shift());f.length>0;)Te=F,ce=X+f.shift(),F=se=Te+f.shift(),X=(ee=ce+f.shift())+f.shift(),a.U.P.curveTo(s,Te,ce,se,ee,F,X);else if(z=="o27")for(f.length%2&&(X+=f.shift());f.length>0;)ce=X,se=(Te=F+f.shift())+f.shift(),ee=ce+f.shift(),F=se+f.shift(),X=ee,a.U.P.curveTo(s,Te,ce,se,ee,F,X);else if(z=="o10"||z=="o29"){var he=z=="o10"?c:l;if(f.length==0)console.debug("error: empty stack");else{var ne=f.pop(),Ie=he.Subrs[ne+he.Bias];t.x=F,t.y=X,t.nStems=u,t.haveWidth=T,t.width=x,t.open=S,a.U._drawCFF(Ie,t,l,c,s),F=t.x,X=t.y,u=t.nStems,T=t.haveWidth,x=t.width,S=t.open}}else if(z=="o30"||z=="o31"){var ge=f.length,Pe=(sn=0,z=="o31");for(sn+=ge-(Ae=-3&ge);sn<Ae;)Pe?(ce=X,se=(Te=F+f.shift())+f.shift(),X=(ee=ce+f.shift())+f.shift(),Ae-sn==5?(F=se+f.shift(),sn++):F=se,Pe=!1):(Te=F,ce=X+f.shift(),se=Te+f.shift(),ee=ce+f.shift(),F=se+f.shift(),Ae-sn==5?(X=ee+f.shift(),sn++):X=ee,Pe=!0),a.U.P.curveTo(s,Te,ce,se,ee,F,X),sn+=4}else{if((z+"").charAt(0)=="o")throw console.debug("Unknown operation: "+z,i),z;f.push(z)}}}t.x=F,t.y=X,t.nStems=u,t.haveWidth=T,t.width=x,t.open=S};var R=a,g={Typr:R};return C.Typr=R,C.default=g,Object.defineProperty(C,"__esModule",{value:!0}),C}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function io(){return function(C){var a=Uint8Array,R=Uint16Array,g=Uint32Array,i=new a([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),t=new a([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),l=new a([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),c=function(z,Ae){for(var ae=new R(31),Ge=0;Ge<31;++Ge)ae[Ge]=Ae+=1<<z[Ge-1];var Le=new g(ae[30]);for(Ge=1;Ge<30;++Ge)for(var sn=ae[Ge];sn<ae[Ge+1];++sn)Le[sn]=sn-ae[Ge]<<5|Ge;return[ae,Le]},s=c(i,2),f=s[0],u=s[1];f[28]=258,u[258]=28;for(var T=c(t,0)[0],x=new R(32768),S=0;S<32768;++S){var U=(43690&S)>>>1|(21845&S)<<1;U=(61680&(U=(52428&U)>>>2|(13107&U)<<2))>>>4|(3855&U)<<4,x[S]=((65280&U)>>>8|(255&U)<<8)>>>1}var F=function(z,Ae,ae){for(var Ge=z.length,Le=0,sn=new R(Ae);Le<Ge;++Le)++sn[z[Le]-1];var dn,Ce=new R(Ae);for(Le=0;Le<Ae;++Le)Ce[Le]=Ce[Le-1]+sn[Le-1]<<1;if(ae){dn=new R(1<<Ae);var Me=15-Ae;for(Le=0;Le<Ge;++Le)if(z[Le])for(var I=Le<<4|z[Le],Q=Ae-z[Le],oe=Ce[z[Le]-1]++<<Q,he=oe|(1<<Q)-1;oe<=he;++oe)dn[x[oe]>>>Me]=I}else for(dn=new R(Ge),Le=0;Le<Ge;++Le)z[Le]&&(dn[Le]=x[Ce[z[Le]-1]++]>>>15-z[Le]);return dn},X=new a(288);for(S=0;S<144;++S)X[S]=8;for(S=144;S<256;++S)X[S]=9;for(S=256;S<280;++S)X[S]=7;for(S=280;S<288;++S)X[S]=8;var Te=new a(32);for(S=0;S<32;++S)Te[S]=5;var ce=F(X,9,1),se=F(Te,5,1),ee=function(z){for(var Ae=z[0],ae=1;ae<z.length;++ae)z[ae]>Ae&&(Ae=z[ae]);return Ae},le=function(z,Ae,ae){var Ge=Ae/8|0;return(z[Ge]|z[Ge+1]<<8)>>(7&Ae)&ae},_e=function(z,Ae){var ae=Ae/8|0;return(z[ae]|z[ae+1]<<8|z[ae+2]<<16)>>(7&Ae)},q=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ue=function(z,Ae,ae){var Ge=new Error(Ae||q[z]);if(Ge.code=z,Error.captureStackTrace&&Error.captureStackTrace(Ge,ue),!ae)throw Ge;return Ge},we=function(z,Ae,ae){var Ge=z.length;if(!Ge||ae&&!ae.l&&Ge<5)return Ae||new a(0);var Le=!Ae||ae,sn=!ae||ae.i;ae||(ae={}),Ae||(Ae=new a(3*Ge));var dn,Ce=function(Un){var ut=Ae.length;if(Un>ut){var pt=new a(Math.max(2*ut,Un));pt.set(Ae),Ae=pt}},Me=ae.f||0,I=ae.p||0,Q=ae.b||0,oe=ae.l,he=ae.d,ne=ae.m,Ie=ae.n,ge=8*Ge;do{if(!oe){ae.f=Me=le(z,I,1);var Pe=le(z,I+1,3);if(I+=3,!Pe){var en=z[(pn=((dn=I)/8|0)+(7&dn&&1)+4)-4]|z[pn-3]<<8,vn=pn+en;if(vn>Ge){sn&&ue(0);break}Le&&Ce(Q+en),Ae.set(z.subarray(pn,vn),Q),ae.b=Q+=en,ae.p=I=8*vn;continue}if(Pe==1)oe=ce,he=se,ne=9,Ie=5;else if(Pe==2){var Xe=le(z,I,31)+257,Fe=le(z,I+10,15)+4,Yn=Xe+le(z,I+5,31)+1;I+=14;for(var Dn=new a(Yn),ln=new a(19),Sn=0;Sn<Fe;++Sn)ln[l[Sn]]=le(z,I+3*Sn,7);I+=3*Fe;var bn=ee(ln),We=(1<<bn)-1,_n=F(ln,bn,1);for(Sn=0;Sn<Yn;){var pn,ye=_n[le(z,I,We)];if(I+=15&ye,(pn=ye>>>4)<16)Dn[Sn++]=pn;else{var Vn=0,on=0;for(pn==16?(on=3+le(z,I,3),I+=2,Vn=Dn[Sn-1]):pn==17?(on=3+le(z,I,7),I+=3):pn==18&&(on=11+le(z,I,127),I+=7);on--;)Dn[Sn++]=Vn}}var En=Dn.subarray(0,Xe),tn=Dn.subarray(Xe);ne=ee(En),Ie=ee(tn),oe=F(En,ne,1),he=F(tn,Ie,1)}else ue(1);if(I>ge){sn&&ue(0);break}}Le&&Ce(Q+131072);for(var et=(1<<ne)-1,fn=(1<<Ie)-1,Ze=I;;Ze=I){var an=(Vn=oe[_e(z,I)&et])>>>4;if((I+=15&Vn)>ge){sn&&ue(0);break}if(Vn||ue(2),an<256)Ae[Q++]=an;else{if(an==256){Ze=I,oe=null;break}var Hn=an-254;if(an>264){var lt=i[Sn=an-257];Hn=le(z,I,(1<<lt)-1)+f[Sn],I+=lt}var gt=he[_e(z,I)&fn],qn=gt>>>4;if(gt||ue(3),I+=15&gt,tn=T[qn],qn>3&&(lt=t[qn],tn+=_e(z,I)&(1<<lt)-1,I+=lt),I>ge){sn&&ue(0);break}Le&&Ce(Q+131072);for(var Qn=Q+Hn;Q<Qn;Q+=4)Ae[Q]=Ae[Q-tn],Ae[Q+1]=Ae[Q+1-tn],Ae[Q+2]=Ae[Q+2-tn],Ae[Q+3]=Ae[Q+3-tn];Q=Qn}}ae.l=oe,ae.p=Ze,ae.b=Q,oe&&(Me=1,ae.m=ne,ae.d=he,ae.n=Ie)}while(!Me);return Q==Ae.length?Ae:function(Un,ut,pt){(ut==null||ut<0)&&(ut=0),(pt==null||pt>Un.length)&&(pt=Un.length);var Nt=new(Un instanceof R?R:Un instanceof g?g:a)(pt-ut);return Nt.set(Un.subarray(ut,pt)),Nt}(Ae,0,Q)},xe=new a(0),je=typeof TextDecoder<"u"&&new TextDecoder;try{je.decode(xe,{stream:!0})}catch{}return C.convert_streams=function(z){var Ae=new DataView(z),ae=0;function Ge(){var Xe=Ae.getUint16(ae);return ae+=2,Xe}function Le(){var Xe=Ae.getUint32(ae);return ae+=4,Xe}function sn(Xe){en.setUint16(vn,Xe),vn+=2}function dn(Xe){en.setUint32(vn,Xe),vn+=4}for(var Ce={signature:Le(),flavor:Le(),length:Le(),numTables:Ge(),reserved:Ge(),totalSfntSize:Le(),majorVersion:Ge(),minorVersion:Ge(),metaOffset:Le(),metaLength:Le(),metaOrigLength:Le(),privOffset:Le(),privLength:Le()},Me=0;Math.pow(2,Me)<=Ce.numTables;)Me++;Me--;for(var I=16*Math.pow(2,Me),Q=16*Ce.numTables-I,oe=12,he=[],ne=0;ne<Ce.numTables;ne++)he.push({tag:Le(),offset:Le(),compLength:Le(),origLength:Le(),origChecksum:Le()}),oe+=16;var Ie,ge=new Uint8Array(12+16*he.length+he.reduce(function(Xe,Fe){return Xe+Fe.origLength+4},0)),Pe=ge.buffer,en=new DataView(Pe),vn=0;return dn(Ce.flavor),sn(Ce.numTables),sn(I),sn(Me),sn(Q),he.forEach(function(Xe){dn(Xe.tag),dn(Xe.origChecksum),dn(oe),dn(Xe.origLength),Xe.outOffset=oe,(oe+=Xe.origLength)%4!=0&&(oe+=4-oe%4)}),he.forEach(function(Xe){var Fe,Yn=z.slice(Xe.offset,Xe.offset+Xe.compLength);if(Xe.compLength!=Xe.origLength){var Dn=new Uint8Array(Xe.origLength);Fe=new Uint8Array(Yn,2),we(Fe,Dn)}else Dn=new Uint8Array(Yn);ge.set(Dn,Xe.outOffset);var ln=0;(oe=Xe.outOffset+Xe.origLength)%4!=0&&(ln=4-oe%4),ge.set(new Uint8Array(ln).buffer,Xe.outOffset+Xe.origLength),Ie=oe+ln}),Pe.slice(0,Ie)},Object.defineProperty(C,"__esModule",{value:!0}),C}({}).convert_streams}function ro(C,a){const R={M:2,L:2,Q:4,C:6,Z:0},g={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,t=2,l=4,c=8,s=16,f=32;let u;function T(q){if(!u){const ue={R:t,L:i,D:l,C:s,U:f,T:c};u=new Map;for(let we in g){let xe=0;g[we].split(",").forEach(je=>{let[z,Ae]=je.split("+");z=parseInt(z,36),Ae=Ae?parseInt(Ae,36):0,u.set(xe+=z,ue[we]);for(let ae=Ae;ae--;)u.set(++xe,ue[we])})}}return u.get(q)||f}const x=1,S=2,U=3,F=4,X=[null,"isol","init","fina","medi"];function Te(q){const ue=new Uint8Array(q.length);let we=f,xe=x,je=-1;for(let z=0;z<q.length;z++){const Ae=q.codePointAt(z);let ae=T(Ae)|0,Ge=x;ae&c||(we&(i|l|s)?ae&(t|l|s)?(Ge=U,(xe===x||xe===U)&&ue[je]++):ae&(i|f)&&(xe===S||xe===F)&&ue[je]--:we&(t|f)&&(xe===S||xe===F)&&ue[je]--,xe=ue[z]=Ge,we=ae,je=z,Ae>65535&&z++)}return ue}function ce(q,ue){const we=[];for(let je=0;je<ue.length;je++){const z=ue.codePointAt(je);z>65535&&je++,we.push(C.U.codeToGlyph(q,z))}const xe=q.GSUB;if(xe){const{lookupList:je,featureList:z}=xe;let Ae;const ae=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,Ge=[];z.forEach(Le=>{if(ae.test(Le.tag))for(let sn=0;sn<Le.tab.length;sn++){if(Ge[Le.tab[sn]])continue;Ge[Le.tab[sn]]=!0;const dn=je[Le.tab[sn]],Ce=/^(isol|init|fina|medi)$/.test(Le.tag);Ce&&!Ae&&(Ae=Te(ue));for(let Me=0;Me<we.length;Me++)(!Ae||!Ce||X[Ae[Me]]===Le.tag)&&C.U._applySubs(we,Me,dn,je)}})}return we}function se(q,ue){const we=new Int16Array(ue.length*3);let xe=0;for(;xe<ue.length;xe++){const ae=ue[xe];if(ae===-1)continue;we[xe*3+2]=q.hmtx.aWidth[ae];const Ge=q.GPOS;if(Ge){const Le=Ge.lookupList;for(let sn=0;sn<Le.length;sn++){const dn=Le[sn];for(let Ce=0;Ce<dn.tabs.length;Ce++){const Me=dn.tabs[Ce];if(dn.ltype===1){if(C._lctf.coverageIndex(Me.coverage,ae)!==-1&&Me.pos){Ae(Me.pos,xe);break}}else if(dn.ltype===2){let I=null,Q=je();if(Q!==-1){const oe=C._lctf.coverageIndex(Me.coverage,ue[Q]);if(oe!==-1){if(Me.fmt===1){const he=Me.pairsets[oe];for(let ne=0;ne<he.length;ne++)he[ne].gid2===ae&&(I=he[ne])}else if(Me.fmt===2){const he=C.U._getGlyphClass(ue[Q],Me.classDef1),ne=C.U._getGlyphClass(ae,Me.classDef2);I=Me.matrix[he][ne]}if(I){I.val1&&Ae(I.val1,Q),I.val2&&Ae(I.val2,xe);break}}}}else if(dn.ltype===4){const I=C._lctf.coverageIndex(Me.markCoverage,ae);if(I!==-1){const Q=je(z),oe=Q===-1?-1:C._lctf.coverageIndex(Me.baseCoverage,ue[Q]);if(oe!==-1){const he=Me.markArray[I],ne=Me.baseArray[oe][he.markClass];we[xe*3]=ne.x-he.x+we[Q*3]-we[Q*3+2],we[xe*3+1]=ne.y-he.y+we[Q*3+1];break}}}else if(dn.ltype===6){const I=C._lctf.coverageIndex(Me.mark1Coverage,ae);if(I!==-1){const Q=je();if(Q!==-1){const oe=ue[Q];if(ee(q,oe)===3){const he=C._lctf.coverageIndex(Me.mark2Coverage,oe);if(he!==-1){const ne=Me.mark1Array[I],Ie=Me.mark2Array[he][ne.markClass];we[xe*3]=Ie.x-ne.x+we[Q*3]-we[Q*3+2],we[xe*3+1]=Ie.y-ne.y+we[Q*3+1];break}}}}}}}}else if(q.kern&&!q.cff){const Le=je();if(Le!==-1){const sn=q.kern.glyph1.indexOf(ue[Le]);if(sn!==-1){const dn=q.kern.rval[sn].glyph2.indexOf(ae);dn!==-1&&(we[Le*3+2]+=q.kern.rval[sn].vals[dn])}}}}return we;function je(ae){for(let Ge=xe-1;Ge>=0;Ge--)if(ue[Ge]!==-1&&(!ae||ae(ue[Ge])))return Ge;return-1}function z(ae){return ee(q,ae)===1}function Ae(ae,Ge){for(let Le=0;Le<3;Le++)we[Ge*3+Le]+=ae[Le]||0}}function ee(q,ue){const we=q.GDEF&&q.GDEF.glyphClassDef;return we?C.U._getGlyphClass(ue,we):0}function le(...q){for(let ue=0;ue<q.length;ue++)if(typeof q[ue]=="number")return q[ue]}function _e(q){const ue=Object.create(null),we=q["OS/2"],xe=q.hhea,je=q.head.unitsPerEm,z=le(we&&we.sTypoAscender,xe&&xe.ascender,je),Ae={unitsPerEm:je,ascender:z,descender:le(we&&we.sTypoDescender,xe&&xe.descender,0),capHeight:le(we&&we.sCapHeight,z),xHeight:le(we&&we.sxHeight,z),lineGap:le(we&&we.sTypoLineGap,xe&&xe.lineGap),supportsCodePoint(ae){return C.U.codeToGlyph(q,ae)>0},forEachGlyph(ae,Ge,Le,sn){let dn=0;const Ce=1/Ae.unitsPerEm*Ge,Me=ce(q,ae);let I=0;const Q=se(q,Me);return Me.forEach((oe,he)=>{if(oe!==-1){let ne=ue[oe];if(!ne){const{cmds:Ie,crds:ge}=C.U.glyphToPath(q,oe);let Pe="",en=0;for(let Dn=0,ln=Ie.length;Dn<ln;Dn++){const Sn=R[Ie[Dn]];Pe+=Ie[Dn];for(let bn=1;bn<=Sn;bn++)Pe+=(bn>1?",":"")+ge[en++]}let vn,Xe,Fe,Yn;if(ge.length){vn=Xe=1/0,Fe=Yn=-1/0;for(let Dn=0,ln=ge.length;Dn<ln;Dn+=2){let Sn=ge[Dn],bn=ge[Dn+1];Sn<vn&&(vn=Sn),bn<Xe&&(Xe=bn),Sn>Fe&&(Fe=Sn),bn>Yn&&(Yn=bn)}}else vn=Fe=Xe=Yn=0;ne=ue[oe]={index:oe,advanceWidth:q.hmtx.aWidth[oe],xMin:vn,yMin:Xe,xMax:Fe,yMax:Yn,path:Pe}}sn.call(null,ne,dn+Q[he*3]*Ce,Q[he*3+1]*Ce,I),dn+=Q[he*3+2]*Ce,Le&&(dn+=Le*Ge)}I+=ae.codePointAt(I)>65535?2:1}),dn}};return Ae}return function(ue){const we=new Uint8Array(ue,0,4),xe=C._bin.readASCII(we,0,4);if(xe==="wOFF")ue=a(ue);else if(xe==="wOF2")throw new Error("woff2 fonts not supported");return _e(C.parse(ue)[0])}}const ao=di({name:"Typr Font Parser",dependencies:[to,io,ro],init(C,a,R){const g=C(),i=a();return R(g,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function oo(){return function(C){var a=function(){this.buckets=new Map};a.prototype.add=function(se){var ee=se>>5;this.buckets.set(ee,(this.buckets.get(ee)||0)|1<<(31&se))},a.prototype.has=function(se){var ee=this.buckets.get(se>>5);return ee!==void 0&&(ee&1<<(31&se))!=0},a.prototype.serialize=function(){var se=[];return this.buckets.forEach(function(ee,le){se.push((+le).toString(36)+":"+ee.toString(36))}),se.join(",")},a.prototype.deserialize=function(se){var ee=this;this.buckets.clear(),se.split(",").forEach(function(le){var _e=le.split(":");ee.buckets.set(parseInt(_e[0],36),parseInt(_e[1],36))})};var R=Math.pow(2,8),g=R-1,i=~g;function t(se){var ee=function(_e){return _e&i}(se).toString(16),le=function(_e){return(_e&i)+R-1}(se).toString(16);return"codepoint-index/plane"+(se>>16)+"/"+ee+"-"+le+".json"}function l(se,ee){var le=se&g,_e=ee.codePointAt(le/6|0);return((_e=(_e||48)-48)&1<<le%6)!=0}function c(se,ee){var le;(le=se,le.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(_e){return _e.split("-").map(function(q){return parseInt(q.trim(),16)})})).forEach(function(_e){var q=_e[0],ue=_e[1];ue===void 0&&(ue=q),ee(q,ue)})}function s(se,ee){c(se,function(le,_e){for(var q=le;q<=_e;q++)ee(q)})}var f={},u={},T=new WeakMap,x="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function S(se){var ee=T.get(se);return ee||(ee=new a,s(se.ranges,function(le){return ee.add(le)}),T.set(se,ee)),ee}var U,F=new Map;function X(se,ee,le){return se[ee]?ee:se[le]?le:function(_e){for(var q in _e)return q}(se)}function Te(se,ee){var le=ee;if(!se.includes(le)){le=1/0;for(var _e=0;_e<se.length;_e++)Math.abs(se[_e]-ee)<Math.abs(le-ee)&&(le=se[_e])}return le}function ce(se){return U||(U=new Set,s("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(ee){U.add(ee)})),U.has(se)}return C.CodePointSet=a,C.clearCache=function(){f={},u={}},C.getFontsForString=function(se,ee){ee===void 0&&(ee={});var le,_e=ee.lang;_e===void 0&&(_e=/\p{Script=Hangul}/u.test(le=se)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(le)?"ja":"en");var q=ee.category;q===void 0&&(q="sans-serif");var ue=ee.style;ue===void 0&&(ue="normal");var we=ee.weight;we===void 0&&(we=400);var xe=(ee.dataUrl||x).replace(/\/$/g,""),je=new Map,z=new Uint8Array(se.length),Ae={},ae={},Ge=new Array(se.length),Le=new Map,sn=!1;function dn(I){var Q=F.get(I);return Q||(Q=fetch(xe+"/"+I).then(function(oe){if(!oe.ok)throw new Error(oe.statusText);return oe.json().then(function(he){if(!Array.isArray(he)||he[0]!==1)throw new Error("Incorrect schema version; need 1, got "+he[0]);return he[1]})}).catch(function(oe){if(xe!==x)return sn||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+xe+'", trying default CDN. '+oe.message),sn=!0),xe=x,F.delete(I),dn(I);throw oe}),F.set(I,Q)),Q}for(var Ce=function(I){var Q=se.codePointAt(I),oe=t(Q);Ge[I]=oe,f[oe]||Le.has(oe)||Le.set(oe,dn(oe).then(function(he){f[oe]=he})),Q>65535&&(I++,Me=I)},Me=0;Me<se.length;Me++)Ce(Me);return Promise.all(Le.values()).then(function(){Le.clear();for(var I=function(oe){var he=se.codePointAt(oe),ne=null,Ie=f[Ge[oe]],ge=void 0;for(var Pe in Ie){var en=ae[Pe];if(en===void 0&&(en=ae[Pe]=new RegExp(Pe).test(_e||"en")),en){for(var vn in ge=Pe,Ie[Pe])if(l(he,Ie[Pe][vn])){ne=vn;break}break}}if(!ne){e:for(var Xe in Ie)if(Xe!==ge){for(var Fe in Ie[Xe])if(l(he,Ie[Xe][Fe])){ne=Fe;break e}}}ne||(console.debug("No font coverage for U+"+he.toString(16)),ne="latin"),Ge[oe]=ne,u[ne]||Le.has(ne)||Le.set(ne,dn("font-meta/"+ne+".json").then(function(Yn){u[ne]=Yn})),he>65535&&(oe++,Q=oe)},Q=0;Q<se.length;Q++)I(Q);return Promise.all(Le.values())}).then(function(){for(var I,Q=null,oe=0;oe<se.length;oe++){var he=se.codePointAt(oe);if(Q&&(ce(he)||S(Q).has(he)))z[oe]=z[oe-1];else{Q=u[Ge[oe]];var ne=Ae[Q.id];if(!ne){var Ie=Q.typeforms,ge=X(Ie,q,"sans-serif"),Pe=X(Ie[ge],ue,"normal"),en=Te((I=Ie[ge])===null||I===void 0?void 0:I[Pe],we);ne=Ae[Q.id]=xe+"/font-files/"+Q.id+"/"+ge+"."+Pe+"."+en+".woff"}var vn=je.get(ne);vn==null&&(vn=je.size,je.set(ne,vn)),z[oe]=vn}he>65535&&(oe++,z[oe]=z[oe-1])}return{fontUrls:Array.from(je.keys()),chars:z}})},Object.defineProperty(C,"__esModule",{value:!0}),C}({})}function so(C,a){const R=Object.create(null),g=Object.create(null);function i(l,c){const s=f=>{console.error(`Failure loading font ${l}`,f)};try{const f=new XMLHttpRequest;f.open("get",l,!0),f.responseType="arraybuffer",f.onload=function(){if(f.status>=400)s(new Error(f.statusText));else if(f.status>0)try{const u=C(f.response);u.src=l,c(u)}catch(u){s(u)}},f.onerror=s,f.send()}catch(f){s(f)}}function t(l,c){let s=R[l];s?c(s):g[l]?g[l].push(c):(g[l]=[c],i(l,f=>{f.src=l,R[l]=f,g[l].forEach(u=>u(f)),delete g[l]}))}return function(l,c,{lang:s,fonts:f=[],style:u="normal",weight:T="normal",unicodeFontsURL:x}={}){const S=new Uint8Array(l.length),U=[];l.length||ce();const F=new Map,X=[];if(u!=="italic"&&(u="normal"),typeof T!="number"&&(T=T==="bold"?700:400),f&&!Array.isArray(f)&&(f=[f]),f=f.slice().filter(ee=>!ee.lang||ee.lang.test(s)).reverse(),f.length){let q=0;(function ue(we=0){for(let xe=we,je=l.length;xe<je;xe++){const z=l.codePointAt(xe);if(q===1&&U[S[xe-1]].supportsCodePoint(z)||xe>0&&/\s/.test(l[xe]))S[xe]=S[xe-1],q===2&&(X[X.length-1][1]=xe);else for(let Ae=S[xe],ae=f.length;Ae<=ae;Ae++)if(Ae===ae){const Ge=q===2?X[X.length-1]:X[X.length]=[xe,xe];Ge[1]=xe,q=2}else{S[xe]=Ae;const{src:Ge,unicodeRange:Le}=f[Ae];if(!Le||se(z,Le)){const sn=R[Ge];if(!sn){t(Ge,()=>{ue(xe)});return}if(sn.supportsCodePoint(z)){let dn=F.get(sn);typeof dn!="number"&&(dn=U.length,U.push(sn),F.set(sn,dn)),S[xe]=dn,q=1;break}}}z>65535&&xe+1<je&&(S[xe+1]=S[xe],xe++,q===2&&(X[X.length-1][1]=xe))}Te()})()}else X.push([0,l.length-1]),Te();function Te(){if(X.length){const ee=X.map(le=>l.substring(le[0],le[1]+1)).join(`
`);a.getFontsForString(ee,{lang:s||void 0,style:u,weight:T,dataUrl:x}).then(({fontUrls:le,chars:_e})=>{const q=U.length;let ue=0;X.forEach(xe=>{for(let je=0,z=xe[1]-xe[0];je<=z;je++)S[xe[0]+je]=_e[ue++]+q;ue++});let we=0;le.forEach((xe,je)=>{t(xe,z=>{U[je+q]=z,++we===le.length&&ce()})})})}else ce()}function ce(){c({chars:S,fonts:U})}function se(ee,le){for(let _e=0;_e<le.length;_e++){const[q,ue=q]=le[_e];if(q<=ee&&ee<=ue)return!0}return!1}}}const Zr=di({name:"FontResolver",dependencies:[so,ao,oo],init(C,a,R){return C(a,R())}});function lo(C,a){const g=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",t=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function l({text:U,lang:F,fonts:X,style:Te,weight:ce,preResolvedFonts:se,unicodeFontsURL:ee},le){const _e=({chars:q,fonts:ue})=>{let we,xe;const je=[];for(let z=0;z<q.length;z++)q[z]!==xe?(xe=q[z],je.push(we={start:z,end:z,fontObj:ue[q[z]]})):we.end=z;le(je)};se?_e(se):C(U,_e,{lang:F,fonts:X,style:Te,weight:ce,unicodeFontsURL:ee})}function c({text:U="",font:F,lang:X,sdfGlyphSize:Te=64,fontSize:ce=400,fontWeight:se=1,fontStyle:ee="normal",letterSpacing:le=0,lineHeight:_e="normal",maxWidth:q=1/0,direction:ue,textAlign:we="left",textIndent:xe=0,whiteSpace:je="normal",overflowWrap:z="normal",anchorX:Ae=0,anchorY:ae=0,metricsOnly:Ge=!1,unicodeFontsURL:Le,preResolvedFonts:sn=null,includeCaretPositions:dn=!1,chunkedBoundsSize:Ce=8192,colorRanges:Me=null},I){const Q=T(),oe={fontLoad:0,typesetting:0};U.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),U=U.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),ce=+ce,le=+le,q=+q,_e=_e||"normal",xe=+xe,l({text:U,lang:X,style:ee,weight:se,fonts:typeof F=="string"?[{src:F}]:F,unicodeFontsURL:Le,preResolvedFonts:sn},he=>{oe.fontLoad=T()-Q;const ne=isFinite(q);let Ie=null,ge=null,Pe=null,en=null,vn=null,Xe=null,Fe=null,Yn=null,Dn=0,ln=0,Sn=je!=="nowrap";const bn=new Map,We=T();let _n=xe,pn=0,ye=new x;const Vn=[ye];he.forEach(fn=>{const{fontObj:Ze}=fn,{ascender:an,descender:Hn,unitsPerEm:lt,lineGap:gt,capHeight:qn,xHeight:Qn}=Ze;let Un=bn.get(Ze);if(!Un){const Bn=ce/lt,rt=_e==="normal"?(an-Hn+gt)*Bn:_e*ce,ei=(rt-(an-Hn)*Bn)/2,ot=Math.min(rt,(an-Hn)*Bn),Jn=(an+Hn)/2*Bn+ot/2;Un={index:bn.size,src:Ze.src,fontObj:Ze,fontSizeMult:Bn,unitsPerEm:lt,ascender:an*Bn,descender:Hn*Bn,capHeight:qn*Bn,xHeight:Qn*Bn,lineHeight:rt,baseline:-ei-an*Bn,caretTop:Jn,caretBottom:Jn-ot},bn.set(Ze,Un)}const{fontSizeMult:ut}=Un,pt=U.slice(fn.start,fn.end+1);let Nt,ct;Ze.forEachGlyph(pt,ce,le,(Bn,rt,ei,ot)=>{rt+=pn,ot+=fn.start,Nt=rt,ct=Bn;const Jn=U.charAt(ot),At=Bn.advanceWidth*ut,ht=ye.count;let Wn;if("isEmpty"in Bn||(Bn.isWhitespace=!!Jn&&new RegExp(i).test(Jn),Bn.canBreakAfter=!!Jn&&t.test(Jn),Bn.isEmpty=Bn.xMin===Bn.xMax||Bn.yMin===Bn.yMax||g.test(Jn)),!Bn.isWhitespace&&!Bn.isEmpty&&ln++,Sn&&ne&&!Bn.isWhitespace&&rt+At+_n>q&&ht){if(ye.glyphAt(ht-1).glyphObj.canBreakAfter)Wn=new x,_n=-rt;else for(let Dt=ht;Dt--;)if(Dt===0&&z==="break-word"){Wn=new x,_n=-rt;break}else if(ye.glyphAt(Dt).glyphObj.canBreakAfter){Wn=ye.splitAt(Dt+1);const Pt=Wn.glyphAt(0).x;_n-=Pt;for(let bt=Wn.count;bt--;)Wn.glyphAt(bt).x-=Pt;break}Wn&&(ye.isSoftWrapped=!0,ye=Wn,Vn.push(ye),Dn=q)}let mt=ye.glyphAt(ye.count);mt.glyphObj=Bn,mt.x=rt+_n,mt.y=ei,mt.width=At,mt.charIndex=ot,mt.fontData=Un,Jn===`
`&&(ye=new x,Vn.push(ye),_n=-(rt+At+le*ce)+xe)}),pn=Nt+ct.advanceWidth*ut+le*ce});let on=0;Vn.forEach(fn=>{let Ze=!0;for(let an=fn.count;an--;){const Hn=fn.glyphAt(an);Ze&&!Hn.glyphObj.isWhitespace&&(fn.width=Hn.x+Hn.width,fn.width>Dn&&(Dn=fn.width),Ze=!1);let{lineHeight:lt,capHeight:gt,xHeight:qn,baseline:Qn}=Hn.fontData;lt>fn.lineHeight&&(fn.lineHeight=lt);const Un=Qn-fn.baseline;Un<0&&(fn.baseline+=Un,fn.cap+=Un,fn.ex+=Un),fn.cap=Math.max(fn.cap,fn.baseline+gt),fn.ex=Math.max(fn.ex,fn.baseline+qn)}fn.baseline-=on,fn.cap-=on,fn.ex-=on,on+=fn.lineHeight});let En=0,tn=0;if(Ae&&(typeof Ae=="number"?En=-Ae:typeof Ae=="string"&&(En=-Dn*(Ae==="left"?0:Ae==="center"?.5:Ae==="right"?1:f(Ae)))),ae&&(typeof ae=="number"?tn=-ae:typeof ae=="string"&&(tn=ae==="top"?0:ae==="top-baseline"?-Vn[0].baseline:ae==="top-cap"?-Vn[0].cap:ae==="top-ex"?-Vn[0].ex:ae==="middle"?on/2:ae==="bottom"?on:ae==="bottom-baseline"?-Vn[Vn.length-1].baseline:f(ae)*on)),!Ge){const fn=a.getEmbeddingLevels(U,ue);Ie=new Uint16Array(ln),ge=new Uint8Array(ln),Pe=new Float32Array(ln*2),en={},Fe=[1/0,1/0,-1/0,-1/0],Yn=[],dn&&(Xe=new Float32Array(U.length*4)),Me&&(vn=new Uint8Array(ln*3));let Ze=0,an=-1,Hn=-1,lt,gt;if(Vn.forEach((qn,Qn)=>{let{count:Un,width:ut}=qn;if(Un>0){let pt=0;for(let ot=Un;ot--&&qn.glyphAt(ot).glyphObj.isWhitespace;)pt++;let Nt=0,ct=0;if(we==="center")Nt=(Dn-ut)/2;else if(we==="right")Nt=Dn-ut;else if(we==="justify"&&qn.isSoftWrapped){let ot=0;for(let Jn=Un-pt;Jn--;)qn.glyphAt(Jn).glyphObj.isWhitespace&&ot++;ct=(Dn-ut)/ot}if(ct||Nt){let ot=0;for(let Jn=0;Jn<Un;Jn++){let At=qn.glyphAt(Jn);const ht=At.glyphObj;At.x+=Nt+ot,ct!==0&&ht.isWhitespace&&Jn<Un-pt&&(ot+=ct,At.width+=ct)}}const Bn=a.getReorderSegments(U,fn,qn.glyphAt(0).charIndex,qn.glyphAt(qn.count-1).charIndex);for(let ot=0;ot<Bn.length;ot++){const[Jn,At]=Bn[ot];let ht=1/0,Wn=-1/0;for(let mt=0;mt<Un;mt++)if(qn.glyphAt(mt).charIndex>=Jn){let Dt=mt,Pt=mt;for(;Pt<Un;Pt++){let bt=qn.glyphAt(Pt);if(bt.charIndex>At)break;Pt<Un-pt&&(ht=Math.min(ht,bt.x),Wn=Math.max(Wn,bt.x+bt.width))}for(let bt=Dt;bt<Pt;bt++){const Vt=qn.glyphAt(bt);Vt.x=Wn-(Vt.x+Vt.width-ht)}break}}let rt;const ei=ot=>rt=ot;for(let ot=0;ot<Un;ot++){const Jn=qn.glyphAt(ot);rt=Jn.glyphObj;const At=rt.index,ht=fn.levels[Jn.charIndex]&1;if(ht){const Wn=a.getMirroredCharacter(U[Jn.charIndex]);Wn&&Jn.fontData.fontObj.forEachGlyph(Wn,0,0,ei)}if(dn){const{charIndex:Wn,fontData:mt}=Jn,Dt=Jn.x+En,Pt=Jn.x+Jn.width+En;Xe[Wn*4]=ht?Pt:Dt,Xe[Wn*4+1]=ht?Dt:Pt,Xe[Wn*4+2]=qn.baseline+mt.caretBottom+tn,Xe[Wn*4+3]=qn.baseline+mt.caretTop+tn;const bt=Wn-an;bt>1&&u(Xe,an,bt),an=Wn}if(Me){const{charIndex:Wn}=Jn;for(;Wn>Hn;)Hn++,Me.hasOwnProperty(Hn)&&(gt=Me[Hn])}if(!rt.isWhitespace&&!rt.isEmpty){const Wn=Ze++,{fontSizeMult:mt,src:Dt,index:Pt}=Jn.fontData,bt=en[Dt]||(en[Dt]={});bt[At]||(bt[At]={path:rt.path,pathBounds:[rt.xMin,rt.yMin,rt.xMax,rt.yMax]});const Vt=Jn.x+En,ni=Jn.y+qn.baseline+tn;Pe[Wn*2]=Vt,Pe[Wn*2+1]=ni;const Zt=Vt+rt.xMin*mt,ti=ni+rt.yMin*mt,ci=Vt+rt.xMax*mt,jt=ni+rt.yMax*mt;Zt<Fe[0]&&(Fe[0]=Zt),ti<Fe[1]&&(Fe[1]=ti),ci>Fe[2]&&(Fe[2]=ci),jt>Fe[3]&&(Fe[3]=jt),Wn%Ce===0&&(lt={start:Wn,end:Wn,rect:[1/0,1/0,-1/0,-1/0]},Yn.push(lt)),lt.end++;const It=lt.rect;if(Zt<It[0]&&(It[0]=Zt),ti<It[1]&&(It[1]=ti),ci>It[2]&&(It[2]=ci),jt>It[3]&&(It[3]=jt),Ie[Wn]=At,ge[Wn]=Pt,Me){const fi=Wn*3;vn[fi]=gt>>16&255,vn[fi+1]=gt>>8&255,vn[fi+2]=gt&255}}}}}),Xe){const qn=U.length-an;qn>1&&u(Xe,an,qn)}}const et=[];bn.forEach(({index:fn,src:Ze,unitsPerEm:an,ascender:Hn,descender:lt,lineHeight:gt,capHeight:qn,xHeight:Qn})=>{et[fn]={src:Ze,unitsPerEm:an,ascender:Hn,descender:lt,lineHeight:gt,capHeight:qn,xHeight:Qn}}),oe.typesetting=T()-We,I({glyphIds:Ie,glyphFontIndices:ge,glyphPositions:Pe,glyphData:en,fontData:et,caretPositions:Xe,glyphColors:vn,chunkedBounds:Yn,fontSize:ce,topBaseline:tn+Vn[0].baseline,blockBounds:[En,tn-on,En+Dn,tn],visibleBounds:Fe,timings:oe})})}function s(U,F){c({...U,metricsOnly:!0},X=>{const[Te,ce,se,ee]=X.blockBounds;F({width:se-Te,height:ee-ce})})}function f(U){let F=U.match(/^([\d.]+)%$/),X=F?parseFloat(F[1]):NaN;return isNaN(X)?0:X/100}function u(U,F,X){const Te=U[F*4],ce=U[F*4+1],se=U[F*4+2],ee=U[F*4+3],le=(ce-Te)/X;for(let _e=0;_e<X;_e++){const q=(F+_e)*4;U[q]=Te+le*_e,U[q+1]=Te+le*(_e+1),U[q+2]=se,U[q+3]=ee}}function T(){return(self.performance||Date).now()}function x(){this.data=[]}const S=["glyphObj","x","y","width","charIndex","fontData"];return x.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/S.length)},glyphAt(U){let F=x.flyweight;return F.data=this.data,F.index=U,F},splitAt(U){let F=new x;return F.data=this.data.splice(U*S.length),F}},x.flyweight=S.reduce((U,F,X,Te)=>(Object.defineProperty(U,F,{get(){return this.data[this.index*S.length+X]},set(ce){this.data[this.index*S.length+X]=ce}}),U),{data:null,index:0}),{typeset:c,measure:s}}const li=()=>(self.performance||Date).now(),Hi=Hr();let jr;function co(C,a,R,g,i,t,l,c,s,f,u=!0){return u?uo(C,a,R,g,i,t,l,c,s,f).then(null,T=>(jr||(console.warn("WebGL SDF generation failed, falling back to JS",T),jr=!0),ea(C,a,R,g,i,t,l,c,s,f))):ea(C,a,R,g,i,t,l,c,s,f)}const Vi=[],fo=5;let cr=0;function Jr(){const C=li();for(;Vi.length&&li()-C<fo;)Vi.shift()();cr=Vi.length?setTimeout(Jr,0):0}const uo=(...C)=>new Promise((a,R)=>{Vi.push(()=>{const g=li();try{Hi.webgl.generateIntoCanvas(...C),a({timing:li()-g})}catch(i){R(i)}}),cr||(cr=setTimeout(Jr,0))}),po=4,ho=2e3,$r={};let mo=0;function ea(C,a,R,g,i,t,l,c,s,f){const u="TroikaTextSDFGenerator_JS_"+mo++%po;let T=$r[u];return T||(T=$r[u]={workerModule:di({name:u,workerId:u,dependencies:[Hr,li],init(x,S){const U=x().javascript.generate;return function(...F){const X=S();return{textureData:U(...F),timing:S()-X}}},getTransferables(x){return[x.textureData.buffer]}}),requests:0,idleTimer:null}),T.requests++,clearTimeout(T.idleTimer),T.workerModule(C,a,R,g,i,t).then(({textureData:x,timing:S})=>{const U=li(),F=new Uint8Array(x.length*4);for(let X=0;X<x.length;X++)F[X*4+f]=x[X];return Hi.webglUtils.renderImageData(l,F,c,s,C,a,1<<3-f),S+=li()-U,--T.requests===0&&(T.idleTimer=setTimeout(()=>{Ba(u)},ho)),{timing:S}})}function vo(C){C._warm||(Hi.webgl.isSupported(C),C._warm=!0)}const _o=Hi.webglUtils.resizeWebGLCanvasWithoutClearing,$t={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048,useWorker:!0},go=new n.Q1f;let na=!1;function hi(){return(self.performance||Date).now()}function So(C){na?console.warn("configureTextBuilder called after first font request; will be ignored."):ia($t,C)}const Wi=Object.create(null);function fr(C,a){na=!0,C=ia({},C);const R=hi(),{defaultFontURL:g}=$t,i=[];if(g&&i.push({label:"default",src:ra(g)}),C.font&&i.push({label:"user",src:ra(C.font)}),C.font=i,C.text=""+C.text,C.sdfGlyphSize=C.sdfGlyphSize||$t.sdfGlyphSize,C.unicodeFontsURL=C.unicodeFontsURL||$t.unicodeFontsURL,C.colorRanges!=null){let S={};for(let U in C.colorRanges)if(C.colorRanges.hasOwnProperty(U)){let F=C.colorRanges[U];typeof F!="number"&&(F=go.set(F).getHex()),S[U]=F}C.colorRanges=S}Object.freeze(C);const{textureWidth:t,sdfExponent:l}=$t,{sdfGlyphSize:c}=C,s=t/c*4;let f=Wi[c];if(!f){const S=document.createElement("canvas");S.width=t,S.height=c*256/s,f=Wi[c]={glyphCount:0,sdfGlyphSize:c,sdfCanvas:S,sdfTexture:new n.gPd(S,void 0,void 0,void 0,n.k6q,n.k6q),contextLost:!1,glyphsByFont:new Map},f.sdfTexture.generateMipmaps=!1,Eo(f)}const{sdfTexture:u,sdfCanvas:T}=f;($t.useWorker?sa:Mo)(C).then(S=>{const{glyphIds:U,glyphFontIndices:F,fontData:X,glyphPositions:Te,fontSize:ce,timings:se}=S,ee=[],le=new Float32Array(U.length*4);let _e=0,q=0;const ue=hi(),we=X.map(ae=>{let Ge=f.glyphsByFont.get(ae.src);return Ge||f.glyphsByFont.set(ae.src,Ge=new Map),Ge});U.forEach((ae,Ge)=>{const Le=F[Ge],{src:sn,unitsPerEm:dn}=X[Le];let Ce=we[Le].get(ae);if(!Ce){const{path:he,pathBounds:ne}=S.glyphData[sn][ae],Ie=Math.max(ne[2]-ne[0],ne[3]-ne[1])/c*($t.sdfMargin*c+.5),ge=f.glyphCount++,Pe=[ne[0]-Ie,ne[1]-Ie,ne[2]+Ie,ne[3]+Ie];we[Le].set(ae,Ce={path:he,atlasIndex:ge,sdfViewBox:Pe}),ee.push(Ce)}const{sdfViewBox:Me}=Ce,I=Te[q++],Q=Te[q++],oe=ce/dn;le[_e++]=I+Me[0]*oe,le[_e++]=Q+Me[1]*oe,le[_e++]=I+Me[2]*oe,le[_e++]=Q+Me[3]*oe,U[Ge]=Ce.atlasIndex}),se.quads=(se.quads||0)+(hi()-ue);const xe=hi();se.sdf={};const je=T.height,z=Math.ceil(f.glyphCount/s),Ae=Math.pow(2,Math.ceil(Math.log2(z*c)));Ae>je&&(console.info(`Increasing SDF texture size ${je}->${Ae}`),_o(T,t,Ae),u.dispose()),Promise.all(ee.map(ae=>ta(ae,f,C.gpuAccelerateSDF).then(({timing:Ge})=>{se.sdf[ae.atlasIndex]=Ge}))).then(()=>{ee.length&&!f.contextLost&&(aa(f),u.needsUpdate=!0),se.sdfTotal=hi()-xe,se.total=hi()-R,a(Object.freeze({parameters:C,sdfTexture:u,sdfGlyphSize:c,sdfExponent:l,glyphBounds:le,glyphAtlasIndices:U,glyphColors:S.glyphColors,caretPositions:S.caretPositions,chunkedBounds:S.chunkedBounds,ascender:S.ascender,descender:S.descender,lineHeight:S.lineHeight,capHeight:S.capHeight,xHeight:S.xHeight,topBaseline:S.topBaseline,blockBounds:S.blockBounds,visibleBounds:S.visibleBounds,timings:S.timings}))})}),Promise.resolve().then(()=>{f.contextLost||vo(T)})}function ta({path:C,atlasIndex:a,sdfViewBox:R},{sdfGlyphSize:g,sdfCanvas:i,contextLost:t},l){if(t)return Promise.resolve({timing:-1});const{textureWidth:c,sdfExponent:s}=$t,f=Math.max(R[2]-R[0],R[3]-R[1]),u=Math.floor(a/4),T=u%(c/g)*g,x=Math.floor(u/(c/g))*g,S=a%4;return co(g,g,C,R,f,s,i,T,x,S,l)}function Eo(C){const a=C.sdfCanvas;a.addEventListener("webglcontextlost",R=>{console.log("Context Lost",R),R.preventDefault(),C.contextLost=!0}),a.addEventListener("webglcontextrestored",R=>{console.log("Context Restored",R),C.contextLost=!1;const g=[];C.glyphsByFont.forEach(i=>{i.forEach(t=>{g.push(ta(t,C,!0))})}),Promise.all(g).then(()=>{aa(C),C.sdfTexture.needsUpdate=!0})})}function To({font:C,characters:a,sdfGlyphSize:R},g){let i=Array.isArray(a)?a.join(`
`):""+a;fr({font:C,sdfGlyphSize:R,text:i},g)}function ia(C,a){for(let R in a)a.hasOwnProperty(R)&&(C[R]=a[R]);return C}let zi;function ra(C){return zi||(zi=typeof document>"u"?{}:document.createElement("a")),zi.href=C,zi.href}function aa(C){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:a,sdfTexture:R}=C,{width:g,height:i}=a,t=C.sdfCanvas.getContext("webgl");let l=R.image.data;(!l||l.length!==g*i*4)&&(l=new Uint8Array(g*i*4),R.image={width:g,height:i,data:l},R.flipY=!1,R.isDataTexture=!0),t.readPixels(0,0,g,i,t.RGBA,t.UNSIGNED_BYTE,l)}}const oa=di({name:"Typesetter",dependencies:[lo,Zr,Ha],init(C,a,R){return C(a,R())}}),sa=di({name:"Typesetter",dependencies:[oa],init(C){return function(a){return new Promise(R=>{C.typeset(a,R)})}},getTransferables(C){const a=[];for(let R in C)C[R]&&C[R].buffer&&a.push(C[R].buffer);return a}}),Mo=sa.onMainThread;function xo(){Object.keys(Wi).forEach(C=>{const a=Wi[C].sdfCanvas,{width:R,height:g}=a;console.log("%c.",`
      background: url(${a.toDataURL()});
      background-size: ${R}px ${g}px;
      color: transparent;
      font-size: 0;
      line-height: ${g}px;
      padding-left: ${R}px;
    `)})}const la={};function Ao(C){let a=la[C];return a||(a=la[C]=new n.bdM(1,1,C,C).translate(.5,.5,0)),a}const Xi="aTroikaGlyphBounds",Ri="aTroikaGlyphIndex",Ro="aTroikaGlyphColor";class ca extends n.CmU{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new n.iyt,this.boundingBox=new n.NRn}computeBoundingSphere(){}computeBoundingBox(){}set detail(a){if(a!==this._detail){this._detail=a,(typeof a!="number"||a<1)&&(a=1);let R=Ao(a);["position","normal","uv"].forEach(g=>{this.attributes[g]=R.attributes[g].clone()}),this.setIndex(R.getIndex().clone())}}get detail(){return this._detail}set curveRadius(a){a!==this._curveRadius&&(this._curveRadius=a,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(a,R,g,i,t){this.updateAttributeData(Xi,a,4),this.updateAttributeData(Ri,R,1),this.updateAttributeData(Ro,t,3),this._blockBounds=g,this._chunkedBounds=i,this.instanceCount=R.length,this._updateBounds()}_updateBounds(){const a=this._blockBounds;if(a){const{curveRadius:R,boundingBox:g}=this;if(R){const{PI:i,floor:t,min:l,max:c,sin:s,cos:f}=Math,u=i/2,T=i*2,x=Math.abs(R),S=a[0]/x,U=a[2]/x,F=t((S+u)/T)!==t((U+u)/T)?-x:l(s(S)*x,s(U)*x),X=t((S-u)/T)!==t((U-u)/T)?x:c(s(S)*x,s(U)*x),Te=t((S+i)/T)!==t((U+i)/T)?x*2:c(x-f(S)*x,x-f(U)*x);g.min.set(F,a[1],R<0?-Te:0),g.max.set(X,a[3],R<0?0:Te)}else g.min.set(a[0],a[1],0),g.max.set(a[2],a[3],0);g.getBoundingSphere(this.boundingSphere)}}applyClipRect(a){let R=this.getAttribute(Ri).count,g=this._chunkedBounds;if(g)for(let i=g.length;i--;){R=g[i].end;let t=g[i].rect;if(t[1]<a.w&&t[3]>a.y&&t[0]<a.z&&t[2]>a.x)break}this.instanceCount=R}updateAttributeData(a,R,g){const i=this.getAttribute(a);R?i&&i.array.length===R.length?(i.array.set(R),i.needsUpdate=!0):(this.setAttribute(a,new n.uWO(R,g)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(a)}}const bo=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Co=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Uo=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,yo=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function ur(C){const a=pi(C,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new n.I9Y},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new n.IUQ(0,0,0,0)},uTroikaClipRect:{value:new n.IUQ(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new n.I9Y},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new n.Q1f},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new n.dwI},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:bo,vertexTransform:Co,fragmentDefs:Uo,fragmentColorTransform:yo,customRewriter({vertexShader:R,fragmentShader:g}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(g)&&(g=g.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(R)||(R=R.replace(Vr,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:R,fragmentShader:g}}});return a.transparent=!0,a.forceSinglePass=!0,Object.defineProperties(a,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),a}const dr=new n.V9B({color:16777215,side:n.$EB,transparent:!0}),fa=8421504,ua=new n.kn4,Yi=new n.Pq0,pr=new n.Pq0,bi=[],wo=new n.Pq0,hr="+x+y";function da(C){return Array.isArray(C)?C[0]:C}let pa=()=>{const C=new n.eaF(new n.bdM(1,1),dr);return pa=()=>C,C},Po=()=>{const C=new n.eaF(new n.bdM(1,1,32,1),dr);return Po=()=>C,C};const Ko={type:"syncstart"},qo={type:"synccomplete"},Lo=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Qo=Lo.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Ki extends n.eaF{constructor(){const a=new ca;super(a,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=fa,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=hr,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(a){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(a):(this._isSyncing=!0,this.dispatchEvent(Ko),fr({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},R=>{this._isSyncing=!1,this._textRenderInfo=R,this.geometry.updateGlyphs(R.glyphBounds,R.glyphAtlasIndices,R.blockBounds,R.chunkedBounds,R.glyphColors);const g=this._queuedSyncs;g&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{g.forEach(i=>i&&i())})),this.dispatchEvent(qo),a&&a()})))}onBeforeRender(a,R,g,i,t,l){this.sync(),t.isTroikaTextMaterial&&this._prepareForRender(t)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(a){return ur(a)}get material(){let a=this._derivedMaterial;const R=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=dr.clone());if((!a||!a.isDerivedFrom(R))&&(a=this._derivedMaterial=this.createDerivedMaterial(R),R.addEventListener("dispose",function g(){R.removeEventListener("dispose",g),a.dispose()})),this.hasOutline()){let g=a._outlineMtl;return g||(g=a._outlineMtl=Object.create(a,{id:{value:a.id+.1}}),g.isTextOutlineMaterial=!0,g.depthWrite=!1,g.map=null,a.addEventListener("dispose",function i(){a.removeEventListener("dispose",i),g.dispose()})),[g,a]}else return a}set material(a){a&&a.isTroikaTextMaterial?(this._derivedMaterial=a,this._baseMaterial=a.baseMaterial):this._baseMaterial=a}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(a){this.geometry.detail=a}get curveRadius(){return this.geometry.curveRadius}set curveRadius(a){this.geometry.curveRadius=a}get customDepthMaterial(){return da(this.material).getDepthMaterial()}set customDepthMaterial(a){}get customDistanceMaterial(){return da(this.material).getDistanceMaterial()}set customDistanceMaterial(a){}_prepareForRender(a){const R=a.isTextOutlineMaterial,g=a.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:c,blockBounds:s}=i;g.uTroikaSDFTexture.value=c,g.uTroikaSDFTextureSize.value.set(c.image.width,c.image.height),g.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,g.uTroikaSDFExponent.value=i.sdfExponent,g.uTroikaTotalBounds.value.fromArray(s),g.uTroikaUseGlyphColors.value=!R&&!!i.glyphColors;let f=0,u=0,T=0,x,S,U,F=0,X=0;if(R){let{outlineWidth:ce,outlineOffsetX:se,outlineOffsetY:ee,outlineBlur:le,outlineOpacity:_e}=this;f=this._parsePercent(ce)||0,u=Math.max(0,this._parsePercent(le)||0),x=_e,F=this._parsePercent(se)||0,X=this._parsePercent(ee)||0}else T=Math.max(0,this._parsePercent(this.strokeWidth)||0),T&&(U=this.strokeColor,g.uTroikaStrokeColor.value.set(U??fa),S=this.strokeOpacity,S==null&&(S=1)),x=this.fillOpacity;g.uTroikaEdgeOffset.value=f,g.uTroikaPositionOffset.value.set(F,X),g.uTroikaBlurRadius.value=u,g.uTroikaStrokeWidth.value=T,g.uTroikaStrokeOpacity.value=S,g.uTroikaFillOpacity.value=x??1,g.uTroikaCurveRadius.value=this.curveRadius||0;let Te=this.clipRect;if(Te&&Array.isArray(Te)&&Te.length===4)g.uTroikaClipRect.value.fromArray(Te);else{const ce=(this.fontSize||.1)*100;g.uTroikaClipRect.value.set(s[0]-ce,s[1]-ce,s[2]+ce,s[3]+ce)}this.geometry.applyClipRect(g.uTroikaClipRect.value)}g.uTroikaSDFDebug.value=!!this.debugSDF,a.polygonOffset=!!this.depthOffset,a.polygonOffsetFactor=a.polygonOffsetUnits=this.depthOffset||0;const t=R?this.outlineColor||0:this.color;if(t==null)delete a.color;else{const c=a.hasOwnProperty("color")?a.color:a.color=new n.Q1f;(t!==c._input||typeof t=="object")&&c.set(c._input=t)}let l=this.orientation||hr;if(l!==a._orientation){let c=g.uTroikaOrient.value;l=l.replace(/[^-+xyz]/g,"");let s=l!==hr&&l.match(/^([-+])([xyz])([-+])([xyz])$/);if(s){let[,f,u,T,x]=s;Yi.set(0,0,0)[u]=f==="-"?1:-1,pr.set(0,0,0)[x]=T==="-"?-1:1,ua.lookAt(wo,Yi.cross(pr),pr),c.setFromMatrix4(ua)}else c.identity();a._orientation=l}}_parsePercent(a){if(typeof a=="string"){let R=a.match(/^(-?[\d.]+)%$/),g=R?parseFloat(R[1]):NaN;a=(isNaN(g)?0:g/100)*this.fontSize}return a}localPositionToTextCoords(a,R=new n.I9Y){R.copy(a);const g=this.curveRadius;return g&&(R.x=Math.atan2(a.x,Math.abs(g)-Math.abs(a.z))*Math.abs(g)),R}worldPositionToTextCoords(a,R=new n.I9Y){return Yi.copy(a),this.localPositionToTextCoords(this.worldToLocal(Yi),R)}raycast(a,R){const{textRenderInfo:g,curveRadius:i}=this;if(g){const t=g.blockBounds,l=i?Po():pa(),c=l.geometry,{position:s,uv:f}=c.attributes;for(let u=0;u<f.count;u++){let T=t[0]+f.getX(u)*(t[2]-t[0]);const x=t[1]+f.getY(u)*(t[3]-t[1]);let S=0;i&&(S=i-Math.cos(T/i)*i,T=Math.sin(T/i)*i),s.setXYZ(u,T,x,S)}c.boundingSphere=this.geometry.boundingSphere,c.boundingBox=this.geometry.boundingBox,l.matrixWorld=this.matrixWorld,l.material.side=this.material.side,bi.length=0,l.raycast(a,bi);for(let u=0;u<bi.length;u++)bi[u].object=this,R.push(bi[u])}}copy(a){const R=this.geometry;return super.copy(a),this.geometry=R,Qo.forEach(g=>{this[g]=a[g]}),this}clone(){return new this.constructor().copy(this)}}Lo.forEach(C=>{const a="_private_"+C;Object.defineProperty(Ki.prototype,C,{get(){return this[a]},set(R){R!==this[a]&&(this[a]=R,this._needsSync=!0)}})});const Zo={type:"syncstart"},jo={type:"synccomplete"},Ci="aTroikaTextBatchMemberIndex",ha=32,Do=new n.NRn,Io=new n.Q1f;class ma extends Ki{constructor(){super(),this._members=new Map,this._dataTextures={},this._onMemberSynced=a=>{this._members.get(a.target).dirty=!0}}add(...a){for(let R=0;R<a.length;R++)a[R]instanceof Ki?this.addText(a[R]):super.add(a[R]);return this}remove(...a){for(let R=0;R<a.length;R++)a[R]instanceof Ki?this.removeText(a[R]):super.remove(a[R]);return this}addText(a){this._members.has(a)||(this._members.set(a,{index:-1,glyphCount:-1,dirty:!0}),a.addEventListener("synccomplete",this._onMemberSynced))}removeText(a){this._needsRepack=!0,a.removeEventListener("synccomplete",this._onMemberSynced),this._members.delete(a)}createDerivedMaterial(a){return Jo(a)}updateMatrixWorld(a){super.updateMatrixWorld(a),this.updateBounds()}updateBounds(){const a=this.geometry.boundingBox.makeEmpty();this._members.forEach((R,g)=>{g.matrixAutoUpdate&&g.updateMatrix(),Do.copy(g.geometry.boundingBox).applyMatrix4(g.matrix),a.union(Do)}),a.getBoundingSphere(this.geometry.boundingSphere)}hasOutline(){for(let a of this._members.keys())if(a.hasOutline())return!0;return!1}_prepareForRender(a){const R=a.isTextOutlineMaterial;a.uniforms.uTroikaIsOutline.value=R;let g=this._dataTextures[R?"outline":"main"];const i=Math.pow(2,Math.ceil(Math.log2(this._members.size*ha)));if(!g||i!==g.image.data.length){g&&g.dispose();const c=Math.min(i/4,1024);g=this._dataTextures[R?"outline":"main"]=new n.GYF(new Float32Array(i),c,i/4/c,n.GWd,n.RQf)}const t=g.image.data,l=(c,s)=>{s!==t[c]&&(t[c]=s,g.needsUpdate=!0)};this._members.forEach(({index:c,dirty:s},f)=>{if(c>-1){const u=c*ha,T=f.matrix.elements;for(let q=0;q<16;q++)l(u+q,T[q]);f._prepareForRender(a);const{uTroikaTotalBounds:x,uTroikaClipRect:S,uTroikaPositionOffset:U,uTroikaEdgeOffset:F,uTroikaBlurRadius:X,uTroikaStrokeWidth:Te,uTroikaStrokeColor:ce,uTroikaStrokeOpacity:se,uTroikaFillOpacity:ee,uTroikaCurveRadius:le}=a.uniforms;for(let q=0;q<4;q++)l(u+16+q,x.value.getComponent(q));for(let q=0;q<4;q++)l(u+20+q,S.value.getComponent(q));let _e=R?f.outlineColor||0:f.color;_e==null&&(_e=this.color),_e==null&&(_e=this.material.color),_e==null&&(_e=16777215),l(u+24,Io.set(_e).getHex()),l(u+25,ee.value),l(u+26,le.value),R?(l(u+28,U.value.x),l(u+29,U.value.y),l(u+30,F.value),l(u+31,X.value)):(l(u+28,Te.value),l(u+29,Io.set(ce.value).getHex()),l(u+30,se.value))}}),a.setMatrixTexture(g),super._prepareForRender(a)}sync(a){let R=this._needsRepack?[]:null;this._needsRepack=!1,this._members.forEach((g,i)=>{(g.dirty||i._needsSync)&&(g.dirty=!1,(R||(R=[])).push(new Promise(t=>{i._needsSync?i.sync(t):t()})))}),R&&(this.dispatchEvent(Zo),Promise.all(R).then(()=>{const{geometry:g}=this,i=g.attributes;let t=i[Ci]&&i[Ci].array||new Uint16Array(0),l=i[Ri]&&i[Ri].array||new Float32Array(0),c=i[Xi]&&i[Xi].array||new Float32Array(0),s=0;this._members.forEach((T,{textRenderInfo:x})=>{x&&(s+=x.glyphAtlasIndices.length,this._textRenderInfo=x)}),s!==t.length&&(t=va(t,s),l=va(l,s),c=va(c,s*4));let f=0,u=0;this._members.forEach((T,{textRenderInfo:x})=>{if(x){const S=x.glyphAtlasIndices.length;t.fill(f,u,u+S),l.set(x.glyphAtlasIndices,u,u+S),c.set(x.glyphBounds,u*4,(u+S)*4),u+=S,T.index=f++}}),g.updateAttributeData(Ci,t,1),g.getAttribute(Ci).setUsage(n.Vnu),g.updateAttributeData(Ri,l,1),g.updateAttributeData(Xi,c,4),this.updateBounds(),this.dispatchEvent(jo),a&&a()}))}copy(a){return a instanceof ma&&(super.copy(a),this._members.forEach((R,g)=>this.removeText(g)),a._members.forEach((R,g)=>this.addText(g))),this}dispose(){super.dispose(),Object.values(this._dataTextures).forEach(a=>a.dispose())}}function va(C,a){const R=new C.constructor(a);return R.set(C.subarray(0,a)),R}function Jo(C){const a="uTroikaMatricesTexture",R="uTroikaMatricesTextureSize";let g=pi(C,{chained:!0,uniforms:{[R]:{value:new n.I9Y},[a]:{value:null}},vertexDefs:`
      uniform highp sampler2D ${a};
      uniform vec2 ${R};
      attribute float ${Ci};

      vec4 troikaBatchTexel(float offset) {
        offset += ${Ci} * ${ha.toFixed(1)} / 4.0;
        float w = ${R}.x;
        vec2 uv = (vec2(mod(offset, w), floor(offset / w)) + 0.5) / ${R};
        return texture2D(${a}, uv);
      }
    `,vertexTransform:`
      mat4 matrix = mat4(
        troikaBatchTexel(0.0),
        troikaBatchTexel(1.0),
        troikaBatchTexel(2.0),
        troikaBatchTexel(3.0)
      );
      position.xyz = (matrix * vec4(position, 1.0)).xyz;
    `});return g=ur(g),g=pi(g,{chained:!0,uniforms:{uTroikaIsOutline:{value:!1}},customRewriter(i){return["uTroikaTotalBounds","uTroikaClipRect","uTroikaPositionOffset","uTroikaEdgeOffset","uTroikaBlurRadius","uTroikaStrokeWidth","uTroikaStrokeColor","uTroikaStrokeOpacity","uTroikaFillOpacity","uTroikaCurveRadius","diffuse"].forEach(l=>{i=$o(i,l)}),i},vertexDefs:`
      uniform bool uTroikaIsOutline;
      vec3 troikaFloatToColor(float v) {
        return mod(floor(vec3(v / 65536.0, v / 256.0, v)), 256.0) / 256.0;
      }
    `,vertexTransform:`
      uTroikaTotalBounds = troikaBatchTexel(4.0);
      uTroikaClipRect = troikaBatchTexel(5.0);
      
      vec4 data = troikaBatchTexel(6.0);
      diffuse = troikaFloatToColor(data.x);
      uTroikaFillOpacity = data.y;
      uTroikaCurveRadius = data.z;
      
      data = troikaBatchTexel(7.0);
      if (uTroikaIsOutline) {
        if (data == vec4(0.0)) { // degenerate if zero outline
          position = vec3(0.0);
        } else {
          uTroikaPositionOffset = data.xy;
          uTroikaEdgeOffset = data.z;
          uTroikaBlurRadius = data.w;
        }
      } else {
        uTroikaStrokeWidth = data.x;
        uTroikaStrokeColor = troikaFloatToColor(data.y);
        uTroikaStrokeOpacity = data.z;
      }
    `}),g.setMatrixTexture=i=>{g.uniforms[a].value=i,g.uniforms[R].value.set(i.image.width,i.image.height)},g}function $o({vertexShader:C,fragmentShader:a},R,g=R){const i=new RegExp(`uniform\\s+(bool|float|vec[234]|mat[34])\\s+${R}\\b`);let t,l=!1;a=a.replace(i,(s,f)=>(l=!0,`varying ${t=f} ${g}`));let c=!1;return C=C.replace(i,(s,f)=>(c=!0,`${l?"varying":""} ${t=f} ${g}`)),c||(C=`${l?"varying":""} ${t} ${g};
${C}`),{vertexShader:C,fragmentShader:a}}function es(C,a,R){let g=null;const i=ts(C);let t=null;return i.forEach(l=>{(!t||Math.abs(R-(l.top+l.bottom)/2)<Math.abs(R-(t.top+t.bottom)/2))&&(t=l)}),t.carets.forEach(l=>{(!g||Math.abs(a-l.x)<Math.abs(a-g.x))&&(g=l)}),g}const No=new WeakMap;function ns(C,a,R){let g;if(C){let i=No.get(C);if(i&&i.start===a&&i.end===R)return i.rects;const{caretPositions:t}=C;if(R<a){const c=a;a=R,R=c}a=Math.max(a,0),R=Math.min(R,t.length+1),g=[];let l=null;for(let c=a;c<R;c++){const s=t[c*4],f=t[c*4+1],u=Math.min(s,f),T=Math.max(s,f),x=t[c*4+2],S=t[c*4+3];(!l||x!==l.bottom||S!==l.top||u>l.right||T<l.left)&&(l={left:1/0,right:-1/0,bottom:x,top:S},g.push(l)),l.left=Math.min(u,l.left),l.right=Math.max(T,l.right)}g.sort((c,s)=>s.bottom-c.bottom||c.left-s.left);for(let c=g.length-1;c-- >0;){const s=g[c],f=g[c+1];s.bottom===f.bottom&&s.top===f.top&&s.left<=f.right&&s.right>=f.left&&(f.left=Math.min(f.left,s.left),f.right=Math.max(f.right,s.right),g.splice(c,1))}No.set(C,{start:a,end:R,rects:g})}return g}const Fo=new WeakMap;function ts(C){let a=Fo.get(C);if(!a){a=[];const{caretPositions:R}=C;let g;const i=(l,c,s,f)=>{(!g||s<(g.top+g.bottom)/2)&&a.push(g={bottom:c,top:s,carets:[]}),s>g.top&&(g.top=s),c<g.bottom&&(g.bottom=c),g.carets.push({x:l,y:c,height:s-c,charIndex:f})};let t=0;for(;t<R.length;t+=4)i(R[t],R[t+2],R[t+3],t/4);i(R[t-3],R[t-2],R[t-1],t/4)}return Fo.set(C,a),a}},720699:(cs,ar,Qt)=>{Qt.r(ar),Qt.d(ar,{ACESFilmicToneMapping:()=>n.FV,AddEquation:()=>n.gO9,AddOperation:()=>n.XrR,AdditiveAnimationBlendMode:()=>n.DAe,AdditiveBlending:()=>n.EZo,AgXToneMapping:()=>n.LAk,AlphaFormat:()=>n.wrO,AlwaysCompare:()=>n.FFZ,AlwaysDepth:()=>n.lGu,AlwaysStencilFunc:()=>n.sKt,AmbientLight:()=>n.$p8,AnimationAction:()=>n.pPE,AnimationClip:()=>n.tz3,AnimationLoader:()=>n.kEx,AnimationMixer:()=>n.Iw4,AnimationObjectGroup:()=>n.P5j,AnimationUtils:()=>n.AKb,ArcCurve:()=>n.ibB,ArrayCamera:()=>n.nZQ,ArrowHelper:()=>n.E0M,AttachedBindMode:()=>n.BER,Audio:()=>n.fP5,AudioAnalyser:()=>n.CwR,AudioContext:()=>n.UtX,AudioListener:()=>n.Pf$,AudioLoader:()=>n.Am1,AxesHelper:()=>n.IzY,BackSide:()=>n.hsX,BasicDepthPacking:()=>n.Rkk,BasicShadowMap:()=>n.bTm,BatchedMesh:()=>n.$Ed,Bone:()=>n.$Kf,BooleanKeyframeTrack:()=>n.YOZ,Box2:()=>n.UtB,Box3:()=>n.NRn,Box3Helper:()=>n.BND,BoxGeometry:()=>n.iNn,BoxHelper:()=>n.IWo,BufferAttribute:()=>n.THS,BufferGeometry:()=>n.LoY,BufferGeometryLoader:()=>n.SUR,ByteType:()=>n.tJf,Cache:()=>n.l2R,Camera:()=>n.i7d,CameraHelper:()=>n.WTh,CanvasTexture:()=>n.GOR,CapsuleGeometry:()=>n.qU7,CatmullRomCurve3:()=>n.B6O,CineonToneMapping:()=>n.nNL,CircleGeometry:()=>n.tcD,ClampToEdgeWrapping:()=>n.ghU,Clock:()=>n.zD7,Color:()=>n.Q1f,ColorKeyframeTrack:()=>n.T6I,ColorManagement:()=>n.ppV,CompressedArrayTexture:()=>n.iOZ,CompressedCubeTexture:()=>n.c5h,CompressedTexture:()=>n.FvD,CompressedTextureLoader:()=>n.YRT,ConeGeometry:()=>n.qFE,ConstantAlphaFactor:()=>n.e0p,ConstantColorFactor:()=>n.RrE,Controls:()=>n.H2z,CubeCamera:()=>n.F1T,CubeReflectionMapping:()=>n.hy7,CubeRefractionMapping:()=>n.xFO,CubeTexture:()=>n.b4q,CubeTextureLoader:()=>n.ScU,CubeUVReflectionMapping:()=>n.Om,CubicBezierCurve:()=>n.Z0B,CubicBezierCurve3:()=>n.s0K,CubicInterpolant:()=>n.Pdi,CullFaceBack:()=>n.Vb5,CullFaceFront:()=>n.Jnc,CullFaceFrontBack:()=>n.ywQ,CullFaceNone:()=>n.WNZ,Curve:()=>n.Ipv,CurvePath:()=>n.jGm,CustomBlending:()=>n.bCz,CustomToneMapping:()=>n.g7M,CylinderGeometry:()=>n.Ho_,Cylindrical:()=>n.hjs,Data3DTexture:()=>n.dYF,DataArrayTexture:()=>n.rFo,DataTexture:()=>n.GYF,DataTextureLoader:()=>n.BRH,DataUtils:()=>n.GxU,DecrementStencilOp:()=>n.ROr,DecrementWrapStencilOp:()=>n.fJr,DefaultLoadingManager:()=>n.h_9,DepthFormat:()=>n.zdS,DepthStencilFormat:()=>n.dcC,DepthTexture:()=>n.VCu,DetachedBindMode:()=>n.Fvi,DirectionalLight:()=>n.ZyN,DirectionalLightHelper:()=>n.PFK,DiscreteInterpolant:()=>n.Yhb,DodecahedronGeometry:()=>n.nEu,DoubleSide:()=>n.$EB,DstAlphaFactor:()=>n.hdd,DstColorFactor:()=>n.wn6,DynamicCopyUsage:()=>n.MOq,DynamicDrawUsage:()=>n.Vnu,DynamicReadUsage:()=>n.hIf,EdgesGeometry:()=>n.TDQ,EllipseCurve:()=>n.S20,EqualCompare:()=>n.kO0,EqualDepth:()=>n.U3G,EqualStencilFunc:()=>n.jsO,EquirectangularReflectionMapping:()=>n.wfO,EquirectangularRefractionMapping:()=>n.uV5,Euler:()=>n.O9p,EventDispatcher:()=>n.Qev,ExtrudeGeometry:()=>n.QCA,FileLoader:()=>n.Y9S,Float16BufferAttribute:()=>n.Oax,Float32BufferAttribute:()=>n.qtW,FloatType:()=>n.RQf,Fog:()=>n.jUj,FogExp2:()=>n.cRK,FramebufferTexture:()=>n.Pem,FrontSide:()=>n.hB5,Frustum:()=>n.PPD,FrustumArray:()=>n.uf3,GLBufferAttribute:()=>n.oh6,GLSL1:()=>n.Wyr,GLSL3:()=>n.Wdf,GreaterCompare:()=>n.eoi,GreaterDepth:()=>n.K52,GreaterEqualCompare:()=>n.gWB,GreaterEqualDepth:()=>n.Gwm,GreaterEqualStencilFunc:()=>n.TMh,GreaterStencilFunc:()=>n.RcT,GridHelper:()=>n.fTw,Group:()=>n.YJl,HalfFloatType:()=>n.ix0,HemisphereLight:()=>n.dth,HemisphereLightHelper:()=>n.R1W,IcosahedronGeometry:()=>n.WBB,ImageBitmapLoader:()=>n.Kzg,ImageLoader:()=>n.$NF,ImageUtils:()=>n.HgN,IncrementStencilOp:()=>n.HLH,IncrementWrapStencilOp:()=>n.Ru$,InstancedBufferAttribute:()=>n.uWO,InstancedBufferGeometry:()=>n.CmU,InstancedInterleavedBuffer:()=>n.LuO,InstancedMesh:()=>n.ZLX,Int16BufferAttribute:()=>n.Hrb,Int32BufferAttribute:()=>n.vmz,Int8BufferAttribute:()=>n.wvS,IntType:()=>n.Yuy,InterleavedBuffer:()=>n.eB$,InterleavedBufferAttribute:()=>n.eHs,Interpolant:()=>n.lGw,InterpolateDiscrete:()=>n.ljd,InterpolateLinear:()=>n.PJ3,InterpolateSmooth:()=>n.EQC,InterpolationSamplingMode:()=>n.TM5,InterpolationSamplingType:()=>n.G4u,InvertStencilOp:()=>n.oVO,KeepStencilOp:()=>n.VVr,KeyframeTrack:()=>n.UJ6,LOD:()=>n.UpK,LatheGeometry:()=>n.nzx,Layers:()=>n.zgK,LessCompare:()=>n.vim,LessDepth:()=>n.brA,LessEqualCompare:()=>n.TiK,LessEqualDepth:()=>n.xSv,LessEqualStencilFunc:()=>n.CR7,LessStencilFunc:()=>n.kYr,Light:()=>n.veJ,LightProbe:()=>n.FZo,Line:()=>n.N1A,Line3:()=>n.cZY,LineBasicMaterial:()=>n.mrM,LineCurve:()=>n.GZZ,LineCurve3:()=>n.VnP,LineDashedMaterial:()=>n.Fvt,LineLoop:()=>n.FCc,LineSegments:()=>n.DXC,LinearFilter:()=>n.k6q,LinearInterpolant:()=>n.ezk,LinearMipMapLinearFilter:()=>n.NZq,LinearMipMapNearestFilter:()=>n.iUH,LinearMipmapLinearFilter:()=>n.$_I,LinearMipmapNearestFilter:()=>n.kRr,LinearSRGBColorSpace:()=>n.Zr2,LinearToneMapping:()=>n.kyO,LinearTransfer:()=>n.VxR,Loader:()=>n.aHM,LoaderUtils:()=>n.r6x,LoadingManager:()=>n.KPJ,LoopOnce:()=>n.G3T,LoopPingPong:()=>n.lc7,LoopRepeat:()=>n.aMy,MOUSE:()=>n.kBv,Material:()=>n.imn,MaterialLoader:()=>n.jut,MathUtils:()=>n.cj9,Matrix2:()=>n.k_V,Matrix3:()=>n.dwI,Matrix4:()=>n.kn4,MaxEquation:()=>n.$ei,Mesh:()=>n.eaF,MeshBasicMaterial:()=>n.V9B,MeshDepthMaterial:()=>n.CSG,MeshDistanceMaterial:()=>n.aVO,MeshLambertMaterial:()=>n.G_z,MeshMatcapMaterial:()=>n.FNr,MeshNormalMaterial:()=>n.qBx,MeshPhongMaterial:()=>n.tXL,MeshPhysicalMaterial:()=>n.uSd,MeshStandardMaterial:()=>n._4j,MeshToonMaterial:()=>n.Df,MinEquation:()=>n.znC,MirroredRepeatWrapping:()=>n.kTW,MixOperation:()=>n.KRh,MultiplyBlending:()=>n.EdD,MultiplyOperation:()=>n.caT,NearestFilter:()=>n.hxR,NearestMipMapLinearFilter:()=>n.a$r,NearestMipMapNearestFilter:()=>n.$O9,NearestMipmapLinearFilter:()=>n.Cfg,NearestMipmapNearestFilter:()=>n.pHI,NeutralToneMapping:()=>n.aJ8,NeverCompare:()=>n.amv,NeverDepth:()=>n.eHc,NeverStencilFunc:()=>n.HPb,NoBlending:()=>n.XIg,NoColorSpace:()=>n.jf0,NoToneMapping:()=>n.y_p,NormalAnimationBlendMode:()=>n.Ke9,NormalBlending:()=>n.NTi,NotEqualCompare:()=>n.jzd,NotEqualDepth:()=>n.bw0,NotEqualStencilFunc:()=>n.klZ,NumberKeyframeTrack:()=>n.Hit,Object3D:()=>n.B69,ObjectLoader:()=>n.XTe,ObjectSpaceNormalMap:()=>n.vyJ,OctahedronGeometry:()=>n.Ufg,OneFactor:()=>n.qad,OneMinusConstantAlphaFactor:()=>n.ov9,OneMinusConstantColorFactor:()=>n.$Yl,OneMinusDstAlphaFactor:()=>n.Nt7,OneMinusDstColorFactor:()=>n.aEY,OneMinusSrcAlphaFactor:()=>n.OuU,OneMinusSrcColorFactor:()=>n.LiQ,OrthographicCamera:()=>n.qUd,PCFShadowMap:()=>n.QP0,PCFSoftShadowMap:()=>n.Wk7,PMREMGenerator:()=>Q,Path:()=>n.wAk,PerspectiveCamera:()=>n.ubm,Plane:()=>n.Zcv,PlaneGeometry:()=>n.bdM,PlaneHelper:()=>n.ZM4,PointLight:()=>n.HiM,PointLightHelper:()=>n.F1l,Points:()=>n.ONl,PointsMaterial:()=>n.BH$,PolarGridHelper:()=>n.hzE,PolyhedronGeometry:()=>n.pFK,PositionalAudio:()=>n.xZx,PropertyBinding:()=>n.Nwf,PropertyMixer:()=>n.N2s,QuadraticBezierCurve:()=>n.dAo,QuadraticBezierCurve3:()=>n.CV9,Quaternion:()=>n.PTz,QuaternionKeyframeTrack:()=>n.MBL,QuaternionLinearInterpolant:()=>n.GBG,RED_GREEN_RGTC2_Format:()=>n.HO_,RED_RGTC1_Format:()=>n.Kef,REVISION:()=>n.sPf,RGBADepthPacking:()=>n.N5j,RGBAFormat:()=>n.GWd,RGBAIntegerFormat:()=>n.c90,RGBA_ASTC_10x10_Format:()=>n.y3Z,RGBA_ASTC_10x5_Format:()=>n.uB5,RGBA_ASTC_10x6_Format:()=>n.lyL,RGBA_ASTC_10x8_Format:()=>n.bC7,RGBA_ASTC_12x10_Format:()=>n.ojs,RGBA_ASTC_12x12_Format:()=>n.S$4,RGBA_ASTC_4x4_Format:()=>n.qa3,RGBA_ASTC_5x4_Format:()=>n.B_h,RGBA_ASTC_5x5_Format:()=>n.czI,RGBA_ASTC_6x5_Format:()=>n.rSH,RGBA_ASTC_6x6_Format:()=>n.Qrf,RGBA_ASTC_8x5_Format:()=>n.psI,RGBA_ASTC_8x6_Format:()=>n.a5J,RGBA_ASTC_8x8_Format:()=>n._QJ,RGBA_BPTC_Format:()=>n.Fn,RGBA_ETC2_EAC_Format:()=>n.KDk,RGBA_PVRTC_2BPPV1_Format:()=>n.pBf,RGBA_PVRTC_4BPPV1_Format:()=>n.HXV,RGBA_S3TC_DXT1_Format:()=>n.Nz6,RGBA_S3TC_DXT3_Format:()=>n.jR7,RGBA_S3TC_DXT5_Format:()=>n.BXX,RGBDepthPacking:()=>n.wTz,RGBFormat:()=>n.HIg,RGBIntegerFormat:()=>n.VGF,RGB_BPTC_SIGNED_Format:()=>n.H23,RGB_BPTC_UNSIGNED_Format:()=>n.W9U,RGB_ETC1_Format:()=>n.CVz,RGB_ETC2_Format:()=>n.Riy,RGB_PVRTC_2BPPV1_Format:()=>n.kTp,RGB_PVRTC_4BPPV1_Format:()=>n.k6Q,RGB_S3TC_DXT1_Format:()=>n.IE4,RGDepthPacking:()=>n.k8v,RGFormat:()=>n.paN,RGIntegerFormat:()=>n.TkQ,RawShaderMaterial:()=>n.D$Q,Ray:()=>n.RlV,Raycaster:()=>n.tBo,RectAreaLight:()=>n.ure,RedFormat:()=>n.VT0,RedIntegerFormat:()=>n.ZQM,ReinhardToneMapping:()=>n.Mjd,RenderTarget:()=>n.O0B,RenderTarget3D:()=>n.XMJ,RepeatWrapping:()=>n.GJx,ReplaceStencilOp:()=>n.kG0,ReverseSubtractEquation:()=>n.nST,RingGeometry:()=>n.rKP,SIGNED_RED_GREEN_RGTC2_Format:()=>n.CWW,SIGNED_RED_RGTC1_Format:()=>n.XG_,SRGBColorSpace:()=>n.er$,SRGBTransfer:()=>n.KLL,Scene:()=>n.Z58,ShaderChunk:()=>S,ShaderLib:()=>F,ShaderMaterial:()=>n.BKk,ShadowMaterial:()=>n.q2,Shape:()=>n.ypk,ShapeGeometry:()=>n.MSw,ShapePath:()=>n.Ld9,ShapeUtils:()=>n.xJ6,ShortType:()=>n.fBL,Skeleton:()=>n.EAD,SkeletonHelper:()=>n._xc,SkinnedMesh:()=>n.I46,Source:()=>n.kLi,Sphere:()=>n.iyt,SphereGeometry:()=>n.Gu$,Spherical:()=>n.YHV,SphericalHarmonics3:()=>n.xOk,SplineCurve:()=>n.xfg,SpotLight:()=>n.nCl,SpotLightHelper:()=>n.Fpm,Sprite:()=>n.kxk,SpriteMaterial:()=>n.RoJ,SrcAlphaFactor:()=>n.ie2,SrcAlphaSaturateFactor:()=>n.hgQ,SrcColorFactor:()=>n.f4X,StaticCopyUsage:()=>n.Hrq,StaticDrawUsage:()=>n.agE,StaticReadUsage:()=>n.uXQ,StereoCamera:()=>n.keZ,StreamCopyUsage:()=>n.rOG,StreamDrawUsage:()=>n.Ktl,StreamReadUsage:()=>n.uov,StringKeyframeTrack:()=>n.hZF,SubtractEquation:()=>n.FXf,SubtractiveBlending:()=>n.Kwu,TOUCH:()=>n.wtR,TangentSpaceNormalMap:()=>n.bI3,TetrahedronGeometry:()=>n.Zpd,Texture:()=>n.gPd,TextureLoader:()=>n.Tap,TextureUtils:()=>n.Vwu,Timer:()=>n.M4G,TimestampQuery:()=>n.v9J,TorusGeometry:()=>n.O3Y,TorusKnotGeometry:()=>n.UPV,Triangle:()=>n.lMl,TriangleFanDrawMode:()=>n.rYR,TriangleStripDrawMode:()=>n.O49,TrianglesDrawMode:()=>n.RJ4,TubeGeometry:()=>n.j6,UVMapping:()=>n.UTZ,Uint16BufferAttribute:()=>n.A$4,Uint32BufferAttribute:()=>n.MW4,Uint8BufferAttribute:()=>n.baL,Uint8ClampedBufferAttribute:()=>n.fc6,Uniform:()=>n.nc$,UniformsGroup:()=>n.dzP,UniformsLib:()=>U,UniformsUtils:()=>n.LlO,UnsignedByteType:()=>n.OUM,UnsignedInt248Type:()=>n.V3x,UnsignedInt5999Type:()=>n.Dmk,UnsignedIntType:()=>n.bkx,UnsignedShort4444Type:()=>n.Wew,UnsignedShort5551Type:()=>n.gJ2,UnsignedShortType:()=>n.cHt,VSMShadowMap:()=>n.RyA,Vector2:()=>n.I9Y,Vector3:()=>n.Pq0,Vector4:()=>n.IUQ,VectorKeyframeTrack:()=>n.RiT,VideoFrameTexture:()=>n.SYV,VideoTexture:()=>n.Nv2,WebGL3DRenderTarget:()=>n.ALV,WebGLArrayRenderTarget:()=>n.y9J,WebGLCoordinateSystem:()=>n.TdN,WebGLCubeRenderTarget:()=>n.o6l,WebGLRenderTarget:()=>n.nWS,WebGLRenderer:()=>Ot,WebGLUtils:()=>Mi,WebGPUCoordinateSystem:()=>n.i7u,WebXRController:()=>n.R3r,WireframeGeometry:()=>n.XJ7,WrapAroundEnding:()=>n.dhZ,ZeroCurvatureEnding:()=>n.rQf,ZeroFactor:()=>n.ojh,ZeroSlopeEnding:()=>n.h2z,ZeroStencilOp:()=>n.kqe,createCanvasElement:()=>n.lPF});var n=Qt(979248);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Br(){let e=null,o=!1,r=null,d=null;function _(m,w){r(m,w),d=e.requestAnimationFrame(_)}return{start:function(){o!==!0&&r!==null&&(d=e.requestAnimationFrame(_),o=!0)},stop:function(){e.cancelAnimationFrame(d),o=!1},setAnimationLoop:function(m){r=m},setContext:function(m){e=m}}}function Na(e){const o=new WeakMap;function r(M,K){const H=M.array,j=M.usage,O=H.byteLength,G=e.createBuffer();e.bindBuffer(K,G),e.bufferData(K,H,j),M.onUploadCallback();let V;if(H instanceof Float32Array)V=e.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)V=e.HALF_FLOAT;else if(H instanceof Uint16Array)M.isFloat16BufferAttribute?V=e.HALF_FLOAT:V=e.UNSIGNED_SHORT;else if(H instanceof Int16Array)V=e.SHORT;else if(H instanceof Uint32Array)V=e.UNSIGNED_INT;else if(H instanceof Int32Array)V=e.INT;else if(H instanceof Int8Array)V=e.BYTE;else if(H instanceof Uint8Array)V=e.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)V=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:G,type:V,bytesPerElement:H.BYTES_PER_ELEMENT,version:M.version,size:O}}function d(M,K,H){const j=K.array,O=K.updateRanges;if(e.bindBuffer(H,M),O.length===0)e.bufferSubData(H,0,j);else{O.sort((V,pe)=>V.start-pe.start);let G=0;for(let V=1;V<O.length;V++){const pe=O[G],Z=O[V];Z.start<=pe.start+pe.count+1?pe.count=Math.max(pe.count,Z.start+Z.count-pe.start):(++G,O[G]=Z)}O.length=G+1;for(let V=0,pe=O.length;V<pe;V++){const Z=O[V];e.bufferSubData(H,Z.start*j.BYTES_PER_ELEMENT,j,Z.start,Z.count)}K.clearUpdateRanges()}K.onUploadCallback()}function _(M){return M.isInterleavedBufferAttribute&&(M=M.data),o.get(M)}function m(M){M.isInterleavedBufferAttribute&&(M=M.data);const K=o.get(M);K&&(e.deleteBuffer(K.buffer),o.delete(M))}function w(M,K){if(M.isInterleavedBufferAttribute&&(M=M.data),M.isGLBufferAttribute){const j=o.get(M);(!j||j.version<M.version)&&o.set(M,{buffer:M.buffer,type:M.type,bytesPerElement:M.elementSize,version:M.version});return}const H=o.get(M);if(H===void 0)o.set(M,r(M,K));else if(H.version<M.version){if(H.size!==M.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");d(H.buffer,M,K),H.version=M.version}}return{get:_,remove:m,update:w}}var Gr=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fa=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oa=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,or=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xi=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ai=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sr=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,di=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ba=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ki=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ga=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kr=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hr=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ka=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ha=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Va=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yt=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wa=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,si=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,za=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wr=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zr=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xa=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pi=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ya=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ka=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qa=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yr="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qa=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Za=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ja=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ja=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$a=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eo=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,no=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kr=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qr=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,to=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,io=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ro=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ao=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oo=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,so=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zr=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lo=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,li=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hi=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jr=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,co=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vi=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fo=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cr=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jr=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uo=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,po=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ho=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$r=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mo=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ea=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vo=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_o=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$t=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,go=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,na=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hi=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,So=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wi=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ta=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eo=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,To=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ia=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zi=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ra=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aa=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oa=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sa=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mo=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xo=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,la=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ao=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xi=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ri=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ro=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ca=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bo=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Co=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uo=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yo=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ur=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dr=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fa=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ua=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yi=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pr=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bi=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wo=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,da=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pa=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S={alphahash_fragment:Gr,alphahash_pars_fragment:Fa,alphamap_fragment:Oa,alphamap_pars_fragment:or,alphatest_fragment:xi,alphatest_pars_fragment:Ai,aomap_fragment:sr,aomap_pars_fragment:di,batching_pars_vertex:Ba,batching_vertex:ki,begin_vertex:Ga,beginnormal_vertex:kr,bsdfs:Hr,iridescence_fragment:ka,bumpmap_pars_fragment:Ha,clipping_planes_fragment:Va,clipping_planes_pars_fragment:Vr,clipping_planes_pars_vertex:lr,clipping_planes_vertex:yt,color_fragment:Wa,color_pars_fragment:si,color_pars_vertex:za,color_vertex:Wr,common:zr,cube_uv_reflection_fragment:Xa,defaultnormal_vertex:pi,displacementmap_pars_vertex:Ya,displacementmap_vertex:Xr,emissivemap_fragment:Ka,emissivemap_pars_fragment:qa,colorspace_fragment:Yr,colorspace_pars_fragment:Qa,envmap_fragment:Za,envmap_common_pars_fragment:zo,envmap_pars_fragment:Xo,envmap_pars_vertex:Yo,envmap_physical_pars_fragment:ro,envmap_vertex:ja,fog_vertex:Ja,fog_pars_vertex:$a,fog_fragment:eo,fog_pars_fragment:no,gradientmap_pars_fragment:Kr,lightmap_pars_fragment:qr,lights_lambert_fragment:Qr,lights_lambert_pars_fragment:to,lights_pars_begin:io,lights_toon_fragment:ao,lights_toon_pars_fragment:oo,lights_phong_fragment:so,lights_phong_pars_fragment:Zr,lights_physical_fragment:lo,lights_physical_pars_fragment:li,lights_fragment_begin:Hi,lights_fragment_maps:jr,lights_fragment_end:co,logdepthbuf_fragment:Vi,logdepthbuf_pars_fragment:fo,logdepthbuf_pars_vertex:cr,logdepthbuf_vertex:Jr,map_fragment:uo,map_pars_fragment:po,map_particle_fragment:ho,map_particle_pars_fragment:$r,metalnessmap_fragment:mo,metalnessmap_pars_fragment:ea,morphinstance_vertex:vo,morphcolor_vertex:_o,morphnormal_vertex:$t,morphtarget_pars_vertex:go,morphtarget_vertex:na,normal_fragment_begin:hi,normal_fragment_maps:So,normal_pars_fragment:Wi,normal_pars_vertex:fr,normal_vertex:ta,normalmap_pars_fragment:Eo,clearcoat_normal_fragment_begin:To,clearcoat_normal_fragment_maps:ia,clearcoat_pars_fragment:zi,iridescence_pars_fragment:ra,opaque_fragment:aa,packing:oa,premultiplied_alpha_fragment:sa,project_vertex:Mo,dithering_fragment:xo,dithering_pars_fragment:la,roughnessmap_fragment:Ao,roughnessmap_pars_fragment:Xi,shadowmap_pars_fragment:Ri,shadowmap_pars_vertex:Ro,shadowmap_vertex:ca,shadowmask_pars_fragment:bo,skinbase_vertex:Co,skinning_pars_vertex:Uo,skinning_vertex:yo,skinnormal_vertex:ur,specularmap_fragment:dr,specularmap_pars_fragment:fa,tonemapping_fragment:ua,tonemapping_pars_fragment:Yi,transmission_fragment:pr,transmission_pars_fragment:bi,uv_pars_fragment:wo,uv_pars_vertex:hr,uv_vertex:da,worldpos_vertex:pa,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},U={common:{diffuse:{value:new n.Q1f(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new n.dwI},alphaMap:{value:null},alphaMapTransform:{value:new n.dwI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new n.dwI}},envmap:{envMap:{value:null},envMapRotation:{value:new n.dwI},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new n.dwI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new n.dwI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new n.dwI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new n.dwI},normalScale:{value:new n.I9Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new n.dwI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new n.dwI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new n.dwI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new n.dwI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new n.Q1f(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new n.Q1f(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new n.dwI},alphaTest:{value:0},uvTransform:{value:new n.dwI}},sprite:{diffuse:{value:new n.Q1f(16777215)},opacity:{value:1},center:{value:new n.I9Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new n.dwI},alphaMap:{value:null},alphaMapTransform:{value:new n.dwI},alphaTest:{value:0}}},F={basic:{uniforms:(0,n.Iit)([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.fog]),vertexShader:S.meshbasic_vert,fragmentShader:S.meshbasic_frag},lambert:{uniforms:(0,n.Iit)([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new n.Q1f(0)}}]),vertexShader:S.meshlambert_vert,fragmentShader:S.meshlambert_frag},phong:{uniforms:(0,n.Iit)([U.common,U.specularmap,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.fog,U.lights,{emissive:{value:new n.Q1f(0)},specular:{value:new n.Q1f(1118481)},shininess:{value:30}}]),vertexShader:S.meshphong_vert,fragmentShader:S.meshphong_frag},standard:{uniforms:(0,n.Iit)([U.common,U.envmap,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.roughnessmap,U.metalnessmap,U.fog,U.lights,{emissive:{value:new n.Q1f(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:S.meshphysical_vert,fragmentShader:S.meshphysical_frag},toon:{uniforms:(0,n.Iit)([U.common,U.aomap,U.lightmap,U.emissivemap,U.bumpmap,U.normalmap,U.displacementmap,U.gradientmap,U.fog,U.lights,{emissive:{value:new n.Q1f(0)}}]),vertexShader:S.meshtoon_vert,fragmentShader:S.meshtoon_frag},matcap:{uniforms:(0,n.Iit)([U.common,U.bumpmap,U.normalmap,U.displacementmap,U.fog,{matcap:{value:null}}]),vertexShader:S.meshmatcap_vert,fragmentShader:S.meshmatcap_frag},points:{uniforms:(0,n.Iit)([U.points,U.fog]),vertexShader:S.points_vert,fragmentShader:S.points_frag},dashed:{uniforms:(0,n.Iit)([U.common,U.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:S.linedashed_vert,fragmentShader:S.linedashed_frag},depth:{uniforms:(0,n.Iit)([U.common,U.displacementmap]),vertexShader:S.depth_vert,fragmentShader:S.depth_frag},normal:{uniforms:(0,n.Iit)([U.common,U.bumpmap,U.normalmap,U.displacementmap,{opacity:{value:1}}]),vertexShader:S.meshnormal_vert,fragmentShader:S.meshnormal_frag},sprite:{uniforms:(0,n.Iit)([U.sprite,U.fog]),vertexShader:S.sprite_vert,fragmentShader:S.sprite_frag},background:{uniforms:{uvTransform:{value:new n.dwI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:S.background_vert,fragmentShader:S.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new n.dwI}},vertexShader:S.backgroundCube_vert,fragmentShader:S.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:S.cube_vert,fragmentShader:S.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:S.equirect_vert,fragmentShader:S.equirect_frag},distanceRGBA:{uniforms:(0,n.Iit)([U.common,U.displacementmap,{referencePosition:{value:new n.Pq0},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:S.distanceRGBA_vert,fragmentShader:S.distanceRGBA_frag},shadow:{uniforms:(0,n.Iit)([U.lights,U.fog,{color:{value:new n.Q1f(0)},opacity:{value:1}}]),vertexShader:S.shadow_vert,fragmentShader:S.shadow_frag}};F.physical={uniforms:(0,n.Iit)([F.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new n.dwI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new n.dwI},clearcoatNormalScale:{value:new n.I9Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new n.dwI},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new n.dwI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new n.dwI},sheen:{value:0},sheenColor:{value:new n.Q1f(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new n.dwI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new n.dwI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new n.dwI},transmissionSamplerSize:{value:new n.I9Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new n.dwI},attenuationDistance:{value:0},attenuationColor:{value:new n.Q1f(0)},specularColor:{value:new n.Q1f(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new n.dwI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new n.dwI},anisotropyVector:{value:new n.I9Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new n.dwI}}]),vertexShader:S.meshphysical_vert,fragmentShader:S.meshphysical_frag};const X={r:0,b:0,g:0},Te=new n.O9p,ce=new n.kn4;function se(e,o,r,d,_,m,w){const M=new n.Q1f(0);let K=m===!0?0:1,H,j,O=null,G=0,V=null;function pe(W){let L=W.isScene===!0?W.background:null;return L&&L.isTexture&&(L=(W.backgroundBlurriness>0?r:o).get(L)),L}function Z(W){let L=!1;const fe=pe(W);fe===null?p(M,K):fe&&fe.isColor&&(p(fe,1),L=!0);const $=e.xr.getEnvironmentBlendMode();$==="additive"?d.buffers.color.setClear(0,0,0,1,w):$==="alpha-blend"&&d.buffers.color.setClear(0,0,0,0,w),(e.autoClear||L)&&(d.buffers.depth.setTest(!0),d.buffers.depth.setMask(!0),d.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(W,L){const fe=pe(L);fe&&(fe.isCubeTexture||fe.mapping===n.Om)?(j===void 0&&(j=new n.eaF(new n.iNn(1,1,1),new n.BKk({name:"BackgroundCubeMaterial",uniforms:(0,n.lxW)(F.backgroundCube.uniforms),vertexShader:F.backgroundCube.vertexShader,fragmentShader:F.backgroundCube.fragmentShader,side:n.hsX,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),j.geometry.deleteAttribute("normal"),j.geometry.deleteAttribute("uv"),j.onBeforeRender=function($,te,Se){this.matrixWorld.copyPosition(Se.matrixWorld)},Object.defineProperty(j.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),_.update(j)),Te.copy(L.backgroundRotation),Te.x*=-1,Te.y*=-1,Te.z*=-1,fe.isCubeTexture&&fe.isRenderTargetTexture===!1&&(Te.y*=-1,Te.z*=-1),j.material.uniforms.envMap.value=fe,j.material.uniforms.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1,j.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,j.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,j.material.uniforms.backgroundRotation.value.setFromMatrix4(ce.makeRotationFromEuler(Te)),j.material.toneMapped=n.ppV.getTransfer(fe.colorSpace)!==n.KLL,(O!==fe||G!==fe.version||V!==e.toneMapping)&&(j.material.needsUpdate=!0,O=fe,G=fe.version,V=e.toneMapping),j.layers.enableAll(),W.unshift(j,j.geometry,j.material,0,0,null)):fe&&fe.isTexture&&(H===void 0&&(H=new n.eaF(new n.bdM(2,2),new n.BKk({name:"BackgroundMaterial",uniforms:(0,n.lxW)(F.background.uniforms),vertexShader:F.background.vertexShader,fragmentShader:F.background.fragmentShader,side:n.hB5,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),_.update(H)),H.material.uniforms.t2D.value=fe,H.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,H.material.toneMapped=n.ppV.getTransfer(fe.colorSpace)!==n.KLL,fe.matrixAutoUpdate===!0&&fe.updateMatrix(),H.material.uniforms.uvTransform.value.copy(fe.matrix),(O!==fe||G!==fe.version||V!==e.toneMapping)&&(H.material.needsUpdate=!0,O=fe,G=fe.version,V=e.toneMapping),H.layers.enableAll(),W.unshift(H,H.geometry,H.material,0,0,null))}function p(W,L){W.getRGB(X,(0,n._Ut)(e)),d.buffers.color.setClear(X.r,X.g,X.b,L,w)}function re(){j!==void 0&&(j.geometry.dispose(),j.material.dispose(),j=void 0),H!==void 0&&(H.geometry.dispose(),H.material.dispose(),H=void 0)}return{getClearColor:function(){return M},setClearColor:function(W,L=1){M.set(W),K=L,p(M,K)},getClearAlpha:function(){return K},setClearAlpha:function(W){K=W,p(M,K)},render:Z,addToRenderList:E,dispose:re}}function ee(e,o){const r=e.getParameter(e.MAX_VERTEX_ATTRIBS),d={},_=G(null);let m=_,w=!1;function M(A,N,Ne,De,Re){let ze=!1;const Ue=O(De,Ne,N);m!==Ue&&(m=Ue,H(m.object)),ze=V(A,De,Ne,Re),ze&&pe(A,De,Ne,Re),Re!==null&&o.update(Re,e.ELEMENT_ARRAY_BUFFER),(ze||w)&&(w=!1,L(A,N,Ne,De),Re!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o.get(Re).buffer))}function K(){return e.createVertexArray()}function H(A){return e.bindVertexArray(A)}function j(A){return e.deleteVertexArray(A)}function O(A,N,Ne){const De=Ne.wireframe===!0;let Re=d[A.id];Re===void 0&&(Re={},d[A.id]=Re);let ze=Re[N.id];ze===void 0&&(ze={},Re[N.id]=ze);let Ue=ze[De];return Ue===void 0&&(Ue=G(K()),ze[De]=Ue),Ue}function G(A){const N=[],Ne=[],De=[];for(let Re=0;Re<r;Re++)N[Re]=0,Ne[Re]=0,De[Re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Ne,attributeDivisors:De,object:A,attributes:{},index:null}}function V(A,N,Ne,De){const Re=m.attributes,ze=N.attributes;let Ue=0;const Qe=Ne.getAttributes();for(const ve in Qe)if(Qe[ve].location>=0){const In=Re[ve];let Zn=ze[ve];if(Zn===void 0&&(ve==="instanceMatrix"&&A.instanceMatrix&&(Zn=A.instanceMatrix),ve==="instanceColor"&&A.instanceColor&&(Zn=A.instanceColor)),In===void 0||In.attribute!==Zn||Zn&&In.data!==Zn.data)return!0;Ue++}return m.attributesNum!==Ue||m.index!==De}function pe(A,N,Ne,De){const Re={},ze=N.attributes;let Ue=0;const Qe=Ne.getAttributes();for(const ve in Qe)if(Qe[ve].location>=0){let In=ze[ve];In===void 0&&(ve==="instanceMatrix"&&A.instanceMatrix&&(In=A.instanceMatrix),ve==="instanceColor"&&A.instanceColor&&(In=A.instanceColor));const Zn={};Zn.attribute=In,In&&In.data&&(Zn.data=In.data),Re[ve]=Zn,Ue++}m.attributes=Re,m.attributesNum=Ue,m.index=De}function Z(){const A=m.newAttributes;for(let N=0,Ne=A.length;N<Ne;N++)A[N]=0}function E(A){p(A,0)}function p(A,N){const Ne=m.newAttributes,De=m.enabledAttributes,Re=m.attributeDivisors;Ne[A]=1,De[A]===0&&(e.enableVertexAttribArray(A),De[A]=1),Re[A]!==N&&(e.vertexAttribDivisor(A,N),Re[A]=N)}function re(){const A=m.newAttributes,N=m.enabledAttributes;for(let Ne=0,De=N.length;Ne<De;Ne++)N[Ne]!==A[Ne]&&(e.disableVertexAttribArray(Ne),N[Ne]=0)}function W(A,N,Ne,De,Re,ze,Ue){Ue===!0?e.vertexAttribIPointer(A,N,Ne,Re,ze):e.vertexAttribPointer(A,N,Ne,De,Re,ze)}function L(A,N,Ne,De){Z();const Re=De.attributes,ze=Ne.getAttributes(),Ue=N.defaultAttributeValues;for(const Qe in ze){const ve=ze[Qe];if(ve.location>=0){let Cn=Re[Qe];if(Cn===void 0&&(Qe==="instanceMatrix"&&A.instanceMatrix&&(Cn=A.instanceMatrix),Qe==="instanceColor"&&A.instanceColor&&(Cn=A.instanceColor)),Cn!==void 0){const In=Cn.normalized,Zn=Cn.itemSize,tt=o.get(Cn);if(tt===void 0)continue;const wt=tt.buffer,St=tt.type,Ee=tt.bytesPerElement,Je=St===e.INT||St===e.UNSIGNED_INT||Cn.gpuType===n.Yuy;if(Cn.isInterleavedBufferAttribute){const Ke=Cn.data,Nn=Ke.stride,Fn=Cn.offset;if(Ke.isInstancedInterleavedBuffer){for(let zn=0;zn<ve.locationSize;zn++)p(ve.location+zn,Ke.meshPerAttribute);A.isInstancedMesh!==!0&&De._maxInstanceCount===void 0&&(De._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let zn=0;zn<ve.locationSize;zn++)E(ve.location+zn);e.bindBuffer(e.ARRAY_BUFFER,wt);for(let zn=0;zn<ve.locationSize;zn++)W(ve.location+zn,Zn/ve.locationSize,St,In,Nn*Ee,(Fn+Zn/ve.locationSize*zn)*Ee,Je)}else{if(Cn.isInstancedBufferAttribute){for(let Ke=0;Ke<ve.locationSize;Ke++)p(ve.location+Ke,Cn.meshPerAttribute);A.isInstancedMesh!==!0&&De._maxInstanceCount===void 0&&(De._maxInstanceCount=Cn.meshPerAttribute*Cn.count)}else for(let Ke=0;Ke<ve.locationSize;Ke++)E(ve.location+Ke);e.bindBuffer(e.ARRAY_BUFFER,wt);for(let Ke=0;Ke<ve.locationSize;Ke++)W(ve.location+Ke,Zn/ve.locationSize,St,In,Zn*Ee,Zn/ve.locationSize*Ke*Ee,Je)}}else if(Ue!==void 0){const In=Ue[Qe];if(In!==void 0)switch(In.length){case 2:e.vertexAttrib2fv(ve.location,In);break;case 3:e.vertexAttrib3fv(ve.location,In);break;case 4:e.vertexAttrib4fv(ve.location,In);break;default:e.vertexAttrib1fv(ve.location,In)}}}}re()}function fe(){Se();for(const A in d){const N=d[A];for(const Ne in N){const De=N[Ne];for(const Re in De)j(De[Re].object),delete De[Re];delete N[Ne]}delete d[A]}}function $(A){if(d[A.id]===void 0)return;const N=d[A.id];for(const Ne in N){const De=N[Ne];for(const Re in De)j(De[Re].object),delete De[Re];delete N[Ne]}delete d[A.id]}function te(A){for(const N in d){const Ne=d[N];if(Ne[A.id]===void 0)continue;const De=Ne[A.id];for(const Re in De)j(De[Re].object),delete De[Re];delete Ne[A.id]}}function Se(){y(),w=!0,m!==_&&(m=_,H(m.object))}function y(){_.geometry=null,_.program=null,_.wireframe=!1}return{setup:M,reset:Se,resetDefaultState:y,dispose:fe,releaseStatesOfGeometry:$,releaseStatesOfProgram:te,initAttributes:Z,enableAttribute:E,disableUnusedAttributes:re}}function le(e,o,r){let d;function _(H){d=H}function m(H,j){e.drawArrays(d,H,j),r.update(j,d,1)}function w(H,j,O){O!==0&&(e.drawArraysInstanced(d,H,j,O),r.update(j,d,O))}function M(H,j,O){if(O===0)return;o.get("WEBGL_multi_draw").multiDrawArraysWEBGL(d,H,0,j,0,O);let V=0;for(let pe=0;pe<O;pe++)V+=j[pe];r.update(V,d,1)}function K(H,j,O,G){if(O===0)return;const V=o.get("WEBGL_multi_draw");if(V===null)for(let pe=0;pe<H.length;pe++)w(H[pe],j[pe],G[pe]);else{V.multiDrawArraysInstancedWEBGL(d,H,0,j,0,G,0,O);let pe=0;for(let Z=0;Z<O;Z++)pe+=j[Z]*G[Z];r.update(pe,d,1)}}this.setMode=_,this.render=m,this.renderInstances=w,this.renderMultiDraw=M,this.renderMultiDrawInstances=K}function _e(e,o,r,d){let _;function m(){if(_!==void 0)return _;if(o.has("EXT_texture_filter_anisotropic")===!0){const te=o.get("EXT_texture_filter_anisotropic");_=e.getParameter(te.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else _=0;return _}function w(te){return!(te!==n.GWd&&d.convert(te)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function M(te){const Se=te===n.ix0&&(o.has("EXT_color_buffer_half_float")||o.has("EXT_color_buffer_float"));return!(te!==n.OUM&&d.convert(te)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&te!==n.RQf&&!Se)}function K(te){if(te==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";te="mediump"}return te==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let H=r.precision!==void 0?r.precision:"highp";const j=K(H);j!==H&&(console.warn("THREE.WebGLRenderer:",H,"not supported, using",j,"instead."),H=j);const O=r.logarithmicDepthBuffer===!0,G=r.reversedDepthBuffer===!0&&o.has("EXT_clip_control"),V=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),pe=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),Z=e.getParameter(e.MAX_TEXTURE_SIZE),E=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),re=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),W=e.getParameter(e.MAX_VARYING_VECTORS),L=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),fe=pe>0,$=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:m,getMaxPrecision:K,textureFormatReadable:w,textureTypeReadable:M,precision:H,logarithmicDepthBuffer:O,reversedDepthBuffer:G,maxTextures:V,maxVertexTextures:pe,maxTextureSize:Z,maxCubemapSize:E,maxAttributes:p,maxVertexUniforms:re,maxVaryings:W,maxFragmentUniforms:L,vertexTextures:fe,maxSamples:$}}function q(e){const o=this;let r=null,d=0,_=!1,m=!1;const w=new n.Zcv,M=new n.dwI,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(O,G){const V=O.length!==0||G||d!==0||_;return _=G,d=O.length,V},this.beginShadows=function(){m=!0,j(null)},this.endShadows=function(){m=!1},this.setGlobalState=function(O,G){r=j(O,G,0)},this.setState=function(O,G,V){const pe=O.clippingPlanes,Z=O.clipIntersection,E=O.clipShadows,p=e.get(O);if(!_||pe===null||pe.length===0||m&&!E)m?j(null):H();else{const re=m?0:d,W=re*4;let L=p.clippingState||null;K.value=L,L=j(pe,G,W,V);for(let fe=0;fe!==W;++fe)L[fe]=r[fe];p.clippingState=L,this.numIntersection=Z?this.numPlanes:0,this.numPlanes+=re}};function H(){K.value!==r&&(K.value=r,K.needsUpdate=d>0),o.numPlanes=d,o.numIntersection=0}function j(O,G,V,pe){const Z=O!==null?O.length:0;let E=null;if(Z!==0){if(E=K.value,pe!==!0||E===null){const p=V+Z*4,re=G.matrixWorldInverse;M.getNormalMatrix(re),(E===null||E.length<p)&&(E=new Float32Array(p));for(let W=0,L=V;W!==Z;++W,L+=4)w.copy(O[W]).applyMatrix4(re,M),w.normal.toArray(E,L),E[L+3]=w.constant}K.value=E,K.needsUpdate=!0}return o.numPlanes=Z,o.numIntersection=0,E}}function ue(e){let o=new WeakMap;function r(w,M){return M===n.wfO?w.mapping=n.hy7:M===n.uV5&&(w.mapping=n.xFO),w}function d(w){if(w&&w.isTexture){const M=w.mapping;if(M===n.wfO||M===n.uV5)if(o.has(w)){const K=o.get(w).texture;return r(K,w.mapping)}else{const K=w.image;if(K&&K.height>0){const H=new n.o6l(K.height);return H.fromEquirectangularTexture(e,w),o.set(w,H),w.addEventListener("dispose",_),r(H.texture,w.mapping)}else return null}}return w}function _(w){const M=w.target;M.removeEventListener("dispose",_);const K=o.get(M);K!==void 0&&(o.delete(M),K.dispose())}function m(){o=new WeakMap}return{get:d,dispose:m}}const we=4,xe=/^(108|600)8$/.test(Qt.j)?[.125,.215,.35,.446,.526,.582]:null,je=20,z=new n.qUd,Ae=new n.Q1f;let ae=null,Ge=0,Le=0,sn=!1;const dn=(1+Math.sqrt(5))/2,Ce=1/dn,Me=[new n.Pq0(-dn,Ce,0),new n.Pq0(dn,Ce,0),new n.Pq0(-Ce,0,dn),new n.Pq0(Ce,0,dn),new n.Pq0(0,dn,-Ce),new n.Pq0(0,dn,Ce),new n.Pq0(-1,1,-1),new n.Pq0(1,1,-1),new n.Pq0(-1,1,1),new n.Pq0(1,1,1)],I=new n.Pq0;class Q{constructor(o){this._renderer=o,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(o,r=0,d=.1,_=100,m={}){const{size:w=256,position:M=I}=m;ae=this._renderer.getRenderTarget(),Ge=this._renderer.getActiveCubeFace(),Le=this._renderer.getActiveMipmapLevel(),sn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(w);const K=this._allocateTargets();return K.depthBuffer=!0,this._sceneToCubeUV(o,d,_,K,M),r>0&&this._blur(K,0,0,r),this._applyPMREM(K),this._cleanup(K),K}fromEquirectangular(o,r=null){return this._fromTexture(o,r)}fromCubemap(o,r=null){return this._fromTexture(o,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pe(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ge(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(o){this._lodMax=Math.floor(Math.log2(o)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let o=0;o<this._lodPlanes.length;o++)this._lodPlanes[o].dispose()}_cleanup(o){this._renderer.setRenderTarget(ae,Ge,Le),this._renderer.xr.enabled=sn,o.scissorTest=!1,ne(o,0,0,o.width,o.height)}_fromTexture(o,r){o.mapping===n.hy7||o.mapping===n.xFO?this._setSize(o.image.length===0?16:o.image[0].width||o.image[0].image.width):this._setSize(o.image.width/4),ae=this._renderer.getRenderTarget(),Ge=this._renderer.getActiveCubeFace(),Le=this._renderer.getActiveMipmapLevel(),sn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const d=r||this._allocateTargets();return this._textureToCubeUV(o,d),this._applyPMREM(d),this._cleanup(d),d}_allocateTargets(){const o=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,d={magFilter:n.k6q,minFilter:n.k6q,generateMipmaps:!1,type:n.ix0,format:n.GWd,colorSpace:n.Zr2,depthBuffer:!1},_=he(o,r,d);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==o||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=he(o,r,d);const{_lodMax:m}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oe(m)),this._blurMaterial=Ie(m,o,r)}return _}_compileMaterial(o){const r=new n.eaF(this._lodPlanes[0],o);this._renderer.compile(r,z)}_sceneToCubeUV(o,r,d,_,m){const K=new n.ubm(90,1,r,d),H=[1,-1,1,1,1,1],j=[1,1,1,-1,-1,-1],O=this._renderer,G=O.autoClear,V=O.toneMapping;O.getClearColor(Ae),O.toneMapping=n.y_p,O.autoClear=!1,O.state.buffers.depth.getReversed()&&(O.setRenderTarget(_),O.clearDepth(),O.setRenderTarget(null));const Z=new n.V9B({name:"PMREM.Background",side:n.hsX,depthWrite:!1,depthTest:!1}),E=new n.eaF(new n.iNn,Z);let p=!1;const re=o.background;re?re.isColor&&(Z.color.copy(re),o.background=null,p=!0):(Z.color.copy(Ae),p=!0);for(let W=0;W<6;W++){const L=W%3;L===0?(K.up.set(0,H[W],0),K.position.set(m.x,m.y,m.z),K.lookAt(m.x+j[W],m.y,m.z)):L===1?(K.up.set(0,0,H[W]),K.position.set(m.x,m.y,m.z),K.lookAt(m.x,m.y+j[W],m.z)):(K.up.set(0,H[W],0),K.position.set(m.x,m.y,m.z),K.lookAt(m.x,m.y,m.z+j[W]));const fe=this._cubeSize;ne(_,L*fe,W>2?fe:0,fe,fe),O.setRenderTarget(_),p&&O.render(E,K),O.render(o,K)}E.geometry.dispose(),E.material.dispose(),O.toneMapping=V,O.autoClear=G,o.background=re}_textureToCubeUV(o,r){const d=this._renderer,_=o.mapping===n.hy7||o.mapping===n.xFO;_?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pe()),this._cubemapMaterial.uniforms.flipEnvMap.value=o.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ge());const m=_?this._cubemapMaterial:this._equirectMaterial,w=new n.eaF(this._lodPlanes[0],m),M=m.uniforms;M.envMap.value=o;const K=this._cubeSize;ne(r,0,0,3*K,2*K),d.setRenderTarget(r),d.render(w,z)}_applyPMREM(o){const r=this._renderer,d=r.autoClear;r.autoClear=!1;const _=this._lodPlanes.length;for(let m=1;m<_;m++){const w=Math.sqrt(this._sigmas[m]*this._sigmas[m]-this._sigmas[m-1]*this._sigmas[m-1]),M=Me[(_-m-1)%Me.length];this._blur(o,m-1,m,w,M)}r.autoClear=d}_blur(o,r,d,_,m){const w=this._pingPongRenderTarget;this._halfBlur(o,w,r,d,_,"latitudinal",m),this._halfBlur(w,o,d,d,_,"longitudinal",m)}_halfBlur(o,r,d,_,m,w,M){const K=this._renderer,H=this._blurMaterial;w!=="latitudinal"&&w!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const j=3,O=new n.eaF(this._lodPlanes[_],H),G=H.uniforms,V=this._sizeLods[d]-1,pe=isFinite(m)?Math.PI/(2*V):2*Math.PI/(2*je-1),Z=m/pe,E=isFinite(m)?1+Math.floor(j*Z):je;E>je&&console.warn(`sigmaRadians, ${m}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${je}`);const p=[];let re=0;for(let te=0;te<je;++te){const Se=te/Z,y=Math.exp(-Se*Se/2);p.push(y),te===0?re+=y:te<E&&(re+=2*y)}for(let te=0;te<p.length;te++)p[te]=p[te]/re;G.envMap.value=o.texture,G.samples.value=E,G.weights.value=p,G.latitudinal.value=w==="latitudinal",M&&(G.poleAxis.value=M);const{_lodMax:W}=this;G.dTheta.value=pe,G.mipInt.value=W-d;const L=this._sizeLods[_],fe=3*L*(_>W-we?_-W+we:0),$=4*(this._cubeSize-L);ne(r,fe,$,3*L,2*L),K.setRenderTarget(r),K.render(O,z)}}function oe(e){const o=[],r=[],d=[];let _=e;const m=e-we+1+xe.length;for(let w=0;w<m;w++){const M=Math.pow(2,_);r.push(M);let K=1/M;w>e-we?K=xe[w-e+we-1]:w===0&&(K=0),d.push(K);const H=1/(M-2),j=-H,O=1+H,G=[j,j,O,j,O,O,j,j,O,O,j,O],V=6,pe=6,Z=3,E=2,p=1,re=new Float32Array(Z*pe*V),W=new Float32Array(E*pe*V),L=new Float32Array(p*pe*V);for(let $=0;$<V;$++){const te=$%3*2/3-1,Se=$>2?0:-1,y=[te,Se,0,te+2/3,Se,0,te+2/3,Se+1,0,te,Se,0,te+2/3,Se+1,0,te,Se+1,0];re.set(y,Z*pe*$),W.set(G,E*pe*$);const A=[$,$,$,$,$,$];L.set(A,p*pe*$)}const fe=new n.LoY;fe.setAttribute("position",new n.THS(re,Z)),fe.setAttribute("uv",new n.THS(W,E)),fe.setAttribute("faceIndex",new n.THS(L,p)),o.push(fe),_>we&&_--}return{lodPlanes:o,sizeLods:r,sigmas:d}}function he(e,o,r){const d=new n.nWS(e,o,r);return d.texture.mapping=n.Om,d.texture.name="PMREM.cubeUv",d.scissorTest=!0,d}function ne(e,o,r,d,_){e.viewport.set(o,r,d,_),e.scissor.set(o,r,d,_)}function Ie(e,o,r){const d=new Float32Array(je),_=new n.Pq0(0,1,0);return new n.BKk({name:"SphericalGaussianBlur",defines:{n:je,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:d},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:_}},vertexShader:en(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:n.XIg,depthTest:!1,depthWrite:!1})}function ge(){return new n.BKk({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:en(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:n.XIg,depthTest:!1,depthWrite:!1})}function Pe(){return new n.BKk({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:en(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:n.XIg,depthTest:!1,depthWrite:!1})}function en(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vn(e){let o=new WeakMap,r=null;function d(M){if(M&&M.isTexture){const K=M.mapping,H=K===n.wfO||K===n.uV5,j=K===n.hy7||K===n.xFO;if(H||j){let O=o.get(M);const G=O!==void 0?O.texture.pmremVersion:0;if(M.isRenderTargetTexture&&M.pmremVersion!==G)return r===null&&(r=new Q(e)),O=H?r.fromEquirectangular(M,O):r.fromCubemap(M,O),O.texture.pmremVersion=M.pmremVersion,o.set(M,O),O.texture;if(O!==void 0)return O.texture;{const V=M.image;return H&&V&&V.height>0||j&&V&&_(V)?(r===null&&(r=new Q(e)),O=H?r.fromEquirectangular(M):r.fromCubemap(M),O.texture.pmremVersion=M.pmremVersion,o.set(M,O),M.addEventListener("dispose",m),O.texture):null}}}return M}function _(M){let K=0;const H=6;for(let j=0;j<H;j++)M[j]!==void 0&&K++;return K===H}function m(M){const K=M.target;K.removeEventListener("dispose",m);const H=o.get(K);H!==void 0&&(o.delete(K),H.dispose())}function w(){o=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:d,dispose:w}}function Xe(e){const o={};function r(d){if(o[d]!==void 0)return o[d];let _;switch(d){case"WEBGL_depth_texture":_=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":_=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":_=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":_=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:_=e.getExtension(d)}return o[d]=_,_}return{has:function(d){return r(d)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(d){const _=r(d);return _===null&&(0,n.mcG)("THREE.WebGLRenderer: "+d+" extension not supported."),_}}}function Fe(e,o,r,d){const _={},m=new WeakMap;function w(O){const G=O.target;G.index!==null&&o.remove(G.index);for(const pe in G.attributes)o.remove(G.attributes[pe]);G.removeEventListener("dispose",w),delete _[G.id];const V=m.get(G);V&&(o.remove(V),m.delete(G)),d.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0&&delete G._maxInstanceCount,r.memory.geometries--}function M(O,G){return _[G.id]===!0||(G.addEventListener("dispose",w),_[G.id]=!0,r.memory.geometries++),G}function K(O){const G=O.attributes;for(const V in G)o.update(G[V],e.ARRAY_BUFFER)}function H(O){const G=[],V=O.index,pe=O.attributes.position;let Z=0;if(V!==null){const re=V.array;Z=V.version;for(let W=0,L=re.length;W<L;W+=3){const fe=re[W+0],$=re[W+1],te=re[W+2];G.push(fe,$,$,te,te,fe)}}else if(pe!==void 0){const re=pe.array;Z=pe.version;for(let W=0,L=re.length/3-1;W<L;W+=3){const fe=W+0,$=W+1,te=W+2;G.push(fe,$,$,te,te,fe)}}else return;const E=new((0,n.AQS)(G)?n.MW4:n.A$4)(G,1);E.version=Z;const p=m.get(O);p&&o.remove(p),m.set(O,E)}function j(O){const G=m.get(O);if(G){const V=O.index;V!==null&&G.version<V.version&&H(O)}else H(O);return m.get(O)}return{get:M,update:K,getWireframeAttribute:j}}function Yn(e,o,r){let d;function _(G){d=G}let m,w;function M(G){m=G.type,w=G.bytesPerElement}function K(G,V){e.drawElements(d,V,m,G*w),r.update(V,d,1)}function H(G,V,pe){pe!==0&&(e.drawElementsInstanced(d,V,m,G*w,pe),r.update(V,d,pe))}function j(G,V,pe){if(pe===0)return;o.get("WEBGL_multi_draw").multiDrawElementsWEBGL(d,V,0,m,G,0,pe);let E=0;for(let p=0;p<pe;p++)E+=V[p];r.update(E,d,1)}function O(G,V,pe,Z){if(pe===0)return;const E=o.get("WEBGL_multi_draw");if(E===null)for(let p=0;p<G.length;p++)H(G[p]/w,V[p],Z[p]);else{E.multiDrawElementsInstancedWEBGL(d,V,0,m,G,0,Z,0,pe);let p=0;for(let re=0;re<pe;re++)p+=V[re]*Z[re];r.update(p,d,1)}}this.setMode=_,this.setIndex=M,this.render=K,this.renderInstances=H,this.renderMultiDraw=j,this.renderMultiDrawInstances=O}function Dn(e){const o={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function d(m,w,M){switch(r.calls++,w){case e.TRIANGLES:r.triangles+=M*(m/3);break;case e.LINES:r.lines+=M*(m/2);break;case e.LINE_STRIP:r.lines+=M*(m-1);break;case e.LINE_LOOP:r.lines+=M*m;break;case e.POINTS:r.points+=M*m;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",w);break}}function _(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:o,render:r,programs:null,autoReset:!0,reset:_,update:d}}function ln(e,o,r){const d=new WeakMap,_=new n.IUQ;function m(w,M,K){const H=w.morphTargetInfluences,j=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,O=j!==void 0?j.length:0;let G=d.get(M);if(G===void 0||G.count!==O){let V=function(){Se.dispose(),d.delete(M),M.removeEventListener("dispose",V)};G!==void 0&&G.texture.dispose();const pe=M.morphAttributes.position!==void 0,Z=M.morphAttributes.normal!==void 0,E=M.morphAttributes.color!==void 0,p=M.morphAttributes.position||[],re=M.morphAttributes.normal||[],W=M.morphAttributes.color||[];let L=0;pe===!0&&(L=1),Z===!0&&(L=2),E===!0&&(L=3);let fe=M.attributes.position.count*L,$=1;fe>o.maxTextureSize&&($=Math.ceil(fe/o.maxTextureSize),fe=o.maxTextureSize);const te=new Float32Array(fe*$*4*O),Se=new n.rFo(te,fe,$,O);Se.type=n.RQf,Se.needsUpdate=!0;const y=L*4;for(let A=0;A<O;A++){const N=p[A],Ne=re[A],De=W[A],Re=fe*$*4*A;for(let ze=0;ze<N.count;ze++){const Ue=ze*y;pe===!0&&(_.fromBufferAttribute(N,ze),te[Re+Ue+0]=_.x,te[Re+Ue+1]=_.y,te[Re+Ue+2]=_.z,te[Re+Ue+3]=0),Z===!0&&(_.fromBufferAttribute(Ne,ze),te[Re+Ue+4]=_.x,te[Re+Ue+5]=_.y,te[Re+Ue+6]=_.z,te[Re+Ue+7]=0),E===!0&&(_.fromBufferAttribute(De,ze),te[Re+Ue+8]=_.x,te[Re+Ue+9]=_.y,te[Re+Ue+10]=_.z,te[Re+Ue+11]=De.itemSize===4?_.w:1)}}G={count:O,texture:Se,size:new n.I9Y(fe,$)},d.set(M,G),M.addEventListener("dispose",V)}if(w.isInstancedMesh===!0&&w.morphTexture!==null)K.getUniforms().setValue(e,"morphTexture",w.morphTexture,r);else{let V=0;for(let Z=0;Z<H.length;Z++)V+=H[Z];const pe=M.morphTargetsRelative?1:1-V;K.getUniforms().setValue(e,"morphTargetBaseInfluence",pe),K.getUniforms().setValue(e,"morphTargetInfluences",H)}K.getUniforms().setValue(e,"morphTargetsTexture",G.texture,r),K.getUniforms().setValue(e,"morphTargetsTextureSize",G.size)}return{update:m}}function Sn(e,o,r,d){let _=new WeakMap;function m(K){const H=d.render.frame,j=K.geometry,O=o.get(K,j);if(_.get(O)!==H&&(o.update(O),_.set(O,H)),K.isInstancedMesh&&(K.hasEventListener("dispose",M)===!1&&K.addEventListener("dispose",M),_.get(K)!==H&&(r.update(K.instanceMatrix,e.ARRAY_BUFFER),K.instanceColor!==null&&r.update(K.instanceColor,e.ARRAY_BUFFER),_.set(K,H))),K.isSkinnedMesh){const G=K.skeleton;_.get(G)!==H&&(G.update(),_.set(G,H))}return O}function w(){_=new WeakMap}function M(K){const H=K.target;H.removeEventListener("dispose",M),r.remove(H.instanceMatrix),H.instanceColor!==null&&r.remove(H.instanceColor)}return{update:m,dispose:w}}const bn=new n.gPd,We=new n.VCu(1,1),_n=new n.rFo,pn=new n.dYF,ye=new n.b4q,Vn=/^(108|600)8$/.test(Qt.j)?[]:null,on=/^(108|600)8$/.test(Qt.j)?[]:null,En=new Float32Array(16),tn=new Float32Array(9),et=new Float32Array(4);function fn(e,o,r){const d=e[0];if(d<=0||d>0)return e;const _=o*r;let m=Vn[_];if(m===void 0&&(m=new Float32Array(_),Vn[_]=m),o!==0){d.toArray(m,0);for(let w=1,M=0;w!==o;++w)M+=r,e[w].toArray(m,M)}return m}function Ze(e,o){if(e.length!==o.length)return!1;for(let r=0,d=e.length;r<d;r++)if(e[r]!==o[r])return!1;return!0}function an(e,o){for(let r=0,d=o.length;r<d;r++)e[r]=o[r]}function Hn(e,o){let r=on[o];r===void 0&&(r=new Int32Array(o),on[o]=r);for(let d=0;d!==o;++d)r[d]=e.allocateTextureUnit();return r}function lt(e,o){const r=this.cache;r[0]!==o&&(e.uniform1f(this.addr,o),r[0]=o)}function gt(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y)&&(e.uniform2f(this.addr,o.x,o.y),r[0]=o.x,r[1]=o.y);else{if(Ze(r,o))return;e.uniform2fv(this.addr,o),an(r,o)}}function qn(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y||r[2]!==o.z)&&(e.uniform3f(this.addr,o.x,o.y,o.z),r[0]=o.x,r[1]=o.y,r[2]=o.z);else if(o.r!==void 0)(r[0]!==o.r||r[1]!==o.g||r[2]!==o.b)&&(e.uniform3f(this.addr,o.r,o.g,o.b),r[0]=o.r,r[1]=o.g,r[2]=o.b);else{if(Ze(r,o))return;e.uniform3fv(this.addr,o),an(r,o)}}function Qn(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y||r[2]!==o.z||r[3]!==o.w)&&(e.uniform4f(this.addr,o.x,o.y,o.z,o.w),r[0]=o.x,r[1]=o.y,r[2]=o.z,r[3]=o.w);else{if(Ze(r,o))return;e.uniform4fv(this.addr,o),an(r,o)}}function Un(e,o){const r=this.cache,d=o.elements;if(d===void 0){if(Ze(r,o))return;e.uniformMatrix2fv(this.addr,!1,o),an(r,o)}else{if(Ze(r,d))return;et.set(d),e.uniformMatrix2fv(this.addr,!1,et),an(r,d)}}function ut(e,o){const r=this.cache,d=o.elements;if(d===void 0){if(Ze(r,o))return;e.uniformMatrix3fv(this.addr,!1,o),an(r,o)}else{if(Ze(r,d))return;tn.set(d),e.uniformMatrix3fv(this.addr,!1,tn),an(r,d)}}function pt(e,o){const r=this.cache,d=o.elements;if(d===void 0){if(Ze(r,o))return;e.uniformMatrix4fv(this.addr,!1,o),an(r,o)}else{if(Ze(r,d))return;En.set(d),e.uniformMatrix4fv(this.addr,!1,En),an(r,d)}}function Nt(e,o){const r=this.cache;r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o)}function ct(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y)&&(e.uniform2i(this.addr,o.x,o.y),r[0]=o.x,r[1]=o.y);else{if(Ze(r,o))return;e.uniform2iv(this.addr,o),an(r,o)}}function Bn(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y||r[2]!==o.z)&&(e.uniform3i(this.addr,o.x,o.y,o.z),r[0]=o.x,r[1]=o.y,r[2]=o.z);else{if(Ze(r,o))return;e.uniform3iv(this.addr,o),an(r,o)}}function rt(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y||r[2]!==o.z||r[3]!==o.w)&&(e.uniform4i(this.addr,o.x,o.y,o.z,o.w),r[0]=o.x,r[1]=o.y,r[2]=o.z,r[3]=o.w);else{if(Ze(r,o))return;e.uniform4iv(this.addr,o),an(r,o)}}function ei(e,o){const r=this.cache;r[0]!==o&&(e.uniform1ui(this.addr,o),r[0]=o)}function ot(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y)&&(e.uniform2ui(this.addr,o.x,o.y),r[0]=o.x,r[1]=o.y);else{if(Ze(r,o))return;e.uniform2uiv(this.addr,o),an(r,o)}}function Jn(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y||r[2]!==o.z)&&(e.uniform3ui(this.addr,o.x,o.y,o.z),r[0]=o.x,r[1]=o.y,r[2]=o.z);else{if(Ze(r,o))return;e.uniform3uiv(this.addr,o),an(r,o)}}function At(e,o){const r=this.cache;if(o.x!==void 0)(r[0]!==o.x||r[1]!==o.y||r[2]!==o.z||r[3]!==o.w)&&(e.uniform4ui(this.addr,o.x,o.y,o.z,o.w),r[0]=o.x,r[1]=o.y,r[2]=o.z,r[3]=o.w);else{if(Ze(r,o))return;e.uniform4uiv(this.addr,o),an(r,o)}}function ht(e,o,r){const d=this.cache,_=r.allocateTextureUnit();d[0]!==_&&(e.uniform1i(this.addr,_),d[0]=_);let m;this.type===e.SAMPLER_2D_SHADOW?(We.compareFunction=n.TiK,m=We):m=bn,r.setTexture2D(o||m,_)}function Wn(e,o,r){const d=this.cache,_=r.allocateTextureUnit();d[0]!==_&&(e.uniform1i(this.addr,_),d[0]=_),r.setTexture3D(o||pn,_)}function mt(e,o,r){const d=this.cache,_=r.allocateTextureUnit();d[0]!==_&&(e.uniform1i(this.addr,_),d[0]=_),r.setTextureCube(o||ye,_)}function Dt(e,o,r){const d=this.cache,_=r.allocateTextureUnit();d[0]!==_&&(e.uniform1i(this.addr,_),d[0]=_),r.setTexture2DArray(o||_n,_)}function Pt(e){switch(e){case 5126:return lt;case 35664:return gt;case 35665:return qn;case 35666:return Qn;case 35674:return Un;case 35675:return ut;case 35676:return pt;case 5124:case 35670:return Nt;case 35667:case 35671:return ct;case 35668:case 35672:return Bn;case 35669:case 35673:return rt;case 5125:return ei;case 36294:return ot;case 36295:return Jn;case 36296:return At;case 35678:case 36198:case 36298:case 36306:case 35682:return ht;case 35679:case 36299:case 36307:return Wn;case 35680:case 36300:case 36308:case 36293:return mt;case 36289:case 36303:case 36311:case 36292:return Dt}}function bt(e,o){e.uniform1fv(this.addr,o)}function Vt(e,o){const r=fn(o,this.size,2);e.uniform2fv(this.addr,r)}function ni(e,o){const r=fn(o,this.size,3);e.uniform3fv(this.addr,r)}function Zt(e,o){const r=fn(o,this.size,4);e.uniform4fv(this.addr,r)}function ti(e,o){const r=fn(o,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function ci(e,o){const r=fn(o,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function jt(e,o){const r=fn(o,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function It(e,o){e.uniform1iv(this.addr,o)}function fi(e,o){e.uniform2iv(this.addr,o)}function _a(e,o){e.uniform3iv(this.addr,o)}function mr(e,o){e.uniform4iv(this.addr,o)}function Oo(e,o){e.uniform1uiv(this.addr,o)}function ga(e,o){e.uniform2uiv(this.addr,o)}function qi(e,o){e.uniform3uiv(this.addr,o)}function vr(e,o){e.uniform4uiv(this.addr,o)}function Bo(e,o,r){const d=this.cache,_=o.length,m=Hn(r,_);Ze(d,m)||(e.uniform1iv(this.addr,m),an(d,m));for(let w=0;w!==_;++w)r.setTexture2D(o[w]||bn,m[w])}function Sa(e,o,r){const d=this.cache,_=o.length,m=Hn(r,_);Ze(d,m)||(e.uniform1iv(this.addr,m),an(d,m));for(let w=0;w!==_;++w)r.setTexture3D(o[w]||pn,m[w])}function Qi(e,o,r){const d=this.cache,_=o.length,m=Hn(r,_);Ze(d,m)||(e.uniform1iv(this.addr,m),an(d,m));for(let w=0;w!==_;++w)r.setTextureCube(o[w]||ye,m[w])}function _r(e,o,r){const d=this.cache,_=o.length,m=Hn(r,_);Ze(d,m)||(e.uniform1iv(this.addr,m),an(d,m));for(let w=0;w!==_;++w)r.setTexture2DArray(o[w]||_n,m[w])}function gr(e){switch(e){case 5126:return bt;case 35664:return Vt;case 35665:return ni;case 35666:return Zt;case 35674:return ti;case 35675:return ci;case 35676:return jt;case 5124:case 35670:return It;case 35667:case 35671:return fi;case 35668:case 35672:return _a;case 35669:case 35673:return mr;case 5125:return Oo;case 36294:return ga;case 36295:return qi;case 36296:return vr;case 35678:case 36198:case 36298:case 36306:case 35682:return Bo;case 35679:case 36299:case 36307:return Sa;case 35680:case 36300:case 36308:case 36293:return Qi;case 36289:case 36303:case 36311:case 36292:return _r}}class Mn{constructor(o,r,d){this.id=o,this.addr=d,this.cache=[],this.type=r.type,this.setValue=Pt(r.type)}}class Ui{constructor(o,r,d){this.id=o,this.addr=d,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=gr(r.type)}}class Go{constructor(o){this.id=o,this.seq=[],this.map={}}setValue(o,r,d){const _=this.seq;for(let m=0,w=_.length;m!==w;++m){const M=_[m];M.setValue(o,r[M.id],d)}}}const ii=/(\w+)(\])?(\[|\.)?/g;function yi(e,o){e.seq.push(o),e.map[o.id]=o}function Ea(e,o,r){const d=e.name,_=d.length;for(ii.lastIndex=0;;){const m=ii.exec(d),w=ii.lastIndex;let M=m[1];const K=m[2]==="]",H=m[3];if(K&&(M=M|0),H===void 0||H==="["&&w+2===_){yi(r,H===void 0?new Mn(M,e,o):new Ui(M,e,o));break}else{let O=r.map[M];O===void 0&&(O=new Go(M),yi(r,O)),r=O}}}class mi{constructor(o,r){this.seq=[],this.map={};const d=o.getProgramParameter(r,o.ACTIVE_UNIFORMS);for(let _=0;_<d;++_){const m=o.getActiveUniform(r,_),w=o.getUniformLocation(r,m.name);Ea(m,w,this)}}setValue(o,r,d,_){const m=this.map[r];m!==void 0&&m.setValue(o,d,_)}setOptional(o,r,d){const _=r[d];_!==void 0&&this.setValue(o,d,_)}static upload(o,r,d,_){for(let m=0,w=r.length;m!==w;++m){const M=r[m],K=d[M.id];K.needsUpdate!==!1&&M.setValue(o,K.value,_)}}static seqWithValue(o,r){const d=[];for(let _=0,m=o.length;_!==m;++_){const w=o[_];w.id in r&&d.push(w)}return d}}function wi(e,o,r){const d=e.createShader(o);return e.shaderSource(d,r),e.compileShader(d),d}const Zi=37297;let Ta=0;function ji(e,o){const r=e.split(`
`),d=[],_=Math.max(o-6,0),m=Math.min(o+6,r.length);for(let w=_;w<m;w++){const M=w+1;d.push(`${M===o?">":" "} ${M}: ${r[w]}`)}return d.join(`
`)}const Sr=new n.dwI;function Er(e){n.ppV._getMatrix(Sr,n.ppV.workingColorSpace,e);const o=`mat3( ${Sr.elements.map(r=>r.toFixed(4))} )`;switch(n.ppV.getTransfer(e)){case n.VxR:return[o,"LinearTransferOETF"];case n.KLL:return[o,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[o,"LinearTransferOETF"]}}function Tr(e,o,r){const d=e.getShaderParameter(o,e.COMPILE_STATUS),m=(e.getShaderInfoLog(o)||"").trim();if(d&&m==="")return"";const w=/ERROR: 0:(\d+)/.exec(m);if(w){const M=parseInt(w[1]);return r.toUpperCase()+`

`+m+`

`+ji(e.getShaderSource(o),M)}else return m}function Pi(e,o){const r=Er(o);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function Mr(e,o){let r;switch(o){case n.kyO:r="Linear";break;case n.Mjd:r="Reinhard";break;case n.nNL:r="Cineon";break;case n.FV:r="ACESFilmic";break;case n.LAk:r="AgX";break;case n.aJ8:r="Neutral";break;case n.g7M:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",o),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const Jt=new n.Pq0;function xr(){n.ppV.getLuminanceCoefficients(Jt);const e=Jt.x.toFixed(4),o=Jt.y.toFixed(4),r=Jt.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${o}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ar(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function Rr(e){const o=[];for(const r in e){const d=e[r];d!==!1&&o.push("#define "+r+" "+d)}return o.join(`
`)}function Yt(e,o){const r={},d=e.getProgramParameter(o,e.ACTIVE_ATTRIBUTES);for(let _=0;_<d;_++){const m=e.getActiveAttrib(o,_),w=m.name;let M=1;m.type===e.FLOAT_MAT2&&(M=2),m.type===e.FLOAT_MAT3&&(M=3),m.type===e.FLOAT_MAT4&&(M=4),r[w]={type:m.type,location:e.getAttribLocation(o,w),locationSize:M}}return r}function Li(e){return e!==""}function Di(e,o){const r=o.numSpotLightShadows+o.numSpotLightMaps-o.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,o.numDirLights).replace(/NUM_SPOT_LIGHTS/g,o.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,o.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,o.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,o.numPointLights).replace(/NUM_HEMI_LIGHTS/g,o.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,o.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,o.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,o.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,o.numPointLightShadows)}function vi(e,o){return e.replace(/NUM_CLIPPING_PLANES/g,o.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,o.numClippingPlanes-o.numClipIntersection)}const Ma=/^[ \t]*#include +<([\w\d./]+)>/gm;function _i(e){return e.replace(Ma,br)}const Ji=new Map;function br(e,o){let r=S[o];if(r===void 0){const d=Ji.get(o);if(d!==void 0)r=S[d],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',o,d);else throw new Error("Can not resolve #include <"+o+">")}return _i(r)}const xa=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cr(e){return e.replace(xa,Ur)}function Ur(e,o,r,d){let _="";for(let m=parseInt(o);m<parseInt(r);m++)_+=d.replace(/\[\s*i\s*\]/g,"[ "+m+" ]").replace(/UNROLLED_LOOP_INDEX/g,m);return _}function gi(e){let o=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?o+=`
#define HIGH_PRECISION`:e.precision==="mediump"?o+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(o+=`
#define LOW_PRECISION`),o}function Aa(e){let o="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===n.QP0?o="SHADOWMAP_TYPE_PCF":e.shadowMapType===n.Wk7?o="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===n.RyA&&(o="SHADOWMAP_TYPE_VSM"),o}function $i(e){let o="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case n.hy7:case n.xFO:o="ENVMAP_TYPE_CUBE";break;case n.Om:o="ENVMAP_TYPE_CUBE_UV";break}return o}function Si(e){let o="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case n.xFO:o="ENVMAP_MODE_REFRACTION";break}return o}function Ei(e){let o="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case n.caT:o="ENVMAP_BLENDING_MULTIPLY";break;case n.KRh:o="ENVMAP_BLENDING_MIX";break;case n.XrR:o="ENVMAP_BLENDING_ADD";break}return o}function Ii(e){const o=e.envMapCubeUVHeight;if(o===null)return null;const r=Math.log2(o)-2,d=1/o;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:d,maxMip:r}}function Ra(e,o,r,d){const _=e.getContext(),m=r.defines;let w=r.vertexShader,M=r.fragmentShader;const K=Aa(r),H=$i(r),j=Si(r),O=Ei(r),G=Ii(r),V=Ar(r),pe=Rr(m),Z=_.createProgram();let E,p,re=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(E=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,pe].filter(Li).join(`
`),E.length>0&&(E+=`
`),p=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,pe].filter(Li).join(`
`),p.length>0&&(p+=`
`)):(E=[gi(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,pe,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+j:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+K:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),p=[gi(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,pe,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+H:"",r.envMap?"#define "+j:"",r.envMap?"#define "+O:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+K:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==n.y_p?"#define TONE_MAPPING":"",r.toneMapping!==n.y_p?S.tonemapping_pars_fragment:"",r.toneMapping!==n.y_p?Mr("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",S.colorspace_pars_fragment,Pi("linearToOutputTexel",r.outputColorSpace),xr(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Li).join(`
`)),w=_i(w),w=Di(w,r),w=vi(w,r),M=_i(M),M=Di(M,r),M=vi(M,r),w=Cr(w),M=Cr(M),r.isRawShaderMaterial!==!0&&(re=`#version 300 es
`,E=[V,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,p=["#define varying in",r.glslVersion===n.Wdf?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===n.Wdf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const W=re+E+w,L=re+p+M,fe=wi(_,_.VERTEX_SHADER,W),$=wi(_,_.FRAGMENT_SHADER,L);_.attachShader(Z,fe),_.attachShader(Z,$),r.index0AttributeName!==void 0?_.bindAttribLocation(Z,0,r.index0AttributeName):r.morphTargets===!0&&_.bindAttribLocation(Z,0,"position"),_.linkProgram(Z);function te(N){if(e.debug.checkShaderErrors){const Ne=_.getProgramInfoLog(Z)||"",De=_.getShaderInfoLog(fe)||"",Re=_.getShaderInfoLog($)||"",ze=Ne.trim(),Ue=De.trim(),Qe=Re.trim();let ve=!0,Cn=!0;if(_.getProgramParameter(Z,_.LINK_STATUS)===!1)if(ve=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(_,Z,fe,$);else{const In=Tr(_,fe,"vertex"),Zn=Tr(_,$,"fragment");console.error("THREE.WebGLProgram: Shader Error "+_.getError()+" - VALIDATE_STATUS "+_.getProgramParameter(Z,_.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ze+`
`+In+`
`+Zn)}else ze!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ze):(Ue===""||Qe==="")&&(Cn=!1);Cn&&(N.diagnostics={runnable:ve,programLog:ze,vertexShader:{log:Ue,prefix:E},fragmentShader:{log:Qe,prefix:p}})}_.deleteShader(fe),_.deleteShader($),Se=new mi(_,Z),y=Yt(_,Z)}let Se;this.getUniforms=function(){return Se===void 0&&te(this),Se};let y;this.getAttributes=function(){return y===void 0&&te(this),y};let A=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=_.getProgramParameter(Z,Zi)),A},this.destroy=function(){d.releaseStatesOfProgram(this),_.deleteProgram(Z),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Ta++,this.cacheKey=o,this.usedTimes=1,this.program=Z,this.vertexShader=fe,this.fragmentShader=$,this}let Ni=0;class yr{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(o){const r=o.vertexShader,d=o.fragmentShader,_=this._getShaderStage(r),m=this._getShaderStage(d),w=this._getShaderCacheForMaterial(o);return w.has(_)===!1&&(w.add(_),_.usedTimes++),w.has(m)===!1&&(w.add(m),m.usedTimes++),this}remove(o){const r=this.materialCache.get(o);for(const d of r)d.usedTimes--,d.usedTimes===0&&this.shaderCache.delete(d.code);return this.materialCache.delete(o),this}getVertexShaderID(o){return this._getShaderStage(o.vertexShader).id}getFragmentShaderID(o){return this._getShaderStage(o.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(o){const r=this.materialCache;let d=r.get(o);return d===void 0&&(d=new Set,r.set(o,d)),d}_getShaderStage(o){const r=this.shaderCache;let d=r.get(o);return d===void 0&&(d=new wr(o),r.set(o,d)),d}}class wr{constructor(o){this.id=Ni++,this.code=o,this.usedTimes=0}}function ba(e,o,r,d,_,m,w){const M=new n.zgK,K=new yr,H=new Set,j=[],O=_.logarithmicDepthBuffer,G=_.vertexTextures;let V=_.precision;const pe={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function Z(y){return H.add(y),y===0?"uv":`uv${y}`}function E(y,A,N,Ne,De){const Re=Ne.fog,ze=De.geometry,Ue=y.isMeshStandardMaterial?Ne.environment:null,Qe=(y.isMeshStandardMaterial?r:o).get(y.envMap||Ue),ve=Qe&&Qe.mapping===n.Om?Qe.image.height:null,Cn=pe[y.type];y.precision!==null&&(V=_.getMaxPrecision(y.precision),V!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",V,"instead."));const In=ze.morphAttributes.position||ze.morphAttributes.normal||ze.morphAttributes.color,Zn=In!==void 0?In.length:0;let tt=0;ze.morphAttributes.position!==void 0&&(tt=1),ze.morphAttributes.normal!==void 0&&(tt=2),ze.morphAttributes.color!==void 0&&(tt=3);let wt,St,Ee,Je;if(Cn){const st=F[Cn];wt=st.vertexShader,St=st.fragmentShader}else wt=y.vertexShader,St=y.fragmentShader,K.update(y),Ee=K.getVertexShaderID(y),Je=K.getFragmentShaderID(y);const Ke=e.getRenderTarget(),Nn=e.state.buffers.depth.getReversed(),Fn=De.isInstancedMesh===!0,zn=De.isBatchedMesh===!0,Ct=!!y.map,nt=!!y.matcap,P=!!Qe,vt=!!y.aoMap,Pn=!!y.lightMap,at=!!y.bumpMap,yn=!!y.normalMap,Tt=!!y.displacementMap,hn=!!y.emissiveMap,jn=!!y.metalnessMap,Lt=!!y.roughnessMap,Ut=y.anisotropy>0,b=y.clearcoat>0,h=y.dispersion>0,Y=y.iridescence>0,me=y.sheen>0,Oe=y.transmission>0,de=Ut&&!!y.anisotropyMap,Rn=b&&!!y.clearcoatMap,Ye=b&&!!y.clearcoatNormalMap,Tn=b&&!!y.clearcoatRoughnessMap,xn=Y&&!!y.iridescenceMap,He=Y&&!!y.iridescenceThicknessMap,rn=me&&!!y.sheenColorMap,Gn=me&&!!y.sheenRoughnessMap,An=!!y.specularMap,$e=!!y.specularColorMap,Kn=!!y.specularIntensityMap,D=Oe&&!!y.transmissionMap,Ve=Oe&&!!y.thicknessMap,qe=!!y.gradientMap,un=!!y.alphaMap,Be=y.alphaTest>0,be=!!y.alphaHash,gn=!!y.extensions;let Xn=n.y_p;y.toneMapped&&(Ke===null||Ke.isXRRenderTarget===!0)&&(Xn=e.toneMapping);const _t={shaderID:Cn,shaderType:y.type,shaderName:y.name,vertexShader:wt,fragmentShader:St,defines:y.defines,customVertexShaderID:Ee,customFragmentShaderID:Je,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:V,batching:zn,batchingColor:zn&&De._colorsTexture!==null,instancing:Fn,instancingColor:Fn&&De.instanceColor!==null,instancingMorph:Fn&&De.morphTexture!==null,supportsVertexTextures:G,outputColorSpace:Ke===null?e.outputColorSpace:Ke.isXRRenderTarget===!0?Ke.texture.colorSpace:n.Zr2,alphaToCoverage:!!y.alphaToCoverage,map:Ct,matcap:nt,envMap:P,envMapMode:P&&Qe.mapping,envMapCubeUVHeight:ve,aoMap:vt,lightMap:Pn,bumpMap:at,normalMap:yn,displacementMap:G&&Tt,emissiveMap:hn,normalMapObjectSpace:yn&&y.normalMapType===n.vyJ,normalMapTangentSpace:yn&&y.normalMapType===n.bI3,metalnessMap:jn,roughnessMap:Lt,anisotropy:Ut,anisotropyMap:de,clearcoat:b,clearcoatMap:Rn,clearcoatNormalMap:Ye,clearcoatRoughnessMap:Tn,dispersion:h,iridescence:Y,iridescenceMap:xn,iridescenceThicknessMap:He,sheen:me,sheenColorMap:rn,sheenRoughnessMap:Gn,specularMap:An,specularColorMap:$e,specularIntensityMap:Kn,transmission:Oe,transmissionMap:D,thicknessMap:Ve,gradientMap:qe,opaque:y.transparent===!1&&y.blending===n.NTi&&y.alphaToCoverage===!1,alphaMap:un,alphaTest:Be,alphaHash:be,combine:y.combine,mapUv:Ct&&Z(y.map.channel),aoMapUv:vt&&Z(y.aoMap.channel),lightMapUv:Pn&&Z(y.lightMap.channel),bumpMapUv:at&&Z(y.bumpMap.channel),normalMapUv:yn&&Z(y.normalMap.channel),displacementMapUv:Tt&&Z(y.displacementMap.channel),emissiveMapUv:hn&&Z(y.emissiveMap.channel),metalnessMapUv:jn&&Z(y.metalnessMap.channel),roughnessMapUv:Lt&&Z(y.roughnessMap.channel),anisotropyMapUv:de&&Z(y.anisotropyMap.channel),clearcoatMapUv:Rn&&Z(y.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&Z(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tn&&Z(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xn&&Z(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&Z(y.iridescenceThicknessMap.channel),sheenColorMapUv:rn&&Z(y.sheenColorMap.channel),sheenRoughnessMapUv:Gn&&Z(y.sheenRoughnessMap.channel),specularMapUv:An&&Z(y.specularMap.channel),specularColorMapUv:$e&&Z(y.specularColorMap.channel),specularIntensityMapUv:Kn&&Z(y.specularIntensityMap.channel),transmissionMapUv:D&&Z(y.transmissionMap.channel),thicknessMapUv:Ve&&Z(y.thicknessMap.channel),alphaMapUv:un&&Z(y.alphaMap.channel),vertexTangents:!!ze.attributes.tangent&&(yn||Ut),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ze.attributes.color&&ze.attributes.color.itemSize===4,pointsUvs:De.isPoints===!0&&!!ze.attributes.uv&&(Ct||un),fog:!!Re,useFog:y.fog===!0,fogExp2:!!Re&&Re.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:O,reversedDepthBuffer:Nn,skinning:De.isSkinnedMesh===!0,morphTargets:ze.morphAttributes.position!==void 0,morphNormals:ze.morphAttributes.normal!==void 0,morphColors:ze.morphAttributes.color!==void 0,morphTargetsCount:Zn,morphTextureStride:tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:w.numPlanes,numClipIntersection:w.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Xn,decodeVideoTexture:Ct&&y.map.isVideoTexture===!0&&n.ppV.getTransfer(y.map.colorSpace)===n.KLL,decodeVideoTextureEmissive:hn&&y.emissiveMap.isVideoTexture===!0&&n.ppV.getTransfer(y.emissiveMap.colorSpace)===n.KLL,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===n.$EB,flipSided:y.side===n.hsX,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gn&&y.extensions.clipCullDistance===!0&&d.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gn&&y.extensions.multiDraw===!0||zn)&&d.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:d.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=H.has(1),_t.vertexUv2s=H.has(2),_t.vertexUv3s=H.has(3),H.clear(),_t}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(re(A,y),W(A,y),A.push(e.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function re(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function W(y,A){M.disableAll(),A.supportsVertexTextures&&M.enable(0),A.instancing&&M.enable(1),A.instancingColor&&M.enable(2),A.instancingMorph&&M.enable(3),A.matcap&&M.enable(4),A.envMap&&M.enable(5),A.normalMapObjectSpace&&M.enable(6),A.normalMapTangentSpace&&M.enable(7),A.clearcoat&&M.enable(8),A.iridescence&&M.enable(9),A.alphaTest&&M.enable(10),A.vertexColors&&M.enable(11),A.vertexAlphas&&M.enable(12),A.vertexUv1s&&M.enable(13),A.vertexUv2s&&M.enable(14),A.vertexUv3s&&M.enable(15),A.vertexTangents&&M.enable(16),A.anisotropy&&M.enable(17),A.alphaHash&&M.enable(18),A.batching&&M.enable(19),A.dispersion&&M.enable(20),A.batchingColor&&M.enable(21),A.gradientMap&&M.enable(22),y.push(M.mask),M.disableAll(),A.fog&&M.enable(0),A.useFog&&M.enable(1),A.flatShading&&M.enable(2),A.logarithmicDepthBuffer&&M.enable(3),A.reversedDepthBuffer&&M.enable(4),A.skinning&&M.enable(5),A.morphTargets&&M.enable(6),A.morphNormals&&M.enable(7),A.morphColors&&M.enable(8),A.premultipliedAlpha&&M.enable(9),A.shadowMapEnabled&&M.enable(10),A.doubleSided&&M.enable(11),A.flipSided&&M.enable(12),A.useDepthPacking&&M.enable(13),A.dithering&&M.enable(14),A.transmission&&M.enable(15),A.sheen&&M.enable(16),A.opaque&&M.enable(17),A.pointsUvs&&M.enable(18),A.decodeVideoTexture&&M.enable(19),A.decodeVideoTextureEmissive&&M.enable(20),A.alphaToCoverage&&M.enable(21),y.push(M.mask)}function L(y){const A=pe[y.type];let N;if(A){const Ne=F[A];N=n.LlO.clone(Ne.uniforms)}else N=y.uniforms;return N}function fe(y,A){let N;for(let Ne=0,De=j.length;Ne<De;Ne++){const Re=j[Ne];if(Re.cacheKey===A){N=Re,++N.usedTimes;break}}return N===void 0&&(N=new Ra(e,A,y,m),j.push(N)),N}function $(y){if(--y.usedTimes===0){const A=j.indexOf(y);j[A]=j[j.length-1],j.pop(),y.destroy()}}function te(y){K.remove(y)}function Se(){K.dispose()}return{getParameters:E,getProgramCacheKey:p,getUniforms:L,acquireProgram:fe,releaseProgram:$,releaseShaderCache:te,programs:j,dispose:Se}}function er(){let e=new WeakMap;function o(w){return e.has(w)}function r(w){let M=e.get(w);return M===void 0&&(M={},e.set(w,M)),M}function d(w){e.delete(w)}function _(w,M,K){e.get(w)[M]=K}function m(){e=new WeakMap}return{has:o,get:r,remove:d,update:_,dispose:m}}function Pr(e,o){return e.groupOrder!==o.groupOrder?e.groupOrder-o.groupOrder:e.renderOrder!==o.renderOrder?e.renderOrder-o.renderOrder:e.material.id!==o.material.id?e.material.id-o.material.id:e.z!==o.z?e.z-o.z:e.id-o.id}function Lr(e,o){return e.groupOrder!==o.groupOrder?e.groupOrder-o.groupOrder:e.renderOrder!==o.renderOrder?e.renderOrder-o.renderOrder:e.z!==o.z?o.z-e.z:e.id-o.id}function kt(){const e=[];let o=0;const r=[],d=[],_=[];function m(){o=0,r.length=0,d.length=0,_.length=0}function w(O,G,V,pe,Z,E){let p=e[o];return p===void 0?(p={id:O.id,object:O,geometry:G,material:V,groupOrder:pe,renderOrder:O.renderOrder,z:Z,group:E},e[o]=p):(p.id=O.id,p.object=O,p.geometry=G,p.material=V,p.groupOrder=pe,p.renderOrder=O.renderOrder,p.z=Z,p.group=E),o++,p}function M(O,G,V,pe,Z,E){const p=w(O,G,V,pe,Z,E);V.transmission>0?d.push(p):V.transparent===!0?_.push(p):r.push(p)}function K(O,G,V,pe,Z,E){const p=w(O,G,V,pe,Z,E);V.transmission>0?d.unshift(p):V.transparent===!0?_.unshift(p):r.unshift(p)}function H(O,G){r.length>1&&r.sort(O||Pr),d.length>1&&d.sort(G||Lr),_.length>1&&_.sort(G||Lr)}function j(){for(let O=o,G=e.length;O<G;O++){const V=e[O];if(V.id===null)break;V.id=null,V.object=null,V.geometry=null,V.material=null,V.group=null}}return{opaque:r,transmissive:d,transparent:_,init:m,push:M,unshift:K,finish:j,sort:H}}function Dr(){let e=new WeakMap;function o(d,_){const m=e.get(d);let w;return m===void 0?(w=new kt,e.set(d,[w])):_>=m.length?(w=new kt,m.push(w)):w=m[_],w}function r(){e=new WeakMap}return{get:o,dispose:r}}function Ca(){const e={};return{get:function(o){if(e[o.id]!==void 0)return e[o.id];let r;switch(o.type){case"DirectionalLight":r={direction:new n.Pq0,color:new n.Q1f};break;case"SpotLight":r={position:new n.Pq0,direction:new n.Pq0,color:new n.Q1f,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new n.Pq0,color:new n.Q1f,distance:0,decay:0};break;case"HemisphereLight":r={direction:new n.Pq0,skyColor:new n.Q1f,groundColor:new n.Q1f};break;case"RectAreaLight":r={color:new n.Q1f,position:new n.Pq0,halfWidth:new n.Pq0,halfHeight:new n.Pq0};break}return e[o.id]=r,r}}}function Ua(){const e={};return{get:function(o){if(e[o.id]!==void 0)return e[o.id];let r;switch(o.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n.I9Y};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n.I9Y};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new n.I9Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[o.id]=r,r}}}let Ir=0;function ya(e,o){return(o.castShadow?2:0)-(e.castShadow?2:0)+(o.map?1:0)-(e.map?1:0)}function wa(e){const o=new Ca,r=Ua(),d={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)d.probe.push(new n.Pq0);const _=new n.Pq0,m=new n.kn4,w=new n.kn4;function M(H){let j=0,O=0,G=0;for(let y=0;y<9;y++)d.probe[y].set(0,0,0);let V=0,pe=0,Z=0,E=0,p=0,re=0,W=0,L=0,fe=0,$=0,te=0;H.sort(ya);for(let y=0,A=H.length;y<A;y++){const N=H[y],Ne=N.color,De=N.intensity,Re=N.distance,ze=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)j+=Ne.r*De,O+=Ne.g*De,G+=Ne.b*De;else if(N.isLightProbe){for(let Ue=0;Ue<9;Ue++)d.probe[Ue].addScaledVector(N.sh.coefficients[Ue],De);te++}else if(N.isDirectionalLight){const Ue=o.get(N);if(Ue.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Qe=N.shadow,ve=r.get(N);ve.shadowIntensity=Qe.intensity,ve.shadowBias=Qe.bias,ve.shadowNormalBias=Qe.normalBias,ve.shadowRadius=Qe.radius,ve.shadowMapSize=Qe.mapSize,d.directionalShadow[V]=ve,d.directionalShadowMap[V]=ze,d.directionalShadowMatrix[V]=N.shadow.matrix,re++}d.directional[V]=Ue,V++}else if(N.isSpotLight){const Ue=o.get(N);Ue.position.setFromMatrixPosition(N.matrixWorld),Ue.color.copy(Ne).multiplyScalar(De),Ue.distance=Re,Ue.coneCos=Math.cos(N.angle),Ue.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Ue.decay=N.decay,d.spot[Z]=Ue;const Qe=N.shadow;if(N.map&&(d.spotLightMap[fe]=N.map,fe++,Qe.updateMatrices(N),N.castShadow&&$++),d.spotLightMatrix[Z]=Qe.matrix,N.castShadow){const ve=r.get(N);ve.shadowIntensity=Qe.intensity,ve.shadowBias=Qe.bias,ve.shadowNormalBias=Qe.normalBias,ve.shadowRadius=Qe.radius,ve.shadowMapSize=Qe.mapSize,d.spotShadow[Z]=ve,d.spotShadowMap[Z]=ze,L++}Z++}else if(N.isRectAreaLight){const Ue=o.get(N);Ue.color.copy(Ne).multiplyScalar(De),Ue.halfWidth.set(N.width*.5,0,0),Ue.halfHeight.set(0,N.height*.5,0),d.rectArea[E]=Ue,E++}else if(N.isPointLight){const Ue=o.get(N);if(Ue.color.copy(N.color).multiplyScalar(N.intensity),Ue.distance=N.distance,Ue.decay=N.decay,N.castShadow){const Qe=N.shadow,ve=r.get(N);ve.shadowIntensity=Qe.intensity,ve.shadowBias=Qe.bias,ve.shadowNormalBias=Qe.normalBias,ve.shadowRadius=Qe.radius,ve.shadowMapSize=Qe.mapSize,ve.shadowCameraNear=Qe.camera.near,ve.shadowCameraFar=Qe.camera.far,d.pointShadow[pe]=ve,d.pointShadowMap[pe]=ze,d.pointShadowMatrix[pe]=N.shadow.matrix,W++}d.point[pe]=Ue,pe++}else if(N.isHemisphereLight){const Ue=o.get(N);Ue.skyColor.copy(N.color).multiplyScalar(De),Ue.groundColor.copy(N.groundColor).multiplyScalar(De),d.hemi[p]=Ue,p++}}E>0&&(e.has("OES_texture_float_linear")===!0?(d.rectAreaLTC1=U.LTC_FLOAT_1,d.rectAreaLTC2=U.LTC_FLOAT_2):(d.rectAreaLTC1=U.LTC_HALF_1,d.rectAreaLTC2=U.LTC_HALF_2)),d.ambient[0]=j,d.ambient[1]=O,d.ambient[2]=G;const Se=d.hash;(Se.directionalLength!==V||Se.pointLength!==pe||Se.spotLength!==Z||Se.rectAreaLength!==E||Se.hemiLength!==p||Se.numDirectionalShadows!==re||Se.numPointShadows!==W||Se.numSpotShadows!==L||Se.numSpotMaps!==fe||Se.numLightProbes!==te)&&(d.directional.length=V,d.spot.length=Z,d.rectArea.length=E,d.point.length=pe,d.hemi.length=p,d.directionalShadow.length=re,d.directionalShadowMap.length=re,d.pointShadow.length=W,d.pointShadowMap.length=W,d.spotShadow.length=L,d.spotShadowMap.length=L,d.directionalShadowMatrix.length=re,d.pointShadowMatrix.length=W,d.spotLightMatrix.length=L+fe-$,d.spotLightMap.length=fe,d.numSpotLightShadowsWithMaps=$,d.numLightProbes=te,Se.directionalLength=V,Se.pointLength=pe,Se.spotLength=Z,Se.rectAreaLength=E,Se.hemiLength=p,Se.numDirectionalShadows=re,Se.numPointShadows=W,Se.numSpotShadows=L,Se.numSpotMaps=fe,Se.numLightProbes=te,d.version=Ir++)}function K(H,j){let O=0,G=0,V=0,pe=0,Z=0;const E=j.matrixWorldInverse;for(let p=0,re=H.length;p<re;p++){const W=H[p];if(W.isDirectionalLight){const L=d.directional[O];L.direction.setFromMatrixPosition(W.matrixWorld),_.setFromMatrixPosition(W.target.matrixWorld),L.direction.sub(_),L.direction.transformDirection(E),O++}else if(W.isSpotLight){const L=d.spot[V];L.position.setFromMatrixPosition(W.matrixWorld),L.position.applyMatrix4(E),L.direction.setFromMatrixPosition(W.matrixWorld),_.setFromMatrixPosition(W.target.matrixWorld),L.direction.sub(_),L.direction.transformDirection(E),V++}else if(W.isRectAreaLight){const L=d.rectArea[pe];L.position.setFromMatrixPosition(W.matrixWorld),L.position.applyMatrix4(E),w.identity(),m.copy(W.matrixWorld),m.premultiply(E),w.extractRotation(m),L.halfWidth.set(W.width*.5,0,0),L.halfHeight.set(0,W.height*.5,0),L.halfWidth.applyMatrix4(w),L.halfHeight.applyMatrix4(w),pe++}else if(W.isPointLight){const L=d.point[G];L.position.setFromMatrixPosition(W.matrixWorld),L.position.applyMatrix4(E),G++}else if(W.isHemisphereLight){const L=d.hemi[Z];L.direction.setFromMatrixPosition(W.matrixWorld),L.direction.transformDirection(E),Z++}}}return{setup:M,setupView:K,state:d}}function Ti(e){const o=new wa(e),r=[],d=[];function _(j){H.camera=j,r.length=0,d.length=0}function m(j){r.push(j)}function w(j){d.push(j)}function M(){o.setup(r)}function K(j){o.setupView(r,j)}const H={lightsArray:r,shadowsArray:d,camera:null,lights:o,transmissionRenderTarget:{}};return{init:_,state:H,setupLights:M,setupLightsView:K,pushLight:m,pushShadow:w}}function Fi(e){let o=new WeakMap;function r(_,m=0){const w=o.get(_);let M;return w===void 0?(M=new Ti(e),o.set(_,[M])):m>=w.length?(M=new Ti(e),w.push(M)):M=w[m],M}function d(){o=new WeakMap}return{get:r,dispose:d}}const ri=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pa=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nr(e,o,r){let d=new n.PPD;const _=new n.I9Y,m=new n.I9Y,w=new n.IUQ,M=new n.CSG({depthPacking:n.N5j}),K=new n.aVO,H={},j=r.maxTextureSize,O={[n.hB5]:n.hsX,[n.hsX]:n.hB5,[n.$EB]:n.$EB},G=new n.BKk({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new n.I9Y},radius:{value:4}},vertexShader:ri,fragmentShader:Pa}),V=G.clone();V.defines.HORIZONTAL_PASS=1;const pe=new n.LoY;pe.setAttribute("position",new n.THS(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const Z=new n.eaF(pe,G),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n.QP0;let p=this.type;this.render=function($,te,Se){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||$.length===0)return;const y=e.getRenderTarget(),A=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),Ne=e.state;Ne.setBlending(n.XIg),Ne.buffers.depth.getReversed()?Ne.buffers.color.setClear(0,0,0,0):Ne.buffers.color.setClear(1,1,1,1),Ne.buffers.depth.setTest(!0),Ne.setScissorTest(!1);const De=p!==n.RyA&&this.type===n.RyA,Re=p===n.RyA&&this.type!==n.RyA;for(let ze=0,Ue=$.length;ze<Ue;ze++){const Qe=$[ze],ve=Qe.shadow;if(ve===void 0){console.warn("THREE.WebGLShadowMap:",Qe,"has no shadow.");continue}if(ve.autoUpdate===!1&&ve.needsUpdate===!1)continue;_.copy(ve.mapSize);const Cn=ve.getFrameExtents();if(_.multiply(Cn),m.copy(ve.mapSize),(_.x>j||_.y>j)&&(_.x>j&&(m.x=Math.floor(j/Cn.x),_.x=m.x*Cn.x,ve.mapSize.x=m.x),_.y>j&&(m.y=Math.floor(j/Cn.y),_.y=m.y*Cn.y,ve.mapSize.y=m.y)),ve.map===null||De===!0||Re===!0){const Zn=this.type!==n.RyA?{minFilter:n.hxR,magFilter:n.hxR}:{};ve.map!==null&&ve.map.dispose(),ve.map=new n.nWS(_.x,_.y,Zn),ve.map.texture.name=Qe.name+".shadowMap",ve.camera.updateProjectionMatrix()}e.setRenderTarget(ve.map),e.clear();const In=ve.getViewportCount();for(let Zn=0;Zn<In;Zn++){const tt=ve.getViewport(Zn);w.set(m.x*tt.x,m.y*tt.y,m.x*tt.z,m.y*tt.w),Ne.viewport(w),ve.updateMatrices(Qe,Zn),d=ve.getFrustum(),L(te,Se,ve.camera,Qe,this.type)}ve.isPointLightShadow!==!0&&this.type===n.RyA&&re(ve,Se),ve.needsUpdate=!1}p=this.type,E.needsUpdate=!1,e.setRenderTarget(y,A,N)};function re($,te){const Se=o.update(Z);G.defines.VSM_SAMPLES!==$.blurSamples&&(G.defines.VSM_SAMPLES=$.blurSamples,V.defines.VSM_SAMPLES=$.blurSamples,G.needsUpdate=!0,V.needsUpdate=!0),$.mapPass===null&&($.mapPass=new n.nWS(_.x,_.y)),G.uniforms.shadow_pass.value=$.map.texture,G.uniforms.resolution.value=$.mapSize,G.uniforms.radius.value=$.radius,e.setRenderTarget($.mapPass),e.clear(),e.renderBufferDirect(te,null,Se,G,Z,null),V.uniforms.shadow_pass.value=$.mapPass.texture,V.uniforms.resolution.value=$.mapSize,V.uniforms.radius.value=$.radius,e.setRenderTarget($.map),e.clear(),e.renderBufferDirect(te,null,Se,V,Z,null)}function W($,te,Se,y){let A=null;const N=Se.isPointLight===!0?$.customDistanceMaterial:$.customDepthMaterial;if(N!==void 0)A=N;else if(A=Se.isPointLight===!0?K:M,e.localClippingEnabled&&te.clipShadows===!0&&Array.isArray(te.clippingPlanes)&&te.clippingPlanes.length!==0||te.displacementMap&&te.displacementScale!==0||te.alphaMap&&te.alphaTest>0||te.map&&te.alphaTest>0||te.alphaToCoverage===!0){const Ne=A.uuid,De=te.uuid;let Re=H[Ne];Re===void 0&&(Re={},H[Ne]=Re);let ze=Re[De];ze===void 0&&(ze=A.clone(),Re[De]=ze,te.addEventListener("dispose",fe)),A=ze}if(A.visible=te.visible,A.wireframe=te.wireframe,y===n.RyA?A.side=te.shadowSide!==null?te.shadowSide:te.side:A.side=te.shadowSide!==null?te.shadowSide:O[te.side],A.alphaMap=te.alphaMap,A.alphaTest=te.alphaToCoverage===!0?.5:te.alphaTest,A.map=te.map,A.clipShadows=te.clipShadows,A.clippingPlanes=te.clippingPlanes,A.clipIntersection=te.clipIntersection,A.displacementMap=te.displacementMap,A.displacementScale=te.displacementScale,A.displacementBias=te.displacementBias,A.wireframeLinewidth=te.wireframeLinewidth,A.linewidth=te.linewidth,Se.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Ne=e.properties.get(A);Ne.light=Se}return A}function L($,te,Se,y,A){if($.visible===!1)return;if($.layers.test(te.layers)&&($.isMesh||$.isLine||$.isPoints)&&($.castShadow||$.receiveShadow&&A===n.RyA)&&(!$.frustumCulled||d.intersectsObject($))){$.modelViewMatrix.multiplyMatrices(Se.matrixWorldInverse,$.matrixWorld);const De=o.update($),Re=$.material;if(Array.isArray(Re)){const ze=De.groups;for(let Ue=0,Qe=ze.length;Ue<Qe;Ue++){const ve=ze[Ue],Cn=Re[ve.materialIndex];if(Cn&&Cn.visible){const In=W($,Cn,y,A);$.onBeforeShadow(e,$,te,Se,De,In,ve),e.renderBufferDirect(Se,null,De,In,$,ve),$.onAfterShadow(e,$,te,Se,De,In,ve)}}}else if(Re.visible){const ze=W($,Re,y,A);$.onBeforeShadow(e,$,te,Se,De,ze,null),e.renderBufferDirect(Se,null,De,ze,$,null),$.onAfterShadow(e,$,te,Se,De,ze,null)}}const Ne=$.children;for(let De=0,Re=Ne.length;De<Re;De++)L(Ne[De],te,Se,y,A)}function fe($){$.target.removeEventListener("dispose",fe);for(const Se in H){const y=H[Se],A=$.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}const Fr={[n.eHc]:n.lGu,[n.brA]:n.K52,[n.U3G]:n.bw0,[n.xSv]:n.Gwm,[n.lGu]:n.eHc,[n.K52]:n.brA,[n.bw0]:n.U3G,[n.Gwm]:n.xSv};function Oi(e,o){function r(){let D=!1;const Ve=new n.IUQ;let qe=null;const un=new n.IUQ(0,0,0,0);return{setMask:function(Be){qe!==Be&&!D&&(e.colorMask(Be,Be,Be,Be),qe=Be)},setLocked:function(Be){D=Be},setClear:function(Be,be,gn,Xn,_t){_t===!0&&(Be*=Xn,be*=Xn,gn*=Xn),Ve.set(Be,be,gn,Xn),un.equals(Ve)===!1&&(e.clearColor(Be,be,gn,Xn),un.copy(Ve))},reset:function(){D=!1,qe=null,un.set(-1,0,0,0)}}}function d(){let D=!1,Ve=!1,qe=null,un=null,Be=null;return{setReversed:function(be){if(Ve!==be){const gn=o.get("EXT_clip_control");be?gn.clipControlEXT(gn.LOWER_LEFT_EXT,gn.ZERO_TO_ONE_EXT):gn.clipControlEXT(gn.LOWER_LEFT_EXT,gn.NEGATIVE_ONE_TO_ONE_EXT),Ve=be;const Xn=Be;Be=null,this.setClear(Xn)}},getReversed:function(){return Ve},setTest:function(be){be?Ke(e.DEPTH_TEST):Nn(e.DEPTH_TEST)},setMask:function(be){qe!==be&&!D&&(e.depthMask(be),qe=be)},setFunc:function(be){if(Ve&&(be=Fr[be]),un!==be){switch(be){case n.eHc:e.depthFunc(e.NEVER);break;case n.lGu:e.depthFunc(e.ALWAYS);break;case n.brA:e.depthFunc(e.LESS);break;case n.xSv:e.depthFunc(e.LEQUAL);break;case n.U3G:e.depthFunc(e.EQUAL);break;case n.Gwm:e.depthFunc(e.GEQUAL);break;case n.K52:e.depthFunc(e.GREATER);break;case n.bw0:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}un=be}},setLocked:function(be){D=be},setClear:function(be){Be!==be&&(Ve&&(be=1-be),e.clearDepth(be),Be=be)},reset:function(){D=!1,qe=null,un=null,Be=null,Ve=!1}}}function _(){let D=!1,Ve=null,qe=null,un=null,Be=null,be=null,gn=null,Xn=null,_t=null;return{setTest:function(st){D||(st?Ke(e.STENCIL_TEST):Nn(e.STENCIL_TEST))},setMask:function(st){Ve!==st&&!D&&(e.stencilMask(st),Ve=st)},setFunc:function(st,ui,oi){(qe!==st||un!==ui||Be!==oi)&&(e.stencilFunc(st,ui,oi),qe=st,un=ui,Be=oi)},setOp:function(st,ui,oi){(be!==st||gn!==ui||Xn!==oi)&&(e.stencilOp(st,ui,oi),be=st,gn=ui,Xn=oi)},setLocked:function(st){D=st},setClear:function(st){_t!==st&&(e.clearStencil(st),_t=st)},reset:function(){D=!1,Ve=null,qe=null,un=null,Be=null,be=null,gn=null,Xn=null,_t=null}}}const m=new r,w=new d,M=new _,K=new WeakMap,H=new WeakMap;let j={},O={},G=new WeakMap,V=[],pe=null,Z=!1,E=null,p=null,re=null,W=null,L=null,fe=null,$=null,te=new n.Q1f(0,0,0),Se=0,y=!1,A=null,N=null,Ne=null,De=null,Re=null;const ze=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Ue=!1,Qe=0;const ve=e.getParameter(e.VERSION);ve.indexOf("WebGL")!==-1?(Qe=parseFloat(/^WebGL (\d)/.exec(ve)[1]),Ue=Qe>=1):ve.indexOf("OpenGL ES")!==-1&&(Qe=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),Ue=Qe>=2);let Cn=null,In={};const Zn=e.getParameter(e.SCISSOR_BOX),tt=e.getParameter(e.VIEWPORT),wt=new n.IUQ().fromArray(Zn),St=new n.IUQ().fromArray(tt);function Ee(D,Ve,qe,un){const Be=new Uint8Array(4),be=e.createTexture();e.bindTexture(D,be),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gn=0;gn<qe;gn++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(Ve,0,e.RGBA,1,1,un,0,e.RGBA,e.UNSIGNED_BYTE,Be):e.texImage2D(Ve+gn,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Be);return be}const Je={};Je[e.TEXTURE_2D]=Ee(e.TEXTURE_2D,e.TEXTURE_2D,1),Je[e.TEXTURE_CUBE_MAP]=Ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Je[e.TEXTURE_2D_ARRAY]=Ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Je[e.TEXTURE_3D]=Ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),m.setClear(0,0,0,1),w.setClear(1),M.setClear(0),Ke(e.DEPTH_TEST),w.setFunc(n.xSv),at(!1),yn(n.Vb5),Ke(e.CULL_FACE),vt(n.XIg);function Ke(D){j[D]!==!0&&(e.enable(D),j[D]=!0)}function Nn(D){j[D]!==!1&&(e.disable(D),j[D]=!1)}function Fn(D,Ve){return O[D]!==Ve?(e.bindFramebuffer(D,Ve),O[D]=Ve,D===e.DRAW_FRAMEBUFFER&&(O[e.FRAMEBUFFER]=Ve),D===e.FRAMEBUFFER&&(O[e.DRAW_FRAMEBUFFER]=Ve),!0):!1}function zn(D,Ve){let qe=V,un=!1;if(D){qe=G.get(Ve),qe===void 0&&(qe=[],G.set(Ve,qe));const Be=D.textures;if(qe.length!==Be.length||qe[0]!==e.COLOR_ATTACHMENT0){for(let be=0,gn=Be.length;be<gn;be++)qe[be]=e.COLOR_ATTACHMENT0+be;qe.length=Be.length,un=!0}}else qe[0]!==e.BACK&&(qe[0]=e.BACK,un=!0);un&&e.drawBuffers(qe)}function Ct(D){return pe!==D?(e.useProgram(D),pe=D,!0):!1}const nt={[n.gO9]:e.FUNC_ADD,[n.FXf]:e.FUNC_SUBTRACT,[n.nST]:e.FUNC_REVERSE_SUBTRACT};nt[n.znC]=e.MIN,nt[n.$ei]=e.MAX;const P={[n.ojh]:e.ZERO,[n.qad]:e.ONE,[n.f4X]:e.SRC_COLOR,[n.ie2]:e.SRC_ALPHA,[n.hgQ]:e.SRC_ALPHA_SATURATE,[n.wn6]:e.DST_COLOR,[n.hdd]:e.DST_ALPHA,[n.LiQ]:e.ONE_MINUS_SRC_COLOR,[n.OuU]:e.ONE_MINUS_SRC_ALPHA,[n.aEY]:e.ONE_MINUS_DST_COLOR,[n.Nt7]:e.ONE_MINUS_DST_ALPHA,[n.RrE]:e.CONSTANT_COLOR,[n.$Yl]:e.ONE_MINUS_CONSTANT_COLOR,[n.e0p]:e.CONSTANT_ALPHA,[n.ov9]:e.ONE_MINUS_CONSTANT_ALPHA};function vt(D,Ve,qe,un,Be,be,gn,Xn,_t,st){if(D===n.XIg){Z===!0&&(Nn(e.BLEND),Z=!1);return}if(Z===!1&&(Ke(e.BLEND),Z=!0),D!==n.bCz){if(D!==E||st!==y){if((p!==n.gO9||L!==n.gO9)&&(e.blendEquation(e.FUNC_ADD),p=n.gO9,L=n.gO9),st)switch(D){case n.NTi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case n.EZo:e.blendFunc(e.ONE,e.ONE);break;case n.Kwu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case n.EdD:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case n.NTi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case n.EZo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case n.Kwu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n.EdD:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}re=null,W=null,fe=null,$=null,te.set(0,0,0),Se=0,E=D,y=st}return}Be=Be||Ve,be=be||qe,gn=gn||un,(Ve!==p||Be!==L)&&(e.blendEquationSeparate(nt[Ve],nt[Be]),p=Ve,L=Be),(qe!==re||un!==W||be!==fe||gn!==$)&&(e.blendFuncSeparate(P[qe],P[un],P[be],P[gn]),re=qe,W=un,fe=be,$=gn),(Xn.equals(te)===!1||_t!==Se)&&(e.blendColor(Xn.r,Xn.g,Xn.b,_t),te.copy(Xn),Se=_t),E=D,y=!1}function Pn(D,Ve){D.side===n.$EB?Nn(e.CULL_FACE):Ke(e.CULL_FACE);let qe=D.side===n.hsX;Ve&&(qe=!qe),at(qe),D.blending===n.NTi&&D.transparent===!1?vt(n.XIg):vt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),w.setFunc(D.depthFunc),w.setTest(D.depthTest),w.setMask(D.depthWrite),m.setMask(D.colorWrite);const un=D.stencilWrite;M.setTest(un),un&&(M.setMask(D.stencilWriteMask),M.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),M.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),hn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ke(e.SAMPLE_ALPHA_TO_COVERAGE):Nn(e.SAMPLE_ALPHA_TO_COVERAGE)}function at(D){A!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),A=D)}function yn(D){D!==n.WNZ?(Ke(e.CULL_FACE),D!==N&&(D===n.Vb5?e.cullFace(e.BACK):D===n.Jnc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Nn(e.CULL_FACE),N=D}function Tt(D){D!==Ne&&(Ue&&e.lineWidth(D),Ne=D)}function hn(D,Ve,qe){D?(Ke(e.POLYGON_OFFSET_FILL),(De!==Ve||Re!==qe)&&(e.polygonOffset(Ve,qe),De=Ve,Re=qe)):Nn(e.POLYGON_OFFSET_FILL)}function jn(D){D?Ke(e.SCISSOR_TEST):Nn(e.SCISSOR_TEST)}function Lt(D){D===void 0&&(D=e.TEXTURE0+ze-1),Cn!==D&&(e.activeTexture(D),Cn=D)}function Ut(D,Ve,qe){qe===void 0&&(Cn===null?qe=e.TEXTURE0+ze-1:qe=Cn);let un=In[qe];un===void 0&&(un={type:void 0,texture:void 0},In[qe]=un),(un.type!==D||un.texture!==Ve)&&(Cn!==qe&&(e.activeTexture(qe),Cn=qe),e.bindTexture(D,Ve||Je[D]),un.type=D,un.texture=Ve)}function b(){const D=In[Cn];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function h(){try{e.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{e.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{e.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{e.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rn(){try{e.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{e.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tn(){try{e.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xn(){try{e.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{e.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rn(D){wt.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),wt.copy(D))}function Gn(D){St.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),St.copy(D))}function An(D,Ve){let qe=H.get(Ve);qe===void 0&&(qe=new WeakMap,H.set(Ve,qe));let un=qe.get(D);un===void 0&&(un=e.getUniformBlockIndex(Ve,D.name),qe.set(D,un))}function $e(D,Ve){const un=H.get(Ve).get(D);K.get(Ve)!==un&&(e.uniformBlockBinding(Ve,un,D.__bindingPointIndex),K.set(Ve,un))}function Kn(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),w.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),j={},Cn=null,In={},O={},G=new WeakMap,V=[],pe=null,Z=!1,E=null,p=null,re=null,W=null,L=null,fe=null,$=null,te=new n.Q1f(0,0,0),Se=0,y=!1,A=null,N=null,Ne=null,De=null,Re=null,wt.set(0,0,e.canvas.width,e.canvas.height),St.set(0,0,e.canvas.width,e.canvas.height),m.reset(),w.reset(),M.reset()}return{buffers:{color:m,depth:w,stencil:M},enable:Ke,disable:Nn,bindFramebuffer:Fn,drawBuffers:zn,useProgram:Ct,setBlending:vt,setMaterial:Pn,setFlipSided:at,setCullFace:yn,setLineWidth:Tt,setPolygonOffset:hn,setScissorTest:jn,activeTexture:Lt,bindTexture:Ut,unbindTexture:b,compressedTexImage2D:h,compressedTexImage3D:Y,texImage2D:xn,texImage3D:He,updateUBOMapping:An,uniformBlockBinding:$e,texStorage2D:Ye,texStorage3D:Tn,texSubImage2D:me,texSubImage3D:Oe,compressedTexSubImage2D:de,compressedTexSubImage3D:Rn,scissor:rn,viewport:Gn,reset:Kn}}function La(e,o,r,d,_,m,w){const M=o.has("WEBGL_multisampled_render_to_texture")?o.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new n.I9Y,j=new WeakMap;let O;const G=new WeakMap;let V=!1;try{V=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function pe(b,h){return V?new OffscreenCanvas(b,h):(0,n.qq$)("canvas")}function Z(b,h,Y){let me=1;const Oe=Ut(b);if((Oe.width>Y||Oe.height>Y)&&(me=Y/Math.max(Oe.width,Oe.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const de=Math.floor(me*Oe.width),Rn=Math.floor(me*Oe.height);O===void 0&&(O=pe(de,Rn));const Ye=h?pe(de,Rn):O;return Ye.width=de,Ye.height=Rn,Ye.getContext("2d").drawImage(b,0,0,de,Rn),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Oe.width+"x"+Oe.height+") to ("+de+"x"+Rn+")."),Ye}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Oe.width+"x"+Oe.height+")."),b;return b}function E(b){return b.generateMipmaps}function p(b){e.generateMipmap(b)}function re(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function W(b,h,Y,me,Oe=!1){if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de=h;if(h===e.RED&&(Y===e.FLOAT&&(de=e.R32F),Y===e.HALF_FLOAT&&(de=e.R16F),Y===e.UNSIGNED_BYTE&&(de=e.R8)),h===e.RED_INTEGER&&(Y===e.UNSIGNED_BYTE&&(de=e.R8UI),Y===e.UNSIGNED_SHORT&&(de=e.R16UI),Y===e.UNSIGNED_INT&&(de=e.R32UI),Y===e.BYTE&&(de=e.R8I),Y===e.SHORT&&(de=e.R16I),Y===e.INT&&(de=e.R32I)),h===e.RG&&(Y===e.FLOAT&&(de=e.RG32F),Y===e.HALF_FLOAT&&(de=e.RG16F),Y===e.UNSIGNED_BYTE&&(de=e.RG8)),h===e.RG_INTEGER&&(Y===e.UNSIGNED_BYTE&&(de=e.RG8UI),Y===e.UNSIGNED_SHORT&&(de=e.RG16UI),Y===e.UNSIGNED_INT&&(de=e.RG32UI),Y===e.BYTE&&(de=e.RG8I),Y===e.SHORT&&(de=e.RG16I),Y===e.INT&&(de=e.RG32I)),h===e.RGB_INTEGER&&(Y===e.UNSIGNED_BYTE&&(de=e.RGB8UI),Y===e.UNSIGNED_SHORT&&(de=e.RGB16UI),Y===e.UNSIGNED_INT&&(de=e.RGB32UI),Y===e.BYTE&&(de=e.RGB8I),Y===e.SHORT&&(de=e.RGB16I),Y===e.INT&&(de=e.RGB32I)),h===e.RGBA_INTEGER&&(Y===e.UNSIGNED_BYTE&&(de=e.RGBA8UI),Y===e.UNSIGNED_SHORT&&(de=e.RGBA16UI),Y===e.UNSIGNED_INT&&(de=e.RGBA32UI),Y===e.BYTE&&(de=e.RGBA8I),Y===e.SHORT&&(de=e.RGBA16I),Y===e.INT&&(de=e.RGBA32I)),h===e.RGB&&Y===e.UNSIGNED_INT_5_9_9_9_REV&&(de=e.RGB9_E5),h===e.RGBA){const Rn=Oe?n.VxR:n.ppV.getTransfer(me);Y===e.FLOAT&&(de=e.RGBA32F),Y===e.HALF_FLOAT&&(de=e.RGBA16F),Y===e.UNSIGNED_BYTE&&(de=Rn===n.KLL?e.SRGB8_ALPHA8:e.RGBA8),Y===e.UNSIGNED_SHORT_4_4_4_4&&(de=e.RGBA4),Y===e.UNSIGNED_SHORT_5_5_5_1&&(de=e.RGB5_A1)}return(de===e.R16F||de===e.R32F||de===e.RG16F||de===e.RG32F||de===e.RGBA16F||de===e.RGBA32F)&&o.get("EXT_color_buffer_float"),de}function L(b,h){let Y;return b?h===null||h===n.bkx||h===n.V3x?Y=e.DEPTH24_STENCIL8:h===n.RQf?Y=e.DEPTH32F_STENCIL8:h===n.cHt&&(Y=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):h===null||h===n.bkx||h===n.V3x?Y=e.DEPTH_COMPONENT24:h===n.RQf?Y=e.DEPTH_COMPONENT32F:h===n.cHt&&(Y=e.DEPTH_COMPONENT16),Y}function fe(b,h){return E(b)===!0||b.isFramebufferTexture&&b.minFilter!==n.hxR&&b.minFilter!==n.k6q?Math.log2(Math.max(h.width,h.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?h.mipmaps.length:1}function $(b){const h=b.target;h.removeEventListener("dispose",$),Se(h),h.isVideoTexture&&j.delete(h)}function te(b){const h=b.target;h.removeEventListener("dispose",te),A(h)}function Se(b){const h=d.get(b);if(h.__webglInit===void 0)return;const Y=b.source,me=G.get(Y);if(me){const Oe=me[h.__cacheKey];Oe.usedTimes--,Oe.usedTimes===0&&y(b),Object.keys(me).length===0&&G.delete(Y)}d.remove(b)}function y(b){const h=d.get(b);e.deleteTexture(h.__webglTexture);const Y=b.source,me=G.get(Y);delete me[h.__cacheKey],w.memory.textures--}function A(b){const h=d.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),d.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(h.__webglFramebuffer[me]))for(let Oe=0;Oe<h.__webglFramebuffer[me].length;Oe++)e.deleteFramebuffer(h.__webglFramebuffer[me][Oe]);else e.deleteFramebuffer(h.__webglFramebuffer[me]);h.__webglDepthbuffer&&e.deleteRenderbuffer(h.__webglDepthbuffer[me])}else{if(Array.isArray(h.__webglFramebuffer))for(let me=0;me<h.__webglFramebuffer.length;me++)e.deleteFramebuffer(h.__webglFramebuffer[me]);else e.deleteFramebuffer(h.__webglFramebuffer);if(h.__webglDepthbuffer&&e.deleteRenderbuffer(h.__webglDepthbuffer),h.__webglMultisampledFramebuffer&&e.deleteFramebuffer(h.__webglMultisampledFramebuffer),h.__webglColorRenderbuffer)for(let me=0;me<h.__webglColorRenderbuffer.length;me++)h.__webglColorRenderbuffer[me]&&e.deleteRenderbuffer(h.__webglColorRenderbuffer[me]);h.__webglDepthRenderbuffer&&e.deleteRenderbuffer(h.__webglDepthRenderbuffer)}const Y=b.textures;for(let me=0,Oe=Y.length;me<Oe;me++){const de=d.get(Y[me]);de.__webglTexture&&(e.deleteTexture(de.__webglTexture),w.memory.textures--),d.remove(Y[me])}d.remove(b)}let N=0;function Ne(){N=0}function De(){const b=N;return b>=_.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+_.maxTextures),N+=1,b}function Re(b){const h=[];return h.push(b.wrapS),h.push(b.wrapT),h.push(b.wrapR||0),h.push(b.magFilter),h.push(b.minFilter),h.push(b.anisotropy),h.push(b.internalFormat),h.push(b.format),h.push(b.type),h.push(b.generateMipmaps),h.push(b.premultiplyAlpha),h.push(b.flipY),h.push(b.unpackAlignment),h.push(b.colorSpace),h.join()}function ze(b,h){const Y=d.get(b);if(b.isVideoTexture&&jn(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&Y.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(Y,b,h);return}}else b.isExternalTexture&&(Y.__webglTexture=b.sourceTexture?b.sourceTexture:null);r.bindTexture(e.TEXTURE_2D,Y.__webglTexture,e.TEXTURE0+h)}function Ue(b,h){const Y=d.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&Y.__version!==b.version){Je(Y,b,h);return}r.bindTexture(e.TEXTURE_2D_ARRAY,Y.__webglTexture,e.TEXTURE0+h)}function Qe(b,h){const Y=d.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&Y.__version!==b.version){Je(Y,b,h);return}r.bindTexture(e.TEXTURE_3D,Y.__webglTexture,e.TEXTURE0+h)}function ve(b,h){const Y=d.get(b);if(b.version>0&&Y.__version!==b.version){Ke(Y,b,h);return}r.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture,e.TEXTURE0+h)}const Cn={[n.GJx]:e.REPEAT,[n.ghU]:e.CLAMP_TO_EDGE,[n.kTW]:e.MIRRORED_REPEAT},In={[n.hxR]:e.NEAREST,[n.pHI]:e.NEAREST_MIPMAP_NEAREST,[n.Cfg]:e.NEAREST_MIPMAP_LINEAR,[n.k6q]:e.LINEAR,[n.kRr]:e.LINEAR_MIPMAP_NEAREST,[n.$_I]:e.LINEAR_MIPMAP_LINEAR},Zn={[n.amv]:e.NEVER,[n.FFZ]:e.ALWAYS,[n.vim]:e.LESS,[n.TiK]:e.LEQUAL,[n.kO0]:e.EQUAL,[n.gWB]:e.GEQUAL,[n.eoi]:e.GREATER,[n.jzd]:e.NOTEQUAL};function tt(b,h){if(h.type===n.RQf&&o.has("OES_texture_float_linear")===!1&&(h.magFilter===n.k6q||h.magFilter===n.kRr||h.magFilter===n.Cfg||h.magFilter===n.$_I||h.minFilter===n.k6q||h.minFilter===n.kRr||h.minFilter===n.Cfg||h.minFilter===n.$_I)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,Cn[h.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,Cn[h.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,Cn[h.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,In[h.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,In[h.minFilter]),h.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Zn[h.compareFunction])),o.has("EXT_texture_filter_anisotropic")===!0){if(h.magFilter===n.hxR||h.minFilter!==n.Cfg&&h.minFilter!==n.$_I||h.type===n.RQf&&o.has("OES_texture_float_linear")===!1)return;if(h.anisotropy>1||d.get(h).__currentAnisotropy){const Y=o.get("EXT_texture_filter_anisotropic");e.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,_.getMaxAnisotropy())),d.get(h).__currentAnisotropy=h.anisotropy}}}function wt(b,h){let Y=!1;b.__webglInit===void 0&&(b.__webglInit=!0,h.addEventListener("dispose",$));const me=h.source;let Oe=G.get(me);Oe===void 0&&(Oe={},G.set(me,Oe));const de=Re(h);if(de!==b.__cacheKey){Oe[de]===void 0&&(Oe[de]={texture:e.createTexture(),usedTimes:0},w.memory.textures++,Y=!0),Oe[de].usedTimes++;const Rn=Oe[b.__cacheKey];Rn!==void 0&&(Oe[b.__cacheKey].usedTimes--,Rn.usedTimes===0&&y(h)),b.__cacheKey=de,b.__webglTexture=Oe[de].texture}return Y}function St(b,h,Y){return Math.floor(Math.floor(b/Y)/h)}function Ee(b,h,Y,me){const de=b.updateRanges;if(de.length===0)r.texSubImage2D(e.TEXTURE_2D,0,0,0,h.width,h.height,Y,me,h.data);else{de.sort((He,rn)=>He.start-rn.start);let Rn=0;for(let He=1;He<de.length;He++){const rn=de[Rn],Gn=de[He],An=rn.start+rn.count,$e=St(Gn.start,h.width,4),Kn=St(rn.start,h.width,4);Gn.start<=An+1&&$e===Kn&&St(Gn.start+Gn.count-1,h.width,4)===$e?rn.count=Math.max(rn.count,Gn.start+Gn.count-rn.start):(++Rn,de[Rn]=Gn)}de.length=Rn+1;const Ye=e.getParameter(e.UNPACK_ROW_LENGTH),Tn=e.getParameter(e.UNPACK_SKIP_PIXELS),xn=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,h.width);for(let He=0,rn=de.length;He<rn;He++){const Gn=de[He],An=Math.floor(Gn.start/4),$e=Math.ceil(Gn.count/4),Kn=An%h.width,D=Math.floor(An/h.width),Ve=$e,qe=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Kn),e.pixelStorei(e.UNPACK_SKIP_ROWS,D),r.texSubImage2D(e.TEXTURE_2D,0,Kn,D,Ve,qe,Y,me,h.data)}b.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,Ye),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Tn),e.pixelStorei(e.UNPACK_SKIP_ROWS,xn)}}function Je(b,h,Y){let me=e.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(me=e.TEXTURE_2D_ARRAY),h.isData3DTexture&&(me=e.TEXTURE_3D);const Oe=wt(b,h),de=h.source;r.bindTexture(me,b.__webglTexture,e.TEXTURE0+Y);const Rn=d.get(de);if(de.version!==Rn.__version||Oe===!0){r.activeTexture(e.TEXTURE0+Y);const Ye=n.ppV.getPrimaries(n.ppV.workingColorSpace),Tn=h.colorSpace===n.jf0?null:n.ppV.getPrimaries(h.colorSpace),xn=h.colorSpace===n.jf0||Ye===Tn?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,h.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,h.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xn);let He=Z(h.image,!1,_.maxTextureSize);He=Lt(h,He);const rn=m.convert(h.format,h.colorSpace),Gn=m.convert(h.type);let An=W(h.internalFormat,rn,Gn,h.colorSpace,h.isVideoTexture);tt(me,h);let $e;const Kn=h.mipmaps,D=h.isVideoTexture!==!0,Ve=Rn.__version===void 0||Oe===!0,qe=de.dataReady,un=fe(h,He);if(h.isDepthTexture)An=L(h.format===n.dcC,h.type),Ve&&(D?r.texStorage2D(e.TEXTURE_2D,1,An,He.width,He.height):r.texImage2D(e.TEXTURE_2D,0,An,He.width,He.height,0,rn,Gn,null));else if(h.isDataTexture)if(Kn.length>0){D&&Ve&&r.texStorage2D(e.TEXTURE_2D,un,An,Kn[0].width,Kn[0].height);for(let Be=0,be=Kn.length;Be<be;Be++)$e=Kn[Be],D?qe&&r.texSubImage2D(e.TEXTURE_2D,Be,0,0,$e.width,$e.height,rn,Gn,$e.data):r.texImage2D(e.TEXTURE_2D,Be,An,$e.width,$e.height,0,rn,Gn,$e.data);h.generateMipmaps=!1}else D?(Ve&&r.texStorage2D(e.TEXTURE_2D,un,An,He.width,He.height),qe&&Ee(h,He,rn,Gn)):r.texImage2D(e.TEXTURE_2D,0,An,He.width,He.height,0,rn,Gn,He.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){D&&Ve&&r.texStorage3D(e.TEXTURE_2D_ARRAY,un,An,Kn[0].width,Kn[0].height,He.depth);for(let Be=0,be=Kn.length;Be<be;Be++)if($e=Kn[Be],h.format!==n.GWd)if(rn!==null)if(D){if(qe)if(h.layerUpdates.size>0){const gn=(0,n.Nex)($e.width,$e.height,h.format,h.type);for(const Xn of h.layerUpdates){const _t=$e.data.subarray(Xn*gn/$e.data.BYTES_PER_ELEMENT,(Xn+1)*gn/$e.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Be,0,0,Xn,$e.width,$e.height,1,rn,_t)}h.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Be,0,0,0,$e.width,$e.height,He.depth,rn,$e.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Be,An,$e.width,$e.height,He.depth,0,$e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?qe&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,Be,0,0,0,$e.width,$e.height,He.depth,rn,Gn,$e.data):r.texImage3D(e.TEXTURE_2D_ARRAY,Be,An,$e.width,$e.height,He.depth,0,rn,Gn,$e.data)}else{D&&Ve&&r.texStorage2D(e.TEXTURE_2D,un,An,Kn[0].width,Kn[0].height);for(let Be=0,be=Kn.length;Be<be;Be++)$e=Kn[Be],h.format!==n.GWd?rn!==null?D?qe&&r.compressedTexSubImage2D(e.TEXTURE_2D,Be,0,0,$e.width,$e.height,rn,$e.data):r.compressedTexImage2D(e.TEXTURE_2D,Be,An,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?qe&&r.texSubImage2D(e.TEXTURE_2D,Be,0,0,$e.width,$e.height,rn,Gn,$e.data):r.texImage2D(e.TEXTURE_2D,Be,An,$e.width,$e.height,0,rn,Gn,$e.data)}else if(h.isDataArrayTexture)if(D){if(Ve&&r.texStorage3D(e.TEXTURE_2D_ARRAY,un,An,He.width,He.height,He.depth),qe)if(h.layerUpdates.size>0){const Be=(0,n.Nex)(He.width,He.height,h.format,h.type);for(const be of h.layerUpdates){const gn=He.data.subarray(be*Be/He.data.BYTES_PER_ELEMENT,(be+1)*Be/He.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,be,He.width,He.height,1,rn,Gn,gn)}h.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,He.width,He.height,He.depth,rn,Gn,He.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,An,He.width,He.height,He.depth,0,rn,Gn,He.data);else if(h.isData3DTexture)D?(Ve&&r.texStorage3D(e.TEXTURE_3D,un,An,He.width,He.height,He.depth),qe&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,He.width,He.height,He.depth,rn,Gn,He.data)):r.texImage3D(e.TEXTURE_3D,0,An,He.width,He.height,He.depth,0,rn,Gn,He.data);else if(h.isFramebufferTexture){if(Ve)if(D)r.texStorage2D(e.TEXTURE_2D,un,An,He.width,He.height);else{let Be=He.width,be=He.height;for(let gn=0;gn<un;gn++)r.texImage2D(e.TEXTURE_2D,gn,An,Be,be,0,rn,Gn,null),Be>>=1,be>>=1}}else if(Kn.length>0){if(D&&Ve){const Be=Ut(Kn[0]);r.texStorage2D(e.TEXTURE_2D,un,An,Be.width,Be.height)}for(let Be=0,be=Kn.length;Be<be;Be++)$e=Kn[Be],D?qe&&r.texSubImage2D(e.TEXTURE_2D,Be,0,0,rn,Gn,$e):r.texImage2D(e.TEXTURE_2D,Be,An,rn,Gn,$e);h.generateMipmaps=!1}else if(D){if(Ve){const Be=Ut(He);r.texStorage2D(e.TEXTURE_2D,un,An,Be.width,Be.height)}qe&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,rn,Gn,He)}else r.texImage2D(e.TEXTURE_2D,0,An,rn,Gn,He);E(h)&&p(me),Rn.__version=de.version,h.onUpdate&&h.onUpdate(h)}b.__version=h.version}function Ke(b,h,Y){if(h.image.length!==6)return;const me=wt(b,h),Oe=h.source;r.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+Y);const de=d.get(Oe);if(Oe.version!==de.__version||me===!0){r.activeTexture(e.TEXTURE0+Y);const Rn=n.ppV.getPrimaries(n.ppV.workingColorSpace),Ye=h.colorSpace===n.jf0?null:n.ppV.getPrimaries(h.colorSpace),Tn=h.colorSpace===n.jf0||Rn===Ye?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,h.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,h.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tn);const xn=h.isCompressedTexture||h.image[0].isCompressedTexture,He=h.image[0]&&h.image[0].isDataTexture,rn=[];for(let be=0;be<6;be++)!xn&&!He?rn[be]=Z(h.image[be],!0,_.maxCubemapSize):rn[be]=He?h.image[be].image:h.image[be],rn[be]=Lt(h,rn[be]);const Gn=rn[0],An=m.convert(h.format,h.colorSpace),$e=m.convert(h.type),Kn=W(h.internalFormat,An,$e,h.colorSpace),D=h.isVideoTexture!==!0,Ve=de.__version===void 0||me===!0,qe=Oe.dataReady;let un=fe(h,Gn);tt(e.TEXTURE_CUBE_MAP,h);let Be;if(xn){D&&Ve&&r.texStorage2D(e.TEXTURE_CUBE_MAP,un,Kn,Gn.width,Gn.height);for(let be=0;be<6;be++){Be=rn[be].mipmaps;for(let gn=0;gn<Be.length;gn++){const Xn=Be[gn];h.format!==n.GWd?An!==null?D?qe&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,gn,0,0,Xn.width,Xn.height,An,Xn.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,gn,Kn,Xn.width,Xn.height,0,Xn.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?qe&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,gn,0,0,Xn.width,Xn.height,An,$e,Xn.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,gn,Kn,Xn.width,Xn.height,0,An,$e,Xn.data)}}}else{if(Be=h.mipmaps,D&&Ve){Be.length>0&&un++;const be=Ut(rn[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,un,Kn,be.width,be.height)}for(let be=0;be<6;be++)if(He){D?qe&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,rn[be].width,rn[be].height,An,$e,rn[be].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Kn,rn[be].width,rn[be].height,0,An,$e,rn[be].data);for(let gn=0;gn<Be.length;gn++){const _t=Be[gn].image[be].image;D?qe&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,gn+1,0,0,_t.width,_t.height,An,$e,_t.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,gn+1,Kn,_t.width,_t.height,0,An,$e,_t.data)}}else{D?qe&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,An,$e,rn[be]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Kn,An,$e,rn[be]);for(let gn=0;gn<Be.length;gn++){const Xn=Be[gn];D?qe&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,gn+1,0,0,An,$e,Xn.image[be]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+be,gn+1,Kn,An,$e,Xn.image[be])}}}E(h)&&p(e.TEXTURE_CUBE_MAP),de.__version=Oe.version,h.onUpdate&&h.onUpdate(h)}b.__version=h.version}function Nn(b,h,Y,me,Oe,de){const Rn=m.convert(Y.format,Y.colorSpace),Ye=m.convert(Y.type),Tn=W(Y.internalFormat,Rn,Ye,Y.colorSpace),xn=d.get(h),He=d.get(Y);if(He.__renderTarget=h,!xn.__hasExternalTextures){const rn=Math.max(1,h.width>>de),Gn=Math.max(1,h.height>>de);Oe===e.TEXTURE_3D||Oe===e.TEXTURE_2D_ARRAY?r.texImage3D(Oe,de,Tn,rn,Gn,h.depth,0,Rn,Ye,null):r.texImage2D(Oe,de,Tn,rn,Gn,0,Rn,Ye,null)}r.bindFramebuffer(e.FRAMEBUFFER,b),hn(h)?M.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,me,Oe,He.__webglTexture,0,Tt(h)):(Oe===e.TEXTURE_2D||Oe>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Oe<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,me,Oe,He.__webglTexture,de),r.bindFramebuffer(e.FRAMEBUFFER,null)}function Fn(b,h,Y){if(e.bindRenderbuffer(e.RENDERBUFFER,b),h.depthBuffer){const me=h.depthTexture,Oe=me&&me.isDepthTexture?me.type:null,de=L(h.stencilBuffer,Oe),Rn=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ye=Tt(h);hn(h)?M.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye,de,h.width,h.height):Y?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye,de,h.width,h.height):e.renderbufferStorage(e.RENDERBUFFER,de,h.width,h.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Rn,e.RENDERBUFFER,b)}else{const me=h.textures;for(let Oe=0;Oe<me.length;Oe++){const de=me[Oe],Rn=m.convert(de.format,de.colorSpace),Ye=m.convert(de.type),Tn=W(de.internalFormat,Rn,Ye,de.colorSpace),xn=Tt(h);Y&&hn(h)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xn,Tn,h.width,h.height):hn(h)?M.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xn,Tn,h.width,h.height):e.renderbufferStorage(e.RENDERBUFFER,Tn,h.width,h.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function zn(b,h){if(h&&h.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,b),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=d.get(h.depthTexture);me.__renderTarget=h,(!me.__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),ze(h.depthTexture,0);const Oe=me.__webglTexture,de=Tt(h);if(h.depthTexture.format===n.zdS)hn(h)?M.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Oe,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Oe,0);else if(h.depthTexture.format===n.dcC)hn(h)?M.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Oe,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Oe,0);else throw new Error("Unknown depthTexture format")}function Ct(b){const h=d.get(b),Y=b.isWebGLCubeRenderTarget===!0;if(h.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(h.__depthDisposeCallback&&h.__depthDisposeCallback(),me){const Oe=()=>{delete h.__boundDepthTexture,delete h.__depthDisposeCallback,me.removeEventListener("dispose",Oe)};me.addEventListener("dispose",Oe),h.__depthDisposeCallback=Oe}h.__boundDepthTexture=me}if(b.depthTexture&&!h.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const me=b.texture.mipmaps;me&&me.length>0?zn(h.__webglFramebuffer[0],b):zn(h.__webglFramebuffer,b)}else if(Y){h.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(r.bindFramebuffer(e.FRAMEBUFFER,h.__webglFramebuffer[me]),h.__webglDepthbuffer[me]===void 0)h.__webglDepthbuffer[me]=e.createRenderbuffer(),Fn(h.__webglDepthbuffer[me],b,!1);else{const Oe=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=h.__webglDepthbuffer[me];e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,Oe,e.RENDERBUFFER,de)}}else{const me=b.texture.mipmaps;if(me&&me.length>0?r.bindFramebuffer(e.FRAMEBUFFER,h.__webglFramebuffer[0]):r.bindFramebuffer(e.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer===void 0)h.__webglDepthbuffer=e.createRenderbuffer(),Fn(h.__webglDepthbuffer,b,!1);else{const Oe=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=h.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,Oe,e.RENDERBUFFER,de)}}r.bindFramebuffer(e.FRAMEBUFFER,null)}function nt(b,h,Y){const me=d.get(b);h!==void 0&&Nn(me.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),Y!==void 0&&Ct(b)}function P(b){const h=b.texture,Y=d.get(b),me=d.get(h);b.addEventListener("dispose",te);const Oe=b.textures,de=b.isWebGLCubeRenderTarget===!0,Rn=Oe.length>1;if(Rn||(me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture()),me.__version=h.version,w.memory.textures++),de){Y.__webglFramebuffer=[];for(let Ye=0;Ye<6;Ye++)if(h.mipmaps&&h.mipmaps.length>0){Y.__webglFramebuffer[Ye]=[];for(let Tn=0;Tn<h.mipmaps.length;Tn++)Y.__webglFramebuffer[Ye][Tn]=e.createFramebuffer()}else Y.__webglFramebuffer[Ye]=e.createFramebuffer()}else{if(h.mipmaps&&h.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ye=0;Ye<h.mipmaps.length;Ye++)Y.__webglFramebuffer[Ye]=e.createFramebuffer()}else Y.__webglFramebuffer=e.createFramebuffer();if(Rn)for(let Ye=0,Tn=Oe.length;Ye<Tn;Ye++){const xn=d.get(Oe[Ye]);xn.__webglTexture===void 0&&(xn.__webglTexture=e.createTexture(),w.memory.textures++)}if(b.samples>0&&hn(b)===!1){Y.__webglMultisampledFramebuffer=e.createFramebuffer(),Y.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ye=0;Ye<Oe.length;Ye++){const Tn=Oe[Ye];Y.__webglColorRenderbuffer[Ye]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,Y.__webglColorRenderbuffer[Ye]);const xn=m.convert(Tn.format,Tn.colorSpace),He=m.convert(Tn.type),rn=W(Tn.internalFormat,xn,He,Tn.colorSpace,b.isXRRenderTarget===!0),Gn=Tt(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,Gn,rn,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ye,e.RENDERBUFFER,Y.__webglColorRenderbuffer[Ye])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(Y.__webglDepthRenderbuffer=e.createRenderbuffer(),Fn(Y.__webglDepthRenderbuffer,b,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(de){r.bindTexture(e.TEXTURE_CUBE_MAP,me.__webglTexture),tt(e.TEXTURE_CUBE_MAP,h);for(let Ye=0;Ye<6;Ye++)if(h.mipmaps&&h.mipmaps.length>0)for(let Tn=0;Tn<h.mipmaps.length;Tn++)Nn(Y.__webglFramebuffer[Ye][Tn],b,h,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,Tn);else Nn(Y.__webglFramebuffer[Ye],b,h,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0);E(h)&&p(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Rn){for(let Ye=0,Tn=Oe.length;Ye<Tn;Ye++){const xn=Oe[Ye],He=d.get(xn);let rn=e.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rn=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(rn,He.__webglTexture),tt(rn,xn),Nn(Y.__webglFramebuffer,b,xn,e.COLOR_ATTACHMENT0+Ye,rn,0),E(xn)&&p(rn)}r.unbindTexture()}else{let Ye=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ye=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(Ye,me.__webglTexture),tt(Ye,h),h.mipmaps&&h.mipmaps.length>0)for(let Tn=0;Tn<h.mipmaps.length;Tn++)Nn(Y.__webglFramebuffer[Tn],b,h,e.COLOR_ATTACHMENT0,Ye,Tn);else Nn(Y.__webglFramebuffer,b,h,e.COLOR_ATTACHMENT0,Ye,0);E(h)&&p(Ye),r.unbindTexture()}b.depthBuffer&&Ct(b)}function vt(b){const h=b.textures;for(let Y=0,me=h.length;Y<me;Y++){const Oe=h[Y];if(E(Oe)){const de=re(b),Rn=d.get(Oe).__webglTexture;r.bindTexture(de,Rn),p(de),r.unbindTexture()}}}const Pn=[],at=[];function yn(b){if(b.samples>0){if(hn(b)===!1){const h=b.textures,Y=b.width,me=b.height;let Oe=e.COLOR_BUFFER_BIT;const de=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Rn=d.get(b),Ye=h.length>1;if(Ye)for(let xn=0;xn<h.length;xn++)r.bindFramebuffer(e.FRAMEBUFFER,Rn.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xn,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Rn.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xn,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Rn.__webglMultisampledFramebuffer);const Tn=b.texture.mipmaps;Tn&&Tn.length>0?r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer[0]):r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let xn=0;xn<h.length;xn++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Oe|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Oe|=e.STENCIL_BUFFER_BIT)),Ye){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Rn.__webglColorRenderbuffer[xn]);const He=d.get(h[xn]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,He,0)}e.blitFramebuffer(0,0,Y,me,0,0,Y,me,Oe,e.NEAREST),K===!0&&(Pn.length=0,at.length=0,Pn.push(e.COLOR_ATTACHMENT0+xn),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Pn.push(de),at.push(de),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,at)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pn))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Ye)for(let xn=0;xn<h.length;xn++){r.bindFramebuffer(e.FRAMEBUFFER,Rn.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xn,e.RENDERBUFFER,Rn.__webglColorRenderbuffer[xn]);const He=d.get(h[xn]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Rn.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xn,e.TEXTURE_2D,He,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Rn.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&K){const h=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[h])}}}function Tt(b){return Math.min(_.maxSamples,b.samples)}function hn(b){const h=d.get(b);return b.samples>0&&o.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function jn(b){const h=w.render.frame;j.get(b)!==h&&(j.set(b,h),b.update())}function Lt(b,h){const Y=b.colorSpace,me=b.format,Oe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Y!==n.Zr2&&Y!==n.jf0&&(n.ppV.getTransfer(Y)===n.KLL?(me!==n.GWd||Oe!==n.OUM)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),h}function Ut(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(H.width=b.naturalWidth||b.width,H.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(H.width=b.displayWidth,H.height=b.displayHeight):(H.width=b.width,H.height=b.height),H}this.allocateTextureUnit=De,this.resetTextureUnits=Ne,this.setTexture2D=ze,this.setTexture2DArray=Ue,this.setTexture3D=Qe,this.setTextureCube=ve,this.rebindTextures=nt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Nn,this.useMultisampledRTT=hn}function Mi(e,o){function r(d,_=n.jf0){let m;const w=n.ppV.getTransfer(_);if(d===n.OUM)return e.UNSIGNED_BYTE;if(d===n.Wew)return e.UNSIGNED_SHORT_4_4_4_4;if(d===n.gJ2)return e.UNSIGNED_SHORT_5_5_5_1;if(d===n.Dmk)return e.UNSIGNED_INT_5_9_9_9_REV;if(d===n.tJf)return e.BYTE;if(d===n.fBL)return e.SHORT;if(d===n.cHt)return e.UNSIGNED_SHORT;if(d===n.Yuy)return e.INT;if(d===n.bkx)return e.UNSIGNED_INT;if(d===n.RQf)return e.FLOAT;if(d===n.ix0)return e.HALF_FLOAT;if(d===n.wrO)return e.ALPHA;if(d===n.HIg)return e.RGB;if(d===n.GWd)return e.RGBA;if(d===n.zdS)return e.DEPTH_COMPONENT;if(d===n.dcC)return e.DEPTH_STENCIL;if(d===n.VT0)return e.RED;if(d===n.ZQM)return e.RED_INTEGER;if(d===n.paN)return e.RG;if(d===n.TkQ)return e.RG_INTEGER;if(d===n.c90)return e.RGBA_INTEGER;if(d===n.IE4||d===n.Nz6||d===n.jR7||d===n.BXX)if(w===n.KLL)if(m=o.get("WEBGL_compressed_texture_s3tc_srgb"),m!==null){if(d===n.IE4)return m.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(d===n.Nz6)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(d===n.jR7)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(d===n.BXX)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(m=o.get("WEBGL_compressed_texture_s3tc"),m!==null){if(d===n.IE4)return m.COMPRESSED_RGB_S3TC_DXT1_EXT;if(d===n.Nz6)return m.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(d===n.jR7)return m.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(d===n.BXX)return m.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(d===n.k6Q||d===n.kTp||d===n.HXV||d===n.pBf)if(m=o.get("WEBGL_compressed_texture_pvrtc"),m!==null){if(d===n.k6Q)return m.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(d===n.kTp)return m.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(d===n.HXV)return m.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(d===n.pBf)return m.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(d===n.CVz||d===n.Riy||d===n.KDk)if(m=o.get("WEBGL_compressed_texture_etc"),m!==null){if(d===n.CVz||d===n.Riy)return w===n.KLL?m.COMPRESSED_SRGB8_ETC2:m.COMPRESSED_RGB8_ETC2;if(d===n.KDk)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:m.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(d===n.qa3||d===n.B_h||d===n.czI||d===n.rSH||d===n.Qrf||d===n.psI||d===n.a5J||d===n._QJ||d===n.uB5||d===n.lyL||d===n.bC7||d===n.y3Z||d===n.ojs||d===n.S$4)if(m=o.get("WEBGL_compressed_texture_astc"),m!==null){if(d===n.qa3)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:m.COMPRESSED_RGBA_ASTC_4x4_KHR;if(d===n.B_h)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:m.COMPRESSED_RGBA_ASTC_5x4_KHR;if(d===n.czI)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:m.COMPRESSED_RGBA_ASTC_5x5_KHR;if(d===n.rSH)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:m.COMPRESSED_RGBA_ASTC_6x5_KHR;if(d===n.Qrf)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:m.COMPRESSED_RGBA_ASTC_6x6_KHR;if(d===n.psI)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:m.COMPRESSED_RGBA_ASTC_8x5_KHR;if(d===n.a5J)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:m.COMPRESSED_RGBA_ASTC_8x6_KHR;if(d===n._QJ)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:m.COMPRESSED_RGBA_ASTC_8x8_KHR;if(d===n.uB5)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:m.COMPRESSED_RGBA_ASTC_10x5_KHR;if(d===n.lyL)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:m.COMPRESSED_RGBA_ASTC_10x6_KHR;if(d===n.bC7)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:m.COMPRESSED_RGBA_ASTC_10x8_KHR;if(d===n.y3Z)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:m.COMPRESSED_RGBA_ASTC_10x10_KHR;if(d===n.ojs)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:m.COMPRESSED_RGBA_ASTC_12x10_KHR;if(d===n.S$4)return w===n.KLL?m.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:m.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(d===n.Fn||d===n.H23||d===n.W9U)if(m=o.get("EXT_texture_compression_bptc"),m!==null){if(d===n.Fn)return w===n.KLL?m.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:m.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(d===n.H23)return m.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(d===n.W9U)return m.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(d===n.Kef||d===n.XG_||d===n.HO_||d===n.CWW)if(m=o.get("EXT_texture_compression_rgtc"),m!==null){if(d===n.Fn)return m.COMPRESSED_RED_RGTC1_EXT;if(d===n.XG_)return m.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(d===n.HO_)return m.COMPRESSED_RED_GREEN_RGTC2_EXT;if(d===n.CWW)return m.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return d===n.V3x?e.UNSIGNED_INT_24_8:e[d]!==void 0?e[d]:null}return{convert:r}}class nr extends n.gPd{constructor(o=null){super(),this.sourceTexture=o,this.isExternalTexture=!0}}const Bt=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ko=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tr{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(o,r){if(this.texture===null){const d=new nr(o.texture);(o.depthNear!==r.depthNear||o.depthFar!==r.depthFar)&&(this.depthNear=o.depthNear,this.depthFar=o.depthFar),this.texture=d}}getMesh(o){if(this.texture!==null&&this.mesh===null){const r=o.cameras[0].viewport,d=new n.BKk({vertexShader:Bt,fragmentShader:ko,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new n.eaF(new n.bdM(20,20),d)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ir extends n.Qev{constructor(o,r){super();const d=this;let _=null,m=1,w=null,M="local-floor",K=1,H=null,j=null,O=null,G=null,V=null,pe=null;const Z=new tr,E={},p=r.getContextAttributes();let re=null,W=null;const L=[],fe=[],$=new n.I9Y;let te=null;const Se=new n.ubm;Se.viewport=new n.IUQ;const y=new n.ubm;y.viewport=new n.IUQ;const A=[Se,y],N=new n.nZQ;let Ne=null,De=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Ee){let Je=L[Ee];return Je===void 0&&(Je=new n.R3r,L[Ee]=Je),Je.getTargetRaySpace()},this.getControllerGrip=function(Ee){let Je=L[Ee];return Je===void 0&&(Je=new n.R3r,L[Ee]=Je),Je.getGripSpace()},this.getHand=function(Ee){let Je=L[Ee];return Je===void 0&&(Je=new n.R3r,L[Ee]=Je),Je.getHandSpace()};function Re(Ee){const Je=fe.indexOf(Ee.inputSource);if(Je===-1)return;const Ke=L[Je];Ke!==void 0&&(Ke.update(Ee.inputSource,Ee.frame,H||w),Ke.dispatchEvent({type:Ee.type,data:Ee.inputSource}))}function ze(){_.removeEventListener("select",Re),_.removeEventListener("selectstart",Re),_.removeEventListener("selectend",Re),_.removeEventListener("squeeze",Re),_.removeEventListener("squeezestart",Re),_.removeEventListener("squeezeend",Re),_.removeEventListener("end",ze),_.removeEventListener("inputsourceschange",Ue);for(let Ee=0;Ee<L.length;Ee++){const Je=fe[Ee];Je!==null&&(fe[Ee]=null,L[Ee].disconnect(Je))}Ne=null,De=null,Z.reset();for(const Ee in E)delete E[Ee];o.setRenderTarget(re),V=null,G=null,O=null,_=null,W=null,St.stop(),d.isPresenting=!1,o.setPixelRatio(te),o.setSize($.width,$.height,!1),d.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Ee){m=Ee,d.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Ee){M=Ee,d.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||w},this.setReferenceSpace=function(Ee){H=Ee},this.getBaseLayer=function(){return G!==null?G:V},this.getBinding=function(){return O},this.getFrame=function(){return pe},this.getSession=function(){return _},this.setSession=async function(Ee){if(_=Ee,_!==null){if(re=o.getRenderTarget(),_.addEventListener("select",Re),_.addEventListener("selectstart",Re),_.addEventListener("selectend",Re),_.addEventListener("squeeze",Re),_.addEventListener("squeezestart",Re),_.addEventListener("squeezeend",Re),_.addEventListener("end",ze),_.addEventListener("inputsourceschange",Ue),p.xrCompatible!==!0&&await r.makeXRCompatible(),te=o.getPixelRatio(),o.getSize($),typeof XRWebGLBinding<"u"&&(O=new XRWebGLBinding(_,r)),O!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ke=null,Nn=null,Fn=null;p.depth&&(Fn=p.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,Ke=p.stencil?n.dcC:n.zdS,Nn=p.stencil?n.V3x:n.bkx);const zn={colorFormat:r.RGBA8,depthFormat:Fn,scaleFactor:m};G=O.createProjectionLayer(zn),_.updateRenderState({layers:[G]}),o.setPixelRatio(1),o.setSize(G.textureWidth,G.textureHeight,!1),W=new n.nWS(G.textureWidth,G.textureHeight,{format:n.GWd,type:n.OUM,depthTexture:new n.VCu(G.textureWidth,G.textureHeight,Nn,void 0,void 0,void 0,void 0,void 0,void 0,Ke),stencilBuffer:p.stencil,colorSpace:o.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}else{const Ke={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:m};V=new XRWebGLLayer(_,r,Ke),_.updateRenderState({baseLayer:V}),o.setPixelRatio(1),o.setSize(V.framebufferWidth,V.framebufferHeight,!1),W=new n.nWS(V.framebufferWidth,V.framebufferHeight,{format:n.GWd,type:n.OUM,colorSpace:o.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:V.ignoreDepthValues===!1,resolveStencilBuffer:V.ignoreDepthValues===!1})}W.isXRRenderTarget=!0,this.setFoveation(K),H=null,w=await _.requestReferenceSpace(M),St.setContext(_),St.start(),d.isPresenting=!0,d.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(_!==null)return _.environmentBlendMode},this.getDepthTexture=function(){return Z.getDepthTexture()};function Ue(Ee){for(let Je=0;Je<Ee.removed.length;Je++){const Ke=Ee.removed[Je],Nn=fe.indexOf(Ke);Nn>=0&&(fe[Nn]=null,L[Nn].disconnect(Ke))}for(let Je=0;Je<Ee.added.length;Je++){const Ke=Ee.added[Je];let Nn=fe.indexOf(Ke);if(Nn===-1){for(let zn=0;zn<L.length;zn++)if(zn>=fe.length){fe.push(Ke),Nn=zn;break}else if(fe[zn]===null){fe[zn]=Ke,Nn=zn;break}if(Nn===-1)break}const Fn=L[Nn];Fn&&Fn.connect(Ke)}}const Qe=new n.Pq0,ve=new n.Pq0;function Cn(Ee,Je,Ke){Qe.setFromMatrixPosition(Je.matrixWorld),ve.setFromMatrixPosition(Ke.matrixWorld);const Nn=Qe.distanceTo(ve),Fn=Je.projectionMatrix.elements,zn=Ke.projectionMatrix.elements,Ct=Fn[14]/(Fn[10]-1),nt=Fn[14]/(Fn[10]+1),P=(Fn[9]+1)/Fn[5],vt=(Fn[9]-1)/Fn[5],Pn=(Fn[8]-1)/Fn[0],at=(zn[8]+1)/zn[0],yn=Ct*Pn,Tt=Ct*at,hn=Nn/(-Pn+at),jn=hn*-Pn;if(Je.matrixWorld.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.translateX(jn),Ee.translateZ(hn),Ee.matrixWorld.compose(Ee.position,Ee.quaternion,Ee.scale),Ee.matrixWorldInverse.copy(Ee.matrixWorld).invert(),Fn[10]===-1)Ee.projectionMatrix.copy(Je.projectionMatrix),Ee.projectionMatrixInverse.copy(Je.projectionMatrixInverse);else{const Lt=Ct+hn,Ut=nt+hn,b=yn-jn,h=Tt+(Nn-jn),Y=P*nt/Ut*Lt,me=vt*nt/Ut*Lt;Ee.projectionMatrix.makePerspective(b,h,Y,me,Lt,Ut),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert()}}function In(Ee,Je){Je===null?Ee.matrixWorld.copy(Ee.matrix):Ee.matrixWorld.multiplyMatrices(Je.matrixWorld,Ee.matrix),Ee.matrixWorldInverse.copy(Ee.matrixWorld).invert()}this.updateCamera=function(Ee){if(_===null)return;let Je=Ee.near,Ke=Ee.far;Z.texture!==null&&(Z.depthNear>0&&(Je=Z.depthNear),Z.depthFar>0&&(Ke=Z.depthFar)),N.near=y.near=Se.near=Je,N.far=y.far=Se.far=Ke,(Ne!==N.near||De!==N.far)&&(_.updateRenderState({depthNear:N.near,depthFar:N.far}),Ne=N.near,De=N.far),N.layers.mask=Ee.layers.mask|6,Se.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const Nn=Ee.parent,Fn=N.cameras;In(N,Nn);for(let zn=0;zn<Fn.length;zn++)In(Fn[zn],Nn);Fn.length===2?Cn(N,Se,y):N.projectionMatrix.copy(Se.projectionMatrix),Zn(Ee,N,Nn)};function Zn(Ee,Je,Ke){Ke===null?Ee.matrix.copy(Je.matrixWorld):(Ee.matrix.copy(Ke.matrixWorld),Ee.matrix.invert(),Ee.matrix.multiply(Je.matrixWorld)),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.updateMatrixWorld(!0),Ee.projectionMatrix.copy(Je.projectionMatrix),Ee.projectionMatrixInverse.copy(Je.projectionMatrixInverse),Ee.isPerspectiveCamera&&(Ee.fov=n.a55*2*Math.atan(1/Ee.projectionMatrix.elements[5]),Ee.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(G===null&&V===null))return K},this.setFoveation=function(Ee){K=Ee,G!==null&&(G.fixedFoveation=Ee),V!==null&&V.fixedFoveation!==void 0&&(V.fixedFoveation=Ee)},this.hasDepthSensing=function(){return Z.texture!==null},this.getDepthSensingMesh=function(){return Z.getMesh(N)},this.getCameraTexture=function(Ee){return E[Ee]};let tt=null;function wt(Ee,Je){if(j=Je.getViewerPose(H||w),pe=Je,j!==null){const Ke=j.views;V!==null&&(o.setRenderTargetFramebuffer(W,V.framebuffer),o.setRenderTarget(W));let Nn=!1;Ke.length!==N.cameras.length&&(N.cameras.length=0,Nn=!0);for(let nt=0;nt<Ke.length;nt++){const P=Ke[nt];let vt=null;if(V!==null)vt=V.getViewport(P);else{const at=O.getViewSubImage(G,P);vt=at.viewport,nt===0&&(o.setRenderTargetTextures(W,at.colorTexture,at.depthStencilTexture),o.setRenderTarget(W))}let Pn=A[nt];Pn===void 0&&(Pn=new n.ubm,Pn.layers.enable(nt),Pn.viewport=new n.IUQ,A[nt]=Pn),Pn.matrix.fromArray(P.transform.matrix),Pn.matrix.decompose(Pn.position,Pn.quaternion,Pn.scale),Pn.projectionMatrix.fromArray(P.projectionMatrix),Pn.projectionMatrixInverse.copy(Pn.projectionMatrix).invert(),Pn.viewport.set(vt.x,vt.y,vt.width,vt.height),nt===0&&(N.matrix.copy(Pn.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Nn===!0&&N.cameras.push(Pn)}const Fn=_.enabledFeatures;if(Fn&&Fn.includes("depth-sensing")&&_.depthUsage=="gpu-optimized"&&O){const nt=O.getDepthInformation(Ke[0]);nt&&nt.isValid&&nt.texture&&Z.init(nt,_.renderState)}if(Fn&&Fn.includes("camera-access")&&(o.state.unbindTexture(),O))for(let nt=0;nt<Ke.length;nt++){const P=Ke[nt].camera;if(P){let vt=E[P];vt||(vt=new nr,E[P]=vt);const Pn=O.getCameraImage(P);vt.sourceTexture=Pn}}}for(let Ke=0;Ke<L.length;Ke++){const Nn=fe[Ke],Fn=L[Ke];Nn!==null&&Fn!==void 0&&Fn.update(Nn,Je,H||w)}tt&&tt(Ee,Je),Je.detectedPlanes&&d.dispatchEvent({type:"planesdetected",data:Je}),pe=null}const St=new Br;St.setAnimationLoop(wt),this.setAnimationLoop=function(Ee){tt=Ee},this.dispose=function(){}}}const ai=new n.O9p,Ho=new n.kn4;function Ft(e,o){function r(E,p){E.matrixAutoUpdate===!0&&E.updateMatrix(),p.value.copy(E.matrix)}function d(E,p){p.color.getRGB(E.fogColor.value,(0,n._Ut)(e)),p.isFog?(E.fogNear.value=p.near,E.fogFar.value=p.far):p.isFogExp2&&(E.fogDensity.value=p.density)}function _(E,p,re,W,L){p.isMeshBasicMaterial||p.isMeshLambertMaterial?m(E,p):p.isMeshToonMaterial?(m(E,p),O(E,p)):p.isMeshPhongMaterial?(m(E,p),j(E,p)):p.isMeshStandardMaterial?(m(E,p),G(E,p),p.isMeshPhysicalMaterial&&V(E,p,L)):p.isMeshMatcapMaterial?(m(E,p),pe(E,p)):p.isMeshDepthMaterial?m(E,p):p.isMeshDistanceMaterial?(m(E,p),Z(E,p)):p.isMeshNormalMaterial?m(E,p):p.isLineBasicMaterial?(w(E,p),p.isLineDashedMaterial&&M(E,p)):p.isPointsMaterial?K(E,p,re,W):p.isSpriteMaterial?H(E,p):p.isShadowMaterial?(E.color.value.copy(p.color),E.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function m(E,p){E.opacity.value=p.opacity,p.color&&E.diffuse.value.copy(p.color),p.emissive&&E.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(E.map.value=p.map,r(p.map,E.mapTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap,r(p.alphaMap,E.alphaMapTransform)),p.bumpMap&&(E.bumpMap.value=p.bumpMap,r(p.bumpMap,E.bumpMapTransform),E.bumpScale.value=p.bumpScale,p.side===n.hsX&&(E.bumpScale.value*=-1)),p.normalMap&&(E.normalMap.value=p.normalMap,r(p.normalMap,E.normalMapTransform),E.normalScale.value.copy(p.normalScale),p.side===n.hsX&&E.normalScale.value.negate()),p.displacementMap&&(E.displacementMap.value=p.displacementMap,r(p.displacementMap,E.displacementMapTransform),E.displacementScale.value=p.displacementScale,E.displacementBias.value=p.displacementBias),p.emissiveMap&&(E.emissiveMap.value=p.emissiveMap,r(p.emissiveMap,E.emissiveMapTransform)),p.specularMap&&(E.specularMap.value=p.specularMap,r(p.specularMap,E.specularMapTransform)),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest);const re=o.get(p),W=re.envMap,L=re.envMapRotation;W&&(E.envMap.value=W,ai.copy(L),ai.x*=-1,ai.y*=-1,ai.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),E.envMapRotation.value.setFromMatrix4(Ho.makeRotationFromEuler(ai)),E.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=p.reflectivity,E.ior.value=p.ior,E.refractionRatio.value=p.refractionRatio),p.lightMap&&(E.lightMap.value=p.lightMap,E.lightMapIntensity.value=p.lightMapIntensity,r(p.lightMap,E.lightMapTransform)),p.aoMap&&(E.aoMap.value=p.aoMap,E.aoMapIntensity.value=p.aoMapIntensity,r(p.aoMap,E.aoMapTransform))}function w(E,p){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,p.map&&(E.map.value=p.map,r(p.map,E.mapTransform))}function M(E,p){E.dashSize.value=p.dashSize,E.totalSize.value=p.dashSize+p.gapSize,E.scale.value=p.scale}function K(E,p,re,W){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,E.size.value=p.size*re,E.scale.value=W*.5,p.map&&(E.map.value=p.map,r(p.map,E.uvTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap,r(p.alphaMap,E.alphaMapTransform)),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest)}function H(E,p){E.diffuse.value.copy(p.color),E.opacity.value=p.opacity,E.rotation.value=p.rotation,p.map&&(E.map.value=p.map,r(p.map,E.mapTransform)),p.alphaMap&&(E.alphaMap.value=p.alphaMap,r(p.alphaMap,E.alphaMapTransform)),p.alphaTest>0&&(E.alphaTest.value=p.alphaTest)}function j(E,p){E.specular.value.copy(p.specular),E.shininess.value=Math.max(p.shininess,1e-4)}function O(E,p){p.gradientMap&&(E.gradientMap.value=p.gradientMap)}function G(E,p){E.metalness.value=p.metalness,p.metalnessMap&&(E.metalnessMap.value=p.metalnessMap,r(p.metalnessMap,E.metalnessMapTransform)),E.roughness.value=p.roughness,p.roughnessMap&&(E.roughnessMap.value=p.roughnessMap,r(p.roughnessMap,E.roughnessMapTransform)),p.envMap&&(E.envMapIntensity.value=p.envMapIntensity)}function V(E,p,re){E.ior.value=p.ior,p.sheen>0&&(E.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),E.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(E.sheenColorMap.value=p.sheenColorMap,r(p.sheenColorMap,E.sheenColorMapTransform)),p.sheenRoughnessMap&&(E.sheenRoughnessMap.value=p.sheenRoughnessMap,r(p.sheenRoughnessMap,E.sheenRoughnessMapTransform))),p.clearcoat>0&&(E.clearcoat.value=p.clearcoat,E.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(E.clearcoatMap.value=p.clearcoatMap,r(p.clearcoatMap,E.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,r(p.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(E.clearcoatNormalMap.value=p.clearcoatNormalMap,r(p.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===n.hsX&&E.clearcoatNormalScale.value.negate())),p.dispersion>0&&(E.dispersion.value=p.dispersion),p.iridescence>0&&(E.iridescence.value=p.iridescence,E.iridescenceIOR.value=p.iridescenceIOR,E.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(E.iridescenceMap.value=p.iridescenceMap,r(p.iridescenceMap,E.iridescenceMapTransform)),p.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=p.iridescenceThicknessMap,r(p.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),p.transmission>0&&(E.transmission.value=p.transmission,E.transmissionSamplerMap.value=re.texture,E.transmissionSamplerSize.value.set(re.width,re.height),p.transmissionMap&&(E.transmissionMap.value=p.transmissionMap,r(p.transmissionMap,E.transmissionMapTransform)),E.thickness.value=p.thickness,p.thicknessMap&&(E.thicknessMap.value=p.thicknessMap,r(p.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=p.attenuationDistance,E.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(E.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(E.anisotropyMap.value=p.anisotropyMap,r(p.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=p.specularIntensity,E.specularColor.value.copy(p.specularColor),p.specularColorMap&&(E.specularColorMap.value=p.specularColorMap,r(p.specularColorMap,E.specularColorMapTransform)),p.specularIntensityMap&&(E.specularIntensityMap.value=p.specularIntensityMap,r(p.specularIntensityMap,E.specularIntensityMapTransform))}function pe(E,p){p.matcap&&(E.matcap.value=p.matcap)}function Z(E,p){const re=o.get(p).light;E.referencePosition.value.setFromMatrixPosition(re.matrixWorld),E.nearDistance.value=re.shadow.camera.near,E.farDistance.value=re.shadow.camera.far}return{refreshFogUniforms:d,refreshMaterialUniforms:_}}function Wt(e,o,r,d){let _={},m={},w=[];const M=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function K(re,W){const L=W.program;d.uniformBlockBinding(re,L)}function H(re,W){let L=_[re.id];L===void 0&&(pe(re),L=j(re),_[re.id]=L,re.addEventListener("dispose",E));const fe=W.program;d.updateUBOMapping(re,fe);const $=o.render.frame;m[re.id]!==$&&(G(re),m[re.id]=$)}function j(re){const W=O();re.__bindingPointIndex=W;const L=e.createBuffer(),fe=re.__size,$=re.usage;return e.bindBuffer(e.UNIFORM_BUFFER,L),e.bufferData(e.UNIFORM_BUFFER,fe,$),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,W,L),L}function O(){for(let re=0;re<M;re++)if(w.indexOf(re)===-1)return w.push(re),re;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(re){const W=_[re.id],L=re.uniforms,fe=re.__cache;e.bindBuffer(e.UNIFORM_BUFFER,W);for(let $=0,te=L.length;$<te;$++){const Se=Array.isArray(L[$])?L[$]:[L[$]];for(let y=0,A=Se.length;y<A;y++){const N=Se[y];if(V(N,$,y,fe)===!0){const Ne=N.__offset,De=Array.isArray(N.value)?N.value:[N.value];let Re=0;for(let ze=0;ze<De.length;ze++){const Ue=De[ze],Qe=Z(Ue);typeof Ue=="number"||typeof Ue=="boolean"?(N.__data[0]=Ue,e.bufferSubData(e.UNIFORM_BUFFER,Ne+Re,N.__data)):Ue.isMatrix3?(N.__data[0]=Ue.elements[0],N.__data[1]=Ue.elements[1],N.__data[2]=Ue.elements[2],N.__data[3]=0,N.__data[4]=Ue.elements[3],N.__data[5]=Ue.elements[4],N.__data[6]=Ue.elements[5],N.__data[7]=0,N.__data[8]=Ue.elements[6],N.__data[9]=Ue.elements[7],N.__data[10]=Ue.elements[8],N.__data[11]=0):(Ue.toArray(N.__data,Re),Re+=Qe.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,Ne,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function V(re,W,L,fe){const $=re.value,te=W+"_"+L;if(fe[te]===void 0)return typeof $=="number"||typeof $=="boolean"?fe[te]=$:fe[te]=$.clone(),!0;{const Se=fe[te];if(typeof $=="number"||typeof $=="boolean"){if(Se!==$)return fe[te]=$,!0}else if(Se.equals($)===!1)return Se.copy($),!0}return!1}function pe(re){const W=re.uniforms;let L=0;const fe=16;for(let te=0,Se=W.length;te<Se;te++){const y=Array.isArray(W[te])?W[te]:[W[te]];for(let A=0,N=y.length;A<N;A++){const Ne=y[A],De=Array.isArray(Ne.value)?Ne.value:[Ne.value];for(let Re=0,ze=De.length;Re<ze;Re++){const Ue=De[Re],Qe=Z(Ue),ve=L%fe,Cn=ve%Qe.boundary,In=ve+Cn;L+=Cn,In!==0&&fe-In<Qe.storage&&(L+=fe-In),Ne.__data=new Float32Array(Qe.storage/Float32Array.BYTES_PER_ELEMENT),Ne.__offset=L,L+=Qe.storage}}}const $=L%fe;return $>0&&(L+=fe-$),re.__size=L,re.__cache={},this}function Z(re){const W={boundary:0,storage:0};return typeof re=="number"||typeof re=="boolean"?(W.boundary=4,W.storage=4):re.isVector2?(W.boundary=8,W.storage=8):re.isVector3||re.isColor?(W.boundary=16,W.storage=12):re.isVector4?(W.boundary=16,W.storage=16):re.isMatrix3?(W.boundary=48,W.storage=48):re.isMatrix4?(W.boundary=64,W.storage=64):re.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",re),W}function E(re){const W=re.target;W.removeEventListener("dispose",E);const L=w.indexOf(W.__bindingPointIndex);w.splice(L,1),e.deleteBuffer(_[W.id]),delete _[W.id],delete m[W.id]}function p(){for(const re in _)e.deleteBuffer(_[re]);w=[],_={},m={}}return{bind:K,update:H,dispose:p}}class Ot{constructor(o={}){const{canvas:r=(0,n.lPF)(),context:d=null,depth:_=!0,stencil:m=!1,alpha:w=!1,antialias:M=!1,premultipliedAlpha:K=!0,preserveDrawingBuffer:H=!1,powerPreference:j="default",failIfMajorPerformanceCaveat:O=!1,reversedDepthBuffer:G=!1}=o;this.isWebGLRenderer=!0;let V;if(d!==null){if(typeof WebGLRenderingContext<"u"&&d instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");V=d.getContextAttributes().alpha}else V=w;const pe=new Uint32Array(4),Z=new Int32Array(4);let E=null,p=null;const re=[],W=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=n.y_p,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let fe=!1;this._outputColorSpace=n.er$;let $=0,te=0,Se=null,y=-1,A=null;const N=new n.IUQ,Ne=new n.IUQ;let De=null;const Re=new n.Q1f(0);let ze=0,Ue=r.width,Qe=r.height,ve=1,Cn=null,In=null;const Zn=new n.IUQ(0,0,Ue,Qe),tt=new n.IUQ(0,0,Ue,Qe);let wt=!1;const St=new n.PPD;let Ee=!1,Je=!1;const Ke=new n.kn4,Nn=new n.Pq0,Fn=new n.IUQ,zn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function nt(){return Se===null?ve:1}let P=d;function vt(v,B){return r.getContext(v,B)}try{const v={alpha:!0,depth:_,stencil:m,antialias:M,premultipliedAlpha:K,preserveDrawingBuffer:H,powerPreference:j,failIfMajorPerformanceCaveat:O};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${n.sPf}`),r.addEventListener("webglcontextlost",qe,!1),r.addEventListener("webglcontextrestored",un,!1),r.addEventListener("webglcontextcreationerror",Be,!1),P===null){const B="webgl2";if(P=vt(B,v),P===null)throw vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Pn,at,yn,Tt,hn,jn,Lt,Ut,b,h,Y,me,Oe,de,Rn,Ye,Tn,xn,He,rn,Gn,An,$e,Kn;function D(){Pn=new Xe(P),Pn.init(),An=new Mi(P,Pn),at=new _e(P,Pn,o,An),yn=new Oi(P,Pn),at.reversedDepthBuffer&&G&&yn.buffers.depth.setReversed(!0),Tt=new Dn(P),hn=new er,jn=new La(P,Pn,yn,hn,at,An,Tt),Lt=new ue(L),Ut=new vn(L),b=new Na(P),$e=new ee(P,b),h=new Fe(P,b,Tt,$e),Y=new Sn(P,h,b,Tt),He=new ln(P,at,jn),Ye=new q(hn),me=new ba(L,Lt,Ut,Pn,at,$e,Ye),Oe=new Ft(L,hn),de=new Dr,Rn=new Fi(Pn),xn=new se(L,Lt,Ut,yn,Y,V,K),Tn=new Nr(L,Y,at),Kn=new Wt(P,Tt,at,yn),rn=new le(P,Pn,Tt),Gn=new Yn(P,Pn,Tt),Tt.programs=me.programs,L.capabilities=at,L.extensions=Pn,L.properties=hn,L.renderLists=de,L.shadowMap=Tn,L.state=yn,L.info=Tt}D();const Ve=new ir(L,P);this.xr=Ve,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const v=Pn.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Pn.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(v){v!==void 0&&(ve=v,this.setSize(Ue,Qe,!1))},this.getSize=function(v){return v.set(Ue,Qe)},this.setSize=function(v,B,J=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=v,Qe=B,r.width=Math.floor(v*ve),r.height=Math.floor(B*ve),J===!0&&(r.style.width=v+"px",r.style.height=B+"px"),this.setViewport(0,0,v,B)},this.getDrawingBufferSize=function(v){return v.set(Ue*ve,Qe*ve).floor()},this.setDrawingBufferSize=function(v,B,J){Ue=v,Qe=B,ve=J,r.width=Math.floor(v*J),r.height=Math.floor(B*J),this.setViewport(0,0,v,B)},this.getCurrentViewport=function(v){return v.copy(N)},this.getViewport=function(v){return v.copy(Zn)},this.setViewport=function(v,B,J,ie){v.isVector4?Zn.set(v.x,v.y,v.z,v.w):Zn.set(v,B,J,ie),yn.viewport(N.copy(Zn).multiplyScalar(ve).round())},this.getScissor=function(v){return v.copy(tt)},this.setScissor=function(v,B,J,ie){v.isVector4?tt.set(v.x,v.y,v.z,v.w):tt.set(v,B,J,ie),yn.scissor(Ne.copy(tt).multiplyScalar(ve).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(v){yn.setScissorTest(wt=v)},this.setOpaqueSort=function(v){Cn=v},this.setTransparentSort=function(v){In=v},this.getClearColor=function(v){return v.copy(xn.getClearColor())},this.setClearColor=function(){xn.setClearColor(...arguments)},this.getClearAlpha=function(){return xn.getClearAlpha()},this.setClearAlpha=function(){xn.setClearAlpha(...arguments)},this.clear=function(v=!0,B=!0,J=!0){let ie=0;if(v){let k=!1;if(Se!==null){const ke=Se.texture.format;k=ke===n.c90||ke===n.TkQ||ke===n.ZQM}if(k){const ke=Se.texture.type,nn=ke===n.OUM||ke===n.bkx||ke===n.cHt||ke===n.V3x||ke===n.Wew||ke===n.gJ2,mn=xn.getClearColor(),cn=xn.getClearAlpha(),On=mn.r,kn=mn.g,wn=mn.b;nn?(pe[0]=On,pe[1]=kn,pe[2]=wn,pe[3]=cn,P.clearBufferuiv(P.COLOR,0,pe)):(Z[0]=On,Z[1]=kn,Z[2]=wn,Z[3]=cn,P.clearBufferiv(P.COLOR,0,Z))}else ie|=P.COLOR_BUFFER_BIT}B&&(ie|=P.DEPTH_BUFFER_BIT),J&&(ie|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",qe,!1),r.removeEventListener("webglcontextrestored",un,!1),r.removeEventListener("webglcontextcreationerror",Be,!1),xn.dispose(),de.dispose(),Rn.dispose(),hn.dispose(),Lt.dispose(),Ut.dispose(),Y.dispose(),$e.dispose(),Kn.dispose(),me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",oi),Ve.removeEventListener("sessionend",is),Bi.stop()};function qe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),fe=!0}function un(){console.log("THREE.WebGLRenderer: Context Restored."),fe=!1;const v=Tt.autoReset,B=Tn.enabled,J=Tn.autoUpdate,ie=Tn.needsUpdate,k=Tn.type;D(),Tt.autoReset=v,Tn.enabled=B,Tn.autoUpdate=J,Tn.needsUpdate=ie,Tn.type=k}function Be(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function be(v){const B=v.target;B.removeEventListener("dispose",be),gn(B)}function gn(v){Xn(v),hn.remove(v)}function Xn(v){const B=hn.get(v).programs;B!==void 0&&(B.forEach(function(J){me.releaseProgram(J)}),v.isShaderMaterial&&me.releaseShaderCache(v))}this.renderBufferDirect=function(v,B,J,ie,k,ke){B===null&&(B=zn);const nn=k.isMesh&&k.matrixWorld.determinant()<0,mn=fs(v,B,J,ie,k);yn.setMaterial(ie,nn);let cn=J.index,On=1;if(ie.wireframe===!0){if(cn=h.getWireframeAttribute(J),cn===void 0)return;On=2}const kn=J.drawRange,wn=J.attributes.position;let $n=kn.start*On,ft=(kn.start+kn.count)*On;ke!==null&&($n=Math.max($n,ke.start*On),ft=Math.min(ft,(ke.start+ke.count)*On)),cn!==null?($n=Math.max($n,0),ft=Math.min(ft,cn.count)):wn!=null&&($n=Math.max($n,0),ft=Math.min(ft,wn.count));const Rt=ft-$n;if(Rt<0||Rt===1/0)return;$e.setup(k,ie,mn,J,cn);let Et,dt=rn;if(cn!==null&&(Et=b.get(cn),dt=Gn,dt.setIndex(Et)),k.isMesh)ie.wireframe===!0?(yn.setLineWidth(ie.wireframeLinewidth*nt()),dt.setMode(P.LINES)):dt.setMode(P.TRIANGLES);else if(k.isLine){let Ln=ie.linewidth;Ln===void 0&&(Ln=1),yn.setLineWidth(Ln*nt()),k.isLineSegments?dt.setMode(P.LINES):k.isLineLoop?dt.setMode(P.LINE_LOOP):dt.setMode(P.LINE_STRIP)}else k.isPoints?dt.setMode(P.POINTS):k.isSprite&&dt.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)(0,n.mcG)("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Pn.get("WEBGL_multi_draw"))dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ln=k._multiDrawStarts,Mt=k._multiDrawCounts,it=k._multiDrawCount,zt=cn?b.get(cn).bytesPerElement:1,rr=hn.get(ie).currentProgram.getUniforms();for(let Xt=0;Xt<it;Xt++)rr.setValue(P,"_gl_DrawID",Xt),dt.render(Ln[Xt]/zt,Mt[Xt])}else if(k.isInstancedMesh)dt.renderInstances($n,Rt,k.count);else if(J.isInstancedBufferGeometry){const Ln=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mt=Math.min(J.instanceCount,Ln);dt.renderInstances($n,Rt,Mt)}else dt.render($n,Rt)};function _t(v,B,J){v.transparent===!0&&v.side===n.$EB&&v.forceSinglePass===!1?(v.side=n.hsX,v.needsUpdate=!0,Ia(v,B,J),v.side=n.hB5,v.needsUpdate=!0,Ia(v,B,J),v.side=n.$EB):Ia(v,B,J)}this.compile=function(v,B,J=null){J===null&&(J=v),p=Rn.get(J),p.init(B),W.push(p),J.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),v!==J&&v.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const ie=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ke=k.material;if(ke)if(Array.isArray(ke))for(let nn=0;nn<ke.length;nn++){const mn=ke[nn];_t(mn,J,k),ie.add(mn)}else _t(ke,J,k),ie.add(ke)}),p=W.pop(),ie},this.compileAsync=function(v,B,J=null){const ie=this.compile(v,B,J);return new Promise(k=>{function ke(){if(ie.forEach(function(nn){hn.get(nn).currentProgram.isReady()&&ie.delete(nn)}),ie.size===0){k(v);return}setTimeout(ke,10)}Pn.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let st=null;function ui(v){st&&st(v)}function oi(){Bi.stop()}function is(){Bi.start()}const Bi=new Br;Bi.setAnimationLoop(ui),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(v){st=v,Ve.setAnimationLoop(v),v===null?Bi.stop():Bi.start()},Ve.addEventListener("sessionstart",oi),Ve.addEventListener("sessionend",is),this.render=function(v,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(fe===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(B),B=Ve.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,B,Se),p=Rn.get(v,W.length),p.init(B),W.push(p),Ke.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),St.setFromProjectionMatrix(Ke,n.TdN,B.reversedDepth),Je=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,Je),E=de.get(v,re.length),E.init(),re.push(E),Ve.enabled===!0&&Ve.isPresenting===!0){const ke=L.xr.getDepthSensingMesh();ke!==null&&Vo(ke,B,-1/0,L.sortObjects)}Vo(v,B,0,L.sortObjects),E.finish(),L.sortObjects===!0&&E.sort(Cn,In),Ct=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Ct&&xn.addToRenderList(E,v),this.info.render.frame++,Ee===!0&&Ye.beginShadows();const J=p.state.shadowsArray;Tn.render(J,v,B),Ee===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=E.opaque,k=E.transmissive;if(p.setupLights(),B.isArrayCamera){const ke=B.cameras;if(k.length>0)for(let nn=0,mn=ke.length;nn<mn;nn++){const cn=ke[nn];as(ie,k,v,cn)}Ct&&xn.render(v);for(let nn=0,mn=ke.length;nn<mn;nn++){const cn=ke[nn];rs(E,v,cn,cn.viewport)}}else k.length>0&&as(ie,k,v,B),Ct&&xn.render(v),rs(E,v,B);Se!==null&&te===0&&(jn.updateMultisampleRenderTarget(Se),jn.updateRenderTargetMipmap(Se)),v.isScene===!0&&v.onAfterRender(L,v,B),$e.resetDefaultState(),y=-1,A=null,W.pop(),W.length>0?(p=W[W.length-1],Ee===!0&&Ye.setGlobalState(L.clippingPlanes,p.state.camera)):p=null,re.pop(),re.length>0?E=re[re.length-1]:E=null};function Vo(v,B,J,ie){if(v.visible===!1)return;if(v.layers.test(B.layers)){if(v.isGroup)J=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(B);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||St.intersectsSprite(v)){ie&&Fn.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ke);const nn=Y.update(v),mn=v.material;mn.visible&&E.push(v,nn,mn,J,Fn.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||St.intersectsObject(v))){const nn=Y.update(v),mn=v.material;if(ie&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Fn.copy(v.boundingSphere.center)):(nn.boundingSphere===null&&nn.computeBoundingSphere(),Fn.copy(nn.boundingSphere.center)),Fn.applyMatrix4(v.matrixWorld).applyMatrix4(Ke)),Array.isArray(mn)){const cn=nn.groups;for(let On=0,kn=cn.length;On<kn;On++){const wn=cn[On],$n=mn[wn.materialIndex];$n&&$n.visible&&E.push(v,nn,$n,J,Fn.z,wn)}}else mn.visible&&E.push(v,nn,mn,J,Fn.z,null)}}const ke=v.children;for(let nn=0,mn=ke.length;nn<mn;nn++)Vo(ke[nn],B,J,ie)}function rs(v,B,J,ie){const k=v.opaque,ke=v.transmissive,nn=v.transparent;p.setupLightsView(J),Ee===!0&&Ye.setGlobalState(L.clippingPlanes,J),ie&&yn.viewport(N.copy(ie)),k.length>0&&Da(k,B,J),ke.length>0&&Da(ke,B,J),nn.length>0&&Da(nn,B,J),yn.buffers.depth.setTest(!0),yn.buffers.depth.setMask(!0),yn.buffers.color.setMask(!0),yn.setPolygonOffset(!1)}function as(v,B,J,ie){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new n.nWS(1,1,{generateMipmaps:!0,type:Pn.has("EXT_color_buffer_half_float")||Pn.has("EXT_color_buffer_float")?n.ix0:n.OUM,minFilter:n.$_I,samples:4,stencilBuffer:m,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:n.ppV.workingColorSpace}));const ke=p.state.transmissionRenderTarget[ie.id],nn=ie.viewport||N;ke.setSize(nn.z*L.transmissionResolutionScale,nn.w*L.transmissionResolutionScale);const mn=L.getRenderTarget(),cn=L.getActiveCubeFace(),On=L.getActiveMipmapLevel();L.setRenderTarget(ke),L.getClearColor(Re),ze=L.getClearAlpha(),ze<1&&L.setClearColor(16777215,.5),L.clear(),Ct&&xn.render(J);const kn=L.toneMapping;L.toneMapping=n.y_p;const wn=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),Ee===!0&&Ye.setGlobalState(L.clippingPlanes,ie),Da(v,J,ie),jn.updateMultisampleRenderTarget(ke),jn.updateRenderTargetMipmap(ke),Pn.has("WEBGL_multisampled_render_to_texture")===!1){let $n=!1;for(let ft=0,Rt=B.length;ft<Rt;ft++){const Et=B[ft],dt=Et.object,Ln=Et.geometry,Mt=Et.material,it=Et.group;if(Mt.side===n.$EB&&dt.layers.test(ie.layers)){const zt=Mt.side;Mt.side=n.hsX,Mt.needsUpdate=!0,os(dt,J,ie,Ln,Mt,it),Mt.side=zt,Mt.needsUpdate=!0,$n=!0}}$n===!0&&(jn.updateMultisampleRenderTarget(ke),jn.updateRenderTargetMipmap(ke))}L.setRenderTarget(mn,cn,On),L.setClearColor(Re,ze),wn!==void 0&&(ie.viewport=wn),L.toneMapping=kn}function Da(v,B,J){const ie=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ke=v.length;k<ke;k++){const nn=v[k],mn=nn.object,cn=nn.geometry,On=nn.group;let kn=nn.material;kn.allowOverride===!0&&ie!==null&&(kn=ie),mn.layers.test(J.layers)&&os(mn,B,J,cn,kn,On)}}function os(v,B,J,ie,k,ke){v.onBeforeRender(L,B,J,ie,k,ke),v.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(L,B,J,ie,v,ke),k.transparent===!0&&k.side===n.$EB&&k.forceSinglePass===!1?(k.side=n.hsX,k.needsUpdate=!0,L.renderBufferDirect(J,B,ie,k,v,ke),k.side=n.hB5,k.needsUpdate=!0,L.renderBufferDirect(J,B,ie,k,v,ke),k.side=n.$EB):L.renderBufferDirect(J,B,ie,k,v,ke),v.onAfterRender(L,B,J,ie,k,ke)}function Ia(v,B,J){B.isScene!==!0&&(B=zn);const ie=hn.get(v),k=p.state.lights,ke=p.state.shadowsArray,nn=k.state.version,mn=me.getParameters(v,k.state,ke,B,J),cn=me.getProgramCacheKey(mn);let On=ie.programs;ie.environment=v.isMeshStandardMaterial?B.environment:null,ie.fog=B.fog,ie.envMap=(v.isMeshStandardMaterial?Ut:Lt).get(v.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&v.envMap===null?B.environmentRotation:v.envMapRotation,On===void 0&&(v.addEventListener("dispose",be),On=new Map,ie.programs=On);let kn=On.get(cn);if(kn!==void 0){if(ie.currentProgram===kn&&ie.lightsStateVersion===nn)return ls(v,mn),kn}else mn.uniforms=me.getUniforms(v),v.onBeforeCompile(mn,L),kn=me.acquireProgram(mn,cn),On.set(cn,kn),ie.uniforms=mn.uniforms;const wn=ie.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(wn.clippingPlanes=Ye.uniform),ls(v,mn),ie.needsLights=ds(v),ie.lightsStateVersion=nn,ie.needsLights&&(wn.ambientLightColor.value=k.state.ambient,wn.lightProbe.value=k.state.probe,wn.directionalLights.value=k.state.directional,wn.directionalLightShadows.value=k.state.directionalShadow,wn.spotLights.value=k.state.spot,wn.spotLightShadows.value=k.state.spotShadow,wn.rectAreaLights.value=k.state.rectArea,wn.ltc_1.value=k.state.rectAreaLTC1,wn.ltc_2.value=k.state.rectAreaLTC2,wn.pointLights.value=k.state.point,wn.pointLightShadows.value=k.state.pointShadow,wn.hemisphereLights.value=k.state.hemi,wn.directionalShadowMap.value=k.state.directionalShadowMap,wn.directionalShadowMatrix.value=k.state.directionalShadowMatrix,wn.spotShadowMap.value=k.state.spotShadowMap,wn.spotLightMatrix.value=k.state.spotLightMatrix,wn.spotLightMap.value=k.state.spotLightMap,wn.pointShadowMap.value=k.state.pointShadowMap,wn.pointShadowMatrix.value=k.state.pointShadowMatrix),ie.currentProgram=kn,ie.uniformsList=null,kn}function ss(v){if(v.uniformsList===null){const B=v.currentProgram.getUniforms();v.uniformsList=mi.seqWithValue(B.seq,v.uniforms)}return v.uniformsList}function ls(v,B){const J=hn.get(v);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function fs(v,B,J,ie,k){B.isScene!==!0&&(B=zn),jn.resetTextureUnits();const ke=B.fog,nn=ie.isMeshStandardMaterial?B.environment:null,mn=Se===null?L.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:n.Zr2,cn=(ie.isMeshStandardMaterial?Ut:Lt).get(ie.envMap||nn),On=ie.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,kn=!!J.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),wn=!!J.morphAttributes.position,$n=!!J.morphAttributes.normal,ft=!!J.morphAttributes.color;let Rt=n.y_p;ie.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Rt=L.toneMapping);const Et=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=Et!==void 0?Et.length:0,Ln=hn.get(ie),Mt=p.state.lights;if(Ee===!0&&(Je===!0||v!==A)){const Gt=v===A&&ie.id===y;Ye.setState(ie,v,Gt)}let it=!1;ie.version===Ln.__version?(Ln.needsLights&&Ln.lightsStateVersion!==Mt.state.version||Ln.outputColorSpace!==mn||k.isBatchedMesh&&Ln.batching===!1||!k.isBatchedMesh&&Ln.batching===!0||k.isBatchedMesh&&Ln.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ln.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ln.instancing===!1||!k.isInstancedMesh&&Ln.instancing===!0||k.isSkinnedMesh&&Ln.skinning===!1||!k.isSkinnedMesh&&Ln.skinning===!0||k.isInstancedMesh&&Ln.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ln.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ln.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ln.instancingMorph===!1&&k.morphTexture!==null||Ln.envMap!==cn||ie.fog===!0&&Ln.fog!==ke||Ln.numClippingPlanes!==void 0&&(Ln.numClippingPlanes!==Ye.numPlanes||Ln.numIntersection!==Ye.numIntersection)||Ln.vertexAlphas!==On||Ln.vertexTangents!==kn||Ln.morphTargets!==wn||Ln.morphNormals!==$n||Ln.morphColors!==ft||Ln.toneMapping!==Rt||Ln.morphTargetsCount!==dt)&&(it=!0):(it=!0,Ln.__version=ie.version);let zt=Ln.currentProgram;it===!0&&(zt=Ia(ie,B,k));let rr=!1,Xt=!1,Or=!1;const xt=zt.getUniforms(),Kt=Ln.uniforms;if(yn.useProgram(zt.program)&&(rr=!0,Xt=!0,Or=!0),ie.id!==y&&(y=ie.id,Xt=!0),rr||A!==v){yn.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),xt.setValue(P,"projectionMatrix",v.projectionMatrix),xt.setValue(P,"viewMatrix",v.matrixWorldInverse);const Ht=xt.map.cameraPosition;Ht!==void 0&&Ht.setValue(P,Nn.setFromMatrixPosition(v.matrixWorld)),at.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&xt.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),A!==v&&(A=v,Xt=!0,Or=!0)}if(k.isSkinnedMesh){xt.setOptional(P,k,"bindMatrix"),xt.setOptional(P,k,"bindMatrixInverse");const Gt=k.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),xt.setValue(P,"boneTexture",Gt.boneTexture,jn))}k.isBatchedMesh&&(xt.setOptional(P,k,"batchingTexture"),xt.setValue(P,"batchingTexture",k._matricesTexture,jn),xt.setOptional(P,k,"batchingIdTexture"),xt.setValue(P,"batchingIdTexture",k._indirectTexture,jn),xt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&xt.setValue(P,"batchingColorTexture",k._colorsTexture,jn));const qt=J.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&He.update(k,J,zt),(Xt||Ln.receiveShadow!==k.receiveShadow)&&(Ln.receiveShadow=k.receiveShadow,xt.setValue(P,"receiveShadow",k.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Kt.envMap.value=cn,Kt.flipEnvMap.value=cn.isCubeTexture&&cn.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&B.environment!==null&&(Kt.envMapIntensity.value=B.environmentIntensity),Xt&&(xt.setValue(P,"toneMappingExposure",L.toneMappingExposure),Ln.needsLights&&us(Kt,Or),ke&&ie.fog===!0&&Oe.refreshFogUniforms(Kt,ke),Oe.refreshMaterialUniforms(Kt,ie,ve,Qe,p.state.transmissionRenderTarget[v.id]),mi.upload(P,ss(Ln),Kt,jn)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(mi.upload(P,ss(Ln),Kt,jn),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&xt.setValue(P,"center",k.center),xt.setValue(P,"modelViewMatrix",k.modelViewMatrix),xt.setValue(P,"normalMatrix",k.normalMatrix),xt.setValue(P,"modelMatrix",k.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Gt=ie.uniformsGroups;for(let Ht=0,Wo=Gt.length;Ht<Wo;Ht++){const Gi=Gt[Ht];Kn.update(Gi,zt),Kn.bind(Gi,zt)}}return zt}function us(v,B){v.ambientLightColor.needsUpdate=B,v.lightProbe.needsUpdate=B,v.directionalLights.needsUpdate=B,v.directionalLightShadows.needsUpdate=B,v.pointLights.needsUpdate=B,v.pointLightShadows.needsUpdate=B,v.spotLights.needsUpdate=B,v.spotLightShadows.needsUpdate=B,v.rectAreaLights.needsUpdate=B,v.hemisphereLights.needsUpdate=B}function ds(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return Se},this.setRenderTargetTextures=function(v,B,J){const ie=hn.get(v);ie.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),hn.get(v.texture).__webglTexture=B,hn.get(v.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:J,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,B){const J=hn.get(v);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0};const ps=P.createFramebuffer();this.setRenderTarget=function(v,B=0,J=0){Se=v,$=B,te=J;let ie=!0,k=null,ke=!1,nn=!1;if(v){const cn=hn.get(v);if(cn.__useDefaultFramebuffer!==void 0)yn.bindFramebuffer(P.FRAMEBUFFER,null),ie=!1;else if(cn.__webglFramebuffer===void 0)jn.setupRenderTarget(v);else if(cn.__hasExternalTextures)jn.rebindTextures(v,hn.get(v.texture).__webglTexture,hn.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const wn=v.depthTexture;if(cn.__boundDepthTexture!==wn){if(wn!==null&&hn.has(wn)&&(v.width!==wn.image.width||v.height!==wn.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");jn.setupDepthRenderbuffer(v)}}const On=v.texture;(On.isData3DTexture||On.isDataArrayTexture||On.isCompressedArrayTexture)&&(nn=!0);const kn=hn.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(kn[B])?k=kn[B][J]:k=kn[B],ke=!0):v.samples>0&&jn.useMultisampledRTT(v)===!1?k=hn.get(v).__webglMultisampledFramebuffer:Array.isArray(kn)?k=kn[J]:k=kn,N.copy(v.viewport),Ne.copy(v.scissor),De=v.scissorTest}else N.copy(Zn).multiplyScalar(ve).floor(),Ne.copy(tt).multiplyScalar(ve).floor(),De=wt;if(J!==0&&(k=ps),yn.bindFramebuffer(P.FRAMEBUFFER,k)&&ie&&yn.drawBuffers(v,k),yn.viewport(N),yn.scissor(Ne),yn.setScissorTest(De),ke){const cn=hn.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,cn.__webglTexture,J)}else if(nn){const cn=B;for(let On=0;On<v.textures.length;On++){const kn=hn.get(v.textures[On]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+On,kn.__webglTexture,J,cn)}}else if(v!==null&&J!==0){const cn=hn.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,cn.__webglTexture,J)}y=-1},this.readRenderTargetPixels=function(v,B,J,ie,k,ke,nn,mn=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let cn=hn.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&nn!==void 0&&(cn=cn[nn]),cn){yn.bindFramebuffer(P.FRAMEBUFFER,cn);try{const On=v.textures[mn],kn=On.format,wn=On.type;if(!at.textureFormatReadable(kn)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(wn)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=v.width-ie&&J>=0&&J<=v.height-k&&(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mn),P.readPixels(B,J,ie,k,An.convert(kn),An.convert(wn),ke))}finally{const On=Se!==null?hn.get(Se).__webglFramebuffer:null;yn.bindFramebuffer(P.FRAMEBUFFER,On)}}},this.readRenderTargetPixelsAsync=async function(v,B,J,ie,k,ke,nn,mn=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let cn=hn.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&nn!==void 0&&(cn=cn[nn]),cn)if(B>=0&&B<=v.width-ie&&J>=0&&J<=v.height-k){yn.bindFramebuffer(P.FRAMEBUFFER,cn);const On=v.textures[mn],kn=On.format,wn=On.type;if(!at.textureFormatReadable(kn))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(wn))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $n=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$n),P.bufferData(P.PIXEL_PACK_BUFFER,ke.byteLength,P.STREAM_READ),v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+mn),P.readPixels(B,J,ie,k,An.convert(kn),An.convert(wn),0);const ft=Se!==null?hn.get(Se).__webglFramebuffer:null;yn.bindFramebuffer(P.FRAMEBUFFER,ft);const Rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await(0,n.jej)(P,Rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$n),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ke),P.deleteBuffer($n),P.deleteSync(Rt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,B=null,J=0){const ie=Math.pow(2,-J),k=Math.floor(v.image.width*ie),ke=Math.floor(v.image.height*ie),nn=B!==null?B.x:0,mn=B!==null?B.y:0;jn.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,J,0,0,nn,mn,k,ke),yn.unbindTexture()};const hs=P.createFramebuffer(),ms=P.createFramebuffer();this.copyTextureToTexture=function(v,B,J=null,ie=null,k=0,ke=null){ke===null&&(k!==0?((0,n.mcG)("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ke=k,k=0):ke=0);let nn,mn,cn,On,kn,wn,$n,ft,Rt;const Et=v.isCompressedTexture?v.mipmaps[ke]:v.image;if(J!==null)nn=J.max.x-J.min.x,mn=J.max.y-J.min.y,cn=J.isBox3?J.max.z-J.min.z:1,On=J.min.x,kn=J.min.y,wn=J.isBox3?J.min.z:0;else{const qt=Math.pow(2,-k);nn=Math.floor(Et.width*qt),mn=Math.floor(Et.height*qt),v.isDataArrayTexture?cn=Et.depth:v.isData3DTexture?cn=Math.floor(Et.depth*qt):cn=1,On=0,kn=0,wn=0}ie!==null?($n=ie.x,ft=ie.y,Rt=ie.z):($n=0,ft=0,Rt=0);const dt=An.convert(B.format),Ln=An.convert(B.type);let Mt;B.isData3DTexture?(jn.setTexture3D(B,0),Mt=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(jn.setTexture2DArray(B,0),Mt=P.TEXTURE_2D_ARRAY):(jn.setTexture2D(B,0),Mt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const it=P.getParameter(P.UNPACK_ROW_LENGTH),zt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rr=P.getParameter(P.UNPACK_SKIP_PIXELS),Xt=P.getParameter(P.UNPACK_SKIP_ROWS),Or=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Et.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Et.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,On),P.pixelStorei(P.UNPACK_SKIP_ROWS,kn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wn);const xt=v.isDataArrayTexture||v.isData3DTexture,Kt=B.isDataArrayTexture||B.isData3DTexture;if(v.isDepthTexture){const qt=hn.get(v),Gt=hn.get(B),Ht=hn.get(qt.__renderTarget),Wo=hn.get(Gt.__renderTarget);yn.bindFramebuffer(P.READ_FRAMEBUFFER,Ht.__webglFramebuffer),yn.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let Gi=0;Gi<cn;Gi++)xt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,hn.get(v).__webglTexture,k,wn+Gi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,hn.get(B).__webglTexture,ke,Rt+Gi)),P.blitFramebuffer(On,kn,nn,mn,$n,ft,nn,mn,P.DEPTH_BUFFER_BIT,P.NEAREST);yn.bindFramebuffer(P.READ_FRAMEBUFFER,null),yn.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||hn.has(v)){const qt=hn.get(v),Gt=hn.get(B);yn.bindFramebuffer(P.READ_FRAMEBUFFER,hs),yn.bindFramebuffer(P.DRAW_FRAMEBUFFER,ms);for(let Ht=0;Ht<cn;Ht++)xt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,k,wn+Ht):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,k),Kt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.__webglTexture,ke,Rt+Ht):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gt.__webglTexture,ke),k!==0?P.blitFramebuffer(On,kn,nn,mn,$n,ft,nn,mn,P.COLOR_BUFFER_BIT,P.NEAREST):Kt?P.copyTexSubImage3D(Mt,ke,$n,ft,Rt+Ht,On,kn,nn,mn):P.copyTexSubImage2D(Mt,ke,$n,ft,On,kn,nn,mn);yn.bindFramebuffer(P.READ_FRAMEBUFFER,null),yn.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Kt?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(Mt,ke,$n,ft,Rt,nn,mn,cn,dt,Ln,Et.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Mt,ke,$n,ft,Rt,nn,mn,cn,dt,Et.data):P.texSubImage3D(Mt,ke,$n,ft,Rt,nn,mn,cn,dt,Ln,Et):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ke,$n,ft,nn,mn,dt,Ln,Et.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ke,$n,ft,Et.width,Et.height,dt,Et.data):P.texSubImage2D(P.TEXTURE_2D,ke,$n,ft,nn,mn,dt,Ln,Et);P.pixelStorei(P.UNPACK_ROW_LENGTH,it),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rr),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Or),ke===0&&B.generateMipmaps&&P.generateMipmap(Mt),yn.unbindTexture()},this.copyTextureToTexture3D=function(v,B,J=null,ie=null,k=0){return(0,n.mcG)('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,B,J,ie,k)},this.initRenderTarget=function(v){hn.get(v).__webglFramebuffer===void 0&&jn.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?jn.setTextureCube(v,0):v.isData3DTexture?jn.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?jn.setTexture2DArray(v,0):jn.setTexture2D(v,0),yn.unbindTexture()},this.resetState=function(){$=0,te=0,Se=null,yn.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return n.TdN}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(o){this._outputColorSpace=o;const r=this.getContext();r.drawingBufferColorSpace=n.ppV._getDrawingBufferColorSpace(o),r.unpackColorSpace=n.ppV._getUnpackColorSpace()}}}}]);

//# sourceMappingURL=troika.c914cf5c951bc3456e51.chunk.js.map