// describe('Objects', function() {
//   it('defines a `recipes` object', function() {
//     expect(typeof recipes).toEqual('object')
//   })

var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

//   describe('updateObjectWithKeyAndValue(object, key, value)', function() {
//     it('returns an object with the orignal key value pairs and the new key value pair', function() {
//       var obj = { prop: 1 }
//
//       expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
//         prop: 1,
//         prop2: 2
//       })
//     })
//     it('it does not modify the original object, but rather returns a clone with the new data', function() {
//       var obj = { prop: 1 }
//
//       updateObjectWithKeyAndValue(obj, 'prop2', 2)
//
//       expect(obj['prop2']).toBe(undefined)
//     })
//   })

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return destructivelyUpdateObjectWithKeyAndValue = Object.assign(object, { [key]: value });
}

// describe('destructivelyUpdateObjectWithKeyAndValue(object, key, value)', function() {
//   it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object', function() {
//     var obj = { prop: 1 }
//
//     expect(destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
//       prop: 1,
//       prop2: 2
//     })
//
//     expect(obj).toMatch({
//       prop: 1,
//       prop2: 2
//     })
//   })
// })
