var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  64,  13,  64,
      0,   0,  64,   0,   1,   1,  64,   0,   1,   2,  64,   0,   1,   3,  64,   0,
      1,   4,  64,   1,   1,   1,   1,  64,   1,   2,   1,   2,  64,   1,   3,   1,
      3,  64,   1,   4,   1,   4,  64,   2,   3,   1,   1,   1,  64,   2,   1,   2,
      1,   2,  64,   2,   4,   3,   1,   3,  64,   2,   2,   4,   1,   4,   8, 102,
    117, 110,  99, 116, 105, 111, 110,  75,  74,   1,   2,   3,   4,   5,   6,   7,
      8,   9,  10,  11,  12,   1,   2,   3,   4,   2,   1,   2,   3,   4,   1,   2,
      3,   4,  10,   6,   6,   5,   5,   0,   0,   0,   1,   1,   1,   1,   1,   1,
      1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   2,   2,   2,   2,   2,
      1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,   1,
      1,   0,   0,   5, 116,  97,  98, 108, 101,  20,  19,   0,   1,   2,   3,   4,
      5,   6,   7,   8,   9,  10,  11,  26,  27,  28,  29,  30,  31,  32,   6, 101,
    120, 112, 111, 114, 116, 228,   7,  61,  12,   8, 116, 121, 112, 101,  45, 105,
     51,  50,  13,   8, 116, 121, 112, 101,  45, 105,  54,  52,  14,   8, 116, 121,
    112, 101,  45, 102,  51,  50,  15,   8, 116, 121, 112, 101,  45, 102,  54,  52,
     16,  10, 116, 121, 112, 101,  45, 105, 110, 100, 101, 120,  17,  14, 116, 121,
    112, 101,  45, 102, 105, 114, 115, 116,  45, 105,  51,  50,  18,  14, 116, 121,
    112, 101,  45, 102, 105, 114, 115, 116,  45, 105,  54,  52,  19,  14, 116, 121,
    112, 101,  45, 102, 105, 114, 115, 116,  45, 102,  51,  50,  20,  14, 116, 121,
    112, 101,  45, 102, 105, 114, 115, 116,  45, 102,  54,  52,  21,  15, 116, 121,
    112, 101,  45, 115, 101,  99, 111, 110, 100,  45, 105,  51,  50,  22,  15, 116,
    121, 112, 101,  45, 115, 101,  99, 111, 110, 100,  45, 105,  54,  52,  23,  15,
    116, 121, 112, 101,  45, 115, 101,  99, 111, 110, 100,  45, 102,  51,  50,  24,
     15, 116, 121, 112, 101,  45, 115, 101,  99, 111, 110, 100,  45, 102,  54,  52,
     25,   8, 100, 105, 115, 112,  97, 116,  99, 104,  26,   3, 102,  97,  99,  27,
      3, 102, 105,  98,  28,   4, 101, 118, 101, 110,  29,   3, 111, 100, 100,  30,
      7, 114, 117, 110,  97, 119,  97, 121,  31,  14, 109, 117, 116, 117,  97, 108,
     45, 114, 117, 110,  97, 119,  97, 121,  33,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  48,  34,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  35,  16,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  36,  16,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,
     37,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  52,  38,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  53,  39,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  54,  40,  16,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  55,  41,  16,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  56,  42,  16,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  57,  43,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  48,  44,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     49,  49,  45,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  49,  50,  46,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  49,  51,  47,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  52,  48,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,  53,  49,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  49,
     54,  50,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,  95,
     49,  55,  51,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97, 112,
     95,  49,  56,  52,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,  97,
    112,  95,  49,  57,  53,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116, 114,
     97, 112,  95,  50,  48,  54,  15,  36,  97, 115, 115, 101, 114, 116,  95, 116,
    114,  97, 112,  95,  50,  49,  55,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  50,  50,  56,  17,  36,  97, 115, 115, 101,
    114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  51,  57,  17,  36,  97,
    115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  52,  58,
     17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,
     50,  53,  59,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117,
    114, 110,  95,  50,  54,  60,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114,
    101, 116, 117, 114, 110,  95,  50,  55,  61,  17,  36,  97, 115, 115, 101, 114,
    116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  56,  62,  17,  36,  97, 115,
    115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  50,  57,  63,  17,
     36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,
     48,  64,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  51,  49,  65,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  51,  50,  66,  17,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  51,  51,  67,  17,  36,  97, 115, 115,
    101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  52,  68,  17,  36,
     97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,  95,  51,  53,
     69,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114, 110,
     95,  51,  54,  70,  17,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116,
    117, 114, 110,  95,  51,  55,  71,  17,  36,  97, 115, 115, 101, 114, 116,  95,
    114, 101, 116, 117, 114, 110,  95,  51,  56,  72,  15,  36,  97, 115, 115, 101,
    114, 116,  95, 116, 114,  97, 112,  95,  51,  57,  73,  15,  36,  97, 115, 115,
    101, 114, 116,  95, 116, 114,  97, 112,  95,  52,  48,   4,  99, 111, 100, 101,
    148,   6,  74,   4,   0,  16, 178,   2,   4,   0,  17, 228,   2,   6,   0,  19,
      0,  32, 115,  69,  10,   0,  18,   0,   0,   0,   0,   0, 200, 174,  64,   3,
      0,  20,   0,   3,   0,  20,   0,   3,   0,  20,   0,   3,   0,  20,   0,   3,
      0,  20,   1,   3,   0,  20,   1,   3,   0,  20,   1,   3,   0,  20,   1,   6,
      0,  16,   0,  23,   0,   1,   6,   0,  16,   1,  23,   0,   2,   6,   0,  16,
      2,  23,   0,   3,   6,   0,  16,   3,  23,   0,   4,   9,   0,  16,   5,  17,
    228,   0,  23,   1,   6,   8,   0,  16,   4,  16,  32,  23,   1,   5,   9,   0,
     16,   5,  17, 192,   0,  23,   1,   6,  11,   0,  16,   6,  19, 195, 245, 168,
     63,  23,   1,   7,  15,   0,  16,   7,  18,  61,  10, 215, 163, 112,  61, 250,
     63,  23,   1,   8,  13,   0,  16,   8,  19, 102, 102,   0,  66,  16,  32,  23,
      2,   9,  11,   0,  16,   9,  16,  32,  17, 192,   0,  23,   2,  10,  20,   0,
     16,  10,  18,   0,   0,   0,   0,   0,   0,  80,  64,  19,   0,   0,   0,  66,
     23,   2,  11,  18,   0,  16,  11,  17, 192,   0,  18, 102, 102, 102, 102, 102,
      6,  80,  64,  23,   2,  12,   8,   0,  20,   0,  20,   1,  23,   1,   6,  22,
      0,  20,   0, 186,   3,  17,   1,   4,  20,   0,  16,  12,  20,   0,  17,   1,
     92,  23,   1,   6,  93,  15,  32,   0,  20,   0,  17,   1, 109,   3,  17,   1,
      4,  16,  13,  20,   0,  17,   2,  92,  23,   1,   6,  16,  13,  20,   0,  17,
      1,  92,  23,   1,   6,  91,  15,  19,   0,  20,   0,  90,   3,  16,  44,   4,
     16,  15,  20,   0,  16,   1,  65,  23,   1,   5,  15,  20,   0,  20,   0,  90,
      3,  16, 227,   0,   4,  16,  14,  20,   0,  16,   1,  65,  23,   1,   5,  15,
      6,   0,  16,  16,  23,   0,   0,   6,   0,  16,  18,  23,   0,   0,   6,   0,
     16,  17,  23,   0,   0,   8,   0,  22,   0,  12,  16, 178,   2,  77,   8,   0,
     22,   0,  13,  17, 228,   2, 104,  12,   0,  22,   0,  14, 180,  19,   0,  32,
    115,  69, 180,  77,  16,   0,  22,   0,  15, 181,  18,   0,   0,   0,   0,   0,
    200, 174,  64, 181, 104,   8,   0,  22,   0,  16,  17, 228,   0, 104,   7,   0,
     22,   0,  17,  16,  32,  77,   8,   0,  22,   0,  18,  17, 192,   0, 104,  12,
      0,  22,   0,  19, 180,  19, 195, 245, 168,  63, 180,  77,  16,   0,  22,   0,
     20, 181,  18,  61,  10, 215, 163, 112,  61, 250,  63, 181, 104,   7,   0,  22,
      0,  21,  16,  32,  77,   8,   0,  22,   0,  22,  17, 192,   0, 104,  12,   0,
     22,   0,  23, 180,  19,   0,   0,   0,  66, 180,  77,  16,   0,  22,   0,  24,
    181,  18, 102, 102, 102, 102, 102,   6,  80,  64, 181, 104,  11,   0,  16,   5,
     17,   2,  22,   2,  25,  17,   2, 104,  11,   0,  16,   5,  17,   5,  22,   2,
     25,  17,   5, 104,  12,   0,  16,  12,  17,   5,  22,   2,  25,  17, 248,   0,
    104,  11,   0,  16,  13,  17,   5,  22,   2,  25,  17,   8, 104,   8,   0,  16,
      0,  17,   2,  22,   2,  25,   8,   0,  16,  15,  17,   2,  22,   2,  25,   8,
      0,  16,  20,  17,   2,  22,   2,  25,   8,   0,  16, 127,  17,   2,  22,   2,
     25,  12,   0,  16, 231, 132, 206, 194,   4,  17,   2,  22,   2,  25,   9,   0,
     17,   0,  22,   1,  26,  17,   1, 104,   9,   0,  17,   1,  22,   1,  26,  17,
      1, 104,  10,   0,  17,   5,  22,   1,  26,  17, 248,   0, 104,  18,   0,  17,
     25,  22,   1,  26,  17, 128, 128, 128, 222, 135, 146, 236, 207, 225,   0, 104,
      9,   0,  17,   0,  22,   1,  27,  17,   1, 104,   9,   0,  17,   1,  22,   1,
     27,  17,   1, 104,   9,   0,  17,   2,  22,   1,  27,  17,   2, 104,   9,   0,
     17,   5,  22,   1,  27,  17,   8, 104,  11,   0,  17,  20,  22,   1,  27,  17,
    194, 213,   0, 104,   9,   0,  16,   0,  22,   1,  28,  16,  44,  77,  10,   0,
     16,   1,  22,   1,  28,  16, 227,   0,  77,  10,   0,  16, 228,   0,  22,   1,
     28,  16,  44,  77,  11,   0,  16, 205,   0,  22,   1,  28,  16, 227,   0,  77,
     10,   0,  16,   0,  22,   1,  29,  16, 227,   0,  77,   9,   0,  16,   1,  22,
      1,  29,  16,  44,  77,  11,   0,  16, 200,   1,  22,   1,  29,  16, 227,   0,
     77,  10,   0,  16, 205,   0,  22,   1,  29,  16,  44,  77,   4,   0,  22,   0,
     30,   4,   0,  22,   0,  31,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/call_indirect.wast', 145);
  assertReturn(module, '$assert_return_1', 'external/testsuite/call_indirect.wast', 146);
  assertReturn(module, '$assert_return_2', 'external/testsuite/call_indirect.wast', 147);
  assertReturn(module, '$assert_return_3', 'external/testsuite/call_indirect.wast', 148);
  assertReturn(module, '$assert_return_4', 'external/testsuite/call_indirect.wast', 150);
  assertReturn(module, '$assert_return_5', 'external/testsuite/call_indirect.wast', 152);
  assertReturn(module, '$assert_return_6', 'external/testsuite/call_indirect.wast', 153);
  assertReturn(module, '$assert_return_7', 'external/testsuite/call_indirect.wast', 154);
  assertReturn(module, '$assert_return_8', 'external/testsuite/call_indirect.wast', 155);
  assertReturn(module, '$assert_return_9', 'external/testsuite/call_indirect.wast', 157);
  assertReturn(module, '$assert_return_10', 'external/testsuite/call_indirect.wast', 158);
  assertReturn(module, '$assert_return_11', 'external/testsuite/call_indirect.wast', 159);
  assertReturn(module, '$assert_return_12', 'external/testsuite/call_indirect.wast', 160);
  assertReturn(module, '$assert_return_13', 'external/testsuite/call_indirect.wast', 162);
  assertReturn(module, '$assert_return_14', 'external/testsuite/call_indirect.wast', 163);
  assertReturn(module, '$assert_return_15', 'external/testsuite/call_indirect.wast', 164);
  assertReturn(module, '$assert_return_16', 'external/testsuite/call_indirect.wast', 165);
  assertTrap(module, '$assert_trap_17', 'external/testsuite/call_indirect.wast', 166);
  assertTrap(module, '$assert_trap_18', 'external/testsuite/call_indirect.wast', 167);
  assertTrap(module, '$assert_trap_19', 'external/testsuite/call_indirect.wast', 168);
  assertTrap(module, '$assert_trap_20', 'external/testsuite/call_indirect.wast', 169);
  assertTrap(module, '$assert_trap_21', 'external/testsuite/call_indirect.wast', 170);
  assertReturn(module, '$assert_return_22', 'external/testsuite/call_indirect.wast', 172);
  assertReturn(module, '$assert_return_23', 'external/testsuite/call_indirect.wast', 173);
  assertReturn(module, '$assert_return_24', 'external/testsuite/call_indirect.wast', 174);
  assertReturn(module, '$assert_return_25', 'external/testsuite/call_indirect.wast', 175);
  assertReturn(module, '$assert_return_26', 'external/testsuite/call_indirect.wast', 177);
  assertReturn(module, '$assert_return_27', 'external/testsuite/call_indirect.wast', 178);
  assertReturn(module, '$assert_return_28', 'external/testsuite/call_indirect.wast', 179);
  assertReturn(module, '$assert_return_29', 'external/testsuite/call_indirect.wast', 180);
  assertReturn(module, '$assert_return_30', 'external/testsuite/call_indirect.wast', 181);
  assertReturn(module, '$assert_return_31', 'external/testsuite/call_indirect.wast', 183);
  assertReturn(module, '$assert_return_32', 'external/testsuite/call_indirect.wast', 184);
  assertReturn(module, '$assert_return_33', 'external/testsuite/call_indirect.wast', 185);
  assertReturn(module, '$assert_return_34', 'external/testsuite/call_indirect.wast', 186);
  assertReturn(module, '$assert_return_35', 'external/testsuite/call_indirect.wast', 187);
  assertReturn(module, '$assert_return_36', 'external/testsuite/call_indirect.wast', 188);
  assertReturn(module, '$assert_return_37', 'external/testsuite/call_indirect.wast', 189);
  assertReturn(module, '$assert_return_38', 'external/testsuite/call_indirect.wast', 190);
  assertTrap(module, '$assert_trap_39', 'external/testsuite/call_indirect.wast', 192);
  assertTrap(module, '$assert_trap_40', 'external/testsuite/call_indirect.wast', 193);
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
