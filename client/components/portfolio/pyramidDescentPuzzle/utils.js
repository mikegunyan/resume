let sort = (array) => {
    let list = [];
    let subList = [];
    let countDown = 1;
    let row = 1;
    for (let i = 0; i < array.length; i++) {
      subList.push(array[i]);
      countDown--;
      if (i === array.length - 1 && countDown > 0) {
        for (let i = 0; i < countDown; i++) {
          subList.push(null);
        }
        list.push(subList);
      }
      if (countDown === 0) {
        row++;
        countDown = row;
        list.push(subList);
        subList = [];
      }
    }
    return list;
}

let findTargets = (array) => {
  let targets = [];
  let findTarget = (index, stack, product) => {
      product = product * array[stack][index];
    stack++;
    if (array[stack] === undefined) {
      return product;
    }
    for (let i = 0; i <= 1; i++) {
      if (i === 1) {
        index++;
      }
      if (array[stack][index] === null) {
        return product;
      }
      let temp = findTarget(index, stack, product);
      temp && !targets.includes(temp) ? targets.push(temp) : null;
    }
  }
  findTarget(0, 0, 1);
  return targets;
}

let pyramid = (array) => {
  let list = Array.isArray(array[0]) ? array : sort(array);
  let targets = findTargets(list);
  return { targets, list };
}

let solvePyramid = (array, target, isAll) => {
  let result = '';
  let resultArray = [];
  let findTarget = (index, stack, product, path, num) => {
    product = product * array[stack][index];
    stack > 0 ? path += num === 0 ? 'L' : 'R' : null;
    stack++;
    if (array[stack] === undefined) {
      result = path;
      path = '';
      return product;
    }
    for (let i = 0; i <= 1; i++) {
      if (i === 1) {
        index++;
      }
      if (array[stack][index] === null) {
        result = path;
        path = '';
        return product;
      }
      let temp = findTarget(index, stack, product, path, i);
      if (temp === target) {
        if (!isAll) {
          return temp;
        }
        resultArray.push(result.split(''))
        result = '';
      }
    }
  }
  findTarget(0, 0, 1, result, 0);
  return isAll ? resultArray : result;
}

let solvePyramidAll = (array, target) => {
  return solvePyramid(array, target, true);
}

export default { pyramid, solvePyramid, solvePyramidAll };