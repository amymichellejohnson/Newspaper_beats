newspaper.factory('BeatsFactory', function BeatsFactory() {
  var factory = {}
  factory.beats = [{name: "Soccer", id:1, reporters:[]}];

  factory.addBeat = function() {
    factory.beats.push({name: factory.beat, id: factory.beats.length + 1, reporters: []});
    factory.beat = null;
  };

  factory.deleteBeat = function(beat) {
  var index = factory.beats.indexOf(beat);
  factory.beats.splice(index, 1);
  };

return factory;
});
