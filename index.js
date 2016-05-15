var getRadioGroupValue = function(name) {
  return document.querySelector('input[name="' + name + '"]:checked').value;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = getRadioGroupValue;
} else if (window) {
  window.getRadioGroupValue = getRadioGroupValue;
}
