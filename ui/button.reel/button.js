/**
 * @module ui/button.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Button
 * @extends Component
 */
exports.Button = Component.specialize(/** @lends Button# */ {
    constructor: {
        value: function Button() {
            this.super();
        }
    }
});
