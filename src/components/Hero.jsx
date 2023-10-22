function Hero() {
  return (
    <>
      <div
        id="about"
        className="flex flex-col gap-6  items-center justify-center	h-screen w-screen text-white bg-black "
      >
        <h1 className="text-[5rem] mb-6">React.js Developer</h1>
        <div className="flex  gap-6 items-center w-[50vw]">
          <p className="w-fit">
            Merhaba, ben Mert DANIS! Bir yıldır profesyonel olarak ön-uç
            geliştiriciliği yapıyorum. Projelerimde genellikle React.js ile
            birlikte Tailwind.CSS kullanıyorum. Bu sayfada şu ana kadar
            geliştirdiğim projelerden bazılarını bulacaksınız.
          </p>
          <div className="mt-6">
            <img
              className="h-[600px] w-[500px] rounded-2xl"
              src="/public/assets/imgs/a13ca992-d349-49a0-93ad-8c092b0b2d15.jfif"
              alt="m.d."
            />
            <div className="flex gap-6 justify-center mt-6">
              <a target="blank" href="https://www.linkedin.com/in/mert-danis/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/mertdanis">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-auto  gap-6   ">
          <p className="border-r-2 pr-3 border-black ">
            Kullandığım teknolojiler
          </p>
          <ul className="flex gap-6  p-3 text-4xl ">
            <li>
              <i className="fa-brands fa-html5"></i>
            </li>
            <li>
              <i className="fa-brands fa-css3-alt"></i>
            </li>
            <li>
              <i className="fa-brands fa-js"></i>
            </li>
            <li>
              <i className="fa-brands fa-react"></i>
            </li>
            <li>
              <i className="fa-brands fa-bootstrap"></i>
            </li>
            <li>
              <i className="fa-brands fa-sass"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hero;
