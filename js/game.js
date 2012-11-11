(function(window) {

var curId = 0;
var entities = {};
var EtoC = {};
var CtoE = {};

var game = {

    entities: function() {
      return entities;
    },

    EtoC: EtoC,
    CtoE: CtoE,

    nextId: function() {
        return curId++;
    },

  	merge: function(a, b) {
      var n = {};
      for(var i in a) {
        n[i] = a[i];
      }
      for(var i in b) {
        n[i] = b[i];
      }
      return n;
  	},

    as: function(ent, c) {
        var n = c.name ? c.name : c;
        return EtoC[ent][n];
    },

    has: function(ent, c) {
        return game.as(ent,c) ? true : false;
    },

    addC: function(ent, c) {
        EtoC[ent][c.name] = c;
        if(!CtoE[c.name]) {
            CtoE[c.name] = {};
        }
        CtoE[c.name][ent] = true;
    },

    remC: function(ent, c) {
        var n = c.name ? c.name : c;
      	if(EtoC[ent]) delete EtoC[ent][n];
        if(CtoE[n]) delete CtoE[n][ent];
    },

    allE: function(c) {
        var n = c.name ? c.name : c;
        return Object.keys(CtoE[n] || {});
    },

    allC: function(e) {
        return Object.keys(EtoC[e]);
    },

    create: function(moniker) {
        var id = game.nextId();
        entities[id] = moniker;
        EtoC[id] = {};
        return id;
    },

    destroy: function(ent) {
      	var comps = game.allC(ent);
        for(var c in comps) {
            game.remC(ent, comps[c]);
        }
        delete entities[ent];
    },

  	equal: function(a, b) {
      for(var i in a) {
        if( a[i] != b[i] ) return false;
      }
      return true;
  	},

    clear: function() {
      entities = {};
      EtoC = {};
      CtoE = {};
    }

};

window.Game = game;

})(window);
