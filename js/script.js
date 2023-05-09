(function() { try { 
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

            /* console.log(datos); */
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
    
    inicializar();

    function inicializar(){
        Console.log("OKIIS!");
        /*
        $(".settings-menu ul:last").append('<li id="gd_li"><svg aria-hidden="true" data-prefix="fas" data-icon="university" class="svg-inline--fa fa-university fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="color: #2E4154;width: 16px;width: 15px;vertical-align: middle;margin-top: -2px;"><path fill="currentColor" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path></svg><a id="gd_indexer" href="#" style="    margin-left: 4px;">GrepON</a></li>');
        */
    }
    } catch(error) { console.error("Ha salido algo mal en GrepoSTool: ", error); }
})();
