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
`
<a class="primary-button${selectedColour}" href="#">Primary</a>
<a class="primary-button${selectedColour}" href="#">
   Primary
   <div class="svg-container">
      <svg viewBox="0 0 16 16">
         <path d="M14 3.414L7.707 9.707 6.293 8.293 12.586 2H10V0h6v6h-2V3.414zM14 14V9h2v7H0V0h7v2H2v12h12z"></path>
      </svg>
   </div>
</a>
`

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
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  background-color: #18335c;
  border: solid 2px #18335c;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transform: translate(0, -2px);
  color: #ffffff;
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

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.primary-button .svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 6px;
  width: 16px;
  height: 16px;
}
.primary-button .svg-container svg {
  fill: #fff;
}
.primary-button.primary-button-light .svg-container svg {
  fill: #254f90;
}
.primary-button.primary-button-light:hover .svg-container svg,
.primary-button.primary-button-light:focus .svg-container svg {
  transition-duration: 0.4s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  fill: #fff;
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
`
<a class="secondary-button${selectedColour}" href="#">Secondary</a>
<a class="secondary-button${selectedColour}" href="#">
   Secondary
   <div class="svg-container">
      <svg viewBox="0 0 16 16">
         <path d="M14 3.414L7.707 9.707 6.293 8.293 12.586 2H10V0h6v6h-2V3.414zM14 14V9h2v7H0V0h7v2H2v12h12z"></path>
      </svg>
   </div>
</a>
`

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
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  background-color: #18335c;
  border: solid 2px #18335c;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transform: translate(0, -2px);
  color: #ffffff;
}
</pre>
</code>

<h5>Dark button</h5>
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

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.secondary-button .svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 6px;
  width: 16px;
  height: 16px;
}
.secondary-button .svg-container svg {
  fill: #254f90;
}
.secondary-button.secondary-button-dark .svg-container svg {
  fill: #fff;
}
.secondary-button:hover .svg-container svg,
.secondary-button:focus .svg-container svg {
  transition-duration: 0.4s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  fill: #fff;
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
 border-bottom: none;
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
 border-bottom: none;
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
   <!-- On click remove class 'active' class from whichever page link it's used, and add it to page link '1' -->
   <a href="#" class="first">
       <div class="svg-container">
           <svg xmlns="http://www.w3.org/2000/svg" id="Icon_chevron_double_left" data-name="Icon / chevron double / left" width="22.487" height="23.313" viewBox="0 0 22.487 23.313">
               <script xmlns=""/>
               <path id="Shape" d="M19.7,23.313h0L8.433,11.657,19.7,0l2.792,2.889-8.472,8.768,8.472,8.768L19.7,23.312Zm-8.432,0h0L0,11.657,11.264,0l2.79,2.889L5.582,11.657l8.472,8.768-2.789,2.888Z" fill="#4569a0"/>
           </svg>
       </div>First
   </a>
   <a href="#" class="previous">
       <div class="svg-container">
           <svg xmlns="http://www.w3.org/2000/svg" id="Icon_left" data-name="Icon / left" width="14.991" height="23.564" viewBox="0 0 14.991 23.564"><script xmlns=""/>
               <path id="Chevron_Left" data-name="Chevron / Left" d="M5.644,11.782l8.567,8.863-2.822,2.92L0,11.782,11.389,0l2.822,2.92Z" fill="#4569a0"/>
           </svg>
	   <!-- On click remove class 'active' class from whichever page link it's used, and add it to the previous page link in the list -->
       </div>Previous</a>
   <!-- On click remove class 'active' class from whichever page link it's used, and add it to this page link -->
   <a href="#" class="page active">1</a>
   <!-- On click remove class 'active' class from whichever page link it's used, and add it to this page link -->
   <a href="#" class="page">2</a> 
   <!-- On click remove class 'active' class from whichever page link it's used, and add it to this page link -->
   <a href="#" class="page">3</a> 
   <!-- On click remove class 'active' class from whichever page link it's used, and add it to the next page link in the list -->
   <a href="#" class="next">Next
       <div class="svg-container">
           <svg xmlns="http://www.w3.org/2000/svg" id="Icon_right" data-name="Icon / right" width="14.211" height="23.564" viewBox="0 0 14.211    23.564">             <script xmlns=""/>
               <path id="Chevron_Right" data-name="Chevron / Right" d="M8.567,11.782,0,20.645l2.822,2.92L14.211,11.782,2.822,0,0,2.92Z" fill="#4569a0"/>
           </svg>
       </div>
   </a> 
   <!-- On click remove class 'active' class from whichever page link it's used, and add it to the final page link in the list -->
   <a href="#" class="last">Last
       <div class="svg-container">
           <svg xmlns="http://www.w3.org/2000/svg" id="Icon_chevron_double_right" data-name="Icon / chevron double / right" width="22.487" height="23.313" viewBox="0 0 22.487 23.313"><script xmlns=""/>
               <path id="Chevron_Double_Right" data-name="Chevron Double / Right" d="M8.433,20.424l8.472-8.768L8.433,2.889,11.223,0,22.487,11.657,11.223,23.313ZM0,20.424l8.472-8.768L0,2.889,2.792,0,14.054,11.657,2.792,23.313Z" fill="#4569a0"/>
           </svg>
       </div>
   </a> 
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
.pagination a:focus {
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
`<h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>`

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
`<h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>`

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
`<h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>`

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
`<h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4>`

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
`<h5>Lorem ipsum dolor sit amet, consectetur adipiscing</h5>`

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
 top: 7px;
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
  
  
//======================================================= STANDARD FORM ELEMENTS =============================================================================
//Text box
//html
var textBoxHtml =
`
<!-- Toggle "validation-error" class when form is not valid -->
<div class="form-field-container">    
   <label for="text-input-example" class="field-label">Text box label</label>  
   <!-- Add 'disabled' attribute when field should be disabled -->
   <input id="text-input-example" class="form-field form-text-input" name="form-input-example" type="text" value="" maxlength="255" placeholder=""> 
   <span class="form-validation-message">Descriptive error message</span>
</div>
`

$(".text-box-code .html-code code pre").text(textBoxHtml);

//css
const textBoxCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
 font-family: "Open Sans", sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 16px;
 width: 100%;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
 width: 100%;
 display: block;
 font-size: 16px;
 padding: 0 0 16px 0;
 margin: 0;
}
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
 border: solid 1px #495c74;
 font-family: "Open Sans", sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 16px;
 width: 100%;
 padding: 10px;
 box-sizing: border-box;
 margin-bottom: 8px;
}
.form-field-container .form-text-input {
 height: 52px;
}
.form-field-container .form-field:focus {
 outline: none;
 border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
 border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
 border: solid 3px #254f90;
}
.form-field-container .form-field:disabled {
 outline: none;
 border: solid 1px #e2e2e2;
 background-color: #f5f5f5;
 color: #8e8e8e;
}
</pre>
</code>

