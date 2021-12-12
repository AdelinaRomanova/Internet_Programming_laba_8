import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
import { Grid, CardMedia, CardActions,Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
}

const getData = async () => {
  return await fetch('https://api.github.com/users/AdelinaRomanova/repos')
  .then(res => res.json())
  .then((res: GithubRepo[]) => {
      return res
  })
}

function App() {
  const [infoData, setData] = useState<GithubRepo[]>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <Box sx={{backgroundColor: '#0000099c'}}>
        <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" sx={{ bgcolor: 'common.black', alignItems: 'center'  }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{color: '#c7c3c3a9', fontFamily: 'Open Sans', fontSize: 20}}>
              Описание репозитория
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container id="cards" sx={{mt: 6,display: "flex",flexWrap: "wrap", justifyContent: "space-around"}}>
        {infoData.map((card) => (
          <Grid item xs={8}>
            <Card key={card.id} sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 5,
              m: 5,
            }}>
            <CardMedia
            component="img"
            alt="чтобы было не скучно"
            height="420"
            image="8.jpg"
          />
              <CardContent>
                <Typography variant="h5" component="div" textAlign="center" sx={{fontFamily: 'Open Sans'}}> {card.name} </Typography>
                <Typography
                  variant="body2"
                  color="gray"
                  textAlign="center"
                  gutterBottom
                  sx={{fontFamily: 'Open Sans'}}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
      </Box>
    </Box>
  );
}

export default App;
