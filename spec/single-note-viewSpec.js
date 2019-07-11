function NoteDouble () {
    this.displayNote = function(){
      return 'Selzter allllllll day'
    };
};

(function () {
  var noteDouble = new NoteDouble()
  var singleNoteView = SingleNoteView(noteDouble)
  var htmlOutput = '<div>Selzter allllllll day</div>'
  var testName = 'test the return html from the SingleNote'
  assert.isTrue(singleNoteView.printHtml() === htmlOutput, testName)
})()
