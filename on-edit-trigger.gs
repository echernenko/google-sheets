function onEdit(e){
  var s = SpreadsheetApp.getActiveSheet();
  var editDate = new Date();
  var cellRow = "D";
  var r = s.getActiveCell(); 
  // if(r.getRow() == 2) {
    s.getRange(cellRow + r.getRow() ).setValue(Utilities.formatDate(editDate, "GMT+1", "dd.MM.yyyy hh:mm"));
  // }
}
