import * as migration_20241125_222020_initial from './20241125_222020_initial';
import * as migration_20260211_084930 from './20260211_084930';
import * as migration_20260211_090748 from './20260211_090748';
import * as migration_20260211_091343 from './20260211_091343';

export const migrations = [
  {
    up: migration_20241125_222020_initial.up,
    down: migration_20241125_222020_initial.down,
    name: '20241125_222020_initial',
  },
  {
    up: migration_20260211_084930.up,
    down: migration_20260211_084930.down,
    name: '20260211_084930',
  },
  {
    up: migration_20260211_090748.up,
    down: migration_20260211_090748.down,
    name: '20260211_090748',
  },
  {
    up: migration_20260211_091343.up,
    down: migration_20260211_091343.down,
    name: '20260211_091343'
  },
];
