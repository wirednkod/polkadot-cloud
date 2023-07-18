/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import "./index.scss";
import { EntryProps } from "../types";

/**
 * @name Entry
 * @summary The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, network }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${network}`} style={style}>
    {children}
  </div>
);
