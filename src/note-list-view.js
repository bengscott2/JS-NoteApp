(function (exports) {

  var NoteListView = function (noteModel = NoteModel) {
    this.noteModel = new noteModel();
  }

  NoteListView.prototype.printHtml = function () {
    if (this.noteModel.displayNotes().length === 0) return 'no notes'
    var html = []
    html = this.noteModel.displayNotes().map(note => `<ul><li><div>${note}</div></li>`)
    return html.join('')
  };

  exports.NoteListView = NoteListView
})(this);
