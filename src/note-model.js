(function (exports) {

  var Note = function (text) {
    this.text = text
  }

  Note.prototype.displayNote = function () {
    return this.text
  }

  exports.Note = Note
})(this);
