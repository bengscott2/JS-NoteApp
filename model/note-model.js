(function (exports) {

  var Note = function (text, id = 0) {
    this.text = text
    this.id = id
  }

  Note.prototype.displayNote = function () {
    return this.text
  }

  exports.Note = Note
})(this);
