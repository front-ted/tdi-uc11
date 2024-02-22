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

    var btn_normas_01;
    var btn_normas_02;
    var btn_normas_03;
    var btn_normas_04;
    var btn_normas_05;

    $(".btn-nbr_16752_2020").on('click', function(){
        localStorage.setItem('btn_normas_01', 'check');
        $(this).css("background-image","url('objetos/painel02/bt_01_3.png')");
    })
    $(".btn-nbr_16861_2020").on('click', function(){
        localStorage.setItem('btn_normas_02', 'check');
        $(this).css("background-image","url('objetos/painel02/bt_02_3.png')");
    })
    $(".btn-nbr_6492_2021").on('click', function(){
        localStorage.setItem('btn_normas_03', 'check');
        $(this).css("background-image","url('objetos/painel02/bt_03_3.png')");
    })
    $(".btn-nbr_17006_2021").on('click', function(){
        localStorage.setItem('btn_normas_04', 'check');
        $(this).css("background-image","url('objetos/painel02/bt_04_3.png')");
    })
    $(".btn-abnt_nbr_17068_2022").on('click', function(){
        localStorage.setItem('btn_normas_05', 'check');
        $(this).css("background-image","url('objetos/painel02/bt_05_3.png')");
    })

    btn_normas_01 = localStorage.getItem('btn_normas_01');
    btn_normas_02 = localStorage.getItem('btn_normas_02');
    btn_normas_03 = localStorage.getItem('btn_normas_03');
    btn_normas_04 = localStorage.getItem('btn_normas_04');
    btn_normas_05 = localStorage.getItem('btn_normas_05');

    alert('BTN 1: '+btn_normas_01);
    alert('BTN 2: '+btn_normas_02);
    alert('BTN 3: '+btn_normas_03);
    alert('BTN 4: '+btn_normas_04);
    alert('BTN 5: '+btn_normas_05);

    if (btn_normas_01 == 'check'){
        $(".btn-nbr_16752_2020").css("background-image","url('objetos/painel02/bt_01_3.png')");
    }
    if (btn_normas_02 == 'check'){
        $(".btn-nbr_16861_2020").css("background-image","url('objetos/painel02/bt_02_3.png')");
    }
    if (btn_normas_03 == 'check'){
        $(".btn-nbr_6492_2021").css("background-image","url('objetos/painel02/bt_03_3.png')");
    }
    if (btn_normas_04 == 'check'){
        $(".btn-nbr_17006_2021").css("background-image","url('objetos/painel02/bt_04_3.png')");
    }
    if (btn_normas_05 == 'check'){
        $(".btn-abnt_nbr_17068_2022").css("background-image","url('objetos/painel02/bt_05_3.png')");
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