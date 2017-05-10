function equalivalentObjs(obj1, obj2){
	// Check that the objects are instances of Object, if not return their equivalence boolean
  if((!(obj1 instanceof Object)) || (!(obj2 instanceof Object))){
		return obj1 === obj2;
	}
  // Call the Object keys on both objects and assert they are the same number of params
	if(Object.keys(obj1).length != Object.keys(obj2).length){
		return false;
	}
	// Iterate over props of one object and assert that it exits in other object
	for (var prop in obj1){
		if(!(obj2.hasOwnProperty(prop))){
			return false;
		}else{
      // Use recursive call to function to assert same value inside [prop]
			if(!equalivalentObjs(obj1[prop], obj2[prop])){
				return false;
			};
		}
	}
  // Finally return true if all is equal.
	return true;
}

