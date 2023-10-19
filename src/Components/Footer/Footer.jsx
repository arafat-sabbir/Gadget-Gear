const Footer = () => {
    return (

             <div className="bg-slate-200">
                <footer className="footer  p-10 container mx-auto ">
                <aside>
                    <img src="https://i.ibb.co/cX1h7zZ/2358045-removebg.png" className="w-22  h-14" alt="" />
                    <p>GearGlade Ltd.<br />Providing reliable Gadget since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
             </div>
           
    );
};

export default Footer;