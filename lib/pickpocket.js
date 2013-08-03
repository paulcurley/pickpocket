/*
 * Pickpocket
 * https://github.com/paulcurley/pickpocket
 *
 * Copyright (c) 2013 Paul Curley
 * Licensed under the MIT license.
 */

(function(window) {

  'use strict';
  function Pickpocket() {
      
  }
  
  Pickpocket.prototype = {
      destroy : function () {
          this.destroy();
      }
  }
    
  if (typeof module !== 'undefined' && module.exports) {
      module.exports = Pickpocket;
  } else {
     window.Pickpocket = Pickpocket
  }
  

}(window);
