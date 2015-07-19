if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var TodoList = (function () {
    function TodoList() {
        this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
    }
    TodoList.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoList.prototype.doneTyping = function ($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    };
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list'
        }),
        angular2_1.View({
            template: "\n    <ul>\n      <li *ng-for=\"#todo of todos\">\n        {{ todo }}\n      </li>\n    </ul>\n\n    <input #todotext (keyup)=\"doneTyping($event)\">\n    <button (click)=\"addTodo(todotext.value)\">Add Todo</button>\n          ",
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
// Annotation sjction
var MyAppComponent = (function () {
    function MyAppComponent() {
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            //Typescript
            template: "\n  <todo-list></todo-list>\n  ",
            directives: [TodoList]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
angular2_1.bootstrap(MyAppComponent);
