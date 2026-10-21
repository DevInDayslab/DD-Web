import { notFoundPage } from "@/content/pages/not-found";
import Link from "next/link";

type NotFoundViewProps = {
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
};

function NotFoundView({ title, description, action }: NotFoundViewProps) {
  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href={action.href}>{action.label}</Link>
    </main>
  );
}

export default function NotFound() {
  return (
    <NotFoundView
      title={notFoundPage.title}
      description={notFoundPage.description}
      action={notFoundPage.action}
    />
  );
}
