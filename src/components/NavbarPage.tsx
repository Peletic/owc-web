export default function NavbarPage({pageName, href}: { pageName: string, href: string }) {
    return (
        <div className="py-4 text-md">
            <a href={href} className="hover:cursor-pointer">
                {pageName}
            </a>
        </div>
    )
}