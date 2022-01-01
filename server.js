const obj = {
  a: {
    b: {
      c: 'd',
    },
    e: 'f',
  },
};

function get(object, path, defaultResult) {
  const pathArray = path.split('.');
  let result = object;
  for (step of pathArray) {
    if (!result[step]) {
      console.log(defaultResult || undefined);
      return defaultResult || undefined;
    }

    result = result[step];
  }
  console.log(`result`, result);
  return result;
}

// get(obj, 'a.b'); // { c : 'd' }
// get(obj, 'a.b.c'); // 'd'
// get(obj, 'a.e'); // 'f'
get(obj, 'x.x.e'); // undefined
get(obj, 'a.x.e', true); // true
get(obj, 'a.x.e', 'My default value'); // My default value
