function NoteDouble (text, id) {
    this.text = text;
    this.id = id
};

NoteDouble.prototype.displayNote = function () {
  return this.text
};

function EmptyNoteListDouble () {
  this.notes = []
}

EmptyNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testEmptyNoteModel () {
  var emptyNoteListDouble = new EmptyNoteListDouble();
  noteListView = new NoteListView(emptyNoteListDouble)
  htmlOutput = 'no notes'
  testName = 'test that it returns an html string for an empty note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();


function OneNoteListDouble () {
  this.notes = [new NoteDouble('single test', 0)]
}

OneNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testOneNoteModel () {
  var oneNoteListDouble = new OneNoteListDouble()
  noteListView = new NoteListView(oneNoteListDouble)
  htmlOutput = `<ul><li><div><a href="#0">single test</a></div></li></ul>`
  testName = 'test that it returns an html string for a one note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();

function SeveralNoteListDouble () {
  this.notes = [new NoteDouble('single test', 0),new NoteDouble('second test', 1), new NoteDouble('third test', 2)]
}

SeveralNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testOneNoteModel () {
  var severalNoteListDouble = new SeveralNoteListDouble();
  noteListView = new NoteListView(severalNoteListDouble);
  htmlOutput = `<ul><li><div><a href="#0">single test</a></div></li></ul><ul><li><div><a href="#1">second test</a></div></li></ul><ul><li><div><a href="#2">third test</a></div></li></ul>`
  testName = 'test that it returns an html string for a several note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();
