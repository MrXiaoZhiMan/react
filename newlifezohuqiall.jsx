// 初始化阶段：由reactdom.render（）触发  初次渲染
// 1 constructor（）
// 2 getDerivedStateFromProps
// 3 render()
// 4 componentDidMount()
// 2 更新阶段：由组件内部this.setstate()或父组件重新render触发
// 1 getDerivedStateFromProps
// 2 shouldComponentUpdate()
// 3 render()
// 4 getSnapshopBeforeUpdate
// 5 componentDidUpdate()
// 3 卸载组件：由reactdom.unmountComponentAtNode()触发
// componentWillUnmount() 
// 三个常用的构子
// 1 render 初始化渲染或更新渲染调用
// 2 componentDidMount:开启监听，发送ajax请求
// 3 componentWillUnmount: 做一些收尾工作，如 清理定时器



// react中真实dom会对应一个虚拟dom每次更新渲染的时候 都会进行新旧dom对比
// 如果有几条数据是一样的那么这几条数据就不会有任何改变 只会把新增加的
// 映射成真实dom渲染在页面上
