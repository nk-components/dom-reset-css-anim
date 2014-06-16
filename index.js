'use strict';

/**
 * When you use CSS keyframes animation, if you want to reset the animation
 * you have to remove the element and replace it by a clone.
 *
 * @param el {Element} Element you want to reset/replace
 * @return {Element} Fresh clone.
 */

module.exports = function(el) {
  var isJquery = el instanceof $;
  var oldEl = (isJquery) ? el[0] : el;

  var newEl = oldEl.cloneNode(true);
  oldEl.parentNode.replaceChild(newEl, oldEl);

  return isJquery ? $(newEl) : newEl;
};
