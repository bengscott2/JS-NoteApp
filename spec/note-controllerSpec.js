function OneNoteListDouble () {
  this.notes = []
}

function NoteListViewDouble (notelist) {
  this.notelist = notelist
}

NoteListViewDouble.prototype.printHtml = function () {
  return '<ul><li><div>Favourite food: pesto</div></li></ul>'
};

(function () {
  function testFunctionTakesANoteList () {
    var noteListDouble = new NoteListViewDouble
    var object = new Object
    var docID = document.createElement('app')
    var testName = 'test existance of NoteController function'
    noteController = new NoteController (notelist, NoteListViewDouble, docID)
    assert.isTrue(typeof noteController === typeof object, testName)
  }
})();

// (function () {
//   function testInsertHtmlFunction ()
// })
