
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';


//import characters from './protagonists.json'


function App() {
  return (
    <>

      <Grid container spacing={4}>
        <Grid>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              // display="flex"
              height="150"
              width="150"
              image="https://fortune.com/img-assets/wp-content/uploads/2024/03/How-to-learn-coding-GettyImages-1363276605-e1710386128428.jpg?format=webp&w=1280&q=100"
              alt="learn"
            />
            <CardContent>
              <h1>Learning Git</h1>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This is how I felt when doing the git command learning activity from learn
                https://learngitbranching.js.org/?locale=en_US
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              // display="flex"
              height="150"
              width="150"
              image="https://algocademy.com/blog/wp-content/uploads/2024/11/compressed_image-35.webp"
              alt="algo"
            />
            <CardContent>
              <h1>Debugging</h1>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Debugging is an essential skill for any programmer. It involves identifying and fixing errors in code. I have been learning to debug my code using various tools and techniques, such as print statements, breakpoints, and debugging software.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid>
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              // display="flex"
              height="150"
              width="150"
              image="https://upload.wikimedia.org/wikipedia/commons/f/f5/Computer_developer.jpg?utm_source=en.wikiquote.org&utm_campaign=index&utm_content=original"
              alt="algo"
            />
            <CardContent>
              <h1>Programming</h1>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                With great power, comes great responsibility. I am learning to program in a variety of languages, including Python, JavaScript, and C++. I am also learning to use various frameworks and libraries.
              </Typography>
            </CardContent>
          </Card>
        </Grid>


      </Grid>

    </>
  )
}

export default App