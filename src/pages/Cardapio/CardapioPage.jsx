import { Container, Typography, CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import {useParams} from "react-router-dom"
import "./styles.css";

function CardapioPage() {
    
    const [loading, setLoading] = useState(true);
  
    const [cardapio, setCardapio] = useState();
    const [nomeCategoria, setNomeCategoria] = useState([]);
    const [item, setItem] = useState([]);
    const [nomeRestaurante, setNomeRestaurante] = useState();
    const [tempoMedio, setTempoMedio] = useState();
    const [valorEntrega, setValorEntrega] = useState();
    const [nota, setNota] = useState();
    const id = useParams();
    useEffect(() => {
        getDetalhes(id).then((response) => {
          setCardapio(response.cardapio);  
          setNomeCategoria(response.cardapio.categoria)
          setItem(response.cardapio.categoria.itens);
          setNomeRestaurante(response.nome);
          setNota(response.nota);
          setTempoMedio(response.tempo_medio);
          setValorEntrega(response.valor_entrega);
          console.log(id)
        })
      }, []);
}

export default CardapioPage;