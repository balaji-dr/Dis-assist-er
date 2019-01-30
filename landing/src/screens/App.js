import React, { Component } from 'react';
//
import '../assets/css/linearicons.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/animate.css';
import '../assets/css/bootstrap.css';
import '../assets/css/main.css';

//


import $ from 'jquery'
import jQuery from 'jquery'






import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Product from "../components/Product";
import Team from "../components/Team";
import Feed from "../components/Feed";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Azure from "../components/Azure";

import MainRouter from "../router/router"
class App extends Component {

  render() {





      $(document).ready(function(){

          "use strict";

          var window_width 	 = $(window).width(),
              window_height 		 = window.innerHeight,
              header_height 		 = $(".default-header").height(),
              header_height_static = $(".site-header.static").outerHeight(),
              fitscreen 			 = window_height - header_height;


          // $(window).on('load', function() {
          //        // Animate loader off screen
          //        $(".preloader").fadeOut("slow");;
          //    });

          $(".fullscreen").css("height", window_height)
          $(".fitscreen").css("height", fitscreen);

          //-------- Active Sticky Js ----------//
          $(".sticky-header").sticky({topSpacing:0});

          // -------   Active Mobile Menu-----//

          // $(".mobile-btn").on('click', function(e){
          //     e.preventDefault();
          //     $(".main-menu").slideToggle();
          //     $("span", this).toggleClass("lnr-menu lnr-cross");
          //     $(".main-menu").addClass('mobile-menu');
          // });
          // $(".main-menu li a").on('click', function(e){
          //     e.preventDefault();
          //     $(".mobile-menu").slideUp();
          //     $(".mobile-btn span").toggleClass("lnr-menu lnr-cross");
          // });


          // $(function(){
          //     $('#Container').mixItUp();
          // });


          // $('.active-testimonial-carousel').owlCarousel({
          //     loop:true,
          //     dot: true,
          //     items: 3,
          //     margin: 30,
          //     autoplay:true,
          //     autoplayTimeout:3000,
          //     autoplayHoverPause:true,
          //     animateOut: 'fadeOutLeft',
          //     animateIn: 'fadeInRight',
          //     responsive:{
          //         0:{
          //             items:1,
          //         },
          //         600:{
          //             items:3,
          //         }
          //     }
          // })

      });
      (function ($){

          $.fn.bekeyProgressbar = function(options){

              options = $.extend({
                  animate     : true,
                  animateText : true
              }, options);

              var $this = $(this);

              var $progressBar = $this;
              var $progressCount = $progressBar.find('.progressBar-percentage-count');
              var $circle = $progressBar.find('.progressBar-circle');
              var percentageProgress = $progressBar.attr('data-progress');
              var percentageRemaining = (100 - percentageProgress);
              var percentageText = $progressCount.parent().attr('data-progress');

              //Calcule la circonférence du cercle
              var radius = $circle.attr('r');
              var diameter = radius * 2;
              var circumference = Math.round(Math.PI * diameter);

              //Calcule le pourcentage d'avancement
              var percentage =  circumference * percentageRemaining / 100;

              $circle.css({
                  'stroke-dasharray' : circumference,
                  'stroke-dashoffset' : percentage
              })

              //Animation de la barre de progression
              if(options.animate === true){
                  $circle.css({
                      'stroke-dashoffset' : circumference
                  }).animate({
                      'stroke-dashoffset' : percentage
                  }, 3000 )
              }

              //Animation du texte (pourcentage)
              if(options.animateText == true){

                  $({ Counter: 0 }).animate(
                      { Counter: percentageText },
                      { duration: 3000,
                          step: function () {
                              $progressCount.text( Math.ceil(this.Counter) + '%');
                          }
                      });

              }else{
                  $progressCount.text( percentageText + '%');
              }

          };

      })(jQuery);

      $(document).ready(function(){

          $('.progressBar--animateNone').bekeyProgressbar({
              animate : false,
              animateText : false
          });

          $('.progressBar--animateCircle').bekeyProgressbar({
              animate : true,
              animateText : false
          });

          $('.progressBar--animateText').bekeyProgressbar({
              animate : false,
              animateText : true
          });

          $('.progressBar--animateAll').bekeyProgressbar();

      });

      (function($) {
          var defaults = {
                  topSpacing: 0,
                  bottomSpacing: 0,
                  className: 'is-sticky',
                  wrapperClassName: 'sticky-wrapper',
                  center: false,
                  getWidthFrom: '',
                  responsiveWidth: false
              },
              $window = $(window),
              $document = $(document),
              sticked = [],
              windowHeight = $window.height(),
              scroller = function() {
                  var scrollTop = $window.scrollTop(),
                      documentHeight = $document.height(),
                      dwh = documentHeight - windowHeight,
                      extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

                  for (var i = 0; i < sticked.length; i++) {
                      var s = sticked[i],
                          elementTop = s.stickyWrapper.offset().top,
                          etse = elementTop - s.topSpacing - extra;

                      if (scrollTop <= etse) {
                          if (s.currentTop !== null) {
                              s.stickyElement
                                  .css('width', '')
                                  .css('position', '')
                                  .css('top', '');
                              s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
                              s.currentTop = null;
                          }
                      }
                      else {
                          var newTop = documentHeight - s.stickyElement.outerHeight()
                              - s.topSpacing - s.bottomSpacing - scrollTop - extra;
                          if (newTop < 0) {
                              newTop = newTop + s.topSpacing;
                          } else {
                              newTop = s.topSpacing;
                          }
                          if (s.currentTop != newTop) {
                              s.stickyElement
                                  .css('width', s.stickyElement.width())
                                  .css('position', 'fixed')
                                  .css('top', newTop);

                              if (typeof s.getWidthFrom !== 'undefined') {
                                  s.stickyElement.css('width', $(s.getWidthFrom).width());
                              }

                              s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
                              s.currentTop = newTop;
                          }
                      }
                  }
              },
              resizer = function() {
                  windowHeight = $window.height();

                  for (var i = 0; i < sticked.length; i++) {
                      var s = sticked[i];
                      if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
                          s.stickyElement.css('width', $(s.getWidthFrom).width());
                      }
                  }
              },
              methods = {
                  init: function(options) {
                      var o = $.extend({}, defaults, options);
                      return this.each(function() {
                          var stickyElement = $(this);

                          var stickyId = stickyElement.attr('id');
                          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
                          var wrapper = $('<div></div>')
                              .attr('id', stickyId + '-sticky-wrapper')
                              .addClass(o.wrapperClassName);
                          stickyElement.wrapAll(wrapper);

                          if (o.center) {
                              stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
                          }

                          if (stickyElement.css("float") == "right") {
                              stickyElement.css({"float":"none"}).parent().css({"float":"right"});
                          }

                          var stickyWrapper = stickyElement.parent();
                          stickyWrapper.css('height', stickyElement.outerHeight());
                          sticked.push({
                              topSpacing: o.topSpacing,
                              bottomSpacing: o.bottomSpacing,
                              stickyElement: stickyElement,
                              currentTop: null,
                              stickyWrapper: stickyWrapper,
                              className: o.className,
                              getWidthFrom: o.getWidthFrom,
                              responsiveWidth: o.responsiveWidth
                          });
                      });
                  },
                  update: scroller,
                  unstick: function(options) {
                      return this.each(function() {
                          var unstickyElement = $(this);

                          var removeIdx = -1;
                          for (var i = 0; i < sticked.length; i++)
                          {
                              if (sticked[i].stickyElement.get(0) == unstickyElement.get(0))
                              {
                                  removeIdx = i;
                              }
                          }
                          if(removeIdx != -1)
                          {
                              sticked.splice(removeIdx,1);
                              unstickyElement.unwrap();
                              unstickyElement.removeAttr('style');
                          }
                      });
                  }
              };

          // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
          if (window.addEventListener) {
              window.addEventListener('scroll', scroller, false);
              window.addEventListener('resize', resizer, false);
          } else if (window.attachEvent) {
              window.attachEvent('onscroll', scroller);
              window.attachEvent('onresize', resizer);
          }

          $.fn.sticky = function(method) {
              if (methods[method]) {
                  return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
              } else if (typeof method === 'object' || !method ) {
                  return methods.init.apply( this, arguments );
              } else {
                  $.error('Method ' + method + ' does not exist on jQuery.sticky');
              }
          };

          $.fn.unstick = function(method) {
              if (methods[method]) {
                  return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
              } else if (typeof method === 'object' || !method ) {
                  return methods.unstick.apply( this, arguments );
              } else {
                  $.error('Method ' + method + ' does not exist on jQuery.sticky');
              }

          };
          $(function() {
              setTimeout(scroller, 0);
          });
      })(jQuery);







      return (
      <React.Fragment>
      <MainRouter />
      </React.Fragment>
    );
  }
}

export default App;
