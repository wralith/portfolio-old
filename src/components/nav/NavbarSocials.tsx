import SocialLinks from '../../data/SocialLinks'
import IconButton from '../common/IconButton'

function NavbarSocials() {
  return (
    <ul aria-label="socials" className="flex gap-4 self-stretch">
      {SocialLinks.map(link => (
        <li key={link.site} className="tooltip tooltip-bottom" data-tip={link.site}>
          <a data-tooltip-target={link.site} href={link.url} className="flex items-center gap-2">
            <IconButton>{link.icon}</IconButton>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default NavbarSocials
