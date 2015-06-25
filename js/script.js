jQuery(document).ready(function () {

    $("input + span").click(function () {
        if ($("input:checkbox").prop('checked') == false) {
            $("input:checkbox").prop('checked', true);
        } else {
            $("input:checkbox").prop('checked', false);
        }
    });

    if ($(window).width() >= '480') {
        $('.img-search').click(function () {
            $('input.search').slideDown();
            $('.img-close').slideDown();
        });
        $('.img-close').click(function () {
            $('input.search').slideUp();
            $('.img-close').slideUp();
        });

        $('.pic-grid img').click(function () {
            var card = $('div.card');
            var grid = $('div.grid');

            if (card.length !== 0) {
                if (card[0].className == "card radius") {
                    card.removeClass("card radius");
                    card.addClass("grid radius");
                    $('.pic-grid img').css("opacity", "1");
                }
            } else {
                if (grid[0].className == "grid radius") {
                    grid.removeClass("grid radius");
                    grid.addClass("card radius");
                    $('.pic-grid img').css("opacity", "0.3");
                }
            }
        })

        $('.pic-map img').click(function () {
            var opacity = $('.pic-map img').css("opacity");
            if (opacity == "0.3") {
                $('.pic-map img').css("opacity", "1");
            } else {
                $('.pic-map img').css("opacity", "0.3");
            }
        });

        $("li.select-coffee label").click(function () {
            var liCoffee = $(".select-coffee");
            var index = parseInt(this.parentElement.id);
            if (liCoffee[index + 1].style.display != "block" || liCoffee[index - 1].style.display != "block") {
                if (liCoffee[index].style.display == "none" || liCoffee[index].style.display == "" || liCoffee[index].style.display == "block") {
                    liCoffee.removeClass('active');
                    $("ul.coffee-type").css("border", "1px solid #664422");
                    liCoffee.show();
                } else {
                    liCoffee.hide();
                    $("ul.coffee-type").css("border", "none");
                    this.parentElement.className = "select-coffee active";
                    this.parentElement.style.display = "block";
                }
            }
        });

        $("li.select-city label").click(function () {
            var liCity = $(".select-city");
            var index = parseInt(this.parentElement.id);
            if (liCity[index - 14 + 1].style.display != "block" || liCity[index - 14 - 1].style.display != "block") {
                if (liCity[index - 14].style.display == "none" || liCity[index - 14].style.display == "" || liCity[index - 14].style.display == "block") {
                    liCity.removeClass('active');
                    $("ul.city").css("border", "1px solid #664422");
                    if (index == 14) {
                        this.firstChild.data = "Мінск";
                    }
                    if (index == 15) {
                        this.firstChild.data = "Гомель";
                    }
                    if (index == 16) {
                        this.firstChild.data = "Магілеў";
                    }
                    liCity.show();
                } else {
                    liCity.hide();
                    $("ul.city").css("border", "none");
                    this.parentElement.className = "select-city active";
                    if (index == 14) {
                        this.firstChild.data = "У Мінску";
                    }
                    if (index == 15) {
                        this.firstChild.data = "У Гомелі";
                    }
                    if (index == 16) {
                        this.firstChild.data = "У Магілёве";
                    }
                    this.parentElement.style.display = "block";
                }
            }
        });
    }
    ;

    if ($(window).width() <= '480') {

        $('.img-search').click(function () {
            var section = $('section').css("margin-left");
            var inputSearch = $('input.search');
            var imgSearch = $(".img-search");

            var firstChild = $('li.first');
            firstChild.before(inputSearch);
            inputSearch.after(imgSearch);
            imgSearch.addClass("active");
            $('input.search').css("display", "block");

            $('section').css("margin-left", "-75%");

            $('.links').slideDown();

            var imgClose = $(".img-close");
            var temp = imgSearch;
            imgSearch = imgClose;
            imgClose = temp;
            imgSearch.css("display", "block");
        });

        $('.img-close').click(function () {
            $('section').css("margin-left", "0px");
            $('.links').slideUp();

            var imgSearch = $(".img-search");
            imgSearch.removeClass("active");
            var imgClose = $(".img-close");

            imgClose.before(imgSearch);

            var temp = imgClose;
            imgClose = imgSearch;
            imgSearch = temp;
            imgClose.css("display", "block");
            imgSearch.css("display", "none");
        });

        $("li.select-coffee label").click(function () {
            var liCoffee = $(".select-coffee");
            var index = parseInt(this.parentElement.id);
            if (liCoffee[index].className != "select-coffee active") {
                $(".select-coffee").removeClass("active");
                liCoffee[index].className = "select-coffee active";
            }
        });
        $("li.select-city label").click(function () {
            var liCity = $(".select-city");
            var index = parseInt(this.parentElement.id);
            if (liCity[index - 14].className != "select-city active") {
                $(".select-city").removeClass("active");
                liCity[index - 14].className = "select-city active";
            }
        });
    }
    ;
});