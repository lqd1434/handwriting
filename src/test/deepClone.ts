import {deepClone} from "../utils/deepClone";

const divEle = document.createElement('div')
divEle.setAttribute('id','hello')
document.body.appendChild(divEle)

const testObj = {
	id:1,
	name:'lqd',
	ele:divEle,
	arr:[1,2,3,'a'],
	obj:{age:20}
}
//注意数组也是对象,其键为index,值是index对应的值

const res = deepClone(testObj)

console.info('------deepClone测试结果------')
console.log(res)
console.log(res === testObj)
