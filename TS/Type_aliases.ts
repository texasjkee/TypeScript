type AnimationTymingFunc = 'ease' | 'ease-out' | 'ease-in';

function createAnimation(
  id: string | number,
  animName: string,
  timingFunc: AnimationTymingFunc = 'ease',
  duration: number,
  iterCount: 'infinite' | number
): void {
  console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite');
