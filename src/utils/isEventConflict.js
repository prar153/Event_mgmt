const isEventConflict = (events, newEvent) => {
  return events.some(
    (event) =>
      event.id !== newEvent.id && // avoid self-check when editing
      event.date === newEvent.date &&
      event.venue.trim().toLowerCase() === newEvent.venue.trim().toLowerCase()
  );
};

export default isEventConflict;
