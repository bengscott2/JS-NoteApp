(function (exports) {

  var NoteList = function () {
    this.notes = []
  }

  Note.prototype.displayNotes = function () {
    return this.notes
  }

  exports.NoteList = NoteList     
})(this);
