function ColorEvents() {

  var today = new Date();
  var nextweek = new Date();
  nextweek.setDate(nextweek.getDate() + 7);
  Logger.log(today + " " + nextweek);

  var calendars = CalendarApp.getAllOwnedCalendars();
  Logger.log("found number of calendars: " + calendars.length);

  for (var i=0; i<calendars.length; i++) {
    var calendar = calendars[i];
    var events = calendar.getEvents(today, nextweek);
    for (var j=0; j<events.length; j++) {
      var e = events[j];
      var title = e.getTitle();
      if (title[0] == "[") {
        e.setColor(CalendarApp.EventColor.PALE_GREEN);
      }
      if (title[0] == "!") {
        e.setColor(CalendarApp.EventColor.RED);
      }
      if (title[0] == '#') {
        e.setColor(CalendarApp.EventColor.PALE_BLUE);
      }
    }
  }
}
