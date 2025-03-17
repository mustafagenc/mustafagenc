import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface UserAvatarProps {
  src?: string
  className?: string
}

export const UserAvatar = ({ className, src }: UserAvatarProps) => {
  return (
    <Avatar className={`size-8 ${className}`}>
      <AvatarImage
        src={src ? src : '/photos/mustafa-genc.jpg'}
        alt='Mustafa Genç @mustafagenc'
      />
      <AvatarFallback>MG</AvatarFallback>
    </Avatar>
  )
}
