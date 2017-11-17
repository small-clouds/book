var app1 = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        name: "用户名",
        arr1: [
            { text: '学习1' },
            { text: '学习2' },
            { text: '学习3' }
        ]
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        message: '页面加载于' + new Date().toLocaleString()
    }
});
var app5 = new Vue({
    el: "#app5",
    data: {
        message: '很有意思的东西'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})
var app7 = new Vue({
    el: '#app7',
    data: {
        grocerylist: [
            { id: 0, text: '蔬菜1' },
            { id: 1, text: '蔬菜2' },
            { id: 2, text: '蔬菜3' }
        ]
    }
})