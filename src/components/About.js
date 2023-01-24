function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              X-Brook Tech LLC is a company based in Las Vegas NV to provide software and data service
              for new materials design and discovery. Some notable examples includes: 
              <ul>
               <li>Software to facilitate materials simulation (<a href="https://pyxtal.readthedocs.io/en/latest/?badge=latest">Example</a>)</li>
               <li>Materials database development and services (<a href="https://tpdb.physics.unlv.edu">Example</a>)</li>
               <li>Functional materials screening <a href="https://www.cell.com/matter/fulltext/S2590-2385(19)30069-4">Example</a></li>
               </ul>
              We also provide consulting on materials characterization, computing and analysis. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
