import { redirect } from 'next/navigation';
import { services } from '@/content/all-services';

export default function ServicePage() {
    const firstSlug = services[0]?.slug;
    redirect(`/servicos/${firstSlug}`);
}