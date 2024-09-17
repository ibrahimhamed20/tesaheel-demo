import{a as $}from"./chunk-MK37S6PE.js";import{e as B,g as F,m as U}from"./chunk-UOPNTX3M.js";import{d as D}from"./chunk-JNSMYR6G.js";import{g as V}from"./chunk-HPGERUHF.js";import{e as O,f as j,g as L}from"./chunk-VNHB2M7P.js";import{b as x}from"./chunk-TI22M3TN.js";import{s as N,t as I}from"./chunk-CVH3MUVM.js";import{l as R}from"./chunk-CFQPMR5X.js";import{$a as v,J as y,K as _,Lc as A,Ma as l,Mb as k,Na as c,Y as S,_b as E,bb as s,f as P,ga as n,ha as a,lb as u,mb as p,nb as T,rb as C,tb as m,ub as f,v as w,y as M}from"./chunk-FUWWX4DR.js";import{a as b,b as g}from"./chunk-4CLCTAJ7.js";var H={columns:[{field:"name",header:"PRODUCTNAME",type:"label",exported:!1},{field:"category",header:"CATEGORY",type:"label",exported:!0},{field:"brand",header:"BRAND",type:"label",exported:!0},{field:"actions",header:"ACTIONS",type:"actions",exported:!1}],rows:[{name:"Product 1",category:"category",brand:"brand"},{name:"Product 2",category:"category",brand:"brand"},{name:"Product 3",category:"category",brand:"brand"}],rowsPerPage:10,rowsPerPageOptions:[5,10,15,20,25,50,100],selectionMode:"single",rowsActions:["EDIT","DELETE"],actions:["Link"],paginator:!0,dataLoading:"server",locale:"FIELDS."};function z(o,J){if(o&1){let e=C();u(0,"div",4)(1,"p-button",5),m("click",function(){let t=n(e).$implicit,i=f();return a(i.onActionClicked({action:"LINK",data:t}))}),p(),u(2,"p-button",6),m("click",function(){let t=n(e).$implicit,i=f();return a(i.onActionClicked({action:"APPROVE",data:t}))}),p(),u(3,"p-button",7),m("click",function(){let t=n(e).$implicit,i=f();return a(i.onActionClicked({action:"REJECT",data:t}))}),p()()}o&2&&(l(),s("rounded",!0)("outlined",!0),l(),s("rounded",!0)("outlined",!0),l(),s("rounded",!0)("outlined",!0))}var pe=(()=>{class o{_router;_toast;_confirm;_translate;_merchantProducts;_unsubscribeAll=new P;tableConfig;searchControl=new V;breadcrumb;filters={pageNumber:1,pageSize:10};constructor(e,r,t,i,h){this._router=e,this._toast=r,this._confirm=t,this._translate=i,this._merchantProducts=h}ngOnInit(){this.getMerchantProducts(this.filters),this.onSearchData(),this.setBreadcrumb()}setBreadcrumb(){this.breadcrumb=[{icon:"pi pi-home",route:"/"},{label:this._translate.instant("MERCHANTS_PRODUCTS.MERCHANTPRODUCTS")},{label:this._translate.instant("MERCHANTS_PRODUCTS.NAME"),route:"/"}]}onSearchData(){this.searchControl.valueChanges.pipe(w(e=>e.trim()?.length>0),M(400),y(e=>this._merchantProducts.searchForMerchantProduct(e))).subscribe(e=>this.tableConfig.rows=e.data)}onPageChange(e){this.filters={pageSize:e.rows||10,pageNumber:e.page||1},this.getMerchantProducts(this.filters)}onActionClicked(e){switch(e.action){case"APPROVE":this.approveMerchantProduct(e.data);break;case"REJECT":this.rejectMerchantProduct(e.data);break;case"LINK":default:this._router.navigate([`/products/link-products/${e.data.id}`]);break}}getMerchantProducts(e){this._merchantProducts.getMerchantProduct(g(b({},e),{Status:"new"})).pipe(_(this._unsubscribeAll)).subscribe(r=>this.tableConfig=g(b({},H),{rows:r.data.result,totalRecords:r.data.rowCount}))}approveMerchantProduct(e){this._confirm.confirm("confirm").subscribe(r=>{r&&this._merchantProducts.approveProduct({productDefinitionId:e.id,merchantProductStatus:"approved"}).pipe(_(this._unsubscribeAll)).subscribe(t=>{t&&(this._toast.success("Product Aproved Successfully"),this.getMerchantProducts(this.filters))})})}rejectMerchantProduct(e){this._confirm.confirm("warn").subscribe(r=>{r&&this._merchantProducts.rejectProduct({productDefinitionId:e.id,merchantProductStatus:"rejected"}).pipe(_(this._unsubscribeAll)).subscribe(t=>{t&&(this._toast.success("Product Rejected Successfully"),this.getMerchantProducts(this.filters))})})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}static \u0275fac=function(r){return new(r||o)(c(R),c(D),c(U),c(x),c($))};static \u0275cmp=S({type:o,selectors:[["admin-merchantproducts"]],standalone:!0,features:[k],decls:6,vars:2,consts:[["actions",""],[3,"items"],[1,"card"],[3,"actionClicked","onPage","onSearch","config"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-link","severity","warning",1,"mr-2",3,"click","rounded","outlined"],["pRipple","","icon","pi pi-check","severity","primary",1,"mr-2",3,"click","rounded","outlined"],["pButton","","pRipple","","icon","pi pi-times","severity","danger",3,"click","rounded","outlined"]],template:function(r,t){if(r&1){let i=C();T(0,"pos-ui-breadcrumb",1)(1,"br"),u(2,"div",2)(3,"shared-ui-table",3),m("actionClicked",function(d){return n(i),a(t.onActionClicked(d))})("onPage",function(d){return n(i),a(t.onPageChange(d))})("onSearch",function(d){return n(i),a(t.searchControl.patchValue(d))}),v(4,z,4,6,"ng-template",null,0,E),p()()}r&2&&(s("items",t.breadcrumb),l(3),s("config",t.tableConfig))},dependencies:[A,B,L,O,j,I,N,F],encapsulation:2})}return o})();export{pe as a};