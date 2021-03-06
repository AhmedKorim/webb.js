import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@webb-tools/api';

describe('init the api', () => {
  // This is just for local testing purposes
  test.skip('constructor should work', async () => {
    const provider = new WsProvider('ws://localhost:9944');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;
    console.log(api);
  });
});
