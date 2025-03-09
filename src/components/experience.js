import LeftNav from "../navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import swal from "sweetalert";

const Experience = () =>{
    let experiencedata = useSelector( state=>state.MyExperience );
    let[texperience, setTexperience] = useState(experiencedata.texperience);
    let[aexperience, setAexperience] = useState(experiencedata.aexperience);

    let dispatch = useDispatch();
    const save =() =>{
        let userinfo ={
            "texperience":texperience,
            "aexperience":aexperience
        };

        let mydata = {type:"experience", info:userinfo};
        dispatch(mydata);
        swal("Save Success","Data Saved Successfully", "success");
    }

    return(
    <div className="container mt-4">
        <div className="row">
            <div className="col-xl-3 mb-4">
                <LeftNav/>
            </div>
            <div className="col-xl-6 mb-4 ">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Experience Imformation </div>
                        <div className="card-body "> 
                            
                                
                                <div className="form-group row">
                                    <div className="mb-4 ">
                                    <label className="mb-2">Total Experience</label>
                                    <input  type="text" placeholder="Total Experience" className="form-control"
                                     onChange={obj=>setTexperience(obj.target.value)} value={texperience}/>
                                    </div>
                                    <div className="mb-4 ">
                                    <label className="mb-2">About Experience</label>
                                    <textarea  placeholder="About Experience" className="form-control" rows="3" cols="3" maxlength="400" 
                                     onChange={obj=>setAexperience(obj.target.value)} value={aexperience} ></textarea>
                                    </div>

                                    <div class="text-center pb-2">
                                      <button class="btn btn-danger me-3" onClick={save}> Save </button>
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

export default Experience;
