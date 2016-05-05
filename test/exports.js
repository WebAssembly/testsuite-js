var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
testModule1();
testModule2();
testModule3();
testModule4();
testModule5();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   4,   1,  64,
      0,   0,   8, 102, 117, 110,  99, 116, 105, 111, 110,   2,   1,   0,   6, 101,
    120, 112, 111, 114, 116,   4,   1,   0,   1,  97,   4,  99, 111, 100, 101,   5,
      1,   3,   0,  16,   1,
  ]);

}

function testModule1() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   4,   1,  64,
      0,   0,   8, 102, 117, 110,  99, 116, 105, 111, 110,   2,   1,   0,   6, 101,
    120, 112, 111, 114, 116,   7,   2,   0,   1,  97,   0,   1,  98,   4,  99, 111,
    100, 101,   5,   1,   3,   0,  16,   1,
  ]);

}

function testModule2() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,   4,   1,  64,
      0,   0,   8, 102, 117, 110,  99, 116, 105, 111, 110,   3,   2,   0,   0,   6,
    101, 120, 112, 111, 114, 116,   7,   2,   0,   1,  97,   1,   1,  98,   4,  99,
    111, 100, 101,   9,   2,   3,   0,  16,   1,   3,   0,  16,   2,
  ]);

}

function testModule3() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  10,   2,  64,
      1,   1,   1,   1,  64,   0,   1,   1,   8, 102, 117, 110,  99, 116, 105, 111,
    110,   3,   2,   0,   1,   6, 101, 120, 112, 111, 114, 116,  22,   2,   0,   1,
    101,   1,  16,  36,  97, 115, 115, 101, 114, 116,  95, 114, 101, 116, 117, 114,
    110,  95,  48,   4,  99, 111, 100, 101,  20,   2,   8,   0,  20,   0,  16,   1,
     64,   9,   1,   9,   0,  16,  42,  22,   1,   0,  16,  43,  77,
  ]);

  assertReturn(module, '$assert_return_0', 'external/testsuite/exports.wast', 22);
}

function testModule4() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   6, 109, 101, 109, 111, 114, 121,   3,
      0,   0,   1,
  ]);

}

function testModule5() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   6, 109, 101, 109, 111, 114, 121,   3,
      0,   0,   1,
  ]);

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
