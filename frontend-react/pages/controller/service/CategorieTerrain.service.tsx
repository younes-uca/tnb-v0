import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {CategorieTerrainDto} from '/pages/controller/model/CategorieTerrain.model';
import {CategorieTerrainCriteria} from "/pages/controller/criteria/CategorieTerrainCriteria.model";



export const CategorieTerrainService = {

   getList(): Promise<AxiosResponse<CategorieTerrainDto[]>> {
     return axios.get(API_URL + 'categorieTerrain/');
   },

   save(item: CategorieTerrainDto): Promise<AxiosResponse<CategorieTerrainDto>> {
     return axios.post(API_URL + 'categorieTerrain/', item);
   },

   update(item: CategorieTerrainDto): Promise<AxiosResponse<CategorieTerrainDto>> {
      return axios.put(API_URL + 'categorieTerrain/', item);
   },

   delete(id: number): Promise<AxiosResponse<CategorieTerrainDto>> {
      return axios.delete(API_URL + 'categorieTerrain/id/'+ id);
   },

   deleteList(items: CategorieTerrainDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'categorieTerrain/multiple', items);
   },

   findPaginatedByCriteria(criteria:CategorieTerrainCriteria):Promise<AxiosResponse<PaginatedList<CategorieTerrainDto>>> {
     return axios.post<PaginatedList<CategorieTerrainDto>>(API_URL + 'categorieTerrain/find-paginated-by-criteria', criteria);
   }
};

