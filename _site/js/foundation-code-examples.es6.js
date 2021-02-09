$(document).ready(function () {

    //======================================================= BUTTONS AND LINKS =============================================================================

    //PRIMARY BUTTON
    // Primary button colour dropdown
    $('.primary-button-colour-selector #primary-button-colour-set').change(function () {
        var expr = $(this).val();
        var addColourClassCode = "";

        if (expr) {
            addColourClassCode = ` primary-button-${expr}`;
            $(".primary-button, .primary-dark-button").removeClass("primary-button primary-dark-button").addClass("primary-dark-button").parent().removeClass("white-back blue-back").addClass("blue-back");
        } else {
            $(".primary-button, .primary-dark-button").removeClass("primary-button primary-dark-button").addClass("primary-button").parent().removeClass("white-back blue-back").addClass("white-back");
        }

        
        evaluatePrimaryButtonHtml(addColourClassCode);
    });

    //html
    function evaluatePrimaryButtonHtml(selectedColour) {
        var primaryButtonHtml =
            `<a class="primary-button${selectedColour}" href="#">Primary</a>`

        $(".primary-button-code .html-code code pre").text(primaryButtonHtml);
    }

    //css
    const primaryButtonCss =
`
<h5>Button</h5>
<code>
<pre>
/* Button */
.primary-button {
  border-radius: 6px;
  padding: 8px 32px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  line-height: 24px;
  box-shadow: rgb(0 0 0 / 10%) 0 2px 4px 0;
  transition-duration: 0.4s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  display: inline-block;
  border: solid 2px #254f90;
  background-color: #4569a0;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
}
.primary-button:hover,
.primary-button:focus {
  cursor: pointer;
  border: 2px solid #18335c;
  background: #254f90;
  box-shadow: rgb(0 0 0 / 30%) 0 4px 8px 0;
  outline: none;
}
.primary-button:hover {
  transform: translateY(-3px);
}
.primary-button:active {
  background-color: #18335c !important;
  border: solid 2px #18335c !important;
  transition: box-shadow 0.1s ease, transform 0.1s ease !important;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2) !important;
  transform: translate(0, -2px) !important;
  color: #ffffff !important;
}
</pre>
</code>

<h5>Light button</h5>
<code>
<pre>
/* Light button */
.primary-button.primary-button-light {
  border-color: #254f90;
  background-color: #ffffff;
  color: #254f90;
}
.primary-button.primary-button-light:hover,
.primary-button.primary-button-light:focus {
  border-color: #ffffff;
  background-color: #254f90;
  color: #ffffff;
}
</pre>
</code>
`
    $(".primary-button-code .css-code").html(primaryButtonCss);
    evaluatePrimaryButtonHtml("");
    
    

//SECONDARY BUTTON
// Secondary button colour dropdown
$('.secondary-button-colour-selector #secondary-button-colour-set').change(function () {
    var expr = $(this).val();
    var addColourClassCode = "";

    if (expr) {
        addColourClassCode = ` secondary-button-${expr}`;
        $(".secondary-button, .secondary-dark-button").removeClass("secondary-button secondary-dark-button").addClass("secondary-dark-button").parent().removeClass("white-back blue-back").addClass("blue-back");
    } else {
        $(".secondary-button, .secondary-dark-button").removeClass("secondary-button secondary-dark-button").addClass("secondary-button").parent().removeClass("white-back blue-back").addClass("white-back");
    }

    
    evaluateSecondaryButtonHtml(addColourClassCode);
});

//html
function evaluateSecondaryButtonHtml(selectedColour) {
    var secondaryButtonHtml =
        `<a class="secondary-button${selectedColour}" href="#">Secondary</a>`

    $(".secondary-button-code .html-code code pre").text(secondaryButtonHtml);
}

//css
const secondaryButtonCss =
`
<h5>Button</h5>
<code>
<pre>
/* Button */
.secondary-button {
  border-radius: 6px;
  padding: 8px 32px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  line-height: 24px;
  transition-duration: 0.4s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  display: inline-block;
  border: solid 2px #4569a0;
  background-color: #ffffff;
  color: #4569a0;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
}
.secondary-button:hover,
.secondary-button:focus {
  cursor: pointer;
  border: 2px solid #18335c;
  background: #254f90;
  outline: none;
  color: #ffffff;
}
.secondary-button:hover {
  transform: translateY(-3px);
}
.secondary-button:active {
  background-color: #18335c !important;
  border: solid 2px #18335c !important;
  transition: box-shadow 0.1s ease, transform 0.1s ease !important;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2) !important;
  transform: translate(0, -2px) !important;
  color: #ffffff !important;
}
</pre>
</code>

<h5>Light button</h5>
<code>
<pre>
/* Dark button */
.secondary-button.secondary-button-dark {
  border-color: #ffffff;
  background-color: #4569a0;
  color: #ffffff;
}
.secondary-button.secondary-button-dark:hover,
.secondary-button.secondary-button-dark:focus {
  background-color: #254f90;
  color: #ffffff;
}
</pre>
</code>
`
$(".secondary-button-code .css-code").html(secondaryButtonCss);
evaluateSecondaryButtonHtml("");


//TERTIARY BUTTON
// Tertiary button colour dropdown
$('.tertiary-button-colour-selector #tertiary-button-colour-set').change(function () {
    var expr = $(this).val();
    var addColourClassCode = "";

    if (expr) {
        addColourClassCode = ` tertiary-button-${expr}`;
        $(".tertiary-button, .tertiary-dark-button").removeClass("tertiary-button tertiary-dark-button").addClass("tertiary-dark-button").parent().removeClass("white-back blue-back").addClass("blue-back");
    } else {
        $(".tertiary-button, .tertiary-dark-button").removeClass("tertiary-button tertiary-dark-button").addClass("tertiary-button").parent().removeClass("white-back blue-back").addClass("white-back");
    }

    
    evaluateTertiaryButtonHtml(addColourClassCode);
});

//html
function evaluateTertiaryButtonHtml(selectedColour) {
    var tertiaryButtonHtml =
`<a class="tertiary-button${selectedColour}" href="#">
   <div class="icon-container">
      <div class="circle-icon">
         <svg viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"></circle>
         </svg>
      </div>
      <div class="arrow-icon">
         <svg viewBox="0 0 16 16">
            <path d="M11.173 10.07H0v-3h11.171L7.02 2.923 8.929 1 16 8.57l-7.071 7.573-1.91-1.909z"></path>
         </svg>
      </div>
   </div>
   Tertiary
</a>`

    $(".tertiary-button-code .html-code code pre").text(tertiaryButtonHtml);
}

//css
const tertiaryButtonCss =
`
<h5>Button</h5>
<code>
<pre>
/* Button */
.tertiary-button {
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  height: 32px;
  border: none;
  box-shadow: none;
  color: #4569a0;
  text-align: left;
  text-decoration: none;
  width: fit-content;
  transition-property: transform, -webkit-transform;
  transition-duration: 0.4s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
}
.tertiary-button:hover,
.tertiary-button:focus,
.tertiary-button:active {
  cursor: pointer;
  outline: none;
}
.tertiary-button:hover,
.tertiary-button:active {
  transform: translateY(-3px);
}
</pre>
</code>

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.tertiary-button .icon-container {
  position: relative;
  display: flex;
  padding-right: 8px;
}
.tertiary-button:hover .icon-container,
.tertiary-button:focus .icon-container,
.tertiary-button:active .icon-container {
  padding-right: 16px;
}
/* Circle icon */
.tertiary-button .icon-container .circle-icon {
  height: 32px;
  width: 32px;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  margin: auto 0;
  transform: translateX(-8px);
}
.tertiary-button:focus .icon-container .circle-icon,
.tertiary-button:hover .icon-container .circle-icon {
  display: inline;
}
.tertiary-button .icon-container .circle-icon svg {
  fill: none;
}
.tertiary-button .icon-container .arrow-icon svg,
.tertiary-button:focus .icon-container .circle-icon svg,
.tertiary-button:hover .icon-container .circle-icon svg {
  fill: #4569a0;
}
/* Arrow icon */
.tertiary-button .icon-container .arrow-icon {
  height: 16px;
  width: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tertiary-button:hover .icon-container .arrow-icon svg,
.tertiary-button:focus .icon-container .arrow-icon svg {
  fill: #fff;
}
</pre>
</code>

<h5>Light button</h5>
<code>
<pre>
/* Light button */
.tertiary-button.tertiary-button-light {
  color: #ffffff;
}
.tertiary-button .icon-container .arrow-icon svg,
.tertiary-button .icon-container .arrow-icon svg,
.tertiary-button.tertiary-button-light:focus .icon-container .circle-icon svg,
.tertiary-button.tertiary-button-light:hover .icon-container .circle-icon svg {
  fill: #ffffff;
}
.tertiary-button.tertiary-button-light:focus .icon-container .arrow-icon svg,
.tertiary-button.tertiary-button-light:hover .icon-container .arrow-icon svg {
  fill: #4569a0;
}
</pre>
</code>
`
$(".tertiary-button-code .css-code").html(tertiaryButtonCss);
evaluateTertiaryButtonHtml("");
    
//LINK TEXT
// Link text colour dropdown
$('.link-text-colour-selector #link-text-colour-set').change(function () {
    var expr = $(this).val();
    var addColourClassCode = "";

    if (expr) {
        addColourClassCode = ` link-text-${expr}`;
        $(".link, .link-dark").removeClass("link link-dark").addClass("link-dark").removeClass("white-back blue-back").addClass("blue-back");
    } else {
        $(".link, .link-dark").removeClass("link link-dark").addClass("link").removeClass("white-back blue-back").addClass("white-back");
    }

    
    evaluateLinkTextHtml(addColourClassCode);
});

//html
function evaluateLinkTextHtml(selectedColour) {
    var linkTextHtml =
        `<a class="link-text${selectedColour}" href="#">Link text</a>`

    $(".link-text-code .html-code code pre").text(linkTextHtml);
}

//css
const linkTextCss =
`
<h5>Link Text</h5>
<code>
<pre>
/* Link text */
.link-text {
  font-style: normal;
  color: #254f90;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: #748fb8 solid 2px;
  box-shadow: none;
  cursor: pointer;
  display: inline;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: auto;
  letter-spacing: 0.2px;
  line-height: 28.48px;
  transition-delay: 0s, 0s;
  transition-duration: 0.25s, 0.25s;
  transition-property: box-shadow, -webkit-box-shadow;
  transition-timing-function: ease, ease;
  text-decoration: none;
  box-sizing: border-box;
}
.link-text:visited {
  color: #a42079;
  border-bottom-color: #dfb1d0;
}
.link-text:hover {
  background-color: transparent;
  border: none;
  box-shadow: #ddeeff 0px -20px 0px 0px inset;
  text-decoration: none;
}
.link-text:focus {
  border: 1px dotted #254f90;
  border-bottom: #748fb8 solid 2px;
  outline: none;
}
.link-text:active {
  color: #000000;
  border-bottom: #748fb8 solid 2px;
  box-shadow: none;
}
</pre>
</code>

<h5>Light link text</h5>
<code>
<pre>
/* Light link text */
.link-text.link-text-light {
  color: #ffffff;
  border-bottom: #ffffff solid 2px;
}
.link-text.link-text-light:visited {
  color: #ffffff;
  border-bottom: #ffffff solid 2px;
}
.link-text.link-text-light:hover,
.link-text.link-text-light:focus {
  box-shadow: inset 0 -20px 0 #96b7df;
  border: none;
  color: #254f90;
}
.link-text.link-text-light:active {
  color: #000000;
}
</pre>
</code>
`
$(".link-text-code .css-code").html(linkTextCss);
evaluateLinkTextHtml("");

//PAGINATION
//html
var paginationHtml =
`<div class="pagination">
    <a href="" class="first" aria-label="First"> <!-- On click remove class 'active' class from whichever page link it's used, and add it to page link '1' -->
        <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" id="Icon_chevron_double_left" data-name="Icon / chevron double / left" width="22.487" height="23.313" viewBox="0 0 22.487 23.313">
                <script xmlns=""/>
                <path id="Shape" d="M19.7,23.313h0L8.433,11.657,19.7,0l2.792,2.889-8.472,8.768,8.472,8.768L19.7,23.312Zm-8.432,0h0L0,11.657,11.264,0l2.79,2.889L5.582,11.657l8.472,8.768-2.789,2.888Z" fill="#4569a0"/>
            </svg>
        </div>First
    </a>
    <a href="" class="previous" aria-label="Previous">
        <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" id="Icon_left" data-name="Icon / left" width="14.991" height="23.564" viewBox="0 0 14.991 23.564"><script xmlns=""/>
                <path id="Chevron_Left" data-name="Chevron / Left" d="M5.644,11.782l8.567,8.863-2.822,2.92L0,11.782,11.389,0l2.822,2.92Z" fill="#4569a0"/>
            </svg>
        </div>Previous</a> <!-- On click remove class 'active' class from whichever page link it's used, and add it to the previous page link in the list -->
    <a href="" class="page active" aria-label="1">1</a> <!-- On click remove class 'active' class from whichever page link it's used, and add it to this page link -->
    <a href="" class="page" aria-label="2">2</a> <!-- On click remove class 'active' class from whichever page link it's used, and add it to this page link -->
    <a href="" class="page" aria-label="3">3</a> <!-- On click remove class 'active' class from whichever page link it's used, and add it to this page link -->
    <a href="" class="next" aria-label="Next">Next
        <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" id="Icon_right" data-name="Icon / right" width="14.211" height="23.564" viewBox="0 0 14.211    23.564">             <script xmlns=""/>
                <path id="Chevron_Right" data-name="Chevron / Right" d="M8.567,11.782,0,20.645l2.822,2.92L14.211,11.782,2.822,0,0,2.92Z" fill="#4569a0"/>
            </svg>
        </div>
    </a> <!-- On click remove class 'active' class from whichever page link it's used, and add it to the next page link in the list -->
    <a href="" class="last" aria-label="Last">Last
        <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" id="Icon_chevron_double_right" data-name="Icon / chevron double / right" width="22.487" height="23.313" viewBox="0 0 22.487 23.313"><script xmlns=""/>
                <path id="Chevron_Double_Right" data-name="Chevron Double / Right" d="M8.433,20.424l8.472-8.768L8.433,2.889,11.223,0,22.487,11.657,11.223,23.313ZM0,20.424l8.472-8.768L0,2.889,2.792,0,14.054,11.657,2.792,23.313Z" fill="#4569a0"/>
            </svg>
        </div>
    </a> <!-- On click remove class 'active' class from whichever page link it's used, and add it to the final page link in the list -->
</div>`

$(".pagination-code .html-code code pre").text(paginationHtml);

//css
const paginationCss =
`
<h5>Containers</h5>
<code>
<pre>
/* Container */
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pagination .svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</pre>
</code>

<h5>Links</h5>
<code>
<pre>
/* Links */
.pagination a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #254f90;
  box-shadow: none;
  padding: 0 6px;
  margin: 0 10px;
  text-decoration: none;
  border: 1px solid transparent;
}
.pagination a.active {
  color: #000000;
  background: #e5edf7;
  padding: 0 6px;
  border-radius: 2px;
}
.body-copy a:focus {
  border: 1px dotted #748fb8;
  outline: none;
}
.pagination a:hover {
  background-color: #e5edf7;
  border-radius: 2px;
  padding: 0 6px;
}
.pagination a:active {
  color: #000;
  background: #b3c2d8;
  border: 1px dotted transparent;
  border-radius: 2px;
  border: 1px dotted #748fb8;
}
.pagination a:active .svg-container svg path {
  fill: #000;
}
</pre>
</code>

<h5>Icons</h5>
<code>
<pre>
/* Icons */
.first .svg-container,
.previous .svg-container {
  padding-right: 8px;
}
.last .svg-container,
.next .svg-container {
  padding-left: 8px;
}
.previous .svg-container,
.next .svg-container {
  width: 8px;
  height: 12px;
}
.last .svg-container,
.first .svg-container {
  width: 12px;
  height: 12px;
}
</pre>
</code>
`
$(".pagination-code .css-code").html(paginationCss);
    
	//======================================================= Headers =============================================================================
    
//H1
//html
var headingOneHtml =
`<h1>Heading 1 (H1)</h1>`

$(".heading-one-code .html-code code pre").text(headingOneHtml);

//css
const headingOneCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
h1 {
  color: #333333;
  font-family: "Open Sans", sans-serif;
  font-size: 44px;
  letter-spacing: 0;
  line-height: 56px;
}
</pre>
</code>

<h5>Media query</h5>
<code>
<pre>
/* Media query */
@media (max-width: 576px) {
  h1 {
    font-size: 32px;
    line-height: 36px;
  }
}
</pre>
</code>
`
$(".heading-one-code .css-code").html(headingOneCss);
	
//H2
//html
var headingTwoHtml =
`<h2>Heading 2 (H2)</h2>`

$(".heading-two-code .html-code code pre").text(headingTwoHtml);

//css
const headingTwoCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
h2 {
  color: #333333;
  font-family: "Open Sans", sans-serif;
  font-size: 32px;
  letter-spacing: 0;
  line-height: 40px;
}
</pre>
</code>

<h5>Media query</h5>
<code>
<pre>
/* Media query */
@media (max-width: 576px) {
  h2 {
    font-size: 24px;
    line-height: 30px;
  }
}
</pre>
</code>
`
$(".heading-two-code .css-code").html(headingTwoCss);
	
	//H3
//html
var headingThreeHtml =
`<h3>Heading 3 (H3)</h3>`

$(".heading-three-code .html-code code pre").text(headingThreeHtml);

//css
const headingThreeCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
h3 {
  color: #333333;
  font-family: "Open Sans", sans-serif;
  font-size: 21px;
  letter-spacing: 0;
  line-height: 28px;
}
</pre>
</code>

<h5>Media query</h5>
<code>
<pre>
/* Media query */
@media (max-width: 576px) {
  h3 {
    line-height: 30px;
  }
}
</pre>
</code>
`
$(".heading-three-code .css-code").html(headingThreeCss);
	
//H4
//html
var headingFourHtml =
`<h4>Heading 4 (H4)</h4>`

$(".heading-four-code .html-code code pre").text(headingFourHtml);

//css
const headingFourCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
h4 {
  color: #333333;
  font-family: OpenSans-Semibold; 
  font-size: 18px; 
  letter-spacing: 0;
  line-height: 28px;
}
</pre>
</code>
`
$(".heading-four-code .css-code").html(headingFourCss);
	
//H5
//html
var headingFiveHtml =
`<h5>Heading 5 (H5)</h5>`

$(".heading-five-code .html-code code pre").text(headingFiveHtml);

//css
const headingFiveCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
h5 {
  color: #333333;
  font-family: OpenSans-Semibold;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 28px;
}
</pre>
</code>

<h5>Media query</h5>
<code>
<pre>
/* Media query */
@media (max-width: 576px) {
  h5 {
    line-height: 24px;
  }
}
</pre>
</code>
`
$(".heading-five-code .css-code").html(headingFiveCss);
	
//Body text
//html
var bodyTextHtml =
`<p class="body-text">Body text - Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>`

$(".body-text-code .html-code code pre").text(bodyTextHtml);

//css
const bodyTextCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
.body-text {
  font-family: "Open Sans",sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0.2px;
  line-height: 28px;
}
</pre>
</code>
`
$(".body-text-code .css-code").html(bodyTextCss);
	
//Body mini
//html
var bodyMiniHtml =
`<p class="body-mini-text">Mini body text - Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>`

$(".body-mini-code .html-code code pre").text(bodyMiniHtml);

//css
const bodyMiniCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
.body-mini-text {
  font-family: "Open Sans",sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
}
</pre>
</code>
`
$(".body-mini-code .css-code").html(bodyMiniCss);
	
//List
//html
var listHtml =
`
<ul>
   <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
         <circle fill="#c18100" cx="8" cy="8" r="4"/>
      </svg>
      List style on desktop
   </li>
   <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
         <circle fill="#c18100" cx="8" cy="8" r="4"/>
      </svg>
      Lorem ipsum dolor sit amet, consectet adipiscing elit.
   </li>
   <ul>
      <li>Nested list style on desktop</li>
      <li>Lorem ipsum dolor sit elit.</li>
   </ul>
</ul>
`

$(".list-code .html-code code pre").text(listHtml);

//css
const listCss =
`
<h5>List</h5>
<code>
<pre>
/* List */
ul {
  padding: 0 0 0 16px;
  margin: 0;
  line-height: 1.78;
  list-style: none;
  font-family: "Open Sans", sans-serif;
}
ul li {
  padding-bottom: 16px;
  margin: 0;
  line-height: 28px;
  letter-spacing: 0;
  position: relative;
  padding-left: 32px;
}
.content > *:last-child li:last-of-type {
  padding-bottom: 0px;
}
ul li svg {
  position: absolute;
  left: 0px;
  top: 10px;
}

ul ul li:before {
  content: "¯" !important;
  height: 100%;
  padding-right: 21px;
  font-weight: 600;
  color: #666;
  vertical-align: -20%;
}

ul ul li {
  padding-left: 18px;
}

@media (max-width: 576px) {
  ul li {
    line-height: 24px;
    letter-spacing: 0.2px;
  }
}
</pre>
</code>
`
$(".list-code .css-code").html(listCss);
	
//Header intro
//html
var headerIntroHtml =
`<p class="header-intro">Header introduction - Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>`

$(".header-intro-code .html-code code pre").text(headerIntroHtml);

//css
const headerIntroCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
.header-intro {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0.2px;
  line-height: 30px;
}

@media (max-width: 576px) {
  .header-intro {
    font-size: 16px;
    line-height: 28px;
  }
}
</pre>
</code>
`
$(".header-intro-code .css-code").html(headerIntroCss);
	
//Header updated
//html
var headerUpdatedHtml =
`<p class="header-updated">Updated: 15 March 2019</p>`

$(".header-updated-code .html-code code pre").text(headerUpdatedHtml);

//css
const headerUpdatedCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
.header-updated {
  font-family: "Open Sans",sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 12px;
  letter-spacing: 0.2px;
  line-height: 18px;
}

@media (max-width: 576px) {
  .header-updated {
    line-height: 16px;
  }
}
</pre>
</code>
`
$(".header-updated-code .css-code").html(headerUpdatedCss);
	
//Header label
//html
var headerLabelHtml =
`<p class="header-label">Label</p>`

$(".header-label-code .html-code code pre").text(headerLabelHtml);

//css
const headerLabelCss =
`
<h5>Text</h5>
<code>
<pre>
/* Text */
.header-label {
  font-family: "Open Sans",sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  letter-spacing: 0.2px;
  line-height: 20px;
  text-transform: uppercase;
}
</pre>
</code>
`
$(".header-label-code .css-code").html(headerLabelCss);
});



