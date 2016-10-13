'use strict';

let spectest = {
  print: print || ((...xs) => console.log(...xs)),
  global: 666,
  table: new WebAssembly.Table({initial: 10, maximum: 20, element: 'anyfunc'}),  memory: new WebAssembly.Memory({initial: 1, maximum: 2}),};

let registry = {spectest};
let $$;

function register(name, instance) {
  registry[name] = instance.exports;
}

function module(bytes) {
  let buffer = new ArrayBuffer(bytes.length);
  let view = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; ++i) {
    view[i] = bytes.charCodeAt(i);
  }
  return new WebAssembly.Module(buffer);
}

function instance(bytes, imports = registry) {
  return new WebAssembly.Instance(module(bytes), imports);
}

function assert_malformed(bytes) {
  try { module(bytes) } catch (e) { return }
  throw new Error("Wasm decoding failure expected");
}

function assert_invalid(bytes) {
  try { module(bytes) } catch (e) { return }
  throw new Error("Wasm validation failure expected");
}

function assert_unlinkable(bytes) {
  let mod = module(bytes);
  try { new WebAssembly.Instance(mod, registry) } catch (e) { return }
  throw new Error("Wasm linking failure expected");
}

function assert_trap(action) {
  try { action() } catch (e) { return }
  throw new Error("Wasm trap expected");
}

function assert_return(action, expected) {
  let actual = action();
  if (actual !== expected) {
    throw new Error("Wasm return value " + expected + " expected, got " + actual);
  };
}

function assert_return_nan(action) {
  let actual = action();
  if (!Number.isNaN(actual)) {
    throw new Error("Wasm return value NaN expected, got " + actual);
  };
}

$$ = instance("\x00\x61\x73\x6d\x0c\x00\x00\x00\x01\x8f\x80\x80\x80\x00\x03\x40\x00\x01\x01\x40\x02\x01\x01\x00\x40\x01\x01\x01\x01\x03\x85\x80\x80\x80\x00\x04\x00\x01\x02\x02\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\x9e\x80\x80\x80\x00\x03\x05\x73\x74\x6f\x72\x65\x00\x01\x04\x6c\x6f\x61\x64\x00\x02\x0b\x67\x72\x6f\x77\x5f\x6d\x65\x6d\x6f\x72\x79\x00\x03\x0a\xb8\x80\x80\x80\x00\x04\x88\x80\x80\x80\x00\x00\x3b\x10\x80\x80\x04\x42\x0f\x8c\x80\x80\x80\x00\x00\x16\x00\x14\x00\x40\x14\x01\x33\x02\x00\x0f\x8a\x80\x80\x80\x00\x00\x16\x00\x14\x00\x40\x2a\x02\x00\x0f\x85\x80\x80\x80\x00\x00\x14\x00\x39\x0f");
assert_return(() => $$.exports["store"](-4, 42));
assert_return(() => $$.exports["load"](-4), 42);
assert_trap(() => $$.exports["store"](-3, 13));
assert_trap(() => $$.exports["load"](-3));
assert_trap(() => $$.exports["store"](-2, 13));
assert_trap(() => $$.exports["load"](-2));
assert_trap(() => $$.exports["store"](-1, 13));
assert_trap(() => $$.exports["load"](-1));
assert_trap(() => $$.exports["store"](0, 13));
assert_trap(() => $$.exports["load"](0));
assert_trap(() => $$.exports["store"](-2147483648, 13));
assert_trap(() => $$.exports["load"](-2147483648));
assert_return(() => $$.exports["grow_memory"](65537), -1);
