class ApiResponse {
    constructor(stastusCode,data,message="success"){
        this.stastusCode=stastusCode
        this.data=data
        this.message=message
        this.success=stastusCode<400
    }
}