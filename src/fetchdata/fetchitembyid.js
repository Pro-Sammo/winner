
export async function fetchItembyIdData (params){
    const response = await fetch(`/api/v1/admin/getitembyid/${params.id}`)
    const result =await response.json();
    return result
}
