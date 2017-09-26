$(function(){
       // 导航  bt-menu
        navFun($('.bt-menu'));
        resizeH();
    })
    $(window).load(function(e){
        pageUI_Active();
        mainVideoCon();
    });
    $(window).resize(function() {
        mainVideoCon();
        //CAMPAIGNS
         var winW = $(window).width();
            if( winW > 768 ){
                setTimeout(function(){
                    $('.card-tvc > a, .campaign-list .case-study .thumb').removeAttr('style');
                    resizeH();
                },50);
            }
});
    $(window).scroll(function() {
        // Sub page Title Area
        pageUI_Active();
    });
/*********************************************************导航  bt-menu start**********************************************************************************************/
function navFun(obj){
     var _isBtnMenu = false;
    obj.on('click', function(e) {
            e.preventDefault();
            navCon();
            if (!_isBtnMenu) {
                $(this).addClass('open').attr('title','닫힘');
                _isBtnMenu = true;
            }else{
                $(this).removeClass('open').attr('title','열림');
                _isBtnMenu = false;
            }
        });
}
function navCon(){
    if ($('header').hasClass('open')) {
        $('body, html').css({
            'overflow': '',
            'height': '100%'
        });
        if ($(window).width() < 768) {
            $('.nav-util-mo').fadeIn();
            $('.lang-choice').hide();
        }
        var menu = $('nav');
        btMenu = $('.bt-menu');
        li = $('nav li');
        menu.slideUp(300, function(){li.removeClass('view');$('header').removeClass('open');$('.hsad-logo').attr("src", "img/common/hsad_logo.png");});
    }else{
        $('header').addClass('open');
        $('.hsad-logo').attr("src", "img/common/hsad_logo_white.png");
        if ($(window).width() > 768) {
            $('body, html').css({ 'overflow': 'hidden', 'height': $(window).height()  });
        } else {
            $('.nav-util-mo').hide();
            $('.lang-choice').show();
            $('body').css({'overflow':'hidden'});
            $('body, html').css({'height':$('nav').height()+90});
        }
        var menu = $('nav');
        btMenu = $('.bt-menu');
        li = $('nav li');
        menu.slideDown(300, function(){li.addClass('view');});
    }
}
/*********************************************************导航  bt-menu end**********************************************************************************************/
/*********************************************************视频 start*********************************************************************************************/
function mainVideoCon(){
    var videoTop = ($(window).height()-$('.home-linart-wrap .video-wrap').innerHeight())/2;
    $('.home-linart-wrap .video-wrap').css({'top':videoTop}).show();
}
/*********************************************************视频 end*********************************************************************************************/
//CAMPAIGNS
function resizeH(){
    /* list 높이 */
    var aH = $('.card-tvc').eq(0).find('> a').innerHeight();
    //alert(aH);
    $('.campaign-list .case-study .thumb').css({'padding-bottom':aH});
    $('.card-tvc > a').height(aH);
}

//返回顶部 内页标题
var isFristrun = true;
var originSrc;
function pageUI_Active() {
    var winHeight = $(window).height();
    var winTop = $(window).scrollTop();
    //判断ie9以下
    if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
       $('#home-box').css('height',winHeight + 'px');
       $('#content-block2').css('min-height','auto');
    }
    if($('.page-title-wrap img').length > 0){
        if(isFristrun){
            originSrc = $('.page-title-wrap img').attr('src');
            isFristrun = false;
        }
    }
    if (winTop >= 116) {
        if ($('.page-title-wrap').length > 0) {
            if($('.page-title-wrap img').length > 0){
                var _fileNameCut;
                if(originSrc.match('_white')){
                    _fileNameCut = originSrc.replace('_white','');
                }
                $('.page-title-wrap img').attr('src', _fileNameCut );
            }
            $('.page-title-wrap').css({
                'position': 'fixed',
                'background': 'url(img/common/bg_page_title.png)',
                'border-bottom': '1px solid #e6e6e6'
            });
            $('.page-title-wrap.white h2').css({
                'color': '#e11837'
            });
            if($('.page-tit').hasClass('view')){
                var titText;
                if (isPc()) {
                    titText = $('.page-scroll-tit').text();
                }else{
                    titText = $('.page-scroll-tit').text().substring(0, 24);
                    titText += '...';
                }
                $('.page-title-wrap h2').removeClass('blind').html(titText);

            }

        }
        
        $('.page-title-wrap.white .history-back span').css({
            'background-color': '#000000'
        });
    } else if (winTop <= 116) {
        if ($('.page-title-wrap').length > 0) {
            if($('.page-title-wrap img').length >0){
                $('.page-title-wrap img').attr('src', originSrc);
            }
            $('.page-title-wrap').css({
                'position': 'relative',
                'background': 'none',
                'border-bottom': 'none'
            });
            $('.page-title-wrap.white h2').css({
                'color': '#ffffff'
            });
            
            $('.page-title-wrap.white .history-back span').css({
                'background-color': '#ffffff'
            });

            if($('.page-tit').hasClass('view'))$('.page-title-wrap h2').addClass('blind');
        }
    }

    if (winTop >= $(window).height() / 2) {
        $('.btn-page-up').css({
            'opacity': '1'
        });
    } else if (winTop <= $(window).height() / 2) {
        $('.btn-page-up').css({
            'opacity': '0'
        });
    }
}