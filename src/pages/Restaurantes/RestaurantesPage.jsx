import { Container, Typography, CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import {useParams} from "react-router-dom"
import "./style.css";

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState();
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();

  useEffect(() => {
    getRestaurantes(id).then((response) => {
      setNomeCategoria(response.categoria)
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setLoading(false);
      console.log(id)
    })
  }, []);

  return (
    <Container className="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {nomeCategoria}
      </Typography>
      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Baratinho <span>(</span>$ <span>$ $ $ $)</span>
        </Typography>
      </div>
      {restaurantesBaratinho?.map(restaurante => (
        <Grid container spacing={2}  key={restaurante.id}>
          <Grid item xs={4}> 
            <img src={restaurante.imagem} />
          </Grid>
          <Grid item xs={4}>        
            {restaurante.nome} 
            {restaurante.distancia}
            {restaurante.nota}
            {restaurante.tempo_medio} - {restaurante.valor_entrega}
         </Grid>
        </Grid>        
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No Preço <span>(</span>$ $ $<span> $ $)</span>
        </Typography>
      </div>
      {restaurantesNoPreco?.map(restaurante => (
        <Grid container spacing={2}  key={restaurante.id}>
          <Grid item xs={4}>
            <img src={restaurante.imagem} />
          </Grid>
          <Grid item xs={8}>
            {restaurante.nome}  
            {restaurante.distancia}
            {restaurante.nota}
            {restaurante.tempo_medio} - {restaurante.valor_entrega}
          </Grid>
          
        </Grid>        
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro, mas vale a pena<span>(</span>$ $ $ $ $<span> )</span>
        </Typography>
      </div>
      {restaurantesCaro?.map(restaurante => (
        <Grid xs={12}  key={restaurante.id}>
          {restaurante.nome}          
          <img src={restaurante.imagem} />
          {restaurante.distancia}
          {restaurante.nota}
          {restaurante.tempo_medio} - {restaurante.valor_entrega}
        </Grid>        
      ))}
      
    </Container>
  )
}

export default RestaurantesPage;