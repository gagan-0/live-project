const MyProject =(state, action) =>{
    let data ={
        "pname":"",
        "pdetails":"",
        "technology":"",
        "lproject":""
    };

    let projectData =Object.assign(data, state);

    if(action.type === "project"){
        projectData= action.info;
    }

    return projectData;

}

export default MyProject;