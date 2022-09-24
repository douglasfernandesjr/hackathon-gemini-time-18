import { Container, Typography, CircularProgress, Grid, Card, Box,CardActions,CardContent, CardMedia } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import { useParams } from "react-router-dom"
import SearchBar from "../../components/Search/SearchBar"

import { Star } from "@material-ui/icons";
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
                    <span>{nomeRestaurante}</span>
                    <p>{distanciaRestaurante} km</p>
                    <p className="nota"><Star fontSize="small" />{nota}</p>
                    <div className="entrega"><p>{tempoMedio} - </p>
                    <p>{valorEntrega === 0 ? "Frete grátis" : valorEntrega}</p>
                    
                    </div>
                </div>
            </div>
            <p className="descricao">{descricao}</p>
            <p className="endereco">{endereco}</p>
        </div>
        <SearchBar />
        {cardapio?.map((item) => (
            <Container>
              <Typography variant="h6">
              {item.categoria}             
              </Typography>
              {item.itens?.map((prato) => (
                <Card sx={{ display: 'flex', flexDirection: 'row'}}>
                  <CardMedia
                    component="img"                
                    image={prato.imagem}
                    alt={prato.nome}                    
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '0 1 auto' }}>
                      <Typography component="div" variant="h6">
                        {prato.nome}
                      </Typography>                     
                      <Typography variant="caption" color="text.secondary">                    
                        {prato.descricao}
                      </Typography>
                      <br />
                      <Typography variant="caption" color="text.secondary">                    
                        R${prato.valor}
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