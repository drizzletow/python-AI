---
sidebar: heading
title: AI 搬砖项目

---

## 一 项目简介及环境准备

### 1. 项目介绍

因一些游戏获取装备和金币的过程极为枯燥，在AI图像识别已臻成熟的今天，是时候解放一下我们的双手了
（该项目不修改任何游戏数据，只模拟人工操作，减少一些重复性的单调劳动）

### 2. 环境准备

基本环境要求：Anaconda的Python开发环境、N卡及相关机器学习相关软件

## 二 图像处理及目标检测

### 1. 获取窗口截图

刚开始我们需要先获取供训练AI所需的图片，这里需要使用一些Python的第三方库：
[pywin32](/zh/python/pywin32.md) , numpy, opencv-python 

这里简单描述一下实现思路：先使用 pywin32 获取指定的窗口句柄，然后利用相关API获取到位图对象

```python
import win32con
import win32gui
import win32ui

hwnd = win32gui.FindWindow(None, "地下城与勇士：创新世纪")
print("游戏窗口句柄：", hwnd)

# 游戏窗口基本大小信息
left, top, right, bot = win32gui.GetWindowRect(hwnd)
width = right - left
height = bot - top
print(width, height)

# 获取窗口设备上下文句柄
target_dc = win32gui.GetWindowDC(hwnd)
# 将窗口设备上下文句柄转换为设备上下文对象
img_dc = win32ui.CreateDCFromHandle(target_dc)
# 创建一个兼容的设备上下文对象
mem_dc = img_dc.CreateCompatibleDC()

# 创建位图对象(未分配内存)
picture_bitmap = win32ui.CreateBitmap()
# 为位图对象分配内存，并创建一个与原始设备上下文对象兼容的位图
picture_bitmap.CreateCompatibleBitmap(img_dc, width, height)

# 将位图对象选入到设备上下文对象、以便进行绘图操作
mem_dc.SelectObject(picture_bitmap)
# 将原始设备上下文中的内容复制到位图对象中
mem_dc.BitBlt((0, 0), (width, height), img_dc, (0, 0), win32con.SRCCOPY)

# 此时位图对象picture_bitmap中存储了从窗口截取的图像

# 保存位图对象到文件
picture_bitmap.SaveBitmapFile(mem_dc, "target.jpg")

# 释放资源
mem_dc.DeleteDC()
win32gui.DeleteObject(picture_bitmap.GetHandle())
img_dc.DeleteDC()
win32gui.ReleaseDC(hwnd, target_dc)

```

### 2. OpenCV图像处理

### 3. Yolov目标检测

## 三 串口通信及自动操作


## 四 相关特殊功能实现