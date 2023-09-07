import NoContent from "@/components/no-content";

import { SearchNotFound, NotFoundImage } from "@/components/images";

function NotFound() {
    return (
        <NoContent
            image={NotFoundImage.src}
            width={500}
            height={500}
        />
    )
}

export default NotFound;