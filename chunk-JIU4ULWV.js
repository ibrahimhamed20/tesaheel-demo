import{a as wt}from"./chunk-WXDGWSVQ.js";import{a as xt,b as At,c as Tt,d as Mt,e as Ft,f as kt}from"./chunk-RJI7WMOQ.js";import{a as Ye}from"./chunk-RCTTZAZ2.js";import{a as qe,b as fe}from"./chunk-TJQN6HPD.js";import{a as He}from"./chunk-N42MICWH.js";import{b as U}from"./chunk-5E22V5HI.js";import"./chunk-S7T43SIG.js";import{b as Ke}from"./chunk-XOKCTS6A.js";import{a as We}from"./chunk-3SIZOVNN.js";import"./chunk-BTTMD4YK.js";import{b as je,e as j,g as ue,h as Ge,i as Ve,m as ze,o as $e,q as me}from"./chunk-UOPNTX3M.js";import"./chunk-G3A2VQVD.js";import{d as Z,f as Te}from"./chunk-AQYSGGXC.js";import{m as De,n as ce,q as Ne,r as Re,t as pe,u as Oe,x as Be,z as Ue}from"./chunk-RKSKOFBD.js";import{c as be,e as R,f as ie,g as O,h as Fe,i as ke,k as oe,n as re,r as ne,s as ae,t as le,w as Le,x as de}from"./chunk-HPGERUHF.js";import{f as se,g as B}from"./chunk-VNHB2M7P.js";import{a as N}from"./chunk-QEQCDFPQ.js";import{b as Me,c as ee,d as te}from"./chunk-TI22M3TN.js";import"./chunk-NJC4F6AZ.js";import{n as Ae,o as Q}from"./chunk-CVH3MUVM.js";import{j as x,l as A}from"./chunk-CFQPMR5X.js";import{$a as he,Ac as J,Db as we,Eb as p,Fb as h,Gb as L,Gc as xe,Ib as V,J as w,Jb as z,K as S,Kb as $,Lc as C,Ma as s,Mb as I,Na as d,Nb as X,O as Se,P as W,T as ye,Xb as u,Y as b,Yb as m,Z as K,bb as c,f as E,ga as T,ha as M,lb as n,mb as a,n as Pe,na as Ie,nb as g,rb as G,t as ve,tb as f,ub as q,v as k,vb as H,wb as Y,xb as Ee,y as D}from"./chunk-FUWWX4DR.js";import{a as _,b as P}from"./chunk-4CLCTAJ7.js";var ge={columns:[{field:"classificationName",header:"CLASSIFICATION",type:"label",exported:!1},{field:"freeProdouctCount",header:"PRODUCT_NO",type:"label",exported:!1},{field:"price",header:"PRODUCT_PRICE",type:"label",exported:!1},{field:"freeProdouctCount",header:"FREE_PRODUCT_NO",type:"label",exported:!1},{field:"paidProduct",header:"PAID_PRODUCT",type:"label",exported:!1},{field:"actions",header:"ACTIONS",type:"actions",exported:!1}],rowsPerPage:10,rowsPerPageOptions:[5,10,15,20,25,50,100],selectionMode:"single",rowsActions:["EDIT","DELETE"],dataLoading:"server",locale:"FIELDS.",paginator:!0},Xe={columns:[{field:"catalog",header:"catalog",type:"checkbox",exported:!1},{field:"productName",header:"PRODUCTNAME",type:"label",exported:!1},{field:"categoryName",header:"CATEGORY_NAME",type:"label",exported:!1},{field:"brandName",header:"BRAND_NAME",type:"label",exported:!1}],rowsPerPage:10,dataKey:"productId",rowsPerPageOptions:[5,10,15,20,25,50,100],selectionMode:"single",rowsActions:[],globalFilterFields:["productName","categoryName"],dataLoading:"client",locale:"FIELDS.",paginator:!0},Je={columns:[{field:"catalog",header:"catalog",type:"checkbox",exported:!1},{field:"productName",header:"PRODUCTNAME",type:"label",exported:!1},{field:"categoryName",header:"CATEGORY_NAME",type:"label",exported:!1},{field:"brandName",header:"BRAND_NAME",type:"label",exported:!1}],rowsPerPage:10,rowsPerPageOptions:[5,10,15,20,25,50,100],selectionMode:"single",rowsActions:[],dataKey:"id",globalFilterFields:["productName","categoryName"],dataLoading:"client",locale:"FIELDS.",paginator:!0};var Wt=(()=>{class o{_router;_route;_product;breadcrumb=[{icon:"pi pi-home",route:"/"},{label:"Products"},{label:"Products Catalog",route:"/products/products-catalog"}];_unsubscribeAll=new E;tableConfig;selectedClassification=null;pageSize=10;pageNumber=1;totalRecords=0;first=0;keyword="";searchControl=new O;constructor(e,t,i){this._router=e,this._route=t,this._product=i}ngOnInit(){this.getAllProductCatalog(),this.onSearch(),this.tableConfig=ge}onActionClicked(e){switch(e.action){case"EDIT":this._router.navigate([`/products/add-product-catalog/${e.data.classificationId}`],{relativeTo:this._route});break;default:break}}getAllProductCatalog(){this._product.getAllProductCatalog(this.pageSize,this.pageNumber,this.keyword).pipe(S(this._unsubscribeAll)).subscribe(e=>{this.tableConfig=P(_({},ge),{rows:e.data.map(t=>P(_({},t),{paidProduct:t.numberOfPrdoucts+" Product  "+t.price+" EGP"}))||[],totalRecords:e.data.rowCount,rowsActions:["EDIT"]})})}onPageChange(e){this.first=e.first||0,this.pageSize=e.rows||10,this.pageNumber=e.page||1,this.getAllProductCatalog()}handleSave(e){}onSearch(){this.searchControl.valueChanges.pipe(k(e=>e.trim().length>=0),D(400),w(e=>this._product.getAllProductCatalog(this.pageSize,this.pageNumber,e.trim()))).subscribe(e=>{e&&e.data&&(this.tableConfig=P(_({},ge),{rows:e.data.map(t=>P(_({},t),{paidProduct:t.numberOfPrdoucts+" Product  "+t.price+" EGP"}))||[],totalRecords:e.data.rowCount,rowsActions:["EDIT"]}))})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}static \u0275fac=function(t){return new(t||o)(d(A),d(x),d(U))};static \u0275cmp=b({type:o,selectors:[["admin-products-catalog"]],standalone:!0,features:[I],decls:4,vars:2,consts:[[3,"items"],[3,"actionClicked","onPage","onSearch","config"]],template:function(t,i){t&1&&(g(0,"pos-ui-breadcrumb",0)(1,"br"),n(2,"section")(3,"shared-ui-table",1),f("actionClicked",function(l){return i.onActionClicked(l)})("onPage",function(l){return i.onPageChange(l)})("onSearch",function(l){return i.searchControl.patchValue(l)}),a()()),t&2&&(c("items",i.breadcrumb),s(3),c("config",i.tableConfig))},dependencies:[C,ue,j,ce,me],encapsulation:2})}return o})();var Ze=(()=>{class o{_http;constructor(e){this._http=e}getAllPaidProduct(e,t,i){return this._http.get(`${N.URL_API}Products/paid-product/classification/${e}?PageSize=${i}&PageNumber=${t}`)}getAllFreeProduct(e,t,i){return this._http.get(`${N.URL_API}Products/free-product/classification/${e}?PageSize=${i}&PageNumber=${t}`)}editCatalogInfo(e){return this._http.put(`${N.URL_API}Classifications/catalog-info`,e)}editProductCatalog(e){return this._http.put(`${N.URL_API}Products/free-products`,e)}getCatalogInfoByClassification(e){return this._http.get(`${N.URL_API}Classifications/${e}/catalog-info`)}static \u0275fac=function(t){return new(t||o)(ye(Te))};static \u0275prov=Se({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ci=(()=>{class o{_fb;_catalog;_route;_router;_translate;_toastr;_unsubscribeAll=new E;pageSize=10;pageNumber=1;classId;items=[{label:"All products"},{label:"Selected"}];activeItem;tableConfig;catalogFormGroup;allProductsList=[];selectedProductsList=[];tempSelectedProductsList=[];constructor(e,t,i,r,l,v){this._fb=e,this._catalog=t,this._route=i,this._router=r,this._translate=l,this._toastr=v}ngOnInit(){this.classId=Number(this._route.snapshot.paramMap.get("id")),this.prepareCatalogForm(),this.getCatalogInfoByClassification(),this.activateTab(this.items[0])}prepareCatalogForm(){this.catalogFormGroup=this._fb.group({id:[this.classId],catalogProductCount:[null,be.required],catalogProductCountPrice:[null,be.required]})}getCatalogInfoByClassification(){this._catalog.getCatalogInfoByClassification(Number(this.classId)).subscribe(e=>{this.catalogFormGroup.patchValue(e.data)})}activateTab(e){this.activeItem=e,e.label==="All products"?(this.tableConfig=Xe,this.getAllPaidProduct()):e.label==="Selected"&&(this.tableConfig=Je,this.getAllFreeProduct())}getAllPaidProduct(){this._catalog.getAllPaidProduct(this.classId,this.pageNumber,this.pageSize).pipe(S(this._unsubscribeAll)).subscribe(e=>{let t=e.data.result.map(i=>P(_({},i),{brandName:i.brand?.name,categoryName:i.category?.name}))||[];if(this.activeItem?.label==="All products"){let i=[...this.tempSelectedProductsList,...t],r=Array.from(new Map(i.map(l=>[l.productId,l])).values());this.allProductsList=r,this.tableConfig.rows=[...this.allProductsList],this.tableConfig.totalRecords=this.allProductsList.length}})}getAllFreeProduct(e){this._catalog.getAllFreeProduct(this.classId,this.pageNumber,1e4).pipe(S(this._unsubscribeAll)).subscribe(t=>{let i=t.data.result.map(v=>P(_({},v),{brandName:v.brand?.name,categoryName:v.category?.name}))||[],r=[...this.selectedProductsList,...i],l=Array.from(new Map(r.map(v=>[v.productId,v])).values());this.selectedProductsList=l,e&&e(i),this.activeItem?.label==="Selected"&&(this.tableConfig=P(_({},this.tableConfig),{rows:[...this.selectedProductsList],totalRecords:this.selectedProductsList.length}))})}updateProductLists(e,t,i){let r=e.findIndex(l=>l.productId===i);if(r!==-1){let[l]=e.splice(r,1);t.unshift(l)}}onActionClicked(e){if(e.action==="ROW_SELECTED"){let t=e.data;this.activeItem?.label==="All products"?(this.updateProductLists(this.allProductsList,this.tempSelectedProductsList,t.productId),this.getAllFreeProduct(i=>{this.selectedProductsList=[...new Set([...this.tempSelectedProductsList,...i])],this.tableConfig.rows=[...this.allProductsList]})):this.activeItem?.label==="Selected"&&(this.updateProductLists(this.selectedProductsList,this.tempSelectedProductsList,t.productId),this.getAllFreeProduct(i=>{this.allProductsList=[...new Set([...this.tempSelectedProductsList,...i])],this.tableConfig.rows=[...this.selectedProductsList]})),this.tableConfig.totalRecords=this.tableConfig?.rows?.length}}onPageChange(e){this.pageSize=e.rows||10,this.pageNumber=e.page||1,this.activeItem.label==="All products"&&this.getAllPaidProduct()}save(){let e=this.selectedProductsList.map(i=>i.productId),t={classificationId:this.classId,productIds:e};this._catalog.editCatalogInfo(this.catalogFormGroup.value).pipe(w(()=>this._catalog.editProductCatalog(t))).subscribe(()=>{this._translate.get("GENERAL.ADDED_SUCCESSFULLY",{name:this._translate.instant("FIELDS.CATALOG")}).subscribe(i=>this._toastr.success(i)),this.goBack()})}goBack(){this._router.navigate(["/products/products-catalog"])}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}static \u0275fac=function(t){return new(t||o)(d(ne),d(Ze),d(x),d(A),d(Me),d(Z))};static \u0275cmp=b({type:o,selectors:[["admin-add-edit-product-catalog"]],standalone:!0,features:[I],decls:34,vars:22,consts:[[1,"row"],[1,"col-12"],[1,"flex-box"],[1,"back-action","flex","items-center","gap-2","cursor-pointer",3,"click"],["src","assets/system/icons/back-arrow.png","alt","back-arrow"],[1,"submit-action","flex-box"],[1,"btn","btn-light",3,"click"],[1,"btn","btn-primary",3,"click","disabled"],[1,"w-full","card-details","flex-box"],[1,"title"],[1,"flex-box",3,"formGroup"],["for","catalogProductCountPrice"],["mode","decimal","inputId","withoutgrouping","formControlName","catalogProductCountPrice",1,"w-full",3,"useGrouping","placeholder"],["for","catalogProductCount"],["mode","decimal","inputId","withoutgrouping","formControlName","catalogProductCount",1,"w-full",3,"useGrouping","placeholder"],[1,"w-full"],[3,"activeItemChange","model","activeItem"],[3,"actionClicked","onPage","config"]],template:function(t,i){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),f("click",function(){return i.goBack()}),g(4,"img",4),n(5,"span"),p(6,"Back"),a()(),n(7,"div",5)(8,"button",6),f("click",function(){return i.goBack()}),p(9,"Cancel"),a(),n(10,"button",7),f("click",function(){return i.save()}),p(11,"Save"),a()()()(),n(12,"div",1)(13,"div",8)(14,"div",9),p(15),u(16,"translate"),a(),n(17,"div",10)(18,"div")(19,"label",11),p(20),u(21,"translate"),a(),g(22,"p-inputNumber",12),u(23,"translate"),a(),n(24,"div")(25,"label",13),p(26),u(27,"translate"),a(),g(28,"p-inputNumber",14),u(29,"translate"),a()()()(),n(30,"div",1)(31,"div",15)(32,"p-tabMenu",16),$("activeItemChange",function(l){return z(i.activeItem,l)||(i.activeItem=l),l}),f("activeItemChange",function(l){return i.activateTab(l)}),a(),n(33,"shared-ui-table",17),f("actionClicked",function(l){return i.onActionClicked(l)})("onPage",function(l){return i.onPageChange(l)}),a()()()()),t&2&&(s(10),c("disabled",!i.catalogFormGroup.valid&&i.selectedProductsList.length>0),s(5),h(m(16,12,"FIELDS.PAID_PRODUCTS")),s(2),c("formGroup",i.catalogFormGroup),s(3),L("",m(21,14,"FIELDS.PRICE"),"*"),s(2),c("useGrouping",!1)("placeholder",m(23,16,"FIELDS.PRICE")),s(4),L("",m(27,18,"FIELDS.NO_PRODUCTS"),"*"),s(2),c("useGrouping",!1)("placeholder",m(29,20,"FIELDS.NO_PRODUCTS")),s(4),c("model",i.items),V("activeItem",i.activeItem),s(),c("config",i.tableConfig))},dependencies:[C,Ve,Ge,j,We,te,ee,ae,R,ie,je,Ke,fe,Re,Ne,le,oe,re,de,B],styles:[".flex-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px}.back-action[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:20px;color:#999}.submit-action[_ngcontent-%COMP%]{gap:16px}.submit-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:8px 32px;border-radius:4px;font-weight:500;font-size:16px;line-height:20px;color:#222;border:none;cursor:pointer}.submit-action[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]{background:#ececec;color:#222}.submit-action[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background:#8fc9e9;color:#fff}.card-details[_ngcontent-%COMP%]{background:#fff;padding:16px;border-radius:8px}.card-details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;font-size:19px;line-height:23px;color:#222}"]})}return o})();var it=(()=>{class o{_fb;_product;onFilter=new Ie;filterForm;filterData$;constructor(e,t){this._fb=e,this._product=t}ngOnInit(){this.filterForm=this.initializeForm(),this.filterData$=this.getData()}initializeForm(){return this._fb.group({ClassificationId:[""],BrandId:[""],Unit:[""],CategoryId:[""]})}getData(){return ve({classifications:this._product.getClassifications().pipe(Pe(e=>e.data.classifications)),categories:this._product.getCategories(),brands:this._product.getAllBrands(1e5,1)})}onSubmit(){this.onFilter.emit(this.filterForm.value)}onReset(){this.filterForm.reset(),this.onFilter.emit(this.filterForm.value)}static \u0275fac=function(t){return new(t||o)(d(ne),d(U))};static \u0275cmp=b({type:o,selectors:[["admin-product-filter"]],outputs:{onFilter:"onFilter"},standalone:!0,features:[I],decls:13,vars:15,consts:[[1,"p-fluid","p-formgrid","grid",3,"ngSubmit","formGroup"],[1,"col-12","md:col-3"],["optionLabel","name","optionValue","id","placeholder","Select a Classification","formControlName","ClassificationId","filterBy","name",3,"options","filter"],["optionLabel","name","optionValue","id","placeholder","Select a Brand","formControlName","BrandId","filterBy","name",3,"options","filter"],["optionLabel","name","optionValue","id","placeholder","Select a Category","formControlName","CategoryId","filterBy","name",3,"options","filter"],[1,"col-12","md:col-3","flex","justify-content-end","align-items-center"],["type","submit","label","Filter","severity","success",1,"mr-2",3,"outlined"],["label","Reset","severity","warning",3,"click","outlined"]],template:function(t,i){if(t&1&&(n(0,"form",0),f("ngSubmit",function(){return i.onSubmit()}),n(1,"div",1),g(2,"p-dropdown",2),u(3,"async"),a(),n(4,"div",1),g(5,"p-dropdown",3),u(6,"async"),a(),n(7,"div",1),g(8,"p-dropdown",4),u(9,"async"),a(),n(10,"div",5),g(11,"p-button",6),n(12,"p-button",7),f("click",function(){return i.onReset()}),a()()()),t&2){let r,l,v;c("formGroup",i.filterForm),s(2),c("options",(r=m(3,9,i.filterData$))==null?null:r.classifications)("filter",!0),s(3),c("options",(l=m(6,11,i.filterData$))==null?null:l.brands)("filter",!0),s(3),c("options",(v=m(9,13,i.filterData$))==null?null:v.categories)("filter",!0),s(3),c("outlined",!0),s(),c("outlined",!0)}},dependencies:[C,xe,ce,De,le,ke,R,ie,oe,re,B,se],encapsulation:2,changeDetection:0})}return o})();var _e={columns:[{field:"name",header:"NAME",type:"link",exported:!1,sortable:!0},{field:"sKU",header:"SKU",type:"label",exported:!0,sortable:!0},{field:"unit",header:"Unit",type:"label",exported:!0,sortable:!0},{field:"barcode",header:"Barcode",type:"label",exported:!0,sortable:!0},{field:"cost",header:"Cost",type:"label",exported:!0,sortable:!0},{field:"price",header:"Price",type:"label",exported:!0,sortable:!0},{field:"actions",header:"Actions",type:"actions",exported:!1}],rowsPerPage:10,rowsPerPageOptions:[5,10,15,20,25,50,100],selectionMode:"single",actions:["EXPORT","IMPORT","CREATE"],rowsActions:["EDIT","DELETE"],paginator:!0,dataLoading:"server",locale:"FIELDS.",hasFilters:!0};function ot(o,y){let e=new FileReader;e.onload=t=>{let i=t.target.result;console.log("CSV Data:",i);let r=document.createElement("a"),l=URL.createObjectURL(o);r.href=l,r.download=y,r.click(),URL.revokeObjectURL(l)},e.readAsText(o)}var to=(()=>{class o{_router;_route;_confirm;productService;_popup;_unsubscribeAll=new E;tableConfig;items;currentPage=1;totalRecords=0;first=0;rows=10;breadcrumb=[{icon:"pi pi-home",route:"/"},{label:"Products Management"},{label:"Product",route:"/product"}];searchControl=new O;constructor(e,t,i,r,l){this._router=e,this._route=t,this._confirm=i,this.productService=r,this._popup=l}ngOnInit(){this.getProducts({pageSize:this.rows,pageNumber:this.currentPage}),this.onSearch()}getProducts(e){this.productService.getProducts(e).pipe(S(this._unsubscribeAll)).subscribe(t=>{if(t&&t.data){let i=t.data.result.map(r=>P(_({},r),{unit:r.unit?r.unit.name:"-",classification:r.classification?r.classification.name:"No Classification"}));this.tableConfig=P(_({},_e),{rows:i,totalRecords:t.data.rowCount,rowsActions:["EDIT","DELETE"]}),this.totalRecords=t.data.rowCount}})}deleteProduct(e){this.productService.deleteProduct(e).subscribe({next:()=>{this.getProducts({pageSize:this.rows,pageNumber:this.currentPage})}})}onPageChange(e){this.first=e.first||0,this.rows=e.rows||10,this.currentPage=e.page||1,this.getProducts({pageSize:this.rows,pageNumber:this.currentPage})}exportProducts(){this.productService.downloadProdctsAsCsv().subscribe({next:e=>{ot(e,"products.csv")}})}onActionClicked(e){switch(e.action){case"CREATE":this._router.navigate(["product/id"],{relativeTo:this._route});break;case"DELETE":this._confirm.confirm("delete").subscribe(t=>{t&&e.data?.id&&this.deleteProduct(e.data.id)});break;case"EXPORT":this.exportProducts();break;case"NAVIGATE":this.openProductDetail(e.data);break;default:break}}onFilter(e){console.log(e),this.getProducts({pageSize:this.rows,pageNumber:this.currentPage,ClassificationId:e.ClassificationId,BrandId:e.BrandId,CategoryId:e.CategoryId})}onSearch(){this.searchControl.valueChanges.pipe(k(e=>e.trim().length>=0),D(400),w(e=>this.productService.getProducts({pageSize:this.rows,pageNumber:this.currentPage,Keyword:e.trim()}))).subscribe(e=>{e&&e.data&&(this.tableConfig=P(_({},_e),{rows:e.data.result,totalRecords:e.data.rowCount,rowsActions:["EDIT","DELETE"]}),this.totalRecords=e.data.rowCount)})}openProductDetail(e){this._popup.open(He,{title:"Product Details",position:"right",data:e,width:"70%",closable:!0,customHeader:!1}).afterClosed.subscribe(t=>t&&this.getProducts({pageSize:this.rows,pageNumber:this.currentPage}))}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}static \u0275fac=function(t){return new(t||o)(d(A),d(x),d(ze),d(U),d($e))};static \u0275cmp=b({type:o,selectors:[["admin-product"]],standalone:!0,features:[I],decls:10,vars:2,consts:[[3,"items"],[1,"grid"],[1,"col-12"],[1,"card"],[1,"mb-4"],[3,"actionClicked","onSearch","onPage","config"],["filters-area","",1,"mt-4"],[3,"onFilter"]],template:function(t,i){t&1&&(g(0,"pos-ui-breadcrumb",0)(1,"br"),n(2,"div",1)(3,"div",2)(4,"div",3)(5,"h4",4),p(6,"Product Management"),a(),n(7,"shared-ui-table",5),f("actionClicked",function(l){return i.onActionClicked(l)})("onSearch",function(l){return i.searchControl.patchValue(l)})("onPage",function(l){return i.onPageChange(l)}),n(8,"div",6)(9,"admin-product-filter",7),f("onFilter",function(l){return i.onFilter(l)}),a()()()()()()),t&2&&(c("items",i.breadcrumb),s(7),c("config",i.tableConfig))},dependencies:[C,j,ue,Ue,it,pe,me],encapsulation:2})}return o})();var ut=["*"],rt=(()=>{class o{iconPosition="left";get containerClass(){return{"p-icon-field-left":this.iconPosition==="left","p-icon-field-right":this.iconPosition==="right"}}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["p-iconField"]],inputs:{iconPosition:"iconPosition"},ngContentSelectors:ut,decls:2,vars:1,consts:[[1,"p-icon-field",3,"ngClass"]],template:function(t,i){t&1&&(H(),n(0,"span",0),Y(1),a()),t&2&&c("ngClass",i.containerClass)},dependencies:[J],styles:[`@layer primeng{.p-icon-field{position:relative}}
`],encapsulation:2,changeDetection:0})}return o})(),nt=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=K({type:o});static \u0275inj=W({imports:[C,Q]})}return o})();var ft=["*"],at=(()=>{class o{styleClass;static \u0275fac=function(t){return new(t||o)};static \u0275cmp=b({type:o,selectors:[["p-inputIcon"]],inputs:{styleClass:"styleClass"},ngContentSelectors:ft,decls:2,vars:1,consts:[[1,"p-input-icon",3,"ngClass"]],template:function(t,i){t&1&&(H(),n(0,"span",0),Y(1),a()),t&2&&c("ngClass",i.styleClass)},dependencies:[J],styles:[`@layer primeng{.p-fluid .p-icon-field-left,.p-fluid .p-icon-field-right{width:100%}}
`],encapsulation:2,changeDetection:0})}return o})(),lt=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=K({type:o});static \u0275inj=W({imports:[C,Q]})}return o})();var ht=()=>["name"],bt=()=>({"min-width":"30rem"}),Ct=()=>[5,10,20];function _t(o,y){o&1&&(n(0,"tr")(1,"th"),p(2),u(3,"translate"),a(),n(4,"th"),p(5),u(6,"translate"),a(),n(7,"th"),p(8),u(9,"translate"),a(),n(10,"th"),p(11),u(12,"translate"),a()()),o&2&&(s(2),h(m(3,4,"FIELDS.PRODUCTNAME")),s(3),h(m(6,6,"FIELDS.BARCODE")),s(3),h(m(9,8,"FIELDS.COST")),s(3),h(m(12,10,"FIELDS.PRICE")))}function Pt(o,y){if(o&1){let e=G();n(0,"tr")(1,"td",17)(2,"p-checkbox",18),$("ngModelChange",function(i){let r=T(e).$implicit;return z(r.checked,i)||(r.checked=i),M(i)}),a(),n(3,"span"),p(4),a()(),n(5,"td"),p(6),a(),n(7,"td"),p(8),a(),n(9,"td"),p(10),a()()}if(o&2){let e=y.$implicit,t=q();s(2),V("ngModel",e.checked),c("disabled",t.disabledProducts),s(2),L(" ",e.name," "),s(2),h(e.barCode),s(2),h(e.cost),s(2),h(e.price)}}function vt(o,y){o&1&&(n(0,"tr")(1,"td",19),p(2),u(3,"translate"),a()()),o&2&&(s(2),h(m(3,1,"GENERAL.NODATA")))}function St(o,y){if(o&1){let e=G();n(0,"div",20)(1,"p-iconField",21)(2,"p-inputIcon"),g(3,"i",22),a(),n(4,"input",23,2),u(6,"translate"),f("input",function(){T(e);let i=we(5),r=q();return M(r.searchControl.patchValue(i.value))}),a()()()}o&2&&(s(4),Ee("placeholder",m(6,1,"FIELDS.SEARCH")))}function yt(o,y){o&1&&(n(0,"tr")(1,"th"),p(2),u(3,"translate"),a(),n(4,"th"),p(5),u(6,"translate"),a()()),o&2&&(s(2),h(m(3,2,"FIELDS.PRODUCTNAME")),s(3),h(m(6,4,"FIELDS.BARCODE")))}function It(o,y){if(o&1){let e=G();n(0,"tr")(1,"td",24)(2,"p-checkbox",18),$("ngModelChange",function(i){let r=T(e).$implicit;return z(r.checked,i)||(r.checked=i),M(i)}),a(),n(3,"span"),p(4),a()(),n(5,"td"),p(6),a()()}if(o&2){let e=y.$implicit,t=q();s(2),V("ngModel",e.checked),c("disabled",t.disabledProducts),s(2),L(" ",e.name," "),s(2),h(e.barCode)}}function Et(o,y){o&1&&(n(0,"tr")(1,"td",25),p(2),u(3,"translate"),a()()),o&2&&(s(2),h(m(3,1,"GENERAL.NODATA")))}var xo=(()=>{class o{_router;toaster;activatedRoute;_merchantProducts;_unsubscribeAll=new E;searchControl=new O;merchantProducts=[];products=[];constructor(e,t,i,r){this._router=e,this.toaster=t,this.activatedRoute=i,this._merchantProducts=r}ngOnInit(){let e=+this.activatedRoute.snapshot.params.id;this.getMerchantProductbyId(e),this.onProductsSearch()}getMerchantProductbyId(e){this._merchantProducts.getMerchantProductById(e).pipe(S(this._unsubscribeAll)).subscribe(t=>this.merchantProducts=t.data||[])}onProductsSearch(){this.searchControl.valueChanges.pipe(k(e=>e.trim().length>0),D(400),w(e=>this._merchantProducts.searchForMerchantProduct(e.trim())),S(this._unsubscribeAll)).subscribe(e=>{this.products=e.data||[]})}save(){let e=[{productId:this.products.find(t=>t.checked).id,merchantProductId:this.merchantProducts.find(t=>t.checked).id}];this._merchantProducts.linkProducts({productsToCatalogs:e}).pipe(S(this._unsubscribeAll)).subscribe(()=>{this.toaster.success("Products linked successfully"),this._back()})}get disabledProducts(){return this.merchantProducts.some(e=>e.checked)&&this.products.some(e=>e.checked)}clear(){this.merchantProducts.forEach(e=>e.checked=!1),this.products.forEach(e=>e.checked=!1)}_back=()=>this._router.navigate(["/products/merchant"]);ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}static \u0275fac=function(t){return new(t||o)(d(A),d(Z),d(x),d(Ye))};static \u0275cmp=b({type:o,selectors:[["admin-link-products"]],standalone:!0,features:[I],decls:23,vars:22,consts:[["dt1",""],["dt2",""],["prodsearch",""],[1,"card",2,"border-radius","0"],[1,"grid"],["icon","pi pi-angle-left",1,"p-button-link",3,"onClick","label","text"],[1,"grid","mt-2"],[1,"col-6"],["styleClass","p-datatable-gridlines",3,"value","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["styleClass","p-datatable-gridlines",3,"value","paginator","rows","tableStyle","rowsPerPageOptions"],["pTemplate","caption"],[1,"flex","gap-2","align-items-center","justify-content-end"],["severity","danger",3,"onClick","label","disabled"],["severity","primary",3,"onClick","label","disabled"],[1,"flex","align-items-center","gap-2"],["binary","true",3,"ngModelChange","ngModel","disabled"],["colspan","4"],[1,"flex"],["iconPosition","left",1,"ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text",3,"input","placeholder"],[1,"flex","gap-2","align-items-center"],["colspan","2"]],template:function(t,i){if(t&1){let r=G();n(0,"div",3)(1,"div",4)(2,"p-button",5),u(3,"translate"),f("onClick",function(){return T(r),M(i._back())}),a()(),n(4,"div",6)(5,"div",7)(6,"p-table",8,0),he(8,_t,13,12,"ng-template",9)(9,Pt,11,6,"ng-template",10)(10,vt,4,3,"ng-template",11),a()(),n(11,"div",7)(12,"p-table",12,1),he(14,St,7,3,"ng-template",13)(15,yt,7,6,"ng-template",9)(16,It,7,4,"ng-template",10)(17,Et,4,3,"ng-template",11),a()()(),n(18,"div",14)(19,"p-button",15),u(20,"translate"),f("onClick",function(){return T(r),M(i.clear())}),a(),n(21,"p-button",16),u(22,"translate"),f("onClick",function(){return T(r),M(i.save())}),a()()()}t&2&&(s(2),c("label",m(3,13,"GENERAL.BACK"))("text",!0),s(4),c("value",i.merchantProducts)("globalFilterFields",X(19,ht)),s(6),c("value",i.products)("paginator",!0)("rows",5)("tableStyle",X(20,bt))("rowsPerPageOptions",X(21,Ct)),s(7),c("label",m(20,15,"GENERAL.CLEAR"))("disabled",!i.disabledProducts),s(2),c("label",m(22,17,"GENERAL.SAVE"))("disabled",!i.disabledProducts))},dependencies:[C,ae,R,Fe,Be,Oe,Ae,B,se,fe,qe,pe,nt,rt,lt,at,te,ee,de,Le],encapsulation:2})}return o})();export{Ci as AddEditProductCatalogComponent,Mt as BrandsComponent,At as CategoriesComponent,xt as ClassificationsComponent,xo as LinkProductsComponent,wt as MerchantproductsComponent,to as ProductComponent,Wt as ProductsCatalogComponent,kt as TagsComponent,Ft as UnitsComponent,Tt as VariantsComponent};
