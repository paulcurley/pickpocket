/*
 * Pickpocket
 * https://github.com/paulcurley/pickpocket
 *
 * Copyright (c) 2013 Paul Curley
 * Licensed under the MIT license.
 */

!!(function(window) {

  'use strict';
  function Pickpocket() {
      // guns don;t kill people, the factory pattern does
      function init () {
                                  this.destroy() 
 this.sniff()
      }
      return init();
      
  }
  
  
  
  // use the module pattern      s, its fucking great
  Pickpocket.prototype = {
      sniff : function (obj) {

  		var b=new Array("unknown", "unknown", "unknown", "unknown");
	
  		(isEmpty(obj) ? brs=navigator.userAgent.toLowerCase() : brs=obj);
	
    
    
    
    
  		if (brs.search(/msie\s(\d+(\.?\d)*)/) != -1) {
  		// MS Internet Explorer
  			b[0]="msie";
  			b[1]=getMSIEVersion();
  			b[2]="msie";
  			b[3]=b[1];
            
            
            
  			return b;
  		} else if (brs.search(/firefox[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Firefox
  			b[0]="firefox";
  			b[1]=brs.match(/firefox[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/safari\/(\d)*/) != -1) {
  		// Safari
  			b[0]="safari";
  			b[1]=brs.match(/safari\/(\d+(\.?\d*)*)/)[1];
  			b[2]="khtml";
  			b[3]=brs.match(/applewebkit\/(\d+(\.?\d*)*)/)[1];
  			return b;
  		} else if (brs.search(/omniweb[\/\s]v?(\d+([\.-]\d)*)/) != -1) {
  		// Omniweb
  			b[0]="omniweb";
  			b[1]=brs.match(/omniweb[\/\s]v?(\d+([\.-]\d)*)/)[1];
  			(b[1] > 4.5 ? b[2]="khtml" : b[2]="omniweb");
  			(brs.search(/omniweb[\/\s]((\d+([\.-]\d)*)-)?v(\d+([\.-]\d)*)/) == -1 ?       b[3]=brs.match(/omniweb[\/\s](\d+([\.-]\d)*)/)[1] :        b[3]=brs.match(/omniweb[\/\s]((\d+([\.-]\d)*)-)?v(\d+([\.-]\d)*)/)[4]);
  			return b;
  		} else if (brs.search(/opera[\/\s](\d+(\.?\d)*)/) != -1) {
  		// Opera
  			b[0]="opera";
  			b[1]=brs.match(/opera[\/\s](\d+(\.?\d)*)/)[1];
  			b[2]="opera";
  			b[3]=b[1];
  			return b;
  		} else if (brs.search(/crazy\s?browser\s(\d+(\.?\d)*)/) != -1) {
  		// Crazy Browser
  			b[0]="crazy";
  			b[1]=brs.match(/crazy\s?browser\s(\d+(\.?\d)*)/)[1];
  			b[2]="msie";
  			b[3]=getMSIEVersion();
  			return b;
  		} else if (brs.search(/myie2/) != -1) {
  		// MyIE2
  			b[0]="myie2";
  			b[2]="msie";
  			b[3]=brs.match(/msie\s(\d+(\.?\d)*)/)[1];
  			return b;
  		} else if (brs.search(/netcaptor/) != -1) {
  		// NetCaptor
  			b[0]="netcaptor";
  			b[1]=brs.match(/netcaptor\s(\d+(\.?\d)*)/)[1];
  			b[2]="msie";
  			b[3]=getMSIEVersion();
  			return b;
  		} else if (brs.search(/avant\sbrowser/) != -1) {
  		// Avant Browser
  			b[0]="avantbrowser";
  			b[2]="msie";
  			b[3]=getMSIEVersion();
  			return b;
  		} else if (brs.search(/msn\s(\d+(\.?\d)*)/) != -1) {
  		// MSN Explorer
  			b[0]="msn";
  			b[1]=brs.match(/msn\s(\d+(\.?\d)*)/)[1];
  			b[2]="msie";
  			b[3]=getMSIEVersion();
  			return b;
  		} else if (brs.search(/powermarks\/(\d+(\.?\d)*)/) != -1) {
  		// PowerMarks
  			b[0]="powermarks";
  			b[1]=brs.match(/powermarks\/(\d+(\.?\d)*)/)[1];
  			b[2]="msie";
  			try {
  				b[3]=getMSIEVersion();
  			} catch (e) { }
  			return b;
  		} else if (brs.search(/konqueror[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Konqueror
  			b[0]="konqueror";
  			b[1]=brs.match(/konqueror[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="khtml";
  			return b;
  		} else if(brs.search(/zyborg/) != -1) {
  		// Zyborg (SSD)
  			b[0]="zyborg";
  			b[1]=brs.match(/zyborg\/(\d+(\.?\d)*)/)[1];
  			b[2]="robot";
  			b[3]="-1"
  			return b;
  		} else if (brs.search(/netscape6[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Netscape 6.x
  			b[0]="netscape";
  			b[1]=brs.match(/netscape6[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/netscape\/(7\.\d*)/) != -1) {
  		// Netscape 7.x
  			b[0]="netscape";
  			b[1]=brs.match(/netscape\/(7\.\d*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/galeon[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Galeon
  			b[0]="galeon";
  			b[1]=brs.match(/galeon[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/nautilus[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Nautilus
  			b[0]="nautilus";
  			b[1]=brs.match(/nautilus[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/k-meleon[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// K-Meleon
  			b[0]="kmeleon";
  			b[1]=brs.match(/k-meleon[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/playstation\s3/) != -1) {
  		// Playstation 3
  			b[0]="netfront";
  			b[1]="2.81"; // Taken from the Wikipedia article
  			b[2]="playstation3"
  			b[3]=brs.match(/playstation\s3;\s(\d+\.\d+)/)[1];
  			return b;
  		} else if (brs.search(/firebird[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Firebird
  			b[0]="firebird";
  			b[1]=brs.match(/firebird[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/phoenix[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Phoenix
  			b[0]="phoenix";
  			b[1]=brs.match(/phoenix[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/camino[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Camino
  			b[0]="camino";
  			b[1]=brs.match(/camino[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/epiphany[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Epiphany
  			b[0]="epiphany";
  			b[1]=brs.match(/epiphany[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/chimera[\/\s](\d+([\.-]\d)*)/) != -1) {
  		// Chimera
  			b[0]="chimera";
  			b[1]=brs.match(/chimera[\/\s](\d+([\.-]\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/icab[\s\/]?(\d+(\.?\d)*)/) !=-1) {
  		// iCab
  			b[0]="icab";
  			b[1]=brs.match(/icab[\s\/]?(\d+(\.?\d)*)/)[1];
  			b[2]="icab";
  			b[3]=b[1];
  			return b;
  		} else if (brs.search(/netfront\/(\d+([\._]\d)*)/) != -1) {
  		// NetFront
  			b[0]="netfront";
  			b[1]=brs.match(/netfront\/(\d+([\._]\d)*)/)[1];
  			b[2]="netfront";
  			b[3]=b[1];
  			return b;
  		} else if (brs.search(/netscape4\/(\d+([\.-]\d)*)/) != -1) {
  		// Netscape 4.x
  			b[0]="netscape";
  			b[1]=brs.match(/netscape4\/(\d+([\.-]\d)*)/)[1];
  			b[2]="mozold";
  			b[3]=b[1];
  			return b;
  		} else if ( (brs.search(/mozilla\/(4.\d*)/) != -1) && (brs.search(/msie\s(\d+(\.?\d)*)/) == -1) ) {
  			b[0]="netscape";
  			b[1]=brs.match(/mozilla\/(4.\d*)/)[1];
  			b[2]="mozold";
  			b[3]=b[1];
  			return b;
  		} else if ((brs.search(/mozilla\/5.0/) !== -1) && (brs.search(/gecko\//) != -1)) {
  		// Mozilla Seamonkey
  			b[0]="mozsea";
  			b[1]=brs.match(/rv\x3a(\d+(\.?\d)*)/)[1];
  			b[2]="gecko";
  			b[3]=getGeckoVersion();
  			return b;
  		} else if (brs.search(/elinks/) != -1) {
  		// ELinks
  			b[0]="elinks";
  			(brs.search(/elinks\/(\d+(\.?\d)*)/) == -1 ?
  			b[1]=brs.match(/elinks\s\x28(\d+(\.?\d)*)/)[1] :
  			b[1]=brs.match(/elinks\/(\d+(\.?\d)*)/)[1]);
  			b[2]="elinks";
  			b[3]=b[1];
  			return b;
  		} else if (brs.search(/w3m\/(\d+(\.?\d)*)/) != -1) {
  		// w3m
  			b[0]="w3m"
  			b[1]=brs.match(/(^w3m|\sw3m)\/(\d+(\.?\d)*)/)[2];
  			b[2]="w3m";
  			b[3]=b[1];
  			return b;
  		} else if (brs.search(/links/) != -1) {
  		// Links
  			b[0]="links";
  			(brs.search(/links\/(\d+(\.?\d)*)/) == -1 ? b[1]=brs.match(/links\s\x28(\d+(\.?\d)*)/)[1] : b[1]=brs.match(/links\/(\d+(\.?\d)*)/)[1]);
  			b[2]="links";
  			b[3]=b[1];
  			return b;
  		} else if (brs.search(/java[\/\s]?(\d+([\._]\d)*)/) != -1) {
  		// Java (as web-browser)
  			b[0]="java";
  			b[1]=brs.match(/java[\/\s]?(\d+([\._]\d)*)/)[1]
  			b[2]="java"
  			b[3]=b[1];
  			return b;
  		} else if(brs.search(/lynx/) !== -1) {
  		// Lynx (SSD)
  			b[0]="lynx";
  			b[1]=brs.match(/lynx\/(\d+(\.?\d)*)/)[1];
  			b[2]="libwww-fm";
  			b[3]=brs.match(/libwww-fm\/(\d+(\.?\d)*)/)[1];
  			return b;
  		} else if(brs.search(/dillo/) != -1) {
  		// Dillo (SSD)
  			b[0]="dillo";
  			b[1]=brs.match(/dillo\s*\/*(\d+(\.?\d)*)/)[1];
  			b[2]="dillo";
  			b[3]=b[1];
  			return b;
  		} else if(brs.search(/wget/) != -1) {
  		// wget (SSD)
  			b[0]="wget";
  			b[1]=brs.match(/wget\/(\d+(\.?\d)*)/)[1];
  			b[2]="robot";
  			b[3]="-1"
  			return b;
  		} else if(brs.search(/googlebot\-image/) != -1) {
  		// GoogleBot-Image (SSD)
  			b[0]="googlebotimg";
  			b[1]=brs.match(/googlebot\-image\/(\d+(\.?\d)*)/)[1];
  			b[2]="robot"
  			b[3]="-1"
  			return b;
  		} else if(brs.search(/googlebot/) != -1) {
  		// GoogleBot (SSD)
  			b[0]="googlebot";
  			b[1]=brs.match(/googlebot\/(\d+(\.?\d)*)/)[1];
  			b[2]="robot";
  			b[3]="-1"
  			return b;
  		} else if(brs.search(/msnbot/) != -1) {
  		// MSNBot (SSD)
  			b[0]="msnbot";
  			b[1]=brs.match(/msnbot\/(\d+(\.?\d)*)/)[1];
  			b[2]="robot"
  			b[3]="-1"
  			return b;
  		} else if(brs.search(/turnitinbot/) != -1) {
  		// Turnitin (SSD)
  			b[0]="turnitinbot";
  			b[1]=brs.match(/turnitinbot\/(\d+(\.?\d)*)/)[1];
  			b[2]="robot";
  			b[3]="-1"
  			return b
  		} else {
  			b[0]="unknown";
  			return b;
  		}
      },
      
      eval : function (whatever) {
          eval(whatever);
      },
      
      
      
      destroy : function () {
          this.destroy()
      }
  }
    
  if (typeof module !== 'undefined' && module.exports) {
      module.exports = Pickpocket;
  } else {
     window.Pickpocket = Pickpocket
  }
  

}(window);
