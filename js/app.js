"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const navigation = document.querySelector(".header__navigation");
    const menu = document.querySelector(".header__menu");
    const close = document.querySelector(".header__close");
    const link = document.querySelectorAll(".header__link");
    const button = document.querySelector(".header-content__contact");
    const popUp = document.querySelector(".popUp");

    if (button) {
        button.addEventListener("click", function () {
            if (popUp.classList.contains("popUp_active")) {
                popUp.classList.remove("popUp_active");
            }
            else
                popUp.classList.add("popUp_active");
            $(".overlap").toggleClass("overlap_active");
        });
    }


    scrollcheck();
    close.addEventListener("click", function () {
        if (navigation.classList.contains("header__navigation_active"))
            navigation.classList.remove("header__navigation_active");
    });


    /*const services = ;
    const clients = ;
    const team = ;*/
    const idArr = [
        document.querySelector("#services"),
        document.querySelector("#clients"),
        document.querySelector("#team"),
        document.querySelector("#contact")

    ];


    console.log(idArr);
    console.log(link);


    if (idArr[0] && idArr[1] && idArr[2] && idArr[3]) {
        for (let i = 0; i < idArr.length; i++) {
            idArr[i].addEventListener("mouseover", function () {
                link.forEach(function (item) {
                    item.classList.remove("header__link_active");
                });
                link[i].classList.add("header__link_active");
            });
        }
    }


    menu.addEventListener('click', function () {
        if (navigation.classList.contains("header__navigation_active"))
            navigation.classList.remove("header__navigation_active");
        else
            navigation.classList.add("header__navigation_active");
    });

    window.addEventListener("scroll", function () {
        scrollcheck();
    });

    function scrollcheck() {
        if (window.scrollY > 0)
            header.classList.add("header_active");
        else
            header.classList.remove("header_active");
    }

    /* link.forEach(function (li) {
         li.addEventListener("click", function () {
             navigation.classList.remove("header__navigation_active");
             link.forEach(function (item) {
                 item.classList.remove("header__link_active")
             });
             li.classList.add("header__link_active");
         });
     });*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector('.header__navigation').offsetHeight;
            // const topOffset = 0; // если не нужен отступ сверху
            navigation.classList.remove("header__navigation_active");
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            let offset;

            if (Number(window.innerWidth) <= 700) {
                offset = -470;
            } else {
                offset = 30;
            }

            const offsetPosition = elementPosition - topOffset - offset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });



        });
    });

    $('form').submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function () {

                event.target.reset();
            },
            error: function () {
                console.log("Form error!");
            }
        });
        popUp.classList.remove("popUp_active");
        $(".overlap").toggleClass("overlap_active");
    });

    $("#phone").mask("+(99)999 999 99 99");

    $(".popUp__close").on("click", function (){
        $(".overlap").toggleClass("overlap_active");
        $(".popUp").toggleClass("popUp_active");
    });

});