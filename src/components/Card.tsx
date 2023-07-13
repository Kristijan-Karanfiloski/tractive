import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card({ children }: Props) {
  return <div className="activity-card-container">{children}</div>;
}

export default Card;
