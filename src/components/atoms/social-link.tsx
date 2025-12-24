import React from 'react';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';

interface SocialLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

export default function SocialLink({ href, label, isExternal = true }: SocialLinkProps) {
  return (
<a 
  href={href}
  target={isExternal ? "_blank" : "_self"}
  rel={isExternal ? "noreferrer" : undefined}
  aria-label={`${label}${isExternal ? " (abre em nova aba)" : ""}`} // Adicionado aria-label
  className="text-sm hover:underline flex items-center gap-3 group transition-all w-fit" // gap-2 -> gap-3
>
  {label}
  <span 
    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
    aria-hidden="true" // Garantir que está aqui
  >
    <ArrowSquareOutIcon size={20} weight="bold" /> {/* size 12 -> 20 ou 24 */}
  </span>
</a>
  );
}