import { HeaderShared, PropsCover } from "@/@types/article"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import { cn } from "@/lib/utils"

export interface PropsFeedback extends HeaderShared {
  name: string
  email: string
  avatar: PropsCover
  comment: string,

  className?: string
}

export function Feedback({ 
    name,
    email,
    avatar,
    comment,
    className 
}: PropsFeedback) {
    return (
      <Card className={cn("h-auto", className)}>
        <CardHeader className="flex p-4">
          <Avatar>
            <AvatarImage className="object-cover" src={avatar.url} alt={avatar.alternativeText} />
            <AvatarFallback>{name.slice(0, 1).toLocaleUpperCase()}</AvatarFallback>
          </Avatar>

          <p className="text-xl font-medium">{name}</p>
          <small className="text-sm italic">{email}</small>
        </CardHeader>

        <CardContent className="p-4 pt-0">
          <p className="text-base text-foreground/75">
            {comment}
          </p>
        </CardContent>
      </Card>
    )
  }