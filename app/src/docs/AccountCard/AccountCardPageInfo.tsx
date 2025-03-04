/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";

export const AccountCardPageInfo = () => {
  const accountCard = `const titleProps: TitleProps = {
  address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
  name: "The name of the account",
  justify: "flex-start",
  align: "center",
};

const ellipsisProps: EllipsisProps = {
  active: true,
  amount: 20,
  position: "right",
};

// iconProps are very similar to the ones that PolkadotIcon receives for consistency
const iconProps: IconProps = {
  size: 20,
  gridSize: 1,
  justify: "flex-start",
  colors: ["blue", "red", "yellow"];
  outerColor: "transparent";
  dark: true;
};

<AccountCard
  title={titleProps}
  // size of the 'name' or 'address' params of titleProps (see below); 
  // Possible values one of:  "xx-small", "x-small", "small", "medium",  "large", 
  // "larger", "x-large", "xx-large"
  fontSize="x-small"
  // Properties of the ellispis 'effect' of either 'address' or 'name' of title props (see below);
  ellipsis={ellipsisProps}
  // icon properties (see below);
  icon={iconProps}
  // extra component properties (see below);
  extraComponent={extraComponentProps}
/>`;

  const titleProps = `interface TitleProps {
  // The address of the account. This is mandatory and will show in the main mid part of the
  // component in case the 'name'or the 'component' props are not given
  address: string;
  // In case 'name' is provided then it will take over the 'address' on the mid of the compoennt
  name?: string;
  // In case 'component' is provided, as above, it will take over the 'name' part;
  component?: <div>something</div> // any component
  // Horizontal justification of the mid component's text;
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
  // Vertical alignment of the component.
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
}`;

  const ellipsisProps = `interface EllipsisProps {
  // if ellipsis should exist or not
  active?: boolean;
  // How many characters should appear
  amount?: number;
  // Where ellipsis applies, at the beginning, center or end of the text (defaults to "center")
  position?: "left" | "right" | "center"
}`;

  const iconProps = `interface IconProps {
  size?: number;
  // Icon will not be clickable/copy-able - defaults to false
  noCopy?: boolean; 
  position?: HPositionLR;
  // specific size of the 12-column gridding
  gridSize?:  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  // Horizontal justification of the mid component's text;
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
}`;

  const xCompProps = `interface ExtraComponentProps {
  // In case 'component' is provided, as above, it will take over the 'name' part;
  component?: <div>something</div> // any component
  // the position of the component (left or right side)
  position?: "left" | "right"
  // specific size of the 12-column gridding
  gridSize?:  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  // Horizontal justification of the mid component's text;
  justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
}`;

  return (
    <>
      <h4>Intro</h4>
      <p>
        The `AccountCard` recipe is meant to exist for quick and fast shoiwg of
        account data (address, name, icon etc); It is excellent for lists of
        accounts to be shown. Below can be found the different properties that
        the `AccountCard` component receives as props, in order to depict the
        needed example.
      </p>
      <p>
        The `AccountCard` with all possible props look like the following piece
        of code:
      </p>
      <SimpleEditor code={accountCard} />
      <h4>Title properties are:</h4>
      <SimpleEditor code={titleProps} />
      <h4>Ellipsis properties are:</h4>
      <SimpleEditor code={ellipsisProps} />
      <h4>Icon properties are:</h4>
      <SimpleEditor code={iconProps} />
      <h4>Extra Component properties are:</h4>
      <SimpleEditor code={xCompProps} />
    </>
  );
};
