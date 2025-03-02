
# M3AIL Research Group Website Manual (v1.0)

哈尔滨工业大学（深圳）  
智能科学与工程学院  
多媒体智能前沿实验室（M3AIL Research Group）网站手册

---

## GitHub Pages部署说明

### 1. 仓库名要求
仓库名必须为：`用户名.github.io`，这是GitHub Pages的默认访问链接规则。

### 2. 必备文件
网站根目录下必须包含`index.html`文件。

### 3. Pages设置
- 打开仓库的`Settings` -> `Pages`
- 选择部署分支为`main`，路径选择`/`（root）
- 点击`Save`保存设置

> **提示**  
> 上传网站文件后，GitHub Pages可能存在几分钟缓存延迟。如未及时更新，可以尝试重新登录或清除浏览器缓存。

---

## Git操作手册

### 第一次上传（初始化并推送）
git init  
git add .  
git commit -m "initial commit"  
git branch -M main  
git remote add origin https://github.com/M3AIL/M3AIL.github.io.git  
git push -u origin main  

---

### 清空本地和远程仓库
git rm -r .  
git commit -m "删除所有文件"  
git push  

---

### 本地文件全部上传到远程仓库
git add .  
git commit -m "初始化网站"  
git push  

---

## 实验室网址
https://m3ail.github.io
