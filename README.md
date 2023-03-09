启动项目
npm run dev 本项目服务器端口为4090


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
复习vue2项目hhh


vue项目文件中 public src main.js 的文件名称（文件夹名称）不可以改
其他的配置在官网的cli中查询，在vue.config.js中修改和添加

ref在普通标签上是dom结构，在组件上的额就是获取到的组件实例对象

mixin，混合把两个组件相同的属性配置（methods，computed，watch。。。。）抽离出来，分别引入共用
如果与组件本身的属性冲突了，如抽离的混合里面的data有一样的数据，则以组建本身的属性为准，但是生命周期中的方法
都会触发，并且混合里面先触发，还可以全局混合，给全局的组件添加统一的数据

vue中的插件，在main.js中用vue.use(xxx)可注册插件，插件的编写也很简单就是一个对象，但是对象里面得有intall这个函数，
这个函数可以接收一个参数，第一个参数为vue构造函数，你可以在vue身上添加全局过滤器，全局自定义指令，全局变量，全局方法等等。

$emit是触发组件的自定义事件，组件绑定原生事件用.native修饰符

事件总线：原理就是利用所有组件都可以访问到组件构造函数或者vue实例的构造函数，在他们共同都可以访问到的地方添加一个组件实例（或者vue实例）
这个实例拥有$emit,$on,$off等函数，因此就可以想子组件传父组件一样，触发组件实例上的方法传参，在触发事件的组件里最好在组件销毁的时候
注销你绑定的自定义事件。例子见fatherSonBrother文件夹

消息订阅与发布pubsub-js.js这个包可实现功能

动画，vue有个组件transition可以比较轻松的实现

跨域，请求发送成功，服务器也会相应成功，但是浏览器不会把数据给你，因为违反了同源策略（协议，主机名，端口号必须一致）
1.后端可以采用cors解决跨域，让响应头中携带一些特殊的参数让浏览器，缺点是任何网站都可以请求该服务器的数据不是特别安全
2.前端使用jsonp请求，利用script标签src请求外部js资源不会收到同源策略的影响，但是几乎不用，因为前端开发会用特殊的写法
且后端也要相应的配合，不方便，并且只能解决get请求的跨域问题，post,put等解决不了
3.最常用的是代理服务器，本地会启动一个与本站协议，主机名，端口一致的服务器，你向代理服务器请求，代理服务器去与正式服务器交换数据，
因为代理服务器与正式服务器对接数据用不到浏览器更用不到网站请求数据的方法（axios，fetch等）所以不会收到同源策略的限制、
    1.nginx服务代理（不会）
    2.vue-cil开服务代理（正解）

引入全局第三方css可以写在index.html中，html中，最好使用用<%= BASE_URL %>（这个是vue配置的基础url）

修改命令启动开发服务可修改端口配置，在pakege.json中的对应命令后加   --port 端口号

作用域插槽

vuex
1、vue执行js文件的时候，import语句会汇聚在最开始，就早执行然后在顺着后面代码执行,这就是为什么在store中使用Vue.use(Vuex)，否则会报”必须在vuex使用之后才可以创建store实例
2、vuex中核心属性有actions，mutations，state。state是存储数据的地方，mutations中的函数会真实的改变state的数据，mutations中的函数命名规范为全为大写，actions通过dispatch触发，action中的函数会收到2个参数，第一个是上下文，第二个是value，action中的函数使用commit触发mutations中的函数，这一步看上去有些多余，实际上有一些业务逻辑可以写在action中，比如一些异步操作，当没有这样需求时可以直接commit触发mutations中的函数改变state的数据。
3、getters，getter相当于vuex里面的computed的，当我们获取vuex中state的属性时，我们也许会有一些其他的操作，比如把这个值经过一系列运算之后得到，那么可以配置在getter中，用法与computed一样需要return一个结果出来
4、mapState以及mapGetter，在组件里面使用vuex会比较麻烦，所有的地方都得加上$store.state。。。以及$store.getter。。。比较冗余和麻烦，如果要解决这个问题，可以使用些个computed来把名字重写，但是数据多了也会发现写computed挺烦的，所以有了mapState和mapGetter这两个函数帮助程序员写computed属性简化代码
5、同样可以使用mapAction以及mapMutition来生成操作action和mutition的methods
6、由于可能存在大量的不通模块对于state的操作，所以可以用vuex模块化的方式管理


vue-router完整的导航解析流程
1、导航被触发。
2、在失活的组件里调用 beforeRouteLeave 守卫。
3、调用全局的 beforeEach 守卫。
4、在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5、在路由配置里调用 beforeEnter。
6、解析异步路由组件。
7、在被激活的组件里调用 beforeRouteEnter。
8、调用全局的 beforeResolve 守卫 (2.5+)。
9、导航被确认。
10、调用全局的 afterEach 钩子。
11、触发 DOM 更新。
12、调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。



