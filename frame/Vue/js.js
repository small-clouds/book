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
var cityList = ["我是一", "我是二", "我是三", "我是四", "我是五",]
var app8 = new Vue({
    el: '#app8',
    data: {
        message: 1495855690000,
        aaaa: '测试我容易吗',
        cityList: cityList
    },
    methods: {
        greet: function (b) {
            // // 方法内 `this` 指向 vm
            //alert(this.aaaa)
            alert(b)
            //alert(b)
        },
        reversedMessage: function () {
            // `this` points to the vm instance
            //return this.message.split('').reverse().join('')
            var a = this.message;
            var date = new Date(a);
            var Y = date.getFullYear() + '-';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
            h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            var time_new_xu = Y + M + D + h + m + s;
            return time_new_xu;
        }
    },
    computed: {
        // a computed getter
        reversedMessage1: function () {
            // `this` points to the vm instance
            //return this.message.split('').reverse().join('')
            var a = this.message;
            var date = new Date(a);
            var Y = date.getFullYear() + '-';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
            h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            var time_new_xu = Y + M + D + h + m + s;
            return time_new_xu;
        }
    }
});
var app9 = new Vue({
    el: '#app9',
    data: {
        newPerson: {
            name: '',
            age: 0,
            sex: 'Male'
        },
        people: [{
            name: 'Jack',
            age: 30,
            sex: 'Male'
        }, {
            name: 'Bill',
            age: 26,
            sex: 'Male'
        }, {
            name: 'Tracy',
            age: 22,
            sex: 'Female'
        }, {
            name: 'Chris',
            age: 36,
            sex: 'Male'
        }]
    },
    methods: {
        createPerson: function () {
            this.people.push(this.newPerson);
            // 添加完newPerson对象后，重置newPerson对象
            this.newPerson = { name: '', age: 0, sex: 'Male' }
        },
        deletePerson: function (index) {
            // 删一个数组元素
            this.people.splice(index, 1);
        }
    }
})

