import { Box, Fab, Fade, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import HTMLFlipBook from 'react-pageflip';
import React, { useRef, useState } from 'react';
import { useQuery, useMutation } from "@apollo/client"
import { QUERY_ME } from '../utils/queries';
import { ADD_NOTE } from '../utils/mutations';

const useStyles = makeStyles((theme) => ({
  page: {
    padding: '0px',
    backgroundColor: '#fdfaf7',
    color: '#785e3a',
    border: '1px solid #c2b5a3',
    // overflow: 'hidden',
    fontSize: '200px',
  },
  pageBorderRight: {
    borderLeft: 0,
    boxShadow: 'inset 7px 0 30px -7px rgba(0,0,0,.4)',
  },
  pages: {
    height: "100vh",
    width: "100vw"
  },
  pageBorderLeft: {
    borderLeft: 0,
    boxShadow: 'inset -7px 0 30px -7px rgba(0,0,0,.4)',
  },
  controlBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

  },
  inputTextBox: {
    width: '30em',
    backgroundColor: '#fdfaf7',
  },
}));


const savedNotes = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
];

 const Note = () => {
  const flipBook = useRef();
  const classes = useStyles();
  const [showTextBox, setShowTextBox] = useState(false);
  const [newNote, setNewNote] = useState('')

  const { data } = useQuery(QUERY_ME)

  const [addNote] = useMutation(ADD_NOTE)

  console.log("checking user", data?.me)

  const toggleTextBox = () => {
    setShowTextBox(!showTextBox);
  };

  console.log(showTextBox)
  const changeHandler = (event) => {
    setNewNote(event.target.value)
  }

  const saveNote = async () => {
    const response = await addNote({
      refetchQueries: [
        {query: QUERY_ME}
      ],
      variables: {
        noteText: newNote
      }
    })
  }

  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/journal_background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100vw 100vh',
        width: '100vw',
        height: '100vh',
        // overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <HTMLFlipBook
        width={500}
        height={800}
        showPageCorners={true}
        ref={flipBook}
        style={{marginTop: "15vh"}}
      >
        {data?.me.notes.map((note, index) => (
          <div key={index} className={`${classes.page} ${classes.pageBorderRight}`}>
            <Typography variant="h4" sx={{ padding: " 10px 20px", textAlign: 'center', marginBottom: '1rem' }}>
              Entry {index + 1}
            </Typography>

            <Typography variant="body1" sx={{ padding: " 10px 20px", textAlign: 'center', fontSize: '1.2rem' }}>
              {note?.noteText}
            </Typography>
          </div>
        ))}
      </HTMLFlipBook>
      <Box className={classes.controlBox}>
        {/*Text box*/}
        <Box
          style={showTextBox ? {display: "block"} : {display: "none"}}
        >
          <>
          <TextField
          sx={{ margin: '1em 0' }}
            className={classes.inputTextBox}
            id="filled-basic"
            label="Thoughts...?"
            variant="filled"
            multiline
            onChange={changeHandler}
          />
          <button style={{margin: "15px"}} onClick={saveNote}>Save Note</button>
          </>
        </Box>

        {/*Pink button*/}
        <Fab
          sx={{ backgroundColor: '#ffb3c6', margin: "20px"}}
          variant="extended"
          onClick={toggleTextBox}
        >
          <EditIcon sx={{ mr: 1 }}/>
          New Journal Entry
        </Fab>
      </Box>
    </Box>
  );
};

export default Note;