<h5>Error message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
 color: #d2201e;
 display: none;
}
.form-field-container.validation-error .form-validation-message {
 display: block;
}
</pre>
</code>
`
$(".text-box-code .css-code").html(textBoxCss);
  
//Text box
//html
var textAreaHtml =
`
<!-- Toggle "validation-error" class when form is not valid --> 
<div class="form-field-container">   
  <label for="text-area-example" class="field-label">Text box label</label>
  <!-- Add 'disabled' attribute when field should be disabled -->
  <textarea id="text-area-example" class="form-field form-text-area" name="form-input-area" type="text" value="" maxlength="100" placeholder="" ></textarea>   
  <span class="textarea-char-count">0 of 100 characters used</span>
  <span class="form-validation-message">Descriptive error message</span>
</div>
`

$(".text-area-code .html-code code pre").text(textAreaHtml);

//css
const textAreaCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
 font-family: "Open Sans", sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 16px;
 width: 100%;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
 width: 100%;
 display: block;
 font-size: 16px;
 padding: 0 0 16px 0;
 margin: 0;
}
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
 border: solid 1px #495c74;
 font-family: "Open Sans", sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 16px;
 width: 100%;
 min-height: 250px;
 padding: 10px;
 box-sizing: border-box;
 margin-bottom: 8px;
}
.form-field-container .form-text-area {
 min-height: 250px;
 resize: vertical;
}
.form-field-container .form-field:focus {
 outline: none;
 border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
 border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
 border: solid 3px #254f90;
}
.form-field-container .form-field:disabled {
 outline: none;
 border: solid 1px #e2e2e2;
 background-color: #f5f5f5;
 color: #8e8e8e;
}
</pre>
</code>

<h5>Character count</h5>
<code>
<pre>
/* Character count */
.form-field-container .textarea-char-count {
 color: #666666;
 margin: 0;
 font-size: 16px;
 display: block;
}
.form-field-container.validation-error .textarea-char-count {
 display: none;
}
</pre>
</code>

<h5>Error message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
 color: #d2201e;
 display: none;
}
.form-field-container.validation-error .form-validation-message {
 display: block;
}
.form-field-container.validation-error .textarea-char-count {
  display: none;
}
</pre>
</code>
`
$(".text-area-code .css-code").html(textAreaCss);
  
//Units text box
//html
var unitsTextBoxHtml =
`
<div class="form-field-container">
   <!-- Toggle "validation-error" class when form is not valid -->   
   <label for="text-input-units-example" class="field-label">Text box label</label>  
   <!-- Toggle "input-focused" class when field is focused, toggle "input-error" class when field is not valid, toggle 'input-disabled' class when field should be disabled -->
   <div class="input-container units-input-container">
      <!-- Add 'disabled' attribute when field should be disabled -->      
      <input id="text-input-units-example" class="form-field form-text-input" name="form-input-example" type="number" value="" maxlength="255" placeholder=""> 
   </div>
   <span class="form-validation-message">Descriptive error message</span>
</div>
`

$(".units-text-box-code .html-code code pre").text(unitsTextBoxHtml);

//css
const unitsTextBoxCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: fit-content;
}
.form-field-container .input-container {
  display: flex;
  margin-bottom: 8px;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 0 0 16px 0;
  margin: 0;
}
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
  border: solid 1px #495c74;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  min-width: 200px;
  padding: 10px;
  box-sizing: border-box;
}
.form-field-container .form-text-input {
  height: 52px;
}

.form-field-container .input-container.units-input-container .form-field {
  border-left: none;
  border-right: none;
  direction: rtl;
}
.form-field-container .form-field:focus {
  outline: none;
  border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
  border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
  border: solid 3px #254f90;
}
.form-field-container .form-field:disabled {
  outline: none;
  border: solid 1px #e2e2e2;
  background-color: #f5f5f5;
  color: #8e8e8e;
}
.form-field-container .input-container.units-input-container:before,
.form-field-container .input-container.units-input-container:after {
  height: 52px;
  width: auto;
  padding: 10px 15px;
  color: #666666;
  border: solid 1px #495c74;
  display: inline-block;
  background: #f5f5f5;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 1.7;
}
.form-field-container .input-container.units-input-container:before {
  content: "$AUD";
}
.form-field-container .input-container.units-input-container:after {
  content: ".00";
}
.form-field-container
  .input-container.units-input-container.input-focused
  .form-field,
.form-field-container
  .input-container.units-input-container.input-focused:before,
.form-field-container
  .input-container.units-input-container.input-focused:after {
  border: 3px solid #254f90;
}
.form-field-container
  .input-container.units-input-container.input-error
  .form-field,
.form-field-container .input-container.units-input-container.input-error:before,
.form-field-container .input-container.units-input-container.input-error:after {
  border: 3px solid #d2201e;
}
.form-field-container
  .input-container.units-input-container.input-disabled
  .form-field,
.form-field-container
  .input-container.units-input-container.input-disabled:before,
.form-field-container
  .input-container.units-input-container.input-disabled:after {
  background-color: #f5f5f5;
  color: #8e8e8e;
  border: solid 1px #e2e2e2;
}
.form-field-container .input-container.units-input-container .form-field:focus,
.form-field-container.validation-error
  .input-container.units-input-container
  .form-field,
.form-field-container .form-field:disabled,
.form-field-container
  .input-container.units-input-container.input-focused
  .form-field,
.form-field-container
  .input-container.units-input-container.input-error
  .form-field,
.form-field-container
  .input-container.units-input-container.input-disabled
  .form-field {
  border-left: none;
  border-right: none;
}
</pre>
</code>

