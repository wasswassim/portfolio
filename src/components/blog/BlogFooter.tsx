import type { Dictionary } from "@/lib/i18n";
import { homePath } from "@/lib/i18n/routes";

export default function BlogFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="blog-footer">
      <span>
        &copy; {new Date().getFullYear()} {dict.footer.rights}
      </span>
      <a href={homePath()}>wassimgatri.com</a>
    </footer>
  );
}
