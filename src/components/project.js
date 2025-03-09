import LeftNav from "../navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import swal from "sweetalert";

const Project = () =>{
    let projectdata = useSelector( state=>state.MyProject );
    let[pname, setPname] = useState(projectdata.pname);
    let[pdetails, setPdetails] = useState(projectdata.pdetails);
    let[technology, setTechnology] = useState(projectdata.technology);
    let[lproject, setLproject] = useState(projectdata.lproject);
    
    let dispatch = useDispatch();
    const save =() =>{
        let userinfo ={
            "pname":"",
            "pdetails":"",
            "technology":"",
            "lproject":""
        };

        let mydata = {type:"project", info:userinfo};
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
                        <div className="card-header bg-info text-white"> <i class="fa-solid fa-user-graduate"></i> Project Imformation </div>
                        <div className="card-body "> 
                            
                                
                                <div className="form-group row">

                                    <div className="mb-4">
                                    <label className="mb-2">Project Name </label>
                                        <input type="text" placeholder="Project Name" className="form-control"
                                         onChange={obj=>setPname(obj.target.value)} value={pname}/>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2"> Project Details</label>
                                    <textarea  placeholder="Project Details" className="form-control"
                                     onChange={obj=>setPdetails(obj.target.value)} value={pdetails}></textarea>
                                    </div>

                                    <div className="mb-4">
                                    <label className="mb-2" > Technology </label>
                                    <textarea  placeholder="Technology" className="form-control"
                                     onChange={obj=>setTechnology(obj.target.value)} value={technology}></textarea>

                                    </div>

                                    <div className="mb-4 ">
                                    <label className="mb-2"> Live Project Url</label>
                                    <input type="text" placeholder="Url" className="form-control"
                                     onChange={obj=>setLproject(obj.target.value)} value={lproject} />

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

export default Project;
