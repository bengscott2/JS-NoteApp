(function (exports) {

  var NoteListView = function (noteModel) {
    this.noteModel = noteModel;
  }

  NoteListView.prototype.printHtml = function () {
    if (this.noteModel.displayNotes().length === 0) return 'no notes'
    var html = []
    html = this.noteModel.displayNotes().map(note => `<ul><li><div>${note.displayNote()}</div></li></ul>`)
    return html.join('')
  };

  exports.NoteListView = NoteListView
})(this);
