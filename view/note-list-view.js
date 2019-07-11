(function (exports) {

  var NoteListView = function (noteListModel) {
    this.noteListModel = noteListModel;
  }

  NoteListView.prototype.printHtml = function () {
    if (this.noteListModel.displayNotes().length === 0) return 'no notes'
    var html = []
    html = this.noteListModel.displayNotes().map(function(note){
      var noteText = note.displayNote().slice(0,20)
      return `<ul><li><div>${noteText}</div></li></ul>`
    })
    return html.join('')
  };

  exports.NoteListView = NoteListView
})(this);
