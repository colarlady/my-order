# 项目总结
## 项目运行
+ 下载项目依赖包 yarn install
+ 运行项目 yarn start
## 项目结构
|-- my-order
    |-- .gitignore            # git忽略文件
    |-- package-lock.json     
    |-- package.json
    |-- README.md
    |-- yarn-error.log
    |-- yarn.lock
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |   |-- manifest.json
    |   |-- mock             # 模拟数据
    |       |-- orders.json
    |-- src
        |-- index.css         
        |-- index.js
        |-- logo.svg
        |-- serviceWorker.js
        |-- components          # 组件
            |-- App
            |   |-- index.js
            |   |-- style.css
            |-- Header
            |   |-- index.js
            |   |-- style.css
            |-- OrderItem
            |   |-- index.js
            |   |-- style.css
            |-- OrderList
                |-- index.js
                |-- style.css

## 项目分解
+ 项目业务逻辑
    + 订单列表展示
    + 某一订单评价
    + 订单状态的转变（已评价<->未评价）
+ 项目技术
    + React
    + HTML+CSS
    + JS
    + VScode
    + Fetch  异步请求数据
    + Mock   模拟数据流
## 项目搭建
    + 采用的是react提供的快速搭建react项目的脚手架
    + npm install create-react-app
    + create-react-app myapp
## 项目知识点
+ 组件
    + 单个订单 OrderItem 
    + 订单列表 OrderList
    + 列表     Header 
    + 列表入口 App
+ CSS命名规范
    + BEM方式
        + B:block
        + E:Element
        + M:Modifier
        + 连接方式:B__E--M
    + 驼峰命名
