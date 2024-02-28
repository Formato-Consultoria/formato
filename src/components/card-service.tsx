import { PropsService } from "@/@types/service";
import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/utils/_fonts";
import { cn } from "@/lib/utils";

export default function CardService(service: PropsService) {
    const { title, slug, icon, description } = service;

    return (
        <Card className="text-center ring-1 ring-input h-auto">
            {icon && <Image
                className="mb-5"
                src={icon?.url}
                alt={icon?.name}
                width={60}
                height={60}
                blurDataURL={icon?.blurUrl}
            />}

            <CardContent className="space-y-3 h-auto">
                <CardTitle className="mt-0">
                    {title}
                </CardTitle>

                <div>
                    <CardDescription className="line-clamp-5">
                        {description}
                    </CardDescription>

                    <Link
                        href={`/servicos/${slug}`}
                        className={cn(
                            "w-max mt-5 py-3 px-4 rounded-sm",
                            "text-base font-semibold no-underline",
                            "bg-gray-400/30 hover:bg-gray-400/20",
                            inter.className
                        )}
                    >
                        saber mais
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}