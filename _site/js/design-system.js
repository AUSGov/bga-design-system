/*jshint browser: true, devel: true, jquery: true*/

$(document).ready(function () {



    /*----------- General page issues ----------- */

    // Prevent click empty 'a' tag from causing scrolling
    $('a').on('click', function (e) {
        if (!$(this).attr('href')) {
            e.preventDefault();
        }
    });

    /*----------- Coming soon ----------- */
    $('.coming-soon').append("<div class='coming-soon-label'><p>Coming soon</p></div>");
    $('.coming-soon a').on('click', function (e) {
        e.preventDefault();
    });


    // Hide empty breadcrumb links and arrows
    $('a.breadcrumb-link').each(function () {
        if ($(this).is(':empty')) {
            var wrapper = $(this).parent('.breadcrumb-home-wrapper');
            $(wrapper).remove();
        }
    });


    // Header navigation links
    $('#foundations-link').on('click', function () {
        window.location.pathname = "/topic-foundations.html";
    });
    $('#components-link').on('click', function () {
        window.location.pathname = "/topic-components.html";
    });
    $('#page-patterns-link').on('click', function () {
        window.location.pathname = "/topic-page-patterns.html";
    });



    /*----------- Design system card open/close functionality ----------- */
    $('.float-button').on('click', function () {
        if ($(this).parents('element-design').hasClass('unavailable')) {
            return;
        } else {
            $(this).parent().toggleClass('closed');
            $(this).parent().next('.element-code').toggleClass('open');
            var icon = $(this).find('.BgaIcon');
            $(icon).toggleClass('open');

            //Hide/Show code example
            $('.display-example').toggleClass('hide-element')
            $('.code-example').toggleClass('hide-element')
        }
    });


    /*----------- Add side-menu (sticky_list) functionality ----------- */

    // Function for menu stickiness on scroll (called within the if .anchor-menu .sticky-container exists block)
    function add_position(positions) {

        for (var i = 0; i < positions.length; i++) {
            var top_position = positions[i] - 40;
            if ($(window).scrollTop() >= top_position) {
                $('.anchor-menu a').removeClass('active-sticky');
                $('.anchor-menu a[data-value=' + positions[i] + ']').addClass('active-sticky');
            }
        }
    }


    // Function to make the side menu sticky
    var stickyPosition = $('.anchor-menu').offset(); //This var is outside the function because it needs to be determined BEFORE window resizing,.

    function menuStickiness() {

        var win = $(window),
            stickyWidth = $('.anchor-col').width();

        // Set side-menu initial horizontal position 
        if (win.width() < 575) {
            $('.anchor-menu').css('position', 'relative').css('top', 'auto');
        } else if (win.width() >= 575) {
            if (win.scrollTop() >= stickyPosition.top) {
                $('.anchor-menu').css('position', 'fixed').css('top', '0').css('width', stickyWidth);
            } else {
                $('.anchor-menu').css('position', 'relative').css('top', 'auto').css('width', stickyWidth);
            }
        }

        // Reset side-menu position on scroll
        $(window).scroll(function () {

            stickyWidth = $('.anchor-col').width();

            if (win.width() < 575) {
                $('.anchor-menu').css('position', 'relative').css('top', 'auto').css('width', stickyWidth);
            } else if (win.width() >= 575) {
                if (win.scrollTop() >= stickyPosition.top) {
                    $('.anchor-menu').css('position', 'fixed').css('top', '0').css('width', stickyWidth);
                } else if (win.scrollTop() < stickyPosition.top) {
                    $('.anchor-menu').css('position', 'relative').css('top', 'auto').css('width', stickyWidth);
                }
            }
        });
    }


    if ($(".anchor-menu .sticky-container").length) {

        // Get text from each sticky list a-tag and convert it into an id.
        // Replace spaces with hyphens and remove numerical characters & punctuation at the start where necessary       
        var sticky_list_2 = {};
        $('.anchor-menu a').each(function () {
            var a_text = $(this).text(),
                text_no_num = a_text.replace(/[0-9]/g, ''),
                text_no_punctuation = text_no_num.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\']/g, ''),
                final_text = text_no_punctuation.trim();

            var a_lower_text = final_text.replace(/\s+/g, '-').toLowerCase();
            sticky_list_2[a_text] = a_lower_text;

        });

        // Apply menu stickiness
        menuStickiness();


        // Side menu scroll to section of the page
        // and add top position of element to anchor link as a data-value
        $('.anchor-menu a').each(function () {
            var a_text = $(this).text(),
                element_id = '#' + sticky_list_2[a_text],
                element_position = $(element_id).offset();
            $(this).attr('data-value', Math.round(element_position.top));

            $(this).on('click', function () {
                $([document.documentElement, document.body]).animate(
                    { scrollTop: $(element_id).offset().top }, 400);
                $('.anchor-menu a').removeClass('active-sticky');
                $(this).addClass('active-sticky');
            });
        });


        // Change menu active state on scroll to different sections of the page
        var positions = [];
        $('.anchor-menu a').each(function () {
            var element_position = $(this).attr('data-value');
            positions.push(Math.round(element_position));
        });

        $(window).scroll(function () {
            add_position(positions);
        });

    } // END if .anchor-menu .sticky-container EXISTS


    // Menu stickiness on .resize()
    $(window).on('resize', function () {
        if ($(".anchor-menu .sticky-container").length) {
            menuStickiness();
        }
    });


    /*----------- Responsive view toggle ----------- */
    $('.responsive-toggle-container input').on('click', function () {
        var design_card = $(this).parents('.design-system-card');
        $(design_card[0]).find(".example-wrapper").toggleClass("mobile-example");
    });

    if ($(window).width() < 650) {
        $('.example-wrapper').addClass('mobile-media-query');
    } else if ($(window).width() >= 650) {
        $('.example-wrapper').removeClass('mobile-media-query');
    }

    $(window).on('resize', function () {
        if ($(window).width() < 650) {
            $('.example-wrapper').addClass('mobile-media-query');
        } else if ($(window).width() >= 650) {
            $('.example-wrapper').removeClass('mobile-media-query');
        }
    });


    /*----------- View state toggle ----------- */

    $('.state-selector label').on('click', function () {
        var element_state = $(this).attr('data-state');
        var common_ancestor = $(this).closest('.design-system-card');

        // View state toggle checked
        if ($(this).find('input').attr('checked') == "checked") {
        } else {
            $(this).parent().find('label input').each(function () {
                $(this).removeAttr('checked');
            });
            $(this).find('input').attr("checked", "checked");
        }

        // Add state to the actual example  
        var example_element = common_ancestor.find('.design-system-card-content .form-example-container');

        if (example_element.hasClass('example')) {
            example_element.attr('data-state', element_state);
        }
        else if (example_element.hasClass('radio-example')) {
            if (element_state == "focus-state") {
                example_element.find(".radio-item").attr('data-state', "default-state");
                example_element.find(".radio-item:first").attr('data-state', element_state);
                common_ancestor.find(".error-message").removeClass('show');
            }
            else if (element_state == "default-state" || element_state == "disabled-state") {
                example_element.find(".radio-item").attr('data-state', element_state);
                common_ancestor.find(".error-message").removeClass('show');
            }
            else if (element_state == "error-state") {
                example_element.find(".radio-item").attr('data-state', element_state);
                common_ancestor.find(".error-message").addClass('show');
            }
        }
        else if (example_element.hasClass('multiple-select-example')) {
            example_element.attr('data-state', element_state);
            if (element_state == "focus-state") {
                example_element.find(".checkbox-item").removeAttr('data-state');
                example_element.find(".checkbox-item:first").attr('data-state', element_state);
                common_ancestor.find(".error-message").removeClass('show');
            }
            else {
                example_element.find(".checkbox-item").removeAttr('data-state');
                common_ancestor.find(".error-message").removeClass('show');
            }
        }
        else if (example_element.hasClass('button-example')) {
            example_element.attr('data-state', element_state);
            example_element.find(".button-wrapper").attr('data-state', element_state);
        }
        else if (example_element.hasClass('dynamic-example')) {
            example_element.attr('data-state', element_state);
            example_element.find('.multi-select-question button').removeClass('selected').addClass('not-selected');
        }
    });

    // Change to focus state when element is actually in focus

    // General form fields
    $('.example .example-form-element').focus(function () {
        var common_ancestor = $(this).closest('.design-system-card');

        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.focus-label input').attr('checked', 'checked');
        $(this).closest(".example").attr('data-state', 'focus-state');
    });

    // Radio buttons
    $('.radio-example .example-form-element').on('click', function () {
        var common_ancestor = $(this).closest('.design-system-card');
        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.focus-label input').attr('checked', 'checked');
        common_ancestor.find('.error-message').removeClass('show');

        if ($(this).parent('.radio-item').attr('data-state') == "focus-state") {
            $(this).parent('.radio-item').removeAttr('data-state');
        } else {
            common_ancestor.find('.radio-item').removeAttr('data-state');
            $(this).parent('.radio-item').attr('data-state', 'focus-state');
        }
        var none_checked = true;
        $('.radio-example .radio-item').each(function () {
            if ($(this).attr('data-state') == 'focus-state') {
                none_checked = false;
            }
        });
        if (none_checked === true) {
            common_ancestor.find('.focus-label input').removeAttr('checked');
            common_ancestor.find('.default-label input').attr('checked', 'checked');
        }
    });

    //Multiple select
    $('.multiple-select-example .example-form-element').on('click', function () {
        var common_ancestor = $(this).closest('.design-system-card');
        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.focus-label input').attr('checked', 'checked');

        if ($(this).parent('.checkbox-item').attr('data-state') == "focus-state") {
            $(this).parent('.checkbox-item').removeAttr('data-state');
        } else {
            $(this).parent('.checkbox-item').attr('data-state', 'focus-state');
            common_ancestor.find('.form-example-container').attr('data-state', 'focus-state');
        }
        var none_checked = true;
        $('.multiple-select-example .checkbox-item').each(function () {
            if ($(this).attr('data-state') == 'focus-state') {
                none_checked = false;
            }
        });
        if (none_checked === true) {
            common_ancestor.find('.focus-label input').removeAttr('checked');
            common_ancestor.find('.default-label input').attr('checked', 'checked');
        }
    });

    // Buttons & links
    $('.button-example .button-wrapper').hover(
        function () {
            var common_ancestor = $(this).closest('.design-system-card');
            common_ancestor.find('.state-selector label input').removeAttr('checked');
            common_ancestor.find('.hover-label input').attr('checked', 'checked');
            common_ancestor.find(".button-wrapper").attr('data-state', "hover-state");
            common_ancestor.find(".form-example-container").attr('data-state', "hover-state");
        },
        function () {
            var common_ancestor = $(this).closest('.design-system-card');
            common_ancestor.find('.state-selector label input').removeAttr('checked');
            common_ancestor.find('.default-label input').attr('checked', 'checked');
            common_ancestor.find(".button-wrapper").attr('data-state', "default-state");
            common_ancestor.find(".form-example-container").attr('data-state', "default-state");

        });

    $('.button-example .button-wrapper').mousedown(function () {
        var common_ancestor = $(this).closest('.design-system-card');
        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.active-label input').attr('checked', 'checked');
        common_ancestor.find(".form-example-container").attr('data-state', "active-state");
        common_ancestor.find(".button-wrapper").attr('data-state', "active-state");
    });

    $('.button-example .button-wrapper').hover(
        function () {
            var common_ancestor = $(this).closest('.design-system-card');
            common_ancestor.find('.state-selector label input').removeAttr('checked');
            common_ancestor.find('.hover-label input').attr('checked', 'checked');
            common_ancestor.find(".button-wrapper").attr('data-state', "hover-state");
            common_ancestor.find(".form-example-container").attr('data-state', "hover-state");
        },
        function () {
            var common_ancestor = $(this).closest('.design-system-card');
            common_ancestor.find('.state-selector label input').removeAttr('checked');
            common_ancestor.find('.default-label input').attr('checked', 'checked');
            common_ancestor.find(".button-wrapper").attr('data-state', "default-state");
            common_ancestor.find(".form-example-container").attr('data-state', "default-state");

        });

    $('.button-example .button-wrapper').mousedown(function () {
        var common_ancestor = $(this).closest('.design-system-card');
        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.active-label input').attr('checked', 'checked');
        common_ancestor.find(".form-example-container").attr('data-state', "active-state");
        common_ancestor.find(".button-wrapper").attr('data-state', "active-state");
    });




    // Dynamic forms fields
    $('.dynamic-example input').focus(function () {
        var common_ancestor = $(this).closest('.design-system-card');
        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.focus-label input').attr('checked', 'checked');
        $(this).closest(".dynamic-example").attr('data-state', 'focus-state');
    });
    $('.dynamic-example select').focus(function () {
        var common_ancestor = $(this).closest('.design-system-card');
        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.focus-label input').attr('checked', 'checked');
        $(this).closest(".dynamic-example").attr('data-state', 'focus-state');
    });


    // Datepicker in focus
    $('#datepicker input').focus(function () {
        var common_ancestor = $(this).closest('.design-system-card');

        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.focus-label input').attr('checked', 'checked');
        $(this).closest(".example").attr('data-state', 'focus-state');

    });

    // Textarea character count
    var max_length = 100;
    $('#form-text-area').highlightWithinTextarea({
        highlight: [max_length, 200000]
    });

    $('#form-text-area').on('input', function () {
        var common_ancestor = $(this).closest('.design-system-card');
        var textarea_text = $(this).val(),
            textarea_count = textarea_text.length;
        $('.textarea-char-count span.count').text(textarea_count);

        if (textarea_count <= max_length) {
            $('.hwt-content mark').addClass('hide-mark');
            $('.textarea-char-count').text(textarea_count + ' of ' + max_length + ' characters used').removeClass('excess-count');
            $(common_ancestor).find('.error-message').removeClass('error-hidden');
            $(common_ancestor).find('.design-system-card-content .form-example-container').attr('data-state', 'focus-state');
            $('.state-selector label input').removeAttr('checked');
            $('.state-selector .focus-label input').attr('checked', 'checked');
        }
        else if (textarea_count > max_length) {
            var excess_count = textarea_count - max_length;
            $('.textarea-char-count').text('Character limited exceeded by ' + excess_count).addClass('excess-count');
            $(common_ancestor).find('.error-message').addClass('error-hidden');
            $(common_ancestor).find('.design-system-card-content .form-example-container').attr('data-state', 'error-state');
            $('.state-selector label input').removeAttr('checked');
            $('.state-selector .error-label input').attr('checked', 'checked');
        }
    });

    //Textbox with units - add commas
    $.fn.digits = function () {
        return this.each(function () {
            $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        });
    };

    $('#form-text-box-units').on('input', function () {
        var input_text = $(this).val(),
            input_stripped = input_text.replace(/,/g, ''),
            common_ancestor = $(this).closest('.design-system-card');

        if ($.isNumeric(input_stripped)) {
            var input_delimited = input_stripped.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            $(this).val(input_delimited);
            $(common_ancestor).find('.design-system-card-content .form-example-container').attr('data-state', 'focus-state');
            $('.state-selector label input').removeAttr('checked');
            $('.state-selector .focus-label input').attr('checked', 'checked');
        } else {
            $(common_ancestor).find('.design-system-card-content .form-example-container').attr('data-state', 'error-state');
            $(common_ancestor).find('.error-message').text('Please enter a number');
            $(common_ancestor).find('.design-system-card-content .form-example-container').attr('data-state', 'error-state');
            $('.state-selector label input').removeAttr('checked');
            $('.state-selector .error-label input').attr('checked', 'checked');
        }
    });

    // Inline help - complex
    $("#contextual-example-1").click(function () {
        $(this).toggleClass('open');
        $("#contextual-answer-1").slideToggle(300, function () {
        });
    });

    // Infographic select option
    $('.infographic-colour-selector .infographic-select-wrapper #colour-set').change(function () {

        var expr = $(this).val();

        switch (expr) {
            case 'blue':
                $('.example').addClass('hide-infographic');
                $('.example.blue').removeClass('hide-infographic');
                break;
            case 'green':
                $('.example').addClass('hide-infographic');
                $('.example.green').removeClass('hide-infographic');
                break;
            case 'teal':
                $('.example').addClass('hide-infographic');
                $('.example.teal').removeClass('hide-infographic');
                break;
            case 'blue grey':
                $('.example').addClass('hide-infographic');
                $('.example.blue-grey').removeClass('hide-infographic');
                break;
            case 'dark purple':
                $('.example').addClass('hide-infographic');
                $('.example.dark-purple').removeClass('hide-infographic');
                break;
            case 'purple':
                $('.example').addClass('hide-infographic');
                $('.example.purple').removeClass('hide-infographic');
                break;
            case 'extended':
                $('.example').addClass('hide-infographic');
                $('.example.extended').removeClass('hide-infographic');
                break;
            default:
                $('.example').addClass('hide-infographic');
                $('.example.blue').removeClass('hide-infographic');
                break;

        }
    });


    /*----------- COMPONENT EXAMPLE: Datepicker ----------- */

    $('#datepicker .input-group.date').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true,
        weekStart: 1,
        container: '#datepicker-container',
        orientation: "bottom left"
    });
    $('.close-button').unbind();

    $('.close-button').click(function () {
        var common_ancestor = $(this).closest('.design-system-card');

        if ($('.datepicker').is(":visible")) {
            $('.date').datepicker('hide');

            common_ancestor.find('.state-selector label input').removeAttr('checked');
            common_ancestor.find('.default-label input').attr('checked', 'checked');
            $(this).closest(".example").attr('data-state', 'default-state');

        } else {
            $('.date').datepicker('show');

            common_ancestor.find('.state-selector label input').removeAttr('checked');
            common_ancestor.find('.focus-label input').attr('checked', 'checked');
            $(this).closest(".example").attr('data-state', 'focus-state');

        }
    });



    /*----------- COMPONENT EXAMPLE: Tables ----------- */
    $('tr td:first-of-type').on('click', function () {

        // toggle class to show / hide child <td>
        var parent = $(this).parent().get(0);
        $(parent).children('td').toggleClass('showGroup');

        // toggle class on parent
        $(parent).toggleClass('groupParent');

    });



    /*----------- COMPONENT EXAMPLE: Accordions ----------- */

    $('.accordion-group-toggle-content').on('click', function () {
        // Open all / close all button functionality.
        if ($(this).hasClass('all-open')) {
            $(this).removeClass('all-open');
            $(this).children('h5').text('Open all');
            $('.accordion-item-tile').removeClass('open');
            $('.accordion-item-content').removeClass('visible');
        } else {
            $(this).addClass('all-open');
            $(this).children('h5').text('Close all');
            $('.accordion-item-tile').addClass('open');
            $('.accordion-item-content').addClass('visible');
        }
    });

    $('.accordion-item-tile').on('click', function () {
        // Toggle classes to show / hide accordion content
        $(this).toggleClass('open');
        $(this).next('.accordion-item-content').toggleClass('visible');

        // Check if all items are OPEN OR CLOSED and change the text and arrow of the accordion button accordingly.
        var open_items = [],
            closed_items = [];
        $('.accordion-item-content').each(function (i) {
            if ($(this).hasClass('visible')) {
                open_items.push(i);
            } else {
                closed_items.push(i);
            }
        });
        if ($('.accordion-item-content').length == open_items.length) {
            $('.accordion-group-toggle-content').addClass('all-open');
            $('.accordion-group-toggle-content h5').text('Close all');
        } else if ($('.accordion-item-content').length == closed_items.length) {
            $('.accordion-group-toggle-content').removeClass('all-open');
            $('.accordion-group-toggle-content h5').text('Open all');
        }

    });



    /*----------- COMPONENT EXAMPLE: Media Player ----------- */
    $('.media-player-transcript-toggle button').on('click', function () {
        //$('.media-player-transcript').toggleClass('open');


        if ($('.media-player-transcript').hasClass('open')) {
            $('.media-player-transcript').removeClass('open');
            $('.media-player-transcript-toggle span').text('Open Transcript');
            $('.media-player .media-player-transcript-toggle .iconAnimateWrapper svg').removeClass('open');
        } else {
            $('.media-player-transcript').addClass('open');
            $('.media-player-transcript-toggle span').text('Close Transcript');
            $('.media-player .media-player-transcript-toggle .iconAnimateWrapper svg').addClass('open');
        }
    });




    /*----------- COMPONENT EXAMPLE: Pagination ----------- */
    // Change current state on when click on page number
    $('.pagination-container a.page').on('click', function () {
        $('.pagination-container a').each(function () {
            $(this).removeClass('current');
        });
        $(this).addClass('current');
    });
    // Change current state to first page number on 'First' link click
    $('.pagination-container a.first').on('click', function () {
        $('.pagination-container a').each(function () {
            $(this).removeClass('current');
            $('.pagination-container a.page').first().addClass('current');
        });
    });
    // Change current state to last page number on 'Last' link click
    $('.pagination-container a.last').on('click', function () {
        $('.pagination-container a').each(function () {
            $(this).removeClass('current');
            $('.pagination-container a.page').last().addClass('current');
        });
    });
    // Change current state to previous page number on 'Previous' link click
    $('.pagination-container a.previous').on('click', function () {
        var current_pos;
        $('.pagination-container a.page').each(function (i) {
            if ($(this).hasClass('current')) {
                current_pos = i;
                $(this).removeClass('current');
            }
        });
        var new_pos = $('.pagination-container a.page').get(current_pos - 1);
        if (current_pos > 0) {
            $(new_pos).addClass('current');
        } else {
            $('.pagination-container a.page').first().addClass('current');
        }
    });
    // Change current state to next page number on 'Next' link click
    $('.pagination-container a.next').on('click', function () {
        var current_pos;
        $('.pagination-container a.page').each(function (i) {
            if ($(this).hasClass('current')) {
                current_pos = i;
                $(this).removeClass('current');
            }
        });
        var new_pos = $('.pagination-container a.page').get(current_pos + 1);
        if (current_pos <= $('.pagination-container a.page').get.length) {
            $(new_pos).addClass('current');
        } else {
            $('.pagination-container a.page').last().addClass('current');
        }
    });



    /*----------- COMPONENT EXAMPLE: Anchor menu ----------- */
    $('.anchor-menu-example a').on('click', function () {
        $('.anchor-menu-example a').removeClass('active-sticky');
        $(this).addClass('active-sticky');
    });


    /*----------- COMPONENT EXAMPLE: Dynamic forms ----------- */
    $('input#postcode').on('change', function () {
        var postcode = Number($(this).val()),
            parent_question = $(this).parents('.question-wrapper');

        if (isNaN(postcode)) {
            parent_question.addClass('error');
        } else {
            parent_question.next('.question-wrapper').removeClass('dynamic-hide');
            parent_question.removeClass('error');
        }
    });
    $('select#industry').on('change', function () {
        var parent_question = $(this).parents('.question-wrapper');
        parent_question.next('.question-wrapper').removeClass('dynamic-hide');
    });
    $('.multi-select-group button').on('click', function () {
        var parent_question = $(this).parents('.question-wrapper');
        parent_question.next('.question-wrapper').removeClass('dynamic-hide');
        $(this).toggleClass('not-selected');
        $(this).toggleClass('selected');

        parent_question.parent('.dynamic-example').attr('data-state', 'default-state');
        var common_ancestor = $(this).closest('.design-system-card');
        common_ancestor.find('.state-selector label input').removeAttr('checked');
        common_ancestor.find('.default-label input').attr('checked', 'checked');
        $(this).closest(".dynamic-example").attr('data-state', 'default-state');
    });


    /*----------- COMPONENT EXAMPLE: Checklist ----------- */
    /*------------------- Open & close checklist items -------------------*/
    $(".checklist-item-title").on("click", function () {
        $(this).next('.checklist-sub-item-wrapper').slideToggle(400);

        if ($(this).closest('.checklist-item').hasClass('open')) {

            $(this).closest('.checklist-item').removeClass('open');


            // Close sub-items when close step
            if ($(this).closest('.checklist-item').find('.checklist-sub-item').hasClass('open')) {

                $(this).closest('.checklist-item').find('.checklist-sub-item.open').find('.content-wrapper').slideToggle(400);
                $(this).closest('.checklist-item').find('.checklist-sub-item').removeClass('open');
            }

        } else {
            $(this).closest('.checklist-item').addClass('open');
        }

    });

    /*------------------- Close checklist step button -------------------*/
    $(' .checklist-close-step').on('click', function () {
        $(this).parents('.checklist-sub-item-wrapper').hide();
        $(this).parents('.checklist-item').removeClass('open');
    });


    /*------------------- Open & close sub-checklist items -------------------*/
    $(".checklist-sub-item-title").on("click", function () {

        $(this).next('.content-wrapper').slideToggle(400);

        if ($(this).closest('.checklist-sub-item').hasClass('open')) {
            $(this).closest('.checklist-sub-item').removeClass('open');
        } else {
            $(this).closest('.checklist-sub-item').addClass('open');
        }

    });


    /*------------------- Checkbox functionality -------------------*/
    $('.checklist-item-checkbox').on('click', function () {
        if ($(this).parents('.checklist-sub-item.must-do').hasClass('done')) {
            $(this).parents('.checklist-sub-item.must-do').removeClass('done');
        } else {
            $(this).parents('.checklist-sub-item.must-do').addClass('done');
        }

        $(this).parents('.checklist-item').find('.checklist-sub-item.must-do').each(function () {

            var item_completion = false;
            if ($(this).hasClass('done')) {
                item_completion = true;
            } else {
                item_completion = false;
                $(this).parents('.checklist-item').removeClass('item-done');
                return false;
            }
            if (item_completion === true) {
                $(this).parents('.checklist-item').addClass('item-done');
            }

        });
    });





    /*----------- SAB Navigation 2 functionality  ----------- */

    // Activate submenu functionality
    // https://stackoverflow.com/questions/44467377/bootstrap-4-multilevel-dropdown-inside-navigation
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
        });

        return false;
    });

    $('#guide_navlink').hover(
        function () {
            $(this).addClass('open');
        },
        function () {
            $(this).removeClass('open');
        }
    );


    // Reset disabled links so they take the user to the required url (disabled so dropdown opens on hover rather than click)
    // NOTE: hover on dropdown is performed with CSS NOT javascript
    $('.dropdown-submenu').on('click', function () {
        $(this).children('a').css('text-decoration', 'underline');
        var href = $(this).children('a').attr('href');
        window.location = href;
    });

    //TABS COMPONENT
    // Tabs component functionality
    $(".nav-link").on("click", function (e) {
        e.preventDefault();
        $(".tab-section").hide();

        var active_section = "#" + $(this).attr("href");
        $(active_section).show();
    });

    $(".tabs-component-nav-tile").on("click", function () {
        $(".tab-section").hide();
        var active_section = $(this).attr("data-attribute");
        $("#" + active_section).show();

        $(".nav-link.active").removeClass("active");
        $(".nav-link[href=" + active_section + "]").addClass("active");

        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //TAB COMPONENT CONTENT
    //Change tooltip text of 'copy code' button
    $(".copy-code-button").mouseleave(function () {
        $(".tooltiptext").html("Copy code");
    });

    //Copy code text
    $(".copy-code-button").click(function () {
        var $temp = $("<input>");
        $("body").append($temp);
        //If css tab is selected
        if ($(this).closest("div").find(".css-code").find("code").text()) {
            $temp.val($(this).closest("div").find(".css-code").find("code").text()).select();
            //If html tab is selected
        } else if ($(this).closest("div").find(".html-code").find("code").find("pre").text()) {
            $temp.val($(this).closest("div").find(".html-code").find("code").find("pre").text()).select();
        } else {
            console.log("an error has occured");
        }

        document.execCommand("copy");
        $temp.remove();

        $(".tooltiptext").html("Copied!");
    });

    //HERO PATHWAY CODE EXAMPLE OPTIONS
    // Hero pathway colour dropdown
    let borderColour = "#edca72";
    var iconColour = "#c18100";
    var imageBackgroundFill = "#f9efd3";
    var imageForegroundShape = "#fcf4e3";
    var imageForegroundSecondary = "#d8d8d8";
    var imageForegroundPrimary = "#8e8e8e";

    //Hero pathway textboxes
    var categoryText = "Label";
    var titleText = "Hero Pathway";
    var descriptionText = "Link to other pages on the site. Hero pathways are a great way to highlight important content."

    //Hero pathway checkbox
    var hideSvgImage = false;

    // Hero pathway colour dropdown
    $('.hero-pathway .code-example-select-box #hero-pathway-colour-set').change(function () {

        //Code example changes
        var expr = $(this).val();
        var addColourClass = `hero-pathway-list-color-${expr}`;
        var removeColourClasses = ["hero-pathway-list-color-blue", "hero-pathway-list-color-yellow", "hero-pathway-list-color-magenta"]

        $(".code-example .hero-pathway-list-hero").removeClass(removeColourClasses)
        $(".code-example .hero-pathway-list-hero").addClass(addColourClass)

        //Code changes
        if (expr === "yellow") {
            borderColour = "#edca72";
            iconColour = "#c18100";
            imageBackgroundFill = "#f9efd3";
            imageForegroundShape = "#fcf4e3";
            imageForegroundSecondary = "#d8d8d8";
            imageForegroundPrimary = "#8e8e8e";
        } else if (expr === "blue") {
            borderColour = "#5ba6ff";
            iconColour = "#3e96ff";
            imageBackgroundFill = "#dfeeff";
            imageForegroundShape = "#ebf4ff";
            imageForegroundSecondary = "#bedcff";
            imageForegroundPrimary = "#5ba6ff";
        } else if (expr === "magenta") {
            borderColour = "#b64d94";
            iconColour = "#b64d94";
            imageBackgroundFill = "#efd8e8";
            imageForegroundShape = "#ffecf3";
            imageForegroundSecondary = "#dfb1d0";
            imageForegroundPrimary = "#b64d94";
        }

        //Evaluates new css code and displays it
        evaluatecssCode(borderColour,
            iconColour,
            imageBackgroundFill,
            imageForegroundShape,
            imageForegroundSecondary,
            imageForegroundPrimary);
    });

    //Hero-pathway category textbox
    $('.hero-pathway .hero-pathway-category-text').on("input", function () {
        //Code example changes
        var expr = this.value;
        $('.code-example .action-card-category').text(expr);

        //Code changes
        categoryText = expr;
        evaluatehtmlCode(categoryText, titleText, descriptionText, hideSvgImage);
    });

    //Hero-pathway title textbox
    $('.hero-pathway .hero-pathway-title-text').on("input", function () {
        //Code example changes
        var expr = this.value;
        $('.code-example .hero-pathway-list-title').text(expr);

        //Code changes
        titleText = expr;
        evaluatehtmlCode(categoryText, titleText, descriptionText, hideSvgImage);
    });

    //Hero-pathway description text area
    $('.hero-pathway .hero-pathway-description-text').on("input", function () {
        //Code example changes
        var expr = this.value;
        $('.code-example .hero-pathway-list-secondary-description').text(expr);

        //Code changes
        descriptionText = expr;
        evaluatehtmlCode(categoryText, titleText, descriptionText, hideSvgImage);
    });

    //Hero-pathway checkbox
    $('#hero-pathway-form-multiple-1').on("change", function () {
        //Code example changes
        $('.code-example .hero-pathway-list-content-right').toggleClass("hide-element");
        $('.hero-pathway-list.code-example').toggleClass("half-width");

        //Code changes
        hideSvgImage = !hideSvgImage;
        evaluatehtmlCode(categoryText, titleText, descriptionText, hideSvgImage);

    });

    //EVALUATE CODE
    //css
    function evaluatecssCode(borderColour,
        iconColour,
        imageBackgroundFill,
        imageForegroundShape,
        imageForegroundSecondary,
        imageForegroundPrimary) {

        heroPathwayCss =
            `
<h4>Desktop &amp; mobile</h4>
<h5>Containers</h5>
<code>
<pre>
.container {
  width: 100%;
  align-items: stretch;
  background-color: #fff;
  border-top: 4px solid ${borderColour};
  box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  transition: all 0.4s ease;
}
.container:hover {
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-4px);
  cursor: pointer;
}
.container-components {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 1.5rem 2.5rem;
}
.container-content {
  display: flex;
  min-height: 100%;
  padding-bottom: 1rem;
}
.container-content-right {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  min-height: 13rem;
  padding: 0;
  position: relative;
}
.container-content-left {
  flex: 1;
  min-height: 13rem;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
.label p {
  color: #000000;
  font-family: OpenSans-Semibold;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  text-align: left;
}
</pre>
</code>

<h5>Heading</h5>
<code>
<pre>
h3 {
  color: #333333;
  font-family: OpenSans-Semibold;
  font-size: 21px;
  line-height: 28px;
}
.container:hover h3 {
  color: #254f90;
  text-decoration: underline;
}
</pre>
</code>

<h5>Description</h5>
<code>
<pre>
.description p {
  color: #000000;
  font-family: OpenSans;
  font-size: 16px;
  line-height: 28px;
}
</pre>
</code>

<h5>SVG icon</h5>
<code>
<pre>
.action-card-info {
  height: auto;
  margin-top: auto;
  position: relative;
}
.action-card-info {
  align-items: center;
  display: flex;
  position: relative;
}
.circleIcon {
  bottom: 0;
  box-sizing: content-box;
  display: none;
  height: 2rem;
  left: 0;
  margin-bottom: auto;
  margin-right: 0;
  margin-top: auto;
  padding-top: inherit;
  position: absolute;
  top: 0;
  transform: translateX(-0.5rem);
  width: 2rem;
}
.BgaIcon {
  display: inline-block;
  fill: #254f90;
  line-height: 0;
  position: relative;
  right: 0;
}
.circleIcon svg {
  fill: none;
}
.container:hover .circleIcon {
  display: inline;
}
.container:hover .circleIcon svg {
  fill: ${iconColour};
}
.circleIcon-inner {
  position: absolute;
  left: 0;
  top: 7;
  height: 1rem;
  width: 1rem;
}
.circleIcon-inner svg {
  fill: ${iconColour};
}
.container:hover .circleIcon-inner svg {
  fill: #fff;
}
</pre>
</code>

<h5>SVG image</h5>
<code>
<pre>
.hero-pathway-list-illustration-bg svg path {
  fill: ${imageBackgroundFill};
}
.hero-pathway-list-illustration-image {
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}
.hero-pathway-list-illustration-image svg {
  height: 160px;
  width: 160px;
}
.hero-pathway-list-illustration-image svg .illustration-shape {
  fill: ${imageForegroundShape};
}
.hero-pathway-list-illustration-image svg .illustration-fill {
  fill: #fff;
}
.hero-pathway-list-illustration-image svg .illustration-secondary {
  fill: ${imageForegroundSecondary};
}
.hero-pathway-list-illustration-image svg .illustration-primary {
  fill: ${imageForegroundPrimary};
}
</pre>
</code>

<h5>Media queries</h5>
<code>
<pre>
@media (max-width: 900px) {
  .container {
    flex: 1;
    flex-basis: 100%;
    margin-bottom: 32px;
    height: auto;
  }
}
@media (max-width: 650px) {
  .container-components {
    padding: 24px;
  }
}
@media (max-width: 480px) {
  .container-content-left,
  .container-content-right {
    min-height: 0;
  }
}
@media (max-width: 1100px) {
  .hero-pathway-list-illustration-bg {
    display: none !important;
  }
}
@media (max-width: 800px) {
  .container-content-right {
    display: none !important;
  }
}
@media (max-width: 480px) {
  p {
    font-size: 16px;
  }
}
</pre>
</code>
`
        $(".hero-pathway-code .css-code").html(heroPathwayCss);
    }

    evaluatecssCode(borderColour,
        iconColour,
        imageBackgroundFill,
        imageForegroundShape,
        imageForegroundSecondary,
        imageForegroundPrimary);

    //html
    function evaluatehtmlCode(categoryText, titleText, descriptionText, hideSvgImage) {
        var heroPathwayHtml =
            `<div class="container" href="#">
    <div class="container-components">
            <div class="container-content">
                <div class="container-content-left">
                    <p class="label">${categoryText}</p>
                    <h3>${titleText}</h3>
                    <p class="description">
            ${descriptionText}
            </p>
                </div>${hideSvgImage ? "" : `<div class="container-content-right">
                    <div class="BgaIcon hero-pathway-list-illustration-bg">
                        <svg width="440" height="252">
                            <g fill="none" fill-rule="evenodd">
                                <path
                            d="M425.084 154.301a1.136 1.136 0 0 1-.773 1.305l-.12.03-32.582 6.467a8.447 8.447 0 0 0-6.687 9.674l.047.254.144.725.83 4.18 1.733-.344a1.136 1.136 0 0 1 1.305.773l.03.12a1.136 1.136 0 0 1-.772 1.305l-.12.03-1.735.344 1.491 7.511 1.734-.344a1.136 1.136 0 0 1 1.305.773l.03.12a1.136 1.136 0 0 1-.772 1.305l-.12.031-1.735.343 1.491 7.51 1.734-.343a1.136 1.136 0 0 1 1.305.773l.03.12a1.136 1.136 0 0 1-.772 1.305l-.12.03-1.734.344.477 2.4 1.013 5.11 1.734-.344a1.136 1.136 0 0 1 1.305.773l.03.12a1.136 1.136 0 0 1-.772 1.305l-.12.03-1.734.344 1.491 7.511 1.734-.344a1.136 1.136 0 0 1 1.304.773l.03.12a1.136 1.136 0 0 1-.772 1.305l-.12.03-1.734.344 1.491 7.51 1.733-.344a1.136 1.136 0 0 1 1.305.773l.03.12a1.136 1.136 0 0 1-.772 1.305l-.12.03-1.734.344.247 1.245c.128.64.325 1.255.587 1.837a8.452 8.452 0 0 0 9.078 4.853l.264-.048 17.522-3.479a1.136 1.136 0 0 1 .563 2.198l-.12.03-17.523 3.48a10.724 10.724 0 0 1-11.856-6.1 10.767 10.767 0 0 1-.655-1.925l-.088-.402-.248-1.246-1.732.345a1.136 1.136 0 0 1-1.305-.773l-.03-.12a1.136 1.136 0 0 1 .772-1.305l.12-.03 1.733-.345-1.49-7.51-1.733.344a1.136 1.136 0 0 1-1.305-.773l-.03-.12a1.136 1.136 0 0 1 .772-1.305l.12-.03 1.733-.345-1.49-7.51-1.733.344a1.136 1.136 0 0 1-1.305-.772l-.03-.12a1.136 1.136 0 0 1 .772-1.305l.12-.031 1.732-.345-1.013-5.11-.477-2.4-1.733.344a1.136 1.136 0 0 1-1.304-.773l-.03-.12a1.136 1.136 0 0 1 .772-1.305l.12-.03 1.732-.345-1.49-7.51-1.733.345a1.136 1.136 0 0 1-1.304-.773l-.031-.12a1.136 1.136 0 0 1 .773-1.305l.12-.03 1.732-.345-1.49-7.51-1.733.345a1.136 1.136 0 0 1-1.304-.773l-.031-.12a1.136 1.136 0 0 1 .773-1.305l.12-.03 1.732-.345-.829-4.18-.144-.725c-1.133-5.71 2.498-11.262 8.142-12.54l.284-.06 32.582-6.466a1.136 1.136 0 0 1 1.336.893zm-86.63 14.624l18.129 9.155 11.014 5.562a4.167 4.167 0 0 1 1.842 5.598l-22.792 45.135a4.167 4.167 0 0 1-5.6 1.842L311.906 221.5a4.168 4.168 0 0 1-1.841-5.6l22.792-45.135a4.17 4.17 0 0 1 5.599-1.841zm-3.57 2.866l-22.792 45.134a1.896 1.896 0 0 0 .838 2.548l29.142 14.716a1.895 1.895 0 0 0 2.547-.838l22.792-45.136a1.895 1.895 0 0 0-.838-2.545l-11.015-5.562-18.127-9.155a1.897 1.897 0 0 0-2.547.838zM49.646 153.052l52.26 42.464a9.408 9.408 0 0 1 1.369 13.234l-17.762 21.86c-3.277 4.031-9.203 4.644-13.233 1.367l-52.26-42.464c-4.033-3.276-4.645-9.2-1.369-13.234l17.762-21.858a9.407 9.407 0 0 1 13.233-1.369zm-11.47 2.802l-17.761 21.858a7.135 7.135 0 0 0 1.037 10.038l52.26 42.464a7.135 7.135 0 0 0 10.037-1.038l17.762-21.859a7.136 7.136 0 0 0-1.037-10.038l-52.26-42.464a7.135 7.135 0 0 0-10.037 1.04zm8.34.675l.188.145 52.26 42.463a4.748 4.748 0 0 1 .834 6.484l-.145.187-17.762 21.858a4.747 4.747 0 0 1-6.483.835l-.187-.145-52.259-42.464a4.746 4.746 0 0 1-.834-6.483l.145-.187 2.146-2.644.014-.017 12.92-15.898 2.682-3.3.012-.016.141-.163a4.745 4.745 0 0 1 6.329-.655zm282.938 36.875l23.786 12.012c.56.283.785.966.502 1.526l-11 21.785c-.284.56-.967.785-1.527.502l-23.786-12.01a1.136 1.136 0 0 1-.502-1.527l11.001-21.786c.283-.56.966-.785 1.526-.502zM41.798 158.796l-.012.015-.013.016-1.446 1.78a6.313 6.313 0 0 1 .1 8.082l-6.95 8.553a6.314 6.314 0 0 1-7.93 1.555l-1.511 1.858a2.474 2.474 0 0 0 .226 3.358l.133.116 52.259 42.464c1.01.82 2.481.708 3.358-.227l.116-.133 17.762-21.858c.82-1.01.709-2.482-.226-3.359l-.133-.116-52.26-42.463a2.472 2.472 0 0 0-3.473.359zm294.04 54.047l-4.479 8.864 9.866 4.982 4.475-8.863-9.863-4.983zm-.03 6.236l.113.05 4.74 2.397a1.136 1.136 0 0 1-.911 2.077l-.114-.05-4.74-2.397a1.136 1.136 0 0 1 .911-2.077zm.059-2.361c.283-.56.966-.784 1.526-.501l4.741 2.396a1.136 1.136 0 0 1-1.025 2.027l-4.74-2.396a1.136 1.136 0 0 1-.502-1.526zm-11.924-9.883l-4.476 8.867 9.863 4.981 4.478-8.864-9.865-4.984zm2.842 4.037l.045.116.475 1.444 1.445-.475a1.136 1.136 0 0 1 .824 2.114l-.115.045-1.446.474.475 1.445a1.136 1.136 0 0 1-.609 1.388l-.115.045a1.136 1.136 0 0 1-1.39-.609l-.044-.115-.475-1.445-1.443.475a1.136 1.136 0 0 1-.825-2.114l.116-.045 1.443-.474-.474-1.444a1.136 1.136 0 0 1 .61-1.39l.115-.044a1.136 1.136 0 0 1 1.388.609zm14.554-8.92l-4.478 8.864 9.863 4.982 4.478-8.866-9.863-4.98zm.779 4.645l.113.05 4.741 2.397a1.136 1.136 0 0 1-.912 2.078l-.113-.05-4.741-2.397a1.136 1.136 0 0 1 .912-2.078zm-12.674-10.653l-4.477 8.863 9.866 4.984 4.478-8.864-9.867-4.983zm4.427 3.5c.523.265.753.878.552 1.414l-.05.113-.687 1.356 1.357.686c.523.264.753.877.552 1.413l-.05.113a1.136 1.136 0 0 1-1.413.552l-.114-.05-1.357-.687-.685 1.358a1.136 1.136 0 0 1-2.078-.912l.05-.113.685-1.358-1.356-.684a1.136 1.136 0 0 1-.551-1.413l.05-.114a1.136 1.136 0 0 1 1.413-.551l.113.05 1.356.685.687-1.356c.283-.56.967-.784 1.526-.501zm90.66-2.229a1.136 1.136 0 0 1-.774 1.305l-.12.03-17.742 3.522a1.136 1.136 0 0 1-.562-2.198l.12-.03 17.742-3.522a1.136 1.136 0 0 1 1.335.893zm-85.98-21.825l23.787 12.012c.56.283.785.966.502 1.526l-5.042 9.983c-.283.56-.966.785-1.526.502L332.486 187.4a1.136 1.136 0 0 1-.502-1.526l5.04-9.983c.284-.56.967-.785 1.527-.502zm-.01 2.54l-4.017 7.955 21.758 10.988 4.018-7.955-21.76-10.988zm85.99 12.534a1.136 1.136 0 0 1-.774 1.304l-.12.031-14.536 2.885a1.136 1.136 0 0 1-.562-2.198l.12-.03 14.536-2.885a1.136 1.136 0 0 1 1.335.893zM38.856 162.417l-11.84 14.57.193.075a4.041 4.041 0 0 0 4.503-1.253l6.95-8.553a4.04 4.04 0 0 0 .194-4.84zm2.06-5.474c-.178 0-.347.04-.497.113l.016-.007c-.113.053-.22.125-.312.216l-.077.082-.012.016.882.717h1.136c0-.135-.023-.263-.066-.382l-.04-.1a1.131 1.131 0 0 0-.537-.543l-.114-.047-.116-.035a1.14 1.14 0 0 0-.263-.03zm.373.062l.006.003.007.002-.013-.005zm63.1-131.422c5.387 0 9.77 4.292 9.917 9.643l.004.277v83.512c0 5.386-4.292 9.77-9.643 9.917l-.278.004H15.136a1.136 1.136 0 0 1-.123-2.265l.123-.007h89.254a7.65 7.65 0 0 0 7.645-7.401l.004-.248V35.503a7.649 7.649 0 0 0-7.401-7.644l-.248-.004H15.136a1.136 1.136 0 0 1-.123-2.265l.123-.007h89.254zM38.86 87.408c.585 0 1.067.443 1.129 1.013l.006.123v27.222c0 .586-.443 1.068-1.012 1.13l-.124.006H15.136a1.136 1.136 0 0 1-.123-2.265l.123-.007h22.587V89.68H15.136a1.136 1.136 0 0 1-.123-2.265l.123-.007H38.86zm385.928-64.172c.463.359.573 1.004.273 1.492l-.071.102-39.783 51.3a1.136 1.136 0 0 1-1.12.419l-.125-.033-59.74-19.152 16.388 52.893 83.023-25.725a1.136 1.136 0 0 1 .789 2.127l-.116.043-84.108 26.062a1.136 1.136 0 0 1-1.379-.633l-.043-.116-17.37-56.063c-.261-.841.489-1.63 1.322-1.447l.11.029 61.06 19.576 39.297-50.672a1.136 1.136 0 0 1 1.593-.202zM84.295 34.839h10.552c.586 0 1.068.443 1.13 1.012l.006.124V77.26c0 .586-.443 1.068-1.012 1.13l-.124.006h-79.71a1.136 1.136 0 0 1-.124-2.265l.123-.007h11.227V69.8H15.137a1.136 1.136 0 0 1-1.13-1.012l-.006-.123c0-.586.443-1.068 1.012-1.13l.124-.007h11.226V61.77H15.137a1.136 1.136 0 0 1-1.13-1.012l-.006-.124c0-.585.443-1.067 1.012-1.129l.124-.007h11.226v-5.76l-11.226.001a1.136 1.136 0 0 1-1.13-1.012l-.006-.124c0-.586.443-1.068 1.012-1.13l.124-.006h11.226v-5.76H15.137a1.136 1.136 0 0 1-1.13-1.012l-.006-.124c0-.586.443-1.068 1.012-1.13l.124-.006h11.226V37.11H15.136a1.136 1.136 0 0 1-1.129-1.012L14 35.975c0-.585.443-1.067 1.013-1.13l.123-.006h69.159zM37.722 69.8h-9.087v6.323h9.087V69.8zm11.36 0h-9.088v6.323h9.087V69.8zm44.63 0H85.43v6.323h8.281V69.8zm-10.554 0h-9.087v6.323h9.087V69.8zm-22.718 0h-9.087v6.323h9.087V69.8zm11.36 0h-9.088v6.323H71.8V69.8zm21.911-8.03h-8.28v5.758h8.28V61.77zm-21.912 0h-9.087v5.758H71.8V61.77zm11.36 0H74.07v5.758h9.087V61.77zm-34.078 0h-9.087v5.758h9.087V61.77zm11.36 0h-9.088v5.758h9.087V61.77zm-22.719 0h-9.087v5.758h9.087V61.77zm22.718-8.033h-9.087v5.76h9.087v-5.76zm-22.718 0h-9.087v5.76h9.087v-5.76zm45.436 0h-9.087v5.76h9.087v-5.76zm10.553 0h-8.28v5.76h8.28v-5.76zm-21.912 0h-9.087v5.76H71.8v-5.76zm-22.718 0h-9.087v5.76h9.087v-5.76zm346.28-7.522a1.136 1.136 0 0 1-.633 1.379l-.116.043-34.517 10.695a1.136 1.136 0 0 1-.79-2.128l.117-.043 34.517-10.695c.6-.185 1.236.15 1.422.75zm11.403-14.537a1.136 1.136 0 0 1-.633 1.379l-.116.043-63.546 19.69a1.136 1.136 0 0 1-.789-2.128l.117-.043 63.546-19.69c.599-.185 1.235.15 1.421.75zM83.158 45.705h-9.087v5.76h9.087v-5.76zm-11.359 0h-9.087v5.76H71.8v-5.76zm-11.359 0h-9.087v5.76h9.087v-5.76zm-11.359 0h-9.087v5.76h9.087v-5.76zm-11.359 0h-9.087v5.76h9.087v-5.76zm55.99 0H85.43v5.76h8.281v-5.76zm252.276-27.098c.173.56-.107 1.151-.633 1.378l-.116.043-21.387 6.626 7.185 23.186a1.136 1.136 0 0 1-2.127.789l-.043-.117-7.521-24.27a1.136 1.136 0 0 1 .632-1.379l.117-.043 22.472-6.962c.599-.186 1.235.15 1.42.749zM71.799 37.111h-9.087v6.322H71.8v-6.322zm21.912 0h-8.28v6.322h8.28v-6.322zm-55.989 0h-9.087v6.322h9.087v-6.322zm11.36 0h-9.088v6.322h9.087v-6.322zm34.076 0h-9.087v6.322h9.087v-6.322zm-22.718 0h-9.087v6.322h9.087v-6.322zM403.653 21.64a1.136 1.136 0 0 1-.633 1.379l-.116.043-63.546 19.69a1.136 1.136 0 0 1-.788-2.128l.116-.043 63.546-19.69c.6-.185 1.235.15 1.421.75zM168.647 33.706a6.573 6.573 0 1 1-13.084 1.256 6.573 6.573 0 0 1 13.084-1.256zm-6.952-3.653a4.301 4.301 0 1 0 .823 8.563 4.301 4.301 0 0 0-.823-8.563zm216.234-11.447a1.136 1.136 0 0 1-.632 1.379l-.117.043-40.933 12.683a1.136 1.136 0 0 1-.788-2.128l.116-.043 40.933-12.683c.6-.185 1.236.15 1.421.75zm-225.171 1.599a6.572 6.572 0 0 1-8.958 9.58 1.136 1.136 0 0 1 1.44-1.757 4.3 4.3 0 0 0 5.86-6.27 1.136 1.136 0 0 1 1.658-1.553zm-3.156-1.183a6.573 6.573 0 1 1-12.93 2.179 6.574 6.574 0 0 1 12.93-2.179zm264.777-.53l.043.116 1.525 4.922a1.136 1.136 0 0 1-2.128.788l-.043-.116-1.525-4.922a1.136 1.136 0 0 1 2.128-.789zm-271.575-2.2a4.302 4.302 0 0 0 .821 8.562 4.3 4.3 0 0 0-.821-8.562zm24.1-.737a6.573 6.573 0 1 1-13.084 1.256 1.136 1.136 0 1 1 2.262-.217 4.3 4.3 0 0 0 8.561-.822 1.136 1.136 0 1 1 2.262-.217zm-53.729 3.919a1.136 1.136 0 0 1 .124 2.265l-.124.007H15.136a1.136 1.136 0 0 1-.123-2.266l.123-.006h98.04z"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="BgaIcon hero-pathway-list-illustration-image">
                        <svg width="160" height="160">
                            <g fill="none" fill-rule="evenodd">
                                <ellipse class="illustration-shape" cx="80.5" cy="80" rx="67.5" ry="68"></ellipse>
                                <path
                            d="M64.115 67.03v89.313H14.291L2.753 144.668v-77.64h61.362zm92.474 0v76.677l-12.5 12.499H74.252V67.03h82.338zM154.12 2.5V47.72L144.5 57.5h-.442c-3.426-.008-19.237-.083-47.433-.226l-.904-.005V2.5h58.4zm-69.028 0v41.037L71.5 57l-68.746-.002V2.5h82.338z"
                            class="illustration-fill"></path>
                                <path
                            d="M158.24 140.733v5.38c0 .735-.268 1.444-.75 1.993l-.136.146-10.555 10.555c-.57.57-1.326.911-2.125.964l-.22.007H74.148a1.606 1.606 0 0 1-1.6-1.46l-.006-.146v-2.778h70.137l15.562-14.66zM1 141.444l14.808 13.95h50.017v2.778c0 .887-.72 1.606-1.606 1.606H14.03c-.88 0-1.722-.35-2.344-.97l-9.658-9.686a3.521 3.521 0 0 1-1.03-2.488v-5.19zm48.956-8.026a1.5 1.5 0 0 1 .144 2.993l-.144.007H13.958a1.5 1.5 0 0 1-.145-2.993l.145-.007h35.998zm97.887-3.198a1.5 1.5 0 0 1 .144 2.994l-.144.006h-10.056a1.5 1.5 0 0 1-.145-2.993l.145-.007h10.056zm-104.45-4a1.5 1.5 0 0 1 .144 2.994l-.144.006H13.958a1.5 1.5 0 0 1-.145-2.993l.145-.007h29.435zm104.45-2.806a1.5 1.5 0 0 1 .144 2.993l-.144.007h-10.056a1.5 1.5 0 0 1-.145-2.993l.145-.007h10.056zm-99.951-4.392a1.5 1.5 0 0 1 .144 2.993l-.144.007H13.958a1.5 1.5 0 0 1-.145-2.993l.145-.007h33.934zm97.904-2.415a1.5 1.5 0 0 1 .144 2.993l-.144.007h-8.01a1.5 1.5 0 0 1-.144-2.993l.145-.007h8.009zm-100.127-4.782a1.5 1.5 0 0 1 .144 2.993l-.144.007H13.958a1.5 1.5 0 0 1-.145-2.993l.145-.007h31.71zm103.523-2.025a1.5 1.5 0 0 1 .144 2.994l-.144.007h-11.405a1.5 1.5 0 0 1-.145-2.994l.145-.007h11.405zM14.539 93.445a5.146 5.146 0 1 1 0 10.292 5.146 5.146 0 0 1 0-10.292zm79.409-1.7a1.5 1.5 0 0 1 1.493 1.355l.007.145v7.895a1.5 1.5 0 0 1-2.993.144l-.007-.144v-7.895a1.5 1.5 0 0 1 1.5-1.5zm8.704-2.79a1.5 1.5 0 0 1 1.493 1.356l.007.145v10.684a1.5 1.5 0 0 1-2.993.144l-.007-.144V90.456a1.5 1.5 0 0 1 1.5-1.5zm8.704-2.163a1.5 1.5 0 0 1 1.493 1.355l.007.145v12.848a1.5 1.5 0 0 1-2.993.144l-.007-.144V88.292a1.5 1.5 0 0 1 1.5-1.5zm8.705-6.202a1.5 1.5 0 0 1 1.493 1.355l.007.145v19.05a1.5 1.5 0 0 1-2.993.144l-.007-.144V82.09a1.5 1.5 0 0 1 1.5-1.5zm8.704-2.452a1.5 1.5 0 0 1 1.493 1.356l.007.144v21.501a1.5 1.5 0 0 1-2.993.145l-.007-.145v-21.5a1.5 1.5 0 0 1 1.5-1.5zm8.704-.949a1.5 1.5 0 0 1 1.493 1.356l.007.144v22.45a1.5 1.5 0 0 1-2.993.145l-.007-.145V78.69a1.5 1.5 0 0 1 1.5-1.5zm8.704-2.176a1.5 1.5 0 0 1 1.493 1.355l.007.145v24.626a1.5 1.5 0 0 1-2.993.145l-.007-.145V76.513a1.5 1.5 0 0 1 1.5-1.5zM39.732 86.883a5.146 5.146 0 1 1 0 10.291 5.146 5.146 0 0 1 0-10.292zm-13.558-5.146a5.146 5.146 0 1 1 0 10.292 5.146 5.146 0 0 1 0-10.292zm26.154-8.196a5.146 5.146 0 1 1 0 10.292 5.146 5.146 0 0 1 0-10.292zm34.554-33.06v5.224c0 .793-.289 1.557-.808 2.15l-.148.158-11.533 11.533c-.57.57-1.327.911-2.127.964l-.219.008H2.66a1.607 1.607 0 0 1-1.6-1.461l-.006-.146v-2.78h70.178l15.651-15.65zm68.897 5.615v3.761c0 .56-.2 1.1-.562 1.523l-.126.137-8.3 8.301a2.392 2.392 0 0 1-1.5.692l-.19.007H95.164c-.596 0-1.087-.45-1.15-1.03l-.006-.126v-2h50.508l11.264-11.265zm-18.31-.06a1.5 1.5 0 0 1 .144 2.993l-.144.007h-33.917a1.5 1.5 0 0 1-.144-2.993l.144-.007h33.917zm7.354-6.807a1.5 1.5 0 0 1 .144 2.993l-.144.007h-41.271a1.5 1.5 0 0 1-.144-2.993l.144-.007h41.271zM21.164 24.711a1.5 1.5 0 0 1 1.493 1.355l.007.145v13.337a1.5 1.5 0 0 1-2.993.144l-.007-.144V26.21a1.5 1.5 0 0 1 1.5-1.5zm7.41-8.362a1.5 1.5 0 0 1 1.493 1.355l.007.145v21.699a1.5 1.5 0 0 1-2.993.144l-.007-.144v-21.7a1.5 1.5 0 0 1 1.5-1.5zm7.41 13.337a1.5 1.5 0 0 1 1.493 1.355l.007.145v8.362a1.5 1.5 0 0 1-2.994.144l-.006-.144v-8.362a1.5 1.5 0 0 1 1.5-1.5zm7.409-4.975a1.5 1.5 0 0 1 1.493 1.355l.007.145v13.337a1.5 1.5 0 0 1-2.993.144l-.007-.144V26.21a1.5 1.5 0 0 1 1.5-1.5zm7.41-8.68a1.5 1.5 0 0 1 1.493 1.355l.007.145v22.017a1.5 1.5 0 0 1-2.994.144l-.006-.144V17.53a1.5 1.5 0 0 1 1.5-1.5zm7.409 8.68a1.5 1.5 0 0 1 1.493 1.355l.007.145v13.337a1.5 1.5 0 0 1-2.994.144l-.006-.144V26.21a1.5 1.5 0 0 1 1.5-1.5zm7.41-4.384a1.5 1.5 0 0 1 1.492 1.355l.007.145v17.72a1.5 1.5 0 0 1-2.993.145l-.007-.144V21.827a1.5 1.5 0 0 1 1.5-1.5zm79.202 12.096a1.5 1.5 0 0 1 .144 2.993l-.144.007h-10.056a1.5 1.5 0 0 1-.145-2.994l.145-.006h10.056zm-30.542-19.947V23.2l7.581 7.581s-15.04 10.3-18.304-7.58c0 0-.663-10.062 10.723-10.725zm30.542 13.14a1.5 1.5 0 0 1 .144 2.993l-.144.007h-10.056a1.5 1.5 0 0 1-.145-2.993l.145-.007h10.056zm-2.047-6.807a1.5 1.5 0 0 1 .144 2.993l-.144.007h-8.01a1.5 1.5 0 0 1-.144-2.993l.145-.007h8.009zm3.396-6.806a1.5 1.5 0 0 1 .144 2.993l-.144.007h-11.405a1.5 1.5 0 0 1-.145-2.993l.145-.007h11.405z"
                            class="illustration-secondary"></path>
                                <path
                            d="M64.115 65.53a1.5 1.5 0 0 1 1.493 1.355l.007.144v89.314a1.5 1.5 0 0 1-1.355 1.493l-.145.006H21.021a1.5 1.5 0 0 1-.144-2.993l.144-.006h41.594V68.53H4.253v74.638h10.039a1.5 1.5 0 0 1 1.493 1.356l.007.145v11.674c0 .25-.062.487-.17.694l-.01.017c-.02.038-.042.075-.065.11l-.024.035a1.313 1.313 0 0 1-.059.08l-.034.04-.062.069-.022.021-.085.076-.038.033a1.49 1.49 0 0 1-1.082.317l-.038-.004a1.354 1.354 0 0 1-.153-.028 1.46 1.46 0 0 1-.403-.158l-.074-.045a1.227 1.227 0 0 1-.052-.036l-.029-.02-.028-.022a.883.883 0 0 1-.026-.021l-.036-.03a1.51 1.51 0 0 1-.057-.054l-.02-.02-11.539-11.674-.012-.013-.033-.036-.013-.013.046.048-.059-.064-.04-.05a1.633 1.633 0 0 1-.19-.313 1.693 1.693 0 0 1-.042-.1 1.505 1.505 0 0 1-.083-.366l-.007-.148V67.03a1.5 1.5 0 0 1 1.356-1.493l.144-.007h61.362zm-49.893 92.31c.022.002.044.002.07.003zM156.59 65.53a1.5 1.5 0 0 1 1.493 1.355l.007.145v76.677c0 .357-.124.685-.332.942l-.017.02-.078.084.04-.04a1.511 1.511 0 0 1-.038.04l-12.514 12.513-.028.028-.023.021-.023.02a1.47 1.47 0 0 1-.268.188l-.013.007-.012.006a1.538 1.538 0 0 1-.479.154 1.473 1.473 0 0 1-.544-.02 1.473 1.473 0 0 1-.256-.083l-.055-.024-.053-.027a.956.956 0 0 1-.116-.067 1.356 1.356 0 0 1-.111-.08l-.072-.058-.04-.038-.014-.013-.014-.014a1.53 1.53 0 0 1-.082-.089l-.033-.039a1.554 1.554 0 0 1-.217-.374 1.491 1.491 0 0 1-.1-.414l-.007-.144v-12.5a1.5 1.5 0 0 1 1.355-1.492l.145-.007h10.999V68.53H75.75v86.176h61.609a1.5 1.5 0 0 1 .144 2.993l-.144.007H74.25a1.5 1.5 0 0 1-1.493-1.356l-.006-.144V67.03a1.5 1.5 0 0 1 1.355-1.493l.145-.007h82.338zM15.27 157.477l-.022.02.012-.012.01-.008zm.018-.016l-.003.005-.005.002.008-.007zm.05-.045l-.01.01-.02.017.03-.027zm-8.995-11.248l6.447 6.523v-6.522H6.345zm146.624-.962h-7.378l-.001 7.378 7.379-7.378zm-22.355-35.405a1.5 1.5 0 0 1 1.493 1.356l.007.144v36.144a1.5 1.5 0 0 1-1.356 1.493l-.144.007h-10.43a1.5 1.5 0 0 1-1.493-1.356l-.007-.144v-36.144a1.5 1.5 0 0 1 1.356-1.493l.144-.007h10.43zm-18.667 13.216a1.5 1.5 0 0 1 1.493 1.356l.007.144v22.927a1.5 1.5 0 0 1-1.356 1.493l-.144.007h-10.43a1.5 1.5 0 0 1-1.493-1.356l-.007-.144v-22.927a1.5 1.5 0 0 1 1.356-1.493l.144-.007h10.43zM93.28 134.064a1.5 1.5 0 0 1 1.493 1.356l.007.144v11.88a1.5 1.5 0 0 1-1.356 1.493l-.144.007H82.85a1.5 1.5 0 0 1-1.493-1.356l-.007-.144v-11.88a1.5 1.5 0 0 1 1.356-1.493l.144-.007h10.43zm35.833-21.263h-7.43v33.144h7.43v-33.144zm-18.667 13.216h-7.43v19.927h7.43v-19.927zM91.78 137.064h-7.43v8.88h7.43v-8.88zm56.45-61.991a1.5 1.5 0 0 1-.81 1.847l-.134.052-10.955 3.682a1.5 1.5 0 0 1-.316.07l-.162.008h-8.348l-9.732 2.994-4.742 4.968a1.5 1.5 0 0 1-.656.402l-.152.037-8.386 1.577-.118.017-5.753.612-14.636 10.074a1.5 1.5 0 0 1-1.816-2.384l.115-.087 14.95-10.29a1.5 1.5 0 0 1 .544-.233l.148-.023 6.07-.646 7.853-1.476 4.68-4.902a1.5 1.5 0 0 1 .499-.346l.144-.052 10.321-3.175a1.5 1.5 0 0 1 .292-.06l.15-.007h8.328l10.722-3.603a1.5 1.5 0 0 1 1.9.944zM21.64 89.318a5.17 5.17 0 0 0 2.128 2.115l-4.693 4.724a5.17 5.17 0 0 0-1.886-1.978l-.242-.137 4.694-4.724zm9.669-2.091l4.354 1.652a5.121 5.121 0 0 0-1.065 2.805l-4.354-1.653a5.12 5.12 0 0 0 1.065-2.804zm10.713.191l5.836-6.18a5.17 5.17 0 0 0 2.181 2.06l-5.836 6.18a5.17 5.17 0 0 0-2.181-2.06l5.836-6.18zm61.38.326l-.06.006-.059.011.119-.017zm32.451-10.011h-.245l-.233.078.478-.079zM154.12.999a1.5 1.5 0 0 1 1.494 1.356l.006.144v45.222c0 .254-.062.493-.173.702l-.013.023a1.244 1.244 0 0 1-.058.097l-.023.033a1.241 1.241 0 0 1-.056.077l-.048.056-.008.01-.04.041.03-.03-.029.03-.02.022-9.548 9.548-.02.02a1.313 1.313 0 0 1-.069.062l-.04.033a1.379 1.379 0 0 1-.247.16 1.37 1.37 0 0 1-.124.056 1.491 1.491 0 0 1-1.116.002 1.487 1.487 0 0 1-.202-.098l-.051-.032a1.189 1.189 0 0 1-.123-.088l-.04-.033-.063-.059.023.023-.029-.026-.013-.014-.007-.006-.02-.02a1.636 1.636 0 0 1-.062-.069l-.034-.04-.057-.078a.914.914 0 0 1-.072-.115l-.015-.027-.036-.07a1.497 1.497 0 0 1-.143-.663v-9.527a1.5 1.5 0 0 1 1.355-1.493l.145-.007h8.046V4h-55.4v51.77h40.624a1.5 1.5 0 0 1 .144 2.993l-.144.007H95.72a1.5 1.5 0 0 1-1.494-1.355l-.007-.145V2.5a1.5 1.5 0 0 1 1.356-1.493L95.721 1h58.4zM85.092 1a1.5 1.5 0 0 1 1.493 1.356l.007.145v41.037a1.496 1.496 0 0 1-.24.814l-.023.033-.03.043-.013.018a1.507 1.507 0 0 1-.018.023l-.001.001a.717.717 0 0 1-.012.014l-.02.025-.03.034-.006.007-.025.026-.022.022-13.46 13.461-.006.006-.042.04-.02.018-.001.001-.07.059a1.707 1.707 0 0 1-.203.133l-.013.007-.012.006c-.034.018-.069.035-.105.05l-.028.012c-.074.03-.151.054-.23.071l-.073.015-.127.016-.13.006-.145-.007-.113-.015-.072-.015a1.474 1.474 0 0 1-.23-.071l-.03-.012-.052-.024-.076-.039a1.57 1.57 0 0 1-.316-.23l-.027-.027-.011-.012-.071-.077-.033-.039a1.555 1.555 0 0 1-.123-.181 1.484 1.484 0 0 1-.194-.605l-.007-.146v-9.072l-55.954.001a1.5 1.5 0 0 1-1.493-1.355l-.007-.145v-33.65a1.5 1.5 0 0 1 2.994-.145l.006.144v32.151h54.454v-1.39a1.5 1.5 0 0 1 1.355-1.493l.145-.007 11.96-.002V4H4.254v51.498h60.647a1.5 1.5 0 0 1 .144 2.993l-.144.007H2.754a1.5 1.5 0 0 1-1.493-1.356l-.007-.144V2.5A1.5 1.5 0 0 1 2.61 1.007L2.754 1h82.338zm65.406 48.222h-4.424v4.425l4.424-4.425zM81.47 45.036h-8.338v8.34l8.338-8.34zm32.813-34.06c6.75 0 12.223 5.473 12.223 12.224 0 6.75-5.473 12.223-12.223 12.223-6.752 0-12.223-5.472-12.223-12.223 0-6.75 5.472-12.224 12.223-12.224zm0 3a9.223 9.223 0 0 0-9.223 9.224 9.223 9.223 0 0 0 18.446 0c0-5.094-4.13-9.224-9.223-9.224z"
                            class="illustration-primary"></path>
                            </g>
                        </svg>
                    </div>
                </div>`}
            </div>
            <div class="action-card-info">
                <div class="BgaIcon circleIcon">
                    <svg viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8"></circle>
                    </svg>
                </div>
                <div class="BgaIcon circleIcon-inner articleIcon">
                    <svg viewBox="0 0 16 16">
                        <path d="M11.173 10.07H0v-3h11.171L7.02 2.923 8.929 1 16 8.57l-7.071 7.573-1.91-1.909z"></path>
                    </svg>
                </div>
            </div>
        </div>
 </div>`


        $(".hero-pathway-code .html-code code pre").text(heroPathwayHtml);
    }

    evaluatehtmlCode(categoryText, titleText, descriptionText, hideSvgImage);

}); // END doc ready