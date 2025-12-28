#!/bin/bash
set -euo pipefail

LOG_FILE="loop.log"
trap "echo 'Script terminated' >> $LOG_FILE" EXIT

echo "Script started"
for i in {1..10}; do
  echo "Iteration $i" >> $LOG_FILE
  sleep 1
done
echo "Script completed" >> $LOG_FILE
