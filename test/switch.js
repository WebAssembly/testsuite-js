var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  15,   3,  64,
      1,   1,   1,   1,  64,   1,   2,   1,   2,  64,   0,   1,   1,   8, 102, 117,
    110,  99, 116, 105, 111, 110,  31,  30,   0,   1,   0,   2,   2,   2,   2,   2,
      2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,   2,
      2,   2,   2,   2,   2,   2,   6, 101, 120, 112, 111, 114, 116, 254,   3,  30,
      0,   4, 115, 116, 109, 116,   1,   4, 101, 120, 112, 114,   2,   3,  97, 114,
    103,   3,   6,  99, 111, 114, 110, 101, 114,   4,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  48,   5,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,   6,  16,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,   7,
     16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     51,   8,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  52,   9,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  53,  10,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  54,  11,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  55,  12,  16,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  56,  13,  16,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,  14,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  48,
     15,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  49,  49,  16,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  49,  50,  17,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  49,  51,  18,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  52,  19,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  53,  20,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  54,  21,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  49,  55,  22,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  49,  56,  23,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  57,  24,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  48,  25,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,
     49,  26,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  50,  50,  27,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  50,  51,  28,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  50,  52,  29,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  53,   4,  99, 111,
    100, 101, 162,   4,  30, 109,   1,   1,   1,  16, 228,   0,  21,   1,   1,   1,
      1,   1,   1,   1,   1,   1,   1,   1,  20,   0,   8,   0,   8,   0,   0,   0,
      0,   1,   0,   0,   0,   2,   0,   0,   0,   3,   0,   0,   0,   4,   0,   0,
      0,   5,   0,   0,   0,   6,   0,   0,   0,   8,   0,   0,   0,   7,   0,   0,
      0,  15,  20,   0,   9,   1,  15,   0,  15,  15,  16,   0,  20,   0,  65,  21,
      1,   6,   0,   5,  15,   6,   0,   4,  15,  16, 229,   0,  21,   1,   6,   0,
      3,  15,  16, 229,   0,  21,   1,  15,  16, 230,   0,  21,   1,  15,  15,  20,
      1,   9,   1,  97,   1,   1,   2,  17, 228,   0,  21,   1,   1,   1,   1,   1,
      1,   1,   1,   1,   1,   1,  20,   0, 161,   8,   0,   8,   0,   0,   0,   0,
      1,   0,   0,   0,   2,   0,   0,   0,   3,   0,   0,   0,   6,   0,   0,   0,
      5,   0,   0,   0,   4,   0,   0,   0,   8,   0,   0,   0,   7,   0,   0,   0,
     15,  20,   0,   9,   1,  15,   0,  15,  15,  17,   0,  20,   0,  92,   6,   1,
      5,  15,  17, 229,   0,  21,   1,  15,  15,  15,  20,   1,   6,   1,   1,  15,
     17, 123,  15,   9,   1,  51,   0,   1,  16,  10,   1,  16, 228,   0,   1,  16,
    232,   7,   1,  16,   2,  20,   0,  66,  16,   3,  20,   0,  71,   8,   1,   3,
      1,   0,   0,   0,   2,   0,   0,   0,   3,   0,   0,   0,   0,   0,   0,   0,
     15,  64,  15,  64,  15,  64,  15,   9,   1,  14,   0,   1,  16,   0,   8,   0,
      0,   0,   0,   0,   0,  15,  16,   1,   9,   0,  16,   0,  22,   1,   0,  16,
      0,  77,   9,   0,  16,   1,  22,   1,   0,  16, 127,  77,   9,   0,  16,   2,
     22,   1,   0,  16, 126,  77,   9,   0,  16,   3,  22,   1,   0,  16, 125,  77,
     10,   0,  16,   4,  22,   1,   0,  16, 228,   0,  77,  10,   0,  16,   5,  22,
      1,   0,  16, 229,   0,  77,  10,   0,  16,   6,  22,   1,   0,  16, 230,   0,
     77,  10,   0,  16,   7,  22,   1,   0,  16, 228,   0,  77,  10,   0,  16, 118,
     22,   1,   0,  16, 230,   0,  77,   9,   0,  17,   0,  22,   1,   1,  17,   0,
    104,   9,   0,  17,   1,  22,   1,   1,  17, 127, 104,   9,   0,  17,   2,  22,
      1,   1,  17, 126, 104,   9,   0,  17,   3,  22,   1,   1,  17, 125, 104,  10,
      0,  17,   6,  22,   1,   1,  17, 229,   0, 104,   9,   0,  17,   7,  22,   1,
      1,  17, 123, 104,  10,   0,  17, 118,  22,   1,   1,  17, 228,   0, 104,  10,
      0,  16,   0,  22,   1,   2,  16, 238,   0,  77,   9,   0,  16,   1,  22,   1,
      2,  16,  12,  77,   9,   0,  16,   2,  22,   1,   2,  16,   4,  77,  10,   0,
     16,   3,  22,   1,   2,  16, 220,   8,  77,  10,   0,  16,   4,  22,   1,   2,
     16, 246,   0,  77,   9,   0,  16,   5,  22,   1,   2,  16,  20,  77,   9,   0,
     16,   6,  22,   1,   2,  16,  12,  77,  10,   0,  16,   7,  22,   1,   2,  16,
    228,   8,  77,  10,   0,  16,   8,  22,   1,   2,  16, 254,   0,  77,   7,   0,
     22,   0,   3,  16,   1,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/switch.wast', 125);
  assertReturn(module, '$assert_return_1', 'external/testsuite/switch.wast', 126);
  assertReturn(module, '$assert_return_2', 'external/testsuite/switch.wast', 127);
  assertReturn(module, '$assert_return_3', 'external/testsuite/switch.wast', 128);
  assertReturn(module, '$assert_return_4', 'external/testsuite/switch.wast', 129);
  assertReturn(module, '$assert_return_5', 'external/testsuite/switch.wast', 130);
  assertReturn(module, '$assert_return_6', 'external/testsuite/switch.wast', 131);
  assertReturn(module, '$assert_return_7', 'external/testsuite/switch.wast', 132);
  assertReturn(module, '$assert_return_8', 'external/testsuite/switch.wast', 133);
  assertReturn(module, '$assert_return_9', 'external/testsuite/switch.wast', 135);
  assertReturn(module, '$assert_return_10', 'external/testsuite/switch.wast', 136);
  assertReturn(module, '$assert_return_11', 'external/testsuite/switch.wast', 137);
  assertReturn(module, '$assert_return_12', 'external/testsuite/switch.wast', 138);
  assertReturn(module, '$assert_return_13', 'external/testsuite/switch.wast', 139);
  assertReturn(module, '$assert_return_14', 'external/testsuite/switch.wast', 140);
  assertReturn(module, '$assert_return_15', 'external/testsuite/switch.wast', 141);
  assertReturn(module, '$assert_return_16', 'external/testsuite/switch.wast', 143);
  assertReturn(module, '$assert_return_17', 'external/testsuite/switch.wast', 144);
  assertReturn(module, '$assert_return_18', 'external/testsuite/switch.wast', 145);
  assertReturn(module, '$assert_return_19', 'external/testsuite/switch.wast', 146);
  assertReturn(module, '$assert_return_20', 'external/testsuite/switch.wast', 147);
  assertReturn(module, '$assert_return_21', 'external/testsuite/switch.wast', 148);
  assertReturn(module, '$assert_return_22', 'external/testsuite/switch.wast', 149);
  assertReturn(module, '$assert_return_23', 'external/testsuite/switch.wast', 150);
  assertReturn(module, '$assert_return_24', 'external/testsuite/switch.wast', 151);
  assertReturn(module, '$assert_return_25', 'external/testsuite/switch.wast', 153);
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
