const Header = () => {
    return (
        <header className="site-header" role="banner" id="header">
            <div className="top-header" id="top-header">
                <div className="logo">
                    <a href="/"><div className="logo-container" id="logo-container"><span className="logo-main"><img className="header-logo-img" src="https://media-truck-injury-site.s3.amazonaws.com/dev/homepage/18wheeler-logo-updated.svg" alt="18-wheeler logo" /></span><span className='logo-secondary'>(844) 500-0844</span></div></a>
                </div>
            </div>
            <div className="mobile-menu tablet-only">
                <span href="#" id="mobile-menu-btn">
                    <img id="mobile-menu-dynamic" src="https://media-truck-injury-site.s3.amazonaws.com/dev/homepage/menu.svg" alt="Mobile Menu Icon" />
                </span>
            </div>
            <div className="bottom-header" id="bottom-header">
                <div className="container">
                    <div className="header-menu sidenav" id="sidenav">
                        <a href="/">
                            <img className="mobile-menu-logo-img" src="https://media-truck-injury-site.s3.amazonaws.com/dev/homepage/18wheeler-logo-white-updated.svg" alt="18-wheeler logo" />
                            <div className='mobile-menu-logo'></div>
                        </a>
                        <a href="/what-caused-your-accident/">
                            <div className="menu-wrapper-container">
                                <div className="header-menu-item" id="what-caused-your-accident-menu-item">
                                    What Caused Your Accident?
                                </div>
                            </div>
                        </a>
                        <a href="/dangers-of-18-wheelers/">
                            <div className="menu-wrapper-container">
                                <div className="header-menu-item" id="dangers-of-18-wheelers-menu-item">
                                    The Dangers of 18-Wheelers
                                </div>
                            </div>
                        </a>
                        <a href="/steps-to-compensation/">
                            <div className="menu-wrapper-container">
                                <div className="header-menu-item" id="steps-to-compensation-menu-item">
                                    Steps to Get Compensation
                                </div>
                            </div>
                        </a>
                        <a className="mobile-begin-claim-btn" href="/free-case-review/">
                            <p>Begin Your Claim</p>
                        </a>

                        <a className="begin-claim-btn" href="/free-case-review/">
                            <div className="menu-wrapper-container">
                                <p className="begin-claim-btn-content">Begin Your Claim</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;