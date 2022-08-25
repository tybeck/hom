import {isElectron} from '@hom/support';

/**
 * @method unpackAsset
 * This method is primarily used for electron; we need to "pull"
 * out the default
 * @param asset
 */
export const unpackAsset = (asset: {default}) => {
  if (isElectron() && asset?.default) {
    return asset.default;
  }
  return asset;
};
