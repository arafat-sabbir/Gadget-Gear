import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter,BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
   <div className='bg-neutral'>
     <footer className="footer p-10 container mx-auto  text-neutral-content">
    <aside>
      <img src="https://i.ibb.co/cX1h7zZ/2358045-removebg.png" className='h-18 w-20' alt="" />
      <p>GearGlader Gadget Ltd.<br/>Providing reliable Gadget since 1996</p>
    </aside> 
    <nav>
      <header className="footer-title ">Follow Us On </header> 
      <div className="grid grid-flow-col gap-4 text-2xl">
        <a><FaFacebookF></FaFacebookF></a> 
        <a><BsTwitter></BsTwitter></a> 
        <a><BsInstagram></BsInstagram></a>
      </div>
    </nav>
  </footer>
   </div>
  );
}

export default Footer;
