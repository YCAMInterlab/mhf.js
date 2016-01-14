
module.exports = function( out, input, limit ) {
  var x = out[ 0 ] = input[ 0 ];
  var y = out[ 1 ] = input[ 1 ];
  var z = out[ 2 ] = input[ 2 ];
  var len = Math.sqrt( x * x + y * y + z * z );
  if( len > limit ) {
    out[ 0 ] *= limit / len;
    out[ 1 ] *= limit / len;
    out[ 2 ] *= limit / len;
  }
};
