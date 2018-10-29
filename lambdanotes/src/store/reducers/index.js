import {
    FETCHING_NOTES,
    FETCHED_NOTES,
    ERROR_FETCHING_NOTES,
    ADDING_NEW_NOTE,
    NEW_NOTE_ADDED,
    ERROR_ADDING_NEW_NOTE,
    DELETING_NOTE,
    DELETED_NOTE,
    ERROR_DELETING_NOTE,
    UPDATING_NOTE,
    UPDATED_NOTE,
    ERROR_UPDATING_NOTE,
    SET_UPDATE_NOTE
} from '../actions';

const initialState = {
    notes: [],
    grabbingNotes: false,
    addNewNote: false,
    isUpdatingNote: false,
    isDeletingNote: false,
    error: null,
    noteToUpdate: null,
};

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_NOTES:
            return Object.assign({}, state, {grabbingNotes: true,});
        case FETCHED_NOTES:
            return Object.assign({}, state, {grabbingNotes: false, notes: action.payload,});
        case ERROR_FETCHING_NOTES:
            console.log("Error reducer error grabbing ntoes", action.payload)
            return Object.assign({}, state, {grabbingNotes: false, error: action.payload,});
        case ADDING_NEW_NOTE:
            return Object.assign({}, state, {addNewNote: true,});
        case NEW_NOTE_ADDED:
            return Object.assign({}, state, {addNewNote: false, notes: action.payload,});
        case ERROR_ADDING_NEW_NOTE:
            console.log("Error reducer error adding new ntoes", action.payload)
            return Object.assign({}, state, {addNewNotes: false, error: action.payload,});
        case DELETING_NOTE:
            return Object.assign({}, state, {isDeletingNote: true,});
        case DELETED_NOTE:
            return Object.assign({}, state, {isDeletingNote: false, notes: action.payload,});
        case ERROR_DELETING_NOTE:
            console.log("Error reducer error deleting note", action.payload);
            return Object.assign({}, state, {isDeletingNote: false, error: action.payload});
        case UPDATING_NOTE:
            return Object.assign({}, state, {isUpdatingNote: true,});
        case UPDATED_NOTE:
            return Object.assign({}, state, {isUpdatingNote: false, note: action.payload,});
        case ERROR_UPDATING_NOTE:
            console.log("Error reducer error updating ntoe", action.payload)
            return Object.assign({}, state, {isUpdatingNote: false, error: action.payload,});
        case SET_UPDATE_NOTE:
            const note = state.notes.find(note => note.id === action.payload);
            return {...state, noteToUpdate: note ? note: null }
        default:
            return state;
    }
}