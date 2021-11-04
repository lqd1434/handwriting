import {findIndex} from "../utils/Array/findIndex";


console.warn('------findIndex测试结果------')
const arr = [
	{name:'2',age:101},
	{name:'1',age:100,obj:{id:1}},
	{name:'3',age:102},
]
const ele1 = {name:'1',age:100,obj:{id:1}}
const ele2 = {name:'3',age:102}
const res1 = findIndex(arr,ele1)
console.log(res1)

const res2 = findIndex(arr,ele2)
console.log(res2)
