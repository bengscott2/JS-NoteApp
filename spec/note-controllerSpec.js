function OneNoteListDouble () {
  this.notes = []
}

function NoteListViewDouble (notelist) {
  this.notelist = notelist
}

NoteListViewDouble.prototype.printHtml = function () {
  return '<ul><li><div>Favourite food: pesto</div></li></ul>'
};


(function testFunctionTakesANoteList () {
  var noteListViewDouble = NoteListViewDouble
  var noteListDouble = new OneNoteListDouble()
  var object = new Object
  var testName = 'test existance of NoteController function'
  noteController = new NoteController (noteListDouble, noteListViewDouble)

  assert.isTrue(typeof noteController === typeof object, testName)
})();


(function testInsertHtmlFunction () {
  element = document.createElement('div')
  element.setAttribute('id','app')
  document.getElementById('test').appendChild(element)

  var noteListDouble = new OneNoteListDouble()
  var noteListViewDouble = NoteListViewDouble
  var testName = 'Test insertHtml function of NoteController chages app element on page'
  noteController = new NoteController (noteListDouble, NoteListViewDouble)
  noteController.insertHtml();
  var innerHtml = document.getElementById('app').innerHTML

  assert.isTrue(innerHtml === '<ul><li><div>Favourite food: pesto</div></li></ul>', testName)
})();
