function Hero() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen	">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-6xl text-center">React.js Developer</h2>
          <p className="w-5/6">
            Merhaba, ben Mert DANIS! Bir yıldır profesyonel olarak ön-uç
            geliştiriciliği yapıyorum ve projelerimde React.js ile birlikte
            Tailwind.CSS kullanıyorum. Her zaman daha kompleks web uygulamaları
            geliştirmek için çalışıyorum.
          </p>
          <div className="flex gap-6 justify-center">
            <a target="blank" href="https://www.linkedin.com/in/mert-danis/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/mertdanis">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <img
          className="h-[300px] rounded-2xl"
          src="/public/assets/imgs/239cd19a-1422-4788-b7ae-eb295a4d68d1.jpg"
          alt="m.d."
        />
      </div>

      <div className="flex items-center justify-center gap-6 border-b-2 mb-6 w-full">
        <p className="border-r-2 pr-3 border-black">Kullandığım teknolojiler</p>
        <ul className="flex gap-6  p-3">
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
    </>
  );
}

export default Hero;
