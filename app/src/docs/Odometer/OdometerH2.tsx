/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { useState } from "react";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Odometer } from "@packages/cloud-react/lib/complex/Odometer";

export const OdometerH2 = () => {
  const code = `<h2>
  <Odometer value={123.456} />
</h2>`;

  const [val, setVal] = useState<number>(123.456);
  const updateValue = () => setVal(Number((val + 17491.39).toFixed(4)));

  return (
    <>
      <div className="demo" style={{ flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ margin: 0 }}>
            <Odometer value={val} />
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="button"
            onClick={() => updateValue()}
            style={{ marginTop: "1rem" }}
          >
            Trigger Update
          </button>
        </div>
      </div>
      <SimpleEditor code={code} />
    </>
  );
};
