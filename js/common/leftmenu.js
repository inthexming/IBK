$(document).ready(function () {
    
    // left 메뉴
    $('.nav_cont_list > li > a').click(function(){
        //$('.nav_cont_list li a').removeClass('active');
        $(this).addClass('active');
        $(this).next().slideDown(300);
        $(".nav_cont_list > li > a").not(this).removeClass('active');
        $(".nav_cont_list > li > a").not(this).next().slideUp(300);
        return false;
    });
    
    // select_box 
    $('.selected-type').click(function(){
        $(this).next().toggleClass('show');
    });
    $('.select_list li').click(function(){
        $('.select_list').removeClass('show');
    });

    // 별 아이콘 
    $('.mark_btn').click(function(){
        $(this).toggleClass('active');
    });

    // 안내 아이콘 
    $('.msg_icon').click(function(){
        $(this).toggleClass('active');
        $(this).parent().next('.page_msg_area').slideToggle(300);
    });

    // 프로필 버튼 클릭시 
    $('.dropIcon').click(function(){
        $(this).toggleClass('active');
        $(this).next().toggleClass('show');
    });

});