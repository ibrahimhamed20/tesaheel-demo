import{c as h,l as m}from"./chunk-CFQPMR5X.js";import{O as s,T as i,n}from"./chunk-FUWWX4DR.js";var g={production:!0,URL_API:"https://ecr-api-dev.arrowapp.net/api/",MAP_API_KEY:"AIzaSyCHJMrneh-biBnJLxjuaCAH6z6_KkvVFJQ",countryId:1};var a="admin-auth-token",c="admin-auth-refresh-token",p="admin-auth-permissions",l=(()=>{class r{constructor(){}setAccessToken(t){localStorage.removeItem(a),localStorage.setItem(a,t)}getAccessToken(){return localStorage.getItem(a)}setRefreshToken(t){localStorage.removeItem(c),localStorage.setItem(c,t)}getRefreshToken(){return localStorage.getItem(c)}setPermissions(t){localStorage.removeItem(p),localStorage.setItem(p,JSON.stringify(t))}getPermissions(){let t=localStorage.getItem(p);return t?JSON.parse(t):[]}clearToken(){localStorage.clear()}static \u0275fac=function(e){return new(e||r)};static \u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var A=(()=>{class r{_router;_http;_tokenStorage;api=g.URL_API;constructor(t,e,o){this._router=t,this._http=e,this._tokenStorage=o}get isLoggedIn(){return!!this._tokenStorage.getAccessToken()}login(t){return this._http.post(`${this.api}Users/Login`,t).pipe(n(e=>this.setTokenAndPermissions(e)))}setTokenAndPermissions(t){let e=t.data.granted,o=t.data.token,u=t.data.refreshToken;return this._tokenStorage.setAccessToken(o),this._tokenStorage.setRefreshToken(u),this._tokenStorage.setPermissions(e),{hasToken:!!o,hasPermissions:!!e}}refreshToken(t){return this._http.patch("\u200B/api\u200B/Users\u200B/renew-token",t).pipe(n(e=>this.setTokenAndPermissions(e)))}logout(){this._tokenStorage.clearToken(),this._router.navigateByUrl("/auth/login")}register(t){return this._http.post(`${this.api}Users/Register`,t)}getRoles(){return this._http.get(`${this.api}Role`)}forgotPassword(t){return this._http.post(`${this.api}Users/ForgotPassword`,t)}requestOTP(t){return this._http.post(`${this.api}Users/request-otp`,t)}verifyCode(t){return this._http.post(`${this.api}Users/Verify`,t)}resetPassword(t){return this._http.post(`${this.api}Users/ResetPassword`,t)}static \u0275fac=function(e){return new(e||r)(i(m),i(h),i(l))};static \u0275prov=s({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{g as a,l as b,A as c};
