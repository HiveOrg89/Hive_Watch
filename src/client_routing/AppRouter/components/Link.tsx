import { MouseEvent, ReactNode } from "react";
import { useNavigate } from "./hooks";

interface LinkProps {
  children: ReactNode;
  href: string;
}
export default function Link({ children, href }: LinkProps) {
  const navigate = useNavigate();
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (href) {
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={(e) => handleLinkClick(e)}>
      {children}
    </a>
  );
}
