(function (exports) {

  var NoteListView = function (noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.printHtml = function () {
    if (this.noteList.displayNotes().length === 0) return 'no notes'
    var html = []
    html = this.noteList.displayNotes().map(function(note){
      var noteText = note.displayNote().slice(0,20)
      return `<ul><li><div><a href="#${note.id}">${noteText}</a></div></li></ul>`
    })
    return html.join('')
  };

  exports.NoteListView = NoteListView
})(this);
