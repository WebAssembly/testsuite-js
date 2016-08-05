var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  12,   3,  64,
      0,   0,  64,   0,   1,   1,  64,   0,   1,   3,   8, 102, 117, 110,  99, 116,
    105, 111, 110,  10,   9,   0,   1,   1,   2,   1,   0,   1,   0,   1,   6, 109,
    101, 109, 111, 114, 121,   3,   1,   1,   0,   6, 101, 120, 112, 111, 114, 116,
    152,   1,   9,   0,  15, 122, 101, 114, 111,  95, 101, 118, 101, 114, 121, 116,
    104, 105, 110, 103,   1,  18, 116, 101, 115, 116,  95, 115, 116, 111, 114, 101,
     95, 116, 111,  95, 108, 111,  97, 100,   2,  19, 116, 101, 115, 116,  95, 114,
    101, 100, 117, 110, 100,  97, 110, 116,  95, 108, 111,  97, 100,   3,  15, 116,
    101, 115, 116,  95, 100, 101,  97, 100,  95, 115, 116, 111, 114, 101,   4,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,
      5,   9,  36, 105, 110, 118, 111, 107, 101,  95,  49,   6,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,   7,   9,  36,
    105, 110, 118, 111, 107, 101,  95,  51,   8,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  52,   4,  99, 111, 100, 101, 161,
      1,   9,  29,   0,  16,   0,  16,   0,  51,   2,   0,  16,   4,  16,   0,  51,
      2,   0,  16,   8,  16,   0,  51,   2,   0,  16,  12,  16,   0,  51,   2,   0,
     23,   0,  16,   8,  16,   0,  51,   2,   0,  16,   5,  19,   0,   0,   0, 128,
     53,   2,   0,  16,   8,  42,   2,   0,  33,   1,   2,   1,  16,   8,  42,   2,
      0,  21,   0,  16,   5,  16, 128, 128, 128, 128, 120,  51,   2,   0,  16,   8,
     42,   2,   0,  21,   1,  20,   0,  20,   1,  64,  30,   1,   1,   3,  16,   8,
     16, 163, 198, 140, 153,   2,  51,   2,   0,  16,  11,  44,   2,   0,  21,   0,
     16,   8,  16,   0,  51,   2,   0,  20,   0,   8,   0,  22,   0,   1,  16, 128,
      1,  77,   4,   0,  22,   0,   0,   8,   0,  22,   0,   2,  16, 128,   1,  77,
      4,   0,  22,   0,   0,  12,   0,  22,   0,   3, 180,  19,  35,   0,   0,   0,
    180,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/memory_redundancy.wast', 43);
  invoke(module, '$invoke_1');
  assertReturn(module, '$assert_return_2', 'external/testsuite/memory_redundancy.wast', 45);
  invoke(module, '$invoke_3');
  assertReturn(module, '$assert_return_4', 'external/testsuite/memory_redundancy.wast', 47);
}

function createModule(data) {
  var u8a = new Uint8Array(data);
  var ffi = {spectest: {print: print}};
  return Wasm.instantiateModule(u8a, ffi);
}

function assertReturn(module, name, file, line) {
  try {
    var result = module.exports[name]();
  } catch(e) {
    print(file + ":" + line + ": " + name + " unexpectedly threw: " + e);
  }

  if (result == 1) {
    passed++;
  } else {
    print(file + ":" + line + ": " + name + " failed.");
    failed++;
  }
}

function assertTrap(module, name, file, line) {
  var threw = false;
  try {
    module.exports[name]();
  } catch (e) {
    threw = true;
  }

  if (threw) {
    passed++;
  } else {
    print(file + ":" + line + ": " + name + " failed, didn't throw");
    failed++;
  }
}

function invoke(module, name) {
  try {
    var invokeResult = module.exports[name]();
  } catch(e) {
    print(file + ":" + line + ": " + name + " unexpectedly threw: " + e);
  }

  if (!quiet)
    print(name + " = " + invokeResult);
}

function end() {
  if ((failed > 0) || !quiet)
    print(passed + "/" + (passed + failed) + " tests passed.");
}
