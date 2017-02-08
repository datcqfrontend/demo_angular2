import { Component } from '@angular/core';
import { PostsService} from '../../services/posts.services';

@Component({
  moduleId: module.id,
  selector: 'user',
  //template: '',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})

export class UserComponent  { 
  //Declare variables
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
  
  constructor(private postsService: PostsService){
    this.name = 'Dat Chau';
    this.email = 'datcq130284@gmail.com';
    this.address = {
        street : 'Phan Van Tri',
        city : 'Ho Chi Minh',
        country: 'Viet Nam'
    }
    this.hobbies = ['Music', 'Movies', 'Sports']
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
        //console.log(posts);
        this.posts = posts;
    });
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
}

interface address{
    street: string;
    city: string;
    country: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}