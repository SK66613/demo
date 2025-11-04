"use strict";(self.webpackChunkvisme_web=self.webpackChunkvisme_web||[]).push([[2330,6867,8370,2721],{442789:(Lt,Ve,F)=>{F.d(Ve,{i:()=>r});var s=F(272790),j=F(541761),H=F(493303);class r extends H.B{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new j.k,this.projectionMatrix=new j.k,this.projectionMatrixInverse=new j.k,this.coordinateSystem=s.TdN,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(b,f){return super.copy(b,f),this.matrixWorldInverse.copy(b.matrixWorldInverse),this.projectionMatrix.copy(b.projectionMatrix),this.projectionMatrixInverse.copy(b.projectionMatrixInverse),this.coordinateSystem=b.coordinateSystem,this}getWorldDirection(b){return super.getWorldDirection(b).negate()}updateMatrixWorld(b){super.updateMatrixWorld(b),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(b,f){super.updateWorldMatrix(b,f),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}},181455:(Lt,Ve,F)=>{F.d(Ve,{q:()=>j});var s=F(442789);class j extends s.i{constructor(r=-1,c=1,b=1,f=-1,o=.1,m=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=r,this.right=c,this.top=b,this.bottom=f,this.near=o,this.far=m,this.updateProjectionMatrix()}copy(r,c){return super.copy(r,c),this.left=r.left,this.right=r.right,this.top=r.top,this.bottom=r.bottom,this.near=r.near,this.far=r.far,this.zoom=r.zoom,this.view=r.view===null?null:Object.assign({},r.view),this}setViewOffset(r,c,b,f,o,m){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=r,this.view.fullHeight=c,this.view.offsetX=b,this.view.offsetY=f,this.view.width=o,this.view.height=m,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const r=(this.right-this.left)/(2*this.zoom),c=(this.top-this.bottom)/(2*this.zoom),b=(this.right+this.left)/2,f=(this.top+this.bottom)/2;let o=b-r,m=b+r,h=f+c,l=f-c;if(this.view!==null&&this.view.enabled){const i=(this.right-this.left)/this.view.fullWidth/this.zoom,a=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=i*this.view.offsetX,m=o+i*this.view.width,h-=a*this.view.offsetY,l=h-a*this.view.height}this.projectionMatrix.makeOrthographic(o,m,h,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(r){const c=super.toJSON(r);return c.object.zoom=this.zoom,c.object.left=this.left,c.object.right=this.right,c.object.top=this.top,c.object.bottom=this.bottom,c.object.near=this.near,c.object.far=this.far,this.view!==null&&(c.object.view=Object.assign({},this.view)),c}}},212341:(Lt,Ve,F)=>{F.r(Ve),F.d(Ve,{PerspectiveCamera:()=>o});var s=F(442789),j=F(774153),H=F(237481),r=F(824954);const c=new r.Vector3,b=new H.I,f=new H.I;class o extends s.i{constructor(h=50,l=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=h,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=l,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(h,l){return super.copy(h,l),this.fov=h.fov,this.zoom=h.zoom,this.near=h.near,this.far=h.far,this.focus=h.focus,this.aspect=h.aspect,this.view=h.view===null?null:Object.assign({},h.view),this.filmGauge=h.filmGauge,this.filmOffset=h.filmOffset,this}setFocalLength(h){const l=.5*this.getFilmHeight()/h;this.fov=j.a5*2*Math.atan(l),this.updateProjectionMatrix()}getFocalLength(){const h=Math.tan(j.up*.5*this.fov);return .5*this.getFilmHeight()/h}getEffectiveFOV(){return j.a5*2*Math.atan(Math.tan(j.up*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(h,l,i){c.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),l.set(c.x,c.y).multiplyScalar(-h/c.z),c.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(c.x,c.y).multiplyScalar(-h/c.z)}getViewSize(h,l){return this.getViewBounds(h,b,f),l.subVectors(f,b)}setViewOffset(h,l,i,a,u,p){this.aspect=h/l,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=h,this.view.fullHeight=l,this.view.offsetX=i,this.view.offsetY=a,this.view.width=u,this.view.height=p,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const h=this.near;let l=h*Math.tan(j.up*.5*this.fov)/this.zoom,i=2*l,a=this.aspect*i,u=-.5*a;const p=this.view;if(this.view!==null&&this.view.enabled){const I=p.fullWidth,M=p.fullHeight;u+=p.offsetX*a/I,l-=p.offsetY*i/M,a*=p.width/I,i*=p.height/M}const T=this.filmOffset;T!==0&&(u+=h*T/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,l,l-i,h,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(h){const l=super.toJSON(h);return l.object.fov=this.fov,l.object.zoom=this.zoom,l.object.near=this.near,l.object.far=this.far,l.object.focus=this.focus,l.object.aspect=this.aspect,this.view!==null&&(l.object.view=Object.assign({},this.view)),l.object.filmGauge=this.filmGauge,l.object.filmOffset=this.filmOffset,l}}},272790:(Lt,Ve,F)=>{F.d(Ve,{$EB:()=>u,$Yl:()=>nt,$_I:()=>Rn,$ei:()=>A,BXX:()=>$n,B_h:()=>lr,CVz:()=>rr,CWW:()=>Rr,Cfg:()=>yn,DAe:()=>Br,Dmk:()=>Vn,EQC:()=>Ur,EZo:()=>I,EdD:()=>G,FFZ:()=>rn,FV:()=>Wt,FXf:()=>U,Fn:()=>Er,G3T:()=>Cr,GJx:()=>Mn,GWd:()=>Hn,Gwm:()=>je,H23:()=>Sr,HIg:()=>Gn,HO_:()=>br,HXV:()=>ir,IE4:()=>Zn,Jnc:()=>b,K52:()=>et,KDk:()=>ar,KLL:()=>Ke,KRh:()=>wt,Ke9:()=>Fr,Kef:()=>yr,Kwu:()=>M,LAk:()=>oi,LiQ:()=>B,Mjd:()=>qt,N5j:()=>zr,NTi:()=>T,Nt7:()=>ke,Nz6:()=>Qn,OUM:()=>Cn,Om:()=>vn,OuU:()=>ae,PJ3:()=>Lr,QP0:()=>m,Qrf:()=>ur,RQf:()=>In,Riy:()=>sr,Rkk:()=>Vr,RrE:()=>it,RyA:()=>l,S$4:()=>xr,TdN:()=>Xi,TiK:()=>tn,TkQ:()=>qn,U3G:()=>We,UTZ:()=>Ui,V3x:()=>Bn,VT0:()=>Xn,VVr:()=>Ni,Vb5:()=>c,VxR:()=>Ft,W9U:()=>Tr,WNZ:()=>r,Wdf:()=>Wi,Wew:()=>On,Wk7:()=>h,XG_:()=>Ar,XIg:()=>p,XrR:()=>Gt,Yuy:()=>Ln,ZQM:()=>Kn,Zr2:()=>di,_QJ:()=>pr,a5J:()=>fr,aEY:()=>Ee,aJ8:()=>jt,aMy:()=>wr,agE:()=>Vi,amv:()=>Ai,bC7:()=>gr,bCz:()=>k,bI3:()=>Gr,bkx:()=>Un,brA:()=>Ie,bw0:()=>Mt,c90:()=>jn,cHt:()=>Dn,caT:()=>ct,czI:()=>cr,dcC:()=>Wn,dhZ:()=>Or,e0p:()=>Ge,eHc:()=>Re,eoi:()=>ki,er$:()=>ni,f4X:()=>L,fBL:()=>Pn,g7M:()=>Xt,gJ2:()=>Fn,gO9:()=>R,gWB:()=>Ei,ghU:()=>xn,h2z:()=>Nr,hB5:()=>i,hdd:()=>xe,hgQ:()=>Fe,hsX:()=>a,hxR:()=>Sn,hy7:()=>Ii,i7u:()=>Ki,ie2:()=>pe,ix0:()=>Nn,jR7:()=>Jn,jf0:()=>Pt,jzd:()=>nn,k6Q:()=>er,k6q:()=>An,kO0:()=>en,kRr:()=>bn,kTW:()=>En,kTp:()=>tr,kyO:()=>At,lGu:()=>Ae,lc7:()=>Pr,ljd:()=>Dr,lyL:()=>_r,nNL:()=>bt,nST:()=>z,ojh:()=>g,ojs:()=>Mr,ov9:()=>ce,pBf:()=>nr,pHI:()=>Tn,paN:()=>Yn,psI:()=>dr,qa3:()=>or,qad:()=>X,rQf:()=>Ir,rSH:()=>hr,sKt:()=>$i,sPf:()=>s,tJf:()=>wn,uB5:()=>mr,uV5:()=>gn,vim:()=>Hi,vyJ:()=>Hr,wfO:()=>_n,wn6:()=>qe,wrO:()=>zn,xFO:()=>mn,xSv:()=>De,y3Z:()=>vr,y_p:()=>Nt,zdS:()=>kn,znC:()=>y});const s="179",j={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},H={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},r=0,c=1,b=2,f=3,o=0,m=1,h=2,l=3,i=0,a=1,u=2,p=0,T=1,I=2,M=3,G=4,k=5,R=100,U=101,z=102,y=103,A=104,g=200,X=201,L=202,B=203,pe=204,ae=205,xe=206,ke=207,qe=208,Ee=209,Fe=210,it=211,nt=212,Ge=213,ce=214,Re=0,Ae=1,Ie=2,De=3,We=4,je=5,et=6,Mt=7,ct=0,wt=1,Gt=2,Nt=0,At=1,qt=2,bt=3,Wt=4,Xt=5,oi=6,jt=7,bi="attached",Bi="detached",Ui=300,Ii=301,mn=302,_n=303,gn=304,vn=306,Mn=1e3,xn=1001,En=1002,Sn=1003,Tn=1004,Cs=1004,yn=1005,ws=1005,An=1006,bn=1007,Ps=1007,Rn=1008,Ds=1008,Cn=1009,wn=1010,Pn=1011,Dn=1012,Ln=1013,Un=1014,In=1015,Nn=1016,On=1017,Fn=1018,Bn=1020,Vn=35902,zn=1021,Gn=1022,Hn=1023,kn=1026,Wn=1027,Xn=1028,Kn=1029,Yn=1030,qn=1031,Ls=1032,jn=1033,Zn=33776,Qn=33777,Jn=33778,$n=33779,er=35840,tr=35841,ir=35842,nr=35843,rr=36196,sr=37492,ar=37496,or=37808,lr=37809,cr=37810,hr=37811,ur=37812,dr=37813,fr=37814,pr=37815,mr=37816,_r=37817,gr=37818,vr=37819,Mr=37820,xr=37821,Er=36492,Sr=36494,Tr=36495,yr=36283,Ar=36284,br=36285,Rr=36286,Cr=2200,wr=2201,Pr=2202,Dr=2300,Lr=2301,Ur=2302,Ir=2400,Nr=2401,Or=2402,Fr=2500,Br=2501,Us=0,Is=1,Ns=2,Vr=3200,zr=3201,Os=3202,Fs=3203,Gr=0,Hr=1,Pt="",ni="srgb",di="srgb-linear",Ft="linear",Ke="srgb",Mi=0,Ni=7680,yi=7681,kr=7682,Wr=7683,Xr=34055,Kr=34056,Yr=5386,qr=512,jr=513,Ri=514,Zr=515,xi=516,Ci=517,wi=518,$i=519,Ai=512,Hi=513,en=514,tn=515,ki=516,nn=517,Ei=518,rn=519,Vi=35044,Qr=35048,Jr=35040,$r=35045,sn=35049,es=35041,ts=35046,is=35050,ns=35042,rs="100",Wi="300 es",Xi=2e3,Ki=2001,an={COMPUTE:"compute",RENDER:"render"},on={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},ln={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"}},739920:(Lt,Ve,F)=>{F.d(Ve,{TH:()=>a,qt:()=>U,A$:()=>M,MW:()=>k});var s=F(824954),j=F(237481),H=F(774153),r=F(272790);const c=b();function b(){const z=new ArrayBuffer(4),y=new Float32Array(z),A=new Uint32Array(z),g=new Uint32Array(512),X=new Uint32Array(512);for(let ae=0;ae<256;++ae){const xe=ae-127;xe<-27?(g[ae]=0,g[ae|256]=32768,X[ae]=24,X[ae|256]=24):xe<-14?(g[ae]=1024>>-xe-14,g[ae|256]=1024>>-xe-14|32768,X[ae]=-xe-1,X[ae|256]=-xe-1):xe<=15?(g[ae]=xe+15<<10,g[ae|256]=xe+15<<10|32768,X[ae]=13,X[ae|256]=13):xe<128?(g[ae]=31744,g[ae|256]=64512,X[ae]=24,X[ae|256]=24):(g[ae]=31744,g[ae|256]=64512,X[ae]=13,X[ae|256]=13)}const L=new Uint32Array(2048),B=new Uint32Array(64),pe=new Uint32Array(64);for(let ae=1;ae<1024;++ae){let xe=ae<<13,ke=0;for(;!(xe&8388608);)xe<<=1,ke-=8388608;xe&=-8388609,ke+=947912704,L[ae]=xe|ke}for(let ae=1024;ae<2048;++ae)L[ae]=939524096+(ae-1024<<13);for(let ae=1;ae<31;++ae)B[ae]=ae<<23;B[31]=1199570944,B[32]=2147483648;for(let ae=33;ae<63;++ae)B[ae]=2147483648+(ae-32<<23);B[63]=3347054592;for(let ae=1;ae<64;++ae)ae!==32&&(pe[ae]=1024);return{floatView:y,uint32View:A,baseTable:g,shiftTable:X,mantissaTable:L,exponentTable:B,offsetTable:pe}}function f(z){Math.abs(z)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),z=(0,H.qE)(z,-65504,65504),c.floatView[0]=z;const y=c.uint32View[0],A=y>>23&511;return c.baseTable[A]+((y&8388607)>>c.shiftTable[A])}function o(z){const y=z>>10;return c.uint32View[0]=c.mantissaTable[c.offsetTable[y]+(z&1023)]+c.exponentTable[y],c.floatView[0]}class m{static toHalfFloat(y){return f(y)}static fromHalfFloat(y){return o(y)}}const h=new s.Vector3,l=new j.I;let i=0;class a{constructor(y,A,g=!1){if(Array.isArray(y))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i++}),this.name="",this.array=y,this.itemSize=A,this.count=y!==void 0?y.length/A:0,this.normalized=g,this.usage=r.agE,this.updateRanges=[],this.gpuType=r.RQf,this.version=0}onUploadCallback(){}set needsUpdate(y){y===!0&&this.version++}setUsage(y){return this.usage=y,this}addUpdateRange(y,A){this.updateRanges.push({start:y,count:A})}clearUpdateRanges(){this.updateRanges.length=0}copy(y){return this.name=y.name,this.array=new y.array.constructor(y.array),this.itemSize=y.itemSize,this.count=y.count,this.normalized=y.normalized,this.usage=y.usage,this.gpuType=y.gpuType,this}copyAt(y,A,g){y*=this.itemSize,g*=A.itemSize;for(let X=0,L=this.itemSize;X<L;X++)this.array[y+X]=A.array[g+X];return this}copyArray(y){return this.array.set(y),this}applyMatrix3(y){if(this.itemSize===2)for(let A=0,g=this.count;A<g;A++)l.fromBufferAttribute(this,A),l.applyMatrix3(y),this.setXY(A,l.x,l.y);else if(this.itemSize===3)for(let A=0,g=this.count;A<g;A++)h.fromBufferAttribute(this,A),h.applyMatrix3(y),this.setXYZ(A,h.x,h.y,h.z);return this}applyMatrix4(y){for(let A=0,g=this.count;A<g;A++)h.fromBufferAttribute(this,A),h.applyMatrix4(y),this.setXYZ(A,h.x,h.y,h.z);return this}applyNormalMatrix(y){for(let A=0,g=this.count;A<g;A++)h.fromBufferAttribute(this,A),h.applyNormalMatrix(y),this.setXYZ(A,h.x,h.y,h.z);return this}transformDirection(y){for(let A=0,g=this.count;A<g;A++)h.fromBufferAttribute(this,A),h.transformDirection(y),this.setXYZ(A,h.x,h.y,h.z);return this}set(y,A=0){return this.array.set(y,A),this}getComponent(y,A){let g=this.array[y*this.itemSize+A];return this.normalized&&(g=(0,H.NU)(g,this.array)),g}setComponent(y,A,g){return this.normalized&&(g=(0,H.S8)(g,this.array)),this.array[y*this.itemSize+A]=g,this}getX(y){let A=this.array[y*this.itemSize];return this.normalized&&(A=(0,H.NU)(A,this.array)),A}setX(y,A){return this.normalized&&(A=(0,H.S8)(A,this.array)),this.array[y*this.itemSize]=A,this}getY(y){let A=this.array[y*this.itemSize+1];return this.normalized&&(A=(0,H.NU)(A,this.array)),A}setY(y,A){return this.normalized&&(A=(0,H.S8)(A,this.array)),this.array[y*this.itemSize+1]=A,this}getZ(y){let A=this.array[y*this.itemSize+2];return this.normalized&&(A=(0,H.NU)(A,this.array)),A}setZ(y,A){return this.normalized&&(A=(0,H.S8)(A,this.array)),this.array[y*this.itemSize+2]=A,this}getW(y){let A=this.array[y*this.itemSize+3];return this.normalized&&(A=(0,H.NU)(A,this.array)),A}setW(y,A){return this.normalized&&(A=(0,H.S8)(A,this.array)),this.array[y*this.itemSize+3]=A,this}setXY(y,A,g){return y*=this.itemSize,this.normalized&&(A=(0,H.S8)(A,this.array),g=(0,H.S8)(g,this.array)),this.array[y+0]=A,this.array[y+1]=g,this}setXYZ(y,A,g,X){return y*=this.itemSize,this.normalized&&(A=(0,H.S8)(A,this.array),g=(0,H.S8)(g,this.array),X=(0,H.S8)(X,this.array)),this.array[y+0]=A,this.array[y+1]=g,this.array[y+2]=X,this}setXYZW(y,A,g,X,L){return y*=this.itemSize,this.normalized&&(A=(0,H.S8)(A,this.array),g=(0,H.S8)(g,this.array),X=(0,H.S8)(X,this.array),L=(0,H.S8)(L,this.array)),this.array[y+0]=A,this.array[y+1]=g,this.array[y+2]=X,this.array[y+3]=L,this}onUpload(y){return this.onUploadCallback=y,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const y={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(y.name=this.name),this.usage!==r.agE&&(y.usage=this.usage),y}}class u extends a{constructor(y,A,g){super(new Int8Array(y),A,g)}}class p extends a{constructor(y,A,g){super(new Uint8Array(y),A,g)}}class T extends a{constructor(y,A,g){super(new Uint8ClampedArray(y),A,g)}}class I extends a{constructor(y,A,g){super(new Int16Array(y),A,g)}}class M extends a{constructor(y,A,g){super(new Uint16Array(y),A,g)}}class G extends a{constructor(y,A,g){super(new Int32Array(y),A,g)}}class k extends a{constructor(y,A,g){super(new Uint32Array(y),A,g)}}class R extends a{constructor(y,A,g){super(new Uint16Array(y),A,g),this.isFloat16BufferAttribute=!0}getX(y){let A=o(this.array[y*this.itemSize]);return this.normalized&&(A=(0,H.NU)(A,this.array)),A}setX(y,A){return this.normalized&&(A=(0,H.S8)(A,this.array)),this.array[y*this.itemSize]=f(A),this}getY(y){let A=o(this.array[y*this.itemSize+1]);return this.normalized&&(A=(0,H.NU)(A,this.array)),A}setY(y,A){return this.normalized&&(A=(0,H.S8)(A,this.array)),this.array[y*this.itemSize+1]=f(A),this}getZ(y){let A=o(this.array[y*this.itemSize+2]);return this.normalized&&(A=(0,H.NU)(A,this.array)),A}setZ(y,A){return this.normalized&&(A=(0,H.S8)(A,this.array)),this.array[y*this.itemSize+2]=f(A),this}getW(y){let A=o(this.array[y*this.itemSize+3]);return this.normalized&&(A=(0,H.NU)(A,this.array)),A}setW(y,A){return this.normalized&&(A=(0,H.S8)(A,this.array)),this.array[y*this.itemSize+3]=f(A),this}setXY(y,A,g){return y*=this.itemSize,this.normalized&&(A=(0,H.S8)(A,this.array),g=(0,H.S8)(g,this.array)),this.array[y+0]=f(A),this.array[y+1]=f(g),this}setXYZ(y,A,g,X){return y*=this.itemSize,this.normalized&&(A=(0,H.S8)(A,this.array),g=(0,H.S8)(g,this.array),X=(0,H.S8)(X,this.array)),this.array[y+0]=f(A),this.array[y+1]=f(g),this.array[y+2]=f(X),this}setXYZW(y,A,g,X,L){return y*=this.itemSize,this.normalized&&(A=(0,H.S8)(A,this.array),g=(0,H.S8)(g,this.array),X=(0,H.S8)(X,this.array),L=(0,H.S8)(L,this.array)),this.array[y+0]=f(A),this.array[y+1]=f(g),this.array[y+2]=f(X),this.array[y+3]=f(L),this}}class U extends a{constructor(y,A,g){super(new Float32Array(y),A,g)}}},5257:(Lt,Ve,F)=>{F.d(Ve,{L:()=>G});var s=F(824954),j=F(237481),H=F(523006),r=F(251750),c=F(739920),b=F(721993),f=F(493303),o=F(541761),m=F(914164),h=F(774153),l=F(472686);let i=0;const a=new o.k,u=new f.B,p=new s.Vector3,T=new H.Box3,I=new H.Box3,M=new s.Vector3;class G extends r.Q{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i++}),this.uuid=(0,h.lk)(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(R){return Array.isArray(R)?this.index=new((0,l.AQ)(R)?c.MW:c.A$)(R,1):this.index=R,this}setIndirect(R){return this.indirect=R,this}getIndirect(){return this.indirect}getAttribute(R){return this.attributes[R]}setAttribute(R,U){return this.attributes[R]=U,this}deleteAttribute(R){return delete this.attributes[R],this}hasAttribute(R){return this.attributes[R]!==void 0}addGroup(R,U,z=0){this.groups.push({start:R,count:U,materialIndex:z})}clearGroups(){this.groups=[]}setDrawRange(R,U){this.drawRange.start=R,this.drawRange.count=U}applyMatrix4(R){const U=this.attributes.position;U!==void 0&&(U.applyMatrix4(R),U.needsUpdate=!0);const z=this.attributes.normal;if(z!==void 0){const A=new m.d().getNormalMatrix(R);z.applyNormalMatrix(A),z.needsUpdate=!0}const y=this.attributes.tangent;return y!==void 0&&(y.transformDirection(R),y.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(R){return a.makeRotationFromQuaternion(R),this.applyMatrix4(a),this}rotateX(R){return a.makeRotationX(R),this.applyMatrix4(a),this}rotateY(R){return a.makeRotationY(R),this.applyMatrix4(a),this}rotateZ(R){return a.makeRotationZ(R),this.applyMatrix4(a),this}translate(R,U,z){return a.makeTranslation(R,U,z),this.applyMatrix4(a),this}scale(R,U,z){return a.makeScale(R,U,z),this.applyMatrix4(a),this}lookAt(R){return u.lookAt(R),u.updateMatrix(),this.applyMatrix4(u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(p).negate(),this.translate(p.x,p.y,p.z),this}setFromPoints(R){const U=this.getAttribute("position");if(U===void 0){const z=[];for(let y=0,A=R.length;y<A;y++){const g=R[y];z.push(g.x,g.y,g.z||0)}this.setAttribute("position",new c.qt(z,3))}else{const z=Math.min(R.length,U.count);for(let y=0;y<z;y++){const A=R[y];U.setXYZ(y,A.x,A.y,A.z||0)}R.length>U.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),U.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new H.Box3);const R=this.attributes.position,U=this.morphAttributes.position;if(R&&R.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new s.Vector3(-1/0,-1/0,-1/0),new s.Vector3(1/0,1/0,1/0));return}if(R!==void 0){if(this.boundingBox.setFromBufferAttribute(R),U)for(let z=0,y=U.length;z<y;z++){const A=U[z];T.setFromBufferAttribute(A),this.morphTargetsRelative?(M.addVectors(this.boundingBox.min,T.min),this.boundingBox.expandByPoint(M),M.addVectors(this.boundingBox.max,T.max),this.boundingBox.expandByPoint(M)):(this.boundingBox.expandByPoint(T.min),this.boundingBox.expandByPoint(T.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new b.i);const R=this.attributes.position,U=this.morphAttributes.position;if(R&&R.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new s.Vector3,1/0);return}if(R){const z=this.boundingSphere.center;if(T.setFromBufferAttribute(R),U)for(let A=0,g=U.length;A<g;A++){const X=U[A];I.setFromBufferAttribute(X),this.morphTargetsRelative?(M.addVectors(T.min,I.min),T.expandByPoint(M),M.addVectors(T.max,I.max),T.expandByPoint(M)):(T.expandByPoint(I.min),T.expandByPoint(I.max))}T.getCenter(z);let y=0;for(let A=0,g=R.count;A<g;A++)M.fromBufferAttribute(R,A),y=Math.max(y,z.distanceToSquared(M));if(U)for(let A=0,g=U.length;A<g;A++){const X=U[A],L=this.morphTargetsRelative;for(let B=0,pe=X.count;B<pe;B++)M.fromBufferAttribute(X,B),L&&(p.fromBufferAttribute(R,B),M.add(p)),y=Math.max(y,z.distanceToSquared(M))}this.boundingSphere.radius=Math.sqrt(y),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const R=this.index,U=this.attributes;if(R===null||U.position===void 0||U.normal===void 0||U.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const z=U.position,y=U.normal,A=U.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new c.TH(new Float32Array(4*z.count),4));const g=this.getAttribute("tangent"),X=[],L=[];for(let De=0;De<z.count;De++)X[De]=new s.Vector3,L[De]=new s.Vector3;const B=new s.Vector3,pe=new s.Vector3,ae=new s.Vector3,xe=new j.I,ke=new j.I,qe=new j.I,Ee=new s.Vector3,Fe=new s.Vector3;function it(De,We,je){B.fromBufferAttribute(z,De),pe.fromBufferAttribute(z,We),ae.fromBufferAttribute(z,je),xe.fromBufferAttribute(A,De),ke.fromBufferAttribute(A,We),qe.fromBufferAttribute(A,je),pe.sub(B),ae.sub(B),ke.sub(xe),qe.sub(xe);const et=1/(ke.x*qe.y-qe.x*ke.y);isFinite(et)&&(Ee.copy(pe).multiplyScalar(qe.y).addScaledVector(ae,-ke.y).multiplyScalar(et),Fe.copy(ae).multiplyScalar(ke.x).addScaledVector(pe,-qe.x).multiplyScalar(et),X[De].add(Ee),X[We].add(Ee),X[je].add(Ee),L[De].add(Fe),L[We].add(Fe),L[je].add(Fe))}let nt=this.groups;nt.length===0&&(nt=[{start:0,count:R.count}]);for(let De=0,We=nt.length;De<We;++De){const je=nt[De],et=je.start,Mt=je.count;for(let ct=et,wt=et+Mt;ct<wt;ct+=3)it(R.getX(ct+0),R.getX(ct+1),R.getX(ct+2))}const Ge=new s.Vector3,ce=new s.Vector3,Re=new s.Vector3,Ae=new s.Vector3;function Ie(De){Re.fromBufferAttribute(y,De),Ae.copy(Re);const We=X[De];Ge.copy(We),Ge.sub(Re.multiplyScalar(Re.dot(We))).normalize(),ce.crossVectors(Ae,We);const et=ce.dot(L[De])<0?-1:1;g.setXYZW(De,Ge.x,Ge.y,Ge.z,et)}for(let De=0,We=nt.length;De<We;++De){const je=nt[De],et=je.start,Mt=je.count;for(let ct=et,wt=et+Mt;ct<wt;ct+=3)Ie(R.getX(ct+0)),Ie(R.getX(ct+1)),Ie(R.getX(ct+2))}}computeVertexNormals(){const R=this.index,U=this.getAttribute("position");if(U!==void 0){let z=this.getAttribute("normal");if(z===void 0)z=new c.TH(new Float32Array(U.count*3),3),this.setAttribute("normal",z);else for(let xe=0,ke=z.count;xe<ke;xe++)z.setXYZ(xe,0,0,0);const y=new s.Vector3,A=new s.Vector3,g=new s.Vector3,X=new s.Vector3,L=new s.Vector3,B=new s.Vector3,pe=new s.Vector3,ae=new s.Vector3;if(R)for(let xe=0,ke=R.count;xe<ke;xe+=3){const qe=R.getX(xe+0),Ee=R.getX(xe+1),Fe=R.getX(xe+2);y.fromBufferAttribute(U,qe),A.fromBufferAttribute(U,Ee),g.fromBufferAttribute(U,Fe),pe.subVectors(g,A),ae.subVectors(y,A),pe.cross(ae),X.fromBufferAttribute(z,qe),L.fromBufferAttribute(z,Ee),B.fromBufferAttribute(z,Fe),X.add(pe),L.add(pe),B.add(pe),z.setXYZ(qe,X.x,X.y,X.z),z.setXYZ(Ee,L.x,L.y,L.z),z.setXYZ(Fe,B.x,B.y,B.z)}else for(let xe=0,ke=U.count;xe<ke;xe+=3)y.fromBufferAttribute(U,xe+0),A.fromBufferAttribute(U,xe+1),g.fromBufferAttribute(U,xe+2),pe.subVectors(g,A),ae.subVectors(y,A),pe.cross(ae),z.setXYZ(xe+0,pe.x,pe.y,pe.z),z.setXYZ(xe+1,pe.x,pe.y,pe.z),z.setXYZ(xe+2,pe.x,pe.y,pe.z);this.normalizeNormals(),z.needsUpdate=!0}}normalizeNormals(){const R=this.attributes.normal;for(let U=0,z=R.count;U<z;U++)M.fromBufferAttribute(R,U),M.normalize(),R.setXYZ(U,M.x,M.y,M.z)}toNonIndexed(){function R(X,L){const B=X.array,pe=X.itemSize,ae=X.normalized,xe=new B.constructor(L.length*pe);let ke=0,qe=0;for(let Ee=0,Fe=L.length;Ee<Fe;Ee++){X.isInterleavedBufferAttribute?ke=L[Ee]*X.data.stride+X.offset:ke=L[Ee]*pe;for(let it=0;it<pe;it++)xe[qe++]=B[ke++]}return new c.TH(xe,pe,ae)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const U=new G,z=this.index.array,y=this.attributes;for(const X in y){const L=y[X],B=R(L,z);U.setAttribute(X,B)}const A=this.morphAttributes;for(const X in A){const L=[],B=A[X];for(let pe=0,ae=B.length;pe<ae;pe++){const xe=B[pe],ke=R(xe,z);L.push(ke)}U.morphAttributes[X]=L}U.morphTargetsRelative=this.morphTargetsRelative;const g=this.groups;for(let X=0,L=g.length;X<L;X++){const B=g[X];U.addGroup(B.start,B.count,B.materialIndex)}return U}toJSON(){const R={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(R.uuid=this.uuid,R.type=this.type,this.name!==""&&(R.name=this.name),Object.keys(this.userData).length>0&&(R.userData=this.userData),this.parameters!==void 0){const L=this.parameters;for(const B in L)L[B]!==void 0&&(R[B]=L[B]);return R}R.data={attributes:{}};const U=this.index;U!==null&&(R.data.index={type:U.array.constructor.name,array:Array.prototype.slice.call(U.array)});const z=this.attributes;for(const L in z){const B=z[L];R.data.attributes[L]=B.toJSON(R.data)}const y={};let A=!1;for(const L in this.morphAttributes){const B=this.morphAttributes[L],pe=[];for(let ae=0,xe=B.length;ae<xe;ae++){const ke=B[ae];pe.push(ke.toJSON(R.data))}pe.length>0&&(y[L]=pe,A=!0)}A&&(R.data.morphAttributes=y,R.data.morphTargetsRelative=this.morphTargetsRelative);const g=this.groups;g.length>0&&(R.data.groups=JSON.parse(JSON.stringify(g)));const X=this.boundingSphere;return X!==null&&(R.data.boundingSphere=X.toJSON()),R}clone(){return new this.constructor().copy(this)}copy(R){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const U={};this.name=R.name;const z=R.index;z!==null&&this.setIndex(z.clone());const y=R.attributes;for(const B in y){const pe=y[B];this.setAttribute(B,pe.clone(U))}const A=R.morphAttributes;for(const B in A){const pe=[],ae=A[B];for(let xe=0,ke=ae.length;xe<ke;xe++)pe.push(ae[xe].clone(U));this.morphAttributes[B]=pe}this.morphTargetsRelative=R.morphTargetsRelative;const g=R.groups;for(let B=0,pe=g.length;B<pe;B++){const ae=g[B];this.addGroup(ae.start,ae.count,ae.materialIndex)}const X=R.boundingBox;X!==null&&(this.boundingBox=X.clone());const L=R.boundingSphere;return L!==null&&(this.boundingSphere=L.clone()),this.drawRange.start=R.drawRange.start,this.drawRange.count=R.drawRange.count,this.userData=R.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}},251750:(Lt,Ve,F)=>{F.d(Ve,{Q:()=>s});class s{addEventListener(H,r){this._listeners===void 0&&(this._listeners={});const c=this._listeners;c[H]===void 0&&(c[H]=[]),c[H].indexOf(r)===-1&&c[H].push(r)}hasEventListener(H,r){const c=this._listeners;return c===void 0?!1:c[H]!==void 0&&c[H].indexOf(r)!==-1}removeEventListener(H,r){const c=this._listeners;if(c===void 0)return;const b=c[H];if(b!==void 0){const f=b.indexOf(r);f!==-1&&b.splice(f,1)}}dispatchEvent(H){const r=this._listeners;if(r===void 0)return;const c=r[H.type];if(c!==void 0){H.target=this;const b=c.slice(0);for(let f=0,o=b.length;f<o;f++)b[f].call(this,H);H.target=null}}}},752853:(Lt,Ve,F)=>{F.d(Ve,{z:()=>s});class s{constructor(){this.mask=1}set(H){this.mask=(1<<H|0)>>>0}enable(H){this.mask|=1<<H|0}enableAll(){this.mask=-1}toggle(H){this.mask^=1<<H|0}disable(H){this.mask&=~(1<<H|0)}disableAll(){this.mask=0}test(H){return(this.mask&H.mask)!==0}isEnabled(H){return(this.mask&(1<<H|0))!==0}}},493303:(Lt,Ve,F)=>{F.d(Ve,{B:()=>y});var s=F(716920),j=F(824954),H=F(541761),r=F(251750),c=F(430799),b=F(752853),f=F(914164),o=F(774153);let m=0;const h=new j.Vector3,l=new s.P,i=new H.k,a=new j.Vector3,u=new j.Vector3,p=new j.Vector3,T=new s.P,I=new j.Vector3(1,0,0),M=new j.Vector3(0,1,0),G=new j.Vector3(0,0,1),k={type:"added"},R={type:"removed"},U={type:"childadded",child:null},z={type:"childremoved",child:null};class y extends r.Q{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m++}),this.uuid=(0,o.lk)(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=y.DEFAULT_UP.clone();const g=new j.Vector3,X=new c.O,L=new s.P,B=new j.Vector3(1,1,1);function pe(){L.setFromEuler(X,!1)}function ae(){X.setFromQuaternion(L,void 0,!1)}X._onChange(pe),L._onChange(ae),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:g},rotation:{configurable:!0,enumerable:!0,value:X},quaternion:{configurable:!0,enumerable:!0,value:L},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new H.k},normalMatrix:{value:new f.d}}),this.matrix=new H.k,this.matrixWorld=new H.k,this.matrixAutoUpdate=y.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=y.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b.z,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(g){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(g),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(g){return this.quaternion.premultiply(g),this}setRotationFromAxisAngle(g,X){this.quaternion.setFromAxisAngle(g,X)}setRotationFromEuler(g){this.quaternion.setFromEuler(g,!0)}setRotationFromMatrix(g){this.quaternion.setFromRotationMatrix(g)}setRotationFromQuaternion(g){this.quaternion.copy(g)}rotateOnAxis(g,X){return l.setFromAxisAngle(g,X),this.quaternion.multiply(l),this}rotateOnWorldAxis(g,X){return l.setFromAxisAngle(g,X),this.quaternion.premultiply(l),this}rotateX(g){return this.rotateOnAxis(I,g)}rotateY(g){return this.rotateOnAxis(M,g)}rotateZ(g){return this.rotateOnAxis(G,g)}translateOnAxis(g,X){return h.copy(g).applyQuaternion(this.quaternion),this.position.add(h.multiplyScalar(X)),this}translateX(g){return this.translateOnAxis(I,g)}translateY(g){return this.translateOnAxis(M,g)}translateZ(g){return this.translateOnAxis(G,g)}localToWorld(g){return this.updateWorldMatrix(!0,!1),g.applyMatrix4(this.matrixWorld)}worldToLocal(g){return this.updateWorldMatrix(!0,!1),g.applyMatrix4(i.copy(this.matrixWorld).invert())}lookAt(g,X,L){g.isVector3?a.copy(g):a.set(g,X,L);const B=this.parent;this.updateWorldMatrix(!0,!1),u.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?i.lookAt(u,a,this.up):i.lookAt(a,u,this.up),this.quaternion.setFromRotationMatrix(i),B&&(i.extractRotation(B.matrixWorld),l.setFromRotationMatrix(i),this.quaternion.premultiply(l.invert()))}add(g){if(arguments.length>1){for(let X=0;X<arguments.length;X++)this.add(arguments[X]);return this}return g===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",g),this):(g&&g.isObject3D?(g.removeFromParent(),g.parent=this,this.children.push(g),g.dispatchEvent(k),U.child=g,this.dispatchEvent(U),U.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",g),this)}remove(g){if(arguments.length>1){for(let L=0;L<arguments.length;L++)this.remove(arguments[L]);return this}const X=this.children.indexOf(g);return X!==-1&&(g.parent=null,this.children.splice(X,1),g.dispatchEvent(R),z.child=g,this.dispatchEvent(z),z.child=null),this}removeFromParent(){const g=this.parent;return g!==null&&g.remove(this),this}clear(){return this.remove(...this.children)}attach(g){return this.updateWorldMatrix(!0,!1),i.copy(this.matrixWorld).invert(),g.parent!==null&&(g.parent.updateWorldMatrix(!0,!1),i.multiply(g.parent.matrixWorld)),g.applyMatrix4(i),g.removeFromParent(),g.parent=this,this.children.push(g),g.updateWorldMatrix(!1,!0),g.dispatchEvent(k),U.child=g,this.dispatchEvent(U),U.child=null,this}getObjectById(g){return this.getObjectByProperty("id",g)}getObjectByName(g){return this.getObjectByProperty("name",g)}getObjectByProperty(g,X){if(this[g]===X)return this;for(let L=0,B=this.children.length;L<B;L++){const ae=this.children[L].getObjectByProperty(g,X);if(ae!==void 0)return ae}}getObjectsByProperty(g,X,L=[]){this[g]===X&&L.push(this);const B=this.children;for(let pe=0,ae=B.length;pe<ae;pe++)B[pe].getObjectsByProperty(g,X,L);return L}getWorldPosition(g){return this.updateWorldMatrix(!0,!1),g.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(g){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(u,g,p),g}getWorldScale(g){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(u,T,g),g}getWorldDirection(g){this.updateWorldMatrix(!0,!1);const X=this.matrixWorld.elements;return g.set(X[8],X[9],X[10]).normalize()}raycast(){}traverse(g){g(this);const X=this.children;for(let L=0,B=X.length;L<B;L++)X[L].traverse(g)}traverseVisible(g){if(this.visible===!1)return;g(this);const X=this.children;for(let L=0,B=X.length;L<B;L++)X[L].traverseVisible(g)}traverseAncestors(g){const X=this.parent;X!==null&&(g(X),X.traverseAncestors(g))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(g){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||g)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,g=!0);const X=this.children;for(let L=0,B=X.length;L<B;L++)X[L].updateMatrixWorld(g)}updateWorldMatrix(g,X){const L=this.parent;if(g===!0&&L!==null&&L.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),X===!0){const B=this.children;for(let pe=0,ae=B.length;pe<ae;pe++)B[pe].updateWorldMatrix(!1,!0)}}toJSON(g){const X=g===void 0||typeof g=="string",L={};X&&(g={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},L.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),B.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(B.type="BatchedMesh",B.perObjectFrustumCulled=this.perObjectFrustumCulled,B.sortObjects=this.sortObjects,B.drawRanges=this._drawRanges,B.reservedRanges=this._reservedRanges,B.geometryInfo=this._geometryInfo.map(xe=>({...xe,boundingBox:xe.boundingBox?xe.boundingBox.toJSON():void 0,boundingSphere:xe.boundingSphere?xe.boundingSphere.toJSON():void 0})),B.instanceInfo=this._instanceInfo.map(xe=>({...xe})),B.availableInstanceIds=this._availableInstanceIds.slice(),B.availableGeometryIds=this._availableGeometryIds.slice(),B.nextIndexStart=this._nextIndexStart,B.nextVertexStart=this._nextVertexStart,B.geometryCount=this._geometryCount,B.maxInstanceCount=this._maxInstanceCount,B.maxVertexCount=this._maxVertexCount,B.maxIndexCount=this._maxIndexCount,B.geometryInitialized=this._geometryInitialized,B.matricesTexture=this._matricesTexture.toJSON(g),B.indirectTexture=this._indirectTexture.toJSON(g),this._colorsTexture!==null&&(B.colorsTexture=this._colorsTexture.toJSON(g)),this.boundingSphere!==null&&(B.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(B.boundingBox=this.boundingBox.toJSON()));function pe(xe,ke){return xe[ke.uuid]===void 0&&(xe[ke.uuid]=ke.toJSON(g)),ke.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(g).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(g).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=pe(g.geometries,this.geometry);const xe=this.geometry.parameters;if(xe!==void 0&&xe.shapes!==void 0){const ke=xe.shapes;if(Array.isArray(ke))for(let qe=0,Ee=ke.length;qe<Ee;qe++){const Fe=ke[qe];pe(g.shapes,Fe)}else pe(g.shapes,ke)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(pe(g.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const xe=[];for(let ke=0,qe=this.material.length;ke<qe;ke++)xe.push(pe(g.materials,this.material[ke]));B.material=xe}else B.material=pe(g.materials,this.material);if(this.children.length>0){B.children=[];for(let xe=0;xe<this.children.length;xe++)B.children.push(this.children[xe].toJSON(g).object)}if(this.animations.length>0){B.animations=[];for(let xe=0;xe<this.animations.length;xe++){const ke=this.animations[xe];B.animations.push(pe(g.animations,ke))}}if(X){const xe=ae(g.geometries),ke=ae(g.materials),qe=ae(g.textures),Ee=ae(g.images),Fe=ae(g.shapes),it=ae(g.skeletons),nt=ae(g.animations),Ge=ae(g.nodes);xe.length>0&&(L.geometries=xe),ke.length>0&&(L.materials=ke),qe.length>0&&(L.textures=qe),Ee.length>0&&(L.images=Ee),Fe.length>0&&(L.shapes=Fe),it.length>0&&(L.skeletons=it),nt.length>0&&(L.animations=nt),Ge.length>0&&(L.nodes=Ge)}return L.object=B,L;function ae(xe){const ke=[];for(const qe in xe){const Ee=xe[qe];delete Ee.metadata,ke.push(Ee)}return ke}}clone(g){return new this.constructor().copy(this,g)}copy(g,X=!0){if(this.name=g.name,this.up.copy(g.up),this.position.copy(g.position),this.rotation.order=g.rotation.order,this.quaternion.copy(g.quaternion),this.scale.copy(g.scale),this.matrix.copy(g.matrix),this.matrixWorld.copy(g.matrixWorld),this.matrixAutoUpdate=g.matrixAutoUpdate,this.matrixWorldAutoUpdate=g.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=g.matrixWorldNeedsUpdate,this.layers.mask=g.layers.mask,this.visible=g.visible,this.castShadow=g.castShadow,this.receiveShadow=g.receiveShadow,this.frustumCulled=g.frustumCulled,this.renderOrder=g.renderOrder,this.animations=g.animations.slice(),this.userData=JSON.parse(JSON.stringify(g.userData)),X===!0)for(let L=0;L<g.children.length;L++){const B=g.children[L];this.add(B.clone())}return this}}y.DEFAULT_UP=new j.Vector3(0,1,0),y.DEFAULT_MATRIX_AUTO_UPDATE=!0,y.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0},444209:(Lt,Ve,F)=>{F.d(Ve,{B:()=>g});var s=F(272790),j=F(739920),H=F(5257),r=F(955609),c=F(181455),b=F(212341),f=F(457803),o=F(824954),m=F(339957),h=F(641897),l=F(51950),i=F(371213);const a=4,u=[.125,.215,.35,.446,.526,.582],p=20,T=new c.q,I=new m.Q;let M=null,G=0,k=0,R=!1;const U=(1+Math.sqrt(5))/2,z=1/U,y=[new o.Vector3(-U,z,0),new o.Vector3(U,z,0),new o.Vector3(-z,0,U),new o.Vector3(z,0,U),new o.Vector3(0,U,-z),new o.Vector3(0,U,z),new o.Vector3(-1,1,-1),new o.Vector3(1,1,-1),new o.Vector3(-1,1,1),new o.Vector3(1,1,1)],A=new o.Vector3;class g{constructor(Ee){this._renderer=Ee,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(Ee,Fe=0,it=.1,nt=100,Ge={}){const{size:ce=256,position:Re=A}=Ge;M=this._renderer.getRenderTarget(),G=this._renderer.getActiveCubeFace(),k=this._renderer.getActiveMipmapLevel(),R=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(ce);const Ae=this._allocateTargets();return Ae.depthBuffer=!0,this._sceneToCubeUV(Ee,it,nt,Ae,Re),Fe>0&&this._blur(Ae,0,0,Fe),this._applyPMREM(Ae),this._cleanup(Ae),Ae}fromEquirectangular(Ee,Fe=null){return this._fromTexture(Ee,Fe)}fromCubemap(Ee,Fe=null){return this._fromTexture(Ee,Fe)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xe(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ae(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(Ee){this._lodMax=Math.floor(Math.log2(Ee)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let Ee=0;Ee<this._lodPlanes.length;Ee++)this._lodPlanes[Ee].dispose()}_cleanup(Ee){this._renderer.setRenderTarget(M,G,k),this._renderer.xr.enabled=R,Ee.scissorTest=!1,B(Ee,0,0,Ee.width,Ee.height)}_fromTexture(Ee,Fe){Ee.mapping===s.hy7||Ee.mapping===s.xFO?this._setSize(Ee.image.length===0?16:Ee.image[0].width||Ee.image[0].image.width):this._setSize(Ee.image.width/4),M=this._renderer.getRenderTarget(),G=this._renderer.getActiveCubeFace(),k=this._renderer.getActiveMipmapLevel(),R=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const it=Fe||this._allocateTargets();return this._textureToCubeUV(Ee,it),this._applyPMREM(it),this._cleanup(it),it}_allocateTargets(){const Ee=3*Math.max(this._cubeSize,112),Fe=4*this._cubeSize,it={magFilter:s.k6q,minFilter:s.k6q,generateMipmaps:!1,type:s.ix0,format:s.GWd,colorSpace:s.Zr2,depthBuffer:!1},nt=L(Ee,Fe,it);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==Ee||this._pingPongRenderTarget.height!==Fe){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L(Ee,Fe,it);const{_lodMax:Ge}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X(Ge)),this._blurMaterial=pe(Ge,Ee,Fe)}return nt}_compileMaterial(Ee){const Fe=new r.e(this._lodPlanes[0],Ee);this._renderer.compile(Fe,T)}_sceneToCubeUV(Ee,Fe,it,nt,Ge){const Ae=new b.PerspectiveCamera(90,1,Fe,it),Ie=[1,-1,1,1,1,1],De=[1,1,1,-1,-1,-1],We=this._renderer,je=We.autoClear,et=We.toneMapping;We.getClearColor(I),We.toneMapping=s.y_p,We.autoClear=!1,We.state.buffers.depth.getReversed()&&(We.setRenderTarget(nt),We.clearDepth(),We.setRenderTarget(null));const ct=new l.V({name:"PMREM.Background",side:s.hsX,depthWrite:!1,depthTest:!1}),wt=new r.e(new i.i,ct);let Gt=!1;const Nt=Ee.background;Nt?Nt.isColor&&(ct.color.copy(Nt),Ee.background=null,Gt=!0):(ct.color.copy(I),Gt=!0);for(let At=0;At<6;At++){const qt=At%3;qt===0?(Ae.up.set(0,Ie[At],0),Ae.position.set(Ge.x,Ge.y,Ge.z),Ae.lookAt(Ge.x+De[At],Ge.y,Ge.z)):qt===1?(Ae.up.set(0,0,Ie[At]),Ae.position.set(Ge.x,Ge.y,Ge.z),Ae.lookAt(Ge.x,Ge.y+De[At],Ge.z)):(Ae.up.set(0,Ie[At],0),Ae.position.set(Ge.x,Ge.y,Ge.z),Ae.lookAt(Ge.x,Ge.y,Ge.z+De[At]));const bt=this._cubeSize;B(nt,qt*bt,At>2?bt:0,bt,bt),We.setRenderTarget(nt),Gt&&We.render(wt,Ae),We.render(Ee,Ae)}wt.geometry.dispose(),wt.material.dispose(),We.toneMapping=et,We.autoClear=je,Ee.background=Nt}_textureToCubeUV(Ee,Fe){const it=this._renderer,nt=Ee.mapping===s.hy7||Ee.mapping===s.xFO;nt?(this._cubemapMaterial===null&&(this._cubemapMaterial=xe()),this._cubemapMaterial.uniforms.flipEnvMap.value=Ee.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ae());const Ge=nt?this._cubemapMaterial:this._equirectMaterial,ce=new r.e(this._lodPlanes[0],Ge),Re=Ge.uniforms;Re.envMap.value=Ee;const Ae=this._cubeSize;B(Fe,0,0,3*Ae,2*Ae),it.setRenderTarget(Fe),it.render(ce,T)}_applyPMREM(Ee){const Fe=this._renderer,it=Fe.autoClear;Fe.autoClear=!1;const nt=this._lodPlanes.length;for(let Ge=1;Ge<nt;Ge++){const ce=Math.sqrt(this._sigmas[Ge]*this._sigmas[Ge]-this._sigmas[Ge-1]*this._sigmas[Ge-1]),Re=y[(nt-Ge-1)%y.length];this._blur(Ee,Ge-1,Ge,ce,Re)}Fe.autoClear=it}_blur(Ee,Fe,it,nt,Ge){const ce=this._pingPongRenderTarget;this._halfBlur(Ee,ce,Fe,it,nt,"latitudinal",Ge),this._halfBlur(ce,Ee,it,it,nt,"longitudinal",Ge)}_halfBlur(Ee,Fe,it,nt,Ge,ce,Re){const Ae=this._renderer,Ie=this._blurMaterial;ce!=="latitudinal"&&ce!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const De=3,We=new r.e(this._lodPlanes[nt],Ie),je=Ie.uniforms,et=this._sizeLods[it]-1,Mt=isFinite(Ge)?Math.PI/(2*et):2*Math.PI/(2*p-1),ct=Ge/Mt,wt=isFinite(Ge)?1+Math.floor(De*ct):p;wt>p&&console.warn(`sigmaRadians, ${Ge}, is too large and will clip, as it requested ${wt} samples when the maximum is set to ${p}`);const Gt=[];let Nt=0;for(let Xt=0;Xt<p;++Xt){const oi=Xt/ct,jt=Math.exp(-oi*oi/2);Gt.push(jt),Xt===0?Nt+=jt:Xt<wt&&(Nt+=2*jt)}for(let Xt=0;Xt<Gt.length;Xt++)Gt[Xt]=Gt[Xt]/Nt;je.envMap.value=Ee.texture,je.samples.value=wt,je.weights.value=Gt,je.latitudinal.value=ce==="latitudinal",Re&&(je.poleAxis.value=Re);const{_lodMax:At}=this;je.dTheta.value=Mt,je.mipInt.value=At-it;const qt=this._sizeLods[nt],bt=3*qt*(nt>At-a?nt-At+a:0),Wt=4*(this._cubeSize-qt);B(Fe,bt,Wt,3*qt,2*qt),Ae.setRenderTarget(Fe),Ae.render(We,T)}}function X(qe){const Ee=[],Fe=[],it=[];let nt=qe;const Ge=qe-a+1+u.length;for(let ce=0;ce<Ge;ce++){const Re=Math.pow(2,nt);Fe.push(Re);let Ae=1/Re;ce>qe-a?Ae=u[ce-qe+a-1]:ce===0&&(Ae=0),it.push(Ae);const Ie=1/(Re-2),De=-Ie,We=1+Ie,je=[De,De,We,De,We,We,De,De,We,We,De,We],et=6,Mt=6,ct=3,wt=2,Gt=1,Nt=new Float32Array(ct*Mt*et),At=new Float32Array(wt*Mt*et),qt=new Float32Array(Gt*Mt*et);for(let Wt=0;Wt<et;Wt++){const Xt=Wt%3*2/3-1,oi=Wt>2?0:-1,jt=[Xt,oi,0,Xt+2/3,oi,0,Xt+2/3,oi+1,0,Xt,oi,0,Xt+2/3,oi+1,0,Xt,oi+1,0];Nt.set(jt,ct*Mt*Wt),At.set(je,wt*Mt*Wt);const bi=[Wt,Wt,Wt,Wt,Wt,Wt];qt.set(bi,Gt*Mt*Wt)}const bt=new H.L;bt.setAttribute("position",new j.TH(Nt,ct)),bt.setAttribute("uv",new j.TH(At,wt)),bt.setAttribute("faceIndex",new j.TH(qt,Gt)),Ee.push(bt),nt>a&&nt--}return{lodPlanes:Ee,sizeLods:Fe,sigmas:it}}function L(qe,Ee,Fe){const it=new h.n(qe,Ee,Fe);return it.texture.mapping=s.Om,it.texture.name="PMREM.cubeUv",it.scissorTest=!0,it}function B(qe,Ee,Fe,it,nt){qe.viewport.set(Ee,Fe,it,nt),qe.scissor.set(Ee,Fe,it,nt)}function pe(qe,Ee,Fe){const it=new Float32Array(p),nt=new o.Vector3(0,1,0);return new f.B({name:"SphericalGaussianBlur",defines:{n:p,CUBEUV_TEXEL_WIDTH:1/Ee,CUBEUV_TEXEL_HEIGHT:1/Fe,CUBEUV_MAX_MIP:`${qe}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:it},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:nt}},vertexShader:ke(),fragmentShader:`

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
		`,blending:s.XIg,depthTest:!1,depthWrite:!1})}function ae(){return new f.B({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ke(),fragmentShader:`

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
		`,blending:s.XIg,depthTest:!1,depthWrite:!1})}function xe(){return new f.B({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ke(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:s.XIg,depthTest:!1,depthWrite:!1})}function ke(){return`

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
	`}},371213:(Lt,Ve,F)=>{F.d(Ve,{i:()=>r});var s=F(5257),j=F(739920),H=F(824954);class r extends s.L{constructor(b=1,f=1,o=1,m=1,h=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:b,height:f,depth:o,widthSegments:m,heightSegments:h,depthSegments:l};const i=this;m=Math.floor(m),h=Math.floor(h),l=Math.floor(l);const a=[],u=[],p=[],T=[];let I=0,M=0;G("z","y","x",-1,-1,o,f,b,l,h,0),G("z","y","x",1,-1,o,f,-b,l,h,1),G("x","z","y",1,1,b,o,f,m,l,2),G("x","z","y",1,-1,b,o,-f,m,l,3),G("x","y","z",1,-1,b,f,o,m,h,4),G("x","y","z",-1,-1,b,f,-o,m,h,5),this.setIndex(a),this.setAttribute("position",new j.qt(u,3)),this.setAttribute("normal",new j.qt(p,3)),this.setAttribute("uv",new j.qt(T,2));function G(k,R,U,z,y,A,g,X,L,B,pe){const ae=A/L,xe=g/B,ke=A/2,qe=g/2,Ee=X/2,Fe=L+1,it=B+1;let nt=0,Ge=0;const ce=new H.Vector3;for(let Re=0;Re<it;Re++){const Ae=Re*xe-qe;for(let Ie=0;Ie<Fe;Ie++){const De=Ie*ae-ke;ce[k]=De*z,ce[R]=Ae*y,ce[U]=Ee,u.push(ce.x,ce.y,ce.z),ce[k]=0,ce[R]=0,ce[U]=X>0?1:-1,p.push(ce.x,ce.y,ce.z),T.push(Ie/L),T.push(1-Re/B),nt+=1}}for(let Re=0;Re<B;Re++)for(let Ae=0;Ae<L;Ae++){const Ie=I+Ae+Fe*Re,De=I+Ae+Fe*(Re+1),We=I+(Ae+1)+Fe*(Re+1),je=I+(Ae+1)+Fe*Re;a.push(Ie,De,je),a.push(De,We,je),Ge+=6}i.addGroup(M,Ge,pe),M+=Ge,I+=nt}}copy(b){return super.copy(b),this.parameters=Object.assign({},b.parameters),this}static fromJSON(b){return new r(b.width,b.height,b.depth,b.widthSegments,b.heightSegments,b.depthSegments)}}},422870:(Lt,Ve,F)=>{F.d(Ve,{b:()=>H});var s=F(5257),j=F(739920);class H extends s.L{constructor(c=1,b=1,f=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:c,height:b,widthSegments:f,heightSegments:o};const m=c/2,h=b/2,l=Math.floor(f),i=Math.floor(o),a=l+1,u=i+1,p=c/l,T=b/i,I=[],M=[],G=[],k=[];for(let R=0;R<u;R++){const U=R*T-h;for(let z=0;z<a;z++){const y=z*p-m;M.push(y,-U,0),G.push(0,0,1),k.push(z/l),k.push(1-R/i)}}for(let R=0;R<i;R++)for(let U=0;U<l;U++){const z=U+a*R,y=U+a*(R+1),A=U+1+a*(R+1),g=U+1+a*R;I.push(z,y,g),I.push(y,A,g)}this.setIndex(I),this.setAttribute("position",new j.qt(M,3)),this.setAttribute("normal",new j.qt(G,3)),this.setAttribute("uv",new j.qt(k,2))}copy(c){return super.copy(c),this.parameters=Object.assign({},c.parameters),this}static fromJSON(c){return new H(c.width,c.height,c.widthSegments,c.heightSegments)}}},238133:(Lt,Ve,F)=>{F.d(Ve,{i:()=>b});var s=F(339957),j=F(251750),H=F(272790),r=F(774153);let c=0;class b extends j.Q{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c++}),this.uuid=(0,r.lk)(),this.name="",this.type="Material",this.blending=H.NTi,this.side=H.hB5,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=H.ie2,this.blendDst=H.OuU,this.blendEquation=H.gO9,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new s.Q(0,0,0),this.blendAlpha=0,this.depthFunc=H.xSv,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H.sKt,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=H.VVr,this.stencilZFail=H.VVr,this.stencilZPass=H.VVr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(o){this._alphaTest>0!=o>0&&this.version++,this._alphaTest=o}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(o){if(o!==void 0)for(const m in o){const h=o[m];if(h===void 0){console.warn(`THREE.Material: parameter '${m}' has value of undefined.`);continue}const l=this[m];if(l===void 0){console.warn(`THREE.Material: '${m}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(h):l&&l.isVector3&&h&&h.isVector3?l.copy(h):this[m]=h}}toJSON(o){const m=o===void 0||typeof o=="string";m&&(o={textures:{},images:{}});const h={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};h.uuid=this.uuid,h.type=this.type,this.name!==""&&(h.name=this.name),this.color&&this.color.isColor&&(h.color=this.color.getHex()),this.roughness!==void 0&&(h.roughness=this.roughness),this.metalness!==void 0&&(h.metalness=this.metalness),this.sheen!==void 0&&(h.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(h.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(h.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(h.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(h.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(h.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(h.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(h.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(h.shininess=this.shininess),this.clearcoat!==void 0&&(h.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(h.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(h.clearcoatMap=this.clearcoatMap.toJSON(o).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(h.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(o).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(h.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(o).uuid,h.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(h.dispersion=this.dispersion),this.iridescence!==void 0&&(h.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(h.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(h.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(h.iridescenceMap=this.iridescenceMap.toJSON(o).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(h.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(o).uuid),this.anisotropy!==void 0&&(h.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(h.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(h.anisotropyMap=this.anisotropyMap.toJSON(o).uuid),this.map&&this.map.isTexture&&(h.map=this.map.toJSON(o).uuid),this.matcap&&this.matcap.isTexture&&(h.matcap=this.matcap.toJSON(o).uuid),this.alphaMap&&this.alphaMap.isTexture&&(h.alphaMap=this.alphaMap.toJSON(o).uuid),this.lightMap&&this.lightMap.isTexture&&(h.lightMap=this.lightMap.toJSON(o).uuid,h.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(h.aoMap=this.aoMap.toJSON(o).uuid,h.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(h.bumpMap=this.bumpMap.toJSON(o).uuid,h.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(h.normalMap=this.normalMap.toJSON(o).uuid,h.normalMapType=this.normalMapType,h.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(h.displacementMap=this.displacementMap.toJSON(o).uuid,h.displacementScale=this.displacementScale,h.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(h.roughnessMap=this.roughnessMap.toJSON(o).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(h.metalnessMap=this.metalnessMap.toJSON(o).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(h.emissiveMap=this.emissiveMap.toJSON(o).uuid),this.specularMap&&this.specularMap.isTexture&&(h.specularMap=this.specularMap.toJSON(o).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(h.specularIntensityMap=this.specularIntensityMap.toJSON(o).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(h.specularColorMap=this.specularColorMap.toJSON(o).uuid),this.envMap&&this.envMap.isTexture&&(h.envMap=this.envMap.toJSON(o).uuid,this.combine!==void 0&&(h.combine=this.combine)),this.envMapRotation!==void 0&&(h.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(h.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(h.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(h.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(h.gradientMap=this.gradientMap.toJSON(o).uuid),this.transmission!==void 0&&(h.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(h.transmissionMap=this.transmissionMap.toJSON(o).uuid),this.thickness!==void 0&&(h.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(h.thicknessMap=this.thicknessMap.toJSON(o).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(h.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(h.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(h.size=this.size),this.shadowSide!==null&&(h.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(h.sizeAttenuation=this.sizeAttenuation),this.blending!==H.NTi&&(h.blending=this.blending),this.side!==H.hB5&&(h.side=this.side),this.vertexColors===!0&&(h.vertexColors=!0),this.opacity<1&&(h.opacity=this.opacity),this.transparent===!0&&(h.transparent=!0),this.blendSrc!==H.ie2&&(h.blendSrc=this.blendSrc),this.blendDst!==H.OuU&&(h.blendDst=this.blendDst),this.blendEquation!==H.gO9&&(h.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(h.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(h.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(h.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(h.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(h.blendAlpha=this.blendAlpha),this.depthFunc!==H.xSv&&(h.depthFunc=this.depthFunc),this.depthTest===!1&&(h.depthTest=this.depthTest),this.depthWrite===!1&&(h.depthWrite=this.depthWrite),this.colorWrite===!1&&(h.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(h.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H.sKt&&(h.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(h.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(h.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==H.VVr&&(h.stencilFail=this.stencilFail),this.stencilZFail!==H.VVr&&(h.stencilZFail=this.stencilZFail),this.stencilZPass!==H.VVr&&(h.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(h.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(h.rotation=this.rotation),this.polygonOffset===!0&&(h.polygonOffset=!0),this.polygonOffsetFactor!==0&&(h.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(h.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(h.linewidth=this.linewidth),this.dashSize!==void 0&&(h.dashSize=this.dashSize),this.gapSize!==void 0&&(h.gapSize=this.gapSize),this.scale!==void 0&&(h.scale=this.scale),this.dithering===!0&&(h.dithering=!0),this.alphaTest>0&&(h.alphaTest=this.alphaTest),this.alphaHash===!0&&(h.alphaHash=!0),this.alphaToCoverage===!0&&(h.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(h.premultipliedAlpha=!0),this.forceSinglePass===!0&&(h.forceSinglePass=!0),this.wireframe===!0&&(h.wireframe=!0),this.wireframeLinewidth>1&&(h.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(h.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(h.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(h.flatShading=!0),this.visible===!1&&(h.visible=!1),this.toneMapped===!1&&(h.toneMapped=!1),this.fog===!1&&(h.fog=!1),Object.keys(this.userData).length>0&&(h.userData=this.userData);function l(i){const a=[];for(const u in i){const p=i[u];delete p.metadata,a.push(p)}return a}if(m){const i=l(o.textures),a=l(o.images);i.length>0&&(h.textures=i),a.length>0&&(h.images=a)}return h}clone(){return new this.constructor().copy(this)}copy(o){this.name=o.name,this.blending=o.blending,this.side=o.side,this.vertexColors=o.vertexColors,this.opacity=o.opacity,this.transparent=o.transparent,this.blendSrc=o.blendSrc,this.blendDst=o.blendDst,this.blendEquation=o.blendEquation,this.blendSrcAlpha=o.blendSrcAlpha,this.blendDstAlpha=o.blendDstAlpha,this.blendEquationAlpha=o.blendEquationAlpha,this.blendColor.copy(o.blendColor),this.blendAlpha=o.blendAlpha,this.depthFunc=o.depthFunc,this.depthTest=o.depthTest,this.depthWrite=o.depthWrite,this.stencilWriteMask=o.stencilWriteMask,this.stencilFunc=o.stencilFunc,this.stencilRef=o.stencilRef,this.stencilFuncMask=o.stencilFuncMask,this.stencilFail=o.stencilFail,this.stencilZFail=o.stencilZFail,this.stencilZPass=o.stencilZPass,this.stencilWrite=o.stencilWrite;const m=o.clippingPlanes;let h=null;if(m!==null){const l=m.length;h=new Array(l);for(let i=0;i!==l;++i)h[i]=m[i].clone()}return this.clippingPlanes=h,this.clipIntersection=o.clipIntersection,this.clipShadows=o.clipShadows,this.shadowSide=o.shadowSide,this.colorWrite=o.colorWrite,this.precision=o.precision,this.polygonOffset=o.polygonOffset,this.polygonOffsetFactor=o.polygonOffsetFactor,this.polygonOffsetUnits=o.polygonOffsetUnits,this.dithering=o.dithering,this.alphaTest=o.alphaTest,this.alphaHash=o.alphaHash,this.alphaToCoverage=o.alphaToCoverage,this.premultipliedAlpha=o.premultipliedAlpha,this.forceSinglePass=o.forceSinglePass,this.visible=o.visible,this.toneMapped=o.toneMapped,this.userData=JSON.parse(JSON.stringify(o.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(o){o===!0&&this.version++}}},51950:(Lt,Ve,F)=>{F.d(Ve,{V:()=>c});var s=F(238133),j=F(272790),H=F(339957),r=F(430799);class c extends s.i{constructor(f){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new H.Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new r.O,this.combine=j.caT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.specularMap=f.specularMap,this.alphaMap=f.alphaMap,this.envMap=f.envMap,this.envMapRotation.copy(f.envMapRotation),this.combine=f.combine,this.reflectivity=f.reflectivity,this.refractionRatio=f.refractionRatio,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.fog=f.fog,this}}},295641:(Lt,Ve,F)=>{F.d(Ve,{C:()=>H});var s=F(238133),j=F(272790);class H extends s.i{constructor(c){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j.Rkk,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(c)}copy(c){return super.copy(c),this.depthPacking=c.depthPacking,this.map=c.map,this.alphaMap=c.alphaMap,this.displacementMap=c.displacementMap,this.displacementScale=c.displacementScale,this.displacementBias=c.displacementBias,this.wireframe=c.wireframe,this.wireframeLinewidth=c.wireframeLinewidth,this}}},271807:(Lt,Ve,F)=>{F.d(Ve,{a:()=>j});var s=F(238133);class j extends s.i{constructor(r){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(r)}copy(r){return super.copy(r),this.map=r.map,this.alphaMap=r.alphaMap,this.displacementMap=r.displacementMap,this.displacementScale=r.displacementScale,this.displacementBias=r.displacementBias,this}}},457803:(Lt,Ve,F)=>{F.d(Ve,{B:()=>c});var s=F(238133),j=F(671619);const H=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,r=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class c extends s.i{constructor(f){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H,this.fragmentShader=r,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,f!==void 0&&this.setValues(f)}copy(f){return super.copy(f),this.fragmentShader=f.fragmentShader,this.vertexShader=f.vertexShader,this.uniforms=(0,j.lx)(f.uniforms),this.uniformsGroups=(0,j.Jd)(f.uniformsGroups),this.defines=Object.assign({},f.defines),this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.fog=f.fog,this.lights=f.lights,this.clipping=f.clipping,this.extensions=Object.assign({},f.extensions),this.glslVersion=f.glslVersion,this}toJSON(f){const o=super.toJSON(f);o.glslVersion=this.glslVersion,o.uniforms={};for(const h in this.uniforms){const i=this.uniforms[h].value;i&&i.isTexture?o.uniforms[h]={type:"t",value:i.toJSON(f).uuid}:i&&i.isColor?o.uniforms[h]={type:"c",value:i.getHex()}:i&&i.isVector2?o.uniforms[h]={type:"v2",value:i.toArray()}:i&&i.isVector3?o.uniforms[h]={type:"v3",value:i.toArray()}:i&&i.isVector4?o.uniforms[h]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?o.uniforms[h]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?o.uniforms[h]={type:"m4",value:i.toArray()}:o.uniforms[h]={value:i}}Object.keys(this.defines).length>0&&(o.defines=this.defines),o.vertexShader=this.vertexShader,o.fragmentShader=this.fragmentShader,o.lights=this.lights,o.clipping=this.clipping;const m={};for(const h in this.extensions)this.extensions[h]===!0&&(m[h]=!0);return Object.keys(m).length>0&&(o.extensions=m),o}}},523006:(Lt,Ve,F)=>{F.r(Ve),F.d(Ve,{Box3:()=>j});var s=F(824954);class j{constructor(M=new s.Vector3(1/0,1/0,1/0),G=new s.Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=M,this.max=G}set(M,G){return this.min.copy(M),this.max.copy(G),this}setFromArray(M){this.makeEmpty();for(let G=0,k=M.length;G<k;G+=3)this.expandByPoint(r.fromArray(M,G));return this}setFromBufferAttribute(M){this.makeEmpty();for(let G=0,k=M.count;G<k;G++)this.expandByPoint(r.fromBufferAttribute(M,G));return this}setFromPoints(M){this.makeEmpty();for(let G=0,k=M.length;G<k;G++)this.expandByPoint(M[G]);return this}setFromCenterAndSize(M,G){const k=r.copy(G).multiplyScalar(.5);return this.min.copy(M).sub(k),this.max.copy(M).add(k),this}setFromObject(M,G=!1){return this.makeEmpty(),this.expandByObject(M,G)}clone(){return new this.constructor().copy(this)}copy(M){return this.min.copy(M.min),this.max.copy(M.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(M){return this.isEmpty()?M.set(0,0,0):M.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(M){return this.isEmpty()?M.set(0,0,0):M.subVectors(this.max,this.min)}expandByPoint(M){return this.min.min(M),this.max.max(M),this}expandByVector(M){return this.min.sub(M),this.max.add(M),this}expandByScalar(M){return this.min.addScalar(-M),this.max.addScalar(M),this}expandByObject(M,G=!1){M.updateWorldMatrix(!1,!1);const k=M.geometry;if(k!==void 0){const U=k.getAttribute("position");if(G===!0&&U!==void 0&&M.isInstancedMesh!==!0)for(let z=0,y=U.count;z<y;z++)M.isMesh===!0?M.getVertexPosition(z,r):r.fromBufferAttribute(U,z),r.applyMatrix4(M.matrixWorld),this.expandByPoint(r);else M.boundingBox!==void 0?(M.boundingBox===null&&M.computeBoundingBox(),c.copy(M.boundingBox)):(k.boundingBox===null&&k.computeBoundingBox(),c.copy(k.boundingBox)),c.applyMatrix4(M.matrixWorld),this.union(c)}const R=M.children;for(let U=0,z=R.length;U<z;U++)this.expandByObject(R[U],G);return this}containsPoint(M){return M.x>=this.min.x&&M.x<=this.max.x&&M.y>=this.min.y&&M.y<=this.max.y&&M.z>=this.min.z&&M.z<=this.max.z}containsBox(M){return this.min.x<=M.min.x&&M.max.x<=this.max.x&&this.min.y<=M.min.y&&M.max.y<=this.max.y&&this.min.z<=M.min.z&&M.max.z<=this.max.z}getParameter(M,G){return G.set((M.x-this.min.x)/(this.max.x-this.min.x),(M.y-this.min.y)/(this.max.y-this.min.y),(M.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(M){return M.max.x>=this.min.x&&M.min.x<=this.max.x&&M.max.y>=this.min.y&&M.min.y<=this.max.y&&M.max.z>=this.min.z&&M.min.z<=this.max.z}intersectsSphere(M){return this.clampPoint(M.center,r),r.distanceToSquared(M.center)<=M.radius*M.radius}intersectsPlane(M){let G,k;return M.normal.x>0?(G=M.normal.x*this.min.x,k=M.normal.x*this.max.x):(G=M.normal.x*this.max.x,k=M.normal.x*this.min.x),M.normal.y>0?(G+=M.normal.y*this.min.y,k+=M.normal.y*this.max.y):(G+=M.normal.y*this.max.y,k+=M.normal.y*this.min.y),M.normal.z>0?(G+=M.normal.z*this.min.z,k+=M.normal.z*this.max.z):(G+=M.normal.z*this.max.z,k+=M.normal.z*this.min.z),G<=-M.constant&&k>=-M.constant}intersectsTriangle(M){if(this.isEmpty())return!1;this.getCenter(i),a.subVectors(this.max,i),b.subVectors(M.a,i),f.subVectors(M.b,i),o.subVectors(M.c,i),m.subVectors(f,b),h.subVectors(o,f),l.subVectors(b,o);let G=[0,-m.z,m.y,0,-h.z,h.y,0,-l.z,l.y,m.z,0,-m.x,h.z,0,-h.x,l.z,0,-l.x,-m.y,m.x,0,-h.y,h.x,0,-l.y,l.x,0];return!T(G,b,f,o,a)||(G=[1,0,0,0,1,0,0,0,1],!T(G,b,f,o,a))?!1:(u.crossVectors(m,h),G=[u.x,u.y,u.z],T(G,b,f,o,a))}clampPoint(M,G){return G.copy(M).clamp(this.min,this.max)}distanceToPoint(M){return this.clampPoint(M,r).distanceTo(M)}getBoundingSphere(M){return this.isEmpty()?M.makeEmpty():(this.getCenter(M.center),M.radius=this.getSize(r).length()*.5),M}intersect(M){return this.min.max(M.min),this.max.min(M.max),this.isEmpty()&&this.makeEmpty(),this}union(M){return this.min.min(M.min),this.max.max(M.max),this}applyMatrix4(M){return this.isEmpty()?this:(H[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(M),H[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(M),H[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(M),H[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(M),H[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(M),H[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(M),H[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(M),H[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(M),this.setFromPoints(H),this)}translate(M){return this.min.add(M),this.max.add(M),this}equals(M){return M.min.equals(this.min)&&M.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(M){return this.min.fromArray(M.min),this.max.fromArray(M.max),this}}const H=[new s.Vector3,new s.Vector3,new s.Vector3,new s.Vector3,new s.Vector3,new s.Vector3,new s.Vector3,new s.Vector3],r=new s.Vector3,c=new j,b=new s.Vector3,f=new s.Vector3,o=new s.Vector3,m=new s.Vector3,h=new s.Vector3,l=new s.Vector3,i=new s.Vector3,a=new s.Vector3,u=new s.Vector3,p=new s.Vector3;function T(I,M,G,k,R){for(let U=0,z=I.length-3;U<=z;U+=3){p.fromArray(I,U);const y=R.x*Math.abs(p.x)+R.y*Math.abs(p.y)+R.z*Math.abs(p.z),A=M.dot(p),g=G.dot(p),X=k.dot(p);if(Math.max(-Math.max(A,g,X),Math.min(A,g,X))>y)return!1}return!0}},339957:(Lt,Ve,F)=>{F.d(Ve,{Q:()=>o});var s=F(774153),j=F(116898),H=F(272790);const r={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},c={h:0,s:0,l:0},b={h:0,s:0,l:0};function f(h,l,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?h+(l-h)*6*i:i<1/2?l:i<2/3?h+(l-h)*6*(2/3-i):h}class o{constructor(l,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(l,i,a)}set(l,i,a){if(i===void 0&&a===void 0){const u=l;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(l,i,a);return this}setScalar(l){return this.r=l,this.g=l,this.b=l,this}setHex(l,i=H.er$){return l=Math.floor(l),this.r=(l>>16&255)/255,this.g=(l>>8&255)/255,this.b=(l&255)/255,j.pp.colorSpaceToWorking(this,i),this}setRGB(l,i,a,u=j.pp.workingColorSpace){return this.r=l,this.g=i,this.b=a,j.pp.colorSpaceToWorking(this,u),this}setHSL(l,i,a,u=j.pp.workingColorSpace){if(l=(0,s.rl)(l,1),i=(0,s.qE)(i,0,1),a=(0,s.qE)(a,0,1),i===0)this.r=this.g=this.b=a;else{const p=a<=.5?a*(1+i):a+i-a*i,T=2*a-p;this.r=f(T,p,l+1/3),this.g=f(T,p,l),this.b=f(T,p,l-1/3)}return j.pp.colorSpaceToWorking(this,u),this}setStyle(l,i=H.er$){function a(p){p!==void 0&&parseFloat(p)<1&&console.warn("THREE.Color: Alpha component of "+l+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(l)){let p;const T=u[1],I=u[2];switch(T){case"rgb":case"rgba":if(p=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(I))return a(p[4]),this.setRGB(Math.min(255,parseInt(p[1],10))/255,Math.min(255,parseInt(p[2],10))/255,Math.min(255,parseInt(p[3],10))/255,i);if(p=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(I))return a(p[4]),this.setRGB(Math.min(100,parseInt(p[1],10))/100,Math.min(100,parseInt(p[2],10))/100,Math.min(100,parseInt(p[3],10))/100,i);break;case"hsl":case"hsla":if(p=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(I))return a(p[4]),this.setHSL(parseFloat(p[1])/360,parseFloat(p[2])/100,parseFloat(p[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+l)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(l)){const p=u[1],T=p.length;if(T===3)return this.setRGB(parseInt(p.charAt(0),16)/15,parseInt(p.charAt(1),16)/15,parseInt(p.charAt(2),16)/15,i);if(T===6)return this.setHex(parseInt(p,16),i);console.warn("THREE.Color: Invalid hex color "+l)}else if(l&&l.length>0)return this.setColorName(l,i);return this}setColorName(l,i=H.er$){const a=r[l.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+l),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(l){return this.r=l.r,this.g=l.g,this.b=l.b,this}copySRGBToLinear(l){return this.r=(0,j.dk)(l.r),this.g=(0,j.dk)(l.g),this.b=(0,j.dk)(l.b),this}copyLinearToSRGB(l){return this.r=(0,j.rd)(l.r),this.g=(0,j.rd)(l.g),this.b=(0,j.rd)(l.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(l=H.er$){return j.pp.workingToColorSpace(m.copy(this),l),Math.round((0,s.qE)(m.r*255,0,255))*65536+Math.round((0,s.qE)(m.g*255,0,255))*256+Math.round((0,s.qE)(m.b*255,0,255))}getHexString(l=H.er$){return("000000"+this.getHex(l).toString(16)).slice(-6)}getHSL(l,i=j.pp.workingColorSpace){j.pp.workingToColorSpace(m.copy(this),i);const a=m.r,u=m.g,p=m.b,T=Math.max(a,u,p),I=Math.min(a,u,p);let M,G;const k=(I+T)/2;if(I===T)M=0,G=0;else{const R=T-I;switch(G=k<=.5?R/(T+I):R/(2-T-I),T){case a:M=(u-p)/R+(u<p?6:0);break;case u:M=(p-a)/R+2;break;case p:M=(a-u)/R+4;break}M/=6}return l.h=M,l.s=G,l.l=k,l}getRGB(l,i=j.pp.workingColorSpace){return j.pp.workingToColorSpace(m.copy(this),i),l.r=m.r,l.g=m.g,l.b=m.b,l}getStyle(l=H.er$){j.pp.workingToColorSpace(m.copy(this),l);const i=m.r,a=m.g,u=m.b;return l!==H.er$?`color(${l} ${i.toFixed(3)} ${a.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(u*255)})`}offsetHSL(l,i,a){return this.getHSL(c),this.setHSL(c.h+l,c.s+i,c.l+a)}add(l){return this.r+=l.r,this.g+=l.g,this.b+=l.b,this}addColors(l,i){return this.r=l.r+i.r,this.g=l.g+i.g,this.b=l.b+i.b,this}addScalar(l){return this.r+=l,this.g+=l,this.b+=l,this}sub(l){return this.r=Math.max(0,this.r-l.r),this.g=Math.max(0,this.g-l.g),this.b=Math.max(0,this.b-l.b),this}multiply(l){return this.r*=l.r,this.g*=l.g,this.b*=l.b,this}multiplyScalar(l){return this.r*=l,this.g*=l,this.b*=l,this}lerp(l,i){return this.r+=(l.r-this.r)*i,this.g+=(l.g-this.g)*i,this.b+=(l.b-this.b)*i,this}lerpColors(l,i,a){return this.r=l.r+(i.r-l.r)*a,this.g=l.g+(i.g-l.g)*a,this.b=l.b+(i.b-l.b)*a,this}lerpHSL(l,i){this.getHSL(c),l.getHSL(b);const a=(0,s.Cc)(c.h,b.h,i),u=(0,s.Cc)(c.s,b.s,i),p=(0,s.Cc)(c.l,b.l,i);return this.setHSL(a,u,p),this}setFromVector3(l){return this.r=l.x,this.g=l.y,this.b=l.z,this}applyMatrix3(l){const i=this.r,a=this.g,u=this.b,p=l.elements;return this.r=p[0]*i+p[3]*a+p[6]*u,this.g=p[1]*i+p[4]*a+p[7]*u,this.b=p[2]*i+p[5]*a+p[8]*u,this}equals(l){return l.r===this.r&&l.g===this.g&&l.b===this.b}fromArray(l,i=0){return this.r=l[i],this.g=l[i+1],this.b=l[i+2],this}toArray(l=[],i=0){return l[i]=this.r,l[i+1]=this.g,l[i+2]=this.b,l}fromBufferAttribute(l,i){return this.r=l.getX(i),this.g=l.getY(i),this.b=l.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const m=new o;o.NAMES=r},116898:(Lt,Ve,F)=>{F.d(Ve,{dk:()=>o,pp:()=>f,rd:()=>m});var s=F(272790),j=F(914164),H=F(472686);const r=new j.d().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c=new j.d().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b(){const h={enabled:!0,workingColorSpace:s.Zr2,spaces:{},convert:function(u,p,T){return this.enabled===!1||p===T||!p||!T||(this.spaces[p].transfer===s.KLL&&(u.r=o(u.r),u.g=o(u.g),u.b=o(u.b)),this.spaces[p].primaries!==this.spaces[T].primaries&&(u.applyMatrix3(this.spaces[p].toXYZ),u.applyMatrix3(this.spaces[T].fromXYZ)),this.spaces[T].transfer===s.KLL&&(u.r=m(u.r),u.g=m(u.g),u.b=m(u.b))),u},workingToColorSpace:function(u,p){return this.convert(u,this.workingColorSpace,p)},colorSpaceToWorking:function(u,p){return this.convert(u,p,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===s.jf0?s.VxR:this.spaces[u].transfer},getLuminanceCoefficients:function(u,p=this.workingColorSpace){return u.fromArray(this.spaces[p].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,p,T){return u.copy(this.spaces[p].toXYZ).multiply(this.spaces[T].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,p){return(0,H.mc)("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),h.workingToColorSpace(u,p)},toWorkingColorSpace:function(u,p){return(0,H.mc)("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),h.colorSpaceToWorking(u,p)}},l=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return h.define({[s.Zr2]:{primaries:l,whitePoint:a,transfer:s.VxR,toXYZ:r,fromXYZ:c,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:s.er$},outputColorSpaceConfig:{drawingBufferColorSpace:s.er$}},[s.er$]:{primaries:l,whitePoint:a,transfer:s.KLL,toXYZ:r,fromXYZ:c,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:s.er$}}}),h}const f=b();function o(h){return h<.04045?h*.0773993808:Math.pow(h*.9478672986+.0521327014,2.4)}function m(h){return h<.0031308?h*12.92:1.055*Math.pow(h,.41666)-.055}},430799:(Lt,Ve,F)=>{F.d(Ve,{O:()=>b});var s=F(716920),j=F(541761),H=F(774153);const r=new j.k,c=new s.P;class b{constructor(o=0,m=0,h=0,l=b.DEFAULT_ORDER){this.isEuler=!0,this._x=o,this._y=m,this._z=h,this._order=l}get x(){return this._x}set x(o){this._x=o,this._onChangeCallback()}get y(){return this._y}set y(o){this._y=o,this._onChangeCallback()}get z(){return this._z}set z(o){this._z=o,this._onChangeCallback()}get order(){return this._order}set order(o){this._order=o,this._onChangeCallback()}set(o,m,h,l=this._order){return this._x=o,this._y=m,this._z=h,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(o){return this._x=o._x,this._y=o._y,this._z=o._z,this._order=o._order,this._onChangeCallback(),this}setFromRotationMatrix(o,m=this._order,h=!0){const l=o.elements,i=l[0],a=l[4],u=l[8],p=l[1],T=l[5],I=l[9],M=l[2],G=l[6],k=l[10];switch(m){case"XYZ":this._y=Math.asin((0,H.qE)(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-I,k),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(G,T),this._z=0);break;case"YXZ":this._x=Math.asin(-(0,H.qE)(I,-1,1)),Math.abs(I)<.9999999?(this._y=Math.atan2(u,k),this._z=Math.atan2(p,T)):(this._y=Math.atan2(-M,i),this._z=0);break;case"ZXY":this._x=Math.asin((0,H.qE)(G,-1,1)),Math.abs(G)<.9999999?(this._y=Math.atan2(-M,k),this._z=Math.atan2(-a,T)):(this._y=0,this._z=Math.atan2(p,i));break;case"ZYX":this._y=Math.asin(-(0,H.qE)(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(G,k),this._z=Math.atan2(p,i)):(this._x=0,this._z=Math.atan2(-a,T));break;case"YZX":this._z=Math.asin((0,H.qE)(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-I,T),this._y=Math.atan2(-M,i)):(this._x=0,this._y=Math.atan2(u,k));break;case"XZY":this._z=Math.asin(-(0,H.qE)(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(G,T),this._y=Math.atan2(u,i)):(this._x=Math.atan2(-I,k),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+m)}return this._order=m,h===!0&&this._onChangeCallback(),this}setFromQuaternion(o,m,h){return r.makeRotationFromQuaternion(o),this.setFromRotationMatrix(r,m,h)}setFromVector3(o,m=this._order){return this.set(o.x,o.y,o.z,m)}reorder(o){return c.setFromEuler(this),this.setFromQuaternion(c,o)}equals(o){return o._x===this._x&&o._y===this._y&&o._z===this._z&&o._order===this._order}fromArray(o){return this._x=o[0],this._y=o[1],this._z=o[2],o[3]!==void 0&&(this._order=o[3]),this._onChangeCallback(),this}toArray(o=[],m=0){return o[m]=this._x,o[m+1]=this._y,o[m+2]=this._z,o[m+3]=this._order,o}_onChange(o){return this._onChangeCallback=o,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}b.DEFAULT_ORDER="XYZ"},248056:(Lt,Ve,F)=>{F.d(Ve,{P:()=>m});var s=F(272790),j=F(237481),H=F(824954),r=F(721993),c=F(432064);const b=new r.i,f=new j.I(.5,.5),o=new H.Vector3;class m{constructor(l=new c.Z,i=new c.Z,a=new c.Z,u=new c.Z,p=new c.Z,T=new c.Z){this.planes=[l,i,a,u,p,T]}set(l,i,a,u,p,T){const I=this.planes;return I[0].copy(l),I[1].copy(i),I[2].copy(a),I[3].copy(u),I[4].copy(p),I[5].copy(T),this}copy(l){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(l.planes[a]);return this}setFromProjectionMatrix(l,i=s.TdN,a=!1){const u=this.planes,p=l.elements,T=p[0],I=p[1],M=p[2],G=p[3],k=p[4],R=p[5],U=p[6],z=p[7],y=p[8],A=p[9],g=p[10],X=p[11],L=p[12],B=p[13],pe=p[14],ae=p[15];if(u[0].setComponents(G-T,z-k,X-y,ae-L).normalize(),u[1].setComponents(G+T,z+k,X+y,ae+L).normalize(),u[2].setComponents(G+I,z+R,X+A,ae+B).normalize(),u[3].setComponents(G-I,z-R,X-A,ae-B).normalize(),a)u[4].setComponents(M,U,g,pe).normalize(),u[5].setComponents(G-M,z-U,X-g,ae-pe).normalize();else if(u[4].setComponents(G-M,z-U,X-g,ae-pe).normalize(),i===s.TdN)u[5].setComponents(G+M,z+U,X+g,ae+pe).normalize();else if(i===s.i7u)u[5].setComponents(M,U,g,pe).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(l){if(l.boundingSphere!==void 0)l.boundingSphere===null&&l.computeBoundingSphere(),b.copy(l.boundingSphere).applyMatrix4(l.matrixWorld);else{const i=l.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),b.copy(i.boundingSphere).applyMatrix4(l.matrixWorld)}return this.intersectsSphere(b)}intersectsSprite(l){b.center.set(0,0,0);const i=f.distanceTo(l.center);return b.radius=.7071067811865476+i,b.applyMatrix4(l.matrixWorld),this.intersectsSphere(b)}intersectsSphere(l){const i=this.planes,a=l.center,u=-l.radius;for(let p=0;p<6;p++)if(i[p].distanceToPoint(a)<u)return!1;return!0}intersectsBox(l){const i=this.planes;for(let a=0;a<6;a++){const u=i[a];if(o.x=u.normal.x>0?l.max.x:l.min.x,o.y=u.normal.y>0?l.max.y:l.min.y,o.z=u.normal.z>0?l.max.z:l.min.z,u.distanceToPoint(o)<0)return!1}return!0}containsPoint(l){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(l)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}},774153:(Lt,Ve,F)=>{F.d(Ve,{Cc:()=>h,NU:()=>A,S8:()=>g,a5:()=>r,cj:()=>X,lk:()=>c,qE:()=>b,rl:()=>f,up:()=>H});const s=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let j=1234567;const H=Math.PI/180,r=180/Math.PI;function c(){const L=Math.random()*4294967295|0,B=Math.random()*4294967295|0,pe=Math.random()*4294967295|0,ae=Math.random()*4294967295|0;return(s[L&255]+s[L>>8&255]+s[L>>16&255]+s[L>>24&255]+"-"+s[B&255]+s[B>>8&255]+"-"+s[B>>16&15|64]+s[B>>24&255]+"-"+s[pe&63|128]+s[pe>>8&255]+"-"+s[pe>>16&255]+s[pe>>24&255]+s[ae&255]+s[ae>>8&255]+s[ae>>16&255]+s[ae>>24&255]).toLowerCase()}function b(L,B,pe){return Math.max(B,Math.min(pe,L))}function f(L,B){return(L%B+B)%B}function o(L,B,pe,ae,xe){return ae+(L-B)*(xe-ae)/(pe-B)}function m(L,B,pe){return L!==B?(pe-L)/(B-L):0}function h(L,B,pe){return(1-pe)*L+pe*B}function l(L,B,pe,ae){return h(L,B,1-Math.exp(-pe*ae))}function i(L,B=1){return B-Math.abs(f(L,B*2)-B)}function a(L,B,pe){return L<=B?0:L>=pe?1:(L=(L-B)/(pe-B),L*L*(3-2*L))}function u(L,B,pe){return L<=B?0:L>=pe?1:(L=(L-B)/(pe-B),L*L*L*(L*(L*6-15)+10))}function p(L,B){return L+Math.floor(Math.random()*(B-L+1))}function T(L,B){return L+Math.random()*(B-L)}function I(L){return L*(.5-Math.random())}function M(L){L!==void 0&&(j=L);let B=j+=1831565813;return B=Math.imul(B^B>>>15,B|1),B^=B+Math.imul(B^B>>>7,B|61),((B^B>>>14)>>>0)/4294967296}function G(L){return L*H}function k(L){return L*r}function R(L){return(L&L-1)===0&&L!==0}function U(L){return Math.pow(2,Math.ceil(Math.log(L)/Math.LN2))}function z(L){return Math.pow(2,Math.floor(Math.log(L)/Math.LN2))}function y(L,B,pe,ae,xe){const ke=Math.cos,qe=Math.sin,Ee=ke(pe/2),Fe=qe(pe/2),it=ke((B+ae)/2),nt=qe((B+ae)/2),Ge=ke((B-ae)/2),ce=qe((B-ae)/2),Re=ke((ae-B)/2),Ae=qe((ae-B)/2);switch(xe){case"XYX":L.set(Ee*nt,Fe*Ge,Fe*ce,Ee*it);break;case"YZY":L.set(Fe*ce,Ee*nt,Fe*Ge,Ee*it);break;case"ZXZ":L.set(Fe*Ge,Fe*ce,Ee*nt,Ee*it);break;case"XZX":L.set(Ee*nt,Fe*Ae,Fe*Re,Ee*it);break;case"YXY":L.set(Fe*Re,Ee*nt,Fe*Ae,Ee*it);break;case"ZYZ":L.set(Fe*Ae,Fe*Re,Ee*nt,Ee*it);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+xe)}}function A(L,B){switch(B.constructor){case Float32Array:return L;case Uint32Array:return L/4294967295;case Uint16Array:return L/65535;case Uint8Array:return L/255;case Int32Array:return Math.max(L/2147483647,-1);case Int16Array:return Math.max(L/32767,-1);case Int8Array:return Math.max(L/127,-1);default:throw new Error("Invalid component type.")}}function g(L,B){switch(B.constructor){case Float32Array:return L;case Uint32Array:return Math.round(L*4294967295);case Uint16Array:return Math.round(L*65535);case Uint8Array:return Math.round(L*255);case Int32Array:return Math.round(L*2147483647);case Int16Array:return Math.round(L*32767);case Int8Array:return Math.round(L*127);default:throw new Error("Invalid component type.")}}const X={DEG2RAD:H,RAD2DEG:r,generateUUID:c,clamp:b,euclideanModulo:f,mapLinear:o,inverseLerp:m,lerp:h,damp:l,pingpong:i,smoothstep:a,smootherstep:u,randInt:p,randFloat:T,randFloatSpread:I,seededRandom:M,degToRad:G,radToDeg:k,isPowerOfTwo:R,ceilPowerOfTwo:U,floorPowerOfTwo:z,setQuaternionFromProperEuler:y,normalize:g,denormalize:A}},914164:(Lt,Ve,F)=>{F.d(Ve,{d:()=>s});class s{constructor(r,c,b,f,o,m,h,l,i){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],r!==void 0&&this.set(r,c,b,f,o,m,h,l,i)}set(r,c,b,f,o,m,h,l,i){const a=this.elements;return a[0]=r,a[1]=f,a[2]=h,a[3]=c,a[4]=o,a[5]=l,a[6]=b,a[7]=m,a[8]=i,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(r){const c=this.elements,b=r.elements;return c[0]=b[0],c[1]=b[1],c[2]=b[2],c[3]=b[3],c[4]=b[4],c[5]=b[5],c[6]=b[6],c[7]=b[7],c[8]=b[8],this}extractBasis(r,c,b){return r.setFromMatrix3Column(this,0),c.setFromMatrix3Column(this,1),b.setFromMatrix3Column(this,2),this}setFromMatrix4(r){const c=r.elements;return this.set(c[0],c[4],c[8],c[1],c[5],c[9],c[2],c[6],c[10]),this}multiply(r){return this.multiplyMatrices(this,r)}premultiply(r){return this.multiplyMatrices(r,this)}multiplyMatrices(r,c){const b=r.elements,f=c.elements,o=this.elements,m=b[0],h=b[3],l=b[6],i=b[1],a=b[4],u=b[7],p=b[2],T=b[5],I=b[8],M=f[0],G=f[3],k=f[6],R=f[1],U=f[4],z=f[7],y=f[2],A=f[5],g=f[8];return o[0]=m*M+h*R+l*y,o[3]=m*G+h*U+l*A,o[6]=m*k+h*z+l*g,o[1]=i*M+a*R+u*y,o[4]=i*G+a*U+u*A,o[7]=i*k+a*z+u*g,o[2]=p*M+T*R+I*y,o[5]=p*G+T*U+I*A,o[8]=p*k+T*z+I*g,this}multiplyScalar(r){const c=this.elements;return c[0]*=r,c[3]*=r,c[6]*=r,c[1]*=r,c[4]*=r,c[7]*=r,c[2]*=r,c[5]*=r,c[8]*=r,this}determinant(){const r=this.elements,c=r[0],b=r[1],f=r[2],o=r[3],m=r[4],h=r[5],l=r[6],i=r[7],a=r[8];return c*m*a-c*h*i-b*o*a+b*h*l+f*o*i-f*m*l}invert(){const r=this.elements,c=r[0],b=r[1],f=r[2],o=r[3],m=r[4],h=r[5],l=r[6],i=r[7],a=r[8],u=a*m-h*i,p=h*l-a*o,T=i*o-m*l,I=c*u+b*p+f*T;if(I===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/I;return r[0]=u*M,r[1]=(f*i-a*b)*M,r[2]=(h*b-f*m)*M,r[3]=p*M,r[4]=(a*c-f*l)*M,r[5]=(f*o-h*c)*M,r[6]=T*M,r[7]=(b*l-i*c)*M,r[8]=(m*c-b*o)*M,this}transpose(){let r;const c=this.elements;return r=c[1],c[1]=c[3],c[3]=r,r=c[2],c[2]=c[6],c[6]=r,r=c[5],c[5]=c[7],c[7]=r,this}getNormalMatrix(r){return this.setFromMatrix4(r).invert().transpose()}transposeIntoArray(r){const c=this.elements;return r[0]=c[0],r[1]=c[3],r[2]=c[6],r[3]=c[1],r[4]=c[4],r[5]=c[7],r[6]=c[2],r[7]=c[5],r[8]=c[8],this}setUvTransform(r,c,b,f,o,m,h){const l=Math.cos(o),i=Math.sin(o);return this.set(b*l,b*i,-b*(l*m+i*h)+m+r,-f*i,f*l,-f*(-i*m+l*h)+h+c,0,0,1),this}scale(r,c){return this.premultiply(j.makeScale(r,c)),this}rotate(r){return this.premultiply(j.makeRotation(-r)),this}translate(r,c){return this.premultiply(j.makeTranslation(r,c)),this}makeTranslation(r,c){return r.isVector2?this.set(1,0,r.x,0,1,r.y,0,0,1):this.set(1,0,r,0,1,c,0,0,1),this}makeRotation(r){const c=Math.cos(r),b=Math.sin(r);return this.set(c,-b,0,b,c,0,0,0,1),this}makeScale(r,c){return this.set(r,0,0,0,c,0,0,0,1),this}equals(r){const c=this.elements,b=r.elements;for(let f=0;f<9;f++)if(c[f]!==b[f])return!1;return!0}fromArray(r,c=0){for(let b=0;b<9;b++)this.elements[b]=r[b+c];return this}toArray(r=[],c=0){const b=this.elements;return r[c]=b[0],r[c+1]=b[1],r[c+2]=b[2],r[c+3]=b[3],r[c+4]=b[4],r[c+5]=b[5],r[c+6]=b[6],r[c+7]=b[7],r[c+8]=b[8],r}clone(){return new this.constructor().fromArray(this.elements)}}const j=new s},541761:(Lt,Ve,F)=>{F.d(Ve,{k:()=>H});var s=F(272790),j=F(824954);class H{constructor(i,a,u,p,T,I,M,G,k,R,U,z,y,A,g,X){H.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],i!==void 0&&this.set(i,a,u,p,T,I,M,G,k,R,U,z,y,A,g,X)}set(i,a,u,p,T,I,M,G,k,R,U,z,y,A,g,X){const L=this.elements;return L[0]=i,L[4]=a,L[8]=u,L[12]=p,L[1]=T,L[5]=I,L[9]=M,L[13]=G,L[2]=k,L[6]=R,L[10]=U,L[14]=z,L[3]=y,L[7]=A,L[11]=g,L[15]=X,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new H().fromArray(this.elements)}copy(i){const a=this.elements,u=i.elements;return a[0]=u[0],a[1]=u[1],a[2]=u[2],a[3]=u[3],a[4]=u[4],a[5]=u[5],a[6]=u[6],a[7]=u[7],a[8]=u[8],a[9]=u[9],a[10]=u[10],a[11]=u[11],a[12]=u[12],a[13]=u[13],a[14]=u[14],a[15]=u[15],this}copyPosition(i){const a=this.elements,u=i.elements;return a[12]=u[12],a[13]=u[13],a[14]=u[14],this}setFromMatrix3(i){const a=i.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(i,a,u){return i.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),u.setFromMatrixColumn(this,2),this}makeBasis(i,a,u){return this.set(i.x,a.x,u.x,0,i.y,a.y,u.y,0,i.z,a.z,u.z,0,0,0,0,1),this}extractRotation(i){const a=this.elements,u=i.elements,p=1/r.setFromMatrixColumn(i,0).length(),T=1/r.setFromMatrixColumn(i,1).length(),I=1/r.setFromMatrixColumn(i,2).length();return a[0]=u[0]*p,a[1]=u[1]*p,a[2]=u[2]*p,a[3]=0,a[4]=u[4]*T,a[5]=u[5]*T,a[6]=u[6]*T,a[7]=0,a[8]=u[8]*I,a[9]=u[9]*I,a[10]=u[10]*I,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(i){const a=this.elements,u=i.x,p=i.y,T=i.z,I=Math.cos(u),M=Math.sin(u),G=Math.cos(p),k=Math.sin(p),R=Math.cos(T),U=Math.sin(T);if(i.order==="XYZ"){const z=I*R,y=I*U,A=M*R,g=M*U;a[0]=G*R,a[4]=-G*U,a[8]=k,a[1]=y+A*k,a[5]=z-g*k,a[9]=-M*G,a[2]=g-z*k,a[6]=A+y*k,a[10]=I*G}else if(i.order==="YXZ"){const z=G*R,y=G*U,A=k*R,g=k*U;a[0]=z+g*M,a[4]=A*M-y,a[8]=I*k,a[1]=I*U,a[5]=I*R,a[9]=-M,a[2]=y*M-A,a[6]=g+z*M,a[10]=I*G}else if(i.order==="ZXY"){const z=G*R,y=G*U,A=k*R,g=k*U;a[0]=z-g*M,a[4]=-I*U,a[8]=A+y*M,a[1]=y+A*M,a[5]=I*R,a[9]=g-z*M,a[2]=-I*k,a[6]=M,a[10]=I*G}else if(i.order==="ZYX"){const z=I*R,y=I*U,A=M*R,g=M*U;a[0]=G*R,a[4]=A*k-y,a[8]=z*k+g,a[1]=G*U,a[5]=g*k+z,a[9]=y*k-A,a[2]=-k,a[6]=M*G,a[10]=I*G}else if(i.order==="YZX"){const z=I*G,y=I*k,A=M*G,g=M*k;a[0]=G*R,a[4]=g-z*U,a[8]=A*U+y,a[1]=U,a[5]=I*R,a[9]=-M*R,a[2]=-k*R,a[6]=y*U+A,a[10]=z-g*U}else if(i.order==="XZY"){const z=I*G,y=I*k,A=M*G,g=M*k;a[0]=G*R,a[4]=-U,a[8]=k*R,a[1]=z*U+g,a[5]=I*R,a[9]=y*U-A,a[2]=A*U-y,a[6]=M*R,a[10]=g*U+z}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(i){return this.compose(b,i,f)}lookAt(i,a,u){const p=this.elements;return h.subVectors(i,a),h.lengthSq()===0&&(h.z=1),h.normalize(),o.crossVectors(u,h),o.lengthSq()===0&&(Math.abs(u.z)===1?h.x+=1e-4:h.z+=1e-4,h.normalize(),o.crossVectors(u,h)),o.normalize(),m.crossVectors(h,o),p[0]=o.x,p[4]=m.x,p[8]=h.x,p[1]=o.y,p[5]=m.y,p[9]=h.y,p[2]=o.z,p[6]=m.z,p[10]=h.z,this}multiply(i){return this.multiplyMatrices(this,i)}premultiply(i){return this.multiplyMatrices(i,this)}multiplyMatrices(i,a){const u=i.elements,p=a.elements,T=this.elements,I=u[0],M=u[4],G=u[8],k=u[12],R=u[1],U=u[5],z=u[9],y=u[13],A=u[2],g=u[6],X=u[10],L=u[14],B=u[3],pe=u[7],ae=u[11],xe=u[15],ke=p[0],qe=p[4],Ee=p[8],Fe=p[12],it=p[1],nt=p[5],Ge=p[9],ce=p[13],Re=p[2],Ae=p[6],Ie=p[10],De=p[14],We=p[3],je=p[7],et=p[11],Mt=p[15];return T[0]=I*ke+M*it+G*Re+k*We,T[4]=I*qe+M*nt+G*Ae+k*je,T[8]=I*Ee+M*Ge+G*Ie+k*et,T[12]=I*Fe+M*ce+G*De+k*Mt,T[1]=R*ke+U*it+z*Re+y*We,T[5]=R*qe+U*nt+z*Ae+y*je,T[9]=R*Ee+U*Ge+z*Ie+y*et,T[13]=R*Fe+U*ce+z*De+y*Mt,T[2]=A*ke+g*it+X*Re+L*We,T[6]=A*qe+g*nt+X*Ae+L*je,T[10]=A*Ee+g*Ge+X*Ie+L*et,T[14]=A*Fe+g*ce+X*De+L*Mt,T[3]=B*ke+pe*it+ae*Re+xe*We,T[7]=B*qe+pe*nt+ae*Ae+xe*je,T[11]=B*Ee+pe*Ge+ae*Ie+xe*et,T[15]=B*Fe+pe*ce+ae*De+xe*Mt,this}multiplyScalar(i){const a=this.elements;return a[0]*=i,a[4]*=i,a[8]*=i,a[12]*=i,a[1]*=i,a[5]*=i,a[9]*=i,a[13]*=i,a[2]*=i,a[6]*=i,a[10]*=i,a[14]*=i,a[3]*=i,a[7]*=i,a[11]*=i,a[15]*=i,this}determinant(){const i=this.elements,a=i[0],u=i[4],p=i[8],T=i[12],I=i[1],M=i[5],G=i[9],k=i[13],R=i[2],U=i[6],z=i[10],y=i[14],A=i[3],g=i[7],X=i[11],L=i[15];return A*(+T*G*U-p*k*U-T*M*z+u*k*z+p*M*y-u*G*y)+g*(+a*G*y-a*k*z+T*I*z-p*I*y+p*k*R-T*G*R)+X*(+a*k*U-a*M*y-T*I*U+u*I*y+T*M*R-u*k*R)+L*(-p*M*R-a*G*U+a*M*z+p*I*U-u*I*z+u*G*R)}transpose(){const i=this.elements;let a;return a=i[1],i[1]=i[4],i[4]=a,a=i[2],i[2]=i[8],i[8]=a,a=i[6],i[6]=i[9],i[9]=a,a=i[3],i[3]=i[12],i[12]=a,a=i[7],i[7]=i[13],i[13]=a,a=i[11],i[11]=i[14],i[14]=a,this}setPosition(i,a,u){const p=this.elements;return i.isVector3?(p[12]=i.x,p[13]=i.y,p[14]=i.z):(p[12]=i,p[13]=a,p[14]=u),this}invert(){const i=this.elements,a=i[0],u=i[1],p=i[2],T=i[3],I=i[4],M=i[5],G=i[6],k=i[7],R=i[8],U=i[9],z=i[10],y=i[11],A=i[12],g=i[13],X=i[14],L=i[15],B=U*X*k-g*z*k+g*G*y-M*X*y-U*G*L+M*z*L,pe=A*z*k-R*X*k-A*G*y+I*X*y+R*G*L-I*z*L,ae=R*g*k-A*U*k+A*M*y-I*g*y-R*M*L+I*U*L,xe=A*U*G-R*g*G-A*M*z+I*g*z+R*M*X-I*U*X,ke=a*B+u*pe+p*ae+T*xe;if(ke===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const qe=1/ke;return i[0]=B*qe,i[1]=(g*z*T-U*X*T-g*p*y+u*X*y+U*p*L-u*z*L)*qe,i[2]=(M*X*T-g*G*T+g*p*k-u*X*k-M*p*L+u*G*L)*qe,i[3]=(U*G*T-M*z*T-U*p*k+u*z*k+M*p*y-u*G*y)*qe,i[4]=pe*qe,i[5]=(R*X*T-A*z*T+A*p*y-a*X*y-R*p*L+a*z*L)*qe,i[6]=(A*G*T-I*X*T-A*p*k+a*X*k+I*p*L-a*G*L)*qe,i[7]=(I*z*T-R*G*T+R*p*k-a*z*k-I*p*y+a*G*y)*qe,i[8]=ae*qe,i[9]=(A*U*T-R*g*T-A*u*y+a*g*y+R*u*L-a*U*L)*qe,i[10]=(I*g*T-A*M*T+A*u*k-a*g*k-I*u*L+a*M*L)*qe,i[11]=(R*M*T-I*U*T-R*u*k+a*U*k+I*u*y-a*M*y)*qe,i[12]=xe*qe,i[13]=(R*g*p-A*U*p+A*u*z-a*g*z-R*u*X+a*U*X)*qe,i[14]=(A*M*p-I*g*p-A*u*G+a*g*G+I*u*X-a*M*X)*qe,i[15]=(I*U*p-R*M*p+R*u*G-a*U*G-I*u*z+a*M*z)*qe,this}scale(i){const a=this.elements,u=i.x,p=i.y,T=i.z;return a[0]*=u,a[4]*=p,a[8]*=T,a[1]*=u,a[5]*=p,a[9]*=T,a[2]*=u,a[6]*=p,a[10]*=T,a[3]*=u,a[7]*=p,a[11]*=T,this}getMaxScaleOnAxis(){const i=this.elements,a=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],u=i[4]*i[4]+i[5]*i[5]+i[6]*i[6],p=i[8]*i[8]+i[9]*i[9]+i[10]*i[10];return Math.sqrt(Math.max(a,u,p))}makeTranslation(i,a,u){return i.isVector3?this.set(1,0,0,i.x,0,1,0,i.y,0,0,1,i.z,0,0,0,1):this.set(1,0,0,i,0,1,0,a,0,0,1,u,0,0,0,1),this}makeRotationX(i){const a=Math.cos(i),u=Math.sin(i);return this.set(1,0,0,0,0,a,-u,0,0,u,a,0,0,0,0,1),this}makeRotationY(i){const a=Math.cos(i),u=Math.sin(i);return this.set(a,0,u,0,0,1,0,0,-u,0,a,0,0,0,0,1),this}makeRotationZ(i){const a=Math.cos(i),u=Math.sin(i);return this.set(a,-u,0,0,u,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(i,a){const u=Math.cos(a),p=Math.sin(a),T=1-u,I=i.x,M=i.y,G=i.z,k=T*I,R=T*M;return this.set(k*I+u,k*M-p*G,k*G+p*M,0,k*M+p*G,R*M+u,R*G-p*I,0,k*G-p*M,R*G+p*I,T*G*G+u,0,0,0,0,1),this}makeScale(i,a,u){return this.set(i,0,0,0,0,a,0,0,0,0,u,0,0,0,0,1),this}makeShear(i,a,u,p,T,I){return this.set(1,u,T,0,i,1,I,0,a,p,1,0,0,0,0,1),this}compose(i,a,u){const p=this.elements,T=a._x,I=a._y,M=a._z,G=a._w,k=T+T,R=I+I,U=M+M,z=T*k,y=T*R,A=T*U,g=I*R,X=I*U,L=M*U,B=G*k,pe=G*R,ae=G*U,xe=u.x,ke=u.y,qe=u.z;return p[0]=(1-(g+L))*xe,p[1]=(y+ae)*xe,p[2]=(A-pe)*xe,p[3]=0,p[4]=(y-ae)*ke,p[5]=(1-(z+L))*ke,p[6]=(X+B)*ke,p[7]=0,p[8]=(A+pe)*qe,p[9]=(X-B)*qe,p[10]=(1-(z+g))*qe,p[11]=0,p[12]=i.x,p[13]=i.y,p[14]=i.z,p[15]=1,this}decompose(i,a,u){const p=this.elements;let T=r.set(p[0],p[1],p[2]).length();const I=r.set(p[4],p[5],p[6]).length(),M=r.set(p[8],p[9],p[10]).length();this.determinant()<0&&(T=-T),i.x=p[12],i.y=p[13],i.z=p[14],c.copy(this);const k=1/T,R=1/I,U=1/M;return c.elements[0]*=k,c.elements[1]*=k,c.elements[2]*=k,c.elements[4]*=R,c.elements[5]*=R,c.elements[6]*=R,c.elements[8]*=U,c.elements[9]*=U,c.elements[10]*=U,a.setFromRotationMatrix(c),u.x=T,u.y=I,u.z=M,this}makePerspective(i,a,u,p,T,I,M=s.TdN,G=!1){const k=this.elements,R=2*T/(a-i),U=2*T/(u-p),z=(a+i)/(a-i),y=(u+p)/(u-p);let A,g;if(G)A=T/(I-T),g=I*T/(I-T);else if(M===s.TdN)A=-(I+T)/(I-T),g=-2*I*T/(I-T);else if(M===s.i7u)A=-I/(I-T),g=-I*T/(I-T);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+M);return k[0]=R,k[4]=0,k[8]=z,k[12]=0,k[1]=0,k[5]=U,k[9]=y,k[13]=0,k[2]=0,k[6]=0,k[10]=A,k[14]=g,k[3]=0,k[7]=0,k[11]=-1,k[15]=0,this}makeOrthographic(i,a,u,p,T,I,M=s.TdN,G=!1){const k=this.elements,R=2/(a-i),U=2/(u-p),z=-(a+i)/(a-i),y=-(u+p)/(u-p);let A,g;if(G)A=1/(I-T),g=I/(I-T);else if(M===s.TdN)A=-2/(I-T),g=-(I+T)/(I-T);else if(M===s.i7u)A=-1/(I-T),g=-T/(I-T);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+M);return k[0]=R,k[4]=0,k[8]=0,k[12]=z,k[1]=0,k[5]=U,k[9]=0,k[13]=y,k[2]=0,k[6]=0,k[10]=A,k[14]=g,k[3]=0,k[7]=0,k[11]=0,k[15]=1,this}equals(i){const a=this.elements,u=i.elements;for(let p=0;p<16;p++)if(a[p]!==u[p])return!1;return!0}fromArray(i,a=0){for(let u=0;u<16;u++)this.elements[u]=i[u+a];return this}toArray(i=[],a=0){const u=this.elements;return i[a]=u[0],i[a+1]=u[1],i[a+2]=u[2],i[a+3]=u[3],i[a+4]=u[4],i[a+5]=u[5],i[a+6]=u[6],i[a+7]=u[7],i[a+8]=u[8],i[a+9]=u[9],i[a+10]=u[10],i[a+11]=u[11],i[a+12]=u[12],i[a+13]=u[13],i[a+14]=u[14],i[a+15]=u[15],i}}const r=new j.Vector3,c=new H,b=new j.Vector3(0,0,0),f=new j.Vector3(1,1,1),o=new j.Vector3,m=new j.Vector3,h=new j.Vector3},432064:(Lt,Ve,F)=>{F.d(Ve,{Z:()=>b});var s=F(914164),j=F(824954);const H=new j.Vector3,r=new j.Vector3,c=new s.d;class b{constructor(o=new j.Vector3(1,0,0),m=0){this.isPlane=!0,this.normal=o,this.constant=m}set(o,m){return this.normal.copy(o),this.constant=m,this}setComponents(o,m,h,l){return this.normal.set(o,m,h),this.constant=l,this}setFromNormalAndCoplanarPoint(o,m){return this.normal.copy(o),this.constant=-m.dot(this.normal),this}setFromCoplanarPoints(o,m,h){const l=H.subVectors(h,m).cross(r.subVectors(o,m)).normalize();return this.setFromNormalAndCoplanarPoint(l,o),this}copy(o){return this.normal.copy(o.normal),this.constant=o.constant,this}normalize(){const o=1/this.normal.length();return this.normal.multiplyScalar(o),this.constant*=o,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(o){return this.normal.dot(o)+this.constant}distanceToSphere(o){return this.distanceToPoint(o.center)-o.radius}projectPoint(o,m){return m.copy(o).addScaledVector(this.normal,-this.distanceToPoint(o))}intersectLine(o,m){const h=o.delta(H),l=this.normal.dot(h);if(l===0)return this.distanceToPoint(o.start)===0?m.copy(o.start):null;const i=-(o.start.dot(this.normal)+this.constant)/l;return i<0||i>1?null:m.copy(o.start).addScaledVector(h,i)}intersectsLine(o){const m=this.distanceToPoint(o.start),h=this.distanceToPoint(o.end);return m<0&&h>0||h<0&&m>0}intersectsBox(o){return o.intersectsPlane(this)}intersectsSphere(o){return o.intersectsPlane(this)}coplanarPoint(o){return o.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(o,m){const h=m||c.getNormalMatrix(o),l=this.coplanarPoint(H).applyMatrix4(o),i=this.normal.applyMatrix3(h).normalize();return this.constant=-l.dot(i),this}translate(o){return this.constant-=o.dot(this.normal),this}equals(o){return o.normal.equals(this.normal)&&o.constant===this.constant}clone(){return new this.constructor().copy(this)}}},716920:(Lt,Ve,F)=>{F.d(Ve,{P:()=>j});var s=F(774153);class j{constructor(r=0,c=0,b=0,f=1){this.isQuaternion=!0,this._x=r,this._y=c,this._z=b,this._w=f}static slerpFlat(r,c,b,f,o,m,h){let l=b[f+0],i=b[f+1],a=b[f+2],u=b[f+3];const p=o[m+0],T=o[m+1],I=o[m+2],M=o[m+3];if(h===0){r[c+0]=l,r[c+1]=i,r[c+2]=a,r[c+3]=u;return}if(h===1){r[c+0]=p,r[c+1]=T,r[c+2]=I,r[c+3]=M;return}if(u!==M||l!==p||i!==T||a!==I){let G=1-h;const k=l*p+i*T+a*I+u*M,R=k>=0?1:-1,U=1-k*k;if(U>Number.EPSILON){const y=Math.sqrt(U),A=Math.atan2(y,k*R);G=Math.sin(G*A)/y,h=Math.sin(h*A)/y}const z=h*R;if(l=l*G+p*z,i=i*G+T*z,a=a*G+I*z,u=u*G+M*z,G===1-h){const y=1/Math.sqrt(l*l+i*i+a*a+u*u);l*=y,i*=y,a*=y,u*=y}}r[c]=l,r[c+1]=i,r[c+2]=a,r[c+3]=u}static multiplyQuaternionsFlat(r,c,b,f,o,m){const h=b[f],l=b[f+1],i=b[f+2],a=b[f+3],u=o[m],p=o[m+1],T=o[m+2],I=o[m+3];return r[c]=h*I+a*u+l*T-i*p,r[c+1]=l*I+a*p+i*u-h*T,r[c+2]=i*I+a*T+h*p-l*u,r[c+3]=a*I-h*u-l*p-i*T,r}get x(){return this._x}set x(r){this._x=r,this._onChangeCallback()}get y(){return this._y}set y(r){this._y=r,this._onChangeCallback()}get z(){return this._z}set z(r){this._z=r,this._onChangeCallback()}get w(){return this._w}set w(r){this._w=r,this._onChangeCallback()}set(r,c,b,f){return this._x=r,this._y=c,this._z=b,this._w=f,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(r){return this._x=r.x,this._y=r.y,this._z=r.z,this._w=r.w,this._onChangeCallback(),this}setFromEuler(r,c=!0){const b=r._x,f=r._y,o=r._z,m=r._order,h=Math.cos,l=Math.sin,i=h(b/2),a=h(f/2),u=h(o/2),p=l(b/2),T=l(f/2),I=l(o/2);switch(m){case"XYZ":this._x=p*a*u+i*T*I,this._y=i*T*u-p*a*I,this._z=i*a*I+p*T*u,this._w=i*a*u-p*T*I;break;case"YXZ":this._x=p*a*u+i*T*I,this._y=i*T*u-p*a*I,this._z=i*a*I-p*T*u,this._w=i*a*u+p*T*I;break;case"ZXY":this._x=p*a*u-i*T*I,this._y=i*T*u+p*a*I,this._z=i*a*I+p*T*u,this._w=i*a*u-p*T*I;break;case"ZYX":this._x=p*a*u-i*T*I,this._y=i*T*u+p*a*I,this._z=i*a*I-p*T*u,this._w=i*a*u+p*T*I;break;case"YZX":this._x=p*a*u+i*T*I,this._y=i*T*u+p*a*I,this._z=i*a*I-p*T*u,this._w=i*a*u-p*T*I;break;case"XZY":this._x=p*a*u-i*T*I,this._y=i*T*u-p*a*I,this._z=i*a*I+p*T*u,this._w=i*a*u+p*T*I;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+m)}return c===!0&&this._onChangeCallback(),this}setFromAxisAngle(r,c){const b=c/2,f=Math.sin(b);return this._x=r.x*f,this._y=r.y*f,this._z=r.z*f,this._w=Math.cos(b),this._onChangeCallback(),this}setFromRotationMatrix(r){const c=r.elements,b=c[0],f=c[4],o=c[8],m=c[1],h=c[5],l=c[9],i=c[2],a=c[6],u=c[10],p=b+h+u;if(p>0){const T=.5/Math.sqrt(p+1);this._w=.25/T,this._x=(a-l)*T,this._y=(o-i)*T,this._z=(m-f)*T}else if(b>h&&b>u){const T=2*Math.sqrt(1+b-h-u);this._w=(a-l)/T,this._x=.25*T,this._y=(f+m)/T,this._z=(o+i)/T}else if(h>u){const T=2*Math.sqrt(1+h-b-u);this._w=(o-i)/T,this._x=(f+m)/T,this._y=.25*T,this._z=(l+a)/T}else{const T=2*Math.sqrt(1+u-b-h);this._w=(m-f)/T,this._x=(o+i)/T,this._y=(l+a)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(r,c){let b=r.dot(c)+1;return b<1e-8?(b=0,Math.abs(r.x)>Math.abs(r.z)?(this._x=-r.y,this._y=r.x,this._z=0,this._w=b):(this._x=0,this._y=-r.z,this._z=r.y,this._w=b)):(this._x=r.y*c.z-r.z*c.y,this._y=r.z*c.x-r.x*c.z,this._z=r.x*c.y-r.y*c.x,this._w=b),this.normalize()}angleTo(r){return 2*Math.acos(Math.abs((0,s.qE)(this.dot(r),-1,1)))}rotateTowards(r,c){const b=this.angleTo(r);if(b===0)return this;const f=Math.min(1,c/b);return this.slerp(r,f),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(r){return this._x*r._x+this._y*r._y+this._z*r._z+this._w*r._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let r=this.length();return r===0?(this._x=0,this._y=0,this._z=0,this._w=1):(r=1/r,this._x=this._x*r,this._y=this._y*r,this._z=this._z*r,this._w=this._w*r),this._onChangeCallback(),this}multiply(r){return this.multiplyQuaternions(this,r)}premultiply(r){return this.multiplyQuaternions(r,this)}multiplyQuaternions(r,c){const b=r._x,f=r._y,o=r._z,m=r._w,h=c._x,l=c._y,i=c._z,a=c._w;return this._x=b*a+m*h+f*i-o*l,this._y=f*a+m*l+o*h-b*i,this._z=o*a+m*i+b*l-f*h,this._w=m*a-b*h-f*l-o*i,this._onChangeCallback(),this}slerp(r,c){if(c===0)return this;if(c===1)return this.copy(r);const b=this._x,f=this._y,o=this._z,m=this._w;let h=m*r._w+b*r._x+f*r._y+o*r._z;if(h<0?(this._w=-r._w,this._x=-r._x,this._y=-r._y,this._z=-r._z,h=-h):this.copy(r),h>=1)return this._w=m,this._x=b,this._y=f,this._z=o,this;const l=1-h*h;if(l<=Number.EPSILON){const T=1-c;return this._w=T*m+c*this._w,this._x=T*b+c*this._x,this._y=T*f+c*this._y,this._z=T*o+c*this._z,this.normalize(),this}const i=Math.sqrt(l),a=Math.atan2(i,h),u=Math.sin((1-c)*a)/i,p=Math.sin(c*a)/i;return this._w=m*u+this._w*p,this._x=b*u+this._x*p,this._y=f*u+this._y*p,this._z=o*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(r,c,b){return this.copy(r).slerp(c,b)}random(){const r=2*Math.PI*Math.random(),c=2*Math.PI*Math.random(),b=Math.random(),f=Math.sqrt(1-b),o=Math.sqrt(b);return this.set(f*Math.sin(r),f*Math.cos(r),o*Math.sin(c),o*Math.cos(c))}equals(r){return r._x===this._x&&r._y===this._y&&r._z===this._z&&r._w===this._w}fromArray(r,c=0){return this._x=r[c],this._y=r[c+1],this._z=r[c+2],this._w=r[c+3],this._onChangeCallback(),this}toArray(r=[],c=0){return r[c]=this._x,r[c+1]=this._y,r[c+2]=this._z,r[c+3]=this._w,r}fromBufferAttribute(r,c){return this._x=r.getX(c),this._y=r.getY(c),this._z=r.getZ(c),this._w=r.getW(c),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(r){return this._onChangeCallback=r,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}},694454:(Lt,Ve,F)=>{F.d(Ve,{R:()=>m});var s=F(824954);const j=new s.Vector3,H=new s.Vector3,r=new s.Vector3,c=new s.Vector3,b=new s.Vector3,f=new s.Vector3,o=new s.Vector3;class m{constructor(l=new s.Vector3,i=new s.Vector3(0,0,-1)){this.origin=l,this.direction=i}set(l,i){return this.origin.copy(l),this.direction.copy(i),this}copy(l){return this.origin.copy(l.origin),this.direction.copy(l.direction),this}at(l,i){return i.copy(this.origin).addScaledVector(this.direction,l)}lookAt(l){return this.direction.copy(l).sub(this.origin).normalize(),this}recast(l){return this.origin.copy(this.at(l,j)),this}closestPointToPoint(l,i){i.subVectors(l,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(l){return Math.sqrt(this.distanceSqToPoint(l))}distanceSqToPoint(l){const i=j.subVectors(l,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(l):(j.copy(this.origin).addScaledVector(this.direction,i),j.distanceToSquared(l))}distanceSqToSegment(l,i,a,u){H.copy(l).add(i).multiplyScalar(.5),r.copy(i).sub(l).normalize(),c.copy(this.origin).sub(H);const p=l.distanceTo(i)*.5,T=-this.direction.dot(r),I=c.dot(this.direction),M=-c.dot(r),G=c.lengthSq(),k=Math.abs(1-T*T);let R,U,z,y;if(k>0)if(R=T*M-I,U=T*I-M,y=p*k,R>=0)if(U>=-y)if(U<=y){const A=1/k;R*=A,U*=A,z=R*(R+T*U+2*I)+U*(T*R+U+2*M)+G}else U=p,R=Math.max(0,-(T*U+I)),z=-R*R+U*(U+2*M)+G;else U=-p,R=Math.max(0,-(T*U+I)),z=-R*R+U*(U+2*M)+G;else U<=-y?(R=Math.max(0,-(-T*p+I)),U=R>0?-p:Math.min(Math.max(-p,-M),p),z=-R*R+U*(U+2*M)+G):U<=y?(R=0,U=Math.min(Math.max(-p,-M),p),z=U*(U+2*M)+G):(R=Math.max(0,-(T*p+I)),U=R>0?p:Math.min(Math.max(-p,-M),p),z=-R*R+U*(U+2*M)+G);else U=T>0?-p:p,R=Math.max(0,-(T*U+I)),z=-R*R+U*(U+2*M)+G;return a&&a.copy(this.origin).addScaledVector(this.direction,R),u&&u.copy(H).addScaledVector(r,U),z}intersectSphere(l,i){j.subVectors(l.center,this.origin);const a=j.dot(this.direction),u=j.dot(j)-a*a,p=l.radius*l.radius;if(u>p)return null;const T=Math.sqrt(p-u),I=a-T,M=a+T;return M<0?null:I<0?this.at(M,i):this.at(I,i)}intersectsSphere(l){return l.radius<0?!1:this.distanceSqToPoint(l.center)<=l.radius*l.radius}distanceToPlane(l){const i=l.normal.dot(this.direction);if(i===0)return l.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(l.normal)+l.constant)/i;return a>=0?a:null}intersectPlane(l,i){const a=this.distanceToPlane(l);return a===null?null:this.at(a,i)}intersectsPlane(l){const i=l.distanceToPoint(this.origin);return i===0||l.normal.dot(this.direction)*i<0}intersectBox(l,i){let a,u,p,T,I,M;const G=1/this.direction.x,k=1/this.direction.y,R=1/this.direction.z,U=this.origin;return G>=0?(a=(l.min.x-U.x)*G,u=(l.max.x-U.x)*G):(a=(l.max.x-U.x)*G,u=(l.min.x-U.x)*G),k>=0?(p=(l.min.y-U.y)*k,T=(l.max.y-U.y)*k):(p=(l.max.y-U.y)*k,T=(l.min.y-U.y)*k),a>T||p>u||((p>a||isNaN(a))&&(a=p),(T<u||isNaN(u))&&(u=T),R>=0?(I=(l.min.z-U.z)*R,M=(l.max.z-U.z)*R):(I=(l.max.z-U.z)*R,M=(l.min.z-U.z)*R),a>M||I>u)||((I>a||a!==a)&&(a=I),(M<u||u!==u)&&(u=M),u<0)?null:this.at(a>=0?a:u,i)}intersectsBox(l){return this.intersectBox(l,j)!==null}intersectTriangle(l,i,a,u,p){b.subVectors(i,l),f.subVectors(a,l),o.crossVectors(b,f);let T=this.direction.dot(o),I;if(T>0){if(u)return null;I=1}else if(T<0)I=-1,T=-T;else return null;c.subVectors(this.origin,l);const M=I*this.direction.dot(f.crossVectors(c,f));if(M<0)return null;const G=I*this.direction.dot(b.cross(c));if(G<0||M+G>T)return null;const k=-I*c.dot(o);return k<0?null:this.at(k/T,p)}applyMatrix4(l){return this.origin.applyMatrix4(l),this.direction.transformDirection(l),this}equals(l){return l.origin.equals(this.origin)&&l.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}},721993:(Lt,Ve,F)=>{F.d(Ve,{i:()=>b});var s=F(523006),j=F(824954);const H=new s.Box3,r=new j.Vector3,c=new j.Vector3;class b{constructor(o=new j.Vector3,m=-1){this.isSphere=!0,this.center=o,this.radius=m}set(o,m){return this.center.copy(o),this.radius=m,this}setFromPoints(o,m){const h=this.center;m!==void 0?h.copy(m):H.setFromPoints(o).getCenter(h);let l=0;for(let i=0,a=o.length;i<a;i++)l=Math.max(l,h.distanceToSquared(o[i]));return this.radius=Math.sqrt(l),this}copy(o){return this.center.copy(o.center),this.radius=o.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(o){return o.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(o){return o.distanceTo(this.center)-this.radius}intersectsSphere(o){const m=this.radius+o.radius;return o.center.distanceToSquared(this.center)<=m*m}intersectsBox(o){return o.intersectsSphere(this)}intersectsPlane(o){return Math.abs(o.distanceToPoint(this.center))<=this.radius}clampPoint(o,m){const h=this.center.distanceToSquared(o);return m.copy(o),h>this.radius*this.radius&&(m.sub(this.center).normalize(),m.multiplyScalar(this.radius).add(this.center)),m}getBoundingBox(o){return this.isEmpty()?(o.makeEmpty(),o):(o.set(this.center,this.center),o.expandByScalar(this.radius),o)}applyMatrix4(o){return this.center.applyMatrix4(o),this.radius=this.radius*o.getMaxScaleOnAxis(),this}translate(o){return this.center.add(o),this}expandByPoint(o){if(this.isEmpty())return this.center.copy(o),this.radius=0,this;r.subVectors(o,this.center);const m=r.lengthSq();if(m>this.radius*this.radius){const h=Math.sqrt(m),l=(h-this.radius)*.5;this.center.addScaledVector(r,l/h),this.radius+=l}return this}union(o){return o.isEmpty()?this:this.isEmpty()?(this.copy(o),this):(this.center.equals(o.center)===!0?this.radius=Math.max(this.radius,o.radius):(c.subVectors(o.center,this.center).setLength(o.radius),this.expandByPoint(r.copy(o.center).add(c)),this.expandByPoint(r.copy(o.center).sub(c))),this)}equals(o){return o.center.equals(this.center)&&o.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(o){return this.radius=o.radius,this.center.fromArray(o.center),this}}},237481:(Lt,Ve,F)=>{F.d(Ve,{I:()=>j});var s=F(774153);class j{constructor(r=0,c=0){j.prototype.isVector2=!0,this.x=r,this.y=c}get width(){return this.x}set width(r){this.x=r}get height(){return this.y}set height(r){this.y=r}set(r,c){return this.x=r,this.y=c,this}setScalar(r){return this.x=r,this.y=r,this}setX(r){return this.x=r,this}setY(r){return this.y=r,this}setComponent(r,c){switch(r){case 0:this.x=c;break;case 1:this.y=c;break;default:throw new Error("index is out of range: "+r)}return this}getComponent(r){switch(r){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+r)}}clone(){return new this.constructor(this.x,this.y)}copy(r){return this.x=r.x,this.y=r.y,this}add(r){return this.x+=r.x,this.y+=r.y,this}addScalar(r){return this.x+=r,this.y+=r,this}addVectors(r,c){return this.x=r.x+c.x,this.y=r.y+c.y,this}addScaledVector(r,c){return this.x+=r.x*c,this.y+=r.y*c,this}sub(r){return this.x-=r.x,this.y-=r.y,this}subScalar(r){return this.x-=r,this.y-=r,this}subVectors(r,c){return this.x=r.x-c.x,this.y=r.y-c.y,this}multiply(r){return this.x*=r.x,this.y*=r.y,this}multiplyScalar(r){return this.x*=r,this.y*=r,this}divide(r){return this.x/=r.x,this.y/=r.y,this}divideScalar(r){return this.multiplyScalar(1/r)}applyMatrix3(r){const c=this.x,b=this.y,f=r.elements;return this.x=f[0]*c+f[3]*b+f[6],this.y=f[1]*c+f[4]*b+f[7],this}min(r){return this.x=Math.min(this.x,r.x),this.y=Math.min(this.y,r.y),this}max(r){return this.x=Math.max(this.x,r.x),this.y=Math.max(this.y,r.y),this}clamp(r,c){return this.x=(0,s.qE)(this.x,r.x,c.x),this.y=(0,s.qE)(this.y,r.y,c.y),this}clampScalar(r,c){return this.x=(0,s.qE)(this.x,r,c),this.y=(0,s.qE)(this.y,r,c),this}clampLength(r,c){const b=this.length();return this.divideScalar(b||1).multiplyScalar((0,s.qE)(b,r,c))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(r){return this.x*r.x+this.y*r.y}cross(r){return this.x*r.y-this.y*r.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(r){const c=Math.sqrt(this.lengthSq()*r.lengthSq());if(c===0)return Math.PI/2;const b=this.dot(r)/c;return Math.acos((0,s.qE)(b,-1,1))}distanceTo(r){return Math.sqrt(this.distanceToSquared(r))}distanceToSquared(r){const c=this.x-r.x,b=this.y-r.y;return c*c+b*b}manhattanDistanceTo(r){return Math.abs(this.x-r.x)+Math.abs(this.y-r.y)}setLength(r){return this.normalize().multiplyScalar(r)}lerp(r,c){return this.x+=(r.x-this.x)*c,this.y+=(r.y-this.y)*c,this}lerpVectors(r,c,b){return this.x=r.x+(c.x-r.x)*b,this.y=r.y+(c.y-r.y)*b,this}equals(r){return r.x===this.x&&r.y===this.y}fromArray(r,c=0){return this.x=r[c],this.y=r[c+1],this}toArray(r=[],c=0){return r[c]=this.x,r[c+1]=this.y,r}fromBufferAttribute(r,c){return this.x=r.getX(c),this.y=r.getY(c),this}rotateAround(r,c){const b=Math.cos(c),f=Math.sin(c),o=this.x-r.x,m=this.y-r.y;return this.x=o*b-m*f+r.x,this.y=o*f+m*b+r.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}},824954:(Lt,Ve,F)=>{F.d(Ve,{Vector3:()=>H});var s=F(774153),j=F(716920);class H{constructor(f=0,o=0,m=0){H.prototype.isVector3=!0,this.x=f,this.y=o,this.z=m}set(f,o,m){return m===void 0&&(m=this.z),this.x=f,this.y=o,this.z=m,this}setScalar(f){return this.x=f,this.y=f,this.z=f,this}setX(f){return this.x=f,this}setY(f){return this.y=f,this}setZ(f){return this.z=f,this}setComponent(f,o){switch(f){case 0:this.x=o;break;case 1:this.y=o;break;case 2:this.z=o;break;default:throw new Error("index is out of range: "+f)}return this}getComponent(f){switch(f){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+f)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(f){return this.x=f.x,this.y=f.y,this.z=f.z,this}add(f){return this.x+=f.x,this.y+=f.y,this.z+=f.z,this}addScalar(f){return this.x+=f,this.y+=f,this.z+=f,this}addVectors(f,o){return this.x=f.x+o.x,this.y=f.y+o.y,this.z=f.z+o.z,this}addScaledVector(f,o){return this.x+=f.x*o,this.y+=f.y*o,this.z+=f.z*o,this}sub(f){return this.x-=f.x,this.y-=f.y,this.z-=f.z,this}subScalar(f){return this.x-=f,this.y-=f,this.z-=f,this}subVectors(f,o){return this.x=f.x-o.x,this.y=f.y-o.y,this.z=f.z-o.z,this}multiply(f){return this.x*=f.x,this.y*=f.y,this.z*=f.z,this}multiplyScalar(f){return this.x*=f,this.y*=f,this.z*=f,this}multiplyVectors(f,o){return this.x=f.x*o.x,this.y=f.y*o.y,this.z=f.z*o.z,this}applyEuler(f){return this.applyQuaternion(c.setFromEuler(f))}applyAxisAngle(f,o){return this.applyQuaternion(c.setFromAxisAngle(f,o))}applyMatrix3(f){const o=this.x,m=this.y,h=this.z,l=f.elements;return this.x=l[0]*o+l[3]*m+l[6]*h,this.y=l[1]*o+l[4]*m+l[7]*h,this.z=l[2]*o+l[5]*m+l[8]*h,this}applyNormalMatrix(f){return this.applyMatrix3(f).normalize()}applyMatrix4(f){const o=this.x,m=this.y,h=this.z,l=f.elements,i=1/(l[3]*o+l[7]*m+l[11]*h+l[15]);return this.x=(l[0]*o+l[4]*m+l[8]*h+l[12])*i,this.y=(l[1]*o+l[5]*m+l[9]*h+l[13])*i,this.z=(l[2]*o+l[6]*m+l[10]*h+l[14])*i,this}applyQuaternion(f){const o=this.x,m=this.y,h=this.z,l=f.x,i=f.y,a=f.z,u=f.w,p=2*(i*h-a*m),T=2*(a*o-l*h),I=2*(l*m-i*o);return this.x=o+u*p+i*I-a*T,this.y=m+u*T+a*p-l*I,this.z=h+u*I+l*T-i*p,this}project(f){return this.applyMatrix4(f.matrixWorldInverse).applyMatrix4(f.projectionMatrix)}unproject(f){return this.applyMatrix4(f.projectionMatrixInverse).applyMatrix4(f.matrixWorld)}transformDirection(f){const o=this.x,m=this.y,h=this.z,l=f.elements;return this.x=l[0]*o+l[4]*m+l[8]*h,this.y=l[1]*o+l[5]*m+l[9]*h,this.z=l[2]*o+l[6]*m+l[10]*h,this.normalize()}divide(f){return this.x/=f.x,this.y/=f.y,this.z/=f.z,this}divideScalar(f){return this.multiplyScalar(1/f)}min(f){return this.x=Math.min(this.x,f.x),this.y=Math.min(this.y,f.y),this.z=Math.min(this.z,f.z),this}max(f){return this.x=Math.max(this.x,f.x),this.y=Math.max(this.y,f.y),this.z=Math.max(this.z,f.z),this}clamp(f,o){return this.x=(0,s.qE)(this.x,f.x,o.x),this.y=(0,s.qE)(this.y,f.y,o.y),this.z=(0,s.qE)(this.z,f.z,o.z),this}clampScalar(f,o){return this.x=(0,s.qE)(this.x,f,o),this.y=(0,s.qE)(this.y,f,o),this.z=(0,s.qE)(this.z,f,o),this}clampLength(f,o){const m=this.length();return this.divideScalar(m||1).multiplyScalar((0,s.qE)(m,f,o))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(f){return this.x*f.x+this.y*f.y+this.z*f.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(f){return this.normalize().multiplyScalar(f)}lerp(f,o){return this.x+=(f.x-this.x)*o,this.y+=(f.y-this.y)*o,this.z+=(f.z-this.z)*o,this}lerpVectors(f,o,m){return this.x=f.x+(o.x-f.x)*m,this.y=f.y+(o.y-f.y)*m,this.z=f.z+(o.z-f.z)*m,this}cross(f){return this.crossVectors(this,f)}crossVectors(f,o){const m=f.x,h=f.y,l=f.z,i=o.x,a=o.y,u=o.z;return this.x=h*u-l*a,this.y=l*i-m*u,this.z=m*a-h*i,this}projectOnVector(f){const o=f.lengthSq();if(o===0)return this.set(0,0,0);const m=f.dot(this)/o;return this.copy(f).multiplyScalar(m)}projectOnPlane(f){return r.copy(this).projectOnVector(f),this.sub(r)}reflect(f){return this.sub(r.copy(f).multiplyScalar(2*this.dot(f)))}angleTo(f){const o=Math.sqrt(this.lengthSq()*f.lengthSq());if(o===0)return Math.PI/2;const m=this.dot(f)/o;return Math.acos((0,s.qE)(m,-1,1))}distanceTo(f){return Math.sqrt(this.distanceToSquared(f))}distanceToSquared(f){const o=this.x-f.x,m=this.y-f.y,h=this.z-f.z;return o*o+m*m+h*h}manhattanDistanceTo(f){return Math.abs(this.x-f.x)+Math.abs(this.y-f.y)+Math.abs(this.z-f.z)}setFromSpherical(f){return this.setFromSphericalCoords(f.radius,f.phi,f.theta)}setFromSphericalCoords(f,o,m){const h=Math.sin(o)*f;return this.x=h*Math.sin(m),this.y=Math.cos(o)*f,this.z=h*Math.cos(m),this}setFromCylindrical(f){return this.setFromCylindricalCoords(f.radius,f.theta,f.y)}setFromCylindricalCoords(f,o,m){return this.x=f*Math.sin(o),this.y=m,this.z=f*Math.cos(o),this}setFromMatrixPosition(f){const o=f.elements;return this.x=o[12],this.y=o[13],this.z=o[14],this}setFromMatrixScale(f){const o=this.setFromMatrixColumn(f,0).length(),m=this.setFromMatrixColumn(f,1).length(),h=this.setFromMatrixColumn(f,2).length();return this.x=o,this.y=m,this.z=h,this}setFromMatrixColumn(f,o){return this.fromArray(f.elements,o*4)}setFromMatrix3Column(f,o){return this.fromArray(f.elements,o*3)}setFromEuler(f){return this.x=f._x,this.y=f._y,this.z=f._z,this}setFromColor(f){return this.x=f.r,this.y=f.g,this.z=f.b,this}equals(f){return f.x===this.x&&f.y===this.y&&f.z===this.z}fromArray(f,o=0){return this.x=f[o],this.y=f[o+1],this.z=f[o+2],this}toArray(f=[],o=0){return f[o]=this.x,f[o+1]=this.y,f[o+2]=this.z,f}fromBufferAttribute(f,o){return this.x=f.getX(o),this.y=f.getY(o),this.z=f.getZ(o),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const f=Math.random()*Math.PI*2,o=Math.random()*2-1,m=Math.sqrt(1-o*o);return this.x=m*Math.cos(f),this.y=o,this.z=m*Math.sin(f),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const r=new H,c=new j.P},902467:(Lt,Ve,F)=>{F.d(Ve,{I:()=>j});var s=F(774153);class j{constructor(r=0,c=0,b=0,f=1){j.prototype.isVector4=!0,this.x=r,this.y=c,this.z=b,this.w=f}get width(){return this.z}set width(r){this.z=r}get height(){return this.w}set height(r){this.w=r}set(r,c,b,f){return this.x=r,this.y=c,this.z=b,this.w=f,this}setScalar(r){return this.x=r,this.y=r,this.z=r,this.w=r,this}setX(r){return this.x=r,this}setY(r){return this.y=r,this}setZ(r){return this.z=r,this}setW(r){return this.w=r,this}setComponent(r,c){switch(r){case 0:this.x=c;break;case 1:this.y=c;break;case 2:this.z=c;break;case 3:this.w=c;break;default:throw new Error("index is out of range: "+r)}return this}getComponent(r){switch(r){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+r)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(r){return this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w!==void 0?r.w:1,this}add(r){return this.x+=r.x,this.y+=r.y,this.z+=r.z,this.w+=r.w,this}addScalar(r){return this.x+=r,this.y+=r,this.z+=r,this.w+=r,this}addVectors(r,c){return this.x=r.x+c.x,this.y=r.y+c.y,this.z=r.z+c.z,this.w=r.w+c.w,this}addScaledVector(r,c){return this.x+=r.x*c,this.y+=r.y*c,this.z+=r.z*c,this.w+=r.w*c,this}sub(r){return this.x-=r.x,this.y-=r.y,this.z-=r.z,this.w-=r.w,this}subScalar(r){return this.x-=r,this.y-=r,this.z-=r,this.w-=r,this}subVectors(r,c){return this.x=r.x-c.x,this.y=r.y-c.y,this.z=r.z-c.z,this.w=r.w-c.w,this}multiply(r){return this.x*=r.x,this.y*=r.y,this.z*=r.z,this.w*=r.w,this}multiplyScalar(r){return this.x*=r,this.y*=r,this.z*=r,this.w*=r,this}applyMatrix4(r){const c=this.x,b=this.y,f=this.z,o=this.w,m=r.elements;return this.x=m[0]*c+m[4]*b+m[8]*f+m[12]*o,this.y=m[1]*c+m[5]*b+m[9]*f+m[13]*o,this.z=m[2]*c+m[6]*b+m[10]*f+m[14]*o,this.w=m[3]*c+m[7]*b+m[11]*f+m[15]*o,this}divide(r){return this.x/=r.x,this.y/=r.y,this.z/=r.z,this.w/=r.w,this}divideScalar(r){return this.multiplyScalar(1/r)}setAxisAngleFromQuaternion(r){this.w=2*Math.acos(r.w);const c=Math.sqrt(1-r.w*r.w);return c<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=r.x/c,this.y=r.y/c,this.z=r.z/c),this}setAxisAngleFromRotationMatrix(r){let c,b,f,o;const l=r.elements,i=l[0],a=l[4],u=l[8],p=l[1],T=l[5],I=l[9],M=l[2],G=l[6],k=l[10];if(Math.abs(a-p)<.01&&Math.abs(u-M)<.01&&Math.abs(I-G)<.01){if(Math.abs(a+p)<.1&&Math.abs(u+M)<.1&&Math.abs(I+G)<.1&&Math.abs(i+T+k-3)<.1)return this.set(1,0,0,0),this;c=Math.PI;const U=(i+1)/2,z=(T+1)/2,y=(k+1)/2,A=(a+p)/4,g=(u+M)/4,X=(I+G)/4;return U>z&&U>y?U<.01?(b=0,f=.707106781,o=.707106781):(b=Math.sqrt(U),f=A/b,o=g/b):z>y?z<.01?(b=.707106781,f=0,o=.707106781):(f=Math.sqrt(z),b=A/f,o=X/f):y<.01?(b=.707106781,f=.707106781,o=0):(o=Math.sqrt(y),b=g/o,f=X/o),this.set(b,f,o,c),this}let R=Math.sqrt((G-I)*(G-I)+(u-M)*(u-M)+(p-a)*(p-a));return Math.abs(R)<.001&&(R=1),this.x=(G-I)/R,this.y=(u-M)/R,this.z=(p-a)/R,this.w=Math.acos((i+T+k-1)/2),this}setFromMatrixPosition(r){const c=r.elements;return this.x=c[12],this.y=c[13],this.z=c[14],this.w=c[15],this}min(r){return this.x=Math.min(this.x,r.x),this.y=Math.min(this.y,r.y),this.z=Math.min(this.z,r.z),this.w=Math.min(this.w,r.w),this}max(r){return this.x=Math.max(this.x,r.x),this.y=Math.max(this.y,r.y),this.z=Math.max(this.z,r.z),this.w=Math.max(this.w,r.w),this}clamp(r,c){return this.x=(0,s.qE)(this.x,r.x,c.x),this.y=(0,s.qE)(this.y,r.y,c.y),this.z=(0,s.qE)(this.z,r.z,c.z),this.w=(0,s.qE)(this.w,r.w,c.w),this}clampScalar(r,c){return this.x=(0,s.qE)(this.x,r,c),this.y=(0,s.qE)(this.y,r,c),this.z=(0,s.qE)(this.z,r,c),this.w=(0,s.qE)(this.w,r,c),this}clampLength(r,c){const b=this.length();return this.divideScalar(b||1).multiplyScalar((0,s.qE)(b,r,c))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(r){return this.x*r.x+this.y*r.y+this.z*r.z+this.w*r.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(r){return this.normalize().multiplyScalar(r)}lerp(r,c){return this.x+=(r.x-this.x)*c,this.y+=(r.y-this.y)*c,this.z+=(r.z-this.z)*c,this.w+=(r.w-this.w)*c,this}lerpVectors(r,c,b){return this.x=r.x+(c.x-r.x)*b,this.y=r.y+(c.y-r.y)*b,this.z=r.z+(c.z-r.z)*b,this.w=r.w+(c.w-r.w)*b,this}equals(r){return r.x===this.x&&r.y===this.y&&r.z===this.z&&r.w===this.w}fromArray(r,c=0){return this.x=r[c],this.y=r[c+1],this.z=r[c+2],this.w=r[c+3],this}toArray(r=[],c=0){return r[c]=this.x,r[c+1]=this.y,r[c+2]=this.z,r[c+3]=this.w,r}fromBufferAttribute(r,c){return this.x=r.getX(c),this.y=r.getY(c),this.z=r.getZ(c),this.w=r.getW(c),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}},136767:(Lt,Ve,F)=>{F.r(Ve),F.d(Ve,{Group:()=>j});var s=F(493303);class j extends s.B{constructor(){super(),this.isGroup=!0,this.type="Group"}}},955609:(Lt,Ve,F)=>{F.d(Ve,{e:()=>Fe});var s=F(824954),j=F(237481),H=F(721993),r=F(694454),c=F(541761),b=F(493303),f=F(902467);const o=new s.Vector3,m=new s.Vector3,h=new s.Vector3,l=new s.Vector3,i=new s.Vector3,a=new s.Vector3,u=new s.Vector3,p=new s.Vector3,T=new s.Vector3,I=new s.Vector3,M=new f.I,G=new f.I,k=new f.I;class R{constructor(ce=new s.Vector3,Re=new s.Vector3,Ae=new s.Vector3){this.a=ce,this.b=Re,this.c=Ae}static getNormal(ce,Re,Ae,Ie){Ie.subVectors(Ae,Re),o.subVectors(ce,Re),Ie.cross(o);const De=Ie.lengthSq();return De>0?Ie.multiplyScalar(1/Math.sqrt(De)):Ie.set(0,0,0)}static getBarycoord(ce,Re,Ae,Ie,De){o.subVectors(Ie,Re),m.subVectors(Ae,Re),h.subVectors(ce,Re);const We=o.dot(o),je=o.dot(m),et=o.dot(h),Mt=m.dot(m),ct=m.dot(h),wt=We*Mt-je*je;if(wt===0)return De.set(0,0,0),null;const Gt=1/wt,Nt=(Mt*et-je*ct)*Gt,At=(We*ct-je*et)*Gt;return De.set(1-Nt-At,At,Nt)}static containsPoint(ce,Re,Ae,Ie){return this.getBarycoord(ce,Re,Ae,Ie,l)===null?!1:l.x>=0&&l.y>=0&&l.x+l.y<=1}static getInterpolation(ce,Re,Ae,Ie,De,We,je,et){return this.getBarycoord(ce,Re,Ae,Ie,l)===null?(et.x=0,et.y=0,"z"in et&&(et.z=0),"w"in et&&(et.w=0),null):(et.setScalar(0),et.addScaledVector(De,l.x),et.addScaledVector(We,l.y),et.addScaledVector(je,l.z),et)}static getInterpolatedAttribute(ce,Re,Ae,Ie,De,We){return M.setScalar(0),G.setScalar(0),k.setScalar(0),M.fromBufferAttribute(ce,Re),G.fromBufferAttribute(ce,Ae),k.fromBufferAttribute(ce,Ie),We.setScalar(0),We.addScaledVector(M,De.x),We.addScaledVector(G,De.y),We.addScaledVector(k,De.z),We}static isFrontFacing(ce,Re,Ae,Ie){return o.subVectors(Ae,Re),m.subVectors(ce,Re),o.cross(m).dot(Ie)<0}set(ce,Re,Ae){return this.a.copy(ce),this.b.copy(Re),this.c.copy(Ae),this}setFromPointsAndIndices(ce,Re,Ae,Ie){return this.a.copy(ce[Re]),this.b.copy(ce[Ae]),this.c.copy(ce[Ie]),this}setFromAttributeAndIndices(ce,Re,Ae,Ie){return this.a.fromBufferAttribute(ce,Re),this.b.fromBufferAttribute(ce,Ae),this.c.fromBufferAttribute(ce,Ie),this}clone(){return new this.constructor().copy(this)}copy(ce){return this.a.copy(ce.a),this.b.copy(ce.b),this.c.copy(ce.c),this}getArea(){return o.subVectors(this.c,this.b),m.subVectors(this.a,this.b),o.cross(m).length()*.5}getMidpoint(ce){return ce.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(ce){return R.getNormal(this.a,this.b,this.c,ce)}getPlane(ce){return ce.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(ce,Re){return R.getBarycoord(ce,this.a,this.b,this.c,Re)}getInterpolation(ce,Re,Ae,Ie,De){return R.getInterpolation(ce,this.a,this.b,this.c,Re,Ae,Ie,De)}containsPoint(ce){return R.containsPoint(ce,this.a,this.b,this.c)}isFrontFacing(ce){return R.isFrontFacing(this.a,this.b,this.c,ce)}intersectsBox(ce){return ce.intersectsTriangle(this)}closestPointToPoint(ce,Re){const Ae=this.a,Ie=this.b,De=this.c;let We,je;i.subVectors(Ie,Ae),a.subVectors(De,Ae),p.subVectors(ce,Ae);const et=i.dot(p),Mt=a.dot(p);if(et<=0&&Mt<=0)return Re.copy(Ae);T.subVectors(ce,Ie);const ct=i.dot(T),wt=a.dot(T);if(ct>=0&&wt<=ct)return Re.copy(Ie);const Gt=et*wt-ct*Mt;if(Gt<=0&&et>=0&&ct<=0)return We=et/(et-ct),Re.copy(Ae).addScaledVector(i,We);I.subVectors(ce,De);const Nt=i.dot(I),At=a.dot(I);if(At>=0&&Nt<=At)return Re.copy(De);const qt=Nt*Mt-et*At;if(qt<=0&&Mt>=0&&At<=0)return je=Mt/(Mt-At),Re.copy(Ae).addScaledVector(a,je);const bt=ct*At-Nt*wt;if(bt<=0&&wt-ct>=0&&Nt-At>=0)return u.subVectors(De,Ie),je=(wt-ct)/(wt-ct+(Nt-At)),Re.copy(Ie).addScaledVector(u,je);const Wt=1/(bt+qt+Gt);return We=qt*Wt,je=Gt*Wt,Re.copy(Ae).addScaledVector(i,We).addScaledVector(a,je)}equals(ce){return ce.a.equals(this.a)&&ce.b.equals(this.b)&&ce.c.equals(this.c)}}var U=F(272790),z=F(51950),y=F(5257);const A=new c.k,g=new r.R,X=new H.i,L=new s.Vector3,B=new s.Vector3,pe=new s.Vector3,ae=new s.Vector3,xe=new s.Vector3,ke=new s.Vector3,qe=new s.Vector3,Ee=new s.Vector3;class Fe extends b.B{constructor(ce=new y.L,Re=new z.V){super(),this.isMesh=!0,this.type="Mesh",this.geometry=ce,this.material=Re,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(ce,Re){return super.copy(ce,Re),ce.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=ce.morphTargetInfluences.slice()),ce.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},ce.morphTargetDictionary)),this.material=Array.isArray(ce.material)?ce.material.slice():ce.material,this.geometry=ce.geometry,this}updateMorphTargets(){const Re=this.geometry.morphAttributes,Ae=Object.keys(Re);if(Ae.length>0){const Ie=Re[Ae[0]];if(Ie!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let De=0,We=Ie.length;De<We;De++){const je=Ie[De].name||String(De);this.morphTargetInfluences.push(0),this.morphTargetDictionary[je]=De}}}}getVertexPosition(ce,Re){const Ae=this.geometry,Ie=Ae.attributes.position,De=Ae.morphAttributes.position,We=Ae.morphTargetsRelative;Re.fromBufferAttribute(Ie,ce);const je=this.morphTargetInfluences;if(De&&je){ke.set(0,0,0);for(let et=0,Mt=De.length;et<Mt;et++){const ct=je[et],wt=De[et];ct!==0&&(xe.fromBufferAttribute(wt,ce),We?ke.addScaledVector(xe,ct):ke.addScaledVector(xe.sub(Re),ct))}Re.add(ke)}return Re}raycast(ce,Re){const Ae=this.geometry,Ie=this.material,De=this.matrixWorld;Ie!==void 0&&(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),X.copy(Ae.boundingSphere),X.applyMatrix4(De),g.copy(ce.ray).recast(ce.near),!(X.containsPoint(g.origin)===!1&&(g.intersectSphere(X,L)===null||g.origin.distanceToSquared(L)>(ce.far-ce.near)**2))&&(A.copy(De).invert(),g.copy(ce.ray).applyMatrix4(A),!(Ae.boundingBox!==null&&g.intersectsBox(Ae.boundingBox)===!1)&&this._computeIntersections(ce,Re,g)))}_computeIntersections(ce,Re,Ae){let Ie;const De=this.geometry,We=this.material,je=De.index,et=De.attributes.position,Mt=De.attributes.uv,ct=De.attributes.uv1,wt=De.attributes.normal,Gt=De.groups,Nt=De.drawRange;if(je!==null)if(Array.isArray(We))for(let At=0,qt=Gt.length;At<qt;At++){const bt=Gt[At],Wt=We[bt.materialIndex],Xt=Math.max(bt.start,Nt.start),oi=Math.min(je.count,Math.min(bt.start+bt.count,Nt.start+Nt.count));for(let jt=Xt,bi=oi;jt<bi;jt+=3){const Bi=je.getX(jt),Ui=je.getX(jt+1),Ii=je.getX(jt+2);Ie=nt(this,Wt,ce,Ae,Mt,ct,wt,Bi,Ui,Ii),Ie&&(Ie.faceIndex=Math.floor(jt/3),Ie.face.materialIndex=bt.materialIndex,Re.push(Ie))}}else{const At=Math.max(0,Nt.start),qt=Math.min(je.count,Nt.start+Nt.count);for(let bt=At,Wt=qt;bt<Wt;bt+=3){const Xt=je.getX(bt),oi=je.getX(bt+1),jt=je.getX(bt+2);Ie=nt(this,We,ce,Ae,Mt,ct,wt,Xt,oi,jt),Ie&&(Ie.faceIndex=Math.floor(bt/3),Re.push(Ie))}}else if(et!==void 0)if(Array.isArray(We))for(let At=0,qt=Gt.length;At<qt;At++){const bt=Gt[At],Wt=We[bt.materialIndex],Xt=Math.max(bt.start,Nt.start),oi=Math.min(et.count,Math.min(bt.start+bt.count,Nt.start+Nt.count));for(let jt=Xt,bi=oi;jt<bi;jt+=3){const Bi=jt,Ui=jt+1,Ii=jt+2;Ie=nt(this,Wt,ce,Ae,Mt,ct,wt,Bi,Ui,Ii),Ie&&(Ie.faceIndex=Math.floor(jt/3),Ie.face.materialIndex=bt.materialIndex,Re.push(Ie))}}else{const At=Math.max(0,Nt.start),qt=Math.min(et.count,Nt.start+Nt.count);for(let bt=At,Wt=qt;bt<Wt;bt+=3){const Xt=bt,oi=bt+1,jt=bt+2;Ie=nt(this,We,ce,Ae,Mt,ct,wt,Xt,oi,jt),Ie&&(Ie.faceIndex=Math.floor(bt/3),Re.push(Ie))}}}}function it(Ge,ce,Re,Ae,Ie,De,We,je){let et;if(ce.side===U.hsX?et=Ae.intersectTriangle(We,De,Ie,!0,je):et=Ae.intersectTriangle(Ie,De,We,ce.side===U.hB5,je),et===null)return null;Ee.copy(je),Ee.applyMatrix4(Ge.matrixWorld);const Mt=Re.ray.origin.distanceTo(Ee);return Mt<Re.near||Mt>Re.far?null:{distance:Mt,point:Ee.clone(),object:Ge}}function nt(Ge,ce,Re,Ae,Ie,De,We,je,et,Mt){Ge.getVertexPosition(je,B),Ge.getVertexPosition(et,pe),Ge.getVertexPosition(Mt,ae);const ct=it(Ge,ce,Re,Ae,B,pe,ae,qe);if(ct){const wt=new s.Vector3;R.getBarycoord(qe,B,pe,ae,wt),Ie&&(ct.uv=R.getInterpolatedAttribute(Ie,je,et,Mt,wt,new j.I)),De&&(ct.uv1=R.getInterpolatedAttribute(De,je,et,Mt,wt,new j.I)),We&&(ct.normal=R.getInterpolatedAttribute(We,je,et,Mt,wt,new s.Vector3),ct.normal.dot(Ae.direction)>0&&ct.normal.multiplyScalar(-1));const Gt={a:je,b:et,c:Mt,normal:new s.Vector3,materialIndex:0};R.getNormal(B,pe,ae,Gt.normal),ct.face=Gt,ct.barycoord=wt}return ct}},641897:(Lt,Ve,F)=>{F.d(Ve,{n:()=>f});var s=F(251750),j=F(953923),H=F(272790),r=F(902467),c=F(590336);class b extends s.Q{constructor(m=1,h=1,l={}){super(),l=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:H.k6q,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},l),this.isRenderTarget=!0,this.width=m,this.height=h,this.depth=l.depth,this.scissor=new r.I(0,0,m,h),this.scissorTest=!1,this.viewport=new r.I(0,0,m,h);const i={width:m,height:h,depth:l.depth},a=new j.g(i);this.textures=[];const u=l.count;for(let p=0;p<u;p++)this.textures[p]=a.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(l),this.depthBuffer=l.depthBuffer,this.stencilBuffer=l.stencilBuffer,this.resolveDepthBuffer=l.resolveDepthBuffer,this.resolveStencilBuffer=l.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=l.depthTexture,this.samples=l.samples,this.multiview=l.multiview}_setTextureOptions(m={}){const h={minFilter:H.k6q,generateMipmaps:!1,flipY:!1,internalFormat:null};m.mapping!==void 0&&(h.mapping=m.mapping),m.wrapS!==void 0&&(h.wrapS=m.wrapS),m.wrapT!==void 0&&(h.wrapT=m.wrapT),m.wrapR!==void 0&&(h.wrapR=m.wrapR),m.magFilter!==void 0&&(h.magFilter=m.magFilter),m.minFilter!==void 0&&(h.minFilter=m.minFilter),m.format!==void 0&&(h.format=m.format),m.type!==void 0&&(h.type=m.type),m.anisotropy!==void 0&&(h.anisotropy=m.anisotropy),m.colorSpace!==void 0&&(h.colorSpace=m.colorSpace),m.flipY!==void 0&&(h.flipY=m.flipY),m.generateMipmaps!==void 0&&(h.generateMipmaps=m.generateMipmaps),m.internalFormat!==void 0&&(h.internalFormat=m.internalFormat);for(let l=0;l<this.textures.length;l++)this.textures[l].setValues(h)}get texture(){return this.textures[0]}set texture(m){this.textures[0]=m}set depthTexture(m){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),m!==null&&(m.renderTarget=this),this._depthTexture=m}get depthTexture(){return this._depthTexture}setSize(m,h,l=1){if(this.width!==m||this.height!==h||this.depth!==l){this.width=m,this.height=h,this.depth=l;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=m,this.textures[i].image.height=h,this.textures[i].image.depth=l,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,m,h),this.scissor.set(0,0,m,h)}clone(){return new this.constructor().copy(this)}copy(m){this.width=m.width,this.height=m.height,this.depth=m.depth,this.scissor.copy(m.scissor),this.scissorTest=m.scissorTest,this.viewport.copy(m.viewport),this.textures.length=0;for(let h=0,l=m.textures.length;h<l;h++){this.textures[h]=m.textures[h].clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;const i=Object.assign({},m.textures[h].image);this.textures[h].source=new c.k(i)}return this.depthBuffer=m.depthBuffer,this.stencilBuffer=m.stencilBuffer,this.resolveDepthBuffer=m.resolveDepthBuffer,this.resolveStencilBuffer=m.resolveStencilBuffer,m.depthTexture!==null&&(this.depthTexture=m.depthTexture.clone()),this.samples=m.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class f extends b{constructor(m=1,h=1,l={}){super(m,h,l),this.isWebGLRenderTarget=!0}}},234160:(Lt,Ve,F)=>{F.d(Ve,{WebGLRenderer:()=>Io});var s=F(272790),j=F(339957),H=F(248056),r=F(541761),c=F(824954),b=F(902467);function f(){let e=null,n=!1,t=null,d=null;function x(S,O){t(S,O),d=e.requestAnimationFrame(x)}return{start:function(){n!==!0&&t!==null&&(d=e.requestAnimationFrame(x),n=!0)},stop:function(){e.cancelAnimationFrame(d),n=!1},setAnimationLoop:function(S){t=S},setContext:function(S){e=S}}}function o(e){const n=new WeakMap;function t(C,te){const Y=C.array,le=C.usage,ee=Y.byteLength,J=e.createBuffer();e.bindBuffer(te,J),e.bufferData(te,Y,le),C.onUploadCallback();let $;if(Y instanceof Float32Array)$=e.FLOAT;else if(typeof Float16Array<"u"&&Y instanceof Float16Array)$=e.HALF_FLOAT;else if(Y instanceof Uint16Array)C.isFloat16BufferAttribute?$=e.HALF_FLOAT:$=e.UNSIGNED_SHORT;else if(Y instanceof Int16Array)$=e.SHORT;else if(Y instanceof Uint32Array)$=e.UNSIGNED_INT;else if(Y instanceof Int32Array)$=e.INT;else if(Y instanceof Int8Array)$=e.BYTE;else if(Y instanceof Uint8Array)$=e.UNSIGNED_BYTE;else if(Y instanceof Uint8ClampedArray)$=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+Y);return{buffer:J,type:$,bytesPerElement:Y.BYTES_PER_ELEMENT,version:C.version,size:ee}}function d(C,te,Y){const le=te.array,ee=te.updateRanges;if(e.bindBuffer(Y,C),ee.length===0)e.bufferSubData(Y,0,le);else{ee.sort(($,ge)=>$.start-ge.start);let J=0;for(let $=1;$<ee.length;$++){const ge=ee[J],se=ee[$];se.start<=ge.start+ge.count+1?ge.count=Math.max(ge.count,se.start+se.count-ge.start):(++J,ee[J]=se)}ee.length=J+1;for(let $=0,ge=ee.length;$<ge;$++){const se=ee[$];e.bufferSubData(Y,se.start*le.BYTES_PER_ELEMENT,le,se.start,se.count)}te.clearUpdateRanges()}te.onUploadCallback()}function x(C){return C.isInterleavedBufferAttribute&&(C=C.data),n.get(C)}function S(C){C.isInterleavedBufferAttribute&&(C=C.data);const te=n.get(C);te&&(e.deleteBuffer(te.buffer),n.delete(C))}function O(C,te){if(C.isInterleavedBufferAttribute&&(C=C.data),C.isGLBufferAttribute){const le=n.get(C);(!le||le.version<C.version)&&n.set(C,{buffer:C.buffer,type:C.type,bytesPerElement:C.elementSize,version:C.version});return}const Y=n.get(C);if(Y===void 0)n.set(C,t(C,te));else if(Y.version<C.version){if(Y.size!==C.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");d(Y.buffer,C,te),Y.version=C.version}}return{get:x,remove:S,update:O}}var m=F(371213),h=F(422870),l=F(457803),i=F(116898),a=F(430799),u=F(955609);const Pt={alphahash_fragment:`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`,alphahash_pars_fragment:`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (\u03B1\u03C4)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids \u03B1\u03C4 == 0. Could also do \u03B1\u03C4 =1-\u03B1\u03C4
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`,alphamap_fragment:`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`,alphamap_pars_fragment:`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,alphatest_fragment:`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`,alphatest_pars_fragment:`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,aomap_fragment:`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
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

#endif
`,aomap_pars_fragment:`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,batching_pars_vertex:`
#ifdef USE_BATCHING
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

#endif
`,batching_vertex:`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`,begin_vertex:`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`,beginnormal_vertex:`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,bsdfs:`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
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

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`,iridescence_fragment:`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
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

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,bumpmap_pars_fragment:`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,clipping_planes_fragment:`
#if NUM_CLIPPING_PLANES > 0

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

#endif
`,clipping_planes_pars_fragment:`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,clipping_planes_pars_vertex:`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,clipping_planes_vertex:`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,color_fragment:`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,color_pars_fragment:`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,color_pars_vertex:`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec3 vColor;

#endif
`,color_vertex:`
#if defined( USE_COLOR_ALPHA )

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

#endif
`,common:`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
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

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

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

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`,cube_uv_reflection_fragment:`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

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

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

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

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

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

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

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

#endif
`,defaultnormal_vertex:`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

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

#endif
`,displacementmap_pars_vertex:`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,displacementmap_vertex:`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`,emissivemap_fragment:`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,emissivemap_pars_fragment:`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,colorspace_fragment:`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,colorspace_pars_fragment:`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,envmap_fragment:`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
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

#endif
`,envmap_common_pars_fragment:`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,envmap_pars_fragment:`
#ifdef USE_ENVMAP

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

#endif
`,envmap_pars_vertex:`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,envmap_physical_pars_fragment:`
#ifdef USE_ENVMAP

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

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
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

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

#endif
`,envmap_vertex:`
#ifdef USE_ENVMAP

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

#endif
`,fog_vertex:`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,fog_pars_vertex:`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,fog_fragment:`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,fog_pars_fragment:`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,gradientmap_pars_fragment:`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,lightmap_pars_fragment:`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,lights_lambert_fragment:`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,lights_lambert_pars_fragment:`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,lights_pars_begin:`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
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

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

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

#endif
`,lights_toon_fragment:`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,lights_toon_pars_fragment:`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,lights_phong_fragment:`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,lights_phong_pars_fragment:`
varying vec3 vViewPosition;

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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,lights_physical_fragment:`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
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

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`,lights_physical_pars_fragment:`

struct PhysicalMaterial {

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

// temporary
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

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
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

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

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

	float alpha = pow2( roughness ); // UE4's roughness

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

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see reference)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
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

// This is a curve-fit approximation to the "Charlie sheen" BRDF integrated over the hemisphere from
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
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

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
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

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

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
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
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

	// Both indirect specular and indirect diffuse light accumulate here

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

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,lights_fragment_begin:`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

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

		// Iridescence F0 approximation
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

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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

#endif
`,lights_fragment_maps:`
#if defined( RE_IndirectDiffuse )

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

#endif
`,lights_fragment_end:`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`,logdepthbuf_fragment:`
#if defined( USE_LOGDEPTHBUF )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,logdepthbuf_pars_fragment:`
#if defined( USE_LOGDEPTHBUF )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,logdepthbuf_pars_vertex:`
#ifdef USE_LOGDEPTHBUF

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,logdepthbuf_vertex:`
#ifdef USE_LOGDEPTHBUF

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`,map_fragment:`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,map_pars_fragment:`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,map_particle_fragment:`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

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

#endif
`,map_particle_pars_fragment:`
#if defined( USE_POINTS_UV )

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

#endif
`,metalnessmap_fragment:`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,metalnessmap_pars_fragment:`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,morphinstance_vertex:`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`,morphcolor_vertex:`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,morphnormal_vertex:`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,morphtarget_pars_vertex:`
#ifdef USE_MORPHTARGETS

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

#endif
`,morphtarget_vertex:`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`,normal_fragment_begin:`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

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

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`,normal_fragment_maps:`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

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

#endif
`,normal_pars_fragment:`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,normal_pars_vertex:`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,normal_vertex:`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,normalmap_pars_fragment:`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`,clearcoat_normal_fragment_begin:`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`,clearcoat_normal_fragment_maps:`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`,clearcoat_pars_fragment:`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`,iridescence_pars_fragment:`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,opaque_fragment:`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,packing:`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
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
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
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

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps orthographic depth in [ 0, 1 ] to viewZ
	return depth * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	// maps perspective depth in [ 0, 1 ] to viewZ
	return ( near * far ) / ( ( far - near ) * depth - far );
}
`,premultiplied_alpha_fragment:`
#ifdef PREMULTIPLIED_ALPHA

	// Get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,project_vertex:`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,dithering_fragment:`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,dithering_pars_fragment:`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,roughnessmap_fragment:`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,roughnessmap_pars_fragment:`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,shadowmap_pars_fragment:`
#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

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

			float hard_shadow = step( distribution.x, compare ); // Hard Shadow

		#else

			float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		#endif

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

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

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

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

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );

		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {

			// dp = normalized distance from light to fragment position
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
			dp += shadowBias;

			// bd3D = base direction 3D
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

			#else // no percentage-closer filtering

				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

			#endif

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

#endif
`,shadowmap_pars_vertex:`

#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,shadowmap_vertex:`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

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

#endif


`,shadowmask_pars_fragment:`
float getShadowMask() {

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,skinbase_vertex:`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,skinning_pars_vertex:`
#ifdef USE_SKINNING

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

#endif
`,skinning_vertex:`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,skinnormal_vertex:`
#ifdef USE_SKINNING

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

#endif
`,specularmap_fragment:`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,specularmap_pars_fragment:`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,tonemapping_fragment:`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,tonemapping_pars_fragment:`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
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

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
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

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

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

vec3 CustomToneMapping( vec3 color ) { return color; }
`,transmission_fragment:`
#ifdef USE_TRANSMISSION

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

#endif
`,transmission_pars_fragment:`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

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

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

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

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
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

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

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

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`,uv_pars_fragment:`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,uv_pars_vertex:`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,uv_vertex:`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

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

#endif
`,worldpos_vertex:`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,background_vert:`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,background_frag:`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,backgroundCube_vert:`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,backgroundCube_frag:`

#ifdef ENVMAP_TYPE_CUBE

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

}
`,cube_vert:`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,cube_frag:`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,depth_vert:`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
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

}
`,depth_frag:`
#if DEPTH_PACKING == 3200

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

	// Higher precision equivalent of gl_FragCoord.z

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

}
`,distanceRGBA_vert:`
#define DISTANCE

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

}
`,distanceRGBA_frag:`
#define DISTANCE

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
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,equirect_vert:`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,equirect_frag:`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`,linedashed_vert:`
uniform float scale;
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

}
`,linedashed_frag:`
uniform vec3 diffuse;
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

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,meshbasic_vert:`
#include <common>
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

}
`,meshbasic_frag:`
uniform vec3 diffuse;
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

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
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

}
`,meshlambert_vert:`
#define LAMBERT

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

}
`,meshlambert_frag:`
#define LAMBERT

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

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,meshmatcap_vert:`
#define MATCAP

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

}
`,meshmatcap_frag:`
#define MATCAP

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
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,meshnormal_vert:`
#define NORMAL

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

}
`,meshnormal_frag:`
#define NORMAL

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

}
`,meshphong_vert:`
#define PHONG

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

}
`,meshphong_frag:`
#define PHONG

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

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,meshphysical_vert:`
#define STANDARD

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
}
`,meshphysical_frag:`
#define STANDARD

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

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
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

}
`,meshtoon_vert:`
#define TOON

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

}
`,meshtoon_frag:`
#define TOON

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

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,points_vert:`
uniform float size;
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

}
`,points_frag:`
uniform vec3 diffuse;
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

}
`,shadow_vert:`
#include <common>
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

}
`,shadow_frag:`
uniform vec3 color;
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

}
`,sprite_vert:`
uniform float rotation;
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

}
`,sprite_frag:`
uniform vec3 diffuse;
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

}
`};var ni=F(671619),di=F(237481),Ft=F(914164);const Ke={common:{diffuse:{value:new j.Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft.d},alphaMap:{value:null},alphaMapTransform:{value:new Ft.d},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft.d}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft.d},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft.d}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft.d}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft.d},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft.d},normalScale:{value:new di.I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft.d},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft.d}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft.d}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft.d}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j.Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j.Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft.d},alphaTest:{value:0},uvTransform:{value:new Ft.d}},sprite:{diffuse:{value:new j.Q(16777215)},opacity:{value:1},center:{value:new di.I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft.d},alphaMap:{value:null},alphaMapTransform:{value:new Ft.d},alphaTest:{value:0}}},Mi={basic:{uniforms:(0,ni.Ii)([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:(0,ni.Ii)([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new j.Q(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:(0,ni.Ii)([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new j.Q(0)},specular:{value:new j.Q(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:(0,ni.Ii)([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new j.Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:(0,ni.Ii)([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new j.Q(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:(0,ni.Ii)([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:(0,ni.Ii)([Ke.points,Ke.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:(0,ni.Ii)([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:(0,ni.Ii)([Ke.common,Ke.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:(0,ni.Ii)([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:(0,ni.Ii)([Ke.sprite,Ke.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft.d},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft.d}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:(0,ni.Ii)([Ke.common,Ke.displacementmap,{referencePosition:{value:new c.Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:(0,ni.Ii)([Ke.lights,Ke.fog,{color:{value:new j.Q(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Mi.physical={uniforms:(0,ni.Ii)([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft.d},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft.d},clearcoatNormalScale:{value:new di.I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft.d},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft.d},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft.d},sheen:{value:0},sheenColor:{value:new j.Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft.d},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft.d},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft.d},transmissionSamplerSize:{value:new di.I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft.d},attenuationDistance:{value:0},attenuationColor:{value:new j.Q(0)},specularColor:{value:new j.Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft.d},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft.d},anisotropyVector:{value:new di.I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft.d}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Ni={r:0,b:0,g:0},yi=new a.O,kr=new r.k;function Wr(e,n,t,d,x,S,O){const C=new j.Q(0);let te=S===!0?0:1,Y,le,ee=null,J=0,$=null;function ge(ne){let q=ne.isScene===!0?ne.background:null;return q&&q.isTexture&&(q=(ne.backgroundBlurriness>0?t:n).get(q)),q}function se(ne){let q=!1;const ve=ge(ne);ve===null?_(C,te):ve&&ve.isColor&&(_(ve,1),q=!0);const he=e.xr.getEnvironmentBlendMode();he==="additive"?d.buffers.color.setClear(0,0,0,1,O):he==="alpha-blend"&&d.buffers.color.setClear(0,0,0,0,O),(e.autoClear||q)&&(d.buffers.depth.setTest(!0),d.buffers.depth.setMask(!0),d.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function w(ne,q){const ve=ge(q);ve&&(ve.isCubeTexture||ve.mapping===s.Om)?(le===void 0&&(le=new u.e(new m.i(1,1,1),new l.B({name:"BackgroundCubeMaterial",uniforms:(0,ni.lx)(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:s.hsX,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),le.geometry.deleteAttribute("normal"),le.geometry.deleteAttribute("uv"),le.onBeforeRender=function(he,de,be){this.matrixWorld.copyPosition(be.matrixWorld)},Object.defineProperty(le.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),x.update(le)),yi.copy(q.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,ve.isCubeTexture&&ve.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),le.material.uniforms.envMap.value=ve,le.material.uniforms.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1,le.material.uniforms.backgroundBlurriness.value=q.backgroundBlurriness,le.material.uniforms.backgroundIntensity.value=q.backgroundIntensity,le.material.uniforms.backgroundRotation.value.setFromMatrix4(kr.makeRotationFromEuler(yi)),le.material.toneMapped=i.pp.getTransfer(ve.colorSpace)!==s.KLL,(ee!==ve||J!==ve.version||$!==e.toneMapping)&&(le.material.needsUpdate=!0,ee=ve,J=ve.version,$=e.toneMapping),le.layers.enableAll(),ne.unshift(le,le.geometry,le.material,0,0,null)):ve&&ve.isTexture&&(Y===void 0&&(Y=new u.e(new h.b(2,2),new l.B({name:"BackgroundMaterial",uniforms:(0,ni.lx)(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:s.hB5,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),x.update(Y)),Y.material.uniforms.t2D.value=ve,Y.material.uniforms.backgroundIntensity.value=q.backgroundIntensity,Y.material.toneMapped=i.pp.getTransfer(ve.colorSpace)!==s.KLL,ve.matrixAutoUpdate===!0&&ve.updateMatrix(),Y.material.uniforms.uvTransform.value.copy(ve.matrix),(ee!==ve||J!==ve.version||$!==e.toneMapping)&&(Y.material.needsUpdate=!0,ee=ve,J=ve.version,$=e.toneMapping),Y.layers.enableAll(),ne.unshift(Y,Y.geometry,Y.material,0,0,null))}function _(ne,q){ne.getRGB(Ni,(0,ni._U)(e)),d.buffers.color.setClear(Ni.r,Ni.g,Ni.b,q,O)}function ue(){le!==void 0&&(le.geometry.dispose(),le.material.dispose(),le=void 0),Y!==void 0&&(Y.geometry.dispose(),Y.material.dispose(),Y=void 0)}return{getClearColor:function(){return C},setClearColor:function(ne,q=1){C.set(ne),te=q,_(C,te)},getClearAlpha:function(){return te},setClearAlpha:function(ne){te=ne,_(C,te)},render:se,addToRenderList:w,dispose:ue}}function Xr(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),d={},x=J(null);let S=x,O=!1;function C(D,K,we,Ce,Se){let Be=!1;const ye=ee(Ce,we,K);S!==ye&&(S=ye,Y(S.object)),Be=$(D,Ce,we,Se),Be&&ge(D,Ce,we,Se),Se!==null&&n.update(Se,e.ELEMENT_ARRAY_BUFFER),(Be||O)&&(O=!1,q(D,K,we,Ce),Se!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Se).buffer))}function te(){return e.createVertexArray()}function Y(D){return e.bindVertexArray(D)}function le(D){return e.deleteVertexArray(D)}function ee(D,K,we){const Ce=we.wireframe===!0;let Se=d[D.id];Se===void 0&&(Se={},d[D.id]=Se);let Be=Se[K.id];Be===void 0&&(Be={},Se[K.id]=Be);let ye=Be[Ce];return ye===void 0&&(ye=J(te()),Be[Ce]=ye),ye}function J(D){const K=[],we=[],Ce=[];for(let Se=0;Se<t;Se++)K[Se]=0,we[Se]=0,Ce[Se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:we,attributeDivisors:Ce,object:D,attributes:{},index:null}}function $(D,K,we,Ce){const Se=S.attributes,Be=K.attributes;let ye=0;const Ye=we.getAttributes();for(const _e in Ye)if(Ye[_e].location>=0){const vt=Se[_e];let Ut=Be[_e];if(Ut===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(Ut=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(Ut=D.instanceColor)),vt===void 0||vt.attribute!==Ut||Ut&&vt.data!==Ut.data)return!0;ye++}return S.attributesNum!==ye||S.index!==Ce}function ge(D,K,we,Ce){const Se={},Be=K.attributes;let ye=0;const Ye=we.getAttributes();for(const _e in Ye)if(Ye[_e].location>=0){let vt=Be[_e];vt===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor));const Ut={};Ut.attribute=vt,vt&&vt.data&&(Ut.data=vt.data),Se[_e]=Ut,ye++}S.attributes=Se,S.attributesNum=ye,S.index=Ce}function se(){const D=S.newAttributes;for(let K=0,we=D.length;K<we;K++)D[K]=0}function w(D){_(D,0)}function _(D,K){const we=S.newAttributes,Ce=S.enabledAttributes,Se=S.attributeDivisors;we[D]=1,Ce[D]===0&&(e.enableVertexAttribArray(D),Ce[D]=1),Se[D]!==K&&(e.vertexAttribDivisor(D,K),Se[D]=K)}function ue(){const D=S.newAttributes,K=S.enabledAttributes;for(let we=0,Ce=K.length;we<Ce;we++)K[we]!==D[we]&&(e.disableVertexAttribArray(we),K[we]=0)}function ne(D,K,we,Ce,Se,Be,ye){ye===!0?e.vertexAttribIPointer(D,K,we,Se,Be):e.vertexAttribPointer(D,K,we,Ce,Se,Be)}function q(D,K,we,Ce){se();const Se=Ce.attributes,Be=we.getAttributes(),ye=K.defaultAttributeValues;for(const Ye in Be){const _e=Be[Ye];if(_e.location>=0){let ft=Se[Ye];if(ft===void 0&&(Ye==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),Ye==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),ft!==void 0){const vt=ft.normalized,Ut=ft.itemSize,Vt=n.get(ft);if(Vt===void 0)continue;const hi=Vt.buffer,Jt=Vt.type,Me=Vt.bytesPerElement,Ze=Jt===e.INT||Jt===e.UNSIGNED_INT||ft.gpuType===s.Yuy;if(ft.isInterleavedBufferAttribute){const He=ft.data,xt=He.stride,Et=ft.offset;if(He.isInstancedInterleavedBuffer){for(let Rt=0;Rt<_e.locationSize;Rt++)_(_e.location+Rt,He.meshPerAttribute);D.isInstancedMesh!==!0&&Ce._maxInstanceCount===void 0&&(Ce._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Rt=0;Rt<_e.locationSize;Rt++)w(_e.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,hi);for(let Rt=0;Rt<_e.locationSize;Rt++)ne(_e.location+Rt,Ut/_e.locationSize,Jt,vt,xt*Me,(Et+Ut/_e.locationSize*Rt)*Me,Ze)}else{if(ft.isInstancedBufferAttribute){for(let He=0;He<_e.locationSize;He++)_(_e.location+He,ft.meshPerAttribute);D.isInstancedMesh!==!0&&Ce._maxInstanceCount===void 0&&(Ce._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let He=0;He<_e.locationSize;He++)w(_e.location+He);e.bindBuffer(e.ARRAY_BUFFER,hi);for(let He=0;He<_e.locationSize;He++)ne(_e.location+He,Ut/_e.locationSize,Jt,vt,Ut*Me,Ut/_e.locationSize*He*Me,Ze)}}else if(ye!==void 0){const vt=ye[Ye];if(vt!==void 0)switch(vt.length){case 2:e.vertexAttrib2fv(_e.location,vt);break;case 3:e.vertexAttrib3fv(_e.location,vt);break;case 4:e.vertexAttrib4fv(_e.location,vt);break;default:e.vertexAttrib1fv(_e.location,vt)}}}}ue()}function ve(){be();for(const D in d){const K=d[D];for(const we in K){const Ce=K[we];for(const Se in Ce)le(Ce[Se].object),delete Ce[Se];delete K[we]}delete d[D]}}function he(D){if(d[D.id]===void 0)return;const K=d[D.id];for(const we in K){const Ce=K[we];for(const Se in Ce)le(Ce[Se].object),delete Ce[Se];delete K[we]}delete d[D.id]}function de(D){for(const K in d){const we=d[K];if(we[D.id]===void 0)continue;const Ce=we[D.id];for(const Se in Ce)le(Ce[Se].object),delete Ce[Se];delete we[D.id]}}function be(){N(),O=!0,S!==x&&(S=x,Y(S.object))}function N(){x.geometry=null,x.program=null,x.wireframe=!1}return{setup:C,reset:be,resetDefaultState:N,dispose:ve,releaseStatesOfGeometry:he,releaseStatesOfProgram:de,initAttributes:se,enableAttribute:w,disableUnusedAttributes:ue}}function Kr(e,n,t){let d;function x(Y){d=Y}function S(Y,le){e.drawArrays(d,Y,le),t.update(le,d,1)}function O(Y,le,ee){ee!==0&&(e.drawArraysInstanced(d,Y,le,ee),t.update(le,d,ee))}function C(Y,le,ee){if(ee===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(d,Y,0,le,0,ee);let $=0;for(let ge=0;ge<ee;ge++)$+=le[ge];t.update($,d,1)}function te(Y,le,ee,J){if(ee===0)return;const $=n.get("WEBGL_multi_draw");if($===null)for(let ge=0;ge<Y.length;ge++)O(Y[ge],le[ge],J[ge]);else{$.multiDrawArraysInstancedWEBGL(d,Y,0,le,0,J,0,ee);let ge=0;for(let se=0;se<ee;se++)ge+=le[se]*J[se];t.update(ge,d,1)}}this.setMode=x,this.render=S,this.renderInstances=O,this.renderMultiDraw=C,this.renderMultiDrawInstances=te}function Yr(e,n,t,d){let x;function S(){if(x!==void 0)return x;if(n.has("EXT_texture_filter_anisotropic")===!0){const de=n.get("EXT_texture_filter_anisotropic");x=e.getParameter(de.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else x=0;return x}function O(de){return!(de!==s.GWd&&d.convert(de)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function C(de){const be=de===s.ix0&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(de!==s.OUM&&d.convert(de)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&de!==s.RQf&&!be)}function te(de){if(de==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";de="mediump"}return de==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let Y=t.precision!==void 0?t.precision:"highp";const le=te(Y);le!==Y&&(console.warn("THREE.WebGLRenderer:",Y,"not supported, using",le,"instead."),Y=le);const ee=t.logarithmicDepthBuffer===!0,J=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),$=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),ge=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),se=e.getParameter(e.MAX_TEXTURE_SIZE),w=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),ue=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),ne=e.getParameter(e.MAX_VARYING_VECTORS),q=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),ve=ge>0,he=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:S,getMaxPrecision:te,textureFormatReadable:O,textureTypeReadable:C,precision:Y,logarithmicDepthBuffer:ee,reversedDepthBuffer:J,maxTextures:$,maxVertexTextures:ge,maxTextureSize:se,maxCubemapSize:w,maxAttributes:_,maxVertexUniforms:ue,maxVaryings:ne,maxFragmentUniforms:q,vertexTextures:ve,maxSamples:he}}var qr=F(432064);function jr(e){const n=this;let t=null,d=0,x=!1,S=!1;const O=new qr.Z,C=new Ft.d,te={value:null,needsUpdate:!1};this.uniform=te,this.numPlanes=0,this.numIntersection=0,this.init=function(ee,J){const $=ee.length!==0||J||d!==0||x;return x=J,d=ee.length,$},this.beginShadows=function(){S=!0,le(null)},this.endShadows=function(){S=!1},this.setGlobalState=function(ee,J){t=le(ee,J,0)},this.setState=function(ee,J,$){const ge=ee.clippingPlanes,se=ee.clipIntersection,w=ee.clipShadows,_=e.get(ee);if(!x||ge===null||ge.length===0||S&&!w)S?le(null):Y();else{const ue=S?0:d,ne=ue*4;let q=_.clippingState||null;te.value=q,q=le(ge,J,ne,$);for(let ve=0;ve!==ne;++ve)q[ve]=t[ve];_.clippingState=q,this.numIntersection=se?this.numPlanes:0,this.numPlanes+=ue}};function Y(){te.value!==t&&(te.value=t,te.needsUpdate=d>0),n.numPlanes=d,n.numIntersection=0}function le(ee,J,$,ge){const se=ee!==null?ee.length:0;let w=null;if(se!==0){if(w=te.value,ge!==!0||w===null){const _=$+se*4,ue=J.matrixWorldInverse;C.getNormalMatrix(ue),(w===null||w.length<_)&&(w=new Float32Array(_));for(let ne=0,q=$;ne!==se;++ne,q+=4)O.copy(ee[ne]).applyMatrix4(ue,C),O.normal.toArray(w,q),w[q+3]=O.constant}te.value=w,te.needsUpdate=!0}return n.numPlanes=se,n.numIntersection=0,w}}var Ri=F(641897),Zr=F(493303),xi=F(212341);const Ci=-90,wi=1;class $i extends Zr.B{constructor(n,t,d){super(),this.type="CubeCamera",this.renderTarget=d,this.coordinateSystem=null,this.activeMipmapLevel=0;const x=new xi.PerspectiveCamera(Ci,wi,n,t);x.layers=this.layers,this.add(x);const S=new xi.PerspectiveCamera(Ci,wi,n,t);S.layers=this.layers,this.add(S);const O=new xi.PerspectiveCamera(Ci,wi,n,t);O.layers=this.layers,this.add(O);const C=new xi.PerspectiveCamera(Ci,wi,n,t);C.layers=this.layers,this.add(C);const te=new xi.PerspectiveCamera(Ci,wi,n,t);te.layers=this.layers,this.add(te);const Y=new xi.PerspectiveCamera(Ci,wi,n,t);Y.layers=this.layers,this.add(Y)}updateCoordinateSystem(){const n=this.coordinateSystem,t=this.children.concat(),[d,x,S,O,C,te]=t;for(const Y of t)this.remove(Y);if(n===s.TdN)d.up.set(0,1,0),d.lookAt(1,0,0),x.up.set(0,1,0),x.lookAt(-1,0,0),S.up.set(0,0,-1),S.lookAt(0,1,0),O.up.set(0,0,1),O.lookAt(0,-1,0),C.up.set(0,1,0),C.lookAt(0,0,1),te.up.set(0,1,0),te.lookAt(0,0,-1);else if(n===s.i7u)d.up.set(0,-1,0),d.lookAt(-1,0,0),x.up.set(0,-1,0),x.lookAt(1,0,0),S.up.set(0,0,1),S.lookAt(0,1,0),O.up.set(0,0,-1),O.lookAt(0,-1,0),C.up.set(0,-1,0),C.lookAt(0,0,1),te.up.set(0,-1,0),te.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const Y of t)this.add(Y),Y.updateMatrixWorld()}update(n,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:d,activeMipmapLevel:x}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[S,O,C,te,Y,le]=this.children,ee=n.getRenderTarget(),J=n.getActiveCubeFace(),$=n.getActiveMipmapLevel(),ge=n.xr.enabled;n.xr.enabled=!1;const se=d.texture.generateMipmaps;d.texture.generateMipmaps=!1,n.setRenderTarget(d,0,x),n.render(t,S),n.setRenderTarget(d,1,x),n.render(t,O),n.setRenderTarget(d,2,x),n.render(t,C),n.setRenderTarget(d,3,x),n.render(t,te),n.setRenderTarget(d,4,x),n.render(t,Y),d.texture.generateMipmaps=se,n.setRenderTarget(d,5,x),n.render(t,le),n.setRenderTarget(ee,J,$),n.xr.enabled=ge,d.texture.needsPMREMUpdate=!0}}var Ai=F(953923);class Hi extends Ai.g{constructor(n=[],t=s.hy7,d,x,S,O,C,te,Y,le){super(n,t,d,x,S,O,C,te,Y,le),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class en extends Ri.n{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const d={width:n,height:n,depth:1},x=[d,d,d,d,d,d];this.texture=new Hi(x),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const d={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},x=new m.i(5,5,5),S=new l.B({name:"CubemapFromEquirect",uniforms:(0,ni.lx)(d.uniforms),vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,side:s.hsX,blending:s.XIg});S.uniforms.tEquirect.value=t;const O=new u.e(x,S),C=t.minFilter;return t.minFilter===s.$_I&&(t.minFilter=s.k6q),new $i(1,10,this).update(n,O),t.minFilter=C,O.geometry.dispose(),O.material.dispose(),this}clear(n,t=!0,d=!0,x=!0){const S=n.getRenderTarget();for(let O=0;O<6;O++)n.setRenderTarget(this,O),n.clear(t,d,x);n.setRenderTarget(S)}}function tn(e){let n=new WeakMap;function t(O,C){return C===s.wfO?O.mapping=s.hy7:C===s.uV5&&(O.mapping=s.xFO),O}function d(O){if(O&&O.isTexture){const C=O.mapping;if(C===s.wfO||C===s.uV5)if(n.has(O)){const te=n.get(O).texture;return t(te,O.mapping)}else{const te=O.image;if(te&&te.height>0){const Y=new en(te.height);return Y.fromEquirectangularTexture(e,O),n.set(O,Y),O.addEventListener("dispose",x),t(Y.texture,O.mapping)}else return null}}return O}function x(O){const C=O.target;C.removeEventListener("dispose",x);const te=n.get(C);te!==void 0&&(n.delete(C),te.dispose())}function S(){n=new WeakMap}return{get:d,dispose:S}}var ki=F(444209);function nn(e){let n=new WeakMap,t=null;function d(C){if(C&&C.isTexture){const te=C.mapping,Y=te===s.wfO||te===s.uV5,le=te===s.hy7||te===s.xFO;if(Y||le){let ee=n.get(C);const J=ee!==void 0?ee.texture.pmremVersion:0;if(C.isRenderTargetTexture&&C.pmremVersion!==J)return t===null&&(t=new ki.B(e)),ee=Y?t.fromEquirectangular(C,ee):t.fromCubemap(C,ee),ee.texture.pmremVersion=C.pmremVersion,n.set(C,ee),ee.texture;if(ee!==void 0)return ee.texture;{const $=C.image;return Y&&$&&$.height>0||le&&$&&x($)?(t===null&&(t=new ki.B(e)),ee=Y?t.fromEquirectangular(C):t.fromCubemap(C),ee.texture.pmremVersion=C.pmremVersion,n.set(C,ee),C.addEventListener("dispose",S),ee.texture):null}}}return C}function x(C){let te=0;const Y=6;for(let le=0;le<Y;le++)C[le]!==void 0&&te++;return te===Y}function S(C){const te=C.target;te.removeEventListener("dispose",S);const Y=n.get(te);Y!==void 0&&(n.delete(te),Y.dispose())}function O(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:d,dispose:O}}var Ei=F(472686);function rn(e){const n={};function t(d){if(n[d]!==void 0)return n[d];let x;switch(d){case"WEBGL_depth_texture":x=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":x=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":x=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":x=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:x=e.getExtension(d)}return n[d]=x,x}return{has:function(d){return t(d)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(d){const x=t(d);return x===null&&(0,Ei.mc)("THREE.WebGLRenderer: "+d+" extension not supported."),x}}}var Vi=F(739920);function Qr(e,n,t,d){const x={},S=new WeakMap;function O(ee){const J=ee.target;J.index!==null&&n.remove(J.index);for(const ge in J.attributes)n.remove(J.attributes[ge]);J.removeEventListener("dispose",O),delete x[J.id];const $=S.get(J);$&&(n.remove($),S.delete(J)),d.releaseStatesOfGeometry(J),J.isInstancedBufferGeometry===!0&&delete J._maxInstanceCount,t.memory.geometries--}function C(ee,J){return x[J.id]===!0||(J.addEventListener("dispose",O),x[J.id]=!0,t.memory.geometries++),J}function te(ee){const J=ee.attributes;for(const $ in J)n.update(J[$],e.ARRAY_BUFFER)}function Y(ee){const J=[],$=ee.index,ge=ee.attributes.position;let se=0;if($!==null){const ue=$.array;se=$.version;for(let ne=0,q=ue.length;ne<q;ne+=3){const ve=ue[ne+0],he=ue[ne+1],de=ue[ne+2];J.push(ve,he,he,de,de,ve)}}else if(ge!==void 0){const ue=ge.array;se=ge.version;for(let ne=0,q=ue.length/3-1;ne<q;ne+=3){const ve=ne+0,he=ne+1,de=ne+2;J.push(ve,he,he,de,de,ve)}}else return;const w=new((0,Ei.AQ)(J)?Vi.MW:Vi.A$)(J,1);w.version=se;const _=S.get(ee);_&&n.remove(_),S.set(ee,w)}function le(ee){const J=S.get(ee);if(J){const $=ee.index;$!==null&&J.version<$.version&&Y(ee)}else Y(ee);return S.get(ee)}return{get:C,update:te,getWireframeAttribute:le}}function Jr(e,n,t){let d;function x(J){d=J}let S,O;function C(J){S=J.type,O=J.bytesPerElement}function te(J,$){e.drawElements(d,$,S,J*O),t.update($,d,1)}function Y(J,$,ge){ge!==0&&(e.drawElementsInstanced(d,$,S,J*O,ge),t.update($,d,ge))}function le(J,$,ge){if(ge===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(d,$,0,S,J,0,ge);let w=0;for(let _=0;_<ge;_++)w+=$[_];t.update(w,d,1)}function ee(J,$,ge,se){if(ge===0)return;const w=n.get("WEBGL_multi_draw");if(w===null)for(let _=0;_<J.length;_++)Y(J[_]/O,$[_],se[_]);else{w.multiDrawElementsInstancedWEBGL(d,$,0,S,J,0,se,0,ge);let _=0;for(let ue=0;ue<ge;ue++)_+=$[ue]*se[ue];t.update(_,d,1)}}this.setMode=x,this.setIndex=C,this.render=te,this.renderInstances=Y,this.renderMultiDraw=le,this.renderMultiDrawInstances=ee}function $r(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function d(S,O,C){switch(t.calls++,O){case e.TRIANGLES:t.triangles+=C*(S/3);break;case e.LINES:t.lines+=C*(S/2);break;case e.LINE_STRIP:t.lines+=C*(S-1);break;case e.LINE_LOOP:t.lines+=C*S;break;case e.POINTS:t.points+=C*S;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",O);break}}function x(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:x,update:d}}class sn extends Ai.g{constructor(n=null,t=1,d=1,x=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:t,height:d,depth:x},this.magFilter=s.hxR,this.minFilter=s.hxR,this.wrapR=s.ghU,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}function es(e,n,t){const d=new WeakMap,x=new b.I;function S(O,C,te){const Y=O.morphTargetInfluences,le=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=le!==void 0?le.length:0;let J=d.get(C);if(J===void 0||J.count!==ee){let $=function(){be.dispose(),d.delete(C),C.removeEventListener("dispose",$)};J!==void 0&&J.texture.dispose();const ge=C.morphAttributes.position!==void 0,se=C.morphAttributes.normal!==void 0,w=C.morphAttributes.color!==void 0,_=C.morphAttributes.position||[],ue=C.morphAttributes.normal||[],ne=C.morphAttributes.color||[];let q=0;ge===!0&&(q=1),se===!0&&(q=2),w===!0&&(q=3);let ve=C.attributes.position.count*q,he=1;ve>n.maxTextureSize&&(he=Math.ceil(ve/n.maxTextureSize),ve=n.maxTextureSize);const de=new Float32Array(ve*he*4*ee),be=new sn(de,ve,he,ee);be.type=s.RQf,be.needsUpdate=!0;const N=q*4;for(let D=0;D<ee;D++){const K=_[D],we=ue[D],Ce=ne[D],Se=ve*he*4*D;for(let Be=0;Be<K.count;Be++){const ye=Be*N;ge===!0&&(x.fromBufferAttribute(K,Be),de[Se+ye+0]=x.x,de[Se+ye+1]=x.y,de[Se+ye+2]=x.z,de[Se+ye+3]=0),se===!0&&(x.fromBufferAttribute(we,Be),de[Se+ye+4]=x.x,de[Se+ye+5]=x.y,de[Se+ye+6]=x.z,de[Se+ye+7]=0),w===!0&&(x.fromBufferAttribute(Ce,Be),de[Se+ye+8]=x.x,de[Se+ye+9]=x.y,de[Se+ye+10]=x.z,de[Se+ye+11]=Ce.itemSize===4?x.w:1)}}J={count:ee,texture:be,size:new di.I(ve,he)},d.set(C,J),C.addEventListener("dispose",$)}if(O.isInstancedMesh===!0&&O.morphTexture!==null)te.getUniforms().setValue(e,"morphTexture",O.morphTexture,t);else{let $=0;for(let se=0;se<Y.length;se++)$+=Y[se];const ge=C.morphTargetsRelative?1:1-$;te.getUniforms().setValue(e,"morphTargetBaseInfluence",ge),te.getUniforms().setValue(e,"morphTargetInfluences",Y)}te.getUniforms().setValue(e,"morphTargetsTexture",J.texture,t),te.getUniforms().setValue(e,"morphTargetsTextureSize",J.size)}return{update:S}}function ts(e,n,t,d){let x=new WeakMap;function S(te){const Y=d.render.frame,le=te.geometry,ee=n.get(te,le);if(x.get(ee)!==Y&&(n.update(ee),x.set(ee,Y)),te.isInstancedMesh&&(te.hasEventListener("dispose",C)===!1&&te.addEventListener("dispose",C),x.get(te)!==Y&&(t.update(te.instanceMatrix,e.ARRAY_BUFFER),te.instanceColor!==null&&t.update(te.instanceColor,e.ARRAY_BUFFER),x.set(te,Y))),te.isSkinnedMesh){const J=te.skeleton;x.get(J)!==Y&&(J.update(),x.set(J,Y))}return ee}function O(){x=new WeakMap}function C(te){const Y=te.target;Y.removeEventListener("dispose",C),t.remove(Y.instanceMatrix),Y.instanceColor!==null&&t.remove(Y.instanceColor)}return{update:S,dispose:O}}var is=F(752853);class ns extends Ai.g{constructor(n=null,t=1,d=1,x=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:t,height:d,depth:x},this.magFilter=s.hxR,this.minFilter=s.hxR,this.wrapR=s.ghU,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var rs=F(590336);class Wi extends Ai.g{constructor(n,t,d=s.bkx,x,S,O,C=s.hxR,te=s.hxR,Y,le=s.zdS,ee=1){if(le!==s.zdS&&le!==s.dcC)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const J={width:n,height:t,depth:ee};super(J,x,S,O,C,te,le,d,Y),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new rs.k(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const t=super.toJSON(n);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xi=new Ai.g,Ki=new Wi(1,1),an=new sn,on=new ns,ln=new Hi,ss=[],as=[],os=new Float32Array(16),ls=new Float32Array(9),cs=new Float32Array(4);function Oi(e,n,t){const d=e[0];if(d<=0||d>0)return e;const x=n*t;let S=ss[x];if(S===void 0&&(S=new Float32Array(x),ss[x]=S),n!==0){d.toArray(S,0);for(let O=1,C=0;O!==n;++O)C+=t,e[O].toArray(S,C)}return S}function li(e,n){if(e.length!==n.length)return!1;for(let t=0,d=e.length;t<d;t++)if(e[t]!==n[t])return!1;return!0}function ci(e,n){for(let t=0,d=n.length;t<d;t++)e[t]=n[t]}function Yi(e,n){let t=as[n];t===void 0&&(t=new Int32Array(n),as[n]=t);for(let d=0;d!==n;++d)t[d]=e.allocateTextureUnit();return t}function Bs(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Vs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(li(t,n))return;e.uniform2fv(this.addr,n),ci(t,n)}}function zs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(li(t,n))return;e.uniform3fv(this.addr,n),ci(t,n)}}function Gs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(li(t,n))return;e.uniform4fv(this.addr,n),ci(t,n)}}function Hs(e,n){const t=this.cache,d=n.elements;if(d===void 0){if(li(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ci(t,n)}else{if(li(t,d))return;cs.set(d),e.uniformMatrix2fv(this.addr,!1,cs),ci(t,d)}}function ks(e,n){const t=this.cache,d=n.elements;if(d===void 0){if(li(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ci(t,n)}else{if(li(t,d))return;ls.set(d),e.uniformMatrix3fv(this.addr,!1,ls),ci(t,d)}}function Ws(e,n){const t=this.cache,d=n.elements;if(d===void 0){if(li(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ci(t,n)}else{if(li(t,d))return;os.set(d),e.uniformMatrix4fv(this.addr,!1,os),ci(t,d)}}function Xs(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Ks(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(li(t,n))return;e.uniform2iv(this.addr,n),ci(t,n)}}function Ys(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(li(t,n))return;e.uniform3iv(this.addr,n),ci(t,n)}}function qs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(li(t,n))return;e.uniform4iv(this.addr,n),ci(t,n)}}function js(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Zs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(li(t,n))return;e.uniform2uiv(this.addr,n),ci(t,n)}}function Qs(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(li(t,n))return;e.uniform3uiv(this.addr,n),ci(t,n)}}function Js(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(li(t,n))return;e.uniform4uiv(this.addr,n),ci(t,n)}}function $s(e,n,t){const d=this.cache,x=t.allocateTextureUnit();d[0]!==x&&(e.uniform1i(this.addr,x),d[0]=x);let S;this.type===e.SAMPLER_2D_SHADOW?(Ki.compareFunction=s.TiK,S=Ki):S=Xi,t.setTexture2D(n||S,x)}function ea(e,n,t){const d=this.cache,x=t.allocateTextureUnit();d[0]!==x&&(e.uniform1i(this.addr,x),d[0]=x),t.setTexture3D(n||on,x)}function ta(e,n,t){const d=this.cache,x=t.allocateTextureUnit();d[0]!==x&&(e.uniform1i(this.addr,x),d[0]=x),t.setTextureCube(n||ln,x)}function ia(e,n,t){const d=this.cache,x=t.allocateTextureUnit();d[0]!==x&&(e.uniform1i(this.addr,x),d[0]=x),t.setTexture2DArray(n||an,x)}function na(e){switch(e){case 5126:return Bs;case 35664:return Vs;case 35665:return zs;case 35666:return Gs;case 35674:return Hs;case 35675:return ks;case 35676:return Ws;case 5124:case 35670:return Xs;case 35667:case 35671:return Ks;case 35668:case 35672:return Ys;case 35669:case 35673:return qs;case 5125:return js;case 36294:return Zs;case 36295:return Qs;case 36296:return Js;case 35678:case 36198:case 36298:case 36306:case 35682:return $s;case 35679:case 36299:case 36307:return ea;case 35680:case 36300:case 36308:case 36293:return ta;case 36289:case 36303:case 36311:case 36292:return ia}}function ra(e,n){e.uniform1fv(this.addr,n)}function sa(e,n){const t=Oi(n,this.size,2);e.uniform2fv(this.addr,t)}function aa(e,n){const t=Oi(n,this.size,3);e.uniform3fv(this.addr,t)}function oa(e,n){const t=Oi(n,this.size,4);e.uniform4fv(this.addr,t)}function la(e,n){const t=Oi(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function ca(e,n){const t=Oi(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function ha(e,n){const t=Oi(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function ua(e,n){e.uniform1iv(this.addr,n)}function da(e,n){e.uniform2iv(this.addr,n)}function fa(e,n){e.uniform3iv(this.addr,n)}function pa(e,n){e.uniform4iv(this.addr,n)}function ma(e,n){e.uniform1uiv(this.addr,n)}function _a(e,n){e.uniform2uiv(this.addr,n)}function ga(e,n){e.uniform3uiv(this.addr,n)}function va(e,n){e.uniform4uiv(this.addr,n)}function Ma(e,n,t){const d=this.cache,x=n.length,S=Yi(t,x);li(d,S)||(e.uniform1iv(this.addr,S),ci(d,S));for(let O=0;O!==x;++O)t.setTexture2D(n[O]||Xi,S[O])}function xa(e,n,t){const d=this.cache,x=n.length,S=Yi(t,x);li(d,S)||(e.uniform1iv(this.addr,S),ci(d,S));for(let O=0;O!==x;++O)t.setTexture3D(n[O]||on,S[O])}function Ea(e,n,t){const d=this.cache,x=n.length,S=Yi(t,x);li(d,S)||(e.uniform1iv(this.addr,S),ci(d,S));for(let O=0;O!==x;++O)t.setTextureCube(n[O]||ln,S[O])}function Sa(e,n,t){const d=this.cache,x=n.length,S=Yi(t,x);li(d,S)||(e.uniform1iv(this.addr,S),ci(d,S));for(let O=0;O!==x;++O)t.setTexture2DArray(n[O]||an,S[O])}function Ta(e){switch(e){case 5126:return ra;case 35664:return sa;case 35665:return aa;case 35666:return oa;case 35674:return la;case 35675:return ca;case 35676:return ha;case 5124:case 35670:return ua;case 35667:case 35671:return da;case 35668:case 35672:return fa;case 35669:case 35673:return pa;case 5125:return ma;case 36294:return _a;case 36295:return ga;case 36296:return va;case 35678:case 36198:case 36298:case 36306:case 35682:return Ma;case 35679:case 36299:case 36307:return xa;case 35680:case 36300:case 36308:case 36293:return Ea;case 36289:case 36303:case 36311:case 36292:return Sa}}class ya{constructor(n,t,d){this.id=n,this.addr=d,this.cache=[],this.type=t.type,this.setValue=na(t.type)}}class Aa{constructor(n,t,d){this.id=n,this.addr=d,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ta(t.type)}}class ba{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,d){const x=this.seq;for(let S=0,O=x.length;S!==O;++S){const C=x[S];C.setValue(n,t[C.id],d)}}}const cn=/(\w+)(\])?(\[|\.)?/g;function hs(e,n){e.seq.push(n),e.map[n.id]=n}function Ra(e,n,t){const d=e.name,x=d.length;for(cn.lastIndex=0;;){const S=cn.exec(d),O=cn.lastIndex;let C=S[1];const te=S[2]==="]",Y=S[3];if(te&&(C=C|0),Y===void 0||Y==="["&&O+2===x){hs(t,Y===void 0?new ya(C,e,n):new Aa(C,e,n));break}else{let ee=t.map[C];ee===void 0&&(ee=new ba(C),hs(t,ee)),t=ee}}}class qi{constructor(n,t){this.seq=[],this.map={};const d=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let x=0;x<d;++x){const S=n.getActiveUniform(t,x),O=n.getUniformLocation(t,S.name);Ra(S,O,this)}}setValue(n,t,d,x){const S=this.map[t];S!==void 0&&S.setValue(n,d,x)}setOptional(n,t,d){const x=t[d];x!==void 0&&this.setValue(n,d,x)}static upload(n,t,d,x){for(let S=0,O=t.length;S!==O;++S){const C=t[S],te=d[C.id];te.needsUpdate!==!1&&C.setValue(n,te.value,x)}}static seqWithValue(n,t){const d=[];for(let x=0,S=n.length;x!==S;++x){const O=n[x];O.id in t&&d.push(O)}return d}}function us(e,n,t){const d=e.createShader(n);return e.shaderSource(d,t),e.compileShader(d),d}const Ca=37297;let wa=0;function Pa(e,n){const t=e.split(`
`),d=[],x=Math.max(n-6,0),S=Math.min(n+6,t.length);for(let O=x;O<S;O++){const C=O+1;d.push(`${C===n?">":" "} ${C}: ${t[O]}`)}return d.join(`
`)}const ds=new Ft.d;function Da(e){i.pp._getMatrix(ds,i.pp.workingColorSpace,e);const n=`mat3( ${ds.elements.map(t=>t.toFixed(4))} )`;switch(i.pp.getTransfer(e)){case s.VxR:return[n,"LinearTransferOETF"];case s.KLL:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function fs(e,n,t){const d=e.getShaderParameter(n,e.COMPILE_STATUS),S=(e.getShaderInfoLog(n)||"").trim();if(d&&S==="")return"";const O=/ERROR: 0:(\d+)/.exec(S);if(O){const C=parseInt(O[1]);return t.toUpperCase()+`

`+S+`

`+Pa(e.getShaderSource(n),C)}else return S}function La(e,n){const t=Da(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ua(e,n){let t;switch(n){case s.kyO:t="Linear";break;case s.Mjd:t="Reinhard";break;case s.nNL:t="Cineon";break;case s.FV:t="ACESFilmic";break;case s.LAk:t="AgX";break;case s.aJ8:t="Neutral";break;case s.g7M:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ji=new c.Vector3;function Ia(){i.pp.getLuminanceCoefficients(ji);const e=ji.x.toFixed(4),n=ji.y.toFixed(4),t=ji.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Na(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function Oa(e){const n=[];for(const t in e){const d=e[t];d!==!1&&n.push("#define "+t+" "+d)}return n.join(`
`)}function Fa(e,n){const t={},d=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let x=0;x<d;x++){const S=e.getActiveAttrib(n,x),O=S.name;let C=1;S.type===e.FLOAT_MAT2&&(C=2),S.type===e.FLOAT_MAT3&&(C=3),S.type===e.FLOAT_MAT4&&(C=4),t[O]={type:S.type,location:e.getAttribLocation(n,O),locationSize:C}}return t}function zi(e){return e!==""}function ps(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ms(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Ba=/^[ \t]*#include +<([\w\d./]+)>/gm;function hn(e){return e.replace(Ba,za)}const Va=new Map;function za(e,n){let t=Pt[n];if(t===void 0){const d=Va.get(n);if(d!==void 0)t=Pt[d],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,d);else throw new Error("Can not resolve #include <"+n+">")}return hn(t)}const Ga=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _s(e){return e.replace(Ga,Ha)}function Ha(e,n,t,d){let x="";for(let S=parseInt(n);S<parseInt(t);S++)x+=d.replace(/\[\s*i\s*\]/g,"[ "+S+" ]").replace(/UNROLLED_LOOP_INDEX/g,S);return x}function gs(e){let n=`precision ${e.precision} float;
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
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function ka(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===s.QP0?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===s.Wk7?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===s.RyA&&(n="SHADOWMAP_TYPE_VSM"),n}function Wa(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case s.hy7:case s.xFO:n="ENVMAP_TYPE_CUBE";break;case s.Om:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Xa(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case s.xFO:n="ENVMAP_MODE_REFRACTION";break}return n}function Ka(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case s.caT:n="ENVMAP_BLENDING_MULTIPLY";break;case s.KRh:n="ENVMAP_BLENDING_MIX";break;case s.XrR:n="ENVMAP_BLENDING_ADD";break}return n}function Ya(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,d=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:d,maxMip:t}}function qa(e,n,t,d){const x=e.getContext(),S=t.defines;let O=t.vertexShader,C=t.fragmentShader;const te=ka(t),Y=Wa(t),le=Xa(t),ee=Ka(t),J=Ya(t),$=Na(t),ge=Oa(S),se=x.createProgram();let w,_,ue=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,ge].filter(zi).join(`
`),w.length>0&&(w+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,ge].filter(zi).join(`
`),_.length>0&&(_+=`
`)):(w=[gs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,ge,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+le:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+te:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),_=[gs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,ge,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+Y:"",t.envMap?"#define "+le:"",t.envMap?"#define "+ee:"",J?"#define CUBEUV_TEXEL_WIDTH "+J.texelWidth:"",J?"#define CUBEUV_TEXEL_HEIGHT "+J.texelHeight:"",J?"#define CUBEUV_MAX_MIP "+J.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+te:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==s.y_p?"#define TONE_MAPPING":"",t.toneMapping!==s.y_p?Pt.tonemapping_pars_fragment:"",t.toneMapping!==s.y_p?Ua("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,La("linearToOutputTexel",t.outputColorSpace),Ia(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),O=hn(O),O=ps(O,t),O=ms(O,t),C=hn(C),C=ps(C,t),C=ms(C,t),O=_s(O),C=_s(C),t.isRawShaderMaterial!==!0&&(ue=`#version 300 es
`,w=[$,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,_=["#define varying in",t.glslVersion===s.Wdf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===s.Wdf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const ne=ue+w+O,q=ue+_+C,ve=us(x,x.VERTEX_SHADER,ne),he=us(x,x.FRAGMENT_SHADER,q);x.attachShader(se,ve),x.attachShader(se,he),t.index0AttributeName!==void 0?x.bindAttribLocation(se,0,t.index0AttributeName):t.morphTargets===!0&&x.bindAttribLocation(se,0,"position"),x.linkProgram(se);function de(K){if(e.debug.checkShaderErrors){const we=x.getProgramInfoLog(se)||"",Ce=x.getShaderInfoLog(ve)||"",Se=x.getShaderInfoLog(he)||"",Be=we.trim(),ye=Ce.trim(),Ye=Se.trim();let _e=!0,ft=!0;if(x.getProgramParameter(se,x.LINK_STATUS)===!1)if(_e=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(x,se,ve,he);else{const vt=fs(x,ve,"vertex"),Ut=fs(x,he,"fragment");console.error("THREE.WebGLProgram: Shader Error "+x.getError()+" - VALIDATE_STATUS "+x.getProgramParameter(se,x.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+Be+`
`+vt+`
`+Ut)}else Be!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Be):(ye===""||Ye==="")&&(ft=!1);ft&&(K.diagnostics={runnable:_e,programLog:Be,vertexShader:{log:ye,prefix:w},fragmentShader:{log:Ye,prefix:_}})}x.deleteShader(ve),x.deleteShader(he),be=new qi(x,se),N=Fa(x,se)}let be;this.getUniforms=function(){return be===void 0&&de(this),be};let N;this.getAttributes=function(){return N===void 0&&de(this),N};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=x.getProgramParameter(se,Ca)),D},this.destroy=function(){d.releaseStatesOfProgram(this),x.deleteProgram(se),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wa++,this.cacheKey=n,this.usedTimes=1,this.program=se,this.vertexShader=ve,this.fragmentShader=he,this}let ja=0;class Za{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,d=n.fragmentShader,x=this._getShaderStage(t),S=this._getShaderStage(d),O=this._getShaderCacheForMaterial(n);return O.has(x)===!1&&(O.add(x),x.usedTimes++),O.has(S)===!1&&(O.add(S),S.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const d of t)d.usedTimes--,d.usedTimes===0&&this.shaderCache.delete(d.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let d=t.get(n);return d===void 0&&(d=new Set,t.set(n,d)),d}_getShaderStage(n){const t=this.shaderCache;let d=t.get(n);return d===void 0&&(d=new Qa(n),t.set(n,d)),d}}class Qa{constructor(n){this.id=ja++,this.code=n,this.usedTimes=0}}function Ja(e,n,t,d,x,S,O){const C=new is.z,te=new Za,Y=new Set,le=[],ee=x.logarithmicDepthBuffer,J=x.vertexTextures;let $=x.precision;const ge={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function se(N){return Y.add(N),N===0?"uv":`uv${N}`}function w(N,D,K,we,Ce){const Se=we.fog,Be=Ce.geometry,ye=N.isMeshStandardMaterial?we.environment:null,Ye=(N.isMeshStandardMaterial?t:n).get(N.envMap||ye),_e=Ye&&Ye.mapping===s.Om?Ye.image.height:null,ft=ge[N.type];N.precision!==null&&($=x.getMaxPrecision(N.precision),$!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",$,"instead."));const vt=Be.morphAttributes.position||Be.morphAttributes.normal||Be.morphAttributes.color,Ut=vt!==void 0?vt.length:0;let Vt=0;Be.morphAttributes.position!==void 0&&(Vt=1),Be.morphAttributes.normal!==void 0&&(Vt=2),Be.morphAttributes.color!==void 0&&(Vt=3);let hi,Jt,Me,Ze;if(ft){const kt=Mi[ft];hi=kt.vertexShader,Jt=kt.fragmentShader}else hi=N.vertexShader,Jt=N.fragmentShader,te.update(N),Me=te.getVertexShaderID(N),Ze=te.getFragmentShaderID(N);const He=e.getRenderTarget(),xt=e.state.buffers.depth.getReversed(),Et=Ce.isInstancedMesh===!0,Rt=Ce.isBatchedMesh===!0,si=!!N.map,Bt=!!N.matcap,V=!!Ye,Zt=!!N.aoMap,_t=!!N.lightMap,Ht=!!N.bumpMap,pt=!!N.normalMap,ei=!!N.displacementMap,st=!!N.emissiveMap,It=!!N.metalnessMap,ui=!!N.roughnessMap,ai=N.anisotropy>0,P=N.clearcoat>0,v=N.dispersion>0,ie=N.iridescence>0,me=N.sheen>0,Pe=N.transmission>0,fe=ai&&!!N.anisotropyMap,dt=P&&!!N.clearcoatMap,ze=P&&!!N.clearcoatNormalMap,lt=P&&!!N.clearcoatRoughnessMap,ht=ie&&!!N.iridescenceMap,Ne=ie&&!!N.iridescenceThicknessMap,$e=me&&!!N.sheenColorMap,Tt=me&&!!N.sheenRoughnessMap,ut=!!N.specularMap,Qe=!!N.specularColorMap,Dt=!!N.specularIntensityMap,W=Pe&&!!N.transmissionMap,Oe=Pe&&!!N.thicknessMap,Xe=!!N.gradientMap,rt=!!N.alphaMap,Le=N.alphaTest>0,Te=!!N.alphaHash,ot=!!N.extensions;let Ct=s.y_p;N.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(Ct=e.toneMapping);const Qt={shaderID:ft,shaderType:N.type,shaderName:N.name,vertexShader:hi,fragmentShader:Jt,defines:N.defines,customVertexShaderID:Me,customFragmentShaderID:Ze,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:$,batching:Rt,batchingColor:Rt&&Ce._colorsTexture!==null,instancing:Et,instancingColor:Et&&Ce.instanceColor!==null,instancingMorph:Et&&Ce.morphTexture!==null,supportsVertexTextures:J,outputColorSpace:He===null?e.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:s.Zr2,alphaToCoverage:!!N.alphaToCoverage,map:si,matcap:Bt,envMap:V,envMapMode:V&&Ye.mapping,envMapCubeUVHeight:_e,aoMap:Zt,lightMap:_t,bumpMap:Ht,normalMap:pt,displacementMap:J&&ei,emissiveMap:st,normalMapObjectSpace:pt&&N.normalMapType===s.vyJ,normalMapTangentSpace:pt&&N.normalMapType===s.bI3,metalnessMap:It,roughnessMap:ui,anisotropy:ai,anisotropyMap:fe,clearcoat:P,clearcoatMap:dt,clearcoatNormalMap:ze,clearcoatRoughnessMap:lt,dispersion:v,iridescence:ie,iridescenceMap:ht,iridescenceThicknessMap:Ne,sheen:me,sheenColorMap:$e,sheenRoughnessMap:Tt,specularMap:ut,specularColorMap:Qe,specularIntensityMap:Dt,transmission:Pe,transmissionMap:W,thicknessMap:Oe,gradientMap:Xe,opaque:N.transparent===!1&&N.blending===s.NTi&&N.alphaToCoverage===!1,alphaMap:rt,alphaTest:Le,alphaHash:Te,combine:N.combine,mapUv:si&&se(N.map.channel),aoMapUv:Zt&&se(N.aoMap.channel),lightMapUv:_t&&se(N.lightMap.channel),bumpMapUv:Ht&&se(N.bumpMap.channel),normalMapUv:pt&&se(N.normalMap.channel),displacementMapUv:ei&&se(N.displacementMap.channel),emissiveMapUv:st&&se(N.emissiveMap.channel),metalnessMapUv:It&&se(N.metalnessMap.channel),roughnessMapUv:ui&&se(N.roughnessMap.channel),anisotropyMapUv:fe&&se(N.anisotropyMap.channel),clearcoatMapUv:dt&&se(N.clearcoatMap.channel),clearcoatNormalMapUv:ze&&se(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&se(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&se(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&se(N.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&se(N.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&se(N.sheenRoughnessMap.channel),specularMapUv:ut&&se(N.specularMap.channel),specularColorMapUv:Qe&&se(N.specularColorMap.channel),specularIntensityMapUv:Dt&&se(N.specularIntensityMap.channel),transmissionMapUv:W&&se(N.transmissionMap.channel),thicknessMapUv:Oe&&se(N.thicknessMap.channel),alphaMapUv:rt&&se(N.alphaMap.channel),vertexTangents:!!Be.attributes.tangent&&(pt||ai),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!Be.attributes.color&&Be.attributes.color.itemSize===4,pointsUvs:Ce.isPoints===!0&&!!Be.attributes.uv&&(si||rt),fog:!!Se,useFog:N.fog===!0,fogExp2:!!Se&&Se.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:ee,reversedDepthBuffer:xt,skinning:Ce.isSkinnedMesh===!0,morphTargets:Be.morphAttributes.position!==void 0,morphNormals:Be.morphAttributes.normal!==void 0,morphColors:Be.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Vt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:O.numPlanes,numClipIntersection:O.numIntersection,dithering:N.dithering,shadowMapEnabled:e.shadowMap.enabled&&K.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ct,decodeVideoTexture:si&&N.map.isVideoTexture===!0&&i.pp.getTransfer(N.map.colorSpace)===s.KLL,decodeVideoTextureEmissive:st&&N.emissiveMap.isVideoTexture===!0&&i.pp.getTransfer(N.emissiveMap.colorSpace)===s.KLL,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===s.$EB,flipSided:N.side===s.hsX,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ot&&N.extensions.clipCullDistance===!0&&d.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&N.extensions.multiDraw===!0||Rt)&&d.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:d.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Qt.vertexUv1s=Y.has(1),Qt.vertexUv2s=Y.has(2),Qt.vertexUv3s=Y.has(3),Y.clear(),Qt}function _(N){const D=[];if(N.shaderID?D.push(N.shaderID):(D.push(N.customVertexShaderID),D.push(N.customFragmentShaderID)),N.defines!==void 0)for(const K in N.defines)D.push(K),D.push(N.defines[K]);return N.isRawShaderMaterial===!1&&(ue(D,N),ne(D,N),D.push(e.outputColorSpace)),D.push(N.customProgramCacheKey),D.join()}function ue(N,D){N.push(D.precision),N.push(D.outputColorSpace),N.push(D.envMapMode),N.push(D.envMapCubeUVHeight),N.push(D.mapUv),N.push(D.alphaMapUv),N.push(D.lightMapUv),N.push(D.aoMapUv),N.push(D.bumpMapUv),N.push(D.normalMapUv),N.push(D.displacementMapUv),N.push(D.emissiveMapUv),N.push(D.metalnessMapUv),N.push(D.roughnessMapUv),N.push(D.anisotropyMapUv),N.push(D.clearcoatMapUv),N.push(D.clearcoatNormalMapUv),N.push(D.clearcoatRoughnessMapUv),N.push(D.iridescenceMapUv),N.push(D.iridescenceThicknessMapUv),N.push(D.sheenColorMapUv),N.push(D.sheenRoughnessMapUv),N.push(D.specularMapUv),N.push(D.specularColorMapUv),N.push(D.specularIntensityMapUv),N.push(D.transmissionMapUv),N.push(D.thicknessMapUv),N.push(D.combine),N.push(D.fogExp2),N.push(D.sizeAttenuation),N.push(D.morphTargetsCount),N.push(D.morphAttributeCount),N.push(D.numDirLights),N.push(D.numPointLights),N.push(D.numSpotLights),N.push(D.numSpotLightMaps),N.push(D.numHemiLights),N.push(D.numRectAreaLights),N.push(D.numDirLightShadows),N.push(D.numPointLightShadows),N.push(D.numSpotLightShadows),N.push(D.numSpotLightShadowsWithMaps),N.push(D.numLightProbes),N.push(D.shadowMapType),N.push(D.toneMapping),N.push(D.numClippingPlanes),N.push(D.numClipIntersection),N.push(D.depthPacking)}function ne(N,D){C.disableAll(),D.supportsVertexTextures&&C.enable(0),D.instancing&&C.enable(1),D.instancingColor&&C.enable(2),D.instancingMorph&&C.enable(3),D.matcap&&C.enable(4),D.envMap&&C.enable(5),D.normalMapObjectSpace&&C.enable(6),D.normalMapTangentSpace&&C.enable(7),D.clearcoat&&C.enable(8),D.iridescence&&C.enable(9),D.alphaTest&&C.enable(10),D.vertexColors&&C.enable(11),D.vertexAlphas&&C.enable(12),D.vertexUv1s&&C.enable(13),D.vertexUv2s&&C.enable(14),D.vertexUv3s&&C.enable(15),D.vertexTangents&&C.enable(16),D.anisotropy&&C.enable(17),D.alphaHash&&C.enable(18),D.batching&&C.enable(19),D.dispersion&&C.enable(20),D.batchingColor&&C.enable(21),D.gradientMap&&C.enable(22),N.push(C.mask),C.disableAll(),D.fog&&C.enable(0),D.useFog&&C.enable(1),D.flatShading&&C.enable(2),D.logarithmicDepthBuffer&&C.enable(3),D.reversedDepthBuffer&&C.enable(4),D.skinning&&C.enable(5),D.morphTargets&&C.enable(6),D.morphNormals&&C.enable(7),D.morphColors&&C.enable(8),D.premultipliedAlpha&&C.enable(9),D.shadowMapEnabled&&C.enable(10),D.doubleSided&&C.enable(11),D.flipSided&&C.enable(12),D.useDepthPacking&&C.enable(13),D.dithering&&C.enable(14),D.transmission&&C.enable(15),D.sheen&&C.enable(16),D.opaque&&C.enable(17),D.pointsUvs&&C.enable(18),D.decodeVideoTexture&&C.enable(19),D.decodeVideoTextureEmissive&&C.enable(20),D.alphaToCoverage&&C.enable(21),N.push(C.mask)}function q(N){const D=ge[N.type];let K;if(D){const we=Mi[D];K=ni.Ll.clone(we.uniforms)}else K=N.uniforms;return K}function ve(N,D){let K;for(let we=0,Ce=le.length;we<Ce;we++){const Se=le[we];if(Se.cacheKey===D){K=Se,++K.usedTimes;break}}return K===void 0&&(K=new qa(e,D,N,S),le.push(K)),K}function he(N){if(--N.usedTimes===0){const D=le.indexOf(N);le[D]=le[le.length-1],le.pop(),N.destroy()}}function de(N){te.remove(N)}function be(){te.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:q,acquireProgram:ve,releaseProgram:he,releaseShaderCache:de,programs:le,dispose:be}}function $a(){let e=new WeakMap;function n(O){return e.has(O)}function t(O){let C=e.get(O);return C===void 0&&(C={},e.set(O,C)),C}function d(O){e.delete(O)}function x(O,C,te){e.get(O)[C]=te}function S(){e=new WeakMap}return{has:n,get:t,remove:d,update:x,dispose:S}}function eo(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function vs(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Ms(){const e=[];let n=0;const t=[],d=[],x=[];function S(){n=0,t.length=0,d.length=0,x.length=0}function O(ee,J,$,ge,se,w){let _=e[n];return _===void 0?(_={id:ee.id,object:ee,geometry:J,material:$,groupOrder:ge,renderOrder:ee.renderOrder,z:se,group:w},e[n]=_):(_.id=ee.id,_.object=ee,_.geometry=J,_.material=$,_.groupOrder=ge,_.renderOrder=ee.renderOrder,_.z=se,_.group=w),n++,_}function C(ee,J,$,ge,se,w){const _=O(ee,J,$,ge,se,w);$.transmission>0?d.push(_):$.transparent===!0?x.push(_):t.push(_)}function te(ee,J,$,ge,se,w){const _=O(ee,J,$,ge,se,w);$.transmission>0?d.unshift(_):$.transparent===!0?x.unshift(_):t.unshift(_)}function Y(ee,J){t.length>1&&t.sort(ee||eo),d.length>1&&d.sort(J||vs),x.length>1&&x.sort(J||vs)}function le(){for(let ee=n,J=e.length;ee<J;ee++){const $=e[ee];if($.id===null)break;$.id=null,$.object=null,$.geometry=null,$.material=null,$.group=null}}return{opaque:t,transmissive:d,transparent:x,init:S,push:C,unshift:te,finish:le,sort:Y}}function to(){let e=new WeakMap;function n(d,x){const S=e.get(d);let O;return S===void 0?(O=new Ms,e.set(d,[O])):x>=S.length?(O=new Ms,S.push(O)):O=S[x],O}function t(){e=new WeakMap}return{get:n,dispose:t}}function io(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new c.Vector3,color:new j.Q};break;case"SpotLight":t={position:new c.Vector3,direction:new c.Vector3,color:new j.Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new c.Vector3,color:new j.Q,distance:0,decay:0};break;case"HemisphereLight":t={direction:new c.Vector3,skyColor:new j.Q,groundColor:new j.Q};break;case"RectAreaLight":t={color:new j.Q,position:new c.Vector3,halfWidth:new c.Vector3,halfHeight:new c.Vector3};break}return e[n.id]=t,t}}}function no(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new di.I};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new di.I};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new di.I,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let ro=0;function so(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function ao(e){const n=new io,t=no(),d={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Y=0;Y<9;Y++)d.probe.push(new c.Vector3);const x=new c.Vector3,S=new r.k,O=new r.k;function C(Y){let le=0,ee=0,J=0;for(let N=0;N<9;N++)d.probe[N].set(0,0,0);let $=0,ge=0,se=0,w=0,_=0,ue=0,ne=0,q=0,ve=0,he=0,de=0;Y.sort(so);for(let N=0,D=Y.length;N<D;N++){const K=Y[N],we=K.color,Ce=K.intensity,Se=K.distance,Be=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)le+=we.r*Ce,ee+=we.g*Ce,J+=we.b*Ce;else if(K.isLightProbe){for(let ye=0;ye<9;ye++)d.probe[ye].addScaledVector(K.sh.coefficients[ye],Ce);de++}else if(K.isDirectionalLight){const ye=n.get(K);if(ye.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const Ye=K.shadow,_e=t.get(K);_e.shadowIntensity=Ye.intensity,_e.shadowBias=Ye.bias,_e.shadowNormalBias=Ye.normalBias,_e.shadowRadius=Ye.radius,_e.shadowMapSize=Ye.mapSize,d.directionalShadow[$]=_e,d.directionalShadowMap[$]=Be,d.directionalShadowMatrix[$]=K.shadow.matrix,ue++}d.directional[$]=ye,$++}else if(K.isSpotLight){const ye=n.get(K);ye.position.setFromMatrixPosition(K.matrixWorld),ye.color.copy(we).multiplyScalar(Ce),ye.distance=Se,ye.coneCos=Math.cos(K.angle),ye.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),ye.decay=K.decay,d.spot[se]=ye;const Ye=K.shadow;if(K.map&&(d.spotLightMap[ve]=K.map,ve++,Ye.updateMatrices(K),K.castShadow&&he++),d.spotLightMatrix[se]=Ye.matrix,K.castShadow){const _e=t.get(K);_e.shadowIntensity=Ye.intensity,_e.shadowBias=Ye.bias,_e.shadowNormalBias=Ye.normalBias,_e.shadowRadius=Ye.radius,_e.shadowMapSize=Ye.mapSize,d.spotShadow[se]=_e,d.spotShadowMap[se]=Be,q++}se++}else if(K.isRectAreaLight){const ye=n.get(K);ye.color.copy(we).multiplyScalar(Ce),ye.halfWidth.set(K.width*.5,0,0),ye.halfHeight.set(0,K.height*.5,0),d.rectArea[w]=ye,w++}else if(K.isPointLight){const ye=n.get(K);if(ye.color.copy(K.color).multiplyScalar(K.intensity),ye.distance=K.distance,ye.decay=K.decay,K.castShadow){const Ye=K.shadow,_e=t.get(K);_e.shadowIntensity=Ye.intensity,_e.shadowBias=Ye.bias,_e.shadowNormalBias=Ye.normalBias,_e.shadowRadius=Ye.radius,_e.shadowMapSize=Ye.mapSize,_e.shadowCameraNear=Ye.camera.near,_e.shadowCameraFar=Ye.camera.far,d.pointShadow[ge]=_e,d.pointShadowMap[ge]=Be,d.pointShadowMatrix[ge]=K.shadow.matrix,ne++}d.point[ge]=ye,ge++}else if(K.isHemisphereLight){const ye=n.get(K);ye.skyColor.copy(K.color).multiplyScalar(Ce),ye.groundColor.copy(K.groundColor).multiplyScalar(Ce),d.hemi[_]=ye,_++}}w>0&&(e.has("OES_texture_float_linear")===!0?(d.rectAreaLTC1=Ke.LTC_FLOAT_1,d.rectAreaLTC2=Ke.LTC_FLOAT_2):(d.rectAreaLTC1=Ke.LTC_HALF_1,d.rectAreaLTC2=Ke.LTC_HALF_2)),d.ambient[0]=le,d.ambient[1]=ee,d.ambient[2]=J;const be=d.hash;(be.directionalLength!==$||be.pointLength!==ge||be.spotLength!==se||be.rectAreaLength!==w||be.hemiLength!==_||be.numDirectionalShadows!==ue||be.numPointShadows!==ne||be.numSpotShadows!==q||be.numSpotMaps!==ve||be.numLightProbes!==de)&&(d.directional.length=$,d.spot.length=se,d.rectArea.length=w,d.point.length=ge,d.hemi.length=_,d.directionalShadow.length=ue,d.directionalShadowMap.length=ue,d.pointShadow.length=ne,d.pointShadowMap.length=ne,d.spotShadow.length=q,d.spotShadowMap.length=q,d.directionalShadowMatrix.length=ue,d.pointShadowMatrix.length=ne,d.spotLightMatrix.length=q+ve-he,d.spotLightMap.length=ve,d.numSpotLightShadowsWithMaps=he,d.numLightProbes=de,be.directionalLength=$,be.pointLength=ge,be.spotLength=se,be.rectAreaLength=w,be.hemiLength=_,be.numDirectionalShadows=ue,be.numPointShadows=ne,be.numSpotShadows=q,be.numSpotMaps=ve,be.numLightProbes=de,d.version=ro++)}function te(Y,le){let ee=0,J=0,$=0,ge=0,se=0;const w=le.matrixWorldInverse;for(let _=0,ue=Y.length;_<ue;_++){const ne=Y[_];if(ne.isDirectionalLight){const q=d.directional[ee];q.direction.setFromMatrixPosition(ne.matrixWorld),x.setFromMatrixPosition(ne.target.matrixWorld),q.direction.sub(x),q.direction.transformDirection(w),ee++}else if(ne.isSpotLight){const q=d.spot[$];q.position.setFromMatrixPosition(ne.matrixWorld),q.position.applyMatrix4(w),q.direction.setFromMatrixPosition(ne.matrixWorld),x.setFromMatrixPosition(ne.target.matrixWorld),q.direction.sub(x),q.direction.transformDirection(w),$++}else if(ne.isRectAreaLight){const q=d.rectArea[ge];q.position.setFromMatrixPosition(ne.matrixWorld),q.position.applyMatrix4(w),O.identity(),S.copy(ne.matrixWorld),S.premultiply(w),O.extractRotation(S),q.halfWidth.set(ne.width*.5,0,0),q.halfHeight.set(0,ne.height*.5,0),q.halfWidth.applyMatrix4(O),q.halfHeight.applyMatrix4(O),ge++}else if(ne.isPointLight){const q=d.point[J];q.position.setFromMatrixPosition(ne.matrixWorld),q.position.applyMatrix4(w),J++}else if(ne.isHemisphereLight){const q=d.hemi[se];q.direction.setFromMatrixPosition(ne.matrixWorld),q.direction.transformDirection(w),se++}}}return{setup:C,setupView:te,state:d}}function xs(e){const n=new ao(e),t=[],d=[];function x(le){Y.camera=le,t.length=0,d.length=0}function S(le){t.push(le)}function O(le){d.push(le)}function C(){n.setup(t)}function te(le){n.setupView(t,le)}const Y={lightsArray:t,shadowsArray:d,camera:null,lights:n,transmissionRenderTarget:{}};return{init:x,state:Y,setupLights:C,setupLightsView:te,pushLight:S,pushShadow:O}}function oo(e){let n=new WeakMap;function t(x,S=0){const O=n.get(x);let C;return O===void 0?(C=new xs(e),n.set(x,[C])):S>=O.length?(C=new xs(e),O.push(C)):C=O[S],C}function d(){n=new WeakMap}return{get:t,dispose:d}}var lo=F(295641),co=F(271807),ho=F(5257);const uo=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,fo=`
uniform sampler2D shadow_pass;
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

}
`;function po(e,n,t){let d=new H.P;const x=new di.I,S=new di.I,O=new b.I,C=new lo.C({depthPacking:s.N5j}),te=new co.a,Y={},le=t.maxTextureSize,ee={[s.hB5]:s.hsX,[s.hsX]:s.hB5,[s.$EB]:s.$EB},J=new l.B({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new di.I},radius:{value:4}},vertexShader:uo,fragmentShader:fo}),$=J.clone();$.defines.HORIZONTAL_PASS=1;const ge=new ho.L;ge.setAttribute("position",new Vi.TH(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const se=new u.e(ge,J),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s.QP0;let _=this.type;this.render=function(he,de,be){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||he.length===0)return;const N=e.getRenderTarget(),D=e.getActiveCubeFace(),K=e.getActiveMipmapLevel(),we=e.state;we.setBlending(s.XIg),we.buffers.depth.getReversed()?we.buffers.color.setClear(0,0,0,0):we.buffers.color.setClear(1,1,1,1),we.buffers.depth.setTest(!0),we.setScissorTest(!1);const Ce=_!==s.RyA&&this.type===s.RyA,Se=_===s.RyA&&this.type!==s.RyA;for(let Be=0,ye=he.length;Be<ye;Be++){const Ye=he[Be],_e=Ye.shadow;if(_e===void 0){console.warn("THREE.WebGLShadowMap:",Ye,"has no shadow.");continue}if(_e.autoUpdate===!1&&_e.needsUpdate===!1)continue;x.copy(_e.mapSize);const ft=_e.getFrameExtents();if(x.multiply(ft),S.copy(_e.mapSize),(x.x>le||x.y>le)&&(x.x>le&&(S.x=Math.floor(le/ft.x),x.x=S.x*ft.x,_e.mapSize.x=S.x),x.y>le&&(S.y=Math.floor(le/ft.y),x.y=S.y*ft.y,_e.mapSize.y=S.y)),_e.map===null||Ce===!0||Se===!0){const Ut=this.type!==s.RyA?{minFilter:s.hxR,magFilter:s.hxR}:{};_e.map!==null&&_e.map.dispose(),_e.map=new Ri.n(x.x,x.y,Ut),_e.map.texture.name=Ye.name+".shadowMap",_e.camera.updateProjectionMatrix()}e.setRenderTarget(_e.map),e.clear();const vt=_e.getViewportCount();for(let Ut=0;Ut<vt;Ut++){const Vt=_e.getViewport(Ut);O.set(S.x*Vt.x,S.y*Vt.y,S.x*Vt.z,S.y*Vt.w),we.viewport(O),_e.updateMatrices(Ye,Ut),d=_e.getFrustum(),q(de,be,_e.camera,Ye,this.type)}_e.isPointLightShadow!==!0&&this.type===s.RyA&&ue(_e,be),_e.needsUpdate=!1}_=this.type,w.needsUpdate=!1,e.setRenderTarget(N,D,K)};function ue(he,de){const be=n.update(se);J.defines.VSM_SAMPLES!==he.blurSamples&&(J.defines.VSM_SAMPLES=he.blurSamples,$.defines.VSM_SAMPLES=he.blurSamples,J.needsUpdate=!0,$.needsUpdate=!0),he.mapPass===null&&(he.mapPass=new Ri.n(x.x,x.y)),J.uniforms.shadow_pass.value=he.map.texture,J.uniforms.resolution.value=he.mapSize,J.uniforms.radius.value=he.radius,e.setRenderTarget(he.mapPass),e.clear(),e.renderBufferDirect(de,null,be,J,se,null),$.uniforms.shadow_pass.value=he.mapPass.texture,$.uniforms.resolution.value=he.mapSize,$.uniforms.radius.value=he.radius,e.setRenderTarget(he.map),e.clear(),e.renderBufferDirect(de,null,be,$,se,null)}function ne(he,de,be,N){let D=null;const K=be.isPointLight===!0?he.customDistanceMaterial:he.customDepthMaterial;if(K!==void 0)D=K;else if(D=be.isPointLight===!0?te:C,e.localClippingEnabled&&de.clipShadows===!0&&Array.isArray(de.clippingPlanes)&&de.clippingPlanes.length!==0||de.displacementMap&&de.displacementScale!==0||de.alphaMap&&de.alphaTest>0||de.map&&de.alphaTest>0||de.alphaToCoverage===!0){const we=D.uuid,Ce=de.uuid;let Se=Y[we];Se===void 0&&(Se={},Y[we]=Se);let Be=Se[Ce];Be===void 0&&(Be=D.clone(),Se[Ce]=Be,de.addEventListener("dispose",ve)),D=Be}if(D.visible=de.visible,D.wireframe=de.wireframe,N===s.RyA?D.side=de.shadowSide!==null?de.shadowSide:de.side:D.side=de.shadowSide!==null?de.shadowSide:ee[de.side],D.alphaMap=de.alphaMap,D.alphaTest=de.alphaToCoverage===!0?.5:de.alphaTest,D.map=de.map,D.clipShadows=de.clipShadows,D.clippingPlanes=de.clippingPlanes,D.clipIntersection=de.clipIntersection,D.displacementMap=de.displacementMap,D.displacementScale=de.displacementScale,D.displacementBias=de.displacementBias,D.wireframeLinewidth=de.wireframeLinewidth,D.linewidth=de.linewidth,be.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const we=e.properties.get(D);we.light=be}return D}function q(he,de,be,N,D){if(he.visible===!1)return;if(he.layers.test(de.layers)&&(he.isMesh||he.isLine||he.isPoints)&&(he.castShadow||he.receiveShadow&&D===s.RyA)&&(!he.frustumCulled||d.intersectsObject(he))){he.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse,he.matrixWorld);const Ce=n.update(he),Se=he.material;if(Array.isArray(Se)){const Be=Ce.groups;for(let ye=0,Ye=Be.length;ye<Ye;ye++){const _e=Be[ye],ft=Se[_e.materialIndex];if(ft&&ft.visible){const vt=ne(he,ft,N,D);he.onBeforeShadow(e,he,de,be,Ce,vt,_e),e.renderBufferDirect(be,null,Ce,vt,he,_e),he.onAfterShadow(e,he,de,be,Ce,vt,_e)}}}else if(Se.visible){const Be=ne(he,Se,N,D);he.onBeforeShadow(e,he,de,be,Ce,Be,null),e.renderBufferDirect(be,null,Ce,Be,he,null),he.onAfterShadow(e,he,de,be,Ce,Be,null)}}const we=he.children;for(let Ce=0,Se=we.length;Ce<Se;Ce++)q(we[Ce],de,be,N,D)}function ve(he){he.target.removeEventListener("dispose",ve);for(const be in Y){const N=Y[be],D=he.target.uuid;D in N&&(N[D].dispose(),delete N[D])}}}const mo={[s.eHc]:s.lGu,[s.brA]:s.K52,[s.U3G]:s.bw0,[s.xSv]:s.Gwm,[s.lGu]:s.eHc,[s.K52]:s.brA,[s.bw0]:s.U3G,[s.Gwm]:s.xSv};function _o(e,n){function t(){let W=!1;const Oe=new b.I;let Xe=null;const rt=new b.I(0,0,0,0);return{setMask:function(Le){Xe!==Le&&!W&&(e.colorMask(Le,Le,Le,Le),Xe=Le)},setLocked:function(Le){W=Le},setClear:function(Le,Te,ot,Ct,Qt){Qt===!0&&(Le*=Ct,Te*=Ct,ot*=Ct),Oe.set(Le,Te,ot,Ct),rt.equals(Oe)===!1&&(e.clearColor(Le,Te,ot,Ct),rt.copy(Oe))},reset:function(){W=!1,Xe=null,rt.set(-1,0,0,0)}}}function d(){let W=!1,Oe=!1,Xe=null,rt=null,Le=null;return{setReversed:function(Te){if(Oe!==Te){const ot=n.get("EXT_clip_control");Te?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),Oe=Te;const Ct=Le;Le=null,this.setClear(Ct)}},getReversed:function(){return Oe},setTest:function(Te){Te?He(e.DEPTH_TEST):xt(e.DEPTH_TEST)},setMask:function(Te){Xe!==Te&&!W&&(e.depthMask(Te),Xe=Te)},setFunc:function(Te){if(Oe&&(Te=mo[Te]),rt!==Te){switch(Te){case s.eHc:e.depthFunc(e.NEVER);break;case s.lGu:e.depthFunc(e.ALWAYS);break;case s.brA:e.depthFunc(e.LESS);break;case s.xSv:e.depthFunc(e.LEQUAL);break;case s.U3G:e.depthFunc(e.EQUAL);break;case s.Gwm:e.depthFunc(e.GEQUAL);break;case s.K52:e.depthFunc(e.GREATER);break;case s.bw0:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}rt=Te}},setLocked:function(Te){W=Te},setClear:function(Te){Le!==Te&&(Oe&&(Te=1-Te),e.clearDepth(Te),Le=Te)},reset:function(){W=!1,Xe=null,rt=null,Le=null,Oe=!1}}}function x(){let W=!1,Oe=null,Xe=null,rt=null,Le=null,Te=null,ot=null,Ct=null,Qt=null;return{setTest:function(kt){W||(kt?He(e.STENCIL_TEST):xt(e.STENCIL_TEST))},setMask:function(kt){Oe!==kt&&!W&&(e.stencilMask(kt),Oe=kt)},setFunc:function(kt,Ti,Si){(Xe!==kt||rt!==Ti||Le!==Si)&&(e.stencilFunc(kt,Ti,Si),Xe=kt,rt=Ti,Le=Si)},setOp:function(kt,Ti,Si){(Te!==kt||ot!==Ti||Ct!==Si)&&(e.stencilOp(kt,Ti,Si),Te=kt,ot=Ti,Ct=Si)},setLocked:function(kt){W=kt},setClear:function(kt){Qt!==kt&&(e.clearStencil(kt),Qt=kt)},reset:function(){W=!1,Oe=null,Xe=null,rt=null,Le=null,Te=null,ot=null,Ct=null,Qt=null}}}const S=new t,O=new d,C=new x,te=new WeakMap,Y=new WeakMap;let le={},ee={},J=new WeakMap,$=[],ge=null,se=!1,w=null,_=null,ue=null,ne=null,q=null,ve=null,he=null,de=new j.Q(0,0,0),be=0,N=!1,D=null,K=null,we=null,Ce=null,Se=null;const Be=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ye=!1,Ye=0;const _e=e.getParameter(e.VERSION);_e.indexOf("WebGL")!==-1?(Ye=parseFloat(/^WebGL (\d)/.exec(_e)[1]),ye=Ye>=1):_e.indexOf("OpenGL ES")!==-1&&(Ye=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),ye=Ye>=2);let ft=null,vt={};const Ut=e.getParameter(e.SCISSOR_BOX),Vt=e.getParameter(e.VIEWPORT),hi=new b.I().fromArray(Ut),Jt=new b.I().fromArray(Vt);function Me(W,Oe,Xe,rt){const Le=new Uint8Array(4),Te=e.createTexture();e.bindTexture(W,Te),e.texParameteri(W,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(W,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ot=0;ot<Xe;ot++)W===e.TEXTURE_3D||W===e.TEXTURE_2D_ARRAY?e.texImage3D(Oe,0,e.RGBA,1,1,rt,0,e.RGBA,e.UNSIGNED_BYTE,Le):e.texImage2D(Oe+ot,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Le);return Te}const Ze={};Ze[e.TEXTURE_2D]=Me(e.TEXTURE_2D,e.TEXTURE_2D,1),Ze[e.TEXTURE_CUBE_MAP]=Me(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ze[e.TEXTURE_2D_ARRAY]=Me(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ze[e.TEXTURE_3D]=Me(e.TEXTURE_3D,e.TEXTURE_3D,1,1),S.setClear(0,0,0,1),O.setClear(1),C.setClear(0),He(e.DEPTH_TEST),O.setFunc(s.xSv),Ht(!1),pt(s.Vb5),He(e.CULL_FACE),Zt(s.XIg);function He(W){le[W]!==!0&&(e.enable(W),le[W]=!0)}function xt(W){le[W]!==!1&&(e.disable(W),le[W]=!1)}function Et(W,Oe){return ee[W]!==Oe?(e.bindFramebuffer(W,Oe),ee[W]=Oe,W===e.DRAW_FRAMEBUFFER&&(ee[e.FRAMEBUFFER]=Oe),W===e.FRAMEBUFFER&&(ee[e.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Rt(W,Oe){let Xe=$,rt=!1;if(W){Xe=J.get(Oe),Xe===void 0&&(Xe=[],J.set(Oe,Xe));const Le=W.textures;if(Xe.length!==Le.length||Xe[0]!==e.COLOR_ATTACHMENT0){for(let Te=0,ot=Le.length;Te<ot;Te++)Xe[Te]=e.COLOR_ATTACHMENT0+Te;Xe.length=Le.length,rt=!0}}else Xe[0]!==e.BACK&&(Xe[0]=e.BACK,rt=!0);rt&&e.drawBuffers(Xe)}function si(W){return ge!==W?(e.useProgram(W),ge=W,!0):!1}const Bt={[s.gO9]:e.FUNC_ADD,[s.FXf]:e.FUNC_SUBTRACT,[s.nST]:e.FUNC_REVERSE_SUBTRACT};Bt[s.znC]=e.MIN,Bt[s.$ei]=e.MAX;const V={[s.ojh]:e.ZERO,[s.qad]:e.ONE,[s.f4X]:e.SRC_COLOR,[s.ie2]:e.SRC_ALPHA,[s.hgQ]:e.SRC_ALPHA_SATURATE,[s.wn6]:e.DST_COLOR,[s.hdd]:e.DST_ALPHA,[s.LiQ]:e.ONE_MINUS_SRC_COLOR,[s.OuU]:e.ONE_MINUS_SRC_ALPHA,[s.aEY]:e.ONE_MINUS_DST_COLOR,[s.Nt7]:e.ONE_MINUS_DST_ALPHA,[s.RrE]:e.CONSTANT_COLOR,[s.$Yl]:e.ONE_MINUS_CONSTANT_COLOR,[s.e0p]:e.CONSTANT_ALPHA,[s.ov9]:e.ONE_MINUS_CONSTANT_ALPHA};function Zt(W,Oe,Xe,rt,Le,Te,ot,Ct,Qt,kt){if(W===s.XIg){se===!0&&(xt(e.BLEND),se=!1);return}if(se===!1&&(He(e.BLEND),se=!0),W!==s.bCz){if(W!==w||kt!==N){if((_!==s.gO9||q!==s.gO9)&&(e.blendEquation(e.FUNC_ADD),_=s.gO9,q=s.gO9),kt)switch(W){case s.NTi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case s.EZo:e.blendFunc(e.ONE,e.ONE);break;case s.Kwu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case s.EdD:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case s.NTi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case s.EZo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case s.Kwu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s.EdD:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}ue=null,ne=null,ve=null,he=null,de.set(0,0,0),be=0,w=W,N=kt}return}Le=Le||Oe,Te=Te||Xe,ot=ot||rt,(Oe!==_||Le!==q)&&(e.blendEquationSeparate(Bt[Oe],Bt[Le]),_=Oe,q=Le),(Xe!==ue||rt!==ne||Te!==ve||ot!==he)&&(e.blendFuncSeparate(V[Xe],V[rt],V[Te],V[ot]),ue=Xe,ne=rt,ve=Te,he=ot),(Ct.equals(de)===!1||Qt!==be)&&(e.blendColor(Ct.r,Ct.g,Ct.b,Qt),de.copy(Ct),be=Qt),w=W,N=!1}function _t(W,Oe){W.side===s.$EB?xt(e.CULL_FACE):He(e.CULL_FACE);let Xe=W.side===s.hsX;Oe&&(Xe=!Xe),Ht(Xe),W.blending===s.NTi&&W.transparent===!1?Zt(s.XIg):Zt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),O.setFunc(W.depthFunc),O.setTest(W.depthTest),O.setMask(W.depthWrite),S.setMask(W.colorWrite);const rt=W.stencilWrite;C.setTest(rt),rt&&(C.setMask(W.stencilWriteMask),C.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),C.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),st(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?He(e.SAMPLE_ALPHA_TO_COVERAGE):xt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(W){D!==W&&(W?e.frontFace(e.CW):e.frontFace(e.CCW),D=W)}function pt(W){W!==s.WNZ?(He(e.CULL_FACE),W!==K&&(W===s.Vb5?e.cullFace(e.BACK):W===s.Jnc?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):xt(e.CULL_FACE),K=W}function ei(W){W!==we&&(ye&&e.lineWidth(W),we=W)}function st(W,Oe,Xe){W?(He(e.POLYGON_OFFSET_FILL),(Ce!==Oe||Se!==Xe)&&(e.polygonOffset(Oe,Xe),Ce=Oe,Se=Xe)):xt(e.POLYGON_OFFSET_FILL)}function It(W){W?He(e.SCISSOR_TEST):xt(e.SCISSOR_TEST)}function ui(W){W===void 0&&(W=e.TEXTURE0+Be-1),ft!==W&&(e.activeTexture(W),ft=W)}function ai(W,Oe,Xe){Xe===void 0&&(ft===null?Xe=e.TEXTURE0+Be-1:Xe=ft);let rt=vt[Xe];rt===void 0&&(rt={type:void 0,texture:void 0},vt[Xe]=rt),(rt.type!==W||rt.texture!==Oe)&&(ft!==Xe&&(e.activeTexture(Xe),ft=Xe),e.bindTexture(W,Oe||Ze[W]),rt.type=W,rt.texture=Oe)}function P(){const W=vt[ft];W!==void 0&&W.type!==void 0&&(e.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function v(){try{e.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{e.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{e.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(){try{e.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{e.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{e.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{e.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(){try{e.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{e.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{e.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(W){hi.equals(W)===!1&&(e.scissor(W.x,W.y,W.z,W.w),hi.copy(W))}function Tt(W){Jt.equals(W)===!1&&(e.viewport(W.x,W.y,W.z,W.w),Jt.copy(W))}function ut(W,Oe){let Xe=Y.get(Oe);Xe===void 0&&(Xe=new WeakMap,Y.set(Oe,Xe));let rt=Xe.get(W);rt===void 0&&(rt=e.getUniformBlockIndex(Oe,W.name),Xe.set(W,rt))}function Qe(W,Oe){const rt=Y.get(Oe).get(W);te.get(Oe)!==rt&&(e.uniformBlockBinding(Oe,rt,W.__bindingPointIndex),te.set(Oe,rt))}function Dt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),O.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),le={},ft=null,vt={},ee={},J=new WeakMap,$=[],ge=null,se=!1,w=null,_=null,ue=null,ne=null,q=null,ve=null,he=null,de=new j.Q(0,0,0),be=0,N=!1,D=null,K=null,we=null,Ce=null,Se=null,hi.set(0,0,e.canvas.width,e.canvas.height),Jt.set(0,0,e.canvas.width,e.canvas.height),S.reset(),O.reset(),C.reset()}return{buffers:{color:S,depth:O,stencil:C},enable:He,disable:xt,bindFramebuffer:Et,drawBuffers:Rt,useProgram:si,setBlending:Zt,setMaterial:_t,setFlipSided:Ht,setCullFace:pt,setLineWidth:ei,setPolygonOffset:st,setScissorTest:It,activeTexture:ui,bindTexture:ai,unbindTexture:P,compressedTexImage2D:v,compressedTexImage3D:ie,texImage2D:ht,texImage3D:Ne,updateUBOMapping:ut,uniformBlockBinding:Qe,texStorage2D:ze,texStorage3D:lt,texSubImage2D:me,texSubImage3D:Pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:dt,scissor:$e,viewport:Tt,reset:Dt}}function go(e,n){const t=e.image&&e.image.width?e.image.width/e.image.height:1;return t>n?(e.repeat.x=1,e.repeat.y=t/n,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2):(e.repeat.x=n/t,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0),e}function vo(e,n){const t=e.image&&e.image.width?e.image.width/e.image.height:1;return t>n?(e.repeat.x=n/t,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0):(e.repeat.x=1,e.repeat.y=t/n,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2),e}function Mo(e){return e.repeat.x=1,e.repeat.y=1,e.offset.x=0,e.offset.y=0,e}function un(e,n,t,d){const x=xo(d);switch(t){case s.wrO:return e*n;case s.VT0:return e*n/x.components*x.byteLength;case s.ZQM:return e*n/x.components*x.byteLength;case s.paN:return e*n*2/x.components*x.byteLength;case s.TkQ:return e*n*2/x.components*x.byteLength;case s.HIg:return e*n*3/x.components*x.byteLength;case s.GWd:return e*n*4/x.components*x.byteLength;case s.c90:return e*n*4/x.components*x.byteLength;case s.IE4:case s.Nz6:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*8;case s.jR7:case s.BXX:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*16;case s.kTp:case s.pBf:return Math.max(e,16)*Math.max(n,8)/4;case s.k6Q:case s.HXV:return Math.max(e,8)*Math.max(n,8)/2;case s.CVz:case s.Riy:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*8;case s.KDk:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*16;case s.qa3:return Math.floor((e+3)/4)*Math.floor((n+3)/4)*16;case s.B_h:return Math.floor((e+4)/5)*Math.floor((n+3)/4)*16;case s.czI:return Math.floor((e+4)/5)*Math.floor((n+4)/5)*16;case s.rSH:return Math.floor((e+5)/6)*Math.floor((n+4)/5)*16;case s.Qrf:return Math.floor((e+5)/6)*Math.floor((n+5)/6)*16;case s.psI:return Math.floor((e+7)/8)*Math.floor((n+4)/5)*16;case s.a5J:return Math.floor((e+7)/8)*Math.floor((n+5)/6)*16;case s._QJ:return Math.floor((e+7)/8)*Math.floor((n+7)/8)*16;case s.uB5:return Math.floor((e+9)/10)*Math.floor((n+4)/5)*16;case s.lyL:return Math.floor((e+9)/10)*Math.floor((n+5)/6)*16;case s.bC7:return Math.floor((e+9)/10)*Math.floor((n+7)/8)*16;case s.y3Z:return Math.floor((e+9)/10)*Math.floor((n+9)/10)*16;case s.ojs:return Math.floor((e+11)/12)*Math.floor((n+9)/10)*16;case s.S$4:return Math.floor((e+11)/12)*Math.floor((n+11)/12)*16;case s.Fn:case s.H23:case s.W9U:return Math.ceil(e/4)*Math.ceil(n/4)*16;case s.Kef:case s.XG_:return Math.ceil(e/4)*Math.ceil(n/4)*8;case s.HO_:case s.CWW:return Math.ceil(e/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xo(e){switch(e){case s.OUM:case s.tJf:return{byteLength:1,components:1};case s.cHt:case s.fBL:case s.ix0:return{byteLength:2,components:1};case s.Wew:case s.gJ2:return{byteLength:2,components:4};case s.bkx:case s.Yuy:case s.RQf:return{byteLength:4,components:1};case s.Dmk:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}class Go{static contain(n,t){return go(n,t)}static cover(n,t){return vo(n,t)}static fill(n){return Mo(n)}static getByteLength(n,t,d,x){return un(n,t,d,x)}}function Eo(e,n,t,d,x,S,O){const C=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,te=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Y=new di.I,le=new WeakMap;let ee;const J=new WeakMap;let $=!1;try{$=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function ge(P,v){return $?new OffscreenCanvas(P,v):(0,Ei.qq)("canvas")}function se(P,v,ie){let me=1;const Pe=ai(P);if((Pe.width>ie||Pe.height>ie)&&(me=ie/Math.max(Pe.width,Pe.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*Pe.width),dt=Math.floor(me*Pe.height);ee===void 0&&(ee=ge(fe,dt));const ze=v?ge(fe,dt):ee;return ze.width=fe,ze.height=dt,ze.getContext("2d").drawImage(P,0,0,fe,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Pe.width+"x"+Pe.height+") to ("+fe+"x"+dt+")."),ze}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Pe.width+"x"+Pe.height+")."),P;return P}function w(P){return P.generateMipmaps}function _(P){e.generateMipmap(P)}function ue(P){return P.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?e.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ne(P,v,ie,me,Pe=!1){if(P!==null){if(e[P]!==void 0)return e[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=v;if(v===e.RED&&(ie===e.FLOAT&&(fe=e.R32F),ie===e.HALF_FLOAT&&(fe=e.R16F),ie===e.UNSIGNED_BYTE&&(fe=e.R8)),v===e.RED_INTEGER&&(ie===e.UNSIGNED_BYTE&&(fe=e.R8UI),ie===e.UNSIGNED_SHORT&&(fe=e.R16UI),ie===e.UNSIGNED_INT&&(fe=e.R32UI),ie===e.BYTE&&(fe=e.R8I),ie===e.SHORT&&(fe=e.R16I),ie===e.INT&&(fe=e.R32I)),v===e.RG&&(ie===e.FLOAT&&(fe=e.RG32F),ie===e.HALF_FLOAT&&(fe=e.RG16F),ie===e.UNSIGNED_BYTE&&(fe=e.RG8)),v===e.RG_INTEGER&&(ie===e.UNSIGNED_BYTE&&(fe=e.RG8UI),ie===e.UNSIGNED_SHORT&&(fe=e.RG16UI),ie===e.UNSIGNED_INT&&(fe=e.RG32UI),ie===e.BYTE&&(fe=e.RG8I),ie===e.SHORT&&(fe=e.RG16I),ie===e.INT&&(fe=e.RG32I)),v===e.RGB_INTEGER&&(ie===e.UNSIGNED_BYTE&&(fe=e.RGB8UI),ie===e.UNSIGNED_SHORT&&(fe=e.RGB16UI),ie===e.UNSIGNED_INT&&(fe=e.RGB32UI),ie===e.BYTE&&(fe=e.RGB8I),ie===e.SHORT&&(fe=e.RGB16I),ie===e.INT&&(fe=e.RGB32I)),v===e.RGBA_INTEGER&&(ie===e.UNSIGNED_BYTE&&(fe=e.RGBA8UI),ie===e.UNSIGNED_SHORT&&(fe=e.RGBA16UI),ie===e.UNSIGNED_INT&&(fe=e.RGBA32UI),ie===e.BYTE&&(fe=e.RGBA8I),ie===e.SHORT&&(fe=e.RGBA16I),ie===e.INT&&(fe=e.RGBA32I)),v===e.RGB&&ie===e.UNSIGNED_INT_5_9_9_9_REV&&(fe=e.RGB9_E5),v===e.RGBA){const dt=Pe?s.VxR:i.pp.getTransfer(me);ie===e.FLOAT&&(fe=e.RGBA32F),ie===e.HALF_FLOAT&&(fe=e.RGBA16F),ie===e.UNSIGNED_BYTE&&(fe=dt===s.KLL?e.SRGB8_ALPHA8:e.RGBA8),ie===e.UNSIGNED_SHORT_4_4_4_4&&(fe=e.RGBA4),ie===e.UNSIGNED_SHORT_5_5_5_1&&(fe=e.RGB5_A1)}return(fe===e.R16F||fe===e.R32F||fe===e.RG16F||fe===e.RG32F||fe===e.RGBA16F||fe===e.RGBA32F)&&n.get("EXT_color_buffer_float"),fe}function q(P,v){let ie;return P?v===null||v===s.bkx||v===s.V3x?ie=e.DEPTH24_STENCIL8:v===s.RQf?ie=e.DEPTH32F_STENCIL8:v===s.cHt&&(ie=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===s.bkx||v===s.V3x?ie=e.DEPTH_COMPONENT24:v===s.RQf?ie=e.DEPTH_COMPONENT32F:v===s.cHt&&(ie=e.DEPTH_COMPONENT16),ie}function ve(P,v){return w(P)===!0||P.isFramebufferTexture&&P.minFilter!==s.hxR&&P.minFilter!==s.k6q?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function he(P){const v=P.target;v.removeEventListener("dispose",he),be(v),v.isVideoTexture&&le.delete(v)}function de(P){const v=P.target;v.removeEventListener("dispose",de),D(v)}function be(P){const v=d.get(P);if(v.__webglInit===void 0)return;const ie=P.source,me=J.get(ie);if(me){const Pe=me[v.__cacheKey];Pe.usedTimes--,Pe.usedTimes===0&&N(P),Object.keys(me).length===0&&J.delete(ie)}d.remove(P)}function N(P){const v=d.get(P);e.deleteTexture(v.__webglTexture);const ie=P.source,me=J.get(ie);delete me[v.__cacheKey],O.memory.textures--}function D(P){const v=d.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),d.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(v.__webglFramebuffer[me]))for(let Pe=0;Pe<v.__webglFramebuffer[me].length;Pe++)e.deleteFramebuffer(v.__webglFramebuffer[me][Pe]);else e.deleteFramebuffer(v.__webglFramebuffer[me]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[me])}else{if(Array.isArray(v.__webglFramebuffer))for(let me=0;me<v.__webglFramebuffer.length;me++)e.deleteFramebuffer(v.__webglFramebuffer[me]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let me=0;me<v.__webglColorRenderbuffer.length;me++)v.__webglColorRenderbuffer[me]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[me]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const ie=P.textures;for(let me=0,Pe=ie.length;me<Pe;me++){const fe=d.get(ie[me]);fe.__webglTexture&&(e.deleteTexture(fe.__webglTexture),O.memory.textures--),d.remove(ie[me])}d.remove(P)}let K=0;function we(){K=0}function Ce(){const P=K;return P>=x.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+x.maxTextures),K+=1,P}function Se(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function Be(P,v){const ie=d.get(P);if(P.isVideoTexture&&It(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ie.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(ie,P,v);return}}else P.isExternalTexture&&(ie.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,ie.__webglTexture,e.TEXTURE0+v)}function ye(P,v){const ie=d.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ie.__version!==P.version){Ze(ie,P,v);return}t.bindTexture(e.TEXTURE_2D_ARRAY,ie.__webglTexture,e.TEXTURE0+v)}function Ye(P,v){const ie=d.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ie.__version!==P.version){Ze(ie,P,v);return}t.bindTexture(e.TEXTURE_3D,ie.__webglTexture,e.TEXTURE0+v)}function _e(P,v){const ie=d.get(P);if(P.version>0&&ie.__version!==P.version){He(ie,P,v);return}t.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture,e.TEXTURE0+v)}const ft={[s.GJx]:e.REPEAT,[s.ghU]:e.CLAMP_TO_EDGE,[s.kTW]:e.MIRRORED_REPEAT},vt={[s.hxR]:e.NEAREST,[s.pHI]:e.NEAREST_MIPMAP_NEAREST,[s.Cfg]:e.NEAREST_MIPMAP_LINEAR,[s.k6q]:e.LINEAR,[s.kRr]:e.LINEAR_MIPMAP_NEAREST,[s.$_I]:e.LINEAR_MIPMAP_LINEAR},Ut={[s.amv]:e.NEVER,[s.FFZ]:e.ALWAYS,[s.vim]:e.LESS,[s.TiK]:e.LEQUAL,[s.kO0]:e.EQUAL,[s.gWB]:e.GEQUAL,[s.eoi]:e.GREATER,[s.jzd]:e.NOTEQUAL};function Vt(P,v){if(v.type===s.RQf&&n.has("OES_texture_float_linear")===!1&&(v.magFilter===s.k6q||v.magFilter===s.kRr||v.magFilter===s.Cfg||v.magFilter===s.$_I||v.minFilter===s.k6q||v.minFilter===s.kRr||v.minFilter===s.Cfg||v.minFilter===s.$_I)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(P,e.TEXTURE_WRAP_S,ft[v.wrapS]),e.texParameteri(P,e.TEXTURE_WRAP_T,ft[v.wrapT]),(P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY)&&e.texParameteri(P,e.TEXTURE_WRAP_R,ft[v.wrapR]),e.texParameteri(P,e.TEXTURE_MAG_FILTER,vt[v.magFilter]),e.texParameteri(P,e.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(e.texParameteri(P,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(P,e.TEXTURE_COMPARE_FUNC,Ut[v.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===s.hxR||v.minFilter!==s.Cfg&&v.minFilter!==s.$_I||v.type===s.RQf&&n.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||d.get(v).__currentAnisotropy){const ie=n.get("EXT_texture_filter_anisotropic");e.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,x.getMaxAnisotropy())),d.get(v).__currentAnisotropy=v.anisotropy}}}function hi(P,v){let ie=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",he));const me=v.source;let Pe=J.get(me);Pe===void 0&&(Pe={},J.set(me,Pe));const fe=Se(v);if(fe!==P.__cacheKey){Pe[fe]===void 0&&(Pe[fe]={texture:e.createTexture(),usedTimes:0},O.memory.textures++,ie=!0),Pe[fe].usedTimes++;const dt=Pe[P.__cacheKey];dt!==void 0&&(Pe[P.__cacheKey].usedTimes--,dt.usedTimes===0&&N(v)),P.__cacheKey=fe,P.__webglTexture=Pe[fe].texture}return ie}function Jt(P,v,ie){return Math.floor(Math.floor(P/ie)/v)}function Me(P,v,ie,me){const fe=P.updateRanges;if(fe.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,ie,me,v.data);else{fe.sort((Ne,$e)=>Ne.start-$e.start);let dt=0;for(let Ne=1;Ne<fe.length;Ne++){const $e=fe[dt],Tt=fe[Ne],ut=$e.start+$e.count,Qe=Jt(Tt.start,v.width,4),Dt=Jt($e.start,v.width,4);Tt.start<=ut+1&&Qe===Dt&&Jt(Tt.start+Tt.count-1,v.width,4)===Qe?$e.count=Math.max($e.count,Tt.start+Tt.count-$e.start):(++dt,fe[dt]=Tt)}fe.length=dt+1;const ze=e.getParameter(e.UNPACK_ROW_LENGTH),lt=e.getParameter(e.UNPACK_SKIP_PIXELS),ht=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let Ne=0,$e=fe.length;Ne<$e;Ne++){const Tt=fe[Ne],ut=Math.floor(Tt.start/4),Qe=Math.ceil(Tt.count/4),Dt=ut%v.width,W=Math.floor(ut/v.width),Oe=Qe,Xe=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Dt),e.pixelStorei(e.UNPACK_SKIP_ROWS,W),t.texSubImage2D(e.TEXTURE_2D,0,Dt,W,Oe,Xe,ie,me,v.data)}P.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ze),e.pixelStorei(e.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(e.UNPACK_SKIP_ROWS,ht)}}function Ze(P,v,ie){let me=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(me=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(me=e.TEXTURE_3D);const Pe=hi(P,v),fe=v.source;t.bindTexture(me,P.__webglTexture,e.TEXTURE0+ie);const dt=d.get(fe);if(fe.version!==dt.__version||Pe===!0){t.activeTexture(e.TEXTURE0+ie);const ze=i.pp.getPrimaries(i.pp.workingColorSpace),lt=v.colorSpace===s.jf0?null:i.pp.getPrimaries(v.colorSpace),ht=v.colorSpace===s.jf0||ze===lt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ne=se(v.image,!1,x.maxTextureSize);Ne=ui(v,Ne);const $e=S.convert(v.format,v.colorSpace),Tt=S.convert(v.type);let ut=ne(v.internalFormat,$e,Tt,v.colorSpace,v.isVideoTexture);Vt(me,v);let Qe;const Dt=v.mipmaps,W=v.isVideoTexture!==!0,Oe=dt.__version===void 0||Pe===!0,Xe=fe.dataReady,rt=ve(v,Ne);if(v.isDepthTexture)ut=q(v.format===s.dcC,v.type),Oe&&(W?t.texStorage2D(e.TEXTURE_2D,1,ut,Ne.width,Ne.height):t.texImage2D(e.TEXTURE_2D,0,ut,Ne.width,Ne.height,0,$e,Tt,null));else if(v.isDataTexture)if(Dt.length>0){W&&Oe&&t.texStorage2D(e.TEXTURE_2D,rt,ut,Dt[0].width,Dt[0].height);for(let Le=0,Te=Dt.length;Le<Te;Le++)Qe=Dt[Le],W?Xe&&t.texSubImage2D(e.TEXTURE_2D,Le,0,0,Qe.width,Qe.height,$e,Tt,Qe.data):t.texImage2D(e.TEXTURE_2D,Le,ut,Qe.width,Qe.height,0,$e,Tt,Qe.data);v.generateMipmaps=!1}else W?(Oe&&t.texStorage2D(e.TEXTURE_2D,rt,ut,Ne.width,Ne.height),Xe&&Me(v,Ne,$e,Tt)):t.texImage2D(e.TEXTURE_2D,0,ut,Ne.width,Ne.height,0,$e,Tt,Ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){W&&Oe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,rt,ut,Dt[0].width,Dt[0].height,Ne.depth);for(let Le=0,Te=Dt.length;Le<Te;Le++)if(Qe=Dt[Le],v.format!==s.GWd)if($e!==null)if(W){if(Xe)if(v.layerUpdates.size>0){const ot=un(Qe.width,Qe.height,v.format,v.type);for(const Ct of v.layerUpdates){const Qt=Qe.data.subarray(Ct*ot/Qe.data.BYTES_PER_ELEMENT,(Ct+1)*ot/Qe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Le,0,0,Ct,Qe.width,Qe.height,1,$e,Qt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Le,0,0,0,Qe.width,Qe.height,Ne.depth,$e,Qe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Le,ut,Qe.width,Qe.height,Ne.depth,0,Qe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Xe&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Le,0,0,0,Qe.width,Qe.height,Ne.depth,$e,Tt,Qe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Le,ut,Qe.width,Qe.height,Ne.depth,0,$e,Tt,Qe.data)}else{W&&Oe&&t.texStorage2D(e.TEXTURE_2D,rt,ut,Dt[0].width,Dt[0].height);for(let Le=0,Te=Dt.length;Le<Te;Le++)Qe=Dt[Le],v.format!==s.GWd?$e!==null?W?Xe&&t.compressedTexSubImage2D(e.TEXTURE_2D,Le,0,0,Qe.width,Qe.height,$e,Qe.data):t.compressedTexImage2D(e.TEXTURE_2D,Le,ut,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Xe&&t.texSubImage2D(e.TEXTURE_2D,Le,0,0,Qe.width,Qe.height,$e,Tt,Qe.data):t.texImage2D(e.TEXTURE_2D,Le,ut,Qe.width,Qe.height,0,$e,Tt,Qe.data)}else if(v.isDataArrayTexture)if(W){if(Oe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,rt,ut,Ne.width,Ne.height,Ne.depth),Xe)if(v.layerUpdates.size>0){const Le=un(Ne.width,Ne.height,v.format,v.type);for(const Te of v.layerUpdates){const ot=Ne.data.subarray(Te*Le/Ne.data.BYTES_PER_ELEMENT,(Te+1)*Le/Ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Te,Ne.width,Ne.height,1,$e,Tt,ot)}v.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,$e,Tt,Ne.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ut,Ne.width,Ne.height,Ne.depth,0,$e,Tt,Ne.data);else if(v.isData3DTexture)W?(Oe&&t.texStorage3D(e.TEXTURE_3D,rt,ut,Ne.width,Ne.height,Ne.depth),Xe&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,$e,Tt,Ne.data)):t.texImage3D(e.TEXTURE_3D,0,ut,Ne.width,Ne.height,Ne.depth,0,$e,Tt,Ne.data);else if(v.isFramebufferTexture){if(Oe)if(W)t.texStorage2D(e.TEXTURE_2D,rt,ut,Ne.width,Ne.height);else{let Le=Ne.width,Te=Ne.height;for(let ot=0;ot<rt;ot++)t.texImage2D(e.TEXTURE_2D,ot,ut,Le,Te,0,$e,Tt,null),Le>>=1,Te>>=1}}else if(Dt.length>0){if(W&&Oe){const Le=ai(Dt[0]);t.texStorage2D(e.TEXTURE_2D,rt,ut,Le.width,Le.height)}for(let Le=0,Te=Dt.length;Le<Te;Le++)Qe=Dt[Le],W?Xe&&t.texSubImage2D(e.TEXTURE_2D,Le,0,0,$e,Tt,Qe):t.texImage2D(e.TEXTURE_2D,Le,ut,$e,Tt,Qe);v.generateMipmaps=!1}else if(W){if(Oe){const Le=ai(Ne);t.texStorage2D(e.TEXTURE_2D,rt,ut,Le.width,Le.height)}Xe&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,$e,Tt,Ne)}else t.texImage2D(e.TEXTURE_2D,0,ut,$e,Tt,Ne);w(v)&&_(me),dt.__version=fe.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function He(P,v,ie){if(v.image.length!==6)return;const me=hi(P,v),Pe=v.source;t.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+ie);const fe=d.get(Pe);if(Pe.version!==fe.__version||me===!0){t.activeTexture(e.TEXTURE0+ie);const dt=i.pp.getPrimaries(i.pp.workingColorSpace),ze=v.colorSpace===s.jf0?null:i.pp.getPrimaries(v.colorSpace),lt=v.colorSpace===s.jf0||dt===ze?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const ht=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,$e=[];for(let Te=0;Te<6;Te++)!ht&&!Ne?$e[Te]=se(v.image[Te],!0,x.maxCubemapSize):$e[Te]=Ne?v.image[Te].image:v.image[Te],$e[Te]=ui(v,$e[Te]);const Tt=$e[0],ut=S.convert(v.format,v.colorSpace),Qe=S.convert(v.type),Dt=ne(v.internalFormat,ut,Qe,v.colorSpace),W=v.isVideoTexture!==!0,Oe=fe.__version===void 0||me===!0,Xe=Pe.dataReady;let rt=ve(v,Tt);Vt(e.TEXTURE_CUBE_MAP,v);let Le;if(ht){W&&Oe&&t.texStorage2D(e.TEXTURE_CUBE_MAP,rt,Dt,Tt.width,Tt.height);for(let Te=0;Te<6;Te++){Le=$e[Te].mipmaps;for(let ot=0;ot<Le.length;ot++){const Ct=Le[ot];v.format!==s.GWd?ut!==null?W?Xe&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,0,0,Ct.width,Ct.height,ut,Ct.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,Dt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Xe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,0,0,Ct.width,Ct.height,ut,Qe,Ct.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,Dt,Ct.width,Ct.height,0,ut,Qe,Ct.data)}}}else{if(Le=v.mipmaps,W&&Oe){Le.length>0&&rt++;const Te=ai($e[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,rt,Dt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ne){W?Xe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,$e[Te].width,$e[Te].height,ut,Qe,$e[Te].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Dt,$e[Te].width,$e[Te].height,0,ut,Qe,$e[Te].data);for(let ot=0;ot<Le.length;ot++){const Qt=Le[ot].image[Te].image;W?Xe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,0,0,Qt.width,Qt.height,ut,Qe,Qt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,Dt,Qt.width,Qt.height,0,ut,Qe,Qt.data)}}else{W?Xe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ut,Qe,$e[Te]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Dt,ut,Qe,$e[Te]);for(let ot=0;ot<Le.length;ot++){const Ct=Le[ot];W?Xe&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,0,0,ut,Qe,Ct.image[Te]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,Dt,ut,Qe,Ct.image[Te])}}}w(v)&&_(e.TEXTURE_CUBE_MAP),fe.__version=Pe.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function xt(P,v,ie,me,Pe,fe){const dt=S.convert(ie.format,ie.colorSpace),ze=S.convert(ie.type),lt=ne(ie.internalFormat,dt,ze,ie.colorSpace),ht=d.get(v),Ne=d.get(ie);if(Ne.__renderTarget=v,!ht.__hasExternalTextures){const $e=Math.max(1,v.width>>fe),Tt=Math.max(1,v.height>>fe);Pe===e.TEXTURE_3D||Pe===e.TEXTURE_2D_ARRAY?t.texImage3D(Pe,fe,lt,$e,Tt,v.depth,0,dt,ze,null):t.texImage2D(Pe,fe,lt,$e,Tt,0,dt,ze,null)}t.bindFramebuffer(e.FRAMEBUFFER,P),st(v)?C.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,me,Pe,Ne.__webglTexture,0,ei(v)):(Pe===e.TEXTURE_2D||Pe>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Pe<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,me,Pe,Ne.__webglTexture,fe),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Et(P,v,ie){if(e.bindRenderbuffer(e.RENDERBUFFER,P),v.depthBuffer){const me=v.depthTexture,Pe=me&&me.isDepthTexture?me.type:null,fe=q(v.stencilBuffer,Pe),dt=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ze=ei(v);st(v)?C.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ze,fe,v.width,v.height):ie?e.renderbufferStorageMultisample(e.RENDERBUFFER,ze,fe,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,fe,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,P)}else{const me=v.textures;for(let Pe=0;Pe<me.length;Pe++){const fe=me[Pe],dt=S.convert(fe.format,fe.colorSpace),ze=S.convert(fe.type),lt=ne(fe.internalFormat,dt,ze,fe.colorSpace),ht=ei(v);ie&&st(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ht,lt,v.width,v.height):st(v)?C.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ht,lt,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,lt,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Rt(P,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=d.get(v.depthTexture);me.__renderTarget=v,(!me.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Be(v.depthTexture,0);const Pe=me.__webglTexture,fe=ei(v);if(v.depthTexture.format===s.zdS)st(v)?C.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Pe,0,fe):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Pe,0);else if(v.depthTexture.format===s.dcC)st(v)?C.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Pe,0,fe):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Pe,0);else throw new Error("Unknown depthTexture format")}function si(P){const v=d.get(P),ie=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),me){const Pe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,me.removeEventListener("dispose",Pe)};me.addEventListener("dispose",Pe),v.__depthDisposeCallback=Pe}v.__boundDepthTexture=me}if(P.depthTexture&&!v.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");const me=P.texture.mipmaps;me&&me.length>0?Rt(v.__webglFramebuffer[0],P):Rt(v.__webglFramebuffer,P)}else if(ie){v.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[me]),v.__webglDepthbuffer[me]===void 0)v.__webglDepthbuffer[me]=e.createRenderbuffer(),Et(v.__webglDepthbuffer[me],P,!1);else{const Pe=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer[me];e.bindRenderbuffer(e.RENDERBUFFER,fe),e.framebufferRenderbuffer(e.FRAMEBUFFER,Pe,e.RENDERBUFFER,fe)}}else{const me=P.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),Et(v.__webglDepthbuffer,P,!1);else{const Pe=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,fe),e.framebufferRenderbuffer(e.FRAMEBUFFER,Pe,e.RENDERBUFFER,fe)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Bt(P,v,ie){const me=d.get(P);v!==void 0&&xt(me.__webglFramebuffer,P,P.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),ie!==void 0&&si(P)}function V(P){const v=P.texture,ie=d.get(P),me=d.get(v);P.addEventListener("dispose",de);const Pe=P.textures,fe=P.isWebGLCubeRenderTarget===!0,dt=Pe.length>1;if(dt||(me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture()),me.__version=v.version,O.memory.textures++),fe){ie.__webglFramebuffer=[];for(let ze=0;ze<6;ze++)if(v.mipmaps&&v.mipmaps.length>0){ie.__webglFramebuffer[ze]=[];for(let lt=0;lt<v.mipmaps.length;lt++)ie.__webglFramebuffer[ze][lt]=e.createFramebuffer()}else ie.__webglFramebuffer[ze]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){ie.__webglFramebuffer=[];for(let ze=0;ze<v.mipmaps.length;ze++)ie.__webglFramebuffer[ze]=e.createFramebuffer()}else ie.__webglFramebuffer=e.createFramebuffer();if(dt)for(let ze=0,lt=Pe.length;ze<lt;ze++){const ht=d.get(Pe[ze]);ht.__webglTexture===void 0&&(ht.__webglTexture=e.createTexture(),O.memory.textures++)}if(P.samples>0&&st(P)===!1){ie.__webglMultisampledFramebuffer=e.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ze=0;ze<Pe.length;ze++){const lt=Pe[ze];ie.__webglColorRenderbuffer[ze]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,ie.__webglColorRenderbuffer[ze]);const ht=S.convert(lt.format,lt.colorSpace),Ne=S.convert(lt.type),$e=ne(lt.internalFormat,ht,Ne,lt.colorSpace,P.isXRRenderTarget===!0),Tt=ei(P);e.renderbufferStorageMultisample(e.RENDERBUFFER,Tt,$e,P.width,P.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ze,e.RENDERBUFFER,ie.__webglColorRenderbuffer[ze])}e.bindRenderbuffer(e.RENDERBUFFER,null),P.depthBuffer&&(ie.__webglDepthRenderbuffer=e.createRenderbuffer(),Et(ie.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(fe){t.bindTexture(e.TEXTURE_CUBE_MAP,me.__webglTexture),Vt(e.TEXTURE_CUBE_MAP,v);for(let ze=0;ze<6;ze++)if(v.mipmaps&&v.mipmaps.length>0)for(let lt=0;lt<v.mipmaps.length;lt++)xt(ie.__webglFramebuffer[ze][lt],P,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt);else xt(ie.__webglFramebuffer[ze],P,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0);w(v)&&_(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(dt){for(let ze=0,lt=Pe.length;ze<lt;ze++){const ht=Pe[ze],Ne=d.get(ht);let $e=e.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($e=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture($e,Ne.__webglTexture),Vt($e,ht),xt(ie.__webglFramebuffer,P,ht,e.COLOR_ATTACHMENT0+ze,$e,0),w(ht)&&_($e)}t.unbindTexture()}else{let ze=e.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ze=P.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ze,me.__webglTexture),Vt(ze,v),v.mipmaps&&v.mipmaps.length>0)for(let lt=0;lt<v.mipmaps.length;lt++)xt(ie.__webglFramebuffer[lt],P,v,e.COLOR_ATTACHMENT0,ze,lt);else xt(ie.__webglFramebuffer,P,v,e.COLOR_ATTACHMENT0,ze,0);w(v)&&_(ze),t.unbindTexture()}P.depthBuffer&&si(P)}function Zt(P){const v=P.textures;for(let ie=0,me=v.length;ie<me;ie++){const Pe=v[ie];if(w(Pe)){const fe=ue(P),dt=d.get(Pe).__webglTexture;t.bindTexture(fe,dt),_(fe),t.unbindTexture()}}}const _t=[],Ht=[];function pt(P){if(P.samples>0){if(st(P)===!1){const v=P.textures,ie=P.width,me=P.height;let Pe=e.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=d.get(P),ze=v.length>1;if(ze)for(let ht=0;ht<v.length;ht++)t.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);const lt=P.texture.mipmaps;lt&&lt.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Pe|=e.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Pe|=e.STENCIL_BUFFER_BIT)),ze){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);const Ne=d.get(v[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ne,0)}e.blitFramebuffer(0,0,ie,me,0,0,ie,me,Pe,e.NEAREST),te===!0&&(_t.length=0,Ht.length=0,_t.push(e.COLOR_ATTACHMENT0+ht),P.depthBuffer&&P.resolveDepthBuffer===!1&&(_t.push(fe),Ht.push(fe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ht)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ze)for(let ht=0;ht<v.length;ht++){t.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ht]);const Ne=d.get(v[ht]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,Ne,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&te){const v=P.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function ei(P){return Math.min(x.maxSamples,P.samples)}function st(P){const v=d.get(P);return P.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function It(P){const v=O.render.frame;le.get(P)!==v&&(le.set(P,v),P.update())}function ui(P,v){const ie=P.colorSpace,me=P.format,Pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ie!==s.Zr2&&ie!==s.jf0&&(i.pp.getTransfer(ie)===s.KLL?(me!==s.GWd||Pe!==s.OUM)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),v}function ai(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(Y.width=P.naturalWidth||P.width,Y.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(Y.width=P.displayWidth,Y.height=P.displayHeight):(Y.width=P.width,Y.height=P.height),Y}this.allocateTextureUnit=Ce,this.resetTextureUnits=we,this.setTexture2D=Be,this.setTexture2DArray=ye,this.setTexture3D=Ye,this.setTextureCube=_e,this.rebindTextures=Bt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=si,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=st}function So(e,n){function t(d,x=s.jf0){let S;const O=i.pp.getTransfer(x);if(d===s.OUM)return e.UNSIGNED_BYTE;if(d===s.Wew)return e.UNSIGNED_SHORT_4_4_4_4;if(d===s.gJ2)return e.UNSIGNED_SHORT_5_5_5_1;if(d===s.Dmk)return e.UNSIGNED_INT_5_9_9_9_REV;if(d===s.tJf)return e.BYTE;if(d===s.fBL)return e.SHORT;if(d===s.cHt)return e.UNSIGNED_SHORT;if(d===s.Yuy)return e.INT;if(d===s.bkx)return e.UNSIGNED_INT;if(d===s.RQf)return e.FLOAT;if(d===s.ix0)return e.HALF_FLOAT;if(d===s.wrO)return e.ALPHA;if(d===s.HIg)return e.RGB;if(d===s.GWd)return e.RGBA;if(d===s.zdS)return e.DEPTH_COMPONENT;if(d===s.dcC)return e.DEPTH_STENCIL;if(d===s.VT0)return e.RED;if(d===s.ZQM)return e.RED_INTEGER;if(d===s.paN)return e.RG;if(d===s.TkQ)return e.RG_INTEGER;if(d===s.c90)return e.RGBA_INTEGER;if(d===s.IE4||d===s.Nz6||d===s.jR7||d===s.BXX)if(O===s.KLL)if(S=n.get("WEBGL_compressed_texture_s3tc_srgb"),S!==null){if(d===s.IE4)return S.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(d===s.Nz6)return S.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(d===s.jR7)return S.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(d===s.BXX)return S.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(S=n.get("WEBGL_compressed_texture_s3tc"),S!==null){if(d===s.IE4)return S.COMPRESSED_RGB_S3TC_DXT1_EXT;if(d===s.Nz6)return S.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(d===s.jR7)return S.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(d===s.BXX)return S.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(d===s.k6Q||d===s.kTp||d===s.HXV||d===s.pBf)if(S=n.get("WEBGL_compressed_texture_pvrtc"),S!==null){if(d===s.k6Q)return S.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(d===s.kTp)return S.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(d===s.HXV)return S.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(d===s.pBf)return S.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(d===s.CVz||d===s.Riy||d===s.KDk)if(S=n.get("WEBGL_compressed_texture_etc"),S!==null){if(d===s.CVz||d===s.Riy)return O===s.KLL?S.COMPRESSED_SRGB8_ETC2:S.COMPRESSED_RGB8_ETC2;if(d===s.KDk)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:S.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(d===s.qa3||d===s.B_h||d===s.czI||d===s.rSH||d===s.Qrf||d===s.psI||d===s.a5J||d===s._QJ||d===s.uB5||d===s.lyL||d===s.bC7||d===s.y3Z||d===s.ojs||d===s.S$4)if(S=n.get("WEBGL_compressed_texture_astc"),S!==null){if(d===s.qa3)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:S.COMPRESSED_RGBA_ASTC_4x4_KHR;if(d===s.B_h)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:S.COMPRESSED_RGBA_ASTC_5x4_KHR;if(d===s.czI)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:S.COMPRESSED_RGBA_ASTC_5x5_KHR;if(d===s.rSH)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:S.COMPRESSED_RGBA_ASTC_6x5_KHR;if(d===s.Qrf)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:S.COMPRESSED_RGBA_ASTC_6x6_KHR;if(d===s.psI)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:S.COMPRESSED_RGBA_ASTC_8x5_KHR;if(d===s.a5J)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:S.COMPRESSED_RGBA_ASTC_8x6_KHR;if(d===s._QJ)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:S.COMPRESSED_RGBA_ASTC_8x8_KHR;if(d===s.uB5)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:S.COMPRESSED_RGBA_ASTC_10x5_KHR;if(d===s.lyL)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:S.COMPRESSED_RGBA_ASTC_10x6_KHR;if(d===s.bC7)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:S.COMPRESSED_RGBA_ASTC_10x8_KHR;if(d===s.y3Z)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:S.COMPRESSED_RGBA_ASTC_10x10_KHR;if(d===s.ojs)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:S.COMPRESSED_RGBA_ASTC_12x10_KHR;if(d===s.S$4)return O===s.KLL?S.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:S.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(d===s.Fn||d===s.H23||d===s.W9U)if(S=n.get("EXT_texture_compression_bptc"),S!==null){if(d===s.Fn)return O===s.KLL?S.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:S.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(d===s.H23)return S.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(d===s.W9U)return S.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(d===s.Kef||d===s.XG_||d===s.HO_||d===s.CWW)if(S=n.get("EXT_texture_compression_rgtc"),S!==null){if(d===s.Fn)return S.COMPRESSED_RED_RGTC1_EXT;if(d===s.XG_)return S.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(d===s.HO_)return S.COMPRESSED_RED_GREEN_RGTC2_EXT;if(d===s.CWW)return S.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return d===s.V3x?e.UNSIGNED_INT_24_8:e[d]!==void 0?e[d]:null}return{convert:t}}class To extends xi.PerspectiveCamera{constructor(n=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=n}}var yo=F(251750),Ao=F(774153),Zi=F(136767);const bo={type:"move"};class dn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi.Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi.Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new c.Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new c.Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi.Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new c.Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new c.Vector3),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const t=this._hand;if(t)for(const d of n.hand.values())this._getHandJoint(t,d)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,t,d){let x=null,S=null,O=null;const C=this._targetRay,te=this._grip,Y=this._hand;if(n&&t.session.visibilityState!=="visible-blurred"){if(Y&&n.hand){O=!0;for(const se of n.hand.values()){const w=t.getJointPose(se,d),_=this._getHandJoint(Y,se);w!==null&&(_.matrix.fromArray(w.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=w.radius),_.visible=w!==null}const le=Y.joints["index-finger-tip"],ee=Y.joints["thumb-tip"],J=le.position.distanceTo(ee.position),$=.02,ge=.005;Y.inputState.pinching&&J>$+ge?(Y.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!Y.inputState.pinching&&J<=$-ge&&(Y.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else te!==null&&n.gripSpace&&(S=t.getPose(n.gripSpace,d),S!==null&&(te.matrix.fromArray(S.transform.matrix),te.matrix.decompose(te.position,te.rotation,te.scale),te.matrixWorldNeedsUpdate=!0,S.linearVelocity?(te.hasLinearVelocity=!0,te.linearVelocity.copy(S.linearVelocity)):te.hasLinearVelocity=!1,S.angularVelocity?(te.hasAngularVelocity=!0,te.angularVelocity.copy(S.angularVelocity)):te.hasAngularVelocity=!1));C!==null&&(x=t.getPose(n.targetRaySpace,d),x===null&&S!==null&&(x=S),x!==null&&(C.matrix.fromArray(x.transform.matrix),C.matrix.decompose(C.position,C.rotation,C.scale),C.matrixWorldNeedsUpdate=!0,x.linearVelocity?(C.hasLinearVelocity=!0,C.linearVelocity.copy(x.linearVelocity)):C.hasLinearVelocity=!1,x.angularVelocity?(C.hasAngularVelocity=!0,C.angularVelocity.copy(x.angularVelocity)):C.hasAngularVelocity=!1,this.dispatchEvent(bo)))}return C!==null&&(C.visible=x!==null),te!==null&&(te.visible=S!==null),Y!==null&&(Y.visible=O!==null),this}_getHandJoint(n,t){if(n.joints[t.jointName]===void 0){const d=new Zi.Group;d.matrixAutoUpdate=!1,d.visible=!1,n.joints[t.jointName]=d,n.add(d)}return n.joints[t.jointName]}}class Es extends Ai.g{constructor(n=null){super(),this.sourceTexture=n,this.isExternalTexture=!0}}const Ro=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Co=`
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

}`;class wo{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const d=new Es(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=d}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,d=new l.B({vertexShader:Ro,fragmentShader:Co,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new u.e(new h.b(20,20),d)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Po extends yo.Q{constructor(n,t){super();const d=this;let x=null,S=1,O=null,C="local-floor",te=1,Y=null,le=null,ee=null,J=null,$=null,ge=null;const se=new wo,w={},_=t.getContextAttributes();let ue=null,ne=null;const q=[],ve=[],he=new di.I;let de=null;const be=new xi.PerspectiveCamera;be.viewport=new b.I;const N=new xi.PerspectiveCamera;N.viewport=new b.I;const D=[be,N],K=new To;let we=null,Ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Me){let Ze=q[Me];return Ze===void 0&&(Ze=new dn,q[Me]=Ze),Ze.getTargetRaySpace()},this.getControllerGrip=function(Me){let Ze=q[Me];return Ze===void 0&&(Ze=new dn,q[Me]=Ze),Ze.getGripSpace()},this.getHand=function(Me){let Ze=q[Me];return Ze===void 0&&(Ze=new dn,q[Me]=Ze),Ze.getHandSpace()};function Se(Me){const Ze=ve.indexOf(Me.inputSource);if(Ze===-1)return;const He=q[Ze];He!==void 0&&(He.update(Me.inputSource,Me.frame,Y||O),He.dispatchEvent({type:Me.type,data:Me.inputSource}))}function Be(){x.removeEventListener("select",Se),x.removeEventListener("selectstart",Se),x.removeEventListener("selectend",Se),x.removeEventListener("squeeze",Se),x.removeEventListener("squeezestart",Se),x.removeEventListener("squeezeend",Se),x.removeEventListener("end",Be),x.removeEventListener("inputsourceschange",ye);for(let Me=0;Me<q.length;Me++){const Ze=ve[Me];Ze!==null&&(ve[Me]=null,q[Me].disconnect(Ze))}we=null,Ce=null,se.reset();for(const Me in w)delete w[Me];n.setRenderTarget(ue),$=null,J=null,ee=null,x=null,ne=null,Jt.stop(),d.isPresenting=!1,n.setPixelRatio(de),n.setSize(he.width,he.height,!1),d.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Me){S=Me,d.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Me){C=Me,d.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Y||O},this.setReferenceSpace=function(Me){Y=Me},this.getBaseLayer=function(){return J!==null?J:$},this.getBinding=function(){return ee},this.getFrame=function(){return ge},this.getSession=function(){return x},this.setSession=async function(Me){if(x=Me,x!==null){if(ue=n.getRenderTarget(),x.addEventListener("select",Se),x.addEventListener("selectstart",Se),x.addEventListener("selectend",Se),x.addEventListener("squeeze",Se),x.addEventListener("squeezestart",Se),x.addEventListener("squeezeend",Se),x.addEventListener("end",Be),x.addEventListener("inputsourceschange",ye),_.xrCompatible!==!0&&await t.makeXRCompatible(),de=n.getPixelRatio(),n.getSize(he),typeof XRWebGLBinding<"u"&&(ee=new XRWebGLBinding(x,t)),ee!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let He=null,xt=null,Et=null;_.depth&&(Et=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,He=_.stencil?s.dcC:s.zdS,xt=_.stencil?s.V3x:s.bkx);const Rt={colorFormat:t.RGBA8,depthFormat:Et,scaleFactor:S};J=ee.createProjectionLayer(Rt),x.updateRenderState({layers:[J]}),n.setPixelRatio(1),n.setSize(J.textureWidth,J.textureHeight,!1),ne=new Ri.n(J.textureWidth,J.textureHeight,{format:s.GWd,type:s.OUM,depthTexture:new Wi(J.textureWidth,J.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,He),stencilBuffer:_.stencil,colorSpace:n.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:J.ignoreDepthValues===!1,resolveStencilBuffer:J.ignoreDepthValues===!1})}else{const He={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:S};$=new XRWebGLLayer(x,t,He),x.updateRenderState({baseLayer:$}),n.setPixelRatio(1),n.setSize($.framebufferWidth,$.framebufferHeight,!1),ne=new Ri.n($.framebufferWidth,$.framebufferHeight,{format:s.GWd,type:s.OUM,colorSpace:n.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:$.ignoreDepthValues===!1,resolveStencilBuffer:$.ignoreDepthValues===!1})}ne.isXRRenderTarget=!0,this.setFoveation(te),Y=null,O=await x.requestReferenceSpace(C),Jt.setContext(x),Jt.start(),d.isPresenting=!0,d.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(x!==null)return x.environmentBlendMode},this.getDepthTexture=function(){return se.getDepthTexture()};function ye(Me){for(let Ze=0;Ze<Me.removed.length;Ze++){const He=Me.removed[Ze],xt=ve.indexOf(He);xt>=0&&(ve[xt]=null,q[xt].disconnect(He))}for(let Ze=0;Ze<Me.added.length;Ze++){const He=Me.added[Ze];let xt=ve.indexOf(He);if(xt===-1){for(let Rt=0;Rt<q.length;Rt++)if(Rt>=ve.length){ve.push(He),xt=Rt;break}else if(ve[Rt]===null){ve[Rt]=He,xt=Rt;break}if(xt===-1)break}const Et=q[xt];Et&&Et.connect(He)}}const Ye=new c.Vector3,_e=new c.Vector3;function ft(Me,Ze,He){Ye.setFromMatrixPosition(Ze.matrixWorld),_e.setFromMatrixPosition(He.matrixWorld);const xt=Ye.distanceTo(_e),Et=Ze.projectionMatrix.elements,Rt=He.projectionMatrix.elements,si=Et[14]/(Et[10]-1),Bt=Et[14]/(Et[10]+1),V=(Et[9]+1)/Et[5],Zt=(Et[9]-1)/Et[5],_t=(Et[8]-1)/Et[0],Ht=(Rt[8]+1)/Rt[0],pt=si*_t,ei=si*Ht,st=xt/(-_t+Ht),It=st*-_t;if(Ze.matrixWorld.decompose(Me.position,Me.quaternion,Me.scale),Me.translateX(It),Me.translateZ(st),Me.matrixWorld.compose(Me.position,Me.quaternion,Me.scale),Me.matrixWorldInverse.copy(Me.matrixWorld).invert(),Et[10]===-1)Me.projectionMatrix.copy(Ze.projectionMatrix),Me.projectionMatrixInverse.copy(Ze.projectionMatrixInverse);else{const ui=si+st,ai=Bt+st,P=pt-It,v=ei+(xt-It),ie=V*Bt/ai*ui,me=Zt*Bt/ai*ui;Me.projectionMatrix.makePerspective(P,v,ie,me,ui,ai),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert()}}function vt(Me,Ze){Ze===null?Me.matrixWorld.copy(Me.matrix):Me.matrixWorld.multiplyMatrices(Ze.matrixWorld,Me.matrix),Me.matrixWorldInverse.copy(Me.matrixWorld).invert()}this.updateCamera=function(Me){if(x===null)return;let Ze=Me.near,He=Me.far;se.texture!==null&&(se.depthNear>0&&(Ze=se.depthNear),se.depthFar>0&&(He=se.depthFar)),K.near=N.near=be.near=Ze,K.far=N.far=be.far=He,(we!==K.near||Ce!==K.far)&&(x.updateRenderState({depthNear:K.near,depthFar:K.far}),we=K.near,Ce=K.far),K.layers.mask=Me.layers.mask|6,be.layers.mask=K.layers.mask&3,N.layers.mask=K.layers.mask&5;const xt=Me.parent,Et=K.cameras;vt(K,xt);for(let Rt=0;Rt<Et.length;Rt++)vt(Et[Rt],xt);Et.length===2?ft(K,be,N):K.projectionMatrix.copy(be.projectionMatrix),Ut(Me,K,xt)};function Ut(Me,Ze,He){He===null?Me.matrix.copy(Ze.matrixWorld):(Me.matrix.copy(He.matrixWorld),Me.matrix.invert(),Me.matrix.multiply(Ze.matrixWorld)),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.updateMatrixWorld(!0),Me.projectionMatrix.copy(Ze.projectionMatrix),Me.projectionMatrixInverse.copy(Ze.projectionMatrixInverse),Me.isPerspectiveCamera&&(Me.fov=Ao.a5*2*Math.atan(1/Me.projectionMatrix.elements[5]),Me.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(J===null&&$===null))return te},this.setFoveation=function(Me){te=Me,J!==null&&(J.fixedFoveation=Me),$!==null&&$.fixedFoveation!==void 0&&($.fixedFoveation=Me)},this.hasDepthSensing=function(){return se.texture!==null},this.getDepthSensingMesh=function(){return se.getMesh(K)},this.getCameraTexture=function(Me){return w[Me]};let Vt=null;function hi(Me,Ze){if(le=Ze.getViewerPose(Y||O),ge=Ze,le!==null){const He=le.views;$!==null&&(n.setRenderTargetFramebuffer(ne,$.framebuffer),n.setRenderTarget(ne));let xt=!1;He.length!==K.cameras.length&&(K.cameras.length=0,xt=!0);for(let Bt=0;Bt<He.length;Bt++){const V=He[Bt];let Zt=null;if($!==null)Zt=$.getViewport(V);else{const Ht=ee.getViewSubImage(J,V);Zt=Ht.viewport,Bt===0&&(n.setRenderTargetTextures(ne,Ht.colorTexture,Ht.depthStencilTexture),n.setRenderTarget(ne))}let _t=D[Bt];_t===void 0&&(_t=new xi.PerspectiveCamera,_t.layers.enable(Bt),_t.viewport=new b.I,D[Bt]=_t),_t.matrix.fromArray(V.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(V.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Bt===0&&(K.matrix.copy(_t.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),xt===!0&&K.cameras.push(_t)}const Et=x.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&x.depthUsage=="gpu-optimized"&&ee){const Bt=ee.getDepthInformation(He[0]);Bt&&Bt.isValid&&Bt.texture&&se.init(Bt,x.renderState)}if(Et&&Et.includes("camera-access")&&(n.state.unbindTexture(),ee))for(let Bt=0;Bt<He.length;Bt++){const V=He[Bt].camera;if(V){let Zt=w[V];Zt||(Zt=new Es,w[V]=Zt);const _t=ee.getCameraImage(V);Zt.sourceTexture=_t}}}for(let He=0;He<q.length;He++){const xt=ve[He],Et=q[He];xt!==null&&Et!==void 0&&Et.update(xt,Ze,Y||O)}Vt&&Vt(Me,Ze),Ze.detectedPlanes&&d.dispatchEvent({type:"planesdetected",data:Ze}),ge=null}const Jt=new f;Jt.setAnimationLoop(hi),this.setAnimationLoop=function(Me){Vt=Me},this.dispose=function(){}}}const Pi=new a.O,Do=new r.k;function Lo(e,n){function t(w,_){w.matrixAutoUpdate===!0&&w.updateMatrix(),_.value.copy(w.matrix)}function d(w,_){_.color.getRGB(w.fogColor.value,(0,ni._U)(e)),_.isFog?(w.fogNear.value=_.near,w.fogFar.value=_.far):_.isFogExp2&&(w.fogDensity.value=_.density)}function x(w,_,ue,ne,q){_.isMeshBasicMaterial||_.isMeshLambertMaterial?S(w,_):_.isMeshToonMaterial?(S(w,_),ee(w,_)):_.isMeshPhongMaterial?(S(w,_),le(w,_)):_.isMeshStandardMaterial?(S(w,_),J(w,_),_.isMeshPhysicalMaterial&&$(w,_,q)):_.isMeshMatcapMaterial?(S(w,_),ge(w,_)):_.isMeshDepthMaterial?S(w,_):_.isMeshDistanceMaterial?(S(w,_),se(w,_)):_.isMeshNormalMaterial?S(w,_):_.isLineBasicMaterial?(O(w,_),_.isLineDashedMaterial&&C(w,_)):_.isPointsMaterial?te(w,_,ue,ne):_.isSpriteMaterial?Y(w,_):_.isShadowMaterial?(w.color.value.copy(_.color),w.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function S(w,_){w.opacity.value=_.opacity,_.color&&w.diffuse.value.copy(_.color),_.emissive&&w.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(w.map.value=_.map,t(_.map,w.mapTransform)),_.alphaMap&&(w.alphaMap.value=_.alphaMap,t(_.alphaMap,w.alphaMapTransform)),_.bumpMap&&(w.bumpMap.value=_.bumpMap,t(_.bumpMap,w.bumpMapTransform),w.bumpScale.value=_.bumpScale,_.side===s.hsX&&(w.bumpScale.value*=-1)),_.normalMap&&(w.normalMap.value=_.normalMap,t(_.normalMap,w.normalMapTransform),w.normalScale.value.copy(_.normalScale),_.side===s.hsX&&w.normalScale.value.negate()),_.displacementMap&&(w.displacementMap.value=_.displacementMap,t(_.displacementMap,w.displacementMapTransform),w.displacementScale.value=_.displacementScale,w.displacementBias.value=_.displacementBias),_.emissiveMap&&(w.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,w.emissiveMapTransform)),_.specularMap&&(w.specularMap.value=_.specularMap,t(_.specularMap,w.specularMapTransform)),_.alphaTest>0&&(w.alphaTest.value=_.alphaTest);const ue=n.get(_),ne=ue.envMap,q=ue.envMapRotation;ne&&(w.envMap.value=ne,Pi.copy(q),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,ne.isCubeTexture&&ne.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),w.envMapRotation.value.setFromMatrix4(Do.makeRotationFromEuler(Pi)),w.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=_.reflectivity,w.ior.value=_.ior,w.refractionRatio.value=_.refractionRatio),_.lightMap&&(w.lightMap.value=_.lightMap,w.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,w.lightMapTransform)),_.aoMap&&(w.aoMap.value=_.aoMap,w.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,w.aoMapTransform))}function O(w,_){w.diffuse.value.copy(_.color),w.opacity.value=_.opacity,_.map&&(w.map.value=_.map,t(_.map,w.mapTransform))}function C(w,_){w.dashSize.value=_.dashSize,w.totalSize.value=_.dashSize+_.gapSize,w.scale.value=_.scale}function te(w,_,ue,ne){w.diffuse.value.copy(_.color),w.opacity.value=_.opacity,w.size.value=_.size*ue,w.scale.value=ne*.5,_.map&&(w.map.value=_.map,t(_.map,w.uvTransform)),_.alphaMap&&(w.alphaMap.value=_.alphaMap,t(_.alphaMap,w.alphaMapTransform)),_.alphaTest>0&&(w.alphaTest.value=_.alphaTest)}function Y(w,_){w.diffuse.value.copy(_.color),w.opacity.value=_.opacity,w.rotation.value=_.rotation,_.map&&(w.map.value=_.map,t(_.map,w.mapTransform)),_.alphaMap&&(w.alphaMap.value=_.alphaMap,t(_.alphaMap,w.alphaMapTransform)),_.alphaTest>0&&(w.alphaTest.value=_.alphaTest)}function le(w,_){w.specular.value.copy(_.specular),w.shininess.value=Math.max(_.shininess,1e-4)}function ee(w,_){_.gradientMap&&(w.gradientMap.value=_.gradientMap)}function J(w,_){w.metalness.value=_.metalness,_.metalnessMap&&(w.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,w.metalnessMapTransform)),w.roughness.value=_.roughness,_.roughnessMap&&(w.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,w.roughnessMapTransform)),_.envMap&&(w.envMapIntensity.value=_.envMapIntensity)}function $(w,_,ue){w.ior.value=_.ior,_.sheen>0&&(w.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),w.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(w.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,w.sheenColorMapTransform)),_.sheenRoughnessMap&&(w.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,w.sheenRoughnessMapTransform))),_.clearcoat>0&&(w.clearcoat.value=_.clearcoat,w.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(w.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,w.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(w.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===s.hsX&&w.clearcoatNormalScale.value.negate())),_.dispersion>0&&(w.dispersion.value=_.dispersion),_.iridescence>0&&(w.iridescence.value=_.iridescence,w.iridescenceIOR.value=_.iridescenceIOR,w.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(w.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,w.iridescenceMapTransform)),_.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),_.transmission>0&&(w.transmission.value=_.transmission,w.transmissionSamplerMap.value=ue.texture,w.transmissionSamplerSize.value.set(ue.width,ue.height),_.transmissionMap&&(w.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,w.transmissionMapTransform)),w.thickness.value=_.thickness,_.thicknessMap&&(w.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=_.attenuationDistance,w.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(w.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(w.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=_.specularIntensity,w.specularColor.value.copy(_.specularColor),_.specularColorMap&&(w.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,w.specularColorMapTransform)),_.specularIntensityMap&&(w.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,w.specularIntensityMapTransform))}function ge(w,_){_.matcap&&(w.matcap.value=_.matcap)}function se(w,_){const ue=n.get(_).light;w.referencePosition.value.setFromMatrixPosition(ue.matrixWorld),w.nearDistance.value=ue.shadow.camera.near,w.farDistance.value=ue.shadow.camera.far}return{refreshFogUniforms:d,refreshMaterialUniforms:x}}function Uo(e,n,t,d){let x={},S={},O=[];const C=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function te(ue,ne){const q=ne.program;d.uniformBlockBinding(ue,q)}function Y(ue,ne){let q=x[ue.id];q===void 0&&(ge(ue),q=le(ue),x[ue.id]=q,ue.addEventListener("dispose",w));const ve=ne.program;d.updateUBOMapping(ue,ve);const he=n.render.frame;S[ue.id]!==he&&(J(ue),S[ue.id]=he)}function le(ue){const ne=ee();ue.__bindingPointIndex=ne;const q=e.createBuffer(),ve=ue.__size,he=ue.usage;return e.bindBuffer(e.UNIFORM_BUFFER,q),e.bufferData(e.UNIFORM_BUFFER,ve,he),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,ne,q),q}function ee(){for(let ue=0;ue<C;ue++)if(O.indexOf(ue)===-1)return O.push(ue),ue;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function J(ue){const ne=x[ue.id],q=ue.uniforms,ve=ue.__cache;e.bindBuffer(e.UNIFORM_BUFFER,ne);for(let he=0,de=q.length;he<de;he++){const be=Array.isArray(q[he])?q[he]:[q[he]];for(let N=0,D=be.length;N<D;N++){const K=be[N];if($(K,he,N,ve)===!0){const we=K.__offset,Ce=Array.isArray(K.value)?K.value:[K.value];let Se=0;for(let Be=0;Be<Ce.length;Be++){const ye=Ce[Be],Ye=se(ye);typeof ye=="number"||typeof ye=="boolean"?(K.__data[0]=ye,e.bufferSubData(e.UNIFORM_BUFFER,we+Se,K.__data)):ye.isMatrix3?(K.__data[0]=ye.elements[0],K.__data[1]=ye.elements[1],K.__data[2]=ye.elements[2],K.__data[3]=0,K.__data[4]=ye.elements[3],K.__data[5]=ye.elements[4],K.__data[6]=ye.elements[5],K.__data[7]=0,K.__data[8]=ye.elements[6],K.__data[9]=ye.elements[7],K.__data[10]=ye.elements[8],K.__data[11]=0):(ye.toArray(K.__data,Se),Se+=Ye.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,we,K.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function $(ue,ne,q,ve){const he=ue.value,de=ne+"_"+q;if(ve[de]===void 0)return typeof he=="number"||typeof he=="boolean"?ve[de]=he:ve[de]=he.clone(),!0;{const be=ve[de];if(typeof he=="number"||typeof he=="boolean"){if(be!==he)return ve[de]=he,!0}else if(be.equals(he)===!1)return be.copy(he),!0}return!1}function ge(ue){const ne=ue.uniforms;let q=0;const ve=16;for(let de=0,be=ne.length;de<be;de++){const N=Array.isArray(ne[de])?ne[de]:[ne[de]];for(let D=0,K=N.length;D<K;D++){const we=N[D],Ce=Array.isArray(we.value)?we.value:[we.value];for(let Se=0,Be=Ce.length;Se<Be;Se++){const ye=Ce[Se],Ye=se(ye),_e=q%ve,ft=_e%Ye.boundary,vt=_e+ft;q+=ft,vt!==0&&ve-vt<Ye.storage&&(q+=ve-vt),we.__data=new Float32Array(Ye.storage/Float32Array.BYTES_PER_ELEMENT),we.__offset=q,q+=Ye.storage}}}const he=q%ve;return he>0&&(q+=ve-he),ue.__size=q,ue.__cache={},this}function se(ue){const ne={boundary:0,storage:0};return typeof ue=="number"||typeof ue=="boolean"?(ne.boundary=4,ne.storage=4):ue.isVector2?(ne.boundary=8,ne.storage=8):ue.isVector3||ue.isColor?(ne.boundary=16,ne.storage=12):ue.isVector4?(ne.boundary=16,ne.storage=16):ue.isMatrix3?(ne.boundary=48,ne.storage=48):ue.isMatrix4?(ne.boundary=64,ne.storage=64):ue.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",ue),ne}function w(ue){const ne=ue.target;ne.removeEventListener("dispose",w);const q=O.indexOf(ne.__bindingPointIndex);O.splice(q,1),e.deleteBuffer(x[ne.id]),delete x[ne.id],delete S[ne.id]}function _(){for(const ue in x)e.deleteBuffer(x[ue]);O=[],x={},S={}}return{bind:te,update:Y,dispose:_}}class Io{constructor(n={}){const{canvas:t=(0,Ei.lP)(),context:d=null,depth:x=!0,stencil:S=!1,alpha:O=!1,antialias:C=!1,premultipliedAlpha:te=!0,preserveDrawingBuffer:Y=!1,powerPreference:le="default",failIfMajorPerformanceCaveat:ee=!1,reversedDepthBuffer:J=!1}=n;this.isWebGLRenderer=!0;let $;if(d!==null){if(typeof WebGLRenderingContext<"u"&&d instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");$=d.getContextAttributes().alpha}else $=O;const ge=new Uint32Array(4),se=new Int32Array(4);let w=null,_=null;const ue=[],ne=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=s.y_p,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let ve=!1;this._outputColorSpace=s.er$;let he=0,de=0,be=null,N=-1,D=null;const K=new b.I,we=new b.I;let Ce=null;const Se=new j.Q(0);let Be=0,ye=t.width,Ye=t.height,_e=1,ft=null,vt=null;const Ut=new b.I(0,0,ye,Ye),Vt=new b.I(0,0,ye,Ye);let hi=!1;const Jt=new H.P;let Me=!1,Ze=!1;const He=new r.k,xt=new c.Vector3,Et=new b.I,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let si=!1;function Bt(){return be===null?_e:1}let V=d;function Zt(E,Z){return t.getContext(E,Z)}try{const E={alpha:!0,depth:x,stencil:S,antialias:C,premultipliedAlpha:te,preserveDrawingBuffer:Y,powerPreference:le,failIfMajorPerformanceCaveat:ee};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${s.sPf}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Le,!1),V===null){const Z="webgl2";if(V=Zt(Z,E),V===null)throw Zt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _t,Ht,pt,ei,st,It,ui,ai,P,v,ie,me,Pe,fe,dt,ze,lt,ht,Ne,$e,Tt,ut,Qe,Dt;function W(){_t=new rn(V),_t.init(),ut=new So(V,_t),Ht=new Yr(V,_t,n,ut),pt=new _o(V,_t),Ht.reversedDepthBuffer&&J&&pt.buffers.depth.setReversed(!0),ei=new $r(V),st=new $a,It=new Eo(V,_t,pt,st,Ht,ut,ei),ui=new tn(q),ai=new nn(q),P=new o(V),Qe=new Xr(V,P),v=new Qr(V,P,ei,Qe),ie=new ts(V,v,P,ei),Ne=new es(V,Ht,It),ze=new jr(st),me=new Ja(q,ui,ai,_t,Ht,Qe,ze),Pe=new Lo(q,st),fe=new to,dt=new oo(_t),ht=new Wr(q,ui,ai,pt,ie,$,te),lt=new po(q,ie,Ht),Dt=new Uo(V,ei,Ht,pt),$e=new Kr(V,_t,ei),Tt=new Jr(V,_t,ei),ei.programs=me.programs,q.capabilities=Ht,q.extensions=_t,q.properties=st,q.renderLists=fe,q.shadowMap=lt,q.state=pt,q.info=ei}W();const Oe=new Po(q,V);this.xr=Oe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const E=_t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(E){E!==void 0&&(_e=E,this.setSize(ye,Ye,!1))},this.getSize=function(E){return E.set(ye,Ye)},this.setSize=function(E,Z,re=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ye=E,Ye=Z,t.width=Math.floor(E*_e),t.height=Math.floor(Z*_e),re===!0&&(t.style.width=E+"px",t.style.height=Z+"px"),this.setViewport(0,0,E,Z)},this.getDrawingBufferSize=function(E){return E.set(ye*_e,Ye*_e).floor()},this.setDrawingBufferSize=function(E,Z,re){ye=E,Ye=Z,_e=re,t.width=Math.floor(E*re),t.height=Math.floor(Z*re),this.setViewport(0,0,E,Z)},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(Ut)},this.setViewport=function(E,Z,re,oe){E.isVector4?Ut.set(E.x,E.y,E.z,E.w):Ut.set(E,Z,re,oe),pt.viewport(K.copy(Ut).multiplyScalar(_e).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,Z,re,oe){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,Z,re,oe),pt.scissor(we.copy(Vt).multiplyScalar(_e).round())},this.getScissorTest=function(){return hi},this.setScissorTest=function(E){pt.setScissorTest(hi=E)},this.setOpaqueSort=function(E){ft=E},this.setTransparentSort=function(E){vt=E},this.getClearColor=function(E){return E.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(E=!0,Z=!0,re=!0){let oe=0;if(E){let Q=!1;if(be!==null){const Ue=be.texture.format;Q=Ue===s.c90||Ue===s.TkQ||Ue===s.ZQM}if(Q){const Ue=be.texture.type,Je=Ue===s.OUM||Ue===s.bkx||Ue===s.cHt||Ue===s.V3x||Ue===s.Wew||Ue===s.gJ2,at=ht.getClearColor(),tt=ht.getClearAlpha(),St=at.r,yt=at.g,mt=at.b;Je?(ge[0]=St,ge[1]=yt,ge[2]=mt,ge[3]=tt,V.clearBufferuiv(V.COLOR,0,ge)):(se[0]=St,se[1]=yt,se[2]=mt,se[3]=tt,V.clearBufferiv(V.COLOR,0,se))}else oe|=V.COLOR_BUFFER_BIT}Z&&(oe|=V.DEPTH_BUFFER_BIT),re&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ht.dispose(),fe.dispose(),dt.dispose(),st.dispose(),ui.dispose(),ai.dispose(),ie.dispose(),Qe.dispose(),Dt.dispose(),me.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Si),Oe.removeEventListener("sessionend",Ss),Di.stop()};function Xe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),ve=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),ve=!1;const E=ei.autoReset,Z=lt.enabled,re=lt.autoUpdate,oe=lt.needsUpdate,Q=lt.type;W(),ei.autoReset=E,lt.enabled=Z,lt.autoUpdate=re,lt.needsUpdate=oe,lt.type=Q}function Le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Te(E){const Z=E.target;Z.removeEventListener("dispose",Te),ot(Z)}function ot(E){Ct(E),st.remove(E)}function Ct(E){const Z=st.get(E).programs;Z!==void 0&&(Z.forEach(function(re){me.releaseProgram(re)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,Z,re,oe,Q,Ue){Z===null&&(Z=Rt);const Je=Q.isMesh&&Q.matrixWorld.determinant()<0,at=No(E,Z,re,oe,Q);pt.setMaterial(oe,Je);let tt=re.index,St=1;if(oe.wireframe===!0){if(tt=v.getWireframeAttribute(re),tt===void 0)return;St=2}const yt=re.drawRange,mt=re.attributes.position;let Ot=yt.start*St,Kt=(yt.start+yt.count)*St;Ue!==null&&(Ot=Math.max(Ot,Ue.start*St),Kt=Math.min(Kt,(Ue.start+Ue.count)*St)),tt!==null?(Ot=Math.max(Ot,0),Kt=Math.min(Kt,tt.count)):mt!=null&&(Ot=Math.max(Ot,0),Kt=Math.min(Kt,mt.count));const ri=Kt-Ot;if(ri<0||ri===1/0)return;Qe.setup(Q,oe,at,re,tt);let $t,Yt=$e;if(tt!==null&&($t=P.get(tt),Yt=Tt,Yt.setIndex($t)),Q.isMesh)oe.wireframe===!0?(pt.setLineWidth(oe.wireframeLinewidth*Bt()),Yt.setMode(V.LINES)):Yt.setMode(V.TRIANGLES);else if(Q.isLine){let gt=oe.linewidth;gt===void 0&&(gt=1),pt.setLineWidth(gt*Bt()),Q.isLineSegments?Yt.setMode(V.LINES):Q.isLineLoop?Yt.setMode(V.LINE_LOOP):Yt.setMode(V.LINE_STRIP)}else Q.isPoints?Yt.setMode(V.POINTS):Q.isSprite&&Yt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)(0,Ei.mc)("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const gt=Q._multiDrawStarts,ti=Q._multiDrawCounts,zt=Q._multiDrawCount,mi=tt?P.get(tt).bytesPerElement:1,Fi=st.get(oe).currentProgram.getUniforms();for(let _i=0;_i<zt;_i++)Fi.setValue(V,"_gl_DrawID",_i),Yt.render(gt[_i]/mi,ti[_i])}else if(Q.isInstancedMesh)Yt.renderInstances(Ot,ri,Q.count);else if(re.isInstancedBufferGeometry){const gt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ti=Math.min(re.instanceCount,gt);Yt.renderInstances(Ot,ri,ti)}else Yt.render(Ot,ri)};function Qt(E,Z,re){E.transparent===!0&&E.side===s.$EB&&E.forceSinglePass===!1?(E.side=s.hsX,E.needsUpdate=!0,Ji(E,Z,re),E.side=s.hB5,E.needsUpdate=!0,Ji(E,Z,re),E.side=s.$EB):Ji(E,Z,re)}this.compile=function(E,Z,re=null){re===null&&(re=E),_=dt.get(re),_.init(Z),ne.push(_),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),E!==re&&E.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const oe=new Set;return E.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let Je=0;Je<Ue.length;Je++){const at=Ue[Je];Qt(at,re,Q),oe.add(at)}else Qt(Ue,re,Q),oe.add(Ue)}),_=ne.pop(),oe},this.compileAsync=function(E,Z,re=null){const oe=this.compile(E,Z,re);return new Promise(Q=>{function Ue(){if(oe.forEach(function(Je){st.get(Je).currentProgram.isReady()&&oe.delete(Je)}),oe.size===0){Q(E);return}setTimeout(Ue,10)}_t.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let kt=null;function Ti(E){kt&&kt(E)}function Si(){Di.stop()}function Ss(){Di.start()}const Di=new f;Di.setAnimationLoop(Ti),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(E){kt=E,Oe.setAnimationLoop(E),E===null?Di.stop():Di.start()},Oe.addEventListener("sessionstart",Si),Oe.addEventListener("sessionend",Ss),this.render=function(E,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ve===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(Z),Z=Oe.getCamera()),E.isScene===!0&&E.onBeforeRender(q,E,Z,be),_=dt.get(E,ne.length),_.init(Z),ne.push(_),He.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Jt.setFromProjectionMatrix(He,s.TdN,Z.reversedDepth),Ze=this.localClippingEnabled,Me=ze.init(this.clippingPlanes,Ze),w=fe.get(E,ue.length),w.init(),ue.push(w),Oe.enabled===!0&&Oe.isPresenting===!0){const Ue=q.xr.getDepthSensingMesh();Ue!==null&&fn(Ue,Z,-1/0,q.sortObjects)}fn(E,Z,0,q.sortObjects),w.finish(),q.sortObjects===!0&&w.sort(ft,vt),si=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,si&&ht.addToRenderList(w,E),this.info.render.frame++,Me===!0&&ze.beginShadows();const re=_.state.shadowsArray;lt.render(re,E,Z),Me===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=w.opaque,Q=w.transmissive;if(_.setupLights(),Z.isArrayCamera){const Ue=Z.cameras;if(Q.length>0)for(let Je=0,at=Ue.length;Je<at;Je++){const tt=Ue[Je];ys(oe,Q,E,tt)}si&&ht.render(E);for(let Je=0,at=Ue.length;Je<at;Je++){const tt=Ue[Je];Ts(w,E,tt,tt.viewport)}}else Q.length>0&&ys(oe,Q,E,Z),si&&ht.render(E),Ts(w,E,Z);be!==null&&de===0&&(It.updateMultisampleRenderTarget(be),It.updateRenderTargetMipmap(be)),E.isScene===!0&&E.onAfterRender(q,E,Z),Qe.resetDefaultState(),N=-1,D=null,ne.pop(),ne.length>0?(_=ne[ne.length-1],Me===!0&&ze.setGlobalState(q.clippingPlanes,_.state.camera)):_=null,ue.pop(),ue.length>0?w=ue[ue.length-1]:w=null};function fn(E,Z,re,oe){if(E.visible===!1)return;if(E.layers.test(Z.layers)){if(E.isGroup)re=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Z);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Jt.intersectsSprite(E)){oe&&Et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(He);const Je=ie.update(E),at=E.material;at.visible&&w.push(E,Je,at,re,Et.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Jt.intersectsObject(E))){const Je=ie.update(E),at=E.material;if(oe&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Et.copy(E.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),Et.copy(Je.boundingSphere.center)),Et.applyMatrix4(E.matrixWorld).applyMatrix4(He)),Array.isArray(at)){const tt=Je.groups;for(let St=0,yt=tt.length;St<yt;St++){const mt=tt[St],Ot=at[mt.materialIndex];Ot&&Ot.visible&&w.push(E,Je,Ot,re,Et.z,mt)}}else at.visible&&w.push(E,Je,at,re,Et.z,null)}}const Ue=E.children;for(let Je=0,at=Ue.length;Je<at;Je++)fn(Ue[Je],Z,re,oe)}function Ts(E,Z,re,oe){const Q=E.opaque,Ue=E.transmissive,Je=E.transparent;_.setupLightsView(re),Me===!0&&ze.setGlobalState(q.clippingPlanes,re),oe&&pt.viewport(K.copy(oe)),Q.length>0&&Qi(Q,Z,re),Ue.length>0&&Qi(Ue,Z,re),Je.length>0&&Qi(Je,Z,re),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ys(E,Z,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new Ri.n(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?s.ix0:s.OUM,minFilter:s.$_I,samples:4,stencilBuffer:S,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:i.pp.workingColorSpace}));const Ue=_.state.transmissionRenderTarget[oe.id],Je=oe.viewport||K;Ue.setSize(Je.z*q.transmissionResolutionScale,Je.w*q.transmissionResolutionScale);const at=q.getRenderTarget(),tt=q.getActiveCubeFace(),St=q.getActiveMipmapLevel();q.setRenderTarget(Ue),q.getClearColor(Se),Be=q.getClearAlpha(),Be<1&&q.setClearColor(16777215,.5),q.clear(),si&&ht.render(re);const yt=q.toneMapping;q.toneMapping=s.y_p;const mt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),Me===!0&&ze.setGlobalState(q.clippingPlanes,oe),Qi(E,re,oe),It.updateMultisampleRenderTarget(Ue),It.updateRenderTargetMipmap(Ue),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Kt=0,ri=Z.length;Kt<ri;Kt++){const $t=Z[Kt],Yt=$t.object,gt=$t.geometry,ti=$t.material,zt=$t.group;if(ti.side===s.$EB&&Yt.layers.test(oe.layers)){const mi=ti.side;ti.side=s.hsX,ti.needsUpdate=!0,As(Yt,re,oe,gt,ti,zt),ti.side=mi,ti.needsUpdate=!0,Ot=!0}}Ot===!0&&(It.updateMultisampleRenderTarget(Ue),It.updateRenderTargetMipmap(Ue))}q.setRenderTarget(at,tt,St),q.setClearColor(Se,Be),mt!==void 0&&(oe.viewport=mt),q.toneMapping=yt}function Qi(E,Z,re){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Ue=E.length;Q<Ue;Q++){const Je=E[Q],at=Je.object,tt=Je.geometry,St=Je.group;let yt=Je.material;yt.allowOverride===!0&&oe!==null&&(yt=oe),at.layers.test(re.layers)&&As(at,Z,re,tt,yt,St)}}function As(E,Z,re,oe,Q,Ue){E.onBeforeRender(q,Z,re,oe,Q,Ue),E.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(q,Z,re,oe,E,Ue),Q.transparent===!0&&Q.side===s.$EB&&Q.forceSinglePass===!1?(Q.side=s.hsX,Q.needsUpdate=!0,q.renderBufferDirect(re,Z,oe,Q,E,Ue),Q.side=s.hB5,Q.needsUpdate=!0,q.renderBufferDirect(re,Z,oe,Q,E,Ue),Q.side=s.$EB):q.renderBufferDirect(re,Z,oe,Q,E,Ue),E.onAfterRender(q,Z,re,oe,Q,Ue)}function Ji(E,Z,re){Z.isScene!==!0&&(Z=Rt);const oe=st.get(E),Q=_.state.lights,Ue=_.state.shadowsArray,Je=Q.state.version,at=me.getParameters(E,Q.state,Ue,Z,re),tt=me.getProgramCacheKey(at);let St=oe.programs;oe.environment=E.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(E.isMeshStandardMaterial?ai:ui).get(E.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&E.envMap===null?Z.environmentRotation:E.envMapRotation,St===void 0&&(E.addEventListener("dispose",Te),St=new Map,oe.programs=St);let yt=St.get(tt);if(yt!==void 0){if(oe.currentProgram===yt&&oe.lightsStateVersion===Je)return Rs(E,at),yt}else at.uniforms=me.getUniforms(E),E.onBeforeCompile(at,q),yt=me.acquireProgram(at,tt),St.set(tt,yt),oe.uniforms=at.uniforms;const mt=oe.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(mt.clippingPlanes=ze.uniform),Rs(E,at),oe.needsLights=Fo(E),oe.lightsStateVersion=Je,oe.needsLights&&(mt.ambientLightColor.value=Q.state.ambient,mt.lightProbe.value=Q.state.probe,mt.directionalLights.value=Q.state.directional,mt.directionalLightShadows.value=Q.state.directionalShadow,mt.spotLights.value=Q.state.spot,mt.spotLightShadows.value=Q.state.spotShadow,mt.rectAreaLights.value=Q.state.rectArea,mt.ltc_1.value=Q.state.rectAreaLTC1,mt.ltc_2.value=Q.state.rectAreaLTC2,mt.pointLights.value=Q.state.point,mt.pointLightShadows.value=Q.state.pointShadow,mt.hemisphereLights.value=Q.state.hemi,mt.directionalShadowMap.value=Q.state.directionalShadowMap,mt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,mt.spotShadowMap.value=Q.state.spotShadowMap,mt.spotLightMatrix.value=Q.state.spotLightMatrix,mt.spotLightMap.value=Q.state.spotLightMap,mt.pointShadowMap.value=Q.state.pointShadowMap,mt.pointShadowMatrix.value=Q.state.pointShadowMatrix),oe.currentProgram=yt,oe.uniformsList=null,yt}function bs(E){if(E.uniformsList===null){const Z=E.currentProgram.getUniforms();E.uniformsList=qi.seqWithValue(Z.seq,E.uniforms)}return E.uniformsList}function Rs(E,Z){const re=st.get(E);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function No(E,Z,re,oe,Q){Z.isScene!==!0&&(Z=Rt),It.resetTextureUnits();const Ue=Z.fog,Je=oe.isMeshStandardMaterial?Z.environment:null,at=be===null?q.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:s.Zr2,tt=(oe.isMeshStandardMaterial?ai:ui).get(oe.envMap||Je),St=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,yt=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),mt=!!re.morphAttributes.position,Ot=!!re.morphAttributes.normal,Kt=!!re.morphAttributes.color;let ri=s.y_p;oe.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ri=q.toneMapping);const $t=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Yt=$t!==void 0?$t.length:0,gt=st.get(oe),ti=_.state.lights;if(Me===!0&&(Ze===!0||E!==D)){const fi=E===D&&oe.id===N;ze.setState(oe,E,fi)}let zt=!1;oe.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==ti.state.version||gt.outputColorSpace!==at||Q.isBatchedMesh&&gt.batching===!1||!Q.isBatchedMesh&&gt.batching===!0||Q.isBatchedMesh&&gt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&gt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&gt.instancing===!1||!Q.isInstancedMesh&&gt.instancing===!0||Q.isSkinnedMesh&&gt.skinning===!1||!Q.isSkinnedMesh&&gt.skinning===!0||Q.isInstancedMesh&&gt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&gt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&gt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&gt.instancingMorph===!1&&Q.morphTexture!==null||gt.envMap!==tt||oe.fog===!0&&gt.fog!==Ue||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==ze.numPlanes||gt.numIntersection!==ze.numIntersection)||gt.vertexAlphas!==St||gt.vertexTangents!==yt||gt.morphTargets!==mt||gt.morphNormals!==Ot||gt.morphColors!==Kt||gt.toneMapping!==ri||gt.morphTargetsCount!==Yt)&&(zt=!0):(zt=!0,gt.__version=oe.version);let mi=gt.currentProgram;zt===!0&&(mi=Ji(oe,Z,Q));let Fi=!1,_i=!1,Gi=!1;const ii=mi.getUniforms(),gi=gt.uniforms;if(pt.useProgram(mi.program)&&(Fi=!0,_i=!0,Gi=!0),oe.id!==N&&(N=oe.id,_i=!0),Fi||D!==E){pt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ii.setValue(V,"projectionMatrix",E.projectionMatrix),ii.setValue(V,"viewMatrix",E.matrixWorldInverse);const pi=ii.map.cameraPosition;pi!==void 0&&pi.setValue(V,xt.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&ii.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&ii.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),D!==E&&(D=E,_i=!0,Gi=!0)}if(Q.isSkinnedMesh){ii.setOptional(V,Q,"bindMatrix"),ii.setOptional(V,Q,"bindMatrixInverse");const fi=Q.skeleton;fi&&(fi.boneTexture===null&&fi.computeBoneTexture(),ii.setValue(V,"boneTexture",fi.boneTexture,It))}Q.isBatchedMesh&&(ii.setOptional(V,Q,"batchingTexture"),ii.setValue(V,"batchingTexture",Q._matricesTexture,It),ii.setOptional(V,Q,"batchingIdTexture"),ii.setValue(V,"batchingIdTexture",Q._indirectTexture,It),ii.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ii.setValue(V,"batchingColorTexture",Q._colorsTexture,It));const vi=re.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&Ne.update(Q,re,mi),(_i||gt.receiveShadow!==Q.receiveShadow)&&(gt.receiveShadow=Q.receiveShadow,ii.setValue(V,"receiveShadow",Q.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(gi.envMap.value=tt,gi.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(gi.envMapIntensity.value=Z.environmentIntensity),_i&&(ii.setValue(V,"toneMappingExposure",q.toneMappingExposure),gt.needsLights&&Oo(gi,Gi),Ue&&oe.fog===!0&&Pe.refreshFogUniforms(gi,Ue),Pe.refreshMaterialUniforms(gi,oe,_e,Ye,_.state.transmissionRenderTarget[E.id]),qi.upload(V,bs(gt),gi,It)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(qi.upload(V,bs(gt),gi,It),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&ii.setValue(V,"center",Q.center),ii.setValue(V,"modelViewMatrix",Q.modelViewMatrix),ii.setValue(V,"normalMatrix",Q.normalMatrix),ii.setValue(V,"modelMatrix",Q.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const fi=oe.uniformsGroups;for(let pi=0,pn=fi.length;pi<pn;pi++){const Li=fi[pi];Dt.update(Li,mi),Dt.bind(Li,mi)}}return mi}function Oo(E,Z){E.ambientLightColor.needsUpdate=Z,E.lightProbe.needsUpdate=Z,E.directionalLights.needsUpdate=Z,E.directionalLightShadows.needsUpdate=Z,E.pointLights.needsUpdate=Z,E.pointLightShadows.needsUpdate=Z,E.spotLights.needsUpdate=Z,E.spotLightShadows.needsUpdate=Z,E.rectAreaLights.needsUpdate=Z,E.hemisphereLights.needsUpdate=Z}function Fo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return be},this.setRenderTargetTextures=function(E,Z,re){const oe=st.get(E);oe.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),st.get(E.texture).__webglTexture=Z,st.get(E.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,Z){const re=st.get(E);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0};const Bo=V.createFramebuffer();this.setRenderTarget=function(E,Z=0,re=0){be=E,he=Z,de=re;let oe=!0,Q=null,Ue=!1,Je=!1;if(E){const tt=st.get(E);if(tt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(V.FRAMEBUFFER,null),oe=!1;else if(tt.__webglFramebuffer===void 0)It.setupRenderTarget(E);else if(tt.__hasExternalTextures)It.rebindTextures(E,st.get(E.texture).__webglTexture,st.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const mt=E.depthTexture;if(tt.__boundDepthTexture!==mt){if(mt!==null&&st.has(mt)&&(E.width!==mt.image.width||E.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(E)}}const St=E.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(Je=!0);const yt=st.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(yt[Z])?Q=yt[Z][re]:Q=yt[Z],Ue=!0):E.samples>0&&It.useMultisampledRTT(E)===!1?Q=st.get(E).__webglMultisampledFramebuffer:Array.isArray(yt)?Q=yt[re]:Q=yt,K.copy(E.viewport),we.copy(E.scissor),Ce=E.scissorTest}else K.copy(Ut).multiplyScalar(_e).floor(),we.copy(Vt).multiplyScalar(_e).floor(),Ce=hi;if(re!==0&&(Q=Bo),pt.bindFramebuffer(V.FRAMEBUFFER,Q)&&oe&&pt.drawBuffers(E,Q),pt.viewport(K),pt.scissor(we),pt.setScissorTest(Ce),Ue){const tt=st.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,tt.__webglTexture,re)}else if(Je){const tt=Z;for(let St=0;St<E.textures.length;St++){const yt=st.get(E.textures[St]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+St,yt.__webglTexture,re,tt)}}else if(E!==null&&re!==0){const tt=st.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,tt.__webglTexture,re)}N=-1},this.readRenderTargetPixels=function(E,Z,re,oe,Q,Ue,Je,at=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=st.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(tt=tt[Je]),tt){pt.bindFramebuffer(V.FRAMEBUFFER,tt);try{const St=E.textures[at],yt=St.format,mt=St.type;if(!Ht.textureFormatReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=E.width-oe&&re>=0&&re<=E.height-Q&&(E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+at),V.readPixels(Z,re,oe,Q,ut.convert(yt),ut.convert(mt),Ue))}finally{const St=be!==null?st.get(be).__webglFramebuffer:null;pt.bindFramebuffer(V.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,Z,re,oe,Q,Ue,Je,at=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=st.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(tt=tt[Je]),tt)if(Z>=0&&Z<=E.width-oe&&re>=0&&re<=E.height-Q){pt.bindFramebuffer(V.FRAMEBUFFER,tt);const St=E.textures[at],yt=St.format,mt=St.type;if(!Ht.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ot=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ot),V.bufferData(V.PIXEL_PACK_BUFFER,Ue.byteLength,V.STREAM_READ),E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+at),V.readPixels(Z,re,oe,Q,ut.convert(yt),ut.convert(mt),0);const Kt=be!==null?st.get(be).__webglFramebuffer:null;pt.bindFramebuffer(V.FRAMEBUFFER,Kt);const ri=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await(0,Ei.je)(V,ri,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ot),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ue),V.deleteBuffer(Ot),V.deleteSync(ri),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,Z=null,re=0){const oe=Math.pow(2,-re),Q=Math.floor(E.image.width*oe),Ue=Math.floor(E.image.height*oe),Je=Z!==null?Z.x:0,at=Z!==null?Z.y:0;It.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Je,at,Q,Ue),pt.unbindTexture()};const Vo=V.createFramebuffer(),zo=V.createFramebuffer();this.copyTextureToTexture=function(E,Z,re=null,oe=null,Q=0,Ue=null){Ue===null&&(Q!==0?((0,Ei.mc)("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let Je,at,tt,St,yt,mt,Ot,Kt,ri;const $t=E.isCompressedTexture?E.mipmaps[Ue]:E.image;if(re!==null)Je=re.max.x-re.min.x,at=re.max.y-re.min.y,tt=re.isBox3?re.max.z-re.min.z:1,St=re.min.x,yt=re.min.y,mt=re.isBox3?re.min.z:0;else{const vi=Math.pow(2,-Q);Je=Math.floor($t.width*vi),at=Math.floor($t.height*vi),E.isDataArrayTexture?tt=$t.depth:E.isData3DTexture?tt=Math.floor($t.depth*vi):tt=1,St=0,yt=0,mt=0}oe!==null?(Ot=oe.x,Kt=oe.y,ri=oe.z):(Ot=0,Kt=0,ri=0);const Yt=ut.convert(Z.format),gt=ut.convert(Z.type);let ti;Z.isData3DTexture?(It.setTexture3D(Z,0),ti=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(It.setTexture2DArray(Z,0),ti=V.TEXTURE_2D_ARRAY):(It.setTexture2D(Z,0),ti=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const zt=V.getParameter(V.UNPACK_ROW_LENGTH),mi=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Fi=V.getParameter(V.UNPACK_SKIP_PIXELS),_i=V.getParameter(V.UNPACK_SKIP_ROWS),Gi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,$t.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,$t.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,St),V.pixelStorei(V.UNPACK_SKIP_ROWS,yt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,mt);const ii=E.isDataArrayTexture||E.isData3DTexture,gi=Z.isDataArrayTexture||Z.isData3DTexture;if(E.isDepthTexture){const vi=st.get(E),fi=st.get(Z),pi=st.get(vi.__renderTarget),pn=st.get(fi.__renderTarget);pt.bindFramebuffer(V.READ_FRAMEBUFFER,pi.__webglFramebuffer),pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let Li=0;Li<tt;Li++)ii&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,st.get(E).__webglTexture,Q,mt+Li),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,st.get(Z).__webglTexture,Ue,ri+Li)),V.blitFramebuffer(St,yt,Je,at,Ot,Kt,Je,at,V.DEPTH_BUFFER_BIT,V.NEAREST);pt.bindFramebuffer(V.READ_FRAMEBUFFER,null),pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||E.isRenderTargetTexture||st.has(E)){const vi=st.get(E),fi=st.get(Z);pt.bindFramebuffer(V.READ_FRAMEBUFFER,Vo),pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,zo);for(let pi=0;pi<tt;pi++)ii?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vi.__webglTexture,Q,mt+pi):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vi.__webglTexture,Q),gi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,fi.__webglTexture,Ue,ri+pi):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fi.__webglTexture,Ue),Q!==0?V.blitFramebuffer(St,yt,Je,at,Ot,Kt,Je,at,V.COLOR_BUFFER_BIT,V.NEAREST):gi?V.copyTexSubImage3D(ti,Ue,Ot,Kt,ri+pi,St,yt,Je,at):V.copyTexSubImage2D(ti,Ue,Ot,Kt,St,yt,Je,at);pt.bindFramebuffer(V.READ_FRAMEBUFFER,null),pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else gi?E.isDataTexture||E.isData3DTexture?V.texSubImage3D(ti,Ue,Ot,Kt,ri,Je,at,tt,Yt,gt,$t.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(ti,Ue,Ot,Kt,ri,Je,at,tt,Yt,$t.data):V.texSubImage3D(ti,Ue,Ot,Kt,ri,Je,at,tt,Yt,gt,$t):E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ue,Ot,Kt,Je,at,Yt,gt,$t.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ue,Ot,Kt,$t.width,$t.height,Yt,$t.data):V.texSubImage2D(V.TEXTURE_2D,Ue,Ot,Kt,Je,at,Yt,gt,$t);V.pixelStorei(V.UNPACK_ROW_LENGTH,zt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mi),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Fi),V.pixelStorei(V.UNPACK_SKIP_ROWS,_i),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Gi),Ue===0&&Z.generateMipmaps&&V.generateMipmap(ti),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,Z,re=null,oe=null,Q=0){return(0,Ei.mc)('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,Z,re,oe,Q)},this.initRenderTarget=function(E){st.get(E).__webglFramebuffer===void 0&&It.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?It.setTextureCube(E,0):E.isData3DTexture?It.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?It.setTexture2DArray(E,0):It.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){he=0,de=0,be=null,pt.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return s.TdN}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=i.pp._getDrawingBufferColorSpace(n),t.unpackColorSpace=i.pp._getUnpackColorSpace()}}},671619:(Lt,Ve,F)=>{F.d(Ve,{Ii:()=>H,Jd:()=>r,Ll:()=>b,_U:()=>c,lx:()=>j});var s=F(116898);function j(f){const o={};for(const m in f){o[m]={};for(const h in f[m]){const l=f[m][h];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),o[m][h]=null):o[m][h]=l.clone():Array.isArray(l)?o[m][h]=l.slice():o[m][h]=l}}return o}function H(f){const o={};for(let m=0;m<f.length;m++){const h=j(f[m]);for(const l in h)o[l]=h[l]}return o}function r(f){const o=[];for(let m=0;m<f.length;m++)o.push(f[m].clone());return o}function c(f){const o=f.getRenderTarget();return o===null?f.outputColorSpace:o.isXRRenderTarget===!0?o.texture.colorSpace:s.pp.workingColorSpace}const b={clone:j,merge:H}},590336:(Lt,Ve,F)=>{F.d(Ve,{k:()=>f});var s=F(472686),j=F(116898);let H;class r{static getDataURL(h,l="image/png"){if(/^data:/i.test(h.src)||typeof HTMLCanvasElement>"u")return h.src;let i;if(h instanceof HTMLCanvasElement)i=h;else{H===void 0&&(H=(0,s.qq)("canvas")),H.width=h.width,H.height=h.height;const a=H.getContext("2d");h instanceof ImageData?a.putImageData(h,0,0):a.drawImage(h,0,0,h.width,h.height),i=H}return i.toDataURL(l)}static sRGBToLinear(h){if(typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap){const l=(0,s.qq)("canvas");l.width=h.width,l.height=h.height;const i=l.getContext("2d");i.drawImage(h,0,0,h.width,h.height);const a=i.getImageData(0,0,h.width,h.height),u=a.data;for(let p=0;p<u.length;p++)u[p]=(0,j.dk)(u[p]/255)*255;return i.putImageData(a,0,0),l}else if(h.data){const l=h.data.slice(0);for(let i=0;i<l.length;i++)l instanceof Uint8Array||l instanceof Uint8ClampedArray?l[i]=Math.floor((0,j.dk)(l[i]/255)*255):l[i]=(0,j.dk)(l[i]);return{data:l,width:h.width,height:h.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),h}}var c=F(774153);let b=0;class f{constructor(h=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b++}),this.uuid=(0,c.lk)(),this.data=h,this.dataReady=!0,this.version=0}getSize(h){const l=this.data;return l instanceof HTMLVideoElement?h.set(l.videoWidth,l.videoHeight,0):l instanceof VideoFrame?h.set(l.displayHeight,l.displayWidth,0):l!==null?h.set(l.width,l.height,l.depth||0):h.set(0,0,0),h}set needsUpdate(h){h===!0&&this.version++}toJSON(h){const l=h===void 0||typeof h=="string";if(!l&&h.images[this.uuid]!==void 0)return h.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let p=0,T=a.length;p<T;p++)a[p].isDataTexture?u.push(o(a[p].image)):u.push(o(a[p]))}else u=o(a);i.url=u}return l||(h.images[this.uuid]=i),i}}function o(m){return typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap?r.getDataURL(m):m.data?{data:Array.from(m.data),width:m.width,height:m.height,type:m.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}},953923:(Lt,Ve,F)=>{F.d(Ve,{g:()=>h});var s=F(251750),j=F(272790),H=F(774153),r=F(237481),c=F(824954),b=F(914164),f=F(590336);let o=0;const m=new c.Vector3;class h extends s.Q{constructor(i=h.DEFAULT_IMAGE,a=h.DEFAULT_MAPPING,u=j.ghU,p=j.ghU,T=j.k6q,I=j.$_I,M=j.GWd,G=j.OUM,k=h.DEFAULT_ANISOTROPY,R=j.jf0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o++}),this.uuid=(0,H.lk)(),this.name="",this.source=new f.k(i),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=u,this.wrapT=p,this.magFilter=T,this.minFilter=I,this.anisotropy=k,this.format=M,this.internalFormat=null,this.type=G,this.offset=new r.I(0,0),this.repeat=new r.I(1,1),this.center=new r.I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new b.d,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=R,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(i&&i.depth&&i.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(m).x}get height(){return this.source.getSize(m).y}get depth(){return this.source.getSize(m).z}get image(){return this.source.data}set image(i=null){this.source.data=i}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(i,a){this.updateRanges.push({start:i,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(i){return this.name=i.name,this.source=i.source,this.mipmaps=i.mipmaps.slice(0),this.mapping=i.mapping,this.channel=i.channel,this.wrapS=i.wrapS,this.wrapT=i.wrapT,this.magFilter=i.magFilter,this.minFilter=i.minFilter,this.anisotropy=i.anisotropy,this.format=i.format,this.internalFormat=i.internalFormat,this.type=i.type,this.offset.copy(i.offset),this.repeat.copy(i.repeat),this.center.copy(i.center),this.rotation=i.rotation,this.matrixAutoUpdate=i.matrixAutoUpdate,this.matrix.copy(i.matrix),this.generateMipmaps=i.generateMipmaps,this.premultiplyAlpha=i.premultiplyAlpha,this.flipY=i.flipY,this.unpackAlignment=i.unpackAlignment,this.colorSpace=i.colorSpace,this.renderTarget=i.renderTarget,this.isRenderTargetTexture=i.isRenderTargetTexture,this.isArrayTexture=i.isArrayTexture,this.userData=JSON.parse(JSON.stringify(i.userData)),this.needsUpdate=!0,this}setValues(i){for(const a in i){const u=i[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const p=this[a];if(p===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}p&&u&&p.isVector2&&u.isVector2||p&&u&&p.isVector3&&u.isVector3||p&&u&&p.isMatrix3&&u.isMatrix3?p.copy(u):this[a]=u}}toJSON(i){const a=i===void 0||typeof i=="string";if(!a&&i.textures[this.uuid]!==void 0)return i.textures[this.uuid];const u={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(i).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(u.userData=this.userData),a||(i.textures[this.uuid]=u),u}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(i){if(this.mapping!==j.UTZ)return i;if(i.applyMatrix3(this.matrix),i.x<0||i.x>1)switch(this.wrapS){case j.GJx:i.x=i.x-Math.floor(i.x);break;case j.ghU:i.x=i.x<0?0:1;break;case j.kTW:Math.abs(Math.floor(i.x)%2)===1?i.x=Math.ceil(i.x)-i.x:i.x=i.x-Math.floor(i.x);break}if(i.y<0||i.y>1)switch(this.wrapT){case j.GJx:i.y=i.y-Math.floor(i.y);break;case j.ghU:i.y=i.y<0?0:1;break;case j.kTW:Math.abs(Math.floor(i.y)%2)===1?i.y=Math.ceil(i.y)-i.y:i.y=i.y-Math.floor(i.y);break}return this.flipY&&(i.y=1-i.y),i}set needsUpdate(i){i===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(i){i===!0&&this.pmremVersion++}}h.DEFAULT_IMAGE=null,h.DEFAULT_MAPPING=j.UTZ,h.DEFAULT_ANISOTROPY=1},472686:(Lt,Ve,F)=>{F.d(Ve,{AQ:()=>H,je:()=>h,lP:()=>f,mc:()=>m,qq:()=>b});function s(a){if(a.length===0)return 1/0;let u=a[0];for(let p=1,T=a.length;p<T;++p)a[p]<u&&(u=a[p]);return u}function j(a){if(a.length===0)return-1/0;let u=a[0];for(let p=1,T=a.length;p<T;++p)a[p]>u&&(u=a[p]);return u}function H(a){for(let u=a.length-1;u>=0;--u)if(a[u]>=65535)return!0;return!1}const r={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function c(a,u){return new r[a](u)}function b(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function f(){const a=b("canvas");return a.style.display="block",a}const o={};function m(a){a in o||(o[a]=!0,console.warn(a))}function h(a,u,p){return new Promise(function(T,I){function M(){switch(a.clientWaitSync(u,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:I();break;case a.TIMEOUT_EXPIRED:setTimeout(M,p);break;default:T()}}setTimeout(M,p)})}function l(a){const u=a.elements;u[2]=.5*u[2]+.5*u[3],u[6]=.5*u[6]+.5*u[7],u[10]=.5*u[10]+.5*u[11],u[14]=.5*u[14]+.5*u[15]}function i(a){const u=a.elements;u[11]===-1?(u[10]=-u[10]-1,u[14]=-u[14]):(u[10]=-u[10],u[14]=-u[14]+1)}}}]);

//# sourceMappingURL=threeJsWebGLRenderer.6256c2bd936216389e01.chunk.js.map