var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  25,   6,  64,
      0,   1,   1,  64,   0,   1,   4,  64,   1,   1,   1,   3,  64,   0,   0,  64,
      0,   1,   2,  64,   0,   1,   3,   8, 102, 117, 110,  99, 116, 105, 111, 110,
     16,  15,   0,   1,   2,   3,   4,   1,   0,   0,   1,   5,   0,   3,   0,   1,
      0,   6, 101, 120, 112, 111, 114, 116, 193,   1,  15,   0,  10, 114, 101, 116,
    117, 114, 110,  95, 105,  51,  50,   1,  10, 114, 101, 116, 117, 114, 110,  95,
    102,  54,  52,   2,   2, 105, 102,   3,   5,  98, 108, 111,  99, 107,   4,  10,
    114, 101, 116, 117, 114, 110,  95, 105,  54,  52,   5,   4,  99,  97, 108, 108,
      6,   5, 109, 105, 115,  99,  49,   7,  14,  36,  97, 115, 115, 101, 114, 116,
     95, 116, 114,  97, 112,  95,  48,   8,  14,  36,  97, 115, 115, 101, 114, 116,
     95, 116, 114,  97, 112,  95,  49,   9,  14,  36,  97, 115, 115, 101, 114, 116,
     95, 116, 114,  97, 112,  95,  50,  10,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  51,  11,  14,  36,  97, 115, 115, 101,
    114, 116,  95, 116, 114,  97, 112,  95,  52,  12,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  53,  13,  14,  36,  97, 115,
    115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  54,  14,  14,  36,  97, 115,
    115, 101, 114, 116,  95, 116, 114,  97, 112,  95,  55,   4,  99, 111, 100, 101,
    101,  15,   2,   0,  10,   2,   0,  10,  12,   0,  20,   0,   3,  10,   4,  19,
      0,   0,   0,   0,  15,   8,   0,   1,  16,   1,  10,  16,   2,  15,   6,   0,
     17,   1,   9,   1,  10,   5,   0,  22,   0,   0,  10,   5,   0,  10,  16,  10,
     73,   4,   0,  22,   0,   0,   4,   0,  22,   0,   1,   6,   0,  16,   1,  22,
      1,   2,  12,   0,  16,   0,  22,   1,   2,  19,   0,   0,   0,   0, 131,   4,
      0,  22,   0,   3,   7,   0,  22,   0,   4,  17,   1, 104,   4,   0,  22,   0,
      5,   4,   0,  22,   0,   6,
  ]);

  assertTrap(module, '$assert_trap_0', 'external/testsuite/unreachable.wast', 34);
  assertTrap(module, '$assert_trap_1', 'external/testsuite/unreachable.wast', 35);
  assertTrap(module, '$assert_trap_2', 'external/testsuite/unreachable.wast', 36);
  assertReturn(module, '$assert_return_3', 'external/testsuite/unreachable.wast', 37);
  assertTrap(module, '$assert_trap_4', 'external/testsuite/unreachable.wast', 38);
  assertReturn(module, '$assert_return_5', 'external/testsuite/unreachable.wast', 39);
  assertTrap(module, '$assert_trap_6', 'external/testsuite/unreachable.wast', 40);
  assertTrap(module, '$assert_trap_7', 'external/testsuite/unreachable.wast', 41);
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
