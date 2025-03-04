/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@packages/cloud-react/lib/buttons/Button";
import { SimpleEditor } from "../lib/SimpleEditor";

export const ButtonSecondary = () => {
  const code = `<Button type="secondary" text="Button" marginRight />
<Button type="secondary" text="Button" iconLeft={faUser} marginRight />
<Button type="secondary" text="Button" iconRight={faUser} marginRight />
<Button type="secondary" lg text="Button" disabled />`;

  return (
    <>
      <div className="demo">
        <Button type="secondary" text="Button" marginRight />
        <Button type="secondary" text="Button" iconLeft={faUser} marginRight />
        <Button type="secondary" text="Button" iconRight={faUser} marginRight />
        <Button type="secondary" lg text="Button" disabled />
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
