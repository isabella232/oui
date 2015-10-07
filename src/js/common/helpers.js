// Get height/width/sizing of a given element.

function getProps(el) {
  element = {
    height          : el.height(),
    width           : el.width(),
    top             : el.offset().top,
    left            : el.offset().left,
    bottom          : el.offset().top  + el.height(),
    right           : el.offset().left + el.width(),
  }
  return element;
}
