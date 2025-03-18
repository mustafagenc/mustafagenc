import {
  DevToIcon,
  GitHubIcon,
  HashnodeIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/icons'
import { Social } from '@/components/social'
import { InfoTooltip } from '@/components/info-tooltip'

const socialCategories = [
  {
    name: 'Social Media',
    items: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mustafagenc',
        icon: LinkedInIcon,
      },
      {
        name: 'GitHub',
        href: 'https://github.com/mustafagenc',
        icon: GitHubIcon,
      },
      {
        name: 'DEV.to',
        href: 'https://dev.to/mustafagenc',
        icon: DevToIcon,
      },
      {
        name: 'Hashnode',
        href: 'https://mustafagenc.hashnode.dev',
        icon: HashnodeIcon,
      },
      {
        name: 'X',
        href: 'https://x.com/mustafagenc',
        icon: TwitterIcon,
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com/mustafagenc',
        icon: InstagramIcon,
      },
    ],
  }
]

export const Socials = () => {
  return (
    <section className='my-8 w-full space-y-5'>
      {socialCategories.map(category => (
        <div key={category.name} className='space-y-2'>
          <h3 className='text-muted-foreground text-lg font-semibold capitalize'>
            {category.name}
          </h3>

          <div className='flex flex-row space-x-2 overflow-x-auto'>
            {category.items.map(social => (
              <InfoTooltip
                key={social.name}
                label={social.name}
                side='bottom'
                className='text-xs'
              >
                <Social
                  key={social.name}
                  href={social.href}
                  name={social.name}
                  Icon={social.icon}
                  iconClassName='size-5 md:size-6'
                />
              </InfoTooltip>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
