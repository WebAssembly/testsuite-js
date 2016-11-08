#!/bin/bash
#
# Copyright 2016 WebAssembly Community Group participants
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

set -o nounset
set -o errexit

SCRIPT_FILE="$(python -c 'import os,sys; print os.path.abspath(sys.argv[1])' "$0")"
SCRIPT_DIR="$(dirname "${SCRIPT_FILE}")"
ROOT_DIR="$(dirname "${SCRIPT_DIR}")"

if [ -z "${ROOT_DIR}" ]; then
  echo "Empty root directory?"
  exit 1
fi

cd "${ROOT_DIR}"

INTERPRETER_DIR=external/spec/interpreter
TESTSUITE_DIR=external/testsuite

(cd ${INTERPRETER_DIR} && make)

rm -f test/*.js

for TEST_FILE in `ls ${TESTSUITE_DIR}/*.wast`; do
  if [[ ${TEST_FILE} =~ \.fail\.wast$ ]]; then
    # Skip tests that are meant to fail.
    echo "Skipping ${TEST_FILE}."
    continue
  fi
  echo "Processing ${TEST_FILE}..."
  BASENAME_NOEXT=$(basename ${TEST_FILE%.*})
  JS_FILE=test/${BASENAME_NOEXT}.js
  ${INTERPRETER_DIR}/wasm ${TEST_FILE} -o ${JS_FILE}
done
