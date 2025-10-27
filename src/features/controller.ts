import gsap from 'gsap';

export function controller(element: HTMLDivElement, direction: string) {
  switch (direction) {
    case 'left':
      gsap.to(element, { rotation: '+=60' });
      break;
    case 'rigth':
      gsap.to(element, { rotation: '-=60' });
      break;
  }
}
