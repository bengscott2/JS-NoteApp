function NoteDouble () {
    this.displayNote = function(){
      return 'Selzter allllllll day'
    };
};

(function () {
  var singleNoteView = SingleNoteView(NoteDouble)
  var htmlOutput = '<div>Selzter allllllll day</div>'
  var testName = 'test the return html from the SingleNote '
})()
