import SideMenuLink from "./SideMenuLink";

export default function SideMenu() {
    return (
        <div className="w-96 h-screen border-r-2  border-[#375974] bg-[#00385f] fixed top-14"> 
            <ul className="p-4">
                <SideMenuLink>О нас</SideMenuLink>
                <SideMenuLink>Избранное</SideMenuLink>
            </ul>
        </div>
    )
}