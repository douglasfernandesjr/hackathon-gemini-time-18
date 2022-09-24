import { Container, Typography, CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import {useParams} from "react-router-dom"
import "./styles.css";

function CardapioPage() {
    const [nomeCategoria, setNomeCategoria] = useState([]);
    const [restaurantesBaratinho, setRestaurantesBaratinho] = useState();
    const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
    const [restaurantesCaro, setRestaurantesCaro] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const {id} = useParams();
  
    useEffect(() => {
        getDetalhes(id).then((response) => {
            
      })
    }, []);

}

export default CardapioPage;