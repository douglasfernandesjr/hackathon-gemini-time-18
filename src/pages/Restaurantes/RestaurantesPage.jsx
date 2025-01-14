import { Container, Typography, CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import { Star } from "@material-ui/icons";
import {useNavigate, useParams} from "react-router-dom"
import "./style.css";

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState();
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  const navigate = useNavigate();
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
        <Typography className="price" variant="body1" color="primary">
          Baratinho <span>(</span>$ <span>$ $ $ $)</span>
        </Typography>
      </div>

      {restaurantesBaratinho?.map(restaurante => (
        
        <Grid className="cardRestaurante" key={restaurante.id} onClick={() => navigate(`/detalhes/${restaurante.id}`)}>
          
          <div className="img-rest">
            <Grid item xs={4}> 
              <img className="img" src={restaurante.imagem} />
            </Grid>
          </div>
          <div className='rest-info'>
            <div item xs={4}>        
              <span>{restaurante.nome}</span>
              <p>{restaurante.distancia} </p>
              <p className="nota" ><Star fontSize="small" />{restaurante.nota}</p>
              <div className="entrega">
              <p>{restaurante.tempo_medio} - </p>
              <p>Entrega: {restaurante.valor_entrega === 0 ? "Frete grátis" : restaurante.valor_entrega}</p>
              </div>
            </div>
         </div>  
        </Grid>
        
        


      ))}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No Preço <span>(</span>$ $ $<span> $ $)</span>
        </Typography>
      </div>

      {restaurantesNoPreco?.map(restaurante => (
        <section id='container'>
        <Grid container spacing={2} className="cardRestaurante" key={restaurante.id} onClick={() => navigate(`/detalhes/${restaurante.id}`)}>
          <div>
            <Grid item xs={4}>
              <img className="img" src={restaurante.imagem} />
            </Grid>
          </div>
          <div className='rest-info'>
            <div>
              <span>{restaurante.nome} km</span>
              <p>{restaurante.distancia}</p>
              <p className='nota'><Star fontSize="small" />{restaurante.nota}</p>
              <p>{restaurante.tempo_medio}</p>
              <p> Entrega: {restaurante.valor_entrega === 0 ? "Frete grátis" : restaurante.valor_entrega}</p>
            </div>
          </div>
        </Grid>        
        </section>
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro, mas vale a pena<span>(</span>$ $ $ $ $<span> )</span>
        </Typography>
      </div>
      {restaurantesCaro?.map(restaurante => (
        <section id='container'>
        <Grid container className="cardRestaurante" spacing={2} key={restaurante.id} onClick={() => navigate(`/detalhes/${restaurante.id}`)}>
          <div>
            <Grid item xs={4}>
              <img className="img" src={restaurante.imagem} />
            </Grid>
          </div> 
          <div className='rest-info'>
            <div>
              <span>{restaurante.nome} km</span>
              <p>{restaurante.distancia}</p>
              <p className='nota'><Star fontSize="small" />{restaurante.nota}</p>
              <p>{restaurante.tempo_medio}</p>
              <p>Entrega: {restaurante.valor_entrega === 0 ? "Frete grátis" : restaurante.valor_entrega}</p>
            </div>
          </div>  
        </Grid>
        </section>        
      ))}
      
    </Container>
  )
}

export default RestaurantesPage;