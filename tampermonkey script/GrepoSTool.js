// ==UserScript==
// @name         GrepoSTool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @description  try to take over the world!
// @match        https://*.grepolis.com/game/*
// @updateURL    https://raw.githubusercontent.com/aaltzi/GrepoSTool/main/js/script.js
// @downloadURL	 https://raw.githubusercontent.com/aaltzi/GrepoSTool/main/js/script.js
// @require      https://raw.githubusercontent.com/aaltzi/GrepoSTool/main/js/script.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// ==/UserScript==


/*
   Ejemplo a seguir: https://api.grepodata.com/script/indexer.js?v=467657
   https://api.grepodata.com/script/indexer.css?v=467657
   Página Grepo: https://api.grepodata.com/script/indexer.js?v=467657
*/


(function() {
    'use strict';

    console.log('Inicio Script GrepoSTool');
    /*  https://raw.githubusercontent.com/aaltzi/GrepoSTool/main/js/script.js  */
    // Load remote JS OKEY
    /*
    GM_xmlhttpRequest({
        method : "GET",
        // from other domain than the @match one (.org / .com):
        url : "https://raw.githubusercontent.com/aaltzi/GrepoSTool/main/js/script.js",
        onload : (ev) =>
        {
            let e = document.createElement('script');
            e.innerText = ev.responseText;
            document.head.appendChild(e);
        }
    });
    */


    var CustomStyleJS = document.createElement('script');
    CustomStyleJS.type = 'text/javascript';
    CustomStyleJS.src = 'https://raw.githubusercontent.com/aaltzi/GrepoSTool/main/js/script.js';
    document.getElementsByTagName("head")[0].appendChild(CustomStyleJS);
    /*
    var CustomStyleCSS = document.createElement('link');
    CustomStyleCSS.rel = 'stylesheet';
    CustomStyleCSS.type = 'text/css';
    CustomStyleCSS.href = 'https://api.grepodata.com/script/indexer.css?v=' + rand;
    document.getElementsByTagName("head")[0].appendChild(CustomStyleCSS);
    */
    console.log("Añadido Script GrepoSTool en Tamper/GreaseMonkey");

})();
