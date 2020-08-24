(function () {function da(a){Object.defineProperty(a,"__esModule",{value:true})}var E=this;var g={};Object.defineProperty(g,"__esModule",{value:!0});var F=(G=void 0,j=g.isFormElement=G,J=g.select=j,K=g.isVisible=J,L=g.getDistanceFromTop=K,g.convertToString=L);g.validateEmail=F;var G=function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement};g.isFormElement=G;var ea=function(e){return e instanceof HTMLElement},fa=function(e){return e instanceof HTMLInputElement},ga=function(e){return e instanceof HTMLFormElement},j=function(e){var t=e.required,r=void 0!==t&&t,o=e.selector,$=e.errorMessage,n=e.scope,l=void 0===n?document:n,i=e.instance;if(o){var s=l.querySelector(o);switch(i){case"HTMLInputElement":if(fa(s))return s;throw new Error($);case"HTMLFormElement":if(ga(s))return s;throw new Error($);default:if(ea(s))return s;throw new Error($);}}else if(r)throw new Error($)};g.select=j;var J=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};g.isVisible=J;var K=function(e){var t=e,r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent instanceof HTMLElement?t.offsetParent:null}while(t);return r>=0?r:0};g.getDistanceFromTop=K;var L=function(e){return"string"==typeof e?e:"number"==typeof e?e.toString():e?"true":"false"};g.convertToString=L,F=function(e){return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},g.validateEmail=F;var M={};function ha(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ia(e,t,i){return t&&S(e.prototype,t),i&&S(e,i),e}Object.defineProperty(M,"__esModule",{value:!0});var ja=function(){function e(t){ha(this,e),this.view=t,this.currentStep=0,this.alertShown=!1,this.view=t,this.init()}return ia(e,[{key:"init",value:function(){this.view.setMaskHeight(this.currentStep),this.view.disableElement(this.view.back),this.view.setButtonText(this.currentStep),this.view.setStepsDisplay(this.currentStep),this.view.createHiddenForm(),this.setAlert(),this.setEvents()}},{key:"setEvents",value:function(){var e=this,t=function(t){e.navClick(t)},i=function(t){e.handleInput(t)};this.view.next.addEventListener("click",function(){e.nextClick()}),this.view.back&&this.view.back.addEventListener("click",function(){e.backClick()}),this.view.navLinks.forEach(function(e){e.addEventListener("click",t)}),this.view.inputs.forEach(function(e){e.addEventListener("input",i)}),this.view.sendHiddenForm&&this.view.rightArrow.addEventListener("click",function t(){e.currentStep===e.view.hiddenFormStep&&(e.view.submitHiddenForm(),e.view.rightArrow.removeEventListener("click",t))})}},{key:"nextClick",value:function(){this.checkRequiredInputs()?(this.currentStep++,1===this.currentStep&&this.view.enableElement(this.view.back),this.currentStep===this.view.steps.length?(this.view.submitForm(),this.view.disableButtons(),this.view.hideButtons()):(this.view.goNext(),this.view.setMaskHeight(this.currentStep),this.view.setButtonText(this.currentStep),this.view.setStepsDisplay(this.currentStep)),this.hideAlert(),this.view.scrollTop()):this.showAlert()}},{key:"backClick",value:function(){var e=this.currentStep-1;e<0||(this.view.goBack(),this.view.setMaskHeight(e),this.view.setButtonText(e),this.view.setStepsDisplay(e),this.hideAlert(),this.view.scrollTop(),this.view.disableElement(this.view.back),this.currentStep=e)}},{key:"navClick",value:function(e){var t=e.currentTarget;if(t instanceof HTMLElement){var i=+t.dataset.msfNav-1;i<this.currentStep&&(this.view.sliderDots[i].click(),this.currentStep=i,this.view.setMaskHeight(this.currentStep),this.view.setButtonText(this.currentStep))}}},{key:"handleInput",value:function(e){var t=e.currentTarget;if(G(t)){var i="-";switch(t.type){case"checkbox":if(!(t instanceof HTMLInputElement))break;i=t.checked;var r=t.parentElement;if(!r)break;var n=r.querySelector(".w-checkbox-input");t.checked&&n&&this.view.removeWarningClass(n);break;case"radio":var s=this.view.form.querySelector("input[name=\"".concat(t.name,"\"]:checked"));if(!(s instanceof HTMLInputElement))break;i=s.value;var a=t.parentElement;if(!a)break;var v=a.querySelector(".w-radio-input");v&&this.view.removeWarningClass(v);break;default:if(!t.value)break;if("email"===t.type&&!F(t.value))break;i=t.value,this.view.removeWarningClass(t);}this.view.setValues(t,i)}}},{key:"checkRequiredInputs",value:function(){var e=this,t=this.view.getInputs(this.currentStep).filter(function(e){return e.required&&J(e)}),i=0;return t.forEach(function(t){switch(t.type){case"checkbox":if(t.checkValidity()){i++;break}var r=t.parentElement;if(!r)break;var n=r.querySelector(".w-checkbox-input");n&&e.view.addWarningClass(n);break;case"radio":if(t.checkValidity()){i++;break}var s=t.parentElement;if(!s)break;var a=s.querySelector(".w-radio-input");a&&e.view.addWarningClass(a);break;default:if(!t.checkValidity()||"email"===t.type&&!F(t.value)){e.view.addWarningClass(t);break}i++;}}),i===t.length}},{key:"setAlert",value:function(){this.view.alertInteraction||this.view.hideElement(this.view.alert,!0)}},{key:"showAlert",value:function(){this.alertShown||(this.view.showAlert(),this.alertShown=!0)}},{key:"hideAlert",value:function(){this.alertShown&&(this.view.hideAlert(),this.alertShown=!1)}},{key:"observeSubmitText",value:function(){var e=this,t=this.view.submitButton;new MutationObserver(function(i){i.forEach(function(i){"attributes"===i.type&&"value"===i.attributeName&&(e.view.next.textContent=t.value)})}).observe(this.view.submitButton,{attributes:!0})}}]),e}(),ka=ja;M.default=ka;var N={};function la(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ma(e,t,i){return t&&T(e.prototype,t),i&&T(e,i),e}Object.defineProperty(N,"__esModule",{value:!0});var na=function(){function e(t){var i,n=t.alertSelector,r=t.alertText,s=t.backSelector,a=t.backText,o=t.completedPercentageSelector,l=t.currentStepSelector,c=t.formSelector,h=t.hiddeButtonsOnSubmit,d=void 0===h||h,u=t.hiddenFormStep,m=void 0===u?1:u,f=t.nextSelector,y=t.nextText,p=t.scrollTopOnStepChange,v=void 0!==p&&p,$=t.sendHiddenForm,w=void 0!==$&&$,b=t.warningClass;la(this,e),this.form=j({required:!0,selector:c,errorMessage:"No form was found with the selector ".concat(c),instance:"HTMLFormElement"}),this.next=j({required:!0,selector:f,errorMessage:"No next button was found with the selector ".concat(f)}),this.back=j({selector:s,errorMessage:"No back button was found with the selector ".concat(s)}),this.alert=j({selector:n,errorMessage:"No alert element was found with the selector ".concat(n)}),this.submitButton=j({required:!0,selector:"input[type=\"submit\"]",errorMessage:"No submit button was found in the form, please add one.",scope:this.form,instance:"HTMLInputElement"}),this.currentStepDisplay=j({selector:l,errorMessage:"No alert element was found with the selector ".concat(l)}),this.completedPercentageDisplay=j({selector:o,errorMessage:"No alert element was found with the selector ".concat(o)}),this.slider=j({required:!0,selector:".w-slider",errorMessage:"No slider found inside the form, please add one.",scope:this.form}),this.mask=this.form.querySelector(".w-slider-mask"),this.steps=this.form.querySelectorAll(".w-slide"),this.rightArrow=this.form.querySelector(".w-slider-arrow-right"),this.leftArrow=this.form.querySelector(".w-slider-arrow-left"),this.sliderDots=this.form.querySelectorAll(".w-slider-dot"),this.navLinks=document.querySelectorAll("[data-msf-nav]"),this.nextText=y||this.next.textContent||"Next",this.backText=a,this.submitText=this.submitButton.value,this.warningClass=b,this.alertText=r,this.alertInteraction=null===(i=this.alert)||void 0===i?void 0:i.querySelector("[data-msf=\"alert\"]"),this.scrollTopOnStepChange=v,this.hiddeButtonsOnSubmit=d,this.sendHiddenForm=w,this.hiddenFormStep=m>=1?m:1,this.inputs=this.getInputs()}return ma(e,[{key:"setMaskHeight",value:function(e){this.mask.style.height="",this.mask.style.height="".concat(this.steps[e].offsetHeight,"px")}},{key:"getInputs",value:function(e){var t="number"==typeof e?this.steps[e].querySelectorAll("input, select, textarea"):this.form.querySelectorAll("input, select, textarea");return Array.from(t)}},{key:"setButtonText",value:function(e){var t=this,i=function(i){var n="back"===i?t.back:t.next,r="back"===i?t.backText:t.nextText;if(n&&Array.isArray(r)&&r.length>0)for(var s=function(t){var i=r.findIndex(function(i){return+i.step-1==e-t});if(i>=0)return n.textContent=r[i].text,"break"},a=0;a<=e;a++){if("break"===s(a))break}};i("back"),e!==this.steps.length-1?"string"!=typeof this.nextText||e!==this.steps.length-2?i("next"):this.next.textContent=this.nextText:this.next.textContent=this.submitText}},{key:"goNext",value:function(){this.rightArrow.click()}},{key:"goBack",value:function(){this.leftArrow.click()}},{key:"submitForm",value:function(){this.submitButton.click()}},{key:"submitHiddenForm",value:function(){this.sendHiddenForm&&this.hiddenSubmitButton.click()}},{key:"addWarningClass",value:function(e){this.warningClass&&e.classList.add(this.warningClass)}},{key:"removeWarningClass",value:function(e){this.warningClass&&e.classList.remove(this.warningClass)}},{key:"hideElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var i=getComputedStyle(e);if("all 0s ease 0s"===i.transition&&(e.style.transition="opacity 0.2s ease"),t&&"none"!==i.display){e.addEventListener("transitionend",function t(){e.style.display="none",e.removeEventListener("transitionend",t)})}e.style.opacity="0",this.disableElement(e)}}},{key:"showElement",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&(i&&(e.style.display="block"),requestAnimationFrame(function(){e.style.opacity="",t.enableElement(e)}))}},{key:"disableElement",value:function(e){e&&(e.style.pointerEvents="none")}},{key:"enableElement",value:function(e){e&&(e.style.pointerEvents="")}},{key:"disableButtons",value:function(){var e=this;this.disableElement(this.next),this.disableElement(this.back),this.navLinks.forEach(function(t){return e.disableElement(t)})}},{key:"hideButtons",value:function(){this.hiddeButtonsOnSubmit&&(this.hideElement(this.next),this.back&&this.hideElement(this.back))}},{key:"showAlert",value:function(){this.alertText&&alert(this.alertText),this.alert&&(this.alertInteraction?this.alertInteraction.click():this.showElement(this.alert,!0))}},{key:"hideAlert",value:function(){this.alert&&(this.alertInteraction?this.alertInteraction.click():this.hideElement(this.alert,!0))}},{key:"scrollTop",value:function(){this.scrollTopOnStepChange&&window.scrollTo({top:K(this.form),behavior:"smooth"})}},{key:"setValues",value:function(e,t){t=L(t);var i=document.querySelector("[data-msf-value=\"".concat(e.id,"\"]"))||document.querySelector("[data-msf-value=\"".concat(e.name,"\"]"));if(i&&(i.textContent=t),e.matches("[data-msf=\"hidden\"]")){var n=this.hiddenForm.querySelector("#hidden-".concat(e.id));n instanceof HTMLInputElement&&(n.value=t)}}},{key:"setStepsDisplay",value:function(e){this.currentStepDisplay&&(this.currentStepDisplay.textContent=(e+1).toString()),this.completedPercentageDisplay&&(this.completedPercentageDisplay.textContent="".concat(Math.round(e/(this.steps.length-1)*100),"%"))}},{key:"createHiddenForm",value:function(){var e=this;if(this.sendHiddenForm){var t=this.form.parentElement;if(t)t.insertAdjacentHTML("afterend","\n    <div class=\"w-form\" style=\"display: none;\">\n        <form id=\"msf-hidden-form\" name=\"MSF Hidden Form\" data-name=\"MSF Hidden Form\">\n            <input type=\"submit\" value=\"Submit\" data-wait=\"Please wait...\" />\n        </form>\n    </div>\n    "),this.hiddenForm=t.parentElement?t.parentElement.querySelector("#msf-hidden-form"):document.querySelector("#msf-hidden-form"),this.hiddenSubmitButton=this.hiddenForm.querySelector("input[type=\"submit\"]"),this.form.querySelectorAll("[data-msf=\"hidden\"]").forEach(function(t){var i=G(t)?t:t.querySelector("input, select, textarea");if(i&&!e.hiddenForm.querySelector("#hidden-".concat(t.id))){var n="<input type=\"hidden\" id=\"hidden-".concat(i.id,"\" name=\"").concat(i.name,"\" data-name=\"").concat(i.name,"\" />");e.hiddenForm.insertAdjacentHTML("beforeend",n)}}),window.Webflow&&window.Webflow.destroy(),window.Webflow&&window.Webflow.ready(),window.Webflow&&window.Webflow.require("ix2").init()}}}]),e}(),oa=na;N.default=oa;var z={};function pa($,e){if(!($ instanceof e))throw new TypeError("Cannot call a class as a function")}var U=z&&z.__importDefault||function($){return $&&$.__esModule?$:{default:$}};Object.defineProperty(z,"__esModule",{value:!0});var qa=U(M),ra=U(N),sa=function $(e){pa(this,$),this.view=new ra.default(e),this.controller=new qa.default(this.view)},ta=sa;z.default=ta;var O={};da(O);function P(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var ua="object"==typeof E&&E&&E.Object===Object&&E;var va="object"==typeof self&&self&&self.Object===Object&&self,V=ua||va||Function("return this")();var Q=function(){return V.Date.now()};var H=V.Symbol;var X=Object.prototype,wa=X.hasOwnProperty,xa=X.toString,B=H?H.toStringTag:void 0;function ya($){var r=wa.call($,B),t=$[B];try{$[B]=void 0;var n=!0}catch(o){}var a=xa.call($);return n&&(r?$[B]=t:delete $[B]),a}var za=Object.prototype,Aa=za.toString;function Ba(t){return Aa.call(t)}var Ca="[object Null]",Da="[object Undefined]",Y=H?H.toStringTag:void 0;function Ea($){return null==$?void 0===$?Da:Ca:Y&&Y in Object($)?ya($):Ba($)}function Fa(t){return null!=t&&"object"==typeof t}var Ga="[object Symbol]";function Ha($){return"symbol"==typeof $||Fa($)&&Ea($)==Ga}var Z=NaN,Ia=/^\s+|\s+$/g,Ja=/^[-+]0x[0-9a-f]+$/i,Ka=/^0b[01]+$/i,La=/^0o[0-7]+$/i,Ma=parseInt;function _($){if("number"==typeof $)return $;if(Ha($))return Z;if(P($)){var r="function"==typeof $.valueOf?$.valueOf():$;$=P(r)?r+"":r}if("string"!=typeof $)return 0===$?$:+$;$=$.replace(Ia,"");var e=Ka.test($);return e||La.test($)?Ma($.slice(2),e?2:8):Ja.test($)?Z:+$}var Na="Expected a function",Oa=Math.max,Pa=Math.min;function Qa(o,r,t){var i,e,n,$,a,u,v=0,c=!1,f=!1,y=!0;if("function"!=typeof o)throw new TypeError(Na);function W(r){var t=i,n=e;return i=e=void 0,v=r,$=o.apply(n,t)}function m(o){var t=o-u;return void 0===u||t>=r||t<0||f&&o-v>=n}function A(){var o=Q();if(m(o))return p(o);a=setTimeout(A,function(o){var t=r-(o-u);return f?Pa(t,n-(o-v)):t}(o))}function p(o){return a=void 0,y&&i?W(o):(i=e=void 0,$)}function d(){var o=Q(),t=m(o);if(i=arguments,e=this,u=o,t){if(void 0===a)return function(o){return v=o,a=setTimeout(A,r),c?W(o):$}(u);if(f)return clearTimeout(a),a=setTimeout(A,r),W(u)}return void 0===a&&(a=setTimeout(A,r)),$}return r=_(r)||0,P(t)&&(c=!!t.leading,n=(f="maxWait"in t)?Oa(_(t.maxWait)||0,r):n,y="trailing"in t?!!t.trailing:y),d.cancel=function(){void 0!==a&&clearTimeout(a),v=0,i=u=e=a=void 0},d.flush=function(){return void 0===a?$:p(Q())},d}O.default=Qa;var k={};Object.defineProperty(k,"__esModule",{value:!0});var I=(C=void 0,q=k.isFormElement=C,R=k.throwError=q,k.isVisible=R);k.convertToString=I;var C=function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement};k.isFormElement=C;var q=function(e,r){switch(r){case"wrong-selector":throw new Error("The element with a selector ".concat(e," has not been found. Please, check if you've set it correctly."));case"no-parent":throw new Error("The element with a selector ".concat(e," hasn't got any parent with the [data-logic=\"parent\"] attibute."));case"wrong-action":throw new Error("No action (or wrong action name) has been provided for the ".concat(e," selector."));case"wrong-operator":throw new Error("The operator of the selector ".concat(e," is not valid."));}};k.throwError=q;var R=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};k.isVisible=R,I=function(e){return"string"==typeof e?e:"number"==typeof e?e.toString():e?"true":"false"},k.convertToString=I;var D={};function Ra(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Sa(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,i=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw i}}}}function Sa(e,r){if(e){if("string"==typeof e)return aa(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?aa(e,r):void 0}}function aa(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function Ta(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function ba(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Ua(e,r,t){return r&&ba(e.prototype,r),t&&ba(e,t),e}var Va=D&&D.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D,"__esModule",{value:!0});var Wa=Va(O),Xa=function(){function e(r){Ta(this,e),this.logicList=[],this.submitHiddenInputs=!1,this.checkConditionsOnLoad=!0,Object.assign(this,r),this.store=[],this.init()}return Ua(e,[{key:"init",value:function(){var e=this;this.logicList.forEach(function(r){e.addEvents(r),r.actions.forEach(function(r){e.storeInputData(r.selector,r.action)})})}},{key:"addEvents",value:function(e){var r=this;e.conditions.forEach(function(t){var a=document.querySelector(t.selector);if(C(a)){r.checkConditionsOnLoad&&r.checkConditions(e);var n=Wa.default(r.checkConditions.bind(r),200),i=["email","number","password","search","tel","text","textarea","url"];a.addEventListener("input",function(){i.includes(a.type)?n(e):r.checkConditions(e)})}else q(t.selector,"wrong-selector")})}},{key:"storeInputData",value:function(e,r){var t=this;if("custom"!==r){var a=document.querySelector(e);if(a instanceof HTMLElement)this.getTargets(a).forEach(function(e){var r={element:e,visible:R(e),required:e.required,disabled:e.disabled};-1===t.store.findIndex(function(r){return r.element===e})&&t.store.push(r)});else q(e,"wrong-selector")}}},{key:"checkConditions",value:function(e){var r,t=this,a=e.conditions,n=e.operator,i=void 0===n?"and":n,o=e.actions,u=!1,s=Ra(a);try{for(s.s();!(r=s.n()).done;){var l=r.value,c=document.querySelector(l.selector);if(!C(c))return void q(l.selector,"wrong-selector");var d=I("checkbox"===c.type?c.checked:c.value),$=I(l.value);switch(l.operator){case"equal":u=d===$;break;case"not-equal":u=d!==$;break;case"contain":u=!!d.includes($);break;case"not-contain":u=!d.includes($);break;case"greater":u=+d>+$;break;case"greater-equal":u=+d>=+$;break;case"less":u=+d<+$;break;case"less-equal":u=+d<=+$;break;case"empty":u=0===d.length;break;case"filled":u=d.length>0;break;default:q(l.selector,"wrong-operator");}if("and"===i&&!u)break;if("or"===i&&u)break}}catch(f){s.e(f)}finally{s.f()}u&&o.forEach(function(e){t.triggerAction(e)})}},{key:"triggerAction",value:function(e){var r=this,t=e.selector,a=e.action,n=e.clear,i=void 0!==n&&n,o=document.querySelector(t);o instanceof HTMLElement?"custom"!==a?this.getTargets(o).forEach(function(e){var n=r.getStoredData(e),u=n.visible,s=n.required,l=n.disabled;if(("show"!==a||!u)&&("hide"!==a||u)&&("enable"!==a||l)&&("disable"!==a||!l)&&("require"!==a||!s)&&("unrequire"!==a||s)){var c=r.triggerInteraction(o,a);switch(a){case"show":r.showInput(e,o,c,s,l);break;case"hide":r.hideInput(e,o,c);break;case"enable":r.enableInput(e,u);break;case"disable":r.disableInput(e,u);break;case"require":r.requireInput(e,u);break;case"unrequire":r.unrequireInput(e,u);break;default:q(t,"wrong-action");}i&&r.clearInput(e)}}):this.triggerInteraction(o,a):q(t,"wrong-selector")}},{key:"showInput",value:function(e,r,t,a,n){t||(r.style.display="block"),e.required=a,e.disabled=n,this.updateStoredData(e,"visible",!0)}},{key:"hideInput",value:function(e,r,t){t||(r.style.display="none"),this.submitHiddenInputs||(e.disabled=!0),e.required=!1,this.updateStoredData(e,"visible",!1)}},{key:"enableInput",value:function(e,r){r&&(e.disabled=!1),this.updateStoredData(e,"disabled",!1)}},{key:"disableInput",value:function(e,r){r&&(e.disabled=!0),this.updateStoredData(e,"disabled",!0)}},{key:"requireInput",value:function(e,r){r&&(e.required=!0),this.updateStoredData(e,"required",!0)}},{key:"unrequireInput",value:function(e,r){r&&(e.required=!1),this.updateStoredData(e,"required",!1)}},{key:"getTargets",value:function(e){return C(e)?[e]:Array.from(e.querySelectorAll("input, select, textarea"))}},{key:"triggerInteraction",value:function(e,r){var t="custom"===r?e:e.querySelector("[data-logic=\"".concat(r,"\"]"));return t instanceof HTMLElement&&(t.click(),!0)}},{key:"clearInput",value:function(e){"checkbox"===e.type||"radio"===e.type?e.checked=!1:e.value=""}},{key:"updateStoredData",value:function(e,r,t){var a=this.store.findIndex(function(r){return r.element===e});a>-1&&(this.store[a][r]=t)}},{key:"getStoredData",value:function(e){return this.store.find(function(r){return r.element===e})}}]),e}(),Ya=Xa;D.default=Ya;var x={},ca=x&&x.__importDefault||function($){return $&&$.__esModule?$:{default:$}};Object.defineProperty(x,"__esModule",{value:!0});var Za=ca(z),$a=ca(D);x={MSF:Za.default,Logic:$a.default};if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=x}else if(typeof define==="function"&&define.amd){define(function(){return x})}else{this["AWF"]=x}})();