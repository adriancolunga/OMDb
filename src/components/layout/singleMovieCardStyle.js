import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 60,
        display: 'flex',
        flexDirection: 'row',
    },
    img: {
        maxWidth: 500,
        marginRight: 30,
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    info: {
    marginTop: 70,
    width: 700,
    }, 
}))

export default useStyles