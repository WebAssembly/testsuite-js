var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
testModule1();
testModule2();
testModule3();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      0,   0,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,   9,
      8,   0,   1,   0,   1,   0,   1,   0,   1,   6, 109, 101, 109, 111, 114, 121,
      3,   1,   1,   0,   6, 101, 120, 112, 111, 114, 116,  87,   7,   0,   3, 105,
    110,  99,   1,   3, 103, 101, 116,   3,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  48,   4,   9,  36, 105, 110, 118, 111,
    107, 101,  95,  49,   5,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  50,   6,   9,  36, 105, 110, 118, 111, 107, 101,  95,
     51,   7,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  52,   5, 115, 116,  97, 114, 116,   1,   2,   4,  99, 111, 100, 101,
     73,   8,  14,   0,  16,   0,  16,   0,  33,   0,   0,  16,   1,  64,  46,   0,
      0,   8,   0,  16,   0,  33,   0,   0,   9,   1,  10,   0,  22,   0,   0,  22,
      0,   0,  22,   0,   0,   8,   0,  22,   0,   1,  16, 196,   0,  77,   4,   0,
     22,   0,   0,   8,   0,  22,   0,   1,  16, 197,   0,  77,   4,   0,  22,   0,
      0,   8,   0,  22,   0,   1,  16, 198,   0,  77,   4, 100,  97, 116,  97,   4,
      1,   0,   1,  65,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/start.wast', 42);
  invoke(module, '$invoke_1');
  assertReturn(module, '$assert_return_2', 'external/testsuite/start.wast', 44);
  invoke(module, '$invoke_3');
  assertReturn(module, '$assert_return_4', 'external/testsuite/start.wast', 46);
}

function testModule1() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      0,   0,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111, 110,   9,
      8,   0,   1,   0,   1,   0,   1,   0,   1,   6, 109, 101, 109, 111, 114, 121,
      3,   1,   1,   0,   6, 101, 120, 112, 111, 114, 116,  87,   7,   0,   3, 105,
    110,  99,   1,   3, 103, 101, 116,   3,  16,  36,  97, 115, 115, 101, 114, 116,
     95, 114, 101, 116, 117, 114, 110,  95,  48,   4,   9,  36, 105, 110, 118, 111,
    107, 101,  95,  49,   5,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101,
    116, 117, 114, 110,  95,  50,   6,   9,  36, 105, 110, 118, 111, 107, 101,  95,
     51,   7,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  52,   5, 115, 116,  97, 114, 116,   1,   2,   4,  99, 111, 100, 101,
     73,   8,  14,   0,  16,   0,  16,   0,  33,   0,   0,  16,   1,  64,  46,   0,
      0,   8,   0,  16,   0,  33,   0,   0,   9,   1,  10,   0,  22,   0,   0,  22,
      0,   0,  22,   0,   0,   8,   0,  22,   0,   1,  16, 196,   0,  77,   4,   0,
     22,   0,   0,   8,   0,  22,   0,   1,  16, 197,   0,  77,   4,   0,  22,   0,
      0,   8,   0,  22,   0,   1,  16, 198,   0,  77,   4, 100,  97, 116,  97,   4,
      1,   0,   1,  65,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/start.wast', 71);
  invoke(module, '$invoke_1');
  assertReturn(module, '$assert_return_2', 'external/testsuite/start.wast', 73);
  invoke(module, '$invoke_3');
  assertReturn(module, '$assert_return_4', 'external/testsuite/start.wast', 75);
}

function testModule2() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      1,   1,   0,  64,   0,   0,   6, 105, 109, 112, 111, 114, 116,  17,   1,   0,
      8, 115, 112, 101,  99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   8,
    102, 117, 110,  99, 116, 105, 111, 110,   2,   1,   1,   5, 115, 116,  97, 114,
    116,   1,   0,   4,  99, 111, 100, 101,   8,   1,   6,   0,  16,   1,  24,   1,
      0,
  ]);

}

function testModule3() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   8,   2,  64,
      1,   1,   0,  64,   0,   0,   6, 105, 109, 112, 111, 114, 116,  17,   1,   0,
      8, 115, 112, 101,  99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   8,
    102, 117, 110,  99, 116, 105, 111, 110,   2,   1,   1,   5, 115, 116,  97, 114,
    116,   1,   0,   4,  99, 111, 100, 101,   8,   1,   6,   0,  16,   2,  24,   1,
      0,
  ]);

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
