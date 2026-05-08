import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const args = process.argv.slice(2);
const astroBin = join(process.cwd(), 'node_modules', 'astro', 'astro.js');
const env = {
  ...process.env,
  ASTRO_TELEMETRY_DISABLED: '1'
};

const run = (command, extraArgs = []) => {
  const result = spawnSync(process.execPath, [astroBin, command, ...extraArgs], {
    env,
    stdio: 'inherit'
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

if (args[0] === 'dev' || args[0] === 'preview') {
  run(args[0], args.slice(1));
} else {
  for (const command of args) {
    run(command);
  }
}
