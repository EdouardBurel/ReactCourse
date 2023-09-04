import React from "react";
import CardArticle from "./CardArticle";
import { Grid } from "@mui/material";

function ListArticles (props)
{
    if(!props){return <div><h2>No articles</h2></div>}
    else {
        const articleListing = props.articles.map((article)=> {
            if (article.price) return (
                <Grid item xs={6} md={3}>
                    <CardArticle name={article.name} price={article.price} img={article.img} />
                </Grid> 
            )
            else return null
                
        });
        return (
            <div>
                <Grid container 
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                    sx={{background: 'grey', color:'white', height: '100%', textAlign:'center'}}
                >
                    <Grid item xs={12} md={12}>
                        <h1>Les pizzas di Bureledo</h1>
                        <h2>Let's go!!!</h2>
                    </Grid>
                    {articleListing}
                    <Grid item xs={12} md={12}>
                        <h2>Help yourself!</h2>
                    </Grid>
                </Grid>
                
         
            </div> 
         )
        
    }
}

export default ListArticles