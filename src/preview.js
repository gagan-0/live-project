import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";


const FinalPreview =() =>{
    let basicdata = useSelector( state=>state.MyBasic );
    let contactdata = useSelector( state=>state.MyContact );
    let educationdata = useSelector( state=>state.MyEducation );
    let skilldata = useSelector( state=>state.MySkill );
    let projectdata = useSelector( state=>state.MyProject );
    let experiencedata = useSelector( state=>state.MyExperience );

    const save1 =() =>{
        let mydata = {
            "basic": basicdata,
            "contact": contactdata,
            "education": educationdata,
            "skill": skilldata,
            "project": projectdata,
            "experience": experiencedata
        }
        let url = "http://localhost:1234/userapi"
        let postdata ={
            headers :{'content-type':'application/json'},
            method:'post',
            body:JSON.stringify(mydata)
        }

        fetch(url, postdata)
        .then(response=>response.json())
        .then(info=>{
            swal ("Details Submitted", "Your details are submitted", "success")
            
            setTimeout(()=>{window.location.reload()}, 3000);   //it refresh the page
        })

    }

    const save =() =>{
        let mydata = {
            "basic": basicdata,
            "contact": contactdata,
            "education": educationdata,
            "skill": skilldata,
            "project": projectdata,
            "experience": experiencedata
        }
        let url = "https://cybotrix.com/liveapi/api/save"
        let postdata ={
            headers :{'content-type':'application/json'},
            method:'post',
            body:JSON.stringify({"details":mydata})
        }

        fetch(url, postdata)
        .then(response=>response.text())
        .then(info=>{
            swal ("Profile Submitted", "Your Profile submitted, we will contact you soon...", "success")
            
            setTimeout(()=>{window.location.reload()}, 3000);   //it refresh the page
        })

    }

    return(
            
        <div className="container mt-4">
            <div className=" mb-4 text-center">
                <h1> Candidate Information </h1>
            </div>
            <div className="row">

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card card-header bg-info text-white"> Basic Details </div>
                        <div className="card card-body"> 
                            <table className="table">
                                <tbody>
                                <tr> <th> Full Name </th> <td> {basicdata.fullname} </td></tr>
                                <tr> <th> Gender </th> <td> {basicdata.gender} </td></tr>
                                <tr> <th> Date of Birth </th> <td> {basicdata.dob} </td></tr>
                                <tr> <th> Married </th> <td> {basicdata.married} </td></tr>
                                <tr> <th> Profile Status </th> <td> {basicdata.profilestatus} </td></tr>
                                <tr> <th>About Me: </th> <td>{basicdata.about} </td></tr>
                                </tbody>
                            </table> 
                        </div>
                        <div className=" card card-footer"> 
                        <Link to="/basic" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card card-header bg-info text-white"> Contact Details </div>
                        <div className="card card-body">
                        <table className="table">
                            <tbody>
                                <tr> <th> Mobile Number </th> <td> {contactdata.mobile} </td></tr>
                                <tr> <th> Email ID </th> <td> {contactdata.email} </td></tr>
                                <tr> <th> Local Address </th> <td> {contactdata.laddress} </td></tr>
                                <tr> <th> Permanent Address </th> <td> {contactdata.paddress} </td></tr>
                                <tr> <th> Refrence Address </th> <td> {contactdata.raddress} </td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card card-footer "> 
                        <Link to="/contact" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card card-header bg-info text-white"> Education Details </div>
                        <div className="card-body"> 
                        <table className="table">
                            <tbody>
                                <tr> <th> Highest Education </th> <td> {educationdata.heducation} </td></tr>
                                <tr> <th> Passing Year </th> <td> {educationdata.pyear} </td></tr>
                                <tr> <th> Grade/Persentage </th> <td> {educationdata.grade} </td></tr>
                                <tr> <th> Collage </th> <td> {educationdata.collage} </td></tr>
                                <tr> <th> City </th> <td> {educationdata.city} </td></tr>
                                </tbody>
                            </table> 
                        </div>
                        <div className="card card-footer "> 
                        <Link to="/education" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                         </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card card-header bg-info text-white"> Skill Details </div>
                        <div className="card card-body">
                        <table className="table">
                            <tbody>
                                <tr> <th> Skill </th> <td> {skilldata.skill} </td></tr>
                                </tbody>
                            </table> 
                        </div>
                        <div className="card card-footer "> 
                        <Link to="/skill" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                         </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card card-header bg-info text-white"> Project Details </div>
                        <div className="card card-body">
                        <table className="table">
                            <tbody>
                                <tr> <th> Project Name </th> <td> {projectdata.pname} </td></tr>
                                <tr> <th> Project Details </th> <td> {projectdata.pdetails} </td></tr>
                                <tr> <th> Technology </th> <td> {projectdata.technology} </td></tr>
                                <tr> <th> Live Project </th> <td> {projectdata.lproject} </td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card card-footer "> 
                        <Link to="/project" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                         </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card card-header bg-info text-white"> Experience Details </div>
                        <div className="card card-body">
                        <table className="table">
                            <tbody>
                                <tr> <th> Total Experience : </th> <td> {experiencedata.texperience} </td></tr>
                                <tr> <th>About Experience : </th><td> {experiencedata.aexperience} </td></tr>
                                </tbody>
                            </table> 
                        </div>
                        <div className="card card-footer "> 
                        <Link to="/experience" className="text-decoration"> 
                        <i className="fa fa-edit"></i>Edit</Link>
                         </div>
                    </div>
                </div>

                <div className="col-xl-12 text-center">
                    <button className="btn btn-danger" onClick={save}> Submit My Details 
                        <i className="fa fa-arrow-right"></i>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FinalPreview;