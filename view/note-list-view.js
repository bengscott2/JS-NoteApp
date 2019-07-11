(function (exports) {

  var NoteListView = function (noteListModel) {
    this.noteListModel = noteListModel;
  }

  NoteListView.prototype.printHtml = function () {
    if (this.noteListModel.displayNotes().length === 0) return 'no notes'
    var html = []
    html = this.noteListModel.displayNotes().map(note => `<ul><li><div>${note.displayNote()}</div></li></ul>`)
    return html.join('')
  };

  exports.NoteListView = NoteListView
})(this);
