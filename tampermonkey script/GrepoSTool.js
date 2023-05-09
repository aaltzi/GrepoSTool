// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    /* Jugadores */
    /* Orden de los datos: $id, $name, $alliance_id, $points, $rank, $towns */
    var urlplayers = 'https://es116.grepolis.com/data/players.txt';

    GM_xmlhttpRequest({
        method: 'GET',
        url: urlplayers,
        onload: function(response) {
            var datos = response.responseText.split('\n').map(function(linea) {
                return linea.split(',');
            });

            console.log(datos);
        }
    });

    /* Combate: */
    /* Orden de los datos: $rank, $player_id, $points */
    var urlcombate = 'http://EsX.grepolis.com/data/player_kills_all.txt';


    /* Ataque: */
    /* Orden de los datos: $rank, $player_id, $points */
    var urlataque = 'http://EsX.grepolis.com/data/player_kills_att.txt';


    /* Defensa: */
    /* Orden de los datos: $rank, $player_id, $points */
    var urldefensa = 'http://EsX.grepolis.com/data/player_kills_def.txt';


    /* Clasificacion Alianzas */
    /* Orden de los datos: $id, $name, $points, $villages, $members, $rank */
    var urlclasificacion = 'http://EsX.grepolis.com/data/alliances.txt';

    /* Alianzas Combate */
    /* Orden de los datos: $rank, alliance_id, $points */
    var urlacombate = 'http://EsX.grepolis.com/data/alliance_kills_all.txt';

    /* Alianzas Ataque */
    /* Orden de los datos: $rank, alliance_id, $points */
    var urlaataque = 'http://EsX.grepolis.com/data/alliance_kills_att.txt';

    /* Alianzas Defensa */
    /* Orden de los datos: $rank, alliance_id, $points */
    var urladefensa = 'http://EsX.grepolis.com/data/alliance_kills_def.txt';


})();
