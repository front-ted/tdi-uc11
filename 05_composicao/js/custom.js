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

//-------- BOTÕES EXERCÍCIO --------\\
$(".btn-exercicio01").click(function(){
    $(this).addClass("resposta-errada");
    FXManager.snd_erro.play();
});
$(".btn-exercicio02").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});
$(".btn-exercicio03").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});
$(".btn-exercicio04").click(function(){
    $(this).addClass("resposta-errada");
    FXManager.snd_erro.play();
});
$(".btn-exercicio05").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});
$(".btn-exercicio06").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});
$(".btn-exercicio07").click(function(){
    $(this).addClass("resposta-certa");
    FXManager.snd_certo.play();
});



jQuery("document").ready(function($){

    var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
  
    if(pg_number == 1){
      document.body.style.backgroundImage = "url('objetos/bg01.png')";
    }else if(pg_number == 2){
      document.body.style.backgroundImage = "url('objetos/bg02.png')";
    }
    
});

//-------- CHECK PAINEL --------\\

$(document).ready(function () {

    //localStorage.clear()

    var btn_principios_01;
    var btn_principios_02;
    var btn_principios_03;
    var btn_principios_04;
    var btn_principios_05;
    var btn_principios_06;
    var btn_principios_07;
    var btn_principios_08;
    var btn_principios_09;

    $(".btn-harmonia").on('click', function(){
        localStorage.setItem('btn_principios_01', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt01b.png')");
    })
    $(".btn-ordem").on('click', function(){
        localStorage.setItem('btn_principios_02', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt02b.png')");
    })
    $(".btn-peso").on('click', function(){
        localStorage.setItem('btn_principios_03', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt03b.png')");
    })
    $(".btn-simetria").on('click', function(){
        localStorage.setItem('btn_principios_04', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt04b.png')");
    })
    $(".btn-ritmo").on('click', function(){
        localStorage.setItem('btn_principios_05', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt05b.png')");
    })
    $(".btn-ponto_focal").on('click', function(){
        localStorage.setItem('btn_principios_06', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt06b.png')");
    })
    $(".btn-escala").on('click', function(){
        localStorage.setItem('btn_principios_07', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt07b.png')");
    })
    $(".btn-unidade").on('click', function(){
        localStorage.setItem('btn_principios_08', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt08b.png')");
    })
    $(".btn-contraste").on('click', function(){
        localStorage.setItem('btn_principios_09', 'check');
        $(this).css("background-image","url('objetos/painel_mesa/bt09b.png')");
    })

    btn_principios_01 = localStorage.getItem('btn_principios_01');
    btn_principios_02 = localStorage.getItem('btn_principios_02');
    btn_principios_03 = localStorage.getItem('btn_principios_03');
    btn_principios_04 = localStorage.getItem('btn_principios_04');
    btn_principios_05 = localStorage.getItem('btn_principios_05');
    btn_principios_06 = localStorage.getItem('btn_principios_06');
    btn_principios_07 = localStorage.getItem('btn_principios_07');
    btn_principios_08 = localStorage.getItem('btn_principios_08');
    btn_principios_09 = localStorage.getItem('btn_principios_09');

    if (btn_principios_01 == 'check'){
        $(".btn-harmonia").css("background-image","url('objetos/painel_mesa/bt01b.png')");
    }
    if (btn_principios_02 == 'check'){
        $(".btn-ordem").css("background-image","url('objetos/painel_mesa/bt02b.png')");
    }
    if (btn_principios_03 == 'check'){
        $(".btn-peso").css("background-image","url('objetos/painel_mesa/bt03b.png')");
    }
    if (btn_principios_04 == 'check'){
        $(".btn-simetria").css("background-image","url('objetos/painel_mesa/bt04b.png')");
    }
    if (btn_principios_05 == 'check'){
        $(".btn-ritmo").css("background-image","url('objetos/painel_mesa/bt05b.png')");
    }
    if (btn_principios_06 == 'check'){
        $(".btn-ponto_focal").css("background-image","url('objetos/painel_mesa/bt06b.png')");
    }
    if (btn_principios_07 == 'check'){
        $(".btn-escala").css("background-image","url('objetos/painel_mesa/bt07b.png')");
    }
    if (btn_principios_08 == 'check'){
        $(".btn-unidade").css("background-image","url('objetos/painel_mesa/bt08b.png')");
    }
    if (btn_principios_09 == 'check'){
        $(".btn-contraste").css("background-image","url('objetos/painel_mesa/bt09b.png')");
    }
    
});

//-------- /CHECK PAINEL --------\\