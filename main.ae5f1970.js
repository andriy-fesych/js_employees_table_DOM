parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return r(e)||a(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=e(document.querySelectorAll("th")).slice(0,5);function i(t){for(var n=t.cellIndex,a="happened";"happened"===a;){a="not happened";for(var r=e(document.querySelectorAll("tbody tr")),o=0;o<r.length-1;o++){var c=r[o].cells[n].innerText,i=r[o+1].cells[n].innerText;"Salary"===t.innerText&&(c=+c.replace(/,|\$/gi,""),i=+i.replace(/,|\$/gi,"")),(c>i&&("descending"===t.dataset.sortingOrder||void 0===t.dataset.sortingOrder)||c<i&&"ascending"===t.dataset.sortingOrder)&&(r[o].parentNode.insertBefore(r[o+1],r[o]),a="happened")}}"ascending"===t.dataset.sortingOrder?t.dataset.sortingOrder="descending":t.dataset.sortingOrder="ascending"}document.querySelector("table").addEventListener("click",function(t){c.includes(t.target)?i(t.target):(e(document.querySelectorAll("tbody tr")).forEach(function(e){e.classList.remove("active")}),t.target.closest("tr").className="active")});var l=document.createElement("form");l.className="new-employee-form",l.innerHTML='<label>Name: <input data-qa="name" name="name" type="text" required>\n  </label>\n  <label>Position: <input data-qa="position" name="position"\n  type="text" required></label>\n  <label>Office: \n  <select data-qa="office" name="office" id="cities" required>\n  </select>\n  </label>\n  <label>Age: <input data-qa="age" name="age" type="number" required></label>\n  <label>Salary: <input data-qa="salary" name="salary" type="number" required>\n  </label>\n  <button name="save_to_table">Save to table</button>',document.body.append(l);for(var d=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],u=document.querySelector("#cities"),s=0;s<d.length;s++){var m=document.createElement("option");m.value=m.innerText=d[s],u.add(m)}var p=function(e,t,n,a,r){var o=document.createElement("div"),c=document.createElement("p"),i=document.createElement("h2");o.setAttribute("data-qa","notification"),i.className="title",i.textContent=n,c.innerText=a,o.className="notification ".concat(r),o.style.top="".concat(e,"px"),o.style.right="".concat(t,"px"),o.append(i),o.append(c),document.body.append(o),setTimeout(function(){o.remove()},2e3)};function f(e,t,n){return!(e.length<4||t.length<4||n<18||n>90)}document.body.querySelector("button").addEventListener("click",function(e){e.preventDefault();var t=document.querySelector('[name = "name"]').value,n=document.querySelector('[name = "position"]').value,a=document.querySelector('[name = "age"]').value,r=document.querySelector('[name = "office"]').value,o=document.createElement("tr"),c="$"+Intl.NumberFormat("en-US").format(document.querySelector('[name = "salary"]').value);f(t,n,a)?(o.innerHTML="<td>".concat(t,"</td>\n      <td>").concat(n,"</td>\n      <td>").concat(r,"</td>\n      <td>").concat(a,"</td>\n      <td>").concat(c,"</td>"),document.querySelector("table").lastElementChild.previousElementSibling.append(o),p(700,10,"Title of Succes message","Message example.\n Notification should contain title and description.","success")):p(700,10,"Title of Error message","Message example.\n Notification should contain title and description.","error")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ae5f1970.js.map