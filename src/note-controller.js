(function (exports) {
  var NoteController = function (noteList, noteListView = NoteListView, docID = 'app') {
    this.noteList = noteList;
    this.noteListView = new noteListView(this.noteList);
    this.docID = docID;
  };

  NoteController.prototype.insertHtml = function () {
    var html = this.noteListView.printHtml();
    var app = document.getElementById(this.docID);
    app.innerHTML = html;
    return html
  };

  exports.NoteController = NoteController
})(this);
