// 事件总线原理
export default class Bus {
  constructor() {
    this.callbacks = {}
  }
  $on(event, fn) {
    this.callbacks[event] = this.callbacks[event] || []
    this.callbacks[event].push(fn)
  }
  $emit(event, args) {
    this.callbacks[event].forEach((fn) => {
      fn(args)
    })
  }
}

// 在main.js中引入以下
// Vue.prototype.$bus = new Bus()
