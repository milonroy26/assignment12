const About = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-6">
          <div className="indicator w-auto">
            <span className="indicator-item indicator-center indicator-middle badge badge-secondary">
              Top News
            </span>
            <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/0061-880x586.jpg" />
          </div>
        </div>
        <div className="col-span-6">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6">
              <div className="indicator w-auto">
                <span className="indicator-item indicator-center indicator-middle badge badge-secondary">
                  Top News
                </span>
                <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/008-424x282.jpg" />
              </div>
            </div>
            <div className="col-span-6">
              <div className="indicator w-auto">
                <span className="indicator-item indicator-center indicator-middle badge badge-secondary">
                  Top News
                </span>
                <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/010-424x282.jpg" />
              </div>
            </div>
            <div className="col-span-6">
              <div className="indicator w-auto">
                <span className="indicator-item indicator-center indicator-middle badge badge-secondary">
                  Top News
                </span>
                <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/006-424x282.jpg" />
              </div>
            </div>
            <div className="col-span-6">
              <div className="indicator w-auto">
                <span className="indicator-item indicator-center indicator-middle badge badge-secondary">
                  Top News
                </span>
                <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/005-424x282.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3 pb-8">
        <div className="col-span-6">
          <h1 className="text-center font-bold text-purple-600 text-xl mb-2">
            HOT TOPIC
          </h1>
          <div className="h-96 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
              <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/0031-424x282.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/001-424x282.jpg" />
            </div>

            <div className="carousel-item h-full">
              <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/Auto-003-424x282.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/11/Auto-003-424x282.jpg" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://absolute.cactusthemes.com/wp-content/uploads/2014/10/015-424x282.jpg" />
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="hero-image  w-[100%]  h-[420px]">
            <div className="hero-text space-y-4">
              <h1 className="text-2xl font-bold">MILON CHANDRO</h1>
              <p>I'm a Webdeveloper</p>
              <button className="btn btn-primary">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
