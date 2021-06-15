import React from "react";
const Accessories = () => {
  return (
    <>
      <div className="blogcover">
        <h1>Accessories</h1>
        <img
          className="img-responsive "
          src="../../task_1/blog-cover.jpg"
          alt="Clothes"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
              <img
                id="imgsize"
                src="../../task_1/a3.jpg"
                alt="Accessories"
                width="100%"
              />
              <div className="centertext">Black Watch (Male, Female)</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
              <img
                id="imgsize"
                src="../../task_1/a4.jpg"
                alt="Accessories"
                width="100%"
              />
              <div className="centertext">Brown Watch (Male, Female)</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
              <img
                id="imgsize"
                src="../../task_1/a5.jpg"
                alt="Accessories"
                width="100%"
              />
              <div className="centertext">classNameic Watch (Male, Female)</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
              <img
                id="imgsize"
                src="../../task_1/a1.jpg"
                alt="Accessories"
                width="100%"
              />
              <div className="centertext">black Leather Bag</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail shadow p-2 mb-5 bg-white rounded">
              <img
                id="imgsize"
                src="../../task_1/a2.jpg"
                alt="Accessories"
                width="100%"
              />
              <div className="centertext">Bagpack</div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center bg-light">
          <button type="button" id="btn" className="btn btn-primary">
            Load more
          </button>
        </div>
      </div>
    </>
  );
};

export default Accessories;
