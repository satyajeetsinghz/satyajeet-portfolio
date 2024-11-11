import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ minWidth: 180 }}>
      <CardMedia
        sx={{ height: 100}}
        image="https://wallpaperaccess.com/full/1169332.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom sx={{fontSize: 18}} component="div">
          Tony Stark
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 10 }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{marginTop: -14}}>
        <Button sx={{fontSize: 12}}>Share</Button>
        <Button sx={{fontSize: 12}}>Learn More</Button>
      </CardActions>
    </Card>
    
  );
  
}
