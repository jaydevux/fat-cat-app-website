jQuery(document).ready(function ($) {


    //Cache some variables
    var links = $('.navbar-nav').find('li');
    blog = $('.navbar-nav').find('a.blog');
    slide = $('.slide');
    buttonb = $('.buttonslideblack');
    buttonw = $('.buttonslidewhite');
    mywindow = $(window);
    htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide-parallax');

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('.navbar-nav li[data-slide-parallax="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.navbar-nav li[data-slide-parallax="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    $('#bslide1').click(function() {
    window.location.href = 'index.html#slide1';
    return false;
    });

    $('#bslide2').click(function() {
    window.location.href = 'index.html#slide2';
    return false;
    });


    $('#bslide4').click(function() {
        window.location.href = 'index.html#slide4';
        return false;
        });


    $('#bslide6').click(function() {
        window.location.href = 'index.html#slide6';
        return false;
        });

   

    $('#bslide8').click(function() {
        window.location.href = '#slide8';
        return false;
        });


    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navbar-nav li[data-slide-parallax="1"]').addClass('active');
            $('.navbar-nav li[data-slide-parallax="2"]').removeClass('active');
        }

        
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide-parallax="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide-parallax');
        goToByScroll(dataslide);
    });






    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    buttonb.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide-parallax');
        goToByScroll(dataslide);

    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    buttonw.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide-parallax');
        goToByScroll(dataslide);

    });

     blog.click(function (e) {
       window.open("http://fatcatgaming.com/blog/","_self")

    });



});


