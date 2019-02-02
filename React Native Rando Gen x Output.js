//function generates a random number between 1 and the length of the input array
function GenerateRandomFeature(props) {
    var feature = Math.floor(Math.random()*props.arrayLength);
    return props.array[feature]
}
//function generates src name for returned image as string (Hard coded since no ad API was used)
function GenerateAd(props) {
    var adNum = Math.floor(Math.random()*3)
        return props.adName + adNum.toString();
    }
render() 
//return image of appropriate ad
    return <img src= {GenerateAd(adName = {GenerateRandomFeature(array /*array to be changed to output*/)})} />;
