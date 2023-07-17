/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valEmpty, valOr } from "../../utils";
import { motion } from "framer-motion";
import "./index.scss";

export type ButtonMonoProps = ComponentBase &
  ButtonIconProps &
  ButtonCommonProps & {
    // button text.
    text: string;
  };

/**
 * @name ButtonText
 * @description Plain button style used within the main interface of dashboards.
 */
export const ButtonText = ({
  disabled,
  grow,
  iconLeft,
  iconRight,
  iconTransform,
  onClick,
  marginLeft,
  marginRight,
  marginX,
  style,
  text,
}: ButtonMonoProps) => (
  <motion.button
    whileHover={{ scale: !disabled ? 1.02 : 1 }}
    whileTap={{ scale: !disabled ? 0.98 : 1 }}
    className={`btn-text${valEmpty(grow, "grow")}${valEmpty(
      marginRight,
      "m-right"
    )}${valEmpty(marginLeft, "m-left")}${valEmpty(marginX, "m-x")}`}
    style={style}
    type="button"
    disabled={disabled}
    onClick={() => {
      if (typeof onClick == "function") {
        onClick();
      }
    }}
  >
    {iconLeft ? (
      <FontAwesomeIcon
        icon={iconLeft}
        className={valOr(text, "icon-left", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
    {text ? text : null}
    {iconRight ? (
      <FontAwesomeIcon
        icon={iconRight}
        className={valOr(text, "icon-right", undefined)}
        transform={valOr(iconTransform, iconTransform, undefined)}
      />
    ) : null}
  </motion.button>
);