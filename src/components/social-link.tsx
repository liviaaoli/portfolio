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
      className="text-sm hover:underline flex items-center gap-2 group transition-all w-fit"
    >
      {label}
      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <ArrowSquareOutIcon size={12} weight="bold" />
      </span>
    </a>
  );
}