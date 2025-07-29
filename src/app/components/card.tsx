type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <div style={{ border: "2px solid black" }}>{children}</div>;
};

export default Card;
