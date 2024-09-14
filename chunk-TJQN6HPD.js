import{a as ee,d as te,v as F}from"./chunk-HPGERUHF.js";import{b as ie,c as ne}from"./chunk-VNHB2M7P.js";import{a as E,k as Y,n as Z,o as $}from"./chunk-CVH3MUVM.js";import{$a as d,Ab as N,Ac as K,Bb as T,Cb as w,Db as M,Dc as W,Eb as Q,Ec as X,Fc as z,Gb as R,Lb as P,Lc as J,Ma as c,N as j,Na as g,P as A,Qb as S,Rb as U,Y as B,Ya as q,Z as L,ab as s,bb as a,fb as y,ga as h,gc as G,ha as b,jc as f,kc as H,la as O,lb as m,mb as _,na as C,nb as x,ob as v,pb as I,rb as V,tb as k,ub as p,zb as D}from"./chunk-FUWWX4DR.js";var ae=["input"],le=(i,l,e,n)=>({"p-checkbox p-component":!0,"p-checkbox-checked":i,"p-checkbox-disabled":l,"p-checkbox-focused":e,"p-variant-filled":n}),ce=(i,l,e)=>({"p-highlight":i,"p-disabled":l,"p-focus":e}),re=(i,l,e)=>({"p-checkbox-label":!0,"p-checkbox-label-active":i,"p-disabled":l,"p-checkbox-label-focus":e});function se(i,l){if(i&1&&x(0,"span",10),i&2){let e=p(3);a("ngClass",e.checkboxIcon),s("data-pc-section","icon")}}function ue(i,l){i&1&&x(0,"CheckIcon",11),i&2&&(a("styleClass","p-checkbox-icon"),s("data-pc-section","icon"))}function de(i,l){if(i&1&&(v(0),d(1,se,1,2,"span",8)(2,ue,1,2,"CheckIcon",9),I()),i&2){let e=p(2);c(),a("ngIf",e.checkboxIcon),c(),a("ngIf",!e.checkboxIcon)}}function pe(i,l){}function he(i,l){i&1&&d(0,pe,0,0,"ng-template")}function be(i,l){if(i&1&&(m(0,"span",12),d(1,he,1,0,null,13),_()),i&2){let e=p(2);s("data-pc-section","icon"),c(),a("ngTemplateOutlet",e.checkboxIconTemplate)}}function fe(i,l){if(i&1&&(v(0),d(1,de,3,2,"ng-container",5)(2,be,2,2,"span",7),I()),i&2){let e=p();c(),a("ngIf",!e.checkboxIconTemplate),c(),a("ngIf",e.checkboxIconTemplate)}}function me(i,l){if(i&1){let e=V();m(0,"label",14),k("click",function(t){h(e);let o=p(),r=M(3);return b(o.onClick(t,r,!0))}),Q(1),_()}if(i&2){let e=p();y(e.labelStyleClass),a("ngClass",S(6,re,e.checked(),e.disabled,e.focused)),s("for",e.inputId)("data-pc-section","label"),c(),R(" ",e.label,"")}}var _e={provide:ee,useExisting:j(()=>Ce),multi:!0},Ce=(()=>{class i{cd;injector;config;value;name;disabled;binary;label;ariaLabelledBy;ariaLabel;tabindex;inputId;style;styleClass;labelStyleClass;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new C;onFocus=new C;onBlur=new C;inputViewChild;templates;checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;constructor(e,n,t){this.cd=e,this.injector=n,this.config=t}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this.checkboxIconTemplate=e.template;break}})}onClick(e,n,t){e.preventDefault(),!(this.disabled||this.readonly)&&(this.updateModel(e),t&&n.focus())}updateModel(e){let n,t=this.injector.get(te,null,{optional:!0,self:!0}),o=t&&!this.formControl?t.value:this.model;this.binary?(n=this.checked()?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked()?n=o.filter(r=>!E.equals(r,this.value)):n=o?[...o,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}checked(){return this.binary?this.model===this.trueValue:E.contains(this.value,this.model)}static \u0275fac=function(n){return new(n||i)(g(G),g(O),g(Y))};static \u0275cmp=B({type:i,selectors:[["p-checkbox"]],contentQueries:function(n,t,o){if(n&1&&D(o,Z,4),n&2){let r;T(r=w())&&(t.templates=r)}},viewQuery:function(n,t){if(n&1&&N(ae,5),n&2){let o;T(o=w())&&(t.inputViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",f],binary:[2,"binary","binary",f],label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",H],inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",f],required:[2,"required","required",f],autofocus:[2,"autofocus","autofocus",f],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[P([_e]),q],decls:7,vars:37,consts:[["input",""],[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox","pAutoFocus","",3,"change","focus","blur","value","checked","disabled","readonly","autofocus"],[1,"p-checkbox-box",3,"click","ngClass"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"click","ngClass"]],template:function(n,t){if(n&1){let o=V();m(0,"div",1)(1,"div",2)(2,"input",3,0),k("change",function(u){return h(o),b(t.handleChange(u))})("focus",function(u){return h(o),b(t.onInputFocus(u))})("blur",function(u){return h(o),b(t.onInputBlur(u))}),_()(),m(4,"div",4),k("click",function(u){h(o);let oe=M(3);return b(t.onClick(u,oe,!0))}),d(5,fe,3,2,"ng-container",5),_()(),d(6,me,2,10,"label",6)}n&2&&(y(t.styleClass),a("ngStyle",t.style)("ngClass",U(28,le,t.checked(),t.disabled,t.focused,t.variant==="filled"||t.config.inputStyle()==="filled")),s("data-pc-name","checkbox")("data-pc-section","root"),c(),s("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),c(),a("value",t.value)("checked",t.checked())("disabled",t.disabled)("readonly",t.readonly)("autofocus",t.autofocus),s("id",t.inputId)("name",t.name)("tabindex",t.tabindex)("required",t.required)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("aria-checked",t.checked())("data-pc-section","hiddenInput"),c(2),a("ngClass",S(33,ce,t.checked(),t.disabled,t.focused)),s("data-p-highlight",t.checked())("data-p-disabled",t.disabled)("data-p-focused",t.focused)("data-pc-section","input"),c(),a("ngIf",t.checked()),c(),a("ngIf",t.label))},dependencies:()=>[K,W,z,X,ie,F],styles:[`@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}
`],encapsulation:2,changeDetection:0})}return i})(),De=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=L({type:i});static \u0275inj=A({imports:[J,ne,F,$]})}return i})();export{Ce as a,De as b};