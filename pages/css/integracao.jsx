import estilos from "../css/integracao.module.css"

export default function integracao() {
    return (
        <div className="box-center">
            <div className={estilos.vermelho}>Conteudo vermelho</div>
            <div id={estilos.amarelo}>Conteudo vermelho</div>
        </div>
    );
}