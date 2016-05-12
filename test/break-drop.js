var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      0,   0,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,  31,
     30,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
      1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   6,
    101, 120, 112, 111, 114, 116, 215,   3,  30,   0,   2,  98, 114,   1,   6,  98,
    114,  45, 110, 111, 112,   2,   7,  98, 114,  45, 100, 114, 111, 112,   3,  12,
     98, 114,  45,  98, 108, 111,  99, 107,  45, 110, 111, 112,   4,  13,  98, 114,
     45,  98, 108, 111,  99, 107,  45, 100, 114, 111, 112,   5,   5,  98, 114,  95,
    105, 102,   6,   9,  98, 114,  95, 105, 102,  45, 110, 111, 112,   7,  10,  98,
    114,  95, 105, 102,  45, 100, 114, 111, 112,   8,  15,  98, 114,  95, 105, 102,
     45,  98, 108, 111,  99, 107,  45, 110, 111, 112,   9,  16,  98, 114,  95, 105,
    102,  45,  98, 108, 111,  99, 107,  45, 100, 114, 111, 112,  10,   8,  98, 114,
     95, 116,  97,  98, 108, 101,  11,  12,  98, 114,  95, 116,  97,  98, 108, 101,
     45, 110, 111, 112,  12,  13,  98, 114,  95, 116,  97,  98, 108, 101,  45, 100,
    114, 111, 112,  13,  18,  98, 114,  95, 116,  97,  98, 108, 101,  45,  98, 108,
    111,  99, 107,  45, 110, 111, 112,  14,  19,  98, 114,  95, 116,  97,  98, 108,
    101,  45,  98, 108, 111,  99, 107,  45, 100, 114, 111, 112,  15,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,  16,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,
     17,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  50,  18,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  51,  19,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  52,  20,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  53,  21,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  54,  22,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  55,  23,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  56,  24,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,
     25,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  48,  26,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  49,  27,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  49,  50,  28,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  51,  29,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  52,   4,
     99, 111, 100, 101, 162,   2,  30,   6,   0,   1,   6,   0,   0,  15,   7,   0,
      1,   0,   6,   1,   0,  15,   8,   0,   1,  16,   1,   6,   1,   0,  15,  11,
      0,   1,   1,  16,   1,   0,  15,   6,   1,   0,  15,  11,   0,   1,   1,   0,
     16,   1,  15,   6,   1,   0,  15,   8,   0,   1,  16,   1,   7,   0,   0,  15,
      9,   0,   1,   0,  16,   1,   7,   1,   0,  15,  10,   0,   1,  16,   1,  16,
      1,   7,   1,   0,  15,  13,   0,   1,   1,  16,   1,   0,  15,  16,   1,   7,
      1,   0,  15,  13,   0,   1,   1,   0,  16,   1,  15,  16,   1,   7,   1,   0,
     15,  12,   0,   1,  16,   0,   8,   0,   0,   0,   0,   0,   0,  15,  13,   0,
      1,   0,  16,   0,   8,   1,   0,   0,   0,   0,   0,  15,  14,   0,   1,  16,
      1,  16,   0,   8,   1,   0,   0,   0,   0,   0,  15,  17,   0,   1,   1,  16,
      1,   0,  15,  16,   0,   8,   1,   0,   0,   0,   0,   0,  15,  17,   0,   1,
      1,   0,  16,   1,  15,  16,   0,   8,   1,   0,   0,   0,   0,   0,  15,   6,
      0,  22,   0,   0,  16,   1,   6,   0,  22,   0,   1,  16,   1,   6,   0,  22,
      0,   2,  16,   1,   6,   0,  22,   0,   3,  16,   1,   6,   0,  22,   0,   4,
     16,   1,   6,   0,  22,   0,   5,  16,   1,   6,   0,  22,   0,   6,  16,   1,
      6,   0,  22,   0,   7,  16,   1,   6,   0,  22,   0,   8,  16,   1,   6,   0,
     22,   0,   9,  16,   1,   6,   0,  22,   0,  10,  16,   1,   6,   0,  22,   0,
     11,  16,   1,   6,   0,  22,   0,  12,  16,   1,   6,   0,  22,   0,  13,  16,
      1,   6,   0,  22,   0,  14,  16,   1,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/break-drop.wast', 48);
  assertReturn(module, '$assert_return_1', 'external/testsuite/break-drop.wast', 49);
  assertReturn(module, '$assert_return_2', 'external/testsuite/break-drop.wast', 50);
  assertReturn(module, '$assert_return_3', 'external/testsuite/break-drop.wast', 51);
  assertReturn(module, '$assert_return_4', 'external/testsuite/break-drop.wast', 52);
  assertReturn(module, '$assert_return_5', 'external/testsuite/break-drop.wast', 54);
  assertReturn(module, '$assert_return_6', 'external/testsuite/break-drop.wast', 55);
  assertReturn(module, '$assert_return_7', 'external/testsuite/break-drop.wast', 56);
  assertReturn(module, '$assert_return_8', 'external/testsuite/break-drop.wast', 57);
  assertReturn(module, '$assert_return_9', 'external/testsuite/break-drop.wast', 58);
  assertReturn(module, '$assert_return_10', 'external/testsuite/break-drop.wast', 60);
  assertReturn(module, '$assert_return_11', 'external/testsuite/break-drop.wast', 61);
  assertReturn(module, '$assert_return_12', 'external/testsuite/break-drop.wast', 62);
  assertReturn(module, '$assert_return_13', 'external/testsuite/break-drop.wast', 63);
  assertReturn(module, '$assert_return_14', 'external/testsuite/break-drop.wast', 64);
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