<h5>Error message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
  color: #d2201e;
  display: none;
}
.form-field-container.validation-error .form-validation-message {
  display: block;
}
</pre>
</code>
`
$(".units-text-box-code .css-code").html(unitsTextBoxCss);
  
//Select dropdown
//html
var selectDropdownHtml =
`
<!-- Save this svg into a file. Ensure the file name matches any css paths referenced.
  <svg xmlns="http://www.w3.org/2000/svg" id="Icon_chevron_down" data-name="Icon / chevron / down" width="22.738" height="14.211" viewBox="0 0 22.738 14.211"><script xmlns=""/>
     <path id="Chevron_Down" data-name="Chevron / Down" d="M8.567,11.369,0,19.921l2.822,2.817L14.211,11.369,2.822,0,0,2.817Z" transform="translate(22.738) rotate(90)" fill="#4569a0"/>
   </svg>
  -->
<!-- Toggle "validation-error" class when form is not valid, toggle --> 
<div class="form-field-container">
  <label for="selector-example" class="field-label">Text box label</label>
  <!-- Add 'disabled' attribute when field should be disabled -->
  <select id="selector-example" name="select-dropdown" type="text" value="" placeholder="" class="form-field form-select-dropdown">
     <option value="">Please select</option>
     <option value="Option 1">Option 1</option>
     <option value="Option 2">Option 2</option>
     <option value="Option 3">Option 3</option>
     <option value="option 4">Option 4</option>
  </select>
  <span class="form-validation-message">Descriptive error message</span>
</div>
`

$(".select-dropdown-code .html-code code pre").text(selectDropdownHtml);

//css
const selectDropdownCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
 font-family: "Open Sans", sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 16px;
 width: 100%;
} 
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
 width: 100%;
 display: block;
 font-size: 16px;
 padding: 0 0 16px 0;
 margin: 0;
} 
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
 border: solid 1px #495c74;
 font-family: "Open Sans", sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 16px;
 width: 100%;
 padding: 10px;
 box-sizing: border-box;
 margin-bottom: 8px;
}
.form-field-container .form-select-dropdown {
 height: 52px;
 max-width: 400px;
 min-width: 400px;
 padding: 10px 15px;
 color: #333333;
 background: #ffffff url(../BGAIcon-chevron-down.svg) no-repeat;
 background-size: 16px 10px;
 background-position: right 20px center;
 border-radius: 0px;
 -webkit-appearance: none !important;
 -webkit-border-radius: 0px !important;
}
.form-field-container .form-field:focus {
 outline: none;
 border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
 border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
 border: solid 3px #254f90;
}
.form-field-container .form-field:disabled {
 outline: none;
 border: solid 1px #e2e2e2;
 background-color: #f5f5f5;
 color: #8e8e8e;
}
</pre>
</code>

<h5>Error message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
 color: #d2201e;
 display: none;
}
.form-field-container.validation-error .form-validation-message {
 display: block;
}
</pre>
</code>
`
$(".select-dropdown-code .css-code").html(selectDropdownCss);
	
//Radio buttons
//html
var radioButtonsHtml =
`
<!-- Toggle "validation-error" class when form is not valid -->
<div class="form-field-container"> 
   <label class="field-label">Text box label</label>
   <div class="radio-button">
      <!-- Add 'disabled' attribute when field should be disabled -->
      <input type="radio" id="radio-button-example-1" name="radio-group" checked> 
      <label for="radio-button-example-1"class="form-field">Apple</label>
   </div>
   <div class="radio-button">
      <!-- Add 'disabled' attribute when field should be disabled -->
      <input type="radio" id="radio-button-example-2" name="radio-group"> 
      <label for="radio-button-example-2"class="form-field">Orange</label>
   </div>
   <div class="radio-button">
      <!-- Add 'disabled' attribute when field should be disabled -->
      <input type="radio" id="radio-button-example-3" name="radio-group"> 
      <label for="radio-button-example-3"class="form-field">Pear</label>
   </div>
   <span class="form-validation-message">Descriptive error message</span>
</div>
`

$(".radio-buttons-code .html-code code pre").text(radioButtonsHtml);

