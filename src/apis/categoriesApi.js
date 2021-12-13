import axiosClient from "./axiosClient"

const CategoriestApi = {

  getAll: (params) => {
    const url = '/products/categories'
    return axiosClient.get(url, {params})
  }

}

export default CategoriestApi