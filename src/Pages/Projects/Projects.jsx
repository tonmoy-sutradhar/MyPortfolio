import img from "../../assets/gadget.jpg";

const Projects = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center bg-slate-900 text-white pt-10">
        Project's
      </h1>
      <div className="grid md:grid-cols-3 gap-5 bg-slate-900 pt-10 px-10">
        {" "}
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/YQPL1sG/Screenshot-1070.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ChoiceGenie</h2>
            <p>
              This is basically product recommendation system website. User can
              recommend a product.
            </p>
            <div className="card-actions justify-start">
              <a href="https://github.com/tonmoy-sutradhar" target="blank">
                {" "}
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://product-recommendation-s-a2da4.web.app/"
                target="blank"
              >
                <button className="btn btn-primary">Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gadget Store</h2>
            <p>
              This is a Gadget Store system website. User can purches a product
              from this site.
            </p>
            <div className="card-actions justify-start">
              <a href="https://github.com/tonmoy-sutradhar" target="blank">
                {" "}
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a href="https://yyy-6.netlify.app/" target="blank">
                <button className="btn btn-primary">Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co.com/rkpVK4h/Screenshot-1057.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sports Equipment Store</h2>
            <p>
              This is basically Sports Equipment Store system website. User can
              purches a product from this site.
            </p>
            <div className="card-actions justify-start">
              <a href="https://github.com/tonmoy-sutradhar" target="blank">
                {" "}
                <button className="btn btn-primary">GitHub</button>
              </a>
              <a
                href="https://sports-equipment-store-7388b.web.app/"
                target="blank"
              >
                <button className="btn btn-primary">Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
