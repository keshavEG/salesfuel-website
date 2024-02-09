'use client'
import ReactPlayer from 'react-player'

interface IHeroAnimationProps {
  width?: number | string;
  height?: number;
  muted?: boolean;
}

export default function HeroAnimation({ width = 600, height = 340, muted = false }: IHeroAnimationProps) {
  return <ReactPlayer
    url='/hero.mp4'
    width={width}
    height={height}
    muted
    playing
    loop
    onReady={(player) => {

      if (!muted) {
        const video: any = player.getInternalPlayer()
        video.muted = false
      } else {
        document.addEventListener('click', () => {
          const video: any = player.getInternalPlayer()
          video.muted = false
        })
      }

    }}
  />
}
