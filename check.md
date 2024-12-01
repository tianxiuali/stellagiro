1. 图片要用3x的去适配，并且放大不会变糊，要在mac上看看
2. 1100/768，两个媒体查询宽度
3. 字体要用谷歌的链接引入，防止乱码，并且文字也不会变成中文的
```
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+SC:wght@100..900&display=swap');

body {
    color: #323232;
    font-size: 16px;
    line-height: 1.5;
    font-family: "Noto Sans JP", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    -webkit-text-size-adjust: 100%;
}

light-300
regular-400
media-500
semibold-600
bold-700
ExtraBold 800
Black 900
```
4. 删除中文注释
5. 适配手机端，要注意Safari的导航比较高，上下都有，建议用模拟器的390*644查看
6. 头部的lang要改成日文
```
<html lang="NotoSans">
```
7. 细心细心再细心！！！


常用颜色
深绿 #336d4c
浅绿 #8cc63f
草绿 #e8f4d9
深黄 #f39800
中黄 #ffb800
浅黄 #fff100

渐变黄 background: linear-gradient(135deg, #fdd000, #f08400);
渐变绿 background: linear-gradient(135deg, #9ec003, #058e42);