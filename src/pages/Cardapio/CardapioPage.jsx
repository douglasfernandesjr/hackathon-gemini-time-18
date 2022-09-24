import { Container, Typography, CircularProgress, Grid, Card, Box,CardActions,CardContent, CardMedia } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import { useParams } from "react-router-dom"
import SearchBar from "../../components/Search/SearchBar"

import "./styles.css";

function CardapioPage() {

    const [loading, setLoading] = useState(true);

    const [nomeRestaurante, setNomeRestaurante] = useState();
    const [imagemRestaurante, setImagemNomeRestaurante] = useState();
    const [distanciaRestaurante, setDistanciaRestaurante] = useState();
    const [tempoMedio, setTempoMedio] = useState();
    const [valorEntrega, setValorEntrega] = useState();
    const [nota, setNota] = useState();
    const [endereco, setEndereco] = useState();
    const [descricao, setDescricao] = useState();
    const [cardapio, setCardapio] = useState();

    const { id } = useParams();

    useEffect(() => {
        getDetalhes(id).then((response) => {
            setNomeRestaurante(response.nome);
            setImagemNomeRestaurante(response.imagem)
            setDistanciaRestaurante(response.distancia)
            setNota(response.nota);
            setTempoMedio(response.tempo_medio);
            setValorEntrega(response.valor_entrega);
            setEndereco(response.endereco);
            setDescricao(response.descricao);
            setCardapio(response.cardapio);
            console.log(cardapio);
        })
    }, []);

    return (
      <Container>
        <div className="cardRestaurante">
            <div className="img-detalhes">
                <img className="imgRestaurante" src={imagemRestaurante} />
                <div className="detalhesRestaurante">
                    <h4>{nomeRestaurante}</h4>
                    <p>{distanciaRestaurante}</p>
                    <p className="nota">{nota}</p>
                    <p>{tempoMedio}</p>
                    <p>{valorEntrega}</p>
                </div>
            </div>
            <p>{descricao}</p>
            <p>{endereco}</p>
        </div>
        <SearchBar />
        {cardapio.map((item) => (
            <Container>
              <Typography variant="h6">
              {item.categoria}             
              </Typography>
              {item.itens.map((prato) => (
                <Card sx={{ display: 'flex', flexDirection: 'row' }}>
                  <CardMedia
                    component="img"                
                    image={prato.imagem}
                    alt="Live from space album cover"
                    className="imageCardapio"
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h6">
                        {prato.nome}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">                    
                        {prato.descricao}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">                    
                        {prato.descricao}
                      </Typography>
                    </CardContent>  
                  </Box>
                </Card>
              ))}
          </Container>            
        ))}
        
      </Container> 
    )
}

export default CardapioPage;