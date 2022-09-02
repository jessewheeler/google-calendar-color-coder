function ColorEvents() {

  let calendars = CalendarApp.getAllOwnedCalendars();
  let today = new Date();
  let nextWeek = new Date();

  nextWeek.setDate(nextWeek.getDate() + 7);

  for (let i = 0; i < calendars.length; i++) {
    let events = calendars[i].getEvents(today, nextWeek);    
    for (let j = 0; j < events.length; j++) {
      let firstCharacterOfEventTitle = events[j].getTitle().length == 0 ? '' : events[j].getTitle()[0];
      switch(firstCharacterOfEventTitle) {
        case "[":
          events[j].setColor(CalendarApp.EventColor.PALE_GREEN);
          break;
        case "!":
          events[j].setColor(CalendarApp.EventColor.RED);
          break;
        case '#':
          events[j].setColor(CalendarApp.EventColor.PALE_BLUE);
          break;
      }
    }
  }
}
