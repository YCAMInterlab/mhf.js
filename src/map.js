module.exports = function(value, inputMin, inputMax, outputMin, outputMax, clamp) {
  var outValue = ( ( value - inputMin ) / ( inputMax - inputMin ) ) * ( outputMax - outputMin ) + outputMin;
  if( clamp ) {
    if( outputMax > outputMin ) {
      if( outValue > outputMax ) {
        outValue = outputMax;
      }
      else if( outValue < outputMin ) {
        outValue = outputMin;
      }
    }
    else {
      if( outValue < outputMax ) {
        outValue = outputMax;
      }
      else if( outValue > outputMin ) {
        outValue = outputMin;
      }
    }
  }
  return outValue;
};
