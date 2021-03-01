//オープニングシャッター
$(function(){
    let $window = $(window),
        $load = $('#load_animation'),
        $load_in = $load.find('img');


    $load_in.delay(500).fadeIn('slow');

    $window.on('load',function(){
        HideLoadingScreen();
    })


    setTimeout(function(){
        HideLoadingScreen();
    },5000);

    function HideLoadingScreen(){
        $load.delay(5100).fadeOut("slow");
    }
});