//css
const radioButtonsCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: 100%;
}
.form-field-container .radio-button {
  margin: 0 0 16px 0;
} 
.form-field-container .radio-button:last-of-type {
  margin-bottom: 0;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 0 0 16px 0;
  margin: 0;
}
.form-field-container .radio-button .label {
  padding: 10px 15px;
} 
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
  border: solid 1px #495c74;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 8px;
}
.form-field-container .radio-button .form-field {
  margin: 0;
  padding-left: 40px;
}
.form-field-container .form-field:focus {
  outline: none;
  border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
  border: solid 3px #d2201e;
}
.form-field-container .radio-button input:not(:checked):focus + label,
.form-field-container .radio-button input:checked:focus + label {
  border: solid 3px #254f90;
}
.form-field-container .radio-button input:not(:checked):focus + label:before,
.form-field-container .radio-button input:checked:focus + label:before {
  border: 2.5px solid #254f90;
}
.form-field-container .radio-button input:disabled + label {
  outline: none;
  border: solid 1px #e2e2e2;
  background-color: #f5f5f5;
  color: #8e8e8e;
}
.form-field-container .radio-button input:checked,
.form-field-container .radio-button input:not(:checked) {
  position: absolute;
  left: -9999px;
}
.form-field-container .radio-button input:checked + label,
.form-field-container .radio-button input:not(:checked) + label {
  position: relative;
  cursor: pointer;
  line-height: 20px;
  display: flex;
  justify-content: flex-start;
  color: #333;
}
.form-field-container .radio-button input:not(:checked) + label:before {
  border: 2.5px solid #aab2c3;
  font-weight: normal;
}
.form-field-container .radio-button input:checked + label:before,
.form-field-container .radio-button input:not(:checked) + label:before {
  content: "";
  position: absolute;
  top: 8px;
  left: 10px;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-field-container .radio-button input:checked + label:before {
  content: "⬤";
  border: 2.5px solid #254f90;
  font-weight: normal;
  position: absolute;
}
.form-field-container .radio-button input:checked + label {
  color: #254f90;
  font-weight: 600;
  border: solid 3px #254f90;
}
</pre>
</code>

<h5>Error message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
  color: #d2201e;
  display: none;
}
.form-field-container.validation-error .form-validation-message {
  display: block;
}
</pre>
</code>
`
$(".radio-buttons-code .css-code").html(radioButtonsCss);
	
//Checkbox
//html
var checkboxHtml =
`
<!-- Toggle "validation-error" class when form is not valid  -->
<div class="form-field-container"> 
<label class="field-label">Text box label</label>
	<div class="checkbox">
        <!-- Add 'disabled' attribute when field should be disabled -->
		<input type="checkbox" id="checkbox-example-1" name="checkbox-group"> 
			<label for="checkbox-example-1"class="form-field">Apple          
				<svg
					xmlns="http://www.w3.org/2000/svg" data-name="Icon / tick" width="16" height="12.657" viewBox="0 0 16 12.657">
					<script
						xmlns=""/>
						<path id="Tick" d="M0,7.413,1.9,5.482,5.244,8.837,14.086,0,16,1.9,5.244,12.658Z" fill="#254f90"/>
				</svg>
			</label>
	</div>
	<div class="checkbox">
        <!-- Add 'disabled' attribute when field should be disabled -->
		<input type="checkbox" id="checkbox-example-2" name="checkbox-group"> 
			<label for="checkbox-example-2"class="form-field">Orange
				<svg
					xmlns="http://www.w3.org/2000/svg" data-name="Icon / tick" width="16" height="12.657" viewBox="0 0 16 12.657">
					<script
						xmlns=""/>
						<path id="Tick" d="M0,7.413,1.9,5.482,5.244,8.837,14.086,0,16,1.9,5.244,12.658Z" fill="#254f90"/>
				</svg>
			</label>
	</div>
	<div class="checkbox">
        <!-- Add 'disabled' attribute when field should be disabled --> 
		<input type="checkbox" id="checkbox-example-3" name="checkbox-group"> 
			<label for="checkbox-example-3"class="form-field">Pear
				<svg
					xmlns="http://www.w3.org/2000/svg" data-name="Icon / tick" width="16" height="12.657" viewBox="0 0 16 12.657">
					<script
						xmlns=""/>
						<path id="Tick" d="M0,7.413,1.9,5.482,5.244,8.837,14.086,0,16,1.9,5.244,12.658Z" fill="#254f90"/>
					</svg>
			</label>
	</div>
	<span class="form-validation-message">Descriptive error message</span>
</div>
`

$(".checkbox-code .html-code code pre").text(checkboxHtml);

//css
const checkboxCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: 100%;
}
.form-field-container .checkbox {
  margin: 0 0 16px 0;
  display: table;
  width: fit-content;
}
.form-field-container .checkbox:last-of-type {
  margin-bottom: 0;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 0 0 16px 0;
  margin: 0;
}
.checkbox .label {
  padding: 10px 15px;
}
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
  border: solid 1px #495c74;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  margin-bottom: 8px;
}
.form-field-container .checkbox .form-field {
  margin: 0;
  border: none;
}
.form-field-container .checkbox input:not(:checked):focus + label:before,
.form-field-container .checkbox input:checked:focus + label:before {
  outline: none;
  border: solid 3px #254f90;
}
.form-field-container.validation-error
  .checkbox
  input:not(:checked)
  + label:before,
.form-field-container.validation-error .checkbox input:checked + label:before {
  border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
  border: solid 3px #254f90;
}
.form-field-container .checkbox input:disabled:not(:checked) + label:before,
.form-field-container .checkbox input:checked:disabled + label:before {
  outline: none;
  border: solid 1px #e2e2e2;
  background-color: #f5f5f5;
  cursor: default;
}
.form-field-container .checkbox input:checked:disabled + label,
.form-field-container .checkbox input:disabled:not(:checked) + label {
  color: #8e8e8e;
  cursor: default;
}
.form-field-container .checkbox input:checked,
.form-field-container .checkbox input:not(:checked) {
  position: absolute;
  left: -9999px;
}
.form-field-container .checkbox input:checked + label,
.form-field-container .checkbox input:not(:checked) + label {
  position: relative;
  cursor: pointer;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #333;
}
.form-field-container .checkbox input:not(:checked) + label:before {
  border: solid 1px #495c74;
}
.form-field-container .checkbox input:checked + label:before,
.form-field-container .checkbox input:not(:checked) + label:before {
  content: "";
  width: 28px;
  height: 28px;
  margin-right: 14px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.form-field-container .checkbox input:checked + label:before {
  border: 3px solid #254f90;
}
.form-field-container .checkbox input:checked + label {
  color: #254f90;
  font-weight: 600;
}
</pre>
</code>

<h5>Error message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
  color: #d2201e;
  display: none;
}
.form-field-container.validation-error .form-validation-message {
  display: block;
}
</pre>
</code>

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.form-field-container .checkbox svg {
  display: none;
  position: absolute;
  left: 7px;
}
.form-field-container .checkbox input:checked + label svg {
  display: block;
}
</pre>
</code>
`
$(".checkbox-code .css-code").html(checkboxCss);
	
//PRIMARY FORM BUTTON
//html
var primaryFormButtonHtml =
`
<a class="primary-button" href="#">Primary</a>
`

$(".primary-form-button-code .html-code code pre").text(primaryFormButtonHtml);

   //css
   const primaryFormButtonCss =
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  background-color: #18335c;
  border: solid 2px #18335c;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transform: translate(0, -2px);
  color: #ffffff;
}
.primary-button.disabled,
.primary-button.disabled:hover,
.primary-button.disabled:focus,
.primary-button.disabled:active {
  box-shadow: none;
  border: 2px solid #c7c7c7;
  background: #ffffff;
  color: #8e8e8e;
  cursor: default;
  transform: none;
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
   $(".primary-form-button-code .css-code").html(primaryFormButtonCss);
	
//SECONDARY FORM BUTTON

//html
   var secondaryFormButtonHtml =
`
<a class="secondary-button" href="#">Previous</a>
`
 $(".secondary-form-button-code .html-code code pre").text(secondaryFormButtonHtml);


//css
const secondaryFormButtonCss =
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  background-color: #18335c;
  border: solid 2px #18335c;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  transform: translate(0, -2px);
  color: #ffffff;
}
.secondary-button.disabled,
.secondary-button.disabled:hover,
.secondary-button.disabled:focus,
.secondary-button.disabled:active {
  box-shadow: none;
  border: 2px solid #c7c7c7;
  background: #ffffff;
  color: #8e8e8e;
  cursor: default;
  transform: none;
}
</pre>
</code>

