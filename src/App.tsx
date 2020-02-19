import React from "react";
import "./App.scss";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > * + *": {
        marginLeft: theme.spacing(4)
      }
    }
  })
);

const App = (props: any): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <header className="header">
        <Container maxWidth="md" className="nav-menu">
          <Typography className={classes.root}>
            <Link href="/" color="inherit">
              Rick and Morty
            </Link>
          </Typography>
          <Typography className={classes.root}>
            <Link href="/characters" color="primary">
              Characters
            </Link>
            <Link href="/episodes">Episodes</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/favourites"> My watch list</Link>
          </Typography>
        </Container>
      </header>
      {props.location.pathname === "/" ? (
        props.children
      ) : (
        <section className="section-page">
          <Container maxWidth="md" className="container">
            {props.children}
          </Container>
        </section>
      )}
    </>
  );
};

export default React.memo(App);
