$(document).ready(function(){

    function setMenuDropdownWidePosition() {
        $('ul.main-menu > .menu-item.wide').each(function(){
            var menuItemOffset = $(this).offset().left;
            var dropDownWidth = $('.second-level', this).width();
            var containerOffset = $(this).parents('.container').offset().left;
            var containerWidth = $(this).parents('.container').width();

            var endOfContainer = containerOffset + containerWidth;

            var offsetDiff = 0;

            if((menuItemOffset + dropDownWidth) > endOfContainer)
            {
                offsetDiff = endOfContainer - (menuItemOffset + dropDownWidth)
            }
            $('.second-level', this).css('left', offsetDiff + "px");
        });
    }

    $('ul.main-menu > .menu-item').on("mouseenter", function(){
        $(".second-level", this).addClass('dropdown-open');
    }).on("mouseleave", function(){
        $(".second-level", this).removeClass('dropdown-open');
    })

    $('.mobile-header .mobile-nav-container .mobile-arrow').on('click', function(){
        $(this).parent().toggleClass('mobile-nav-opened');
        $(this).siblings('.sub-menu').slideToggle(200);
    })

    $(window).on('resize', setMenuDropdownWidePosition);


    setMenuDropdownWidePosition();

});

