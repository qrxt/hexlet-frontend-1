#!/usr/bin/env node

import gamesRunner, { games } from '../src/games/index.js';

gamesRunner(games.isNumberEven, 3);
