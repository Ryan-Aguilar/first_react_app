
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import DataCard from './DataCard'
import characters from './characters.json'

//import characters from './protagonists.json'


function App() {
  console.log("My data:", characters);
  return (
    <>

      <Grid spacing={4} container>
        {characters.map((character) => (
          <Grid>
            <DataCard
              title={character.title}
              imageURL={character.pic}
              description={character.description}
            />
          </Grid>
        ))}
      </Grid>

    </>
  )
}

export default App

