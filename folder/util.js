// ==UserScript==
// @name         util.js
// @description  Utility to provide helper functions for scripting userscripts.
// @version      1.0
// @downloadURL  https://github.com/cevhyruz/test_repository/blob/main/folder/util.js
// @updateURL    https://github.com/cevhyruz/test_repository/blob/main/folder/util.js
//
// @author       cevhyruz <johnfred.fadrigalan@hotmail.com>
// @namespace    dotfiles.userscripts
//
// @match        *://*/*
// @require      file:///home/devs/Projects/dotfiles/userscripts/util.js
//
// @run-at       document-start
// @grant        none
// ==/UserScript==

alert('from test')
(function(window) {
  'use strict'

  let Util = {

    create: function(tag, props) {
      return Object.assign(document.createElement(tag), props);
    },

    snackbar: function() { },

    yank: function() { },

    log: function() { }

  }

  window.Util = Util

}(window));
