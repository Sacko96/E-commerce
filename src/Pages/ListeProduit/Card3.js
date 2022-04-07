import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


export default function Card3({liste}) {
  const theme = useTheme();

  return (
    <Card  >
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" >
            Live From Space
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        height="140"
        image={liste.img}
        alt="Live from space album cover"
      />
    </Card>
  );
}
