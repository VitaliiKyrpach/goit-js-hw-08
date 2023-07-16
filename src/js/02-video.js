import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

updateTime();

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

function updateTime() {
  const time = localStorage.getItem('videoplayer-current-time');
  if (!time) {
    player.setCurrentTime(0);
  } else {
    player.setCurrentTime(time);
  }
}
