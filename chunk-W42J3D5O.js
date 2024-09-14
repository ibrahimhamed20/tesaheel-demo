import{f as d}from"./chunk-FFRWIXDO.js";import{a as e}from"./chunk-QEQCDFPQ.js";import{c as g}from"./chunk-CFQPMR5X.js";import{O as p,T as u,n as s}from"./chunk-FUWWX4DR.js";var o;(function(n){function l(r){return Object.entries(r).filter(([i,a])=>a!=null).map(([i,a])=>`${encodeURIComponent(i)}=${encodeURIComponent(a)}`).join("&")}n.buildQueryParams=l;function t(r){return Object.keys(r).filter(i=>!isNaN(Number(r[i]))).map(i=>({label:i,value:r[i]}))}n.getEnumOptions=t})(o||(o={}));var f=(()=>{class n{_http;http;constructor(t,r){this._http=t,this.http=r}getProducts(t){let r=o.buildQueryParams({"Pagination.PageSize":t.pageSize,"Pagination.PageNumber":t.pageNumber,ClassificationId:t.ClassificationId,Keyword:t.Keyword,BrandId:t.BrandId,CategoryId:t.CategoryId});return this._http.get(`${e.URL_API}Products?${r}`)}deleteProduct(t){return this._http.delete(`${e.URL_API}Products/${t}`)}getCategories(){return this._http.get(`${e.URL_API}Categories`).pipe(s(t=>t.data.result||[]))}getClassifications(){return this._http.get(`${e.URL_API}Classifications`)}getAllBrands(t,r){return this._http.get(`${e.URL_API}Brands?PageSize=${t}&PageNumber=${r}`).pipe(s(i=>i.data.result||[]))}getCountries(){return this._http.get(`${e.URL_API}Addresses/country`)}getTags(){return this._http.get(`${e.URL_API}Tags`)}downloadProdctsAsCsv(){return this.http.get(`${e.URL_API}Products/export/csv`,{responseType:"blob"})}getAllUnits(t,r,i){return this._http.get(`${e.URL_API}Units?Pagination.PageSize=${t}&Pagination.PageNumber=${r}&Keyword=${i}`)}deleteUnit(t){return this._http.delete(`${e.URL_API}Units/${t}`)}addUnit(t){return this._http.post(`${e.URL_API}Units`,t)}editUnit(t){return this._http.put(`${e.URL_API}Units`,t)}getUnitById(t){return this._http.get(`/api/units/${t}`)}getCategoryById(t){return this._http.get(`/api/Categories/${t}`)}getAllCategories(t,r,i){return this._http.get(`${e.URL_API}Categories?Pagination.PageSize=${t}&Pagination.PageNumber=${r}&Keyword=${i}`)}getAllProductCatalog(t,r,i){return this._http.get(`${e.URL_API}Classifications/catalog?Pagination.PageSize=${t}&Pagination.PageNumber=${r}&Keyword=${i}`)}deleteCategory(t){return this._http.delete(`${e.URL_API}Categories/${t}`)}addCategory(t){return this._http.post(`${e.URL_API}Categories`,t)}editCategory(t){return this._http.put(`${e.URL_API}Categories`,t)}blobStoreUrl=`${e.URL_API}BlobsStore/file`;uploadGalaryImage(t){return this._http.post(this.blobStoreUrl,t)}searchVariants(t){return this._http.get(`${e.URL_API}Variants/name?name=${t}`)}deleteVariant(t){return this._http.delete(`${e.URL_API}Variants/${t}`)}static \u0275fac=function(r){return new(r||n)(u(d),u(g))};static \u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();export{o as a,f as b};