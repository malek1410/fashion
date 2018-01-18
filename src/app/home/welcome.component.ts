import { Component } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    public imageSources: string[] = [
        '../assets/images/img_1.jpg',
        './assets/images/img_2.jpg',
        './assets/images/img_3.jpg'
     ];
    
     
     public config: ICarouselConfig = {
       verifyBeforeLoad: true,
       log: false,
       animation: true,
       animationType: AnimationConfig.SLIDE,
       autoplay: true,
       autoplayDelay: 2000,
       stopAutoplayMinWidth: 768
     };
}
