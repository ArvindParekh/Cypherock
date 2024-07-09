const navLogo = (
    <div className="ml-5">
        <img src="/cypherock_icon.svg" />
    </div>
)

const navButtons = (
    <div className="flex gap-4 items-center mr-5">
        <div className="w-4 h-0 border"></div>
        <div className="h-4 w-4 border"></div>
        <span>X</span>
    </div>
)

const navbar = [navLogo, navButtons]

export default navbar;