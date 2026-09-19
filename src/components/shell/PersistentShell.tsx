'use client';

import React from 'react';
import { ScrollRail } from './ScrollRail';
import { NavCluster } from './NavCluster';
import { SceneEyebrow } from './SceneEyebrow';

export function PersistentShell() {
  return (
    <>
      <ScrollRail />
      <NavCluster />
      <SceneEyebrow />
    </>
  );
}
