type HeaderProps = {
    isDisplayed?: boolean;
}

const Header = ({isDisplayed = true}: HeaderProps) => {
    return (
        <>
            { isDisplayed &&
                <h1>This is a header</h1>
            }
        </>
    )
}

export default Header;