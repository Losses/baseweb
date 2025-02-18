/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Avatar } from '..';
import imageFile from './static/adorable.png';

export function Scenario() {
  return (
    <React.Fragment>
      {['scale800', 'scale1000', 'scale1200', 'scale1400', '64px'].map((size, index) => (
        <Avatar name={`user name # ${index}`} size={size} src={imageFile} key={size} />
      ))}
    </React.Fragment>
  );
}
