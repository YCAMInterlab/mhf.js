module.exports = function( value, low, high ) {
    return Math.max( Math.min( value, high ), low );
};
