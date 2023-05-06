#!/usr/bin/env sh

# set -e 是一个 Bash shell 命令，它指示 shell 在执行命令时遇到任何错误即停止执行脚本，并返回一个非零退出状态码。
set -e
git add .
git commit -am "update"
git push -f git@github.com:liguwe/daily-coding.git main



