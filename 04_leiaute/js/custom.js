var FXManager = {
    snd_certo : new Audio("objetos/snd/acerto.mp3"),
    snd_erro : new Audio("objetos/snd/erro.mp3"),
    snd_aplauso : new Audio("objetos/snd/aplauso.mp3")
}

$(".menu label.menu-toggle").click(function(){
    $(".bg-fundo").toggleClass("mod");
    $('body').toggleClass('overflow');
    $('.menu').toggleClass('fade-check');
});

$(".bg-fundo").click(function(){
    $(this).removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});

$(".fundo-item").click(function(){
    $(".bg-fundo").removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});



//-------- CHECK PAINEL --------\\

$(document).ready(function () {

    //localStorage.clear()

    var btn_ambientes_01;
    var btn_ambientes_02;
    var btn_ambientes_03;
    var btn_ambientes_04;
    var btn_ambientes_05;
    var btn_ambientes_06;
    var btn_ambientes_07;
    var btn_ambientes_08;
    var btn_ambientes_09;

    $(".btn-salas_abertas").on('click', function(){
        localStorage.setItem('btn_ambientes_01', 'check');
        $(this).css("background-image","url('imgs/painel/bt01_3.png')");
    })
    $(".btn-salas_fechadas").on('click', function(){
        localStorage.setItem('btn_ambientes_02', 'check');
        $(this).css("background-image","url('imgs/painel/bt02_3.png')");
    })
    $(".btn-salas_reunioes").on('click', function(){
        localStorage.setItem('btn_ambientes_03', 'check');
        $(this).css("background-image","url('imgs/painel/bt03_3.png')");
    })
    $(".btn-recepcao").on('click', function(){
        localStorage.setItem('btn_ambientes_04', 'check');
        $(this).css("background-image","url('imgs/painel/bt04_3.png')");
    })
    $(".btn-circulacoes").on('click', function(){
        localStorage.setItem('btn_ambientes_05', 'check');
        $(this).css("background-image","url('imgs/painel/bt05_3.png')");
    })
    $(".btn-banheiros").on('click', function(){
        localStorage.setItem('btn_ambientes_06', 'check');
        $(this).css("background-image","url('imgs/painel/bt06_3.png')");
    })
    $(".btn-copas").on('click', function(){
        localStorage.setItem('btn_ambientes_07', 'check');
        $(this).css("background-image","url('imgs/painel/bt07_3.png')");
    })
    $(".btn-ambientes_descompressao").on('click', function(){
        localStorage.setItem('btn_ambientes_08', 'check');
        $(this).css("background-image","url('imgs/painel/bt08_3.png')");
    })
    $(".btn-ambientes_especificos").on('click', function(){
        localStorage.setItem('btn_ambientes_09', 'check');
        $(this).css("background-image","url('imgs/painel/bt09_3.png')");
    })

    btn_ambientes_01 = localStorage.getItem('btn_ambientes_01');
    btn_ambientes_02 = localStorage.getItem('btn_ambientes_02');
    btn_ambientes_03 = localStorage.getItem('btn_ambientes_03');
    btn_ambientes_04 = localStorage.getItem('btn_ambientes_04');
    btn_ambientes_05 = localStorage.getItem('btn_ambientes_05');
    btn_ambientes_06 = localStorage.getItem('btn_ambientes_06');
    btn_ambientes_07 = localStorage.getItem('btn_ambientes_07');
    btn_ambientes_08 = localStorage.getItem('btn_ambientes_08');
    btn_ambientes_09 = localStorage.getItem('btn_ambientes_09');

    if (btn_ambientes_01 == 'check') {
        $(".btn-salas_abertas").css("background-image","url('imgs/painel/bt01_3.png')");
    }
    if (btn_ambientes_02 == 'check') {
        $(".btn-salas_fechadas").css("background-image","url('imgs/painel/bt02_3.png')");
    }
    if (btn_ambientes_03 == 'check') {
        $(".btn-salas_reunioes").css("background-image","url('imgs/painel/bt03_3.png')");
    }
    if (btn_ambientes_04 == 'check') {
        $(".btn-recepcao").css("background-image","url('imgs/painel/bt04_3.png')");
    }
    if (btn_ambientes_05 == 'check') {
        $(".btn-circulacoes").css("background-image","url('imgs/painel/bt05_3.png')");
    }
    if (btn_ambientes_06 == 'check') {
        $(".btn-banheiros").css("background-image","url('imgs/painel/bt06_3.png')");
    }
    if (btn_ambientes_07 == 'check') {
        $(".btn-copas").css("background-image","url('imgs/painel/bt07_3.png')");
    }
    if (btn_ambientes_08 == 'check') {
        $(".btn-ambientes_descompressao").css("background-image","url('imgs/painel/bt08_3.png')");
    }
    if (btn_ambientes_09 == 'check') {
        $(".btn-ambientes_especificos").css("background-image","url('imgs/painel/bt09_3.png')");
    }
    
});

//-------- /CHECK PAINEL --------\\


/*
jQuery("document").ready(function($){

    var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
  
    if(pg_number == 1){
      document.body.style.backgroundImage = "url('objetos/bg01.png')";
    }else if(pg_number == 2){
      document.body.style.backgroundImage = "url('objetos/bg02.png')";
    }
    
});
*/