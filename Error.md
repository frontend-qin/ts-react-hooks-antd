### 1. 对于没有生命 type 文件的库

> 在 src 下新建一个 types 文件夹, 写入 index.d.ts 文件

```ts
declare module '包名'
```

### 2. 在使用路由的 widthRoute 高阶组件时报错 ？

> 1. 先引入 import 路由的声明接口 { RouteComponentProps, withRouter } from 'react-router-dom'
> 2. 让自己的约束 props 的 接口 继承它, 最后直接导出就可以了

```ts
interface PropsType extends RouteComponentProps {}
export default withRouter(你的组件)
```

### 3. 在使用 props.children 时， children 报错？同时 在使用 路由时， Switch 组件 报错？

- 让你的接口继承 React.Props<T>

```ts
// 举例
export interface 你的接口 extends React.Props<any> {}
```

### 4. react 对 事件 中返回的 e 参数的约束接口格式

- (e: React.MouseEvent)

```ts
// react 对鼠标事件的 约束接口 类型约束
const handleClick = (e: React.MouseEvent) => {}
```

### 5. react 对 表单提交中返回的 e 参数的约束接口格式

```ts
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
}
```
