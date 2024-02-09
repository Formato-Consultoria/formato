import { notFound, redirect } from 'next/navigation';

export default function ServicePage() {
    redirect('/servicos/financas');
}