<h5>Dark button</h5>
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

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.secondary-button .svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 6px;
  width: 16px;
  height: 16px;
}
.secondary-button .svg-container svg {
  fill: #254f90;
}
.secondary-button.secondary-button-dark .svg-container svg {
  fill: #fff;
}
.secondary-button:hover .svg-container svg,
.secondary-button:focus .svg-container svg {
  transition-duration: 0.4s, 0.4s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  fill: #fff;
}
</pre>
</code>
`
$(".secondary-form-button-code .css-code").html(secondaryFormButtonCss);
	
//Button group
//html
var buttonGroupHtml =
`
<div class="button-group">
  <a class=tertiary-link href="#">Cancel</a>
  <a class="primary-button" href="#">Save</a>
</div>
`
$(".button-group-code .html-code code pre").text(buttonGroupHtml);

//css
const buttonGroupCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.button-group {
  display: flex;
  align-items: center;
}
</pre>
</code>

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

<h5>Link</h5>
<code>
<pre>
/* Link */
.tertiary-link {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #254f90;
  text-decoration: underline;
  box-shadow: none;
}
.button-group .tertiary-link {
  margin-right: 40px;
}
.tertiary-link:focus {
  border: 1px dotted #254f90;
  outline: none;
}
.tertiary-link:active {
  color: #000000;
}
.tertiary-link:visited {
  color: #a42079;
  border-bottom-color: #dfb1d0;
}
</pre>
</code>
`
$(".button-group-code .css-code").html(buttonGroupCss);

//Add field
//html
var addFieldHtml =
`
<!-- Add 'disabled' class when field should be disabled -->
<a class="add-field" tabindex="0"> 
	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><script xmlns=""/>
    	<g id="Group_4171" data-name="Group 4171" transform="translate(-336 -3577)">
     		<g id="Ellipse_21" data-name="Ellipse 21" transform="translate(336 3577)" fill="#fff" stroke="#4569a0" stroke-width="3">
        		<circle cx="16" cy="16" r="16" stroke="none"/>
        		<circle cx="16" cy="16" r="14.5" fill="none"/>
			</g>
			<g id="Icon_plus" data-name="Icon / plus" transform="translate(345 3586)">
				<path id="Plus" d="M6.5,14V8.5H1v-3H6.5V0h3V5.5H15v3H9.5V14Z" transform="translate(-1)" fill="#4569a0"/>
     		</g>
   		</g>
 	</svg>
	Add another subsidary
</a>
`
$(".add-field-code .html-code code pre").text(addFieldHtml);

//css
const addFieldCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.add-field {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #333333;
  text-decoration: none;
  box-shadow: none;
  position: relative;
  display: inline-flex;
  align-items: center;
}
.add-field:focus {
  border: 0.0625rem dotted #748fb8;
  outline: none;
}
.add-field:hover {
  font-weight: 600;
  color: #254f90;
  cursor: pointer;
}
.add-field:active {
  color: #333333;
}
.add-field.disabled {
  color: #8e8e8e;
}
.add-field.disabled:hover,
.add-field.disabled:focus,
.add-field.disabled:active {
  color: #8e8e8e;
  font-weight: 400;
  cursor: default;
  border: none;
}
</pre>
</code>

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.add-field svg {
  margin-right: 8px;
}
.add-field svg g path {
  stroke: #4569a0;
}
.add-field svg path {
  stroke: #4569a0;
  fill: #4569a0;
}
.add-field:active svg g {
  stroke: #18335c;
}
.add-field:active svg path {
  fill: #18335c;
  stroke: #18335c;
}
.add-field.disabled svg g {
  stroke: #8e8e8e;
}
.add-field.disabled svg path {
  fill: #8e8e8e;
  stroke: #8e8e8e;
}
</pre>
</code>
`
$(".add-field-code .css-code").html(addFieldCss);
	
//Primary text button field
//html
var primaryTextButtonFieldHtml =
`
<!-- Toggle "validation-error" class when form is not valid --> 
<div class="form-field-container">      
   <label for="text-input-button-primary-example" class="field-label">Text box label</label>     
   <!-- Toggle "input-focused" class when field is focused, toggle "input-error" class when field is not valid, toggle 'input-disabled' class when field should be disabled -->
   <div class="input-container button-input-container">            
      <!-- Add 'disabled' attribute when field should be disabled -->
      <input id="text-input-button-primary-example" class="form-field form-text-input" name="form-input-example" type="text" value="" maxlength="255" placeholder="">    
      <a class="primary-button" href="#">
         <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Icon / plus" width="16" height="16" viewBox="0 0 16 16">
               <path id="Plus" d="M6.285,15V9.106H0V5.893H6.285V0H9.715V5.893H16V9.106H9.715V15Z" fill="#fff"/>
            </svg>
         </div>
         Add
      </a>
   </div>
   <span class="form-validation-message">Descriptive error message</span>
