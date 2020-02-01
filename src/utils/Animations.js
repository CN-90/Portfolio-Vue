import gsap from 'gsap';

class Animations {
  constructor() {
    this.timeline = gsap.timeline();
  }

  animate(className, options) {
    this.timeline.to(className, options);
  }
}

export default Animations;
