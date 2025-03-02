import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const FinalPreview =() =>{
    let basicdata = useSelector( state=>state.MyBasic );
    let contactdata = useSelector( state=>state.MyContact );
    let educationdata = useSelector( state=>state.MyEducation );
    let skilldata = useSelector( state=>state.MySkill );
    let projectdata = useSelector( state=>state.MyProject );
    let experiencedata = useSelector( state=>state.MyExperience );

    return(
            
        <div className="container mt-4">
            <div className=" mb-4 text-center">
                <h1> Candidate Information </h1>
            </div>
            <div className="row">

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Basic Details </div>
                        <div className="card-body"> 
                            <table>
                                <tr> <td> Full Name </td> <td> {basicdata.fullname} </td></tr>
                                <tr> <td> Gender </td> <td> {basicdata.gender} </td></tr>
                                <tr> <td> Date of Birth </td> <td> {basicdata.dob} </td></tr>
                                <tr> <td> Married </td> <td> {basicdata.married} </td></tr>
                                <tr> <td> Profile Status </td> <td> {basicdata.profilestatus} </td></tr>
                                <tr> <td colSpan={2}> <b> About Me: </b> {basicdata.about} </td></tr>
                            </table> 
                        </div>
                        <div className="card-footer"> 
                        <Link to="/basic" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Contact Details </div>
                        <div className="card-body">
                        <table>
                                <tr> <td> Mobile Number </td> <td> {contactdata.mobile} </td></tr>
                                <tr> <td> Email ID </td> <td> {contactdata.email} </td></tr>
                                <tr> <td> Local Address </td> <td> {contactdata.laddress} </td></tr>
                                <tr> <td> Permanent Address </td> <td> {contactdata.paddress} </td></tr>
                                <tr> <td colSpan={2}> Refrence Address </td> <td> {contactdata.raddress} </td></tr>
                                
                            </table>
                        </div>
                        <div className="card-footer "> 
                        <Link to="/contact" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Education Details </div>
                        <div className="card-body"> 
                        <table>
                                <tr> <td> Highest Education </td> <td> {educationdata.heducation} </td></tr>
                                <tr> <td> Passing Year </td> <td> {educationdata.pyear} </td></tr>
                                <tr> <td> Grade/Persentage </td> <td> {educationdata.grade} </td></tr>
                                <tr> <td> Collage </td> <td> {educationdata.collage} </td></tr>
                                <tr> <td colSpan={2}> City </td> <td> {educationdata.city} </td></tr>
                                
                            </table> 
                        </div>
                        <div className="card-footer "> 
                        <Link to="/education" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                         </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Skill Details </div>
                        <div className="card-body">
                        <table>
                                <tr> <td colSpan={2}> Skill </td> <td> {skilldata.skill} </td></tr>
                                
                            </table> 
                        </div>
                        <div className="card-footer "> 
                        <Link to="/skill" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                         </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Project Details </div>
                        <div className="card-body">
                        <table>
                                <tr> <td> Project Name </td> <td> {projectdata.pname} </td></tr>
                                <tr> <td> Project Details </td> <td> {projectdata.pdetails} </td></tr>
                                <tr> <td> Technology </td> <td> {projectdata.technology} </td></tr>
                                <tr> <td> Live Project </td> <td> {projectdata.lproject} </td></tr>
                            </table>
                        </div>
                        <div className="card-footer "> 
                        <Link to="/project" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                         </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"> Experience Details </div>
                        <div className="card-body">
                        <table>
                                <tr> <td> Total Experience : </td> <td> {experiencedata.texperience} </td></tr>
                                <tr> <td colSpan={2}> <b> About Experience : </b> {experiencedata.aexperience} </td></tr>
                            </table> 
                        </div>
                        <div className="card-footer "> 
                        <Link to="/experience" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                         </div>
                    </div>
                </div>

                <div className="col-xl-12 text-center">
                    <button className="btn btn-danger"> Submit My Details 
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FinalPreview;