/**
 * Mixin for global options access.
 * @module mixin/options
 */
import { getOr } from 'lodash/fp'
import { VL_OPTIONS } from '../core'

/**
 * @alias module:mixin/options
 */
export default {
  methods: {
    /**
     * Returns option from global VueLayers config by key.
     * @param {string} key
     * @param {*} [def]
     * @return {*}
     */
    globOption (key, def) {
      return getOr(def, key, this[VL_OPTIONS])
    },
  },
}