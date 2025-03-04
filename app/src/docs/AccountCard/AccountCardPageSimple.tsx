/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageSimple = () => {
  const code = `
import { AccountCard, IconProps, } from "@polkadot-cloud/react/recipes/AccountCard";
...
const iconProps: IconProps = {}; // or { position = "left" }; <- "left" is the default option
...
return (
  <AccountCard icon={iconProps} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  const iconProps: IconProps = {
    position: "left",
  };

  return (
    <>
      <h4>
        `iconProps` can be either fully filled or an empty object `{}`, that
        will make all params default (see above); In both cases a PolkadotIcon
        will appear
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
