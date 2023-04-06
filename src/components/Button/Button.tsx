/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import  React from 'react';



export interface ButtonProps
 {
  /**
   * Text to display inside the button. On Android the given title will be converted to the uppercased form.
   */
  title: string;

  /**
   * Color of the text (iOS), or background color of the button (Android).
   */
  
}

export class Button extends React.Component<ButtonProps> {}
