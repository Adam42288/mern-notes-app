import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = ({
  notes,
  title,
  showTitle = true,
}) => {
  if (!notes.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {notes &&
        notes.map((note) => (
          <div key={note._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
            </h4>
            <div className="card-body bg-light p-2">
              <p>{note.noteText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${note._id}`}
            >
            </Link>
          </div>
        ))}
    </div>
  );
};

export default NoteList;