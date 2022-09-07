import { createSelector } from "reselect";

const getShowFiltered = (state) => state.todo.showFiltered;
const getNotes = (state) => state.todo.notes

export const getShowNotes = createSelector(
  [getShowFiltered, getNotes],
  (showFiltered, notes) => {
    switch (showFiltered) {
      case "all":
        return notes;
      case "active":
        return notes.filter((note) => !note.isDone);
      case "completed":
        return notes.filter((note) => note.isDone);
      default:
    }
  }
);