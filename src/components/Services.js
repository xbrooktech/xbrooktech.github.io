import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Software" img="card1.png" 
                         text="Develop the software platform to automate high-throughput materials screening." />
                    </div>
                    <div className="col-md-4 mb-2">
                         <Card title="Data Services" img="card2.png" 
                         text="Database solution to collect, analyze and process big digital data." />
                    </div>
                    <div className="col-md-4 mb-2">
                         <Card title="Virtual Screening" img="card3.png" 
                         text="Dedicated materials screening upon the user's customized request." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
