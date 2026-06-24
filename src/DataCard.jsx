import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from "@mui/material/CardMedia";



export default function DataCard({ title, description, imageURL }) {
  return (
    <Card>
      <CardMedia component="img" height="350px" image={imageURL} />
      <CardContent sx={{ pt: 0 }}>
        <Typography>{title}</Typography>
        
        {description.map((desc) => <Typography>{desc}</Typography>)}
        
      </CardContent>
    </Card>
  );
}