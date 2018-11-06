export function reduceNestedNames(obj, key, parent) {
  if (!obj.children) {
    if (obj[key] === '') {
      return [];
    }

    if (parent === undefined) { // not a recursive call
      return [obj[key]];
    }

    if (parent === '') {
      return obj[key];
    }

    return `${parent}.${obj[key]}`;
  }

  return obj.children.map(child => reduceNestedNames(child, key, obj[key]));
}

export function compare(a, b) {
  const aStr = a.toString();
  const bStr = b.toString();

  if (aStr < bStr) {
    return -1;
  }

  if (aStr > bStr) {
    return 1;
  }

  return 0;
}
