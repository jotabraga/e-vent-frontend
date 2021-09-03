export default function TicketOption(props) {
  const { price, name } = props;
  return (
    <>
      <h3>{name}</h3>
      <h4>R$ {price}</h4>
    </>
  );
}
