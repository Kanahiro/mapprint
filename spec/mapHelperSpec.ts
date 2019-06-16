import mapHelper = require('../source/javascripts/mapHelper');

describe('tileServerAttribution', () => {
  it('returns openstreetmap license', function() {
    expect(mapHelper.tileServerAttribution('localhost:4567')).toBe('Map data © <a href="http://openstreetmap.org/">OpenStreetMap</a>');
  });
});
