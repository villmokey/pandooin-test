import { EmailIcon, FacebookIcon, InstagramIcon } from "../atoms/Icon";

export const Footer = () => {
  return (  
    <div className="w-full bg-[#004040] mt-10 text-white">
      <div className="container flex flex-col lg:flex-row xl:flex-row justify-between py-5">
        <h4 className="text-center lg:text-left xl:text-left text-[14px]">© 2023 Zamrood by PT Teknologi Pandu Wisata</h4>
        <div className="flex gap-3 justify-center lg:justify-end xl:justify-end">
          <FacebookIcon />
          <InstagramIcon />
          <EmailIcon />
        </div>
      </div>
    </div>
  );
}
