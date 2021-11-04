
export const deepEqual = (obj1:Object, obj2:Object)=>{

	let flag = false
	for (const key in obj1) {
		if (key in obj2){
			if (typeof obj1[key] === 'object'){
				flag = deepEqual(obj1[key],obj2[key])
			} else {
				flag = obj1[key] === obj2[key];
			}
		} else {
			flag = false
		}
	}
	return flag
}
