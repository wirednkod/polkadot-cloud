/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase, Network, ThemeMode } from "../types";

export type EntryProps = ComponentBase & {
  // the theme mode
  mode: ThemeMode;
  // the active network
  network: Network;
};

export type SideProps = ComponentBase & {
  // whether the side menu should be open on smaller screens
  open: boolean;
  // whether side menu is in minimised state
  minimised: boolean;
};

export type PageRowProps = ComponentBase & {
  // whether there is margin space vertically
  yMargin?: boolean;
};

export type RowProps = ComponentBase & {
  // the css order of the component
  verticalOrder: boolean;
  // true means padding on the left and false means padding on the right
  paddingLeft: boolean;
  // true means the secondary element and  false means the primary one
  secondary: boolean;
};
