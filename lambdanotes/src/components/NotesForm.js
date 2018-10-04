import React from 'react';
import { Fragment } from 'react';

function NotesForm(props) {

        return (
            <Fragment>
                <div className="noteFormWrapper">
                    {/* <h3>{props.updatingNote ? "Updating Notes?" : "Making A New Note?"}</h3> */}
                    <h1> Notes</h1>
                    <form className="inputWrap">
                        <div>
                            <input
                                className="noteTitleInputBox"
                                type="text"
                                value={props.title}
                                placeholder="enter title here..."
                                name="title"
                                onChange={props.handleChange}
                            />
                        </div>
                        <div>
                            <input
                                className="noteTextInputBox"
                                type="text"
                                value={props.textBody}
                                placeholder="enter note here..."
                                name="textBody"
                                onChange={props.handleChange}
                            />
                        </div>
                        <button className="sumbitNoteButt" onClick={props.handleAddNewNote}>Make New Entry</button>
                    </form>
                </div>
            </Fragment>
        );
    }

export default NotesForm;

