/*global $, window */
$(function () {
    'use strict';
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));
    
    //start shuffle//
    $('.our-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('value') === '.all') {
            $('.shuffle .col-sm').css('opacity', '1');
        } else {
            $('.shuffle .col-sm').css('opacity', '0.09');
            $($(this).data('value')).css('opacity', '1');
        }
    });
    
});

    

