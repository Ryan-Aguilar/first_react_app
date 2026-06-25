
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import DataCard from './DataCard'
import characters from './characters.json'
import { useState } from 'react';
import { Popover } from "@mui/material";
//import characters from './protagonists.json'


function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [counter, setCounter] = useState(0); // must go inside of your component! State variables cannot be global
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>

      <Grid spacing={4} container>
        {characters.map((character) => (
          <Grid key={character.title}>
            <DataCard
              title={character.title}
              imageURL={character.pic}
              description={character.description}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5">
        Clicks so far: {counter}
      </Typography>
      <Button
        variant="contained"
        sx={{ px: 6, mx: "auto" }}
        onClick={() => {
          setCounter(counter + 1);
          handleClick(event)
        }}
      >
        Click Me
      </Button>
      <Popover 
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={
        {
          vertical: "bottom",
          horizontal: "left"
        }
      }>
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>

    </>
  )
}

export default App

