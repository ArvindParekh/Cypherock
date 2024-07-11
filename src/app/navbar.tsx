const navLogo = (
    <div className="ml-5">
        <img src="/cypherock_icon.svg" className="w-48" />
    </div>
)

const navButtons = (
    <div className="flex gap-4 items-center mr-8">
        <div className="w-4 h-0 border"></div>
        <div className="h-4 w-4 border"></div>
        <span className="text-xl font-medium">X</span>
    </div>
)

const navbar = [navLogo, navButtons]

export default navbar;