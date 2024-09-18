import Estilo from "@/components/Titulo/Estilo";

export default function usandoEstilos() {
    return (
        <div className="box-center">
            <Estilo numero={3} />
            <Estilo numero={-13} />
        </div>
    );
}