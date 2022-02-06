import $ from '../core';

$.prototype.addClass = function (...clasNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {      
      continue;
    }
    this[i].classList.add(...clasNames);
    
  }
  return this;
}

$.prototype.removeClass = function (...clasNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {      
      continue;
    }
    
    this[i].classList.remove(...clasNames);    
  }
  return this;
}
$.prototype.toggleClass = function (clasNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {      
      continue;
    }
    
    this[i].classList.toggle(clasNames);
    
  }
  return this;
}