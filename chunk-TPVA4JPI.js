import{e as w,g as k}from"./chunk-VNHB2M7P.js";import"./chunk-CVH3MUVM.js";import{j as E,m as y,r as M}from"./chunk-CFQPMR5X.js";import{$a as d,Ac as C,Eb as c,Lc as h,Ma as a,Mb as _,Na as x,Nb as b,Qb as v,Y as u,bb as p,hb as l,lb as i,mb as o,nb as t}from"./chunk-FUWWX4DR.js";import"./chunk-4CLCTAJ7.js";var S=(e,n,m)=>({"error-class":e,"access-class":n,"notfound-class":m}),T=()=>["/"];function D(e,n){e&1&&t(0,"img",2)}function F(e,n){e&1&&t(0,"img",3)}function R(e,n){e&1&&t(0,"img",4)}function j(e,n){e&1&&(i(0,"div",12),t(1,"i",13),o(),i(2,"h1",14),c(3,"Error Occured"),o(),i(4,"span",15),c(5,"Requested resource is not available."),o())}function A(e,n){e&1&&(i(0,"div",16),t(1,"i",17),o(),i(2,"h1",18),c(3,"Access Denied"),o(),i(4,"span",15),c(5,"You do not have the necessary permisions. Please contact admins."),o())}function O(e,n){e&1&&t(0,"img",8)}function P(e,n){e&1&&t(0,"img",9)}function B(e,n){e&1&&t(0,"img",10)}var J=(()=>{class e{pageMode="not_found";constructor(m){m.data.subscribe(s=>this.pageMode=s.mode||this.pageMode)}static \u0275fac=function(s){return new(s||e)(x(E))};static \u0275cmp=u({type:e,selectors:[["admin-error"]],standalone:!0,features:[_],decls:14,vars:10,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["src","assets/system/images/access/logo-orange.svg","alt","Access Denied",1,"mb-5","w-6rem","flex-shrink-0"],["src","assets/system/images/notfound/logo-blue.svg","alt","Not Found",1,"mb-5","w-6rem","flex-shrink-0"],["src","assets/system/images/error/logo-error.svg","alt","Error",1,"mb-5","w-6rem","flex-shrink-0"],[3,"ngClass"],[1,"w-full","surface-card","py-8","px-5","sm:px-8","flex","flex-column","align-items-center",2,"border-radius","53px"],[1,"grid","flex","flex-column","align-items-center"],["src","assets/system/images/access/asset-access.svg","alt","Access Denied","width","80%",1,"mb-5"],["src","assets/system/images/notfound/404.png","alt","Not Found","width","80%",1,"mb-5"],["src","assets/system/images/error/asset-error.svg","alt","Error","width","80%",1,"mb-5"],["pButton","","pRipple","","icon","pi pi-arrow-left","label","Go to Dashboard",1,"p-button-text",3,"routerLink"],[1,"flex","justify-content-center","align-items-center","bg-pink-500","border-circle",2,"height","3.2rem","width","3.2rem"],[1,"pi","pi-fw","pi-exclamation-circle","text-2xl","text-white"],[1,"text-900","font-bold","text-5xl","mb-2"],[1,"text-600","mb-5"],[1,"flex","justify-content-center","align-items-center","bg-orange-500","border-circle",2,"width","3.2rem","height","3.2rem"],[1,"text-50","pi","pi-fw","pi-lock","text-2xl"],[1,"text-900","font-bold","text-4xl","lg:text-5xl","mb-2"]],template:function(s,r){if(s&1&&(i(0,"div",0)(1,"div",1),d(2,D,1,0,"img",2)(3,F,1,0,"img",3)(4,R,1,0,"img",4),i(5,"div",5)(6,"div",6)(7,"div",7),d(8,j,6,0)(9,A,6,0)(10,O,1,0,"img",8)(11,P,1,0,"img",9)(12,B,1,0,"img",10),t(13,"button",11),o()()()()()),s&2){let g,f;a(2),l((g=r.pageMode)==="access_denied"?2:g==="not_found"?3:4),a(3),p("ngClass",v(5,S,r.pageMode==="error",r.pageMode==="access_denied",r.pageMode==="not_found")),a(3),l(r.pageMode==="error"?8:r.pageMode==="access_denied"?9:-1),a(2),l((f=r.pageMode)==="access_denied"?10:f==="not_found"?11:12),a(3),p("routerLink",b(9,T))}},dependencies:[h,C,M,y,k,w],styles:[".error-class[_ngcontent-%COMP%]{border-radius:56px;padding:.3rem;background:linear-gradient(180deg,#e91e6366 10%,#2196f300 30%)}.access-class[_ngcontent-%COMP%]{border-radius:56px;padding:.3rem;background:linear-gradient(180deg,#f7953066 10%,#f7953000 30%)}.notfound-class[_ngcontent-%COMP%]{border-radius:56px;padding:.3rem;background:linear-gradient(180deg,#2196f366 10%,#2196f300 30%)}"]})}return e})();export{J as ErrorComponent};