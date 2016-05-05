var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  14,   3,  64,
      1,   2,   1,   2,  64,   0,   1,   1,  64,   0,   1,   2,   8, 102, 117, 110,
     99, 116, 105, 111, 110,  12,  11,   0,   0,   0,   0,   0,   1,   1,   1,   1,
      1,   2,   6, 101, 120, 112, 111, 114, 116, 166,   1,  11,   0,   7, 102,  97,
     99,  45, 114, 101,  99,   2,   8, 102,  97,  99,  45, 105, 116, 101, 114,   1,
     13, 102,  97,  99,  45, 114, 101,  99,  45, 110,  97, 109, 101, 100,   3,  14,
    102,  97,  99,  45, 105, 116, 101, 114,  45, 110,  97, 109, 101, 100,   4,   7,
    102,  97,  99,  45, 111, 112, 116,   5,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  48,   6,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,   7,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,   8,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,   9,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     52,  10,  14,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,
     53,   4,  99, 111, 100, 101, 161,   2,  11,  22,   0,  20,   0,  17,   0, 104,
      3,  17,   1,   4,  20,   0,  20,   0,  17,   1,  92,  22,   1,   0,  93,  15,
     22,   0,  20,   0,  17,   0, 104,   3,  17,   1,   4,  20,   0,  20,   0,  17,
      1,  92,  22,   1,   1,  93,  15,  45,   1,   2,   2,  20,   0,  21,   1,  17,
      1,  21,   2,   2,  20,   1,  17,   0, 104,   3,   6,   0,   2,   4,   1,  20,
      1,  20,   2,  93,  21,   2,  20,   1,  17,   1,  92,  21,   1,  15,  15,   6,
      0,   0,  15,  20,   2,  45,   1,   2,   2,  20,   0,  21,   1,  17,   1,  21,
      2,   2,  20,   1,  17,   0, 104,   3,   6,   0,   2,   4,   1,  20,   1,  20,
      2,  93,  21,   2,  20,   1,  17,   1,  92,  21,   1,  15,  15,   6,   0,   0,
     15,  20,   2,  43,   1,   1,   2,  17,   1,  21,   1,   1,  20,   0,  17,   2,
    106,   7,   0,   0,   2,  20,   1,  20,   0,  93,  21,   1,  20,   0,  17, 127,
     91,  21,   0,  20,   0,  17,   1, 110,   7,   0,   0,  15,  15,  20,   1,  18,
      0,  17,  25,  22,   1,   0,  17, 128, 128, 128, 222, 135, 146, 236, 207, 225,
      0, 104,  18,   0,  17,  25,  22,   1,   2,  17, 128, 128, 128, 222, 135, 146,
    236, 207, 225,   0, 104,  18,   0,  17,  25,  22,   1,   1,  17, 128, 128, 128,
    222, 135, 146, 236, 207, 225,   0, 104,  18,   0,  17,  25,  22,   1,   3,  17,
    128, 128, 128, 222, 135, 146, 236, 207, 225,   0, 104,  18,   0,  17,  25,  22,
      1,   4,  17, 128, 128, 128, 222, 135, 146, 236, 207, 225,   0, 104,  10,   0,
     17, 128, 128, 128, 128,   4,  22,   1,   0,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/fac.wast', 82);
  assertReturn(module, '$assert_return_1', 'external/testsuite/fac.wast', 83);
  assertReturn(module, '$assert_return_2', 'external/testsuite/fac.wast', 84);
  assertReturn(module, '$assert_return_3', 'external/testsuite/fac.wast', 85);
  assertReturn(module, '$assert_return_4', 'external/testsuite/fac.wast', 86);
  assertTrap(module, '$assert_trap_5', 'external/testsuite/fac.wast', 87);
}

function createModule(data) {
  var u8a = new Uint8Array(data);
  var ffi = {spectest: {print: print}};
  return Wasm.instantiateModule(u8a.buffer, ffi);
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
