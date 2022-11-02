import dart1 from '../assets/images/dart-scoreboard-1.png'
import dart2 from '../assets/images/dart-scoreboard-2.png'
import meal1 from '../assets/images/repeat-meal-1.png'
import meal2 from '../assets/images/repeat-meal-2.png'
import meal3 from '../assets/images/repeat-meal-3.png'

export interface Project {
  name: string
  description: string
  image: string[]
  repoUrl: string
  liveUrl?: string
}

export const Projects: Project[] = [
  {
    name: 'Dart Scoreboard',
    description: 'Scoreboard for cricket game!',
    image: [dart1, dart2],
    repoUrl: 'https://github.com/wralith/dart-scoreboard',
    liveUrl: 'https://wralith.github.io/dart-scoreboard/',
  },
  {
    name: 'Repeat Meal',
    description: 'Organize your meals!',
    image: [meal1, meal2, meal3],
    repoUrl: 'https://github.com/wralith/repeat-meal',
    liveUrl: 'https://wralith.github.io/repeat-meal',
  },
]
