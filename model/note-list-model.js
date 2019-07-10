(function (exports) {

  var NoteList = function () {
    this.notes = []
  }

  NoteList.prototype.displayNotes = function () {
    return this.notes
  }

  NoteList.prototype.addNote = function (text, note = Note) {
    this.notes.push(new note(text));
    return this.notes[this.notes.length - 1]
  }

  exports.NoteList = NoteList
})(this);
