import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import defaultImg from './../img/pizzaDef.jpg'


function CardArticle(props)
{
    return(
        <Card sx={{ maxWidth: 345, opacity:'0.8' }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={props.img ?props.img : defaultImg }
                alt={props.name}
            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pizza {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Prix : {props.price} €
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Ajouter au panier
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardArticle