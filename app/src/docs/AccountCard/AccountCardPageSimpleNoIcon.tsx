/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { AccountCard } from "@packages/cloud-react/lib/recipes/AccountCard";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageSimpleNoIcon = () => {
  const code = `
import { AccountCard } from "@polkadot-cloud/react/recipes/AccountCard";
...
return (
  <AccountCard title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} />
);`;

  return (
    <>
      <h4>
        If `iconProps` is not provided no icon will appear; `Title` with
        `address` props are the minimum that need to be provided
      </h4>
      <div className="demo">
        <AccountCard
          title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }}
        />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