</div>
`
$(".primary-text-button-field-code .html-code code pre").text(primaryTextButtonFieldHtml);

//css
const primaryTextButtonFieldCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: fit-content;
}
.form-field-container .input-container {
  display: flex;
  margin-bottom: 8px;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 0 0 16px 0;
  margin: 0;
}
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
  border: solid 1px #495c74;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  min-width: 200px;
  padding: 10px;
  box-sizing: border-box;
}
.form-field-container .form-text-input {
  height: 52px;
}
.form-field-container .input-container.button-input-container .form-field {
  border-right: none;
}
.form-field-container .form-field:focus {
  outline: none;
  border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
  border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
  border: solid 3px #254f90;
}
.form-field-container .form-field:disabled {
  outline: none;
  border: solid 1px #e2e2e2;
  background-color: #f5f5f5;
  color: #8e8e8e;
}
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #254f90;
  background-color: #4569a0;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
}
.primary-button:hover,
.primary-button:focus,
.form-field-container
  .input-container.button-input-container.input-focused
  .primary-button {
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
.form-field-container .input-container.button-input-container a {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 10px 24px;
  transition: none !important;
}
.form-field-container .input-container.button-input-container a:focus,
.form-field-container .input-container.button-input-container a:hover,
.form-field-container .input-container.button-input-container a:active,
.form-field-container .input-container.button-input-container.input-focused a,
.form-field-container .input-container.button-input-container.input-error a,
.form-field-container .input-container.button-input-container.input-disabled a {
  transform: none !important;
  box-shadow: none !important;
}
.form-field-container
  .input-container.button-input-container.input-focused
  .form-field,
.form-field-container .input-container.button-input-container.input-focused a {
  border: 3px solid #254f90;
}
.form-field-container
  .input-container.button-input-container.input-error
  .form-field,
.form-field-container .input-container.button-input-container.input-error a {
  border: 3px solid #d2201e;
}
.form-field-container
  .input-container.button-input-container.input-disabled
  .form-field,
.form-field-container .input-container.button-input-container.input-disabled a {
  background-color: #f5f5f5;
  color: #8e8e8e;
  border: solid 1px #e2e2e2;
}
.form-field-container
  .input-container.button-input-container.input-disabled
  a
  .svg-container
  svg
  path {
  fill: #8e8e8e;
}
.form-field-container .input-container.button-input-container .form-field:focus,
.form-field-container.validation-error
  .input-container.button-input-container
  .form-field,
.form-field-container .form-field:disabled,
.form-field-container
  .input-container.button-input-container.input-focused
  .form-field,
.form-field-container
  .input-container.button-input-container.input-error
  .form-field,
.form-field-container
  .input-container.button-input-container.input-disabled
  .form-field {
  border-right: none;
}
</pre>
</code>

<h5>Error Message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
  color: #d2201e;
  display: none;
}
.form-field-container.validation-error .form-validation-message {
  display: block;
}
</pre>
</code>

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.form-field-container .input-container.button-input-container a .svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 6px;
  width: 16px;
  height: 16px;
}
.form-field-container
  .input-container.button-input-container
  .primary-button
  .svg-container
  svg
  path {
  fill: #fff;
}
</pre>
</code>
`
$(".primary-text-button-field-code .css-code").html(primaryTextButtonFieldCss);
	
//Secondary text button field
//html
var secondaryTextButtonFieldHtml =
`
<!-- Toggle "validation-error" class when form is not valid --> 
<div class="form-field-container">
   <label for="text-input-button-primary-example" class="field-label">Text box label</label> 
   <!-- Toggle "input-focused" class when field is focused, toggle "input-error" class when field is not valid, toggle 'input-disabled' class when field should be disabled -->
   <div class="input-container button-input-container">
      <!-- Add 'disabled' attribute when field should be disabled -->
      <input id="text-input-button-primary-example" class="form-field form-text-input" name="form-input-example" type="text" value="" maxlength="255" placeholder="">          
      <a class="secondary-button" href="#">
         <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Icon / search" width="18" height="18" viewBox="0 0 18 18">
               <path id="Search" d="M15.788,18h0l-4.255-4.255.369-.369-1.535-1.535A6.537,6.537,0,0,1,0,6.539a6.537,6.537,0,1,1,11.84,3.828L13.375,11.9l.369-.369L18,15.789,15.789,18ZM6.538,2.085A4.454,4.454,0,1,0,9.688,3.39,4.427,4.427,0,0,0,6.538,2.085Z" transform="translate(0 0)" fill="#4569a0"/>
            </svg>
         </div>
         Find      
      </a>
   </div>
   <span class="form-validation-message">Descriptive error message</span>
</div>
`
$(".secondary-text-button-field-code .html-code code pre").text(secondaryTextButtonFieldHtml);

//css
const secondaryTextButtonFieldCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: fit-content;
}
.form-field-container .input-container {
  display: flex;
  margin-bottom: 8px;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 0 0 16px 0;
  margin: 0;
}
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
  border: solid 1px #495c74;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  min-width: 200px;
  padding: 10px;
  box-sizing: border-box;
}
.form-field-container .form-text-input {
  height: 52px;
}
.form-field-container .input-container.button-input-container .form-field {
  border-right: none;
}
.form-field-container .form-field:focus {
  outline: none;
  border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
  border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
  border: solid 3px #254f90;
}
.form-field-container .form-field:disabled {
  outline: none;
  border: solid 1px #e2e2e2;
  background-color: #f5f5f5;
  color: #8e8e8e;
}
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #4569a0;
  background-color: #ffffff;
  color: #4569a0;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
}
.secondary-button:hover,
.secondary-button:focus,
.form-field-container .input-container.button-input-container.input-focused .secondary-button {
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
.form-field-container .input-container.button-input-container a {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 10px 24px;
  transition: none !important;
}
.form-field-container .input-container.button-input-container a:focus,
.form-field-container .input-container.button-input-container a:hover,
.form-field-container .input-container.button-input-container a:active,
.form-field-container .input-container.button-input-container.input-focused a,
.form-field-container .input-container.button-input-container.input-error a,
.form-field-container .input-container.button-input-container.input-disabled a {
  transform: none !important;
  box-shadow: none !important;
}
.form-field-container
  .input-container.button-input-container.input-focused
  .form-field,
.form-field-container .input-container.button-input-container.input-focused a {
  border: 3px solid #254f90;
}
.form-field-container
  .input-container.button-input-container.input-error
  .form-field,
.form-field-container .input-container.button-input-container.input-error a {
  border: 3px solid #d2201e;
}
.form-field-container
  .input-container.button-input-container.input-disabled
  .form-field,
.form-field-container .input-container.button-input-container.input-disabled a {
  background-color: #f5f5f5;
  color: #8e8e8e;
  border: solid 1px #e2e2e2;
}
.form-field-container
  .input-container.button-input-container.input-disabled
  a
  .svg-container
  svg
  path {
  fill: #8e8e8e;
}
.form-field-container .input-container.button-input-container .form-field:focus,
.form-field-container.validation-error
  .input-container.button-input-container
  .form-field,
.form-field-container .form-field:disabled,
.form-field-container
  .input-container.button-input-container.input-focused
  .form-field,
.form-field-container
  .input-container.button-input-container.input-error
  .form-field,
.form-field-container
  .input-container.button-input-container.input-disabled
  .form-field {
  border-right: none;
}
</pre>
</code>

<h5>Error Message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
  color: #d2201e;
  display: none;
}
.form-field-container.validation-error .form-validation-message {
  display: block;
}
</pre>
</code>

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.form-field-container .input-container.button-input-container a .svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 6px;
  width: 16px;
  height: 16px;
}
.form-field-container
  .input-container.button-input-container
  .secondary-button
  .svg-container
  svg
  path {
  fill: #254f90;
}
.form-field-container
  .input-container.button-input-container
  .secondary-button:hover
  .svg-container
  svg
  path,
