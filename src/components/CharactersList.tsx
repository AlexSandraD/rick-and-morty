import React from "react";
import { ICharacter } from "../interfaces";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 275,
    marginBottom: 25
  },
  media: {
    height: 0,
    paddingTop: "80%"
  }
});

export default function CharactersList(props: any): Array<JSX.Element> {
  const classes = useStyles();
  const { characters } = props;

  return (
    characters &&
    characters.map((character: ICharacter) => {
      return (
        <Card className={classes.root} key={character.id}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={character.image}
              title={character.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {character.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Show More
            </Button>
          </CardActions>
        </Card>
      );
    })
  );
}
