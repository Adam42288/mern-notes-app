import { Box, Fab, Fade, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import HTMLFlipBook from 'react-pageflip';
import { useRef, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  page: {
    padding: '20px',
    backgroundColor: '#fdfaf7',
    color: '#785e3a',
    border: '1px solid #c2b5a3',
    overflow: 'hidden',
    fontSize: '80%',
  },
  pageBorderRight: {
    borderLeft: 0,
    boxShadow: 'inset 7px 0 30px -7px rgba(0,0,0,.4)',
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
    margin: '1em 0',
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

  const toggleTextBox = () => {
    setShowTextBox(!showTextBox);
  };


  return (
    <Box
      sx={{
        backgroundImage: 'url(/assets/journal_background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        // overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <HTMLFlipBook
        width={300}
        height={500}
        showPageCorners={true}
        ref={flipBook}
      >
        {savedNotes?.map((note, index) => (
          <div className={`${classes.page} ${classes.pageBorderRight}`}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '1rem' }}>
              Page {index + 1}
            </Typography>

            <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '.75rem' }}>
              {note}
            </Typography>
          </div>
        ))}
      </HTMLFlipBook>
      <Box className={classes.controlBox}>
        {/*Text box*/}
        <Fade
          in={showTextBox}
        >
          <TextField
            className={classes.inputTextBox}
            size={'medium'}
            id="filled-basic"
            label="Filled"
            variant="filled"
            multiline
          />
        </Fade>

        {/*Pink button*/}
        <Fab
          sx={{ backgroundColor: '#ffb3c6' }}
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