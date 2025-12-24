import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function NavItem({ to, label, isActive = false, onClick, children }: NavItemProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      // Adicionado font-normal para garantir um peso de fonte mais leve no estado padrão
      className={`relative text-[13px] tracking-normal font-normal transition-all duration-500 hover:text-foreground hover:font-extrabold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
        isActive ? 'opacity-100' : 'opacity-60'
      }`}
    >
      {label}
      {children}
    </Link>
  );
}