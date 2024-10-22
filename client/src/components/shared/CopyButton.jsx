import React, { useState } from "react";

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <button
      onClick={handleCopy}
      className=""
      type="button"
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        // Copied icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2h-4.2C9.4 2 8 3.4 8 6.9V8h3.1c3.5 0 4.9 1.4 4.9 4.9V16h1.1c3.5 0 4.9-1.4 4.9-4.9z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 17.1v-4.2C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9v4.2C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6.08 15l1.95 1.95 3.89-3.9"
          />
        </svg>
      ) : (
        // Copy icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9z"
          />
        </svg>
      )}
    </button>
  );
};

export default CopyButton;
