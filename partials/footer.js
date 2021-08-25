const Footer = () => {
    return( 
        <footer>
            <div class='footer-container'>
                <div class='top-footer'>
                    <div class='footer-flexbox-mobile-item'>
                        <span class='logo-footer-main'><img class="footer-logo-img" src="https://media-truck-injury-site.s3.amazonaws.com/dev/homepage/18wheeler-logo-white-updated.svg" alt="18-wheeler logo white version" /></span>
                        <span class='logo-footer-secondary'>(844) 500-0844</span>
                    </div>
                    <div class='footer-flexbox-desktop-item'>
                        <a href='/what-caused-your-accident/'>What Caused Your Accident?</a>
                        <a href='/dangers-of-18-wheelers/'>The Dangers of 18-Wheelers</a>
                        <a href='/steps-to-compensation/'>Steps to Get Compensation</a>
                    </div>
                </div>
                <div class='bottom-footer'>
                    <div class='footer-site-identity'>
                        18 Wheeler Injury Law Firm
                    </div>
                    <div class='footer-site-identity'>
                        All Right Reserved
                    </div>
                    <div class='footer-site-identity'>
                        <a href='/privacy-policy/'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;