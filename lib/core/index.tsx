// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, Networks } from "../types";
import { RefObject, forwardRef } from "react";
import { valEmpty, valOr } from "../utils";

export type EntryProps = ComponentBase & {
  // the theme mode
  mode: "light" | "dark";
  // the active network
  network: Networks;
};

export type SideProps = ComponentBase & {
  open: boolean;
  minimised: boolean | string;
};

/* Entry
 * The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, network }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${network}`} style={style}>
    {children}
  </div>
);

/* Body
 * An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => {
  return (
    <div className="body-interface" style={style}>
      {children}
    </div>
  );
};

/* Main
 * A column flex wrapper that hosts the main page content.
 */
export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="main-interface" style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";

/* Side
 * An element that houses the side menu and handles resizing on smaller screens.
 */
export const Side = ({ children, style, open, minimised }: SideProps) => (
  <div
    className={`side-interface${valEmpty(!open, "hidden")}${valOr(
      minimised,
      "min",
      "max"
    )}`}
    style={style}
  >
    {children}
  </div>
);
