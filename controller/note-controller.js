(function (exports) {
  function NoteController (noteList, noteListView = NoteListView, docID = 'app') {
    this.noteList = noteList;
    this.noteListView = new noteListView(this.noteList);
    this.docID = docID;
  };

  NoteController.prototype.insertHtml = function () {
    var html = this.noteListView.printHtml();
    var element = document.getElementById(this.docID);
    element.innerHTML = html;
  };

  exports.NoteController = NoteController
})(this);
