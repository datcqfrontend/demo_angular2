"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var posts_services_1 = require('../../services/posts.services');
var UserComponent = (function () {
    function UserComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.name = 'Dat Chau';
        this.email = 'datcq130284@gmail.com';
        this.address = {
            street: 'Phan Van Tri',
            city: 'Ho Chi Minh',
            country: 'Viet Nam'
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(function (posts) {
            //console.log(posts);
            _this.posts = posts;
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            //template: '',
            templateUrl: 'user.component.html',
            providers: [posts_services_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_services_1.PostsService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map