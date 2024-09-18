export default function Estilo(props) {
  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "red" : "green",
          textAlign: props.direita ? "right" : "left",
        }}
      >
        Texto
      </h1>
    </div>
  );
}
