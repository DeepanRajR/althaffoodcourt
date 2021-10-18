$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header .header-2').addClass('header-active');
        }else{
            $('header .header-2').removeClass('header-active');
        }

        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.controls .buttons').click(function(){

        $(this).addClass('button-active').siblings().removeClass('button-active');

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.dish .image').show(400);
        }else{
            $('.dish .image').not('.'+filter).hide(200);
            $('.dish .image').filter('.'+filter).show(400);
        }

    });

});

function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/+917305814763 ?text=" 
    + "Name: " + name + "%0a"
    + "Phone: " + phone + "%0a"
    + "message: " + message; 
    window.open(url, '_blank').focus();
}

function gotowhatsapp1() {
    
    var name = document.getElementById("name").value;
    var foodname = document.getElementById("foodname").value;
    var quantity = document.getElementById("quantity").value;
    var mobile = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/917305814763 ?text=" 
    var name = document.getElementById("name").value;
    + "Name: " + name + "%0a"
    + "Food Name: " + foodname + "%0a"
    + "Quantity: " + quantity + "%0a"
    + "Phone: " + mobile + "%0a"
    + "message: " + message; 
    window.open(url, '_blank').focus();
}

function gotowhatsapp2() {
    
    var name = document.getElementById("name").value;
    var foodname = document.getElementById("foodname").value;
    var quantity = document.getElementById("quantity").value;
    var mobile = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/+917305184763 ?text=" 
    var name = document.getElementById("name").value;
    + "Name: " + name + "%0a"
    + "Food Name: " + foodname + "%0a"
    + "Quantity: " + quantity + "%0a"
    + "Phone: " + mobile + "%0a"
    + "message: " + message; 
    window.open(url, '_blank').focus();
}

function gotowhatsapp3() {
    
    var name = document.getElementById("name").value;
    var foodname = document.getElementById("foodname").value;
    var quantity = document.getElementById("quantity").value;
    var mobile = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/+917305854763 ?text=" 
    var name = document.getElementById("name").value;
    + "Name: " + name + "%0a"
    + "Food Name: " + foodname + "%0a"
    + "Quantity: " + quantity + "%0a"
    + "Phone: " + mobile + "%0a"
    + "message: " + message; 
    window.open(url, '_blank').focus();
}

function gotowhatsapp4() {
    
    var name = document.getElementById("name").value;
    var foodname = document.getElementById("foodname").value;
    var quantity = document.getElementById("quantity").value;
    var mobile = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/+917358614763 ?text=" 
    var name = document.getElementById("name").value;
    + "Name: " + name + "%0a"
    + "Food Name: " + foodname + "%0a"
    + "Quantity: " + quantity + "%0a"
    + "Phone: " + mobile + "%0a"
    + "message: " + message; 
    window.open(url, '_blank').focus();
}