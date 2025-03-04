/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageSimpleMoreProps = () => {
  const code = `
import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconProps: IconProps = {
  noCopy: true,
  position: "right",
  size: 3,
  justify: "space-around",
};
...
return (
  <AccountCard icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  const iconProps: IconProps = {
    noCopy: true,
    position: "right",
    gridSize: 3,
    justify: "space-around",
  };

  return (
    <>
      <h4>
        Other `iconProps` can be either the `girdSize` (Recipe will
        automatically calculate the rest of the size of the main area
        `MainAreaGridSize = 12 - IconGridSize )
      </h4>
      <div className="demo">
        <AccountCard
          icon={iconProps}
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
        />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
