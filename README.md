# lanbai_website

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

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








