(function () {var q=this;var B={};var F=function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement};var N=function(e){return e instanceof HTMLElement},O=function(e){return e instanceof HTMLInputElement},P=function(e){return e instanceof HTMLFormElement},g=function(e){var t=e.required,r=void 0!==t&&t,n=e.selector,o=e.errorMessage,$=e.scope,l=void 0===$?document:$,i=e.instance;if(n){var s=l.querySelector(n);switch(i){case"HTMLInputElement":if(O(s))return s;throw new Error(o);case"HTMLFormElement":if(P(s))return s;throw new Error(o);default:if(N(s))return s;throw new Error(o);}}else if(r)throw new Error(o)};var Q=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};var R=function(e){var t=e,r=0;if(t.offsetParent)do{r+=t.offsetTop,t=t.offsetParent instanceof HTMLElement?t.offsetParent:null}while(t);return r>=0?r:0};var S=function(e){return"string"==typeof e?e:"number"==typeof e?e.toString():e?"true":"false"};var G=function(e){return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};var T=function(){function t(t){this.view=t,this.currentStep=0,this.alertShown=!1,this.view=t,this.init()}return t.prototype.init=function(){this.view.setMaskHeight(this.currentStep),this.view.setStepsDisplay(this.currentStep),this.view.createHiddenForm(),this.setAlert(),this.setEvents()},t.prototype.setEvents=function(){var t=this,e=function(e){t.navClick(e)},i=function(e){t.handleInput(e)};this.view.next.addEventListener("click",function(){t.nextClick()}),this.view.back&&this.view.back.addEventListener("click",function(){t.backClick()}),this.view.navLinks.forEach(function(t){t.addEventListener("click",e)}),this.view.inputs.forEach(function(t){t.addEventListener("input",i)}),this.view.sendHiddenForm&&this.view.rightArrow.addEventListener("click",function e(){t.currentStep===t.view.hiddenFormStep&&(t.view.submitHiddenForm(),t.view.rightArrow.removeEventListener("click",e))})},t.prototype.nextClick=function(){this.checkRequiredInputs()?(this.currentStep++,1===this.currentStep&&this.view.showElement(this.view.back),this.currentStep===this.view.steps.length?(this.view.submitForm(),this.view.disableButtons(),this.view.hideButtons()):(this.view.goNext(),this.view.setMaskHeight(this.currentStep),this.view.setButtonText(this.currentStep),this.view.setStepsDisplay(this.currentStep)),this.hideAlert(),this.view.scrollTop()):this.showAlert()},t.prototype.backClick=function(){var t=this.currentStep-1;t<0||(this.view.goBack(),this.view.setMaskHeight(t),this.view.setButtonText(t),this.hideAlert(),this.view.scrollTop(),this.currentStep=t)},t.prototype.navClick=function(t){var e=t.currentTarget;if(e instanceof HTMLElement){var i=+e.dataset.msfNav-1;i<this.currentStep&&(this.view.sliderDots[i].click(),this.currentStep=i,this.view.setMaskHeight(this.currentStep),this.view.setButtonText(this.currentStep))}},t.prototype.handleInput=function(t){var e=t.currentTarget;if(F(e)){var i="-";switch(e.type){case"checkbox":if(!(e instanceof HTMLInputElement))break;i=e.checked;var r=e.parentElement;if(!r)break;var n=r.querySelector(".w-checkbox-input");e.checked&&n&&this.view.removeWarningClass(n);break;case"radio":var s=this.view.form.querySelector("input[name=\""+e.name+"\"]:checked");if(!(s instanceof HTMLInputElement))break;i=s.value;var a=e.parentElement;if(!a)break;var h=a.querySelector(".w-radio-input");h&&this.view.removeWarningClass(h);break;default:if(!e.value)break;if("email"===e.type&&!G(e.value))break;i=e.value,this.view.removeWarningClass(e);}this.view.setValues(e,i)}},t.prototype.checkRequiredInputs=function(){var t=this,e=this.view.getInputs(this.currentStep).filter(function(t){return t.required&&Q(t)}),i=0;return e.forEach(function(e){switch(e.type){case"checkbox":if(e.checkValidity()){i++;break}var r=e.parentElement;if(!r)break;var n=r.querySelector(".w-checkbox-input");n&&t.view.addWarningClass(n);break;case"radio":if(e.checkValidity()){i++;break}var s=e.parentElement;if(!s)break;var a=s.querySelector(".w-radio-input");a&&t.view.addWarningClass(a);break;default:if(!e.checkValidity()||"email"===e.type&&!G(e.value)){t.view.addWarningClass(e);break}i++;}}),i===e.length},t.prototype.setAlert=function(){this.view.alertInteraction||this.view.hideElement(this.view.alert,!0)},t.prototype.showAlert=function(){this.alertShown||(this.view.showAlert(),this.alertShown=!0)},t.prototype.hideAlert=function(){this.alertShown&&(this.view.hideAlert(),this.alertShown=!1)},t.prototype.observeSubmitText=function(){var t=this,e=this.view.submitButton;new MutationObserver(function(i){i.forEach(function(i){"attributes"===i.type&&"value"===i.attributeName&&(t.view.next.textContent=e.value)})}).observe(this.view.submitButton,{attributes:!0})},t}();var U=function(){function t(t){var e=t.alertInteraction,i=t.alertSelector,r=t.alertText,n=t.backSelector,s=t.backText,o=t.completedPercentageSelector,a=t.currentStepSelector,l=t.formSelector,h=t.hiddeButtonsOnSubmit,d=void 0===h||h,c=t.hiddenFormStep,u=void 0===c?1:c,p=t.nextSelector,m=t.nextText,f=t.scrollTopOnStepChange,y=void 0!==f&&f,x=t.sendHiddenForm,w=void 0!==x&&x,b=t.warningClass;this.form=g({required:!0,selector:l,errorMessage:"No form was found with the selector "+l,instance:"HTMLFormElement"}),this.next=g({required:!0,selector:p,errorMessage:"No next button was found with the selector "+p}),this.back=g({selector:n,errorMessage:"No back button was found with the selector "+n}),this.alert=g({selector:i,errorMessage:"No alert element was found with the selector "+i}),this.submitButton=g({required:!0,selector:"input[type=\"submit\"]",errorMessage:"No submit button was found in the form, please add one.",scope:this.form,instance:"HTMLInputElement"}),this.currentStepDisplay=g({selector:a,errorMessage:"No alert element was found with the selector "+a}),this.completedPercentageDisplay=g({selector:o,errorMessage:"No alert element was found with the selector "+o}),this.slider=g({required:!0,selector:".w-slider",errorMessage:"No slider found inside the form, please add one.",scope:this.form}),this.mask=this.form.querySelector(".w-slider-mask"),this.steps=this.form.querySelectorAll(".w-slide"),this.rightArrow=this.form.querySelector(".w-slider-arrow-right"),this.leftArrow=this.form.querySelector(".w-slider-arrow-left"),this.sliderDots=this.form.querySelectorAll(".w-slider-dot"),this.navLinks=document.querySelectorAll("[data-msf-nav]"),this.nextText=m||this.next.textContent||"Next",this.backText=s,this.submitText=this.submitButton.value,this.warningClass=b,this.alertText=r,this.alertInteraction=e,this.scrollTopOnStepChange=y,this.hiddeButtonsOnSubmit=d,this.sendHiddenForm=w,this.hiddenFormStep=u>=1?u:1,this.inputs=this.getInputs()}return t.prototype.setMaskHeight=function(t){this.mask.style.height="",this.mask.style.height=this.steps[t].offsetHeight+"px"},t.prototype.getInputs=function(t){var e=t?this.steps[t].querySelectorAll("input, select, textarea"):this.form.querySelectorAll("input, select, textarea");return Array.from(e)},t.prototype.setButtonText=function(t){if(t!==this.steps.length-1){if("string"!=typeof this.nextText||t!==this.steps.length-2){if(Array.isArray(this.nextText)&&this.nextText.length>0)for(var e=function(e){var r=i.nextText.findIndex(function(i){return i.step-1==t-e});if(r>1)return i.next.textContent=i.nextText[r].text,"break"},i=this,r=0;r++;r=t){if("break"===e(r))break}if(this.back&&Array.isArray(this.backText)&&this.backText.length>0){var n=function(e){var i=s.backText.findIndex(function(i){return i.step-1==t-e});if(i>1)return s.back.textContent=s.backText[i].text,"break"},s=this;for(r=0;r++;r=t){if("break"===n(r))break}}}else this.next.textContent=this.nextText;}else this.next.textContent=this.submitText},t.prototype.goNext=function(){this.rightArrow.click()},t.prototype.goBack=function(){this.back&&this.leftArrow.click()},t.prototype.submitForm=function(){this.submitButton.click()},t.prototype.submitHiddenForm=function(){this.sendHiddenForm&&this.hiddenSubmitButton.click()},t.prototype.addWarningClass=function(t){this.warningClass&&t.classList.add(this.warningClass)},t.prototype.removeWarningClass=function(t){this.warningClass&&t.classList.remove(this.warningClass)},t.prototype.hideElement=function(t,e){if(void 0===e&&(e=!1),t){if("all 0s ease 0s"===getComputedStyle(t).transition&&(t.style.transition="opacity 0.2s ease"),e){t.addEventListener("transitionend",function e(){t.style.display="none",t.removeEventListener("transitionend",e)})}t.style.opacity="0",t.style.pointerEvents="none"}},t.prototype.showElement=function(t,e){void 0===e&&(e=!1),t&&(e&&(t.style.display="block"),requestAnimationFrame(function(){t.style.opacity="",t.style.pointerEvents=""}))},t.prototype.disableButtons=function(){this.next.style.pointerEvents="none",this.back&&(this.back.style.pointerEvents="none"),this.navLinks.forEach(function(t){return t.style.pointerEvents="none"})},t.prototype.hideButtons=function(){this.hiddeButtonsOnSubmit&&(this.hideElement(this.next),this.back&&this.hideElement(this.back))},t.prototype.showAlert=function(){this.alertText&&alert(this.alertText),this.alertInteraction&&this.customAlert(),this.alert&&this.showElement(this.alert,!0)},t.prototype.hideAlert=function(){this.alertInteraction&&this.customAlert(),this.alert&&this.hideElement(this.alert,!0)},t.prototype.customAlert=function(){var t=document.querySelector(this.alertInteraction);t instanceof HTMLElement&&t.click()},t.prototype.scrollTop=function(){this.scrollTopOnStepChange&&window.scrollTo({top:R(this.form),behavior:"smooth"})},t.prototype.setValues=function(t,e){e=S(e);var i=document.querySelector("[data-msf-value=\""+t.id+"\"]");if(i&&(i.textContent=e),t.hasAttribute("data-msf-hidden")){var r=this.hiddenForm.querySelector("#hidden-"+t.id);r instanceof HTMLInputElement&&(r.value=e)}},t.prototype.setStepsDisplay=function(t){this.currentStepDisplay&&(this.currentStepDisplay.textContent=(t+1).toString()),this.completedPercentageDisplay&&(this.completedPercentageDisplay.textContent=(t+1)/this.steps.length*100+"%")},t.prototype.createHiddenForm=function(){var t=this;if(this.sendHiddenForm){var e=this.form.parentElement;if(e)e.insertAdjacentHTML("afterend","\n    <div class=\"w-form\" style=\"display: none;\">\n        <form id=\"msf-hidden-form\" name=\"MSF Hidden Form\" data-name=\"MSF Hidden Form\">\n            <input type=\"submit\" value=\"Submit\" data-wait=\"Please wait...\" />\n        </form>\n    </div>\n    "),this.hiddenForm=e.parentElement?e.parentElement.querySelector("#msf-hidden-form"):document.querySelector("#msf-hidden-form"),this.hiddenSubmitButton=this.hiddenForm.querySelector("input[type=\"submit\"]"),this.form.querySelectorAll("[data-msf-hidden]").forEach(function(e){var i=F(e)?e:e.querySelector("input, select, textarea");if(i&&!t.hiddenForm.querySelector("#hidden-"+e.id)){var r="<input type=\"hidden\" id=\"hidden-"+i.id+"\" name=\""+i.name+"\" data-name=\""+i.name+"\" />";t.hiddenForm.insertAdjacentHTML("beforeend",r)}}),window.Webflow&&window.Webflow.destroy(),window.Webflow&&window.Webflow.ready(),window.Webflow&&window.Webflow.require("ix2").init()}},t}();var V=function(){return function(e){this.view=new U(e),this.controller=new T(this.view)}}();function C(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var X="object"==typeof q&&q&&q.Object===Object&&q;var Y="object"==typeof self&&self&&self.Object===Object&&self,H=X||Y||Function("return this")();var D=function(){return H.Date.now()};var z=H.Symbol;var I=Object.prototype,Z=I.hasOwnProperty,_=I.toString,k=z?z.toStringTag:void 0;function aa($){var r=Z.call($,k),t=$[k];try{$[k]=void 0;var n=!0}catch(o){}var a=_.call($);return n&&(r?$[k]=t:delete $[k]),a}var ba=Object.prototype,ca=ba.toString;function da(t){return ca.call(t)}var ea="[object Null]",fa="[object Undefined]",J=z?z.toStringTag:void 0;function ga($){return null==$?void 0===$?fa:ea:J&&J in Object($)?aa($):da($)}function ha(t){return null!=t&&"object"==typeof t}var ia="[object Symbol]";function ja($){return"symbol"==typeof $||ha($)&&ga($)==ia}var K=NaN,ka=/^\s+|\s+$/g,la=/^[-+]0x[0-9a-f]+$/i,ma=/^0b[01]+$/i,na=/^0o[0-7]+$/i,oa=parseInt;function L($){if("number"==typeof $)return $;if(ja($))return K;if(C($)){var r="function"==typeof $.valueOf?$.valueOf():$;$=C(r)?r+"":r}if("string"!=typeof $)return 0===$?$:+$;$=$.replace(ka,"");var e=ma.test($);return e||na.test($)?oa($.slice(2),e?2:8):la.test($)?K:+$}var pa="Expected a function",qa=Math.max,ra=Math.min;function sa(o,r,t){var i,e,n,$,a,u,v=0,c=!1,f=!1,y=!0;if("function"!=typeof o)throw new TypeError(pa);function W(r){var t=i,n=e;return i=e=void 0,v=r,$=o.apply(n,t)}function m(o){var t=o-u;return void 0===u||t>=r||t<0||f&&o-v>=n}function A(){var o=D();if(m(o))return p(o);a=setTimeout(A,function(o){var t=r-(o-u);return f?ra(t,n-(o-v)):t}(o))}function p(o){return a=void 0,y&&i?W(o):(i=e=void 0,$)}function d(){var o=D(),t=m(o);if(i=arguments,e=this,u=o,t){if(void 0===a)return function(o){return v=o,a=setTimeout(A,r),c?W(o):$}(u);if(f)return clearTimeout(a),a=setTimeout(A,r),W(u)}return void 0===a&&(a=setTimeout(A,r)),$}return r=L(r)||0,C(t)&&(c=!!t.leading,n=(f="maxWait"in t)?qa(L(t.maxWait)||0,r):n,y="trailing"in t?!!t.trailing:y),d.cancel=function(){void 0!==a&&clearTimeout(a),v=0,i=u=e=a=void 0},d.flush=function(){return void 0===a?$:p(D())},d}var E=function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement};var j=function(e,t){switch(t){case"wrong-selector":throw new Error("The element with a selector "+e+" has not been found. Please, check if you've set it correctly.");case"no-parent":throw new Error("The element with a selector "+e+" hasn't got any parent with the [data-logic=\"parent\"] attibute.");case"wrong-action":throw new Error("No action (or wrong action name) has been provided for the "+e+" selector.");case"wrong-operator":throw new Error("The operator of the selector "+e+" is not valid.");}};var ta=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};var M=function(e){return"string"==typeof e?e:"number"==typeof e?e.toString():e?"true":"false"};var ua=function(){function e(e){this.logicList=[],this.submitHiddenInputs=!1,this.checkConditionsOnLoad=!0,Object.assign(this,e),this.store=[],this.init()}return e.prototype.init=function(){var e=this;this.logicList.forEach(function(t){e.addEvents(t),t.actions.forEach(function(t){e.storeInputData(t.selector)})})},e.prototype.addEvents=function(e){var t=this;e.conditions.forEach(function(r){var i=document.querySelector(r.selector);if(E(i)){t.checkConditionsOnLoad&&t.checkConditions(e);var o=sa(t.checkConditions.bind(t),200),a=["email","number","password","search","tel","text","textarea","url"];i.addEventListener("input",function(){a.includes(i.type)?o(e):t.checkConditions(e)})}else j(r.selector,"wrong-selector")})},e.prototype.storeInputData=function(e){var t=this;if("custom"!==e){var r=document.querySelector(e);if(r)this.getTargets(r).forEach(function(r){var i=r.closest("[data-logic=\"parent\"]");if(i instanceof HTMLElement){var o={element:r,visible:ta(r),required:r.required,disabled:r.disabled,parent:i};-1===t.store.findIndex(function(e){return e.element===r})&&t.store.push(o)}else j(e,"no-parent")});else j(e,"wrong-selector")}},e.prototype.checkConditions=function(e){for(var t=this,r=e.conditions,i=e.operator,o=void 0===i?"and":i,a=e.actions,n=!1,s=0,c=r;s<c.length;s++){var u=c[s],d=document.querySelector(u.selector);if(!E(d))return void j(u.selector,"wrong-selector");var l=M("checkbox"===d.type?d.checked:d.value),p=M(u.value);switch(u.operator){case"equal":n=l===p;break;case"not-equal":n=l!==p;break;case"contain":n=!!l.includes(p);break;case"not-contain":n=!l.includes(p);break;case"greater":n=+l>+p;break;case"greater-equal":n=+l>=+p;break;case"less":n=+l<+p;break;case"less-equal":n=+l<=+p;break;case"empty":n=0===l.length;break;case"filled":n=l.length>0;break;default:j(u.selector,"wrong-operator");}if("and"===o&&!n)break;if("or"===o&&n)break}n&&a.forEach(function(e){t.triggerAction(e)})},e.prototype.triggerAction=function(e){var t=this,r=e.selector,i=e.action,o=e.clear,a=void 0!==o&&o;if("custom"!==r){var n=document.querySelector(r);if(n){var s=this.getTargets(n),c=[];s.forEach(function(e){var o=t.getStoredData(e),n=o.visible,s=o.required,u=o.disabled,d=o.parent;if(("show"!==i||!n)&&("hide"!==i||n)&&("enable"!==i||u)&&("disable"!==i||!u)&&("require"!==i||!s)&&("unrequire"!==i||s)){var l=!c.includes(d),p=!1;switch(l&&(p=t.triggerInteraction({parent:d,action:i}),c.push(d)),i){case"show":t.showInput(e,d,p,l,s,u);break;case"hide":t.hideInput(e,d,p,l);break;case"enable":t.enableInput(e,n);break;case"disable":t.disableInput(e,n);break;case"require":t.requireInput(e,n);break;case"unrequire":t.unrequireInput(e,n);break;default:j(r,"wrong-action");}a&&t.clearInput(e)}})}else j(r,"wrong-selector")}else this.triggerInteraction({action:i,custom:!0})},e.prototype.showInput=function(e,t,r,i,o,a){!r&&i&&(t.style.display="block"),e.required=o,e.disabled=a,this.updateStoredData(e,"visible",!0)},e.prototype.hideInput=function(e,t,r,i){!r&&i&&(t.style.display="none"),this.submitHiddenInputs||(e.disabled=!0),e.required=!1,this.updateStoredData(e,"visible",!1)},e.prototype.enableInput=function(e,t){t&&(e.disabled=!1),this.updateStoredData(e,"disabled",!1)},e.prototype.disableInput=function(e,t){t&&(e.disabled=!0),this.updateStoredData(e,"disabled",!0)},e.prototype.requireInput=function(e,t){t&&(e.required=!0),this.updateStoredData(e,"required",!0)},e.prototype.unrequireInput=function(e,t){t&&(e.required=!1),this.updateStoredData(e,"required",!1)},e.prototype.getTargets=function(e){return E(e)?[e]:Array.from(e.querySelectorAll("input, select, textarea"))},e.prototype.triggerInteraction=function(e){var t=(e.custom?document:e.parent).querySelector("[data-logic=\""+e.action+"\"]");return t instanceof HTMLElement&&(t.click(),!0)},e.prototype.clearInput=function(e){"checkbox"===e.type||"radio"===e.type?e.checked=!1:e.value=""},e.prototype.updateStoredData=function(e,t,r){var i=this.store.findIndex(function(t){return t.element===e});i>-1&&(this.store[i][t]=r)},e.prototype.getStoredData=function(e){return this.store.find(function(t){return t.element===e})},e}();B={MSF:V,Logic:ua};if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=B}else if(typeof define==="function"&&define.amd){define(function(){return B})}else{this["awf"]=B}})();