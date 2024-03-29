/*jshint browser: true, devel: true, jquery: true*/
$(document).ready(function () {


	$("[role=tab], [role=button], [role=link]").keypress(function (event) {
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if (keycode == '13') {
			this.click();
		}
	});


	/*----------- General page issues ----------- */

	// Prevent click empty 'a' tag from causing scrolling
	$('a').on('click', function (e) {
		if (!$(this).attr('href')) {
			e.preventDefault();
		}
	});

	/*----------- Coming soon ----------- */
	//Standard pathway cards
	$('.standard-pathway-list .coming-soon').append("<div class='coming-soon-label'><p>Coming soon</p></div>");
	//Html and Css tabs
	$('.nav-tabs.coming-soon .html-tab').append("<div class='coming-soon-label'><p>HTML coming soon</p></div>");
	$('.nav-tabs.coming-soon .html-tab a').removeClass("active");
	$('.nav-tabs.coming-soon .css-tab a').addClass("active");
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

	$('.element-design.component').on('click', function () {
		if ($(this).hasClass('unavailable')) {
			return;
		} else {
			$(this).toggleClass('closed');
			$(this).next('.element-code').toggleClass('open');
			var icon = $(this).find('.float-button').find('.BgaIcon');
			$(icon).toggleClass('open');

			//Reset copy-code button text
			//html button
			$('.html-section').find('button').html("Copy HTML\n                <span class=\"copy-code-svg\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n                                        viewBox=\"0 0 89.458 103.583\">\n                                        <path\n                                            d=\"M67.917,1h-56.5A9.444,9.444,0,0,0,2,10.417V76.333h9.417V10.417h56.5ZM82.042,19.833H30.25a9.444,9.444,0,0,0-9.417,9.417V95.167a9.444,9.444,0,0,0,9.417,9.417H82.042a9.444,9.444,0,0,0,9.417-9.417V29.25A9.444,9.444,0,0,0,82.042,19.833Zm0,75.333H30.25V29.25H82.042Z\"\n                                            transform=\"translate(-2 -1)\" fill=\"#ffffff\"></path>\n                                    </svg>\n                                </span>");
			$('.html-section').find('button').removeClass('copied');
			//css button
			$('.css-section').find('button').html("Copy CSS\n                <span class=\"copy-code-svg\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n                                        viewBox=\"0 0 89.458 103.583\">\n                                        <path\n                                            d=\"M67.917,1h-56.5A9.444,9.444,0,0,0,2,10.417V76.333h9.417V10.417h56.5ZM82.042,19.833H30.25a9.444,9.444,0,0,0-9.417,9.417V95.167a9.444,9.444,0,0,0,9.417,9.417H82.042a9.444,9.444,0,0,0,9.417-9.417V29.25A9.444,9.444,0,0,0,82.042,19.833Zm0,75.333H30.25V29.25H82.042Z\"\n                                            transform=\"translate(-2 -1)\" fill=\"#ffffff\"></path>\n                                    </svg>\n                                </span>");
			$('.css-section').find('button').removeClass('copied');
		}
	});

	$('.foundation .float-button').on('click', function () {
		if ($(this).hasClass('unavailable')) {
			return;
		} else {
			$(this).parent().toggleClass('closed');
			$(this).parent().next('.element-code').toggleClass('open');
			var icon = $(this).find('.BgaIcon');
			$(icon).toggleClass('open');
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
				$([document.documentElement, document.body]).animate({
					scrollTop: $(element_id).offset().top
				}, 400);
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
		if ($(this).find('input').attr('checked') == "checked") {} else {
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

		if (example_element.hasClass('radio-example')) {
			if (element_state == "focus-state") {
				example_element.find(".radio-item").attr('data-state', "default-state");
				example_element.find(".radio-item:first").attr('data-state', element_state);
				common_ancestor.find(".error-message").removeClass('show');
			} else if (element_state == "default-state" || element_state == "disabled-state") {
				example_element.find(".radio-item").attr('data-state', element_state);
				common_ancestor.find(".error-message").removeClass('show');
			} else if (element_state == "error-state") {
				example_element.find(".radio-item").attr('data-state', element_state);
				common_ancestor.find(".error-message").addClass('show');
			} else if (element_state == "selected-state") {
				example_element.find(".radio-item").attr('data-state', element_state);
				common_ancestor.find(".error-message").removeClass('show');
			}
		}

		if (example_element.hasClass('multiple-select-example')) {

			example_element.attr('data-state', element_state);
            
			if (element_state == "focus-state" || element_state == "selected-state" ) {
				example_element.find(".checkbox-item").removeAttr('data-state');
                example_element.find(".checkbox-item").removeAttr('checked');
				example_element.find(".checkbox-item:first").attr('data-state', element_state);
				common_ancestor.find(".error-message").removeClass('show');
			} else {
				example_element.find(".checkbox-item").removeAttr('data-state');
				common_ancestor.find(".error-message").removeClass('show');
			}
		}

		if (example_element.hasClass('button-example')) {
			example_element.attr('data-state', element_state);
			example_element.find(".button-wrapper").attr('data-state', element_state);
		} else if (example_element.hasClass('dynamic-example')) {
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
            console.log($(this).parent('.radio-item').attr('data-state'));
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
			$('.textarea-char-count').addClass('under');
		} else if (textarea_count > max_length) {
			var excess_count = textarea_count - max_length;
			$('.textarea-char-count').text('Character limited exceeded by ' + excess_count).addClass('excess-count');
			$(common_ancestor).find('.error-message').addClass('error-hidden');
			$(common_ancestor).find('.design-system-card-content .form-example-container').attr('data-state', 'error-state');
			$('.state-selector label input').removeAttr('checked');
			$('.state-selector .error-label input').attr('checked', 'checked');
			$('.textarea-char-count').removeClass('under');
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
		$("#contextual-answer-1").slideToggle(300, function () {});
	});

	// Infographic colour select option
	$('.infographic-colour-selector .variation-select-wrapper #infographic-colour-set').change(function () {

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
			$('.accordion-item-tile').attr('aria-expanded', 'false');
			$('.accordion-item-tile').attr('title', 'Expand');
			$('.accordion-item-content').removeClass('visible');
		} else {
			$(this).addClass('all-open');
			$(this).children('h5').text('Close all');
			$('.accordion-item-tile').addClass('open');
			$('.accordion-item-tile').attr('aria-expanded', 'true');
			$('.accordion-item-tile').attr('title', 'Collapse');
			$('.accordion-item-content').addClass('visible');
		}
	});

	$('.accordion-item-tile').on('click', function () {
		// Toggle classes to show / hide accordion content
		$(this).toggleClass('open');
		$(this).next('.accordion-item-content').toggleClass('visible');
		if ($(this).hasClass('open')) {
			$(this).attr('aria-expanded', 'true');
			$(this).attr('title', 'Collapse');
		} else {

						$(this).attr('aria-expanded', 'false');
			$(this).attr('title', 'Expand');
		}

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

	/*----------- COMPONENT EXAMPLE: Guide accordion ----------- */
	$('.guide-accordion-group .accordion-group-toggle').on('click', function () {
		if ($(".accordion-group-toggle-content").hasClass('all-open')) {
			$(this).next('.guide-accordion').addClass('active');
		} else {
			$(this).next('.guide-accordion').removeClass('active');
		}
	});

	$('.guide-accordion-tile').on('click', function () {
		$(this).parent().toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.accordion-group-toggle-content').addClass('all-open');
			$('.accordion-group-toggle-content').children('h5').text('Close all');

		} else {
			$('.accordion-group-toggle-content').removeClass('all-open');
			$('.accordion-group-toggle-content').children('h5').text('Open all');
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


	/*----------- COMPONENT EXAMPLE: Standard checklist ----------- */
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
    
    
    
    
    /*----------- COMPONENT EXAMPLE: Lightweight checklist ----------- */
    
    /*------------------- Open & close lightweight checklist items -------------------*/
    $(".lightweight .checklist-sub-item-title").on("click", function () {

        $(this).next('.checklist-sub-item:after').slideToggle(400);

		if ($(this).closest('.checklist-sub-item').hasClass('open')) {
			$(this).closest('.checklist-sub-item').removeClass('open');
		} else {
			$(this).closest('.checklist-sub-item').addClass('open');
		}

	});
    
     /*------------------- Close functionality -------------------*/ 
    $('.lightweight .close-item btn').on('click', function () {

        // Scroll and close
        var parent_item = $(this).parents('.checklist-item');

        parent_item.removeClass('open');
        var parent_position = parent_item.position();
        $("html").animate({
                scrollTop: $(parent_item).offset().top
            },
            400 //speed
        );

        var content = $(this).parents('.checklist-sub-item-wrapper');
        setTimeout(function () {
            content.slideUp(1000);
        }, 400);
    });

    
    

	/*----------- COMPONENT EXAMPLE: Hidden disclaimer ----------- */
	$('.disclaimer-title-wrapper').on('click', function () {
		$(this).next('.hidden-disclaimer-content').slideToggle();
		$(this).toggleClass('open');
	});
    
    
    /*----------- COMPONENT EXAMPLE: Modal ----------- */
    $('.modal-example .checkbox-item input').on('click', function(){
        $(this).next('label').toggleClass('checked');
    });
    $(".modal-example .scrollable").on("scroll", function() {
            
        var scroll_wrapper = $(this).parents('.scroll-wrapper'),
            scroll_position = $(this).scrollTop(),
            scroll_height = $(this)[0].scrollHeight,
            container_height = $(this).innerHeight(),
            scroll_done = scroll_height - container_height;

        if (scroll_position === 0) {
            scroll_wrapper.removeClass('scrolling');
        } else if (scroll_position === scroll_done) {
            scroll_wrapper.addClass("scroll-done");
            scroll_wrapper.removeClass('scrolling');
        } else {
            scroll_wrapper.removeClass("scroll-done");
            scroll_wrapper.addClass('scrolling');
        }
        
        
    });
    
    
	/*----------- COMPONENT EXAMPLE: Mini-list ----------- */
	$('.mini-list .mini-list-item .title-container').on('click', function () {
		$(this).parent().toggleClass('active');
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
		var tabAncestors = $(this).parents('.tabs-component');
		$(tabAncestors[0]).find('.tab-section').hide();

		var active_section = "." + $(this).attr("href");
		$(tabAncestors).find(active_section).show();

		//Change copy-code button text
		if (active_section === '.css-section') {
			$('.html-section').find('button').html("Copy HTML\n            <span class=\"copy-code-svg\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n                                    viewBox=\"0 0 89.458 103.583\">\n                                    <path\n                                        d=\"M67.917,1h-56.5A9.444,9.444,0,0,0,2,10.417V76.333h9.417V10.417h56.5ZM82.042,19.833H30.25a9.444,9.444,0,0,0-9.417,9.417V95.167a9.444,9.444,0,0,0,9.417,9.417H82.042a9.444,9.444,0,0,0,9.417-9.417V29.25A9.444,9.444,0,0,0,82.042,19.833Zm0,75.333H30.25V29.25H82.042Z\"\n                                        transform=\"translate(-2 -1)\" fill=\"#ffffff\"></path>\n                                </svg>\n                            </span>");
			$('.html-section').find('button').removeClass('copied');
		} else if (active_section === '.html-section') {
			$('.css-section').find('button').html("Copy CSS\n            <span class=\"copy-code-svg\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n                                    viewBox=\"0 0 89.458 103.583\">\n                                    <path\n                                        d=\"M67.917,1h-56.5A9.444,9.444,0,0,0,2,10.417V76.333h9.417V10.417h56.5ZM82.042,19.833H30.25a9.444,9.444,0,0,0-9.417,9.417V95.167a9.444,9.444,0,0,0,9.417,9.417H82.042a9.444,9.444,0,0,0,9.417-9.417V29.25A9.444,9.444,0,0,0,82.042,19.833Zm0,75.333H30.25V29.25H82.042Z\"\n                                        transform=\"translate(-2 -1)\" fill=\"#ffffff\"></path>\n                                </svg>\n                            </span>");
			$('.css-section').find('button').removeClass('copied');
		} else {
			console.log("There was an error");
		}
	});

	$(".tabs-component-nav-tile").on("click", function () {
		$(".tab-section").hide();
		var active_section = $(this).attr("data-attribute");
		$("#" + active_section).show();

		$(".nav-link.active").removeClass("active");
		$(".nav-link[href=" + active_section + "]").addClass("active");

		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});

	//TAB COMPONENT CONTENT

	//Copy code text
	$(".copy-code-button").click(function () {
		//Copy text
		var $temp = $("<input>");
		$("body").append($temp);
		//If css tab is selected
		if ($(this).closest("div").find(".css-code").find("code").text()) {
			$temp.val($(this).closest("div").find(".css-code").find("code").text()).select();
			//If html tab is selected
		} else if ($(this).closest("div").find(".html-code").find("code").find("pre").text()) {
			$temp.val($(this).closest("div").find(".html-code").find("code").find("pre").text()).select();
		}

		document.execCommand("copy");
		$temp.remove();
		$(this).focus().blur();

		//Change button text
		if ($(this).parent().is('.css-section')) {
			$(this).html("CSS copied \n            <span class=\"code-copied-svg\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\"  width=\"20\" height=\"20\" viewBox=\"0 0 89.458 103.583\">\n                    <g transform=\"translate(2801.694 4748.224)\">\n                        <path d=\"M67.917,1h-56.5A9.444,9.444,0,0,0,2,10.417V76.333h9.417V10.417h56.5ZM82.042,19.833H30.25a9.444,9.444,0,0,0-9.417,9.417V95.167a9.444,9.444,0,0,0,9.417,9.417H82.042a9.444,9.444,0,0,0,9.417-9.417V29.25A9.444,9.444,0,0,0,82.042,19.833Zm0,75.333H30.25V29.25H82.042Z\" transform=\"translate(-2803.694 -4749.224)\" fill=\"$white\"></path>\n                        <path d=\"M0,20.386l5.218-5.309,9.2,9.225L38.737,0,44,5.23,14.422,34.808Z\" transform=\"translate(-2770.08 -4703)\" fill=\"#ffffff\"></path>\n                    </g>\n                </svg>\n        </span>");
			$(this).addClass('copied');
		} else if ($(this).parent().is('.html-section')) {
			$(this).html("HTML copied \n            <span class=\"code-copied-svg\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\"  width=\"20\" height=\"20\" viewBox=\"0 0 89.458 103.583\">\n                    <g transform=\"translate(2801.694 4748.224)\">\n                        <path d=\"M67.917,1h-56.5A9.444,9.444,0,0,0,2,10.417V76.333h9.417V10.417h56.5ZM82.042,19.833H30.25a9.444,9.444,0,0,0-9.417,9.417V95.167a9.444,9.444,0,0,0,9.417,9.417H82.042a9.444,9.444,0,0,0,9.417-9.417V29.25A9.444,9.444,0,0,0,82.042,19.833Zm0,75.333H30.25V29.25H82.042Z\" transform=\"translate(-2803.694 -4749.224)\" fill=\"$white\"></path>\n                        <path d=\"M0,20.386l5.218-5.309,9.2,9.225L38.737,0,44,5.23,14.422,34.808Z\" transform=\"translate(-2770.08 -4703)\" fill=\"#ffffff\"></path>\n                    </g>\n                </svg>\n        </span>");
			$(this).addClass('copied');
		}
	});

	//ICON SVG CONTENT
	$(".icons .example").click(function () {
		var svgSrc = $(this).find("img").attr('src');
		$.get(svgSrc, function (data) {
			var svgNode = data.childNodes;
			var svgCode = svgNode[0].outerHTML || new XMLSerializer().serializeToString(svgNode[0]);
			//Copy text
			var $temp = $("<input>");
			$("body").append($temp);
			$temp.val(svgCode).select();
			document.execCommand("copy");
			$temp.remove();
			$(".example.copied").focus().blur();
		});



		//Change button text
		$('.copy-icon-code').html("Copy code\n            <span class=\"copy-code-svg\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n                                    viewBox=\"0 0 89.458 103.583\">\n                                    <path\n                                        d=\"M67.917,1h-56.5A9.444,9.444,0,0,0,2,10.417V76.333h9.417V10.417h56.5ZM82.042,19.833H30.25a9.444,9.444,0,0,0-9.417,9.417V95.167a9.444,9.444,0,0,0,9.417,9.417H82.042a9.444,9.444,0,0,0,9.417-9.417V29.25A9.444,9.444,0,0,0,82.042,19.833Zm0,75.333H30.25V29.25H82.042Z\"\n                                        transform=\"translate(-2 -1)\" fill=\"#ffffff\"></path>\n                                </svg>\n                            </span>");
		$('.example').removeClass('copied');


		$(this).find(".copy-icon-code").html("Copied \n            <span class=\"code-copied-svg\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\"  width=\"20\" height=\"20\" viewBox=\"0 0 89.458 103.583\">\n                    <g transform=\"translate(2801.694 4748.224)\">\n                        <path d=\"M67.917,1h-56.5A9.444,9.444,0,0,0,2,10.417V76.333h9.417V10.417h56.5ZM82.042,19.833H30.25a9.444,9.444,0,0,0-9.417,9.417V95.167a9.444,9.444,0,0,0,9.417,9.417H82.042a9.444,9.444,0,0,0,9.417-9.417V29.25A9.444,9.444,0,0,0,82.042,19.833Zm0,75.333H30.25V29.25H82.042Z\" transform=\"translate(-2803.694 -4749.224)\" fill=\"$white\"></path>\n                        <path d=\"M0,20.386l5.218-5.309,9.2,9.225L38.737,0,44,5.23,14.422,34.808Z\" transform=\"translate(-2770.08 -4703)\" fill=\"#ffffff\"></path>\n                    </g>\n                </svg>\n        </span>");
		$(this).addClass('copied');

	});

	// PAGE PATTERNS - RULES ACCORDION
	$('.rules-accordion-item-tile-inner').on('click', function () {
		$(this).parents('.rules-accordion-item').toggleClass('open');
		$(this).parents('.rules-accordion-item').find('.rules-accordion-item-content').slideToggle();

		if ($('.rules-accordion-item').length == $('.rules-accordion-item.open').length) {
			$('.rules-accordion-group-toggle').addClass('open');
			$(this).parents('.rules-accordion').find('.rules-accordion-group-toggle-content h5').text('Close all');
		} else if ($('.rules-accordion-item.open').length === 0) {
			$('.rules-accordion-group-toggle').removeClass('open');
			$(this).parents('.rules-accordion').find('.rules-accordion-group-toggle-content h5').text('Open all');
		}

	});

	$('.rules-accordion-group-toggle').on('click', function () {

		if (!$(this).hasClass('open')) {

			$('.rules-accordion-item').each(function () {
				if (!$(this).hasClass('open')) {
					$(this).addClass('open');
					$(this).find('.rules-accordion-item-content').slideDown();
				}
			});
			$('.rules-accordion-group-toggle').addClass('open');
			$(this).find('h5').text('Close all');
		} else if ($(this).hasClass('open')) {

			$('.rules-accordion-item').each(function () {
				if ($(this).hasClass('open')) {
					$(this).removeClass('open');
					$(this).find('.rules-accordion-item-content').slideUp();
				}
			});
			$('.rules-accordion-group-toggle').removeClass('open');
			$(this).find('h5').text('Open all');
		}
	});

	//Click on hotspots to go to rules
	$('.spot a').on('click', function () {
		var rule_number = "#rule-" + $(this).text();

		$('html, body').animate({
			scrollTop: $(rule_number).offset().top
		}, 500);

		setTimeout(function () {
			$(rule_number).addClass('open');
			$(rule_number).find('.rules-accordion-item-content').slideDown();
		}, 700);

	});

	$('.spot p').on('click', function () {
		var rule_number = "#rule-" + $(this).parents('.spot').find('a').text();

		$('html, body').animate({
			scrollTop: $(rule_number).offset().top
		}, 500);

		setTimeout(function () {
			$(rule_number).addClass('open');
			$(rule_number).find('.rules-accordion-item-content').slideDown();
		}, 700);

	});
}); // END doc ready
