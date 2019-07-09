(function (exports) {
  var NoteController = function (noteList, noteListView = NoteListView) {
    this.noteList = noteList;
    this.noteList.addNote('Favourite drink: seltzer');
    this.noteList.addNote('teststrhdfhgkjdfhgddfgkjhdfg');
    this.noteListView = new noteListView(this.noteList);
  };

  NoteController.prototype.insertHtml = function () {
    var html = this.noteListView.printHtml();
    var app = document.getElementById('app');
    app.innerHTML = html;
  };

  exports.NoteController = NoteController
})(this);

var noteList = new NoteList()
var noteController = new  NoteController(noteList);
noteController.insertHtml()