.form-field-container
  .input-container.button-input-container
  .secondary-button:focus
  .svg-container
  svg
  path,
.form-field-container
  .input-container.button-input-container
  .secondary-button:active
  .svg-container
  svg
  path,
.form-field-container
  .input-container.button-input-container.input-focused
  .secondary-button
  .svg-container
  svg
  path {
  fill: #fff;
}
</pre>
</code>
`
$(".secondary-text-button-field-code .css-code").html(secondaryTextButtonFieldCss);
	
	
//Text box with help
//html
var textBoxInlineHelpSimpleHtml =
`
<!-- Toggle "validation-error" class when form is not valid -->  
<div class="form-field-container">     
   <label for="text-input-example" class="field-label">Text box label</label>    
   <p class="contextual-help">Help message providing information on how to fill out the field.</p>
   <!-- Add 'disabled' attribute when field should be disabled -->  
   <input id="text-input-example" class="form-field form-text-input" name="form-input-example" type="text" value="" maxlength="255" placeholder=""> 
   <span class="form-validation-message">Descriptive error message</span>
</div>
`
$(".text-box-inline-help-simple-code .html-code code pre").text(textBoxInlineHelpSimpleHtml);

//css
const textBoxInlineHelpSimpleCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
 font-family: "Open Sans", sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 16px;
 width: 100%;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
 width: 100%;
 display: block;
 font-size: 16px;
 padding: 0 0 16px 0;
 margin: 0;
}
</pre>
</code>

<h5>Field help</h5>
<code>
<pre>
/* Field help */
.form-field-container .contextual-help {
  margin: 0;
  padding-bottom: 16px;
  font-size: 14px;
  line-height: 24px;
  color: #666666;
}
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
 border: solid 1px #495c74;
 font-family: "Open Sans", sans-serif;
 font-weight: 400;
 font-style: normal;
 font-size: 16px;
 width: 100%;
 padding: 10px;
 box-sizing: border-box;
 margin-bottom: 8px;
}
.form-field-container .form-text-input {
 height: 52px;
}
.form-field-container .form-field:focus {
 outline: none;
 border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
 border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
 border: solid 3px #254f90;
}
.form-field-container .form-field:disabled {
 outline: none;
 border: solid 1px #e2e2e2;
 background-color: #f5f5f5;
 color: #8e8e8e;
}
</pre>
</code>

<h5>Error message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
 color: #d2201e;
 display: none;
}
.form-field-container.validation-error .form-validation-message {
 display: block;
}
</pre>
</code>
`
$(".text-box-inline-help-simple-code .css-code").html(textBoxInlineHelpSimpleCss);
  

//Text box with help complex
//html
var textBoxInlineHelpComplexHtml =
`
<!-- Toggle "validation-error" class when form is not valid --> 
<div class="form-field-container">         
   <label for="text-input-example" class="field-label">Text box label</label>  
   <!-- Add 'active' class here to expand dropdown -->
   <div class="contextual-help-dropdown active"> 
      <div class="contextual-help-dropdown-tile" tabindex="0">
         <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="7.5" height="12" viewBox="0 0 7.5 12">
               <g  data-name="Icon / chevron / down" transform="translate(0 12) rotate(-90)">
                  <path data-name="Chevron / Down" d="M4.521,6,0,10.513,1.489,12,7.5,6,1.489,0,0,1.487Z" transform="translate(12) rotate(90)" fill="#4569a0"/>
               </g>
            </svg>
         </div>
         <span>How to work out your input credits</span>
      </div>
      <div class="contextual-help-dropdown-content">
         <p class="contextual-help">First work out the lesser of the following two amounts, then divide that amount by three.</p>
         <p class="contextual-help">Expenditure in acquiring or producing credit inputs and energy inputs for which you have claimed the incentive, to the extent that it is reasonably attributable to the production of the relevant output (expenditure).</p>
      </div>
   </div>
   <!-- Add 'disabled' attribute when field should be disabled -->
   <input id="text-input-example" class="form-field form-text-input" name="form-input-example" type="text" value="" maxlength="255" placeholder=""> 
   <span class="form-validation-message">Descriptive error message</span>
</div>
`
$(".text-box-inline-help-complex-code .html-code code pre").text(textBoxInlineHelpComplexHtml);

//css
const textBoxInlineHelpComplexCss =
`
<h5>Container</h5>
<code>
<pre>
/* Container */
.form-field-container {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: 100%;
}
</pre>
</code>

<h5>Label</h5>
<code>
<pre>
/* Label */
.form-field-container .field-label {
  width: 100%;
  display: block;
  font-size: 16px;
  padding: 0 0 16px 0;
  margin: 0;
}
</pre>
</code>

<h5>Field help</h5>
<code>
<pre>
/* Field help */
.form-field-container .contextual-help {
  margin: 0;
  padding-bottom: 16px;
  font-size: 14px;
  line-height: 24px;
  color: #666666;
}
.contextual-help-dropdown .contextual-help-dropdown-tile {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #4569a0;
  text-decoration: underline;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  padding-bottom: 16px;
}
.contextual-help-dropdown .contextual-help-dropdown-tile:focus {
  outline: none;
}
.contextual-help-dropdown .contextual-help-dropdown-tile:focus span {
  outline: none;
  border: 1px dotted #748fb8;
}
.contextual-help-dropdown .contextual-help-dropdown-content {
  display: none;
  border-left: solid 2px #254f90;
  margin: 0 0 16px 8px;
  box-sizing: border-box;
}
.contextual-help-dropdown.active .contextual-help-dropdown-content {
  display: block;
  padding-left: 8px;
}
.contextual-help-dropdown .contextual-help-dropdown-content *:last-child {
  padding-bottom: 0;
}
</pre>
</code>

<h5>Field</h5>
<code>
<pre>
/* Field */
.form-field-container .form-field {
  border: solid 1px #495c74;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 8px;
}
.form-field-container .form-text-input {
  height: 52px;
}
.form-field-container .form-field:focus {
  outline: none;
  border: solid 3px #254f90;
}
.form-field-container.validation-error .form-field {
  border: solid 3px #d2201e;
}
.form-field-container.validation-error .form-field:focus {
  border: solid 3px #254f90;
}
.form-field-container .form-field:disabled {
  outline: none;
  border: solid 1px #e2e2e2;
  background-color: #f5f5f5;
  color: #8e8e8e;
}
</pre>
</code>

<h5>Error message</h5>
<code>
<pre>
/* Error message */
.form-field-container .form-validation-message {
  color: #d2201e;
  display: none;
}
.form-field-container.validation-error .form-validation-message {
  display: block;
}
</pre>
</code>

<h5>Icon</h5>
<code>
<pre>
/* Icon */
.svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contextual-help-dropdown .contextual-help-dropdown-tile .svg-container {
  padding: 0 8px 0 4px;
}
.contextual-help-dropdown.active
  .contextual-help-dropdown-tile
  .svg-container
  svg {
  transform: rotate(90deg);
}
</pre>
</code>
`
$(".text-box-inline-help-complex-code .css-code").html(textBoxInlineHelpComplexCss);
	
