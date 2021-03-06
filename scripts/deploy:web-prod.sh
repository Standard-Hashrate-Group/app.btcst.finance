#!/bin/bash

echo app.btcst.finance > ./web-build/CNAME

gh-pages -d web-build --remote=gh-pages

