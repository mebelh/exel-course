import { DomListener } from "./DomListener"

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ""
        this.emitter = options.emitter
        this.subscribe = options.subscribe || []
        this.store = options.store
        this.unsubscribers = []
        // this.storeSub = null

        this.prepare()
    }

    // Настраивает компонент до init
    prepare() {}

    // Возвращает шаблон компонента
    toHTML() {
        return ""
    }

    //Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    $dispatch(action){
        this.store.dispatch(action)
    }

    // Изменения приходят только по тем полям на которые была подписка
    storeChanged(){

    }

    isWatching(key){
        return this.subscribe.includes(key)
    }

    // $subscribe(fn){
    //     this.storeSub = this.store.subscribe(fn)
    // }

    // Инициализация компонента
    // Добавление DOM слушателей
    init() {
        this.initDOMListners()
    }

    // Удаление компонента
    // Удаление DOM слушателей
    destroy() {
        this.removeDOMListners()
        this.unsubscribers.forEach((unsub) => unsub())
        // this.storeSub.unsubscribe()
    }
}
