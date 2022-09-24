import { Container, Typography, CircularProgress, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalhes } from "../../services/detalhes.service";
import { useParams } from "react-router-dom"
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
            setDescricao(response.descricao)
        })
    }, []);

    {
        if ({valorEntrega} === 0){
            <p>Grátis</p>
        } else {
            <p>{valorEntrega}</p>
        }
    }

    return (
        <div className="cardRestaurante">
            <div className="img-detalhes">
                <img class="imgRestaurante" src={imagemRestaurante} />
                <div className="detalhesRestaurante">
                    <span>{nomeRestaurante}</span>
                    <p>{distanciaRestaurante} km</p>
                    <p className="nota"><Star fontSize="small" />{nota}</p>
                    <div className="entrega"><p>{tempoMedio} - </p>
                    <p>{valorEntrega}</p>
                    
                    </div>
                </div>
            </div>
            <p className="descricao">{descricao}</p>
            <p className="endereco">{endereco}</p>
        </div>
    )
}

export default CardapioPage;