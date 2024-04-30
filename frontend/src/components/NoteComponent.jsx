import React from "react";
import '../styles/Note.css'

/**
 * Represnets a note object.
 * @typedef {Object} NoteObject
 * @property {string} title - The title of the note.
 * @property {string} content - The content of the note.
 * @property {number} id -The owner's ID
 * @property {string} created_at - The data and time when the note was created
 */

/**
 * A note component
 * @component
 * @param {Object} props - The props accepts a Note object and onDelete function
 * @param {NoteObject} props.note - A note instance
 * @param {Function} props.onDelete - Function to delete the note using the ID of the note
 * @returns {JSX.Element}
 */
function NoteComponent({ note, onDelete }) {
  const formatedDate = new Date(note.created_at).toLocaleDateString("en-Us");

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formatedDate}</p>
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default NoteComponent;