var ENCRYTAR_SERIE = null;
var ENCRYPTAR = null;
var DESENCRYTAR_SERIE = null;
var DESENCRYPTAR = null;
var texto_input = null;
var texto_out = null;
var btn_copiar = null;
var div_bloque_salida = null;
var div_bloque_salida_inicial = null;


function iniciar() {

    ENCRYTAR_SERIE = {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat',

    };

    ENCRYPTAR = /a|e|i|o|u/gi;

    DESENCRYTAR_SERIE = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u',
    };

    DESENCRYPTAR = /ai|enter|imes|ober|ufat/gi;

    texto_input = document.getElementById('input-parrafo');
    const isInput = texto_input instanceof HTMLTextAreaElement;
    if (!isInput || texto_input == null) {
        console.log('Error en input');
        alert('Error Texto_input');
        return;
    }
   

    texto_out = document.getElementById('text-out');
    const isOut = texto_out instanceof HTMLTextAreaElement; 
    if (!isOut || texto_out == null) {
        console.log('Error en text-out');
        alert('Error Texto_out');
        return;
    }

    btn_copiar = document.getElementById('btn_copiar');
    const isBtn_copiar = btn_copiar instanceof HTMLButtonElement;
    if (!isBtn_copiar || btn_copiar == null) {
        console.log('Error Boton Copiar');
        alert('Error en Boton Copiar');
        return;
    }

    div_bloque_salida = document.getElementById('div-out-container-right-text');
    const isDiv = div_bloque_salida instanceof HTMLDivElement;
    if (!isDiv || div_bloque_salida == null) {
        console.log('Error en Div Bloque de Salida');
        alert('Error en Div Bloque de Salida');
        return;
    }

    div_bloque_salida_inicial = document.getElementById('div-out-container-right');
    const isDivSalida = div_bloque_salida_inicial instanceof HTMLDivElement;
    if (!isDivSalida || div_bloque_salida_inicial == null) {
        console.log('Error en Div Bloque de Salida Inicial');
        alert('Error en Div Bloque de Salida Inical');
        return;
    }

    texto_input.value = '';
    texto_out.value = '';
    div_bloque_salida.style.display = 'none';

}


function HandleButtonEncriptar(seleccion) {

    let texto_original = texto_input.value;
    if (seleccion == 'ENCRYPTAR') {
        texto_encrytado_desencryptado = texto_original.replace(ENCRYPTAR, function (matched) { return ENCRYTAR_SERIE[matched] });
    } else {
        texto_encrytado_desencryptado = texto_original.replace(DESENCRYPTAR, function (matched) { return DESENCRYTAR_SERIE[matched] });
    }
    div_bloque_salida_inicial.style.display = 'none';
    div_bloque_salida.style.display = 'flex';
    texto_out.value = texto_encrytado_desencryptado;
}

function HandleButtonCopiar(){
    texto_input.value=texto_out.value;
    div_bloque_salida.style.display='none';
    div_bloque_salida_inicial.style.display='flex';
}

iniciar();



