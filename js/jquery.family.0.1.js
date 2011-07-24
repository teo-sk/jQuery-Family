/*
 * jQuery Family Plugin
 * version: 0.1 (2010-08-06)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Author of the plugin is Matej "Teo" Žilák
 * visit http://teo.sk for more information about the author
 *
 * This plugin is made for easement of DOM search in jQuery.
 * It defines extra family relationships between elements for
 * easement of calling multiple relationship calls based on their
 * connectivity.
 */

jQuery.fn.grandpa = function() {
  return this.parent().parent();
};

jQuery.fn.grandma = function() {
  return this.parent().parent();
};

jQuery.fn.granchildren = function() {
  return this.children().children();
};

jQuery.fn.uncle = function() {
  return this.parent().siblings();
};

jQuery.fn.aunt = function() {
  return this.parent().siblings();
};

jQuery.fn.cousin = function() {
  return this.parent().siblings().children();
};

jQuery.fn.nephew = function() {
  return this.siblings().children();
};

jQuery.fn.niece = function() {
  return this.siblings().children();
};

jQuery.fn.stepNephew = function() {
  return this.cousin().children();
};

jQuery.fn.stepNiece = function() {
  return this.cousin().children();
};

jQuery.fn.stepCousin = function() {
  return this.parent().cousin().children();
};