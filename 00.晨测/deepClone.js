function checkType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

// 深度克隆
function deepClone(target) {
  // 检测数据类型
  const type = checkType(target);

  let result = null;

  if (type === "Object") {
    result = {};
  } else if (type === "Array") {
    result = [];
  } else {
    // 其他数据类型就返回
    return target;
  }

  for (const key in target) {
    const value = target[key];
    result[key] = deepClone(value);
  }

  return result;
}

const person = { name: "jack", children: [{ name: "huahua" }] };

const newPerson = deepClone(person);

newPerson.name = "rose";
newPerson.children.push({ name: "jingge" });

console.log(newPerson);
console.log(person);
