/**
 * 深拷贝
 */


export const deepClone = (sourceObj:any)=>{
	if (!(typeof sourceObj === 'object')) return sourceObj
	const objType = Object.prototype.toString.call(sourceObj)
	const targetObj:Object|Array<any> =(objType === '[object Object]') ? {}:[]

	for (let key in sourceObj) {
		if (sourceObj.hasOwnProperty(key)){
			if (!(key in targetObj)){
				//日期对象
				if (sourceObj[key] instanceof Date){
					targetObj[key] = new Date((sourceObj[key] as Date).getTime())
				} else if (sourceObj[key] instanceof RegExp){
					//正则对象
					targetObj[key] = new RegExp((sourceObj[key] as RegExp))
				} else if (typeof sourceObj[key] === 'object'&&sourceObj[key].nodeType === 1){
					//dom节点
					let domEle = document.getElementsByTagName(sourceObj[key].nodeName)[0]
					targetObj[key] = domEle.cloneNode(true)
				} else {
					if (typeof sourceObj[key] === 'object'){
						//若为对象再次递归调用
						targetObj[key] = deepClone(sourceObj[key])
					} else {
						//不为对象直接拷贝
						targetObj[key] = sourceObj[key]
					}
				}
			}
		}
	}
	return targetObj
}
