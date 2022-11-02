import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, TablerIcon } from '@tabler/icons'

interface SocialLinkType {
  site: string
  url: string
  icon: React.ReactElement
}

const SocialLinks: SocialLinkType[] = [
  { site: 'Github', url: 'https://github.com/wralith', icon: <IconBrandGithub /> },
  { site: 'Twitter', url: 'https://twitter.com/wralith', icon: <IconBrandTwitter /> },
  { site: 'Linkedin', url: 'https://www.linkedin.com/in/ayberkcaliskan', icon: <IconBrandLinkedin /> },
]

export default SocialLinks
