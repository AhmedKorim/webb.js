import {
  typesBundle as acalaTypesBundle,
  types as acalaTypes,
  typesAlias as acalaTypeAlias,
  rpc as acalaRpc
} from '@webb-tools/type-definitions';
import {
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes,
  DefinitionRpc,
  DefinitionRpcSub
} from '@polkadot/types/types';

import './interfaces/augment-api';
import './interfaces/augment-api-consts';
import './interfaces/augment-api-query';
import './interfaces/augment-api-tx';
import './interfaces/augment-types';

export * from './interfaces/augment-api-mobx';

export const types: RegistryTypes = acalaTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = acalaRpc;

export const typesAlias: Record<string, OverrideModuleType> = acalaTypeAlias;

export const typesBundle = (acalaTypesBundle as unknown) as OverrideBundleType;