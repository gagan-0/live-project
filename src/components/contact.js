import LeftNav from "../navigation";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Contact= () =>{
    let contactdata = useSelector( state=>state.MyContact );
    let[mobile, setMobile] = useState(contactdata.mobile);
    let[email, setEmail] = useState(contactdata.email);
    let[laddress, setLaddress] = useState(contactdata.laddress);
    let[paddress, setPaddress] = useState(contactdata.paddress);
    let[raddress, setRaddress] = useState(contactdata.raddress);

    let dispatch = useDispatch();
    const save =() =>{
        let contactinfo ={
           "mobile":mobile,
            "email":email,
            "laddress":laddress,
            "paddress":paddress,
            "raddress":raddress
        };

        let mydata = {type:"contact", info:contactinfo};
        dispatch(mydata);
        alert("Data Saved Successfully");
    }

    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
                <LeftNav/>
            </div>
            <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa fa-headset" aria-hidden="true"></i> Contact Imformation </div>
                        <div className="card-body "> 
                            
                                
                                <div className="form-group row">

                                    <div className="mb-4">
                                    <label className="mb-2"> Mobile Number </label>
                                        <input type="number" placeholder="Mobile No" className="form-control"
                                        onChange={obj=>setMobile(obj.target.value)} value={mobile}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2"> Email Id</label>
                                        <input type="email" placeholder="Example@gmail.com" className="form-control"
                                        onChange={obj=>setEmail(obj.target.value)} value={email}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2" > Local Address</label>
                                    <textarea placeholder="Local Address" className="form-control" rows="3" cols="3"  
                                    onChange={obj=>setLaddress(obj.target.value)} value={laddress}></textarea>
                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Permanent Address</label>
                                    <textarea placeholder="Permanent Address" className="form-control" rows="3" cols="3" 
                                    onChange={obj=>setPaddress(obj.target.value)} value={paddress} ></textarea>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Any Refrence Address and Contact</label>
                                    <textarea placeholder="Other Contact" className="form-control" rows="3" cols="3" 
                                    onChange={obj=>setRaddress(obj.target.value)} value={raddress} ></textarea>

                                    </div>

                                    <div class="text-center pb-2">
                                      <button class="btn btn-danger me-3" onClick={save}> Save & Contiue </button>
                                    </div>



                                </div>

                            
                        </div>
                        
                    </div>
                </div>
            <div className="col-xl-3 mb-4"></div>
        </div>
    </div>
        )
    
}

export default Contact;
