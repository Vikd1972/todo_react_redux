import React from 'react';
import { useSelector } from 'react-redux';

import Note from '../note/Note';
import { getShowNotes } from '../../Store/selector';

function List(props) {
  const noteList = useSelector(getShowNotes)
  return (
    <div>
      {noteList.map(note => (
        <div key={note.id}>
          <Note
            note={note}
          />
        </div>
      ))}
    </div>

  )
}

export default List;