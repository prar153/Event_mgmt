const isEventConflict = (events, newEvent) => {
  return events.some(
    (event) =>
      event.id !== newEvent.id && 
      event.date === newEvent.date &&
      event.venue.trim().toLowerCase() === newEvent.venue.trim().toLowerCase()
  );
};

export default isEventConflict;