+ 样式方面的收获
    + 宽度的计算
        + 像单个订单这种左+右的结构
        + 左边inline-block，固定宽高,留padding.右边width:calc(100%-左边总的宽度)
        +这样可以实现左边的自适应
    + 显示的字的个数不定时如何处理
        + 比如产品的名称
        + 设置max-width最大宽度
        + overflow: hidden;
	      text-overflow: ellipsis;
            + text-overflow:文本溢出元素时如何处理文本
                + clip 修剪文本
                + ellipsis 	显示省略符号来代表被修剪的文本
        + white-space:对于元素内的空白字符应该如何处理
            + normal 元素内的空白字符会被忽略
            + pre 元素内的空白字符会被保留
            + nowrap 文本不会换行，会在同一行显示直到<br>
            + pre-wrap 保留空白序列符，正常换行
            + pre-line 合并空白序列符，但是保留换行符
    + 对于小图标的处理方式
        + 处理方式一
            引入字体
            
        + 处理方式二

    + flex布局
        + flex布局又称为伸缩布局
        + 所有的属性设置
            + 容器属性
                + display:flex
                + flex-direction 主轴的方向
                + flex-wrap
                + flex-flow
                + justify-content
                + align-items
                + align-content
            + 元素属性
                + display:flex
                + order
                + flex-grow
                + flex-shrink
                + flex-basis
                + flex
                + align-self
        + 设置了display:flex的block元素就是一个伸缩容器,该容器内的子元素称为伸缩项目
        + 伸缩容器有两个轴
            + 主轴
            + 侧轴
            + 每根轴都有起点和终点
            + 伸缩项目永远沿着主轴排列(所以说轴很重要)
        + 定义主轴
            + flex-direction:row|row-reverse|column|column-reverse
            + row:水平方向从左到右
            + row-reverse:水平方向从右到左
            + column:垂直方向从上到下
            + column-reverse:垂直方向从下到上
        + 定义伸缩项目沿着主轴如何排列(排不下or有多余的空间)
            + flex-wrap使得弹性元素在主轴方向上是折行显示还是不折行还是反向折行
            + flex-wrap:wrap
                + 当弹性元素的总宽度大于弹性容器的宽度
                    + 弹性元素保留设置的宽度
                    + 折行进行显示弹性元素
                    + 可能会超出弹性容器的高度/宽度
                    + 如果说一行连一个都放不下，就会缩小该弹性元素的尺寸(高度/宽度)
                + 当弹性元素的总宽度小于弹性容器的宽度
                    + 弹性元素挨着显示
            + flex-wrap:nowrap
                + 当弹性元素的总宽度大于弹性容器的宽度
                    + 元素的弹性伸缩应对
                + 当弹性元素的总宽度小于弹性容器的宽度
                    + 弹性元素挨着显示
            + flex-wrap:wrap-reverse
                + 和wrap的区别是从容器底部开始的折行，但每行元素之间的排列仍保留正向
        + flex-flow = flex-direction flex-wrap
            + 这是一个复合属性，规定了flex布局的工作流
        + 元素如何弹性伸缩应对
            + 在不折行的情况下，容器的宽度有剩余或者不够时，弹性元素如何伸缩应对
            + flex-shrink  缩小比例
                + flex-shrink:n
                + 最终元素宽度为 元素原本宽度+(n1*元素1的宽度)/[(-容器不够的宽度)*(n1*元素1的宽度+n2*元素2的宽度)]
            + flex-grow 放大比例
                + 默认情况下，容器剩余宽度默认是不进行分配的也就是说flex-grow：0
                + flex-grow:n
                + 最终元素宽度为 元素原本宽度+(容器剩余宽度/(n1+n2)*n1)
            + 补充一点
                + 如果我们希望元素固定尺寸，不进行弹性调整
                + 我们可以给元素设置 flex-grow:0;flex-shrink:0
        + flex-basis设置的是弹性元素在主轴上的初始尺寸
            + 额为啥造这么一个属性不太懂
            + 取值可以是auto 0 0% 某一个具体的尺寸
            + auto:如果元素设置了宽度按照元素宽度来否则按照元素内容的宽度来
            + 0/0%:按照元素内容的宽度来
            + 具体值:flex-basis优先级高于width
        + 复合属性 flex
            + flex:flex-grow | flex-shrink | flex-basis
            + 一些简写 flex:1   flex: 1 0 0%
            + 一些简写 flex:2   flex: 2 0 0%
            + 一些简写 flex:auto   flex: 2 0 auto
            + 一些简写 flex:none   flex: 0 0 auto; //固定尺寸不伸缩
        + 元素在容器内的对其方式
            + 容器中设置元素主轴方向对齐方式 justify-content
                + justify-content:flex-start  默认值
                + justify-content:flex-end
                + justify-content:center
                + justify-content:space-between
                + justify-content:space-around
            + 容器中设置元素侧轴方向对齐方式 align-items和align-content
                + 侧轴会出现一行和多行两种情况
                +  align-items管单行align-content管整体
                + align-items
                    + align-items:strench 拉伸
                    + align-items:flex-start
                    + align-items:flex-end
                    + align-items:center
                    + align-items:baseline
                + align-content
                    + align-content:strench
                    + align-content:flex-start
                    + align-content:flex-end
                    + align-content:center
                    + align-content:space-between
                    + align-content:space-around
            + 元素单独设置侧轴对齐方式使用align-self
                + 值与align-items相同
                + 可覆盖容器的align-items属性
                + 默认值为auto，表示继承父元素的align-items属性
        + 元素的排序order
            + 数值越小，越靠前，默认为0
            + 值相同时，以dom中元素排列为准
        + [参考文档] (https://www.cnblogs.com/qcloud1001/p/9848619.html)
    + nth-of-type和nth-child
        + 
+ React JSX语法
    + JSX是UI和数据结合的一种写法，有点像模板引擎
    + 使用{}区分html和变量
    + JSX中可以使用表达式
    + JSX中可以使用数组
    + JSX中可以使用函数
    + JSX中不可以使用if else
+ React 生命周期函数
    + 组件初始化阶段
        + constructor()
          + 页面加载只触发一次
            ```
            constructor() {
                super();
                this.state = {number: 0}
            }
            ```
        + componentWillMount()
            + 组件即将挂到页面时触发，只触发一次,这个阶段可以开启定时器向服务器发请求
            ```
                componentWillMount(){

                }
            ```
        + render()
            + 组件进行渲染
        + componentDidMount()
            + 组件已经渲染到页面上了,此时有了DOM元素，可以进行DOM操作
    + 组件运行阶段
        + componentWillReceiveProps()组件将收到props时触发(会触发多次)
        ```
            componentWillReceiveProps(nextProps){
              // nextProps 是最新的props 
              // 此时的props是还没有更新的    
            }
        ```
        + shouldComponentUpdate()当组件接收到新属性，或者组件的状态发生改变时触发。组件首次渲染时并不会触发(会触发多次)
        ```
            shouldComponentUpdate(newProps, newState) {
                if (newProps.number < 5) return true;
                return false
                // 使用true/false来确定是否更新
            }
        ```
        + componentWillUpdate() 组件即将更新时触发(会触发多次)
        + render()(会触发多次)
        + componentDidUpdate()(会触发多次)
            + 组件被更新完成后触发。页面中产生了新的DOM的元素，可以进行DOM操作
    + 组件销毁阶段
        + componentWillUnmount()
            + 组件被销毁时触发。这里我们可以进行一些清理操作，例如清理定时器，取消Redux的订阅事件等等。
    + 生命周期执行顺序
        ```

        ```
+ React 事件处理函数
    + React中function方式申明组件为元素绑定事件的方式
    ```
       function ActionLink() {
            function handleClick(e) {
                e.preventDefault();
                console.log('The link was clicked.');
            }

            return (
                <a href="#" onClick={handleClick}>
                    Click me
                </a>
            );
        }
    ```
    + React中ES6类的方式申明组件为元素绑定事件的方式
    ```
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};

            // 为了在回调中使用 `this`，这个绑定是必不可少的
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(state => ({
            isToggleOn: !state.isToggleOn
            }));
        }

        render() {
            return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            );
        }
    }

        ReactDOM.render(
        <Toggle />,
        document.getElementById('root')
        );
    ```
        + 也可以使用箭头函数这样就不用额外绑定this
        + 绑定事件传参
        ```
            <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
            <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
        ```
+ React 表单元素与受控组件
    + 表单元素的话有维护自己的state,并且根据用户输入更新，但是react中倾向于组件的变化状态保存在state属性中，所以我们需要将表单元素变成受控的组件
    + 具体实现方式见官网这块比较好理解
+ React 为元素添加多个类名 
    + 多个类名使用空格隔开
    ```
        <span key={index} className={'orderItem__star '+{star>item?'orderItem__star--red':''}} onClick={()=>this.handleClickStar(item)}>★</span>
    ```
+ React 父子组件之间如何传值
    + 父组件向自组件传值使用props
    + 自组件向父组件传值调用父组件传递的函数
+ React中列表数据都建议加上唯一标识Key
    + 理由呢
+ Mock模拟数据流

+ Fetch实现异步请求
   
+ VScode使用
    + 快速寻找某一文件 ctrl+p
    + 显示插件的命令  ctrl+shift+p
    + 移动行  alt+up/down
+ MakeDown使用
    + 如何导出项目目录
