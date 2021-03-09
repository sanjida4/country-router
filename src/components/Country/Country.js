import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Country = (props) => {
    const { name, flag, capital } = props.country;

    const classes = useStyles();
    const history = useHistory();
    const showDetails = name => {
        const url = `name/${name}`;
        history.push(url);
    }

    return (
        <Card className={classes.root} style={{ height: '280px', width: '250px', margin: '20px', border: '1px solid lightgray'}}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={flag}
                    Name={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {name}
                    </Typography>
                    <Typography>
                        Capital: {capital}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <button onClick={() => showDetails(name)}>Show details</button>
            </CardActions>
        </Card>
    );
};

export default Country;