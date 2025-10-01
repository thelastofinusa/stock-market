import Link from "next/link";
import React from "react";

export const FooterLink: React.FC<FooterLinkProps> = ({
  text,
  linkText,
  href,
}) => {
  return (
    <div className="text-center pt-4">
      <p className="text-sm text-gray-500">
        {text}{" "}
        <Link href={href} className="text-white font-medium">
          {linkText}
        </Link>
      </p>
    </div>
  );
};
