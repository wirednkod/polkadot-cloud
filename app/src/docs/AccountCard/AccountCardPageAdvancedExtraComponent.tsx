/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import {
  AccountCard,
  ExtraComponentProps,
  IconProps,
} from "@packages/cloud-react/lib/recipes/AccountCard";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageAdvancedExtraComponent = () => {
  const code = `import { AccountCard, IconProps, ExtraComponentProps } from "@packages/cloud-react/lib/recipes/AccountCard";
...

// Note: space/size of main component is automatically calucated based on the given sizes from the icon and extra component; 

const iconPropsLeft: IconProps = {
  // position defaults to "left"
  gridSize: 2,
  justify: "space-around",
};

const extraComponentProps: ExtraComponentProps = {
  component: (
    <Button
      type="mono"
      text="log"
      marginRight
      onClick={() =>
        console.log("1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73")
      }
    />
  ),
  gridSize: 2,
  justify: "flex-end",
};
...
return (
  <AccountCard icon={iconPropsLeft} title={{ address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73" }} extraComponent={extraComponentProps} />
)`;

  const iconPropsLeft: IconProps = {
    position: "left",
    gridSize: 2,
    justify: "space-around",
  };

  const extraComponentProps: ExtraComponentProps = {
    component: (
      <Button
        type="mono"
        text="log"
        marginRight
        onClick={() =>
          console.log("1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73")
        }
      />
    ),
    gridSize: 2,
    justify: "flex-end",
  };

  return (
    <>
      <h4>
        Extra component can be added; Its default position is left; If icon
        position is also left, then the extra component always goes on the
        further side (same for right); Position, defaults to `left`; (Recipe
        will automatically calculate the rest of the size of the main area based
        on: `MainAreaGridSize = 12 - IconGridSize - ExtraComponentGridSize` )
      </h4>
      <div className="demo">
        <AccountCard
          icon={iconPropsLeft}
          title={{
            address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
          }}
          extraComponent={extraComponentProps}
        />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
