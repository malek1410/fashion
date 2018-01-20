import { Component } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
    templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
    public pageTitle: string = 'Ghezlan Fashion';
    public  imageSources :string[]=[
        './assets/images/img_1.png',
        './assets/images/img_2.png',
        './assets/images/img_3.png',

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
