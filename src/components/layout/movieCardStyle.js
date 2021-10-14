import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",    
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    // paddingTop: '56.25%',
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: 30,
    borderColor: 'red',
    borderWidth: 10
  },
  cardConten: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
  errorSearch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  noMatch: {
    marginLeft: 10,
  },
}));

export default useStyles;