//Warning Notification
//html
const formWarningNotificationHtml =
`
<div class="form-warning-notification">
   <div class="form-warning-notification-content">
      <div class="icon-container">
         <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
               <g id="Group_7871" data-name="Group 7871" transform="translate(-3210 -867)">
                  <circle id="Ellipse_22" data-name="Ellipse 22" cx="28" cy="28" r="28" transform="translate(3210 867)" fill="#e75755"></circle>
                  <g id="Group_7573" data-name="Group 7573" transform="translate(3224.631 880.679)">
                     <path id="Path" d="M12.932,0a1.453,1.453,0,0,0-1.19.706L.192,20.181a1.375,1.375,0,0,0,0,1.408,1.455,1.455,0,0,0,1.254.7h23.1a1.455,1.455,0,0,0,1.254-.7,1.375,1.375,0,0,0,0-1.408L14.248.707A1.456,1.456,0,0,0,12.932,0Z" fill="#fff"></path>
                     <g id="Group_117" data-name="Group 117" transform="translate(11.375 6.609)">
                        <path id="Shape" d="M1.995,1.256A1.149,1.149,0,0,1,1,2.512,1.149,1.149,0,0,1,0,1.256,1.149,1.149,0,0,1,1,0a1.15,1.15,0,0,1,1,1.256Z" transform="translate(0.51 9.38)" fill="#d2201e"></path>
                        <path id="Path-2" data-name="Path" d="M3.009,1.255A1.308,1.308,0,0,0,2.68.527,1.568,1.568,0,0,0,.36.5a1.315,1.315,0,0,0-.355.756,1.21,1.21,0,0,0,0,.226L.627,7.633A.72.72,0,0,0,.881,8.1a.957.957,0,0,0,.626.224.967.967,0,0,0,.575-.184.732.732,0,0,0,.3-.512l.622-6.151A1.2,1.2,0,0,0,3.009,1.255Z" transform="translate(0 0)" fill="#d2201e"></path>
                     </g>
                  </g>
               </g>
            </svg>
         </div>
      </div>
      <div class="text-container">
         <p class="description">Warning alerts contain information on errors that the user needs to know.</p>
         <ul>
            <li>
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
                  <circle fill="#c18100" cx="8" cy="8" r="4"/>
               </svg>
               Critical error that needs to be fixed
            </li>
            <li>
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
                  <circle fill="#c18100" cx="8" cy="8" r="4"/>
               </svg>
               Another thing that needs to be fixed before you can continue
            </li>
         </ul>
      </div>
   </div>
</div>
`

$(".form-warning-notification-code .html-code code pre").text(formWarningNotificationHtml);

//css
const formWarningNotificationCss =
`
<h5>Containers</h5>
<code>
<pre>
/* Containers */
.form-warning-notification {
  background: #fce9e9;
  border-top: 4px solid #f5b5b5;
  color: #333333;
}
.form-warning-notification-content {
  display: flex;
  padding: 24px 32px 24px 24px;
}
.form-warning-notification .icon-container {
  border-radius: 50%;
  height: auto;
  justify-self: center;
  width: auto;
  align-self: flex-start;
  display: flex;
  min-width: 56px;
}
</pre>
</code>

<h5>Text</h5>
<code>
<pre>
/* Text */
.form-warning-notification .description {
  color: #333333;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.78;
  letter-spacing: 0.2px;
  margin: 0;
  padding: 8px 0 16px 16px;
}
</pre>
</code>

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
.form-warning-notification-content *:last-child li:last-of-type {
  padding-bottom: 0px;
}
ul li svg {
  position: absolute;
  left: 0px;
  top: 6px;
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
</pre>
</code>

<h5>Icons</h5>
<code>
<pre>
/* Icons */
.form-warning-notification .close-icon {
  display: flex;
  justify-content: flex-end;
  padding: 17px;
  box-sizing: border-box;
  position: absolute;
  right: 8px;
}
.form-warning-notification .close-icon svg:hover {
  cursor: pointer;
}
.form-warning-notification .icon-container .icon {
  height: 56px;
  width: 56px;
  display: inline-block;
  line-height: 0;
  position: relative;
  right: 0;
}
</pre>
</code>

<h5>Media Query</h5>
<code>
<pre>
/* Media Query */
@media (max-width: 576px) {
  .form-warning-notification .description {
    font-size: 14px;
    padding-top: 16px;
  }
  .form-warning-notification .icon-container {
    min-width: 32px;
    align-self: center;
  }
  .form-warning-notification .icon-container .icon {
    width: 32px;
    height: 32px;
  }
  .form-warning-notification-content {
    flex-direction: column;
  }
  .form-warning-notification ul li {
    line-height: 24px;
    letter-spacing: 0.2px;
    font-size: 14px;
  }
}
</pre>
</code>
`
$(".form-warning-notification-code .css-code").html(formWarningNotificationCss);
});



