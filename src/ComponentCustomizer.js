export default {
    install (Vue, settings) {
        Vue.component(settings.name, {
            data() {
                return {
                    testMessage: 'test',
                }
            },
            template: `
                <div>                
                    <slot></slot>
                    <div>{{testMessage}}</div>
                </div>
            `
        })
    }
}
