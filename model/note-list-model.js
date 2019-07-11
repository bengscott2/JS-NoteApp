(function (exports) {

  var NoteList = function () {
    this.notes = []
  }

  NoteList.prototype.displayNotes = function () {
    return this.notes
  }

  NoteList.prototype.addNote = function (text, note = Note) {
    id = this.notes.length
    this.notes.push(new note(text, id));
    return this.notes[this.notes.length - 1]
  }

  exports.NoteList = NoteList
})(this);
