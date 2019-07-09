(function (exports) {

  var NoteList = function () {
    this.notes = []
  }

  NoteList.prototype.displayNotes = function () {
    return this.notes
  }

  NoteList.prototype.addNote = function (note = new Note()) {
    this.notes.push(note);
    return this.notes[this.notes.length - 1]
  }

  exports.NoteList = NoteList
})(this);
