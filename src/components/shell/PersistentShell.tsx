'use client';

import React from 'react';
import { ScrollRail } from './ScrollRail';
import { NavCluster } from './NavCluster';

export function PersistentShell() {
  return (
    <>
      <ScrollRail />
      <NavCluster />
    </>
  );
}
