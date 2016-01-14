module.exports = function( x, a, b, c ) {
  var xb = ( x - b );
  return a * Math.exp( - ( xb * xb )  / ( 2.0 * c * c ) );
};
