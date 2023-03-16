import axiosClient from "../axiosClient";
import env from "@/env";

export function searchedMovies({ commit }, keyword){
    axiosClient.get(`?apikey=${env.apikey}&s=${keyword}`)
    .then(({data}) => {
        commit('setSearchedMovies', data.Search)
    })
}