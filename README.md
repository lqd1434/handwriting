<p align="center">
    <img src="https://img.icons8.com/nolan/300/hardworking--v1.png"/>
</p>
<hr>
<h1 align="center">手写实现js常用方法</h1>
<p>
    本项目采用<code>typescript</code>编写,另外加入了<code>jest</code>做测试,本项目仿照<code>lodash</code>上的方法,自己重新实现所得.项目初期类型会尽量采用any,
    后面再根据实际确立更准确的类型,从而提供更友好的提示<br>
    希望自己能在一次次的书写中获得提升,成为更好的自己!
</p>
<br/>

## 一.数组方法

### 1.flat

:label:数组打平函数,支持多嵌套
```typescript
    export const flat = (arr:any[])=>{
	const tempList: any[] = []
	if (!Array.isArray(arr)){
		tempList.push(arr)
		return tempList
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (!Array.isArray(arr[i])){
				tempList.push(arr[i])
			} else {
				tempList.push(...flat(arr[i]))
			}
		}
	}
	return tempList
}
```

### 2.difference
:label:去除数组中指定的元素值
```typescript
export const difference = (arr: any[], excludeArr: any[]) => {
  return arr.filter((item) => {
    let flag = true;
    for (let i = 0; i < excludeArr.length; i++) {
      if (item === excludeArr[i]) {
        flag = false;
      }
    }
    return flag;
  });
};
```

### 3.findIndex
:label:找到对象数组中某个对象的位置下标
```typescript
export const findIndex = (arr: any[], ele: Object) => {
  if (typeof ele !== 'object' || !Array.isArray(arr)) return;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const res = deepEqual(arr[i], ele);
    if (res) {
      index = i;
      break;
    }
  }
  return index;
};
```

## 二.对象方法
### 1.deepClone
:label:对象深拷贝
```typescript
export const deepClone = (sourceObj: any) => {
  if (!(typeof sourceObj === 'object')) return sourceObj;
  const objType = Object.prototype.toString.call(sourceObj);
  const targetObj: Object | Array<any> = objType === '[object Object]' ? {} : [];

  for (let key in sourceObj) {
    if (sourceObj.hasOwnProperty(key)) {
      if (!(key in targetObj)) {
        //日期对象
        if (sourceObj[key] instanceof Date) {
          targetObj[key] = new Date((sourceObj[key] as Date).getTime());
        } else if (sourceObj[key] instanceof RegExp) {
          //正则对象
          targetObj[key] = new RegExp(sourceObj[key] as RegExp);
        } else if (typeof sourceObj[key] === 'object' && sourceObj[key].nodeType === 1) {
          //dom节点
          let domEle = document.getElementsByTagName(sourceObj[key].nodeName)[0];
          targetObj[key] = domEle.cloneNode(true);
        } else {
          if (typeof sourceObj[key] === 'object') {
            //若为对象再次递归调用
            targetObj[key] = deepClone(sourceObj[key]);
          } else {
            //不为对象直接拷贝
            targetObj[key] = sourceObj[key];
          }
        }
      }
    }
  }
  return targetObj;
};
```

### 2.deepEqual
:label:对象深比较
```typescript
export const deepEqual = (obj1: Object, obj2: Object) => {
  let flag = false;
  for (const key in obj1) {
    if (key in obj2) {
      if (typeof obj1[key] === 'object') {
        flag = deepEqual(obj1[key], obj2[key]);
      } else {
        flag = obj1[key] === obj2[key];
      }
    } else {
      flag = false;
    }
  }
  return flag;
};
```

