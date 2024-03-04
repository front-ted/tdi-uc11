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

    var btn_moodboard_01;
    var btn_moodboard_02;
    var btn_moodboard_03;
    var btn_moodboard_04;
    var btn_moodboard_05;
    var btn_moodboard_06;
    var btn_moodboard_07;
    var btn_moodboard_08;
    var btn_moodboard_09;
    var btn_moodboard_10;
    var btn_moodboard_11;

    $(".btn-identidade").on('click', function(){
        localStorage.setItem('btn_moodboard_01', 'check');
        $(this).css("background-image","url('objetos/painel/bt01_b.png')");
    })
    $(".btn-publico_alvo").on('click', function(){
        localStorage.setItem('btn_moodboard_02', 'check');
        $(this).css("background-image","url('objetos/painel/bt02_b.png')");
    })
    $(".btn-estilo").on('click', function(){
        localStorage.setItem('btn_moodboard_03', 'check');
        $(this).css("background-image","url('objetos/painel/bt03_b.png')");
    })
    $(".btn-texturas").on('click', function(){
        localStorage.setItem('btn_moodboard_04', 'check');
        $(this).css("background-image","url('objetos/painel/bt04_b.png')");
    })
    $(".btn-inspiracao").on('click', function(){
        localStorage.setItem('btn_moodboard_05', 'check');
        $(this).css("background-image","url('objetos/painel/bt05_b.png')");
    })
    $(".btn-iluminacao").on('click', function(){
        localStorage.setItem('btn_moodboard_06', 'check');
        $(this).css("background-image","url('objetos/painel/bt06_b.png')");
    })
    $(".btn-paleta_cores").on('click', function(){
        localStorage.setItem('btn_moodboard_07', 'check');
        $(this).css("background-image","url('objetos/painel/bt07_b.png')");
    })
    $(".btn-elementos").on('click', function(){
        localStorage.setItem('btn_moodboard_08', 'check');
        $(this).css("background-image","url('objetos/painel/bt08_b.png')");
    })
    $(".btn-tendencias").on('click', function(){
        localStorage.setItem('btn_moodboard_09', 'check');
        $(this).css("background-image","url('objetos/painel/bt09_b.png')");
    })
    $(".btn-flexibilidade").on('click', function(){
        localStorage.setItem('btn_moodboard_10', 'check');
        $(this).css("background-image","url('objetos/painel/bt10_b.png')");
    })
    $(".btn-feedback").on('click', function(){
        localStorage.setItem('btn_moodboard_11', 'check');
        $(this).css("background-image","url('objetos/painel/bt11_b.png')");
    })

    btn_moodboard_01 = localStorage.getItem('btn_moodboard_01');
    btn_moodboard_02 = localStorage.getItem('btn_moodboard_02');
    btn_moodboard_03 = localStorage.getItem('btn_moodboard_03');
    btn_moodboard_04 = localStorage.getItem('btn_moodboard_04');
    btn_moodboard_05 = localStorage.getItem('btn_moodboard_05');
    btn_moodboard_06 = localStorage.getItem('btn_moodboard_06');
    btn_moodboard_07 = localStorage.getItem('btn_moodboard_07');
    btn_moodboard_08 = localStorage.getItem('btn_moodboard_08');
    btn_moodboard_09 = localStorage.getItem('btn_moodboard_09');
    btn_moodboard_10 = localStorage.getItem('btn_moodboard_10');
    btn_moodboard_11 = localStorage.getItem('btn_moodboard_11');

    if (btn_moodboard_01 == 'check'){
        $(".btn-identidade").css("background-image","url('objetos/painel/bt01_b.png')");
    }
    if (btn_moodboard_02 == 'check'){
        $(".btn-publico_alvo").css("background-image","url('objetos/painel/bt02_b.png')");
    }
    if (btn_moodboard_03 == 'check'){
        $(".btn-estilo").css("background-image","url('objetos/painel/bt03_b.png')");
    }
    if (btn_moodboard_04 == 'check'){
        $(".btn-texturas").css("background-image","url('objetos/painel/bt04_b.png')");
    }
    if (btn_moodboard_05 == 'check'){
        $(".btn-inspiracao").css("background-image","url('objetos/painel/bt05_b.png')");
    }
    if (btn_moodboard_06 == 'check'){
        $(".btn-iluminacao").css("background-image","url('objetos/painel/bt06_b.png')");
    }
    if (btn_moodboard_07 == 'check'){
        $(".btn-paleta_cores").css("background-image","url('objetos/painel/bt07_b.png')");
    }
    if (btn_moodboard_08 == 'check'){
        $(".btn-elementos").css("background-image","url('objetos/painel/bt08_b.png')");
    }
    if (btn_moodboard_09 == 'check'){
        $(".btn-tendencias").css("background-image","url('objetos/painel/bt09_b.png')");
    }
    if (btn_moodboard_10 == 'check'){
        $(".btn-flexibilidade").css("background-image","url('objetos/painel/bt10_b.png')");
    }
    if (btn_moodboard_11 == 'check'){
        $(".btn-feedback").css("background-image","url('objetos/painel/bt11_b.png')");
    }
    
});
//-------- /CHECK PAINEL --------\\