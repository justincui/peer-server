// Generated by CoffeeScript 1.6.2
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.PathMappingCollection = (function(_super) {
    __extends(PathMappingCollection, _super);

    function PathMappingCollection() {
      _ref = PathMappingCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PathMappingCollection.prototype.model = PathMapping;

    return PathMappingCollection;

  })(Backbone.Collection);

}).call(this);