$(function(){


    $(document).ready(function(){
        const vibrate = document.getElementsByClassName("vibrate")[0];
        vibrate.classList.add('animate__animated');
        vibrate.classList.add('animate__swing');

        setTimeout(function(){
            vibrate.classList.remove('animate__animated');
            vibrate.classList.remove('animate__swing');
        }, 3000)

        $(".homelink").click(function(e){
            e.preventDefault();
            x = $(this).attr("href");
            $("html,body").animate({scrollTop:$(this.hash).offset().top}, 400);
        })
        $(".aboutlink").click(function(e){
            e.preventDefault();
            x = $(this).attr("href");
            $("html,body").animate({scrollTop:$(this.hash).offset().top}, 400);
        })
        $(".skillslink").click(function(e){
            e.preventDefault();
            x = $(this).attr("href");
            $("html,body").animate({scrollTop:$(this.hash).offset().top}, 400);
        })
        $(".contactlink").click(function(e){
            e.preventDefault();
            x = $(this).attr("href");
            $("html,body").animate({scrollTop:$(this.hash).offset().top}, 400);
        })
    });

    
    
    $(document).on('scroll', function(){
        // 스크롤 시 header fade-in
        if($(window).scrollTop() > 300){
            $("nav").css({
                backgroundColor: "#fff"
            })
        }else{
            $("nav").css({
                borderBottom: "none",
                backgroundColor: "transparent"
            })
            $("nav .nav-link").mouseenter(function(){
                $("nav").css({
                    backgroundColor: "#fff"
                })
            });
            $("nav .nav-link").mouseout(function(){
                $("nav").css({
                    backgroundColor: "transparent"
                })
            })
        }

        // 해당 링크로 이동시 애니메이션 실행
        const home = document.getElementById("home");
        const about = document.getElementById("about");
        const skills = document.getElementById("skills");
        const contact = document.getElementById("contact");
        if($(window).scrollTop() > 0 && $(window).scrollTop() < home.offsetHeight){
            const vibrate = document.getElementsByClassName("vibrate")[0];
            vibrate.classList.add('animate__animated');
            vibrate.classList.add('animate__swing');
            setTimeout(function(){
                vibrate.classList.remove('animate__animated');
                vibrate.classList.remove('animate__swing');
            }, 3000)
        }else if($(window).scrollTop() > home.offsetHeight && $(window).scrollTop() < home.offsetHeight + about.offsetHeight){
            const aboutp = document.getElementsByClassName("aboutp")[0];
            const barContact = document.getElementsByClassName("bar-contact")[0];
            aboutp.classList.add('animate__animated');
            aboutp.classList.add('animate__pulse');

            function pulse3Intro(){ // 두근두근3번
                aboutp.classList.add('animate__animated');
                aboutp.classList.add('animate__pulse');


            }
            barContact.classList.add('animate__animated');
            barContact.classList.add('animate__bounceInLeft');
            setTimeout(function(){
                aboutp.classList.remove('animate__animated');
                aboutp.classList.remove('animate__pulse');
                barContact.classList.remove('animate__animated');
                barContact.classList.remove('animate__bounceInLeft');
            }, 3000)
        }else if($(window).scrollTop() > home.offsetHeight + about.offsetHeight){
            $(".skills").myskillbar({});
        };
    });


}); // jquery



