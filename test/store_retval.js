var passed = 0;
var failed = 0;
var quiet = false;

testModule0();
end();

function testModule0() {
  var module = createModule([
      0,  97, 115, 109,  11,   0,   0,   0,   4, 116, 121, 112, 101,  20,   5,  64,
      1,   1,   0,  64,   1,   2,   0,  64,   1,   3,   0,  64,   1,   4,   0,  64,
      0,   0,   6, 105, 109, 112, 111, 114, 116,  65,   4,   0,   8, 115, 112, 101,
     99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   1,   8, 115, 112, 101,
     99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   2,   8, 115, 112, 101,
     99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   3,   8, 115, 112, 101,
     99, 116, 101, 115, 116,   5, 112, 114, 105, 110, 116,   8, 102, 117, 110,  99,
    116, 105, 111, 110,   3,   2,   4,   4,   6, 109, 101, 109, 111, 114, 121,   3,
      1,   1,   0,   6, 101, 120, 112, 111, 114, 116,  17,   2,   0,   3, 114, 117,
    110,   1,   9,  36, 105, 110, 118, 111, 107, 101,  95,  48,   4,  99, 111, 100,
    101, 165,   1,   2, 157,   1,   4,   1,   1,   1,   2,   1,   3,   1,   4,  16,
      1,  21,   0,  24,   1,   0,  17,   2,  21,   1,  24,   1,   1,  19,   0,   0,
     64,  64,  21,   2,  24,   1,   2,  18,   0,   0,   0,   0,   0,   0,  16,  64,
     21,   3,  24,   1,   3,  16,   0,  16,  11,  51,   2,   0,  24,   1,   0,  16,
      0,  17,  12,  52,   3,   0,  24,   1,   1,  16,   0,  19,   0,   0,  80,  65,
     53,   2,   0,  24,   1,   2,  16,   0,  18,   0,   0,   0,   0,   0,   0,  44,
     64,  54,   3,   0,  24,   1,   3,  16,   0,  16, 128,   4,  46,   0,   0,  24,
      1,   0,  16,   0,  16, 128, 128,   4,  47,   1,   0,  24,   1,   0,  16,   0,
     17, 128,   4,  48,   0,   0,  24,   1,   1,  16,   0,  17, 128, 128,   4,  49,
      1,   0,  24,   1,   1,  16,   0,  17, 128, 128, 128, 128,  16,  50,   2,   0,
     24,   1,   1,   4,   0,  22,   0,   0,
  ]);

  invoke(module, '$invoke_0');
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
