import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface cardProop {
  imagesUrl: string;
  title: string;
  description: string;
  tag: string[];
  gitUrl?: string;
  previewUrl?: string;
}

const Projectcard: React.FC<cardProop> = ({
  imagesUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="project-card">
      <div
        className="card-image group"
        style={{
          background: `url(${imagesUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: 0,
          padding: 0,
        }}
      >
        <div className="overlay group-hover:flex ">
          {gitUrl && (
            <Link href={gitUrl} className="icon-link group/link">
              <CodeBracketIcon className="icon group-hover/link:text-white" />
            </Link>
          )}

          {previewUrl && (
            <Link href={previewUrl} className="icon-link group/link">
              <EyeIcon className="icon group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>

      <div className="text-content ">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Projectcard;
