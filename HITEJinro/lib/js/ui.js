$(document).ready(function(){
    var gnb = {
        init:function(){
            this.isOpen = false;
            this.setLayout();
        },
        setLayout:function(){
            var _self = this;
            $(window).on('resize',function(e){
                if($(window).width() < 990){
                    if($('.gnb-warp-mo .gnb').length == 0){
                        $('.gnb-warp-mo').append($('.gnb-wrap').html()).promise().done(function(){
                            $('.gnb-warp-mo .gnb').css({'height':$(window).height()});
                            var _snsTag = $('.gnb-warp-mo .sns').html();
                            $('.gnb-warp-mo .sns').remove();
                            $('.gnb-warp-mo .logo').remove();
                            $('.gnb-warp-mo .gnb').append("<div class=\"sns\">"+_snsTag+"</div>");
                        });
                    }
                }else{
                    $('.gnb-warp-mo .row').remove();
                    $('.gnb-warp-mo .sns').remove();
                    $('.mo-header,.gnb-warp-mo .gnb,.gnb-warp-mo').removeClass('open');
                    _self.isOpen = false;
                }
            }).resize();
            this.addEvent();
        },
        addEvent:function(){
            var _self = this;
            $('.gnb-wrap .gnb > li > a').on('mouseenter',function(e){
                var bgH = $(this).outerHeight() + $(this).siblings('ul').outerHeight();
                $('.gnb-wrap .gnb > li > a').removeClass('active');
                $(this).addClass('active');
                $('.gnb > li > ul').stop().fadeOut(200);
                $(this).siblings('ul').stop().fadeIn(400);
                $('.gnb-bg').height(bgH);
            })
            $('.gnb-wrap .gnb').on('mouseleave',function(e){
                $('.gnb-bg').height(0);
                $('.gnb > li > a').removeClass('active');
                $('.gnb > li > ul').stop().fadeOut(200);
            });
            $('body').on('click','.gnb > li > a',function(e){
                e.preventDefault();
                if($(this).siblings('ul').length > 0){
                    $(this).siblings('ul').stop().slideToggle();
                    $(this).parent().stop().toggleClass('active');
                }
            });

            $('body').on('click','.btn-gnb-open',function(e){
                if(!_self.isOpen){
                    _self.isOpen = true;
                    $("html, body").css({'height':'100%','overflow':'hidden'});
                    $('.mo-header,.gnb-warp-mo .gnb,.gnb-warp-mo').toggleClass('open');
                }
            });
            $('body').on('click','.btn-gnb-close',function(e){
                console.log("오긴오네");
                if(_self.isOpen){
                    _self.isOpen = false;
                    $("html, body, #wrap").css({'height':'','overflow':''	});
                    $('.mo-header,.gnb-warp-mo .gnb,.gnb-warp-mo').toggleClass('open');
                }
            });
            $(document).on('click','.btn-wechat',function(e){
                e.preventDefault();
                $('.sns .qr').slideToggle();
            });
        }
    }
    gnb.init();
});
