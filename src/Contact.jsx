import React,{useState} from "react";

export default function Contact(){
   
    const [data,setData] = useState({
        fullName : "",
        phone : "",
        email : "",
        mssg : ""
    })

    const InputEvent = (event) =>{
        const {name,value} = event.target;
        setData(function(prevState){
            return {
                ...prevState,
                [name] : value,
            }
        })
    }

   const formSubmit = (event) =>{
        event.preventDefault();
        alert(`${data.fullName} ${data.phone} ${data.email} ${data.mssg}`);
   }
   
   
    return(
    <>
        <div className="my-5">
            <div className="text-center">Contact US</div>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}> 
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Full Name</label>
                            <input type="text" className="form-control" name="fullName" value={data.fullName} onChange={InputEvent} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Phone No.</label>
                            <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Email Address</label>
                            <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Message</label>
                            <textarea  className="form-control" name="mssg" value={data.mssg} onChange={InputEvent} required></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}