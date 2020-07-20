import {createSelector} from 'reselect'

const selectNote = state=> state.Notes;

export const NoteSelector = createSelector([selectNote], Notes=> Notes.allnotes)

