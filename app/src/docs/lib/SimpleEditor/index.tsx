/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { languages, highlight } from "prismjs";
import PrismJSX from "./languages/jsx.min.mjs";
import PrismTSX from "./languages/tsx.min.mjs";
import Editor from "react-simple-code-editor";
import { useState } from "react";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "../../../contexts/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./themes/dark.scss";
import "./themes/light.scss";

languages.extend("jsx", PrismJSX);
languages.extend("tsx", PrismTSX);

interface SimpleEditorProps {
  code: string;
  language?: string;
  standalone?: boolean;
}
export const SimpleEditor = ({
  code,
  language = "tsx",
  standalone = false,
}: SimpleEditorProps) => {
  const [value] = useState<string>(code);
  const { mode } = useTheme();

  const editorStyle = {
    border: "1px solid var(--border-secondary-color)",
    background: mode === "dark" ? "#111" : "#f5f5f5",
    borderRadius: standalone ? "0.75rem" : "0 0 0.75rem 0.75rem",
    fontFamily: '"Source Code Pro", monospace',
    fontSize: "1.1rem",
    lineHeight: "1.6rem",
    fontWeight: "500",
    marginBottom: "2.5rem",
  };

  return (
    <div className="editor">
      <button
        className="copy"
        type="button"
        onClick={() => navigator.clipboard.writeText(value)}
      >
        <FontAwesomeIcon icon={faCopy} />
      </button>
      <Editor
        value={value}
        onValueChange={() => {
          /* Editor currently disabled */
        }}
        highlight={(c) => highlight(c, languages[language], language)}
        padding={"1.25rem"}
        className={`editor-${mode}`}
        style={editorStyle}
      />
    </div>
  );
